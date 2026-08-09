#!/usr/bin/env node
/** Validates Knowledge Layer metadata and provenance invariants. */
import { readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const manifest = JSON.parse(readFileSync(path.join(root, "out/knowledge-manifest.json"), "utf8"));
const failures = [];
const seenRoutes = new Set();
const allowedOwners = new Set(["web", "content", "engineering", "legal"]);
const allowedPriorities = new Set(["critical", "useful"]);

for (const entry of manifest.routes) {
  if (seenRoutes.has(entry.route)) failures.push(`duplicate route: ${entry.route}`);
  seenRoutes.add(entry.route);
  for (const field of ["canonical", "markdown", "lang", "content_type", "owner", "llm_priority", "last_verified", "title", "description"]) {
    if (!entry[field]) failures.push(`${entry.route}: missing ${field}`);
  }
  if (!allowedOwners.has(entry.owner)) failures.push(`${entry.route}: invalid owner ${entry.owner}`);
  if (!allowedPriorities.has(entry.llm_priority)) failures.push(`${entry.route}: invalid llm_priority ${entry.llm_priority}`);
  if (!entry.markdown.endsWith(".md")) failures.push(`${entry.route}: markdown URL must end in .md`);
  if (entry.llm_priority === "critical" && entry.description.length < 20) failures.push(`${entry.route}: critical description too short`);
}

console.log(`[audit-knowledge] manifest routes: ${manifest.routes.length}`);
console.log(`[audit-knowledge] critical routes: ${manifest.routes.filter((r) => r.llm_priority === "critical").length}`);
if (failures.length) {
  console.error(`[audit-knowledge] ${failures.length} failure(s)`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}
console.log("[audit-knowledge] 0 failures — metadata and provenance are complete.");
