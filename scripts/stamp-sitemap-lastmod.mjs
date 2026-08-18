#!/usr/bin/env node
/**
 * Rewrites <lastmod> in out/sitemap.xml from the *rendered content* of each
 * page instead of the build clock.
 *
 * The problem this fixes: `src/app/sitemap.ts` had no way to know when a page
 * last changed, so it fell back to `new Date()` for every non-blog route. 163
 * of 238 URLs therefore claimed "modified today" on every single deploy, which
 * teaches Google to ignore the field on the 75 where it was real.
 *
 * How it works: hash the visible text of the built HTML — not the markup, so a
 * design pass, a class rename or a formatting sweep does not move the date —
 * and compare it against `.seo-lastmod.json`. Unchanged text keeps its stored
 * date. Changed text gets today's, and the manifest is updated.
 *
 * The manifest is committed. On a CI build it is read-only in practice: a
 * genuinely changed page still gets an accurate date in that build's sitemap,
 * it just isn't persisted until someone builds locally and commits.
 *
 * Runs after generate-markdown.mjs, before the audits.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const OUT = path.join(repoRoot, "out");
const SITE = "https://sealmetrics.com";
const MANIFEST = path.join(repoRoot, ".seo-lastmod.json");
const SITEMAP = path.join(OUT, "sitemap.xml");

if (!existsSync(SITEMAP)) {
  console.error("[lastmod] out/sitemap.xml missing — run `npm run build` first.");
  process.exit(1);
}

const today = new Date().toISOString().split("T")[0];

/**
 * Hash the visible text of <main> only.
 *
 * Scoping this to <main> is not a detail: the first version hashed the whole
 * document, so adding one footer link re-dated all 261 pages at once — exactly
 * the "everything changed today" noise this script exists to remove. Chrome is
 * not content. Neither is markup, script or style.
 */
function contentHash(html) {
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] ?? html;
  const text = main
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return createHash("sha1").update(text).digest("hex").slice(0, 16);
}

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

const hashes = new Map();
for (const file of walk(OUT)) {
  let route = "/" + path.relative(OUT, file).replace(/\\/g, "/");
  route = route.replace(/index\.html$/, "").replace(/\.html$/, "/");
  if (!route.endsWith("/")) route += "/";
  hashes.set(route, contentHash(readFileSync(file, "utf8")));
}

const manifest = existsSync(MANIFEST)
  ? JSON.parse(readFileSync(MANIFEST, "utf8"))
  : {};

let changed = 0;
let seeded = 0;
const dateFor = new Map();

for (const [route, hash] of hashes) {
  const prev = manifest[route];
  if (!prev) {
    seeded++;
    manifest[route] = { hash, date: today };
  } else if (prev.hash !== hash) {
    changed++;
    manifest[route] = { hash, date: today };
  }
  dateFor.set(route, manifest[route].date);
}

// Drop routes that no longer exist, so the manifest can't grow forever.
for (const route of Object.keys(manifest)) {
  if (!hashes.has(route)) delete manifest[route];
}

let xml = readFileSync(SITEMAP, "utf8");
let stamped = 0;
let missing = 0;

let preserved = 0;

xml = xml.replace(
  /<loc>([^<]+)<\/loc>([\s\S]*?)<lastmod>([^<]*)<\/lastmod>/g,
  (whole, loc, middle, current) => {
    // A lastmod that is not the build date came from real information in
    // sitemap.ts — today that means a blog post's author-set `date`. Author
    // intent outranks a derived hash, so leave those exactly as they are.
    if (current !== today) {
      preserved++;
      return whole;
    }
    const route = loc.replace(SITE, "");
    const date = dateFor.get(route);
    if (!date) {
      missing++;
      return whole;
    }
    stamped++;
    return `<loc>${loc}</loc>${middle}<lastmod>${date}</lastmod>`;
  }
);

writeFileSync(SITEMAP, xml);
writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

const distinct = new Set(dateFor.values()).size;
console.log(
  `[lastmod] ${stamped} URLs stamped from content hashes, ` +
    `${preserved} left author-set · ${changed} changed, ${seeded} newly ` +
    `tracked, ${distinct} distinct dates` +
    (missing ? ` · ${missing} sitemap URLs had no built page` : "")
);
