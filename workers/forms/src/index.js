const FORM_TYPES = new Set([
  "demo",
  "demo_access",
  "audit",
  "careers",
  "calculator",
  "growth",
]);

const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "yahoo.com",
  "icloud.com",
  "proton.me",
  "protonmail.com",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 64 * 1024;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function csvSet(value) {
  return new Set(
    String(value || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  );
}

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function corsHeaders(origin, env) {
  const headers = {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
  };
  if (origin && csvSet(env.ALLOWED_ORIGINS).has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type";
    headers.Vary = "Origin";
  }
  return headers;
}

function json(request, env, data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders(request.headers.get("Origin"), env),
  });
}

function originAllowed(request, env) {
  const origin = request.headers.get("Origin");
  return Boolean(origin) && csvSet(env.ALLOWED_ORIGINS).has(origin);
}

function validUrl(value) {
  if (typeof value !== "string" || value.length > 500) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function validatePayload(type, payload) {
  if (type === "careers") {
    const links = Array.isArray(payload.other_links) ? payload.other_links : [];
    if (
      typeof payload.team !== "string" ||
      !payload.team.trim() ||
      payload.team.length > 80
    ) {
      return false;
    }
    if (!payload.linkedin && !payload.github && links.length === 0) return false;
    if (payload.linkedin && !validUrl(payload.linkedin)) return false;
    if (payload.github && !validUrl(payload.github)) return false;
    return links.length <= 6 && links.every(validUrl);
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) return false;
  if (type === "calculator" || type === "growth") return true;

  const websiteValue = payload.websiteRaw || payload.website;

  if (
    typeof payload.name !== "string" ||
    payload.name.trim().length < 2 ||
    payload.name.length > 160 ||
    !validUrl(websiteValue) ||
    ((type === "demo" || type === "demo_access") && payload.gdpr !== true)
  ) {
    return false;
  }

  if (type === "demo_access") {
    const emailDomain = email.toLowerCase().split("@")[1];
    const webDomain = new URL(websiteValue)
      .hostname.toLowerCase()
      .replace(/^www\./, "");
    if (
      PERSONAL_EMAIL_DOMAINS.has(emailDomain) ||
      !(
        emailDomain === webDomain ||
        emailDomain.endsWith(`.${webDomain}`) ||
        webDomain.endsWith(`.${emailDomain}`)
      )
    ) {
      return false;
    }
  }

  return true;
}

function endpointFor(type, env) {
  if (type === "demo_access") return env.N8N_DEMO_ACCESS_URL;
  if (type === "careers") return env.N8N_CAREERS_URL;
  return env.N8N_WEBFORM_LEAD_URL;
}

async function verifyTurnstile(request, env, token) {
  if (env.ALLOW_INSECURE_TESTING === "true") return true;
  if (env.REQUIRE_TURNSTILE !== "true") return true;
  if (
    !env.TURNSTILE_SECRET ||
    typeof token !== "string" ||
    token.length < 1 ||
    token.length > 2048
  ) {
    return false;
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: token,
        remoteip: request.headers.get("CF-Connecting-IP") || "",
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) return false;
    const result = await response.json();
    return (
      result.success === true &&
      result.action === env.TURNSTILE_ACTION &&
      csvSet(env.TURNSTILE_HOSTNAMES).has(result.hostname)
    );
  } catch {
    return false;
  }
}

async function rateLimit(request, env) {
  if (env.ALLOW_INSECURE_TESTING === "true") return true;
  if (!env.FORM_RATE_LIMITER?.limit) return false;
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const result = await env.FORM_RATE_LIMITER.limit({ key: ip });
  return result.success === true;
}

async function handleSubmission(request, env) {
  if (!originAllowed(request, env)) {
    return json(request, env, { ok: false, error: "origin_not_allowed" }, 403);
  }
  if (!(await rateLimit(request, env))) {
    return json(request, env, { ok: false, error: "rate_limited" }, 429);
  }
  if (!(request.headers.get("Content-Type") || "").includes("application/json")) {
    return json(request, env, { ok: false, error: "invalid_content_type" }, 415);
  }
  const declaredSize = Number(request.headers.get("Content-Length") || "0");
  if (declaredSize > MAX_BODY_BYTES) {
    return json(request, env, { ok: false, error: "payload_too_large" }, 413);
  }

  let body;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
      return json(request, env, { ok: false, error: "payload_too_large" }, 413);
    }
    body = JSON.parse(raw);
  } catch {
    return json(request, env, { ok: false, error: "invalid_json" }, 400);
  }

  if (!isRecord(body)) {
    return json(request, env, { ok: false, error: "invalid_request" }, 400);
  }
  if (typeof body.company_fax === "string" && body.company_fax.trim()) {
    return json(request, env, { ok: true });
  }
  if (
    typeof body.type !== "string" ||
    !FORM_TYPES.has(body.type) ||
    !isRecord(body.payload) ||
    !validatePayload(body.type, body.payload)
  ) {
    return json(request, env, { ok: false, error: "invalid_fields" }, 400);
  }
  if (!(await verifyTurnstile(request, env, body.turnstileToken))) {
    return json(request, env, { ok: false, error: "challenge_failed" }, 403);
  }

  const endpoint = endpointFor(body.type, env);
  if (!endpoint) {
    return json(request, env, { ok: false, error: "service_unavailable" }, 503);
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Sealmetrics-Forms/1.0",
      },
      body: JSON.stringify(body.payload),
      signal: AbortSignal.timeout(12_000),
    });
    if (!response.ok) {
      return json(request, env, { ok: false, error: "upstream_rejected" }, 502);
    }
    return json(request, env, { ok: true });
  } catch {
    return json(request, env, { ok: false, error: "upstream_unavailable" }, 502);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/health" && request.method === "GET") {
      return json(request, env, { ok: true });
    }
    if (url.pathname !== "/api/forms") {
      return json(request, env, { ok: false, error: "not_found" }, 404);
    }
    if (request.method === "OPTIONS") {
      if (!originAllowed(request, env)) {
        return json(request, env, { ok: false, error: "origin_not_allowed" }, 403);
      }
      return new Response(null, {
        status: 204,
        headers: corsHeaders(request.headers.get("Origin"), env),
      });
    }
    if (request.method !== "POST") {
      return json(request, env, { ok: false, error: "method_not_allowed" }, 405);
    }
    return handleSubmission(request, env);
  },
};
