#!/usr/bin/env node
/**
 * Checks that every external link in the published content still resolves.
 *
 * WHY
 * The compliance pages argue from primary sources — CNIL, AEPD, EDPB, EUR-Lex.
 * That citation chain is most of the E-E-A-T case, and it is the first thing a
 * DPO clicks. On 4 September 2026 seven of them were 404, three of them CNIL,
 * and nobody knew: `seo-audit.mjs` checks internal links and stops there.
 *
 * One of the dead URLs was being ADDED by an automated quality PR that same
 * week, as the source for a statistic. It had never been fetched.
 *
 * BEHAVIOUR
 * Network-bound, so it is deliberately NOT in `npm run build` — an offline
 * laptop must not fail a build for an unrelated reason. It runs `--strict` in
 * the nightly knowledge-audit workflow, the same arrangement as
 * `audit-sameas.mjs`.
 *
 * Hosts that answer 401/403/405/429/999 to anything automated are reported as
 * unverifiable rather than dead: that is a bot defence, not a missing page.
 * EUR-Lex answers 202 to its own canonical ELI URIs and serves fine in a
 * browser, so 2xx of any shape counts as alive.
 *
 * Run: node scripts/audit-external-links.mjs [--strict]
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(path.resolve(here, ".."), "out");
const STRICT = process.argv.includes("--strict");
const TIMEOUT_MS = 20_000;
const CONCURRENCY = 8;
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36";

if (!existsSync(OUT)) {
  console.error("[external-links] out/ missing — run `npm run build` first.");
  process.exit(1);
}

/* ------------------------------------------------------------- collect */

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name === "index.html") acc.push(p);
  }
  return acc;
}

/** url → the routes that link to it, so a failure names the pages to fix. */
const links = new Map();
for (const file of walk(OUT)) {
  const html = readFileSync(file, "utf8");
  // Content only. Header and footer links are chrome, and a failure there
  // would repeat on all 250 pages.
  const main = html.match(/<main\b[^>]*id="main-content"[^>]*>([\s\S]*)<\/main>/)?.[1];
  if (!main) continue;
  const route = `/${path.relative(OUT, file).replace(/index\.html$/, "")}`;
  for (const [, href] of main.matchAll(/href="(https?:\/\/[^"]+)"/g)) {
    if (href.includes("sealmetrics.com")) continue; // internal, already gated
    const url = href.split("#")[0];
    if (!links.has(url)) links.set(url, new Set());
    links.get(url).add(route);
  }
}

/* --------------------------------------------------------------- probe */

async function status(url, method) {
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      headers: { "user-agent": UA, accept: "text/html,application/pdf,*/*" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    return res.status;
  } catch (err) {
    return err.name === "TimeoutError" ? "timeout" : `error: ${err.message}`;
  }
}

const BOT_DEFENCE = new Set([401, 403, 405, 429, 999]);

async function probe(url) {
  for (const method of ["HEAD", "GET"]) {
    const code = await status(url, method);
    if (typeof code === "number" && code >= 200 && code < 300) {
      return { url, code, verdict: "ok" };
    }
    if (method === "GET") {
      if (BOT_DEFENCE.has(code) || typeof code !== "number") {
        return { url, code, verdict: "unverifiable" };
      }
      return { url, code, verdict: "dead" };
    }
  }
}

const queue = [...links.keys()].sort();
const results = [];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) results.push(await probe(queue.shift()));
  })
);

/* -------------------------------------------------------------- report */

const dead = results.filter((r) => r.verdict === "dead");
const unverifiable = results.filter((r) => r.verdict === "unverifiable");

console.log(
  `[external-links] ${results.length} external URL(s) in content · ` +
    `${results.length - dead.length - unverifiable.length} ok · ` +
    `${unverifiable.length} unverifiable · ${dead.length} dead`
);
for (const r of unverifiable) {
  console.log(`  unverifiable  ${r.code}  ${r.url}  (bot defence, not proof of absence)`);
}
for (const r of dead) {
  console.log(`  DEAD          ${r.code}  ${r.url}`);
  for (const route of links.get(r.url)) console.log(`                     on ${route}`);
}

if (!dead.length) {
  console.log("[external-links] every cited source resolves.");
  process.exit(0);
}
console.error(
  `\n[external-links] ${dead.length} cited source(s) do not resolve.\n` +
    `  Find the document's current home and verify it says what the page claims —\n` +
    `  a link that merely returns 200 is not a fix. If there is no replacement,\n` +
    `  remove the link rather than leaving a dead citation in a compliance argument.`
);
process.exit(STRICT ? 1 : 0);
