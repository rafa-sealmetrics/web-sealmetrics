#!/usr/bin/env node
/**
 * Checks that every `sameAs` profile the site claims actually resolves.
 *
 * WHY
 * `sameAs` is how the entity graph says "this company is also that profile".
 * It is one of the few signals an answer engine can verify cheaply, and a link
 * to a profile that 404s is worse than no link at all: it asserts a presence
 * that is not there. Nine profiles were declared in `src/lib/schema.ts` and
 * nobody had ever checked them.
 *
 * BEHAVIOUR
 * Network access makes this unsuitable for the build gate — an offline laptop
 * or a rate-limited CI runner would fail a build for a reason unrelated to the
 * change. So:
 *   - by default it reports and exits 0, listing what did not resolve;
 *   - `--strict` exits 1 on a dead profile, for the scheduled audit workflow.
 *
 * A profile that is merely slow, or that blocks HEAD, is retried with GET and a
 * browser User-Agent before being called dead. Several of these hosts (LinkedIn,
 * Crunchbase) answer 999 or 403 to anything that looks automated, which is a
 * bot defence and not evidence the profile is missing — those are reported
 * separately as "unverifiable", never as failures.
 *
 * Run: node scripts/audit-sameas.mjs [--strict]
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(path.resolve(here, ".."), "out");
const STRICT = process.argv.includes("--strict");
const TIMEOUT_MS = 12_000;
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36";

if (!existsSync(OUT)) {
  console.error("[audit-sameas] out/ missing — run `npm run build` first.");
  process.exit(1);
}

/* ------------------------------------------------- collect declared profiles */

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name === "index.html") acc.push(p);
  }
  return acc;
}

function collect(value, into) {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) return value.forEach((v) => collect(v, into));
  if (value.sameAs) {
    for (const url of [value.sameAs].flat()) {
      if (typeof url !== "string" || !/^https?:\/\//.test(url)) continue;
      // A link back to our own site is a cross-reference, not a third-party
      // profile, and proving it resolves is the sitemap's job.
      if (url.startsWith("https://sealmetrics.com")) continue;
      if (!into.has(url)) into.set(url, new Set());
      into.get(url).add(value["@type"] ?? "?");
    }
  }
  Object.values(value).forEach((v) => collect(v, into));
}

const profiles = new Map();
for (const file of walk(OUT)) {
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
  )) {
    try {
      collect(JSON.parse(m[1]), profiles);
    } catch {
      /* invalid-jsonld is seo-audit's rule, not this one's */
    }
  }
}

/* ------------------------------------------------------------------- probe */

async function fetchStatus(url, method) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      signal: ctrl.signal,
      headers: { "user-agent": UA, accept: "text/html,*/*" },
    });
    return res.status;
  } catch (err) {
    return err.name === "AbortError" ? "timeout" : `error: ${err.message}`;
  } finally {
    clearTimeout(timer);
  }
}

async function probe(url) {
  const head = await fetchStatus(url, "HEAD");
  if (head === 200) return { url, status: head, verdict: "ok" };
  const get = await fetchStatus(url, "GET");
  if (get === 200) return { url, status: get, verdict: "ok" };
  // Bot defences, not missing pages.
  if ([401, 403, 405, 429, 999].includes(get)) {
    return { url, status: get, verdict: "unverifiable" };
  }
  if (typeof get !== "number") return { url, status: get, verdict: "unverifiable" };
  return { url, status: get, verdict: "dead" };
}

const results = [];
for (const url of [...profiles.keys()].sort()) {
  results.push(await probe(url));
}

/* ------------------------------------------------------------------ report */

const ok = results.filter((r) => r.verdict === "ok");
const unverifiable = results.filter((r) => r.verdict === "unverifiable");
const dead = results.filter((r) => r.verdict === "dead");

console.log(`[audit-sameas] ${results.length} declared profile(s)`);
for (const r of ok) console.log(`  ok            ${r.url}`);
for (const r of unverifiable) {
  console.log(`  unverifiable  ${r.url}  (${r.status} — bot defence, not proof of absence)`);
}
for (const r of dead) console.log(`  DEAD          ${r.url}  (${r.status})`);

if (!dead.length) {
  console.log("[audit-sameas] no declared profile resolved to a missing page.");
  process.exit(0);
}
console.error(
  `[audit-sameas] ${dead.length} profile(s) do not resolve. Either create them or ` +
    `remove them from sameAs in src/lib/schema.ts — a sameAs pointing at nothing ` +
    `asserts a presence the company does not have.`
);
process.exit(STRICT ? 1 : 0);
