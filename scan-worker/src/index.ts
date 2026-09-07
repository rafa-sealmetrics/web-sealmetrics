// Entry point del Worker. Orquesta:
//   validate body → CORS → URL guard → Turnstile → rate-limit → fetch HTML
//   → detectar señales → calcular riesgo → responder → ingest (fire-and-forget)

import { detectSignals } from "./detections";
import { fetchHtml } from "./fetch-html";
import { computeRisk } from "./grading";
import { sendIngest, type IngestPayload } from "./ingest";
import { checkRateLimit } from "./rate-limit";
import { verifyTurnstile } from "./turnstile";
import type { Env, ScanError, ScanResponse } from "./types";
import { guardUrl } from "./url-guard";

interface ScanRequestBody {
  url?: unknown;
  adSpend?: unknown;
  email?: unknown;
  turnstileToken?: unknown;
}

function jsonResponse(body: unknown, status: number, cors: Headers): Response {
  const headers = new Headers(cors);
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Cache-Control", "no-store");
  return new Response(JSON.stringify(body), { status, headers });
}

function corsHeaders(origin: string | null, allowedOrigins: string[]): Headers {
  const headers = new Headers();
  const allowed = origin && allowedOrigins.includes(origin) ? origin : "";
  if (allowed) {
    headers.set("Access-Control-Allow-Origin", allowed);
    headers.set("Vary", "Origin");
  }
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Max-Age", "86400");
  return headers;
}

function err(code: ScanError["code"], message: string): ScanError {
  return { ok: false, error: message, code };
}

function parseAdSpend(raw: unknown): number {
  const n = typeof raw === "number" ? raw : Number(raw);
  if (!Number.isFinite(n)) return 0;
  if (n < 0) return 0;
  // Tope superior defensivo: no permitimos que un input gigante distorsione el cálculo.
  if (n > 10_000_000) return 10_000_000;
  return n;
}

function isLikelyEmail(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const v = value.trim();
  if (v.length === 0 || v.length > 254) return false;
  // Validación deliberadamente laxa: no queremos rechazar emails válidos raros.
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const allowedOrigins = env.ALLOWED_ORIGINS.split(",").map((s) => s.trim()).filter(Boolean);
    const origin = request.headers.get("Origin");
    const cors = corsHeaders(origin, allowedOrigins);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return jsonResponse({ ok: true, service: "scan-worker" }, 200, cors);
    }

    if (request.method !== "POST" || url.pathname !== "/api/scan") {
      return jsonResponse(err("bad_request", "Not found"), 404, cors);
    }

    if (!origin || !allowedOrigins.includes(origin)) {
      return jsonResponse(err("bad_request", "Origin not allowed"), 403, cors);
    }

    let body: ScanRequestBody;
    try {
      body = (await request.json()) as ScanRequestBody;
    } catch {
      return jsonResponse(err("bad_request", "Invalid JSON body"), 400, cors);
    }

    if (typeof body.url !== "string") {
      return jsonResponse(err("bad_request", "Missing url"), 400, cors);
    }
    if (typeof body.turnstileToken !== "string" || !body.turnstileToken) {
      return jsonResponse(err("turnstile_failed", "Missing turnstile token"), 400, cors);
    }

    const guard = guardUrl(body.url);
    if (!guard.ok) {
      return jsonResponse(
        err(guard.reason === "invalid_url" ? "invalid_url" : "blocked_host", guard.detail),
        400,
        cors,
      );
    }

    const adSpend = parseAdSpend(body.adSpend);
    const email = isLikelyEmail(body.email) ? (body.email as string).trim().toLowerCase() : null;

    const remoteIp = request.headers.get("CF-Connecting-IP") ?? undefined;
    const turnstileOk = await verifyTurnstile(body.turnstileToken, env.TURNSTILE_SECRET, remoteIp);
    if (!turnstileOk) {
      return jsonResponse(err("turnstile_failed", "Turnstile verification failed"), 403, cors);
    }

    const rateLimit = await checkRateLimit({
      kv: env.RATE_LIMIT,
      hostname: guard.url.hostname,
      withEmail: email !== null,
      capNoEmail: Number(env.RATE_LIMIT_PER_HOSTNAME_NO_EMAIL) || 1,
      capWithEmail: Number(env.RATE_LIMIT_PER_HOSTNAME_WITH_EMAIL) || 10,
      ttlSeconds: Number(env.RATE_LIMIT_TTL_SECONDS) || 3600,
    });

    if (!rateLimit.allowed) {
      const headers = new Headers(cors);
      headers.set("Retry-After", String(rateLimit.resetSeconds));
      headers.set("Content-Type", "application/json; charset=utf-8");
      return new Response(
        JSON.stringify(
          err(
            "rate_limited",
            "This domain was recently scanned. Try again in a bit, or include your email to raise the limit.",
          ),
        ),
        { status: 429, headers },
      );
    }

    const fetched = await fetchHtml(guard.url, {
      timeoutMs: Number(env.FETCH_TIMEOUT_MS) || 6000,
      maxBytes: Number(env.MAX_HTML_BYTES) || 524_288,
    });

    if (!fetched.ok) {
      const message =
        fetched.reason === "timeout"
          ? "The site took too long to respond."
          : fetched.reason === "non_html"
            ? "The URL did not return an HTML page."
            : fetched.reason === "http_error"
              ? `The site returned ${fetched.status}.`
              : "Could not fetch the site.";
      return jsonResponse(err("fetch_failed", message), 502, cors);
    }

    const detections = detectSignals(fetched.html);
    const risk = computeRisk(detections, adSpend);

    const response: ScanResponse = {
      ok: true,
      scannedUrl: fetched.finalUrl,
      detections,
      risk,
    };

    // Ingest fire-and-forget: no bloqueamos la respuesta al cliente.
    const payload: IngestPayload = {
      scannedUrl: fetched.finalUrl,
      hostname: guard.url.hostname,
      adSpend,
      email,
      detections,
      risk,
      userAgent: request.headers.get("User-Agent"),
      referer: request.headers.get("Referer"),
      scannedAt: new Date().toISOString(),
    };
    ctx.waitUntil(
      sendIngest({ url: env.INGEST_URL, token: env.INGEST_TOKEN, payload }),
    );

    return jsonResponse(response, 200, cors);
  },
} satisfies ExportedHandler<Env>;
