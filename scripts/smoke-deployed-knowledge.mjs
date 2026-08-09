#!/usr/bin/env node
/** Smoke-tests critical Markdown pages on the deployed site. */
import { readFileSync } from "node:fs";
import path from "node:path";

const base = (process.env.KNOWLEDGE_BASE_URL || "https://sealmetrics.com").replace(/\/$/, "");
const manifest = JSON.parse(readFileSync(path.join(process.cwd(), "out/knowledge-manifest.json"), "utf8"));
const critical = manifest.routes.filter((route) => route.llm_priority === "critical");
const failures = [];

for (const route of critical) {
  const url = `${base}${new URL(route.markdown).pathname}`;
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
    const contentType = response.headers.get("content-type") || "";
    const body = await response.text();
    if (!response.ok) failures.push(`${url}: HTTP ${response.status}`);
    if (!contentType.toLowerCase().includes("text/markdown")) failures.push(`${url}: content-type ${contentType}`);
    if (!body.startsWith("---\n") || !/^# /m.test(body)) failures.push(`${url}: invalid Markdown document`);
  } catch (error) {
    failures.push(`${url}: ${error.message}`);
  }
}

console.log(`[smoke-deployed-knowledge] checked ${critical.length} critical routes at ${base}`);
if (failures.length) {
  console.error(`[smoke-deployed-knowledge] ${failures.length} failure(s)`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}
console.log("[smoke-deployed-knowledge] 0 failures — deployed critical surface is healthy.");
