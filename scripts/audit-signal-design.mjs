#!/usr/bin/env node
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "out");
const sitemap = readFileSync(path.join(out, "sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/sealmetrics\.com([^<]*)<\/loc>/g)].map(match => match[1] || "/");
const failures = [];

for (const route of routes) {
  const relative = route === "/" ? "index.html" : `${route.replace(/^\//, "")}index.html`;
  const file = path.join(out, relative);
  if (!existsSync(file)) {
    failures.push(`${route}: output HTML missing`);
    continue;
  }
  const html = readFileSync(file, "utf8");
  const h1 = (html.match(/<h1\b/g) || []).length;
  if (!html.includes('data-design-system="signal-v4"')) failures.push(`${route}: Signal v4 marker missing`);
  if (h1 !== 1) failures.push(`${route}: expected one H1, found ${h1}`);
  if (html.includes("sm-brand-lockup")) failures.push(`${route}: retired generated wordmark is present`);
  if (!html.includes("/logos/logo-sealmetrics.svg")) failures.push(`${route}: repository brand asset missing`);
}

const css = readFileSync(path.join(root, "src/app/globals.css"), "utf8");
if (!css.includes("SIGNAL V4 · SITE-WIDE COMPATIBILITY LAYER")) failures.push("global Signal compatibility layer missing");
if (!css.includes("border-radius: 0 !important")) failures.push("square-geometry enforcement missing");

if (failures.length) {
  console.error(`[audit-signal-design] ${failures.length} failure(s):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(`[audit-signal-design] ${routes.length} sitemap routes · Signal marker, one H1, repository brand and square geometry verified.`);
