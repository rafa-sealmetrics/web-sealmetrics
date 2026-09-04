#!/usr/bin/env node
/** Validates the generated Markdown surface against the static sitemap. */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");
const sitemap = readFileSync(path.join(out, "sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/sealmetrics\.com([^<]+)<\/loc>/g)]
  .map(([, route]) => route.endsWith("/") ? route : `${route}/`)
  .filter((route) => route !== "/sitemap.xml");

const markdownPath = (route) => route === "/" ? path.join(out, "index.md") : path.join(out, route.slice(1).replace(/\/$/, "") + ".md");
const failures = [];

for (const route of routes) {
  const file = markdownPath(route);
  if (!existsSync(file)) {
    failures.push(`${route}: missing ${path.relative(out, file)}`);
    continue;
  }
  const content = readFileSync(file, "utf8");
  if (!content.startsWith("---\n")) failures.push(`${route}: missing frontmatter`);
  if ((content.match(/^# /gm) || []).length !== 1) failures.push(`${route}: expected exactly one H1`);
  // Fenced and inline code first: the platform pages document the tracking
  // snippet, and `<script src="…">` inside a fence is the content, not leaked
  // markup. Until the generator learned to keep code blocks verbatim, those
  // snippets were being stripped and the twins shipped an empty fence — the
  // check passed by destroying the thing it was meant to protect.
  // `scripts/seo-audit.mjs` already strips the same way for the same reason.
  const prose = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`\n]*`/g, "");
  if (/<script\b|<style\b|<!--|javascript:/i.test(prose)) failures.push(`${route}: unsafe HTML/script residue`);
  const expected = `canonical_url: "https://sealmetrics.com${route}"`;
  if (!content.includes(expected)) failures.push(`${route}: canonical_url mismatch`);
}

const orphaned = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith(".md") && entry.name !== "llms.txt" && entry.name !== "llms-full.txt") orphaned.push(file);
  }
}
walk(out);
const expected = new Set(routes.map(markdownPath));
for (const file of orphaned) if (!expected.has(file)) failures.push(`orphaned Markdown: ${path.relative(out, file)}`);

console.log(`[audit-markdown] sitemap routes: ${routes.length}`);
console.log(`[audit-markdown] generated Markdown: ${orphaned.length}`);
if (failures.length) {
  console.error(`[audit-markdown] ${failures.length} failure(s)`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}
console.log("[audit-markdown] 0 failures — Markdown surface matches the sitemap.");
