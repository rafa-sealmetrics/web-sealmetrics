#!/usr/bin/env node
/**
 * Lints `public/llms.txt` against `out/sitemap.xml`. Reports:
 *   - URLs in sitemap but not in llms.txt (missing from AI surface)
 *   - URLs in llms.txt but not in sitemap (stale entries)
 *
 * Run after build: `node scripts/audit-llms-txt.mjs`. Non-zero exit if drift > 0.
 *
 * Why a linter, not auto-regeneration: llms.txt is editorial — each entry has
 * a hand-written description that AI engines lift verbatim. We want to surface
 * drift, not silently overwrite the prose.
 */
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const sitemapPath = path.join(repoRoot, "out/sitemap.xml");
const llmsPath = path.join(repoRoot, "public/llms.txt");

if (!existsSync(sitemapPath)) {
  console.error("[audit-llms-txt] out/sitemap.xml missing — run `npm run build` first.");
  process.exit(1);
}

const sitemap = readFileSync(sitemapPath, "utf8");
const llms = readFileSync(llmsPath, "utf8");

const sitemapUrls = new Set(
  Array.from(sitemap.matchAll(/<loc>https:\/\/sealmetrics\.com([^<]+)<\/loc>/g))
    .map((m) => m[1].replace(/\/$/, ""))
    .filter((u) => u && !u.startsWith("/demo/thank-you"))
);

const llmsUrls = new Set(
  Array.from(llms.matchAll(/^- (\/[^\s—]+)/gm)).map((m) => m[1].replace(/\/$/, ""))
);

const missing = [...sitemapUrls].filter((u) => !llmsUrls.has(u)).sort();
const stale = [...llmsUrls].filter((u) => !sitemapUrls.has(u) && u.startsWith("/")).sort();

console.log(`sitemap URLs: ${sitemapUrls.size}`);
console.log(`llms.txt URLs: ${llmsUrls.size}`);
console.log(`Missing from llms.txt (${missing.length}):`);
for (const u of missing) console.log(`  - ${u}`);
console.log(`Stale in llms.txt (${stale.length}):`);
for (const u of stale) console.log(`  - ${u}`);

if (missing.length > 5 || stale.length > 5) {
  console.error(`[audit-llms-txt] drift > 5 — please reconcile public/llms.txt`);
  process.exit(1);
}
