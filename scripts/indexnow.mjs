#!/usr/bin/env node
/**
 * Tells Bing (and the other IndexNow participants) which URLs changed.
 *
 * WHY THIS EXISTS
 * ChatGPT's web search and Copilot read Bing's index, so on this site Bing is
 * not a secondary search engine — it is one of the two paths by which an answer
 * engine finds a page at all. Nothing in the deploy told Bing anything, so a
 * revised page waited for an organic recrawl.
 *
 * WHAT IT SUBMITS
 * Only URLs whose `lastmod` in the freshly-built sitemap is newer than the
 * `lastmod` in the sitemap currently live in production. That is deliberately
 * narrow: `stamp-sitemap-lastmod.mjs` derives `lastmod` from the rendered text,
 * so "changed" here means the words on the page changed, not that a build ran.
 * Submitting the whole sitemap on every deploy would be noise, and IndexNow
 * participants throttle publishers who do it.
 *
 * SAFETY
 *   - No key configured  → logs and exits 0. A deploy must never fail because
 *     an optional notification could not be sent.
 *   - Production sitemap unreachable → logs and exits 0, same reason.
 *   - `--dry-run` prints the payload and sends nothing.
 *
 * SETUP (one-time, outside this repo — see GEO-CODE-PLAN-2026-09.md §9)
 *   1. Verify sealmetrics.com in Bing Webmaster Tools and generate an
 *      IndexNow key there.
 *   2. Put the key in the repo secret INDEXNOW_KEY.
 *   3. Commit `public/<key>.txt` containing the key as its only line — the
 *      protocol requires the key to be retrievable from the host it is used for.
 *
 * Run: node scripts/indexnow.mjs [--dry-run]
 */
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const OUT = path.join(repoRoot, "out");
const SITE = "https://sealmetrics.com";
const HOST = "sealmetrics.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS = 10_000; // protocol limit per request
const DRY_RUN = process.argv.includes("--dry-run");

const KEY = process.env.INDEXNOW_KEY?.trim();

const ok = (message) => {
  console.log(`[indexnow] ${message}`);
  process.exit(0);
};

if (!existsSync(path.join(OUT, "sitemap.xml"))) {
  console.error("[indexnow] out/sitemap.xml missing — run `npm run build` first.");
  process.exit(1);
}

if (!KEY && !DRY_RUN) {
  ok("INDEXNOW_KEY is not set — skipping. See the setup notes at the top of this file.");
}

/* ------------------------------------------------------ parse both sitemaps */

/** route → lastmod (YYYY-MM-DD), from a sitemap XML string. */
function lastmodByUrl(xml) {
  const map = new Map();
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) continue;
    map.set(loc, block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.slice(0, 10) ?? null);
  }
  return map;
}

const built = lastmodByUrl(readFileSync(path.join(OUT, "sitemap.xml"), "utf8"));

let live;
try {
  const res = await fetch(`${SITE}/sitemap.xml`, {
    headers: { "user-agent": "sealmetrics-indexnow/1.0" },
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  live = lastmodByUrl(await res.text());
} catch (err) {
  ok(`could not read the live sitemap (${err.message}) — skipping rather than guessing what changed.`);
}

/* ------------------------------------------------------- diff and submit */

const changed = [];
for (const [url, builtDate] of built) {
  const liveDate = live.get(url);
  // New URL, or its rendered text moved the date forward.
  if (liveDate === undefined) changed.push(url);
  else if (builtDate && (!liveDate || builtDate > liveDate)) changed.push(url);
}

if (!changed.length) {
  ok("nothing changed since the live sitemap — nothing to submit.");
}

const urlList = changed.slice(0, MAX_URLS);
console.log(`[indexnow] ${changed.length} changed URL(s), submitting ${urlList.length}:`);
for (const u of urlList.slice(0, 25)) console.log(`  ${u}`);
if (urlList.length > 25) console.log(`  … and ${urlList.length - 25} more`);

if (DRY_RUN) ok("dry run — nothing was sent.");

try {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList,
    }),
    signal: AbortSignal.timeout(30_000),
  });
  // 200 accepted · 202 accepted, key validation pending. Both are success.
  if (res.status === 200 || res.status === 202) {
    ok(`submitted ${urlList.length} URL(s) — HTTP ${res.status}.`);
  }
  console.warn(
    `[indexnow] endpoint answered HTTP ${res.status}. Not failing the deploy: ` +
      `the site is already published and this is a notification, not a publish step. ` +
      `422 usually means public/${KEY}.txt is missing or does not contain the key.`
  );
  process.exit(0);
} catch (err) {
  ok(`submission failed (${err.message}) — the deploy itself is unaffected.`);
}
