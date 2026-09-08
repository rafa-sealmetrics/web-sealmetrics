// The free-mail / throwaway domain list exists twice on purpose, and this file
// is what keeps the two copies honest.
//
//   - src/components/forms/BrandReportForm.tsx  → PERSONAL_DOMAINS   (browser)
//   - workers/forms/src/index.js                → PERSONAL_EMAIL_DOMAINS (edge)
//
// They cannot share a module: the Worker is a separate JavaScript package with
// its own lockfile, deployed to Cloudflare, and the site is TypeScript bundled
// by Next. Unifying them would mean inventing a shared package for one array.
// So they are duplicated, and the duplication is verified rather than trusted —
// a domain added to one side and forgotten on the other is exactly the drift
// that would let a personal address through the Worker while the form promises
// it will not.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

/** Pulls the string literals out of `<name> = new Set([ … ]);`, ignoring comments. */
function domainSet(file, name) {
  const source = readFileSync(file, "utf8");
  const start = source.indexOf(`${name} = new Set([`);
  assert.notEqual(start, -1, `${file}: ${name} not found`);
  const end = source.indexOf("]);", start);
  assert.notEqual(end, -1, `${file}: ${name} is not closed`);
  const block = source
    .slice(start, end)
    .replace(/\/\/[^\n]*/g, "") // grouping comments name domains too
    .replace(/\/\*[\s\S]*?\*\//g, "");
  return [...block.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
}

const browser = domainSet(
  "src/components/forms/BrandReportForm.tsx",
  "PERSONAL_DOMAINS",
);
const worker = domainSet("workers/forms/src/index.js", "PERSONAL_EMAIL_DOMAINS");

test("the browser and Worker domain lists are the same list", () => {
  assert.deepEqual(
    [...browser].sort(),
    [...worker].sort(),
    "add the domain to both files, or the Worker and the form disagree",
  );
});

test("neither list repeats a domain", () => {
  for (const [label, list] of [["browser", browser], ["worker", worker]]) {
    const seen = new Set();
    const repeated = list.filter((d) => (seen.has(d) ? true : (seen.add(d), false)));
    assert.deepEqual(repeated, [], `${label} list repeats a domain`);
  }
});

test("every entry is a bare, lowercase domain", () => {
  for (const domain of browser) {
    assert.match(domain, /^[a-z0-9-]+(?:\.[a-z0-9-]+)+$/, `"${domain}" is not a bare domain`);
  }
});

test("the providers a Spanish or European visitor actually uses are covered", () => {
  // Regression guard for the original nine-domain list, which stopped at the
  // .com of each provider and let every country variant straight through.
  const required = [
    "gmail.com",
    "hotmail.es",
    "hotmail.co.uk",
    "live.es",
    "outlook.fr",
    "yahoo.es",
    "yahoo.co.uk",
    "orange.es",
    "telefonica.net",
    "terra.es",
    "wanadoo.es",
    "libero.it",
    "free.fr",
    "web.de",
    "t-online.de",
    "seznam.cz",
    "mailinator.com",
    "yopmail.com",
    "guerrillamail.com",
    "10minutemail.com",
    "temp-mail.org",
    "getnada.com",
    "trashmail.com",
  ];
  const have = new Set(browser);
  assert.deepEqual(required.filter((d) => !have.has(d)), []);
});
