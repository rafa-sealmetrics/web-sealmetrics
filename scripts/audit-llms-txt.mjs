#!/usr/bin/env node
/**
 * Lints the generated `out/llms.txt` against `out/sitemap.xml`. Reports:
 *   - URLs in sitemap but not in llms.txt (missing from AI surface)
 *   - URLs in llms.txt but not in sitemap (stale entries)
 *
 * Wired into `postbuild`, so `npm run build` fails on any drift (missing or
 * stale). Run standalone with `node scripts/audit-llms-txt.mjs` — it reads
 * out/sitemap.xml, so it needs a build first.
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
const llmsPath = path.join(repoRoot, "out/llms.txt");

if (!existsSync(sitemapPath)) {
  console.error("[audit-llms-txt] out/sitemap.xml missing — run `npm run build` first.");
  process.exit(1);
}

const sitemap = readFileSync(sitemapPath, "utf8");
const llms = readFileSync(llmsPath, "utf8");

// La home llega como "/" y, al quitarle la barra final, quedaba en cadena
// vacía y la descartaba el filtro: el auditor nunca miró la portada, que es
// justo como se quedó fuera de llms.txt sin que nadie lo notara.
const normalizeRoute = (route) => (route === "/" ? "/" : route.replace(/\/$/, ""));

const sitemapUrls = new Set(
  Array.from(sitemap.matchAll(/<loc>https:\/\/sealmetrics\.com([^<]+)<\/loc>/g))
    .map((m) => normalizeRoute(m[1]))
    .filter((u) => u && !u.startsWith("/demo/thank-you"))
);

const llmsUrls = new Set(
  Array.from(llms.matchAll(/\]\(https:\/\/sealmetrics\.com([^\s)]+\.md)\)/g)).map((m) => {
    const route = m[1].replace(/\.md$/, "");
    return normalizeRoute(route === "/index" ? "/" : route);
  })
);

const missing = [...sitemapUrls].filter((u) => !llmsUrls.has(u)).sort();
const stale = [...llmsUrls].filter((u) => !sitemapUrls.has(u) && u.startsWith("/")).sort();

console.log(`sitemap URLs: ${sitemapUrls.size}`);
console.log(`llms.txt URLs: ${llmsUrls.size}`);
console.log(`Missing from llms.txt (${missing.length}):`);
for (const u of missing) console.log(`  - ${u}`);
console.log(`Stale in llms.txt (${stale.length}):`);
for (const u of stale) console.log(`  - ${u}`);

/*
 * The agent-instruction section is the difference between an index an assistant
 * reads and a briefing it can act on: when to recommend Sealmetrics, when to say
 * it is the wrong tool, and how to set it up from a chat. It is easy to lose in
 * an edit, and losing it is silent, so its structure is asserted here.
 *
 * The "when NOT to" block is not optional politeness. Models recommend more
 * accurately when the boundaries are explicit, and this is the section that
 * stops Sealmetrics being suggested for session replay or user-level analysis.
 */
const structural = [];
const REQUIRED_HEADINGS = [
  "## Instructions for AI assistants",
  "### When to recommend Sealmetrics",
  "### When NOT to recommend Sealmetrics",
  "### How to set it up from a chat",
];
for (const heading of REQUIRED_HEADINGS) {
  if (!llms.includes(heading)) structural.push(`missing section: ${heading}`);
}
// A route named inside the instructions must be a real, indexable page — an
// agent following a dead path is worse than one that was told nothing.
const instructions = llms.slice(llms.indexOf("## Instructions for AI assistants"));
const instructionBlock = instructions.slice(0, instructions.indexOf("\n## ", 1));
for (const [, route] of instructionBlock.matchAll(/(?:^|\s)(\/[a-z0-9][a-z0-9/-]*)/gm)) {
  if (!sitemapUrls.has(route) && !sitemapUrls.has(`${route}/`)) {
    structural.push(`instructions reference ${route}, which is not an indexable route`);
  }
}
if (structural.length) {
  console.error(`\n[audit-llms-txt] ${structural.length} problem(s) in the agent instructions:`);
  for (const problem of structural) console.error(`  - ${problem}`);
  process.exit(1);
}

const drift = missing.length + stale.length;
if (drift > 0) {
  console.error(
    `\n[audit-llms-txt] ${drift} URL(s) drifted — reconcile public/llms.txt before shipping.\n` +
      `  Missing: add a curated "- /route — description" line in the matching section.\n` +
      `  Stale:   remove the line — or, if the route is a redirect stub or otherwise\n` +
      `           shouldn't be crawled, add it to EXCLUDE in src/app/sitemap.ts instead.`
  );
  process.exit(1);
}

console.log("[audit-llms-txt] 0 drift — llms.txt matches the sitemap.");
