import assert from "node:assert/strict";
import test from "node:test";
import worker from "../src/index.js";

const baseEnv = {
  ALLOWED_ORIGINS: "https://sealmetrics.com,https://www.sealmetrics.com",
  TURNSTILE_HOSTNAMES: "sealmetrics.com,www.sealmetrics.com",
  TURNSTILE_ACTION: "sealmetrics_lead",
  ALLOW_INSECURE_TESTING: "true",
};

function request(body, origin = "https://sealmetrics.com") {
  return new Request("https://forms.sealmetrics.com/api/forms", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify(body),
  });
}

test("rejects unknown origins", async () => {
  const response = await worker.fetch(
    request({ type: "demo", payload: {} }, "https://attacker.invalid"),
    baseEnv,
  );
  assert.equal(response.status, 403);
});

test("rejects invalid lead fields without contacting n8n", async () => {
  const response = await worker.fetch(
    request({ type: "demo", payload: { email: "invalid" } }),
    baseEnv,
  );
  assert.equal(response.status, 400);
});

test("keeps n8n private and forwards the accepted payload unchanged", async () => {
  const originalFetch = globalThis.fetch;
  let forwarded;
  globalThis.fetch = async (url, options) => {
    forwarded = { url: String(url), options };
    return new Response(null, { status: 204 });
  };

  const payload = {
    name: "Test Person",
    email: "test@example.com",
    website: "https://example.com",
    gdpr: true,
    source: "worker-test",
  };
  try {
    const response = await worker.fetch(
      request({ type: "demo", payload, company_fax: "" }),
      { ...baseEnv, N8N_WEBFORM_LEAD_URL: "https://automation.invalid/webform" },
    );
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
    assert.equal(forwarded.url, "https://automation.invalid/webform");
    assert.deepEqual(JSON.parse(forwarded.options.body), payload);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("a filled honeypot returns success without forwarding", async () => {
  const originalFetch = globalThis.fetch;
  let forwarded = false;
  globalThis.fetch = async () => {
    forwarded = true;
    return new Response(null, { status: 204 });
  };
  try {
    const response = await worker.fetch(
      request({ type: "demo", payload: {}, company_fax: "spam" }),
      baseEnv,
    );
    assert.equal(response.status, 200);
    assert.equal(forwarded, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
