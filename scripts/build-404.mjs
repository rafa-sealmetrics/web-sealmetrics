#!/usr/bin/env node
/**
 * Publishes out/404.html — the page GitHub Pages serves for any URL that does
 * not exist — and removes the scaffolding used to produce it.
 *
 * WHY A ROUTE + A MOVE, RATHER THAN app/not-found.tsx
 * A static export only emits out/404.html from `app/not-found.tsx` at the app
 * root, and a root not-found requires a root `app/layout.tsx`. This app has no
 * root layout on purpose: (en) and (es) are separate root layouts so each
 * locale owns its own <html lang>. Adding one would nest <html> inside <html>.
 *
 * So the 404 is built as a normal route, src/app/(en)/404-page/, and moved
 * here. That way it is a real Next.js page — correct <html lang>, correct
 * metadata, working hydration and chrome — rather than HTML stitched together
 * by a script.
 *
 * The source route is deleted from the output afterwards, so /404-page/ is
 * never published. It is also marked noindex, so it stays out of the sitemap
 * even if this step is ever skipped.
 *
 * Run: node scripts/build-404.mjs   (wired into `postbuild`, before the audit)
 */
import { existsSync, renameSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(here, "..", "out");
const sourceDir = path.join(OUT, "404-page");
const sourceFile = path.join(sourceDir, "index.html");
const target = path.join(OUT, "404.html");

if (!existsSync(sourceFile)) {
  console.error(
    "[build-404] out/404-page/index.html missing.\n" +
      "  src/app/(en)/404-page/page.tsx is the source of out/404.html — if it was\n" +
      "  renamed or deleted, the site ships Next's unbranded default 404 instead."
  );
  process.exit(1);
}

let html = readFileSync(sourceFile, "utf8");

// The page is served from /404.html but reached at arbitrary URLs, so any
// self-referential link is wrong by definition. The hreflang alternates the
// layout emits point at the homepage, which would tell Google this 404 is the
// English version of "/" — strip them. Note Next renders the attribute as
// `hrefLang`, so the match must be case-insensitive.
html = html
  .replace(/<link rel="canonical"[^>]*\/?>/gi, "")
  .replace(/<link rel="alternate" hreflang="[^"]*"[^>]*\/?>/gi, "");

writeFileSync(target, html);
rmSync(sourceDir, { recursive: true, force: true });

// Next's own placeholders for the same thing: out/_not-found/index.html and
// out/404/index.html, both carrying the unbranded default "404: This page
// could not be found." Leaving them published puts a second, worse 404 on two
// crawlable URLs — /404/ in particular is a path people and crawlers do hit.
// out/404.html (the file we just wrote) is the one GitHub Pages serves.
for (const dir of ["_not-found", "404"]) {
  const p = path.join(OUT, dir);
  if (existsSync(p)) rmSync(p, { recursive: true, force: true });
}

console.log(
  "[build-404] published out/404.html from src/app/(en)/404-page/ " +
    "and removed the source route plus Next's default 404 placeholders"
);
