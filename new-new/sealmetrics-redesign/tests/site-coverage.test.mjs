import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function renderWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

function requestPath(route) {
  return route ? `/${route}/` : "/";
}

test("renders every canonical sitemap URL with the new editorial system", async () => {
  const pages = JSON.parse(await readFile(new URL("../app/site-content.generated.json", import.meta.url), "utf8"));
  const worker = await renderWorker();
  const routes = Object.keys(pages);
  const failures = [];

  assert.equal(routes.length, 237);

  for (let start = 0; start < routes.length; start += 12) {
    const batch = routes.slice(start, start + 12);
    const results = await Promise.all(batch.map(async route => {
      const response = await worker.fetch(
        new Request(`http://localhost${requestPath(route)}`, { headers: { accept: "text/html" } }),
        { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
        { waitUntil() {}, passThroughOnException() {} },
      );
      return { route, response, html: await response.text() };
    }));

    for (const { route, response, html } of results) {
      const page = pages[route];
      const h1Count = (html.match(/<h1\b/gi) ?? []).length;
      const titleText = page.title.replaceAll("&", "&amp;");
      if (response.status !== 200 || h1Count !== 1 || !html.includes("editorial-page") && route || !html.includes(titleText.split(" — ")[0])) {
        failures.push({ route: requestPath(route), status: response.status, h1Count, hasEditorialPage: html.includes("editorial-page"), title: page.title });
      }
    }
  }

  assert.deepEqual(failures, []);
});

test("forms endpoint validates requests and keeps webhook destinations server-side", async () => {
  const worker = await renderWorker();
  const context = { waitUntil() {}, passThroughOnException() {} };
  const invalid = await worker.fetch(new Request("http://localhost/api/forms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ type: "demo", payload: { email: "not-an-email" } }),
  }), {}, context);
  assert.equal(invalid.status, 400);

  const payload = {
    name: "Test Person",
    email: "test@example.com",
    website: "https://example.com",
    gdpr: true,
    source: "automated-test",
  };
  const unavailable = await worker.fetch(new Request("http://localhost/api/forms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ type: "demo", payload }),
  }), {}, context);
  assert.equal(unavailable.status, 503);

  const originalFetch = globalThis.fetch;
  let forwarded;
  globalThis.fetch = async (url, options) => {
    forwarded = { url: String(url), options };
    return new Response(null, { status: 204 });
  };
  try {
    const accepted = await worker.fetch(new Request("http://localhost/api/forms", {
      method: "POST",
      headers: { "content-type": "application/json", origin: "http://localhost" },
      body: JSON.stringify({ type: "demo", payload }),
    }), { N8N_WEBFORM_LEAD_URL: "https://automation.invalid/webform" }, context);
    assert.equal(accepted.status, 200);
    assert.deepEqual(await accepted.json(), { ok: true });
    assert.equal(forwarded.url, "https://automation.invalid/webform");
    assert.deepEqual(JSON.parse(forwarded.options.body), payload);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
