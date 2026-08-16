// Regression guard for the duplicate-entrance bug: the pixel used to be
// re-injected on every route change. Removing the <script> element does not
// unload the code it already ran, so each re-injection left one more live
// tracker behind and every one of them fired its own pageview on the next
// navigation — 1, 2, 3, 4 … hits per route change, each with a fresh token, so
// the backend counted them as new entrances.
//
// The contract these tests pin down: t.js is requested exactly ONCE per
// document, in manual mode (auto=0&spa=0), and every pageview is one explicit
// sealmetrics({ group }) call.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const source = readFileSync("src/lib/analytics.ts", "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;

// A fresh module instance per test — the module keeps load state in closures.
async function loadAnalytics() {
  const scripts = [];
  const pageviews = [];

  const sealmetrics = (options) => pageviews.push(options?.group ?? null);
  sealmetrics.micro = () => {};
  sealmetrics.conv = () => {};

  globalThis.document = {
    readyState: "complete",
    createElement: () => ({ set src(v) { this._src = v; }, get src() { return this._src; } }),
    head: { appendChild: (node) => scripts.push(node) },
  };
  globalThis.window = {
    addEventListener: () => {},
    // Present from the start: the real tracker defines it as t.js executes,
    // and the module only calls it once the script's onload has fired.
    sealmetrics,
  };

  const analytics = await import(
    `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}#${Math.random()}`
  );
  // Drain the ready-queue the way the loaded tracker would.
  const fireOnload = () => scripts.forEach((s) => s.onload?.());
  return { analytics, scripts, pageviews, fireOnload };
}

test("t.js is requested once, in manual mode, however many route changes", async () => {
  const { analytics, scripts, fireOnload } = await loadAnalytics();

  analytics.pageview("home");
  fireOnload();
  analytics.pageview("product");
  analytics.pageview("pricing");
  analytics.pageview("blog");

  assert.equal(scripts.length, 1, "the pixel script must be injected exactly once");

  const src = new URL(scripts[0].src);
  assert.equal(src.origin + src.pathname, "https://pixel-pre.sealmetrics.com/t.js");
  assert.equal(src.searchParams.get("auto"), "0", "auto=0 gates the pixel's own initial pageview");
  assert.equal(src.searchParams.get("spa"), "0", "spa=0 gates the pixel's own SPA listener");
  assert.equal(src.searchParams.get("id"), "sealmetrics2");
  assert.equal(src.searchParams.get("group"), null, "the group travels per pageview, not on the script URL");
});

test("each route change produces exactly one pageview, with its own group", async () => {
  const { analytics, pageviews, fireOnload } = await loadAnalytics();

  analytics.pageview("home");
  fireOnload();
  analytics.pageview("product");
  analytics.pageview("pricing");
  analytics.pageview("blog");

  assert.deepEqual(pageviews, ["home", "product", "pricing", "blog"]);
});

test("pageviews fired before t.js finishes loading are queued, not dropped", async () => {
  const { analytics, pageviews, fireOnload } = await loadAnalytics();

  analytics.pageview("home");
  assert.deepEqual(pageviews, [], "nothing can be sent before the tracker exists");

  fireOnload();
  assert.deepEqual(pageviews, ["home"], "the queued pageview is replayed on load");
});
