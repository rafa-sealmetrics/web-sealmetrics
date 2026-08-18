#!/usr/bin/env node
import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "out");
const sitemap = readFileSync(path.join(out, "sitemap.xml"), "utf8");
const sitemapRoutes = [...sitemap.matchAll(/<loc>https:\/\/sealmetrics\.com([^<]*)<\/loc>/g)].map(match => match[1] || "/");
const failures = [];

function exportedRoutes(directory, relative = "") {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (!entry.isDirectory()) return [];
    const childRelative = path.join(relative, entry.name);
    const childDirectory = path.join(directory, entry.name);
    const ownRoute = existsSync(path.join(childDirectory, "index.html"))
      ? [`/${childRelative.replaceAll(path.sep, "/")}/`]
      : [];
    return [...ownRoute, ...exportedRoutes(childDirectory, childRelative)];
  });
}

const routes = [
  ...(existsSync(path.join(out, "index.html")) ? ["/"] : []),
  ...exportedRoutes(out),
];

for (const route of sitemapRoutes) {
  const relative = route === "/" ? "index.html" : `${route.replace(/^\//, "")}index.html`;
  if (!existsSync(path.join(out, relative))) {
    failures.push(`${route}: sitemap route output HTML missing`);
  }
}

for (const route of routes) {
  const relative = route === "/" ? "index.html" : `${route.replace(/^\//, "")}index.html`;
  const file = path.join(out, relative);
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

const v4CssDir = path.join(root, "src/components/v4");
for (const name of readdirSync(v4CssDir).filter(file => file.endsWith(".css"))) {
  const source = readFileSync(path.join(v4CssDir, name), "utf8");
  // `color` must be anchored to a declaration boundary. Unanchored, it also
  // matched `-webkit-text-fill-color: transparent`, which is the *correct*
  // way to write outlined text: the fill is cleared while `color` keeps the
  // inherited value, so a currentColor stroke resolves to the heading's own
  // colour and works on light and dark alike. Only a genuinely transparent
  // `color` with a currentColor stroke is invisible.
  if (/(^|[;{])\s*color\s*:\s*transparent[^}]*-webkit-text-stroke\s*:[^;}]*currentColor/im.test(source)) {
    failures.push(`${name}: transparent outlined text inherits a transparent stroke`);
  }
}

if (failures.length) {
  console.error(`[audit-signal-design] ${failures.length} failure(s):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(
  `[audit-signal-design] ${routes.length} exported routes (${sitemapRoutes.length} indexable + ${routes.length - sitemapRoutes.length} noindex) · Signal marker, one H1, repository brand and square geometry verified.`,
);
