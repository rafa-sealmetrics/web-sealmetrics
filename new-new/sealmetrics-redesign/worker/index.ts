/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  N8N_WEBFORM_LEAD_URL?: string;
  N8N_DEMO_ACCESS_URL?: string;
  N8N_CAREERS_URL?: string;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

type FormType = "demo" | "demo_access" | "audit" | "careers" | "calculator" | "growth";

const FORM_TYPES = new Set<FormType>(["demo", "demo_access", "audit", "careers", "calculator", "growth"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PERSONAL_EMAIL_DOMAINS = new Set(["gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com", "yahoo.com", "icloud.com", "proton.me", "protonmail.com"]);

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function validOrigin(request: Request) {
  const origin = request.headers.get("Origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

function endpointFor(type: FormType, env: Env) {
  if (type === "demo_access") return env.N8N_DEMO_ACCESS_URL;
  if (type === "careers") return env.N8N_CAREERS_URL;
  return env.N8N_WEBFORM_LEAD_URL;
}

function validUrl(value: unknown) {
  if (typeof value !== "string" || value.length > 500) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function validatePayload(type: FormType, payload: Record<string, unknown>) {
  if (type === "careers") {
    const links = Array.isArray(payload.other_links) ? payload.other_links : [];
    if (typeof payload.team !== "string" || !payload.team.trim() || payload.team.length > 80) return false;
    if (!payload.linkedin && !payload.github && links.length === 0) return false;
    if (payload.linkedin && !validUrl(payload.linkedin)) return false;
    if (payload.github && !validUrl(payload.github)) return false;
    return links.length <= 4 && links.every(validUrl);
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) return false;

  if (type === "calculator" || type === "growth") return true;
  if (!(typeof payload.name === "string" && payload.name.trim().length > 1 && payload.name.length <= 160 && validUrl(payload.website) && payload.gdpr === true)) return false;
  if (type === "demo_access") {
    const emailDomain = email.toLowerCase().split("@")[1];
    const webDomain = new URL(String(payload.website)).hostname.toLowerCase().replace(/^www\./, "");
    if (PERSONAL_EMAIL_DOMAINS.has(emailDomain) || !(emailDomain === webDomain || emailDomain.endsWith(`.${webDomain}`) || webDomain.endsWith(`.${emailDomain}`))) return false;
  }
  return true;
}

async function handleForm(request: Request, env: Env) {
  if (request.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405);
  if (!validOrigin(request)) return json({ ok: false, error: "origin_not_allowed" }, 403);
  if (!(request.headers.get("Content-Type") || "").toLowerCase().includes("application/json")) return json({ ok: false, error: "invalid_content_type" }, 415);
  const declaredSize = Number(request.headers.get("Content-Length") || "0");
  if (declaredSize > 65536) return json({ ok: false, error: "payload_too_large" }, 413);

  let body: unknown;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > 65536) return json({ ok: false, error: "payload_too_large" }, 413);
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  if (!isRecord(body)) return json({ ok: false, error: "invalid_request" }, 400);
  if (typeof body.company_fax === "string" && body.company_fax.trim()) return json({ ok: true }, 200);
  const type = body.type;
  if (typeof type !== "string" || !FORM_TYPES.has(type as FormType) || !isRecord(body.payload)) return json({ ok: false, error: "invalid_request" }, 400);
  if (!validatePayload(type as FormType, body.payload)) return json({ ok: false, error: "invalid_fields" }, 400);

  const endpoint = endpointFor(type as FormType, env);
  if (!endpoint) return json({ ok: false, error: "service_unavailable" }, 503);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "User-Agent": "SealMetrics-Sites-Forms/1.0" },
      body: JSON.stringify(body.payload),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) return json({ ok: false, error: "upstream_rejected" }, 502);
    return json({ ok: true });
  } catch {
    return json({ ok: false, error: "upstream_unavailable" }, 502);
  }
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/forms" || url.pathname === "/api/forms/") {
      return handleForm(request, env);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
