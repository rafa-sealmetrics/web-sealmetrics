#!/usr/bin/env node
/**
 * Publishes a machine-facing llms.txt from the curated editorial source.
 * Descriptions remain hand-authored; route links are normalized to .md so a
 * new page cannot accidentally point an agent at the HTML shell.
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const source = readFileSync(path.join(root, "public/llms.txt"), "utf8");
const SITE = "https://sealmetrics.com";

const markdownUrl = (route) => {
  if (route === "/") return `${SITE}/index.md`;
  return `${SITE}${route.replace(/\/$/, "")}.md`;
};

const output = source
  .split("\n")
  .map((line) => {
    const match = line.match(/^- (\/[^\s—]+)(?: — (.*))?$/);
    if (!match || line.includes("](") || line.includes("https://")) return line;
    const [, route, description] = match;
    const suffix = description ? `: ${description}` : "";
    return `- [${route}](${markdownUrl(route)})${suffix}`;
  })
  .join("\n");

writeFileSync(path.join(root, "out/llms.txt"), output.endsWith("\n") ? output : `${output}\n`);
console.log("[prepare-llms-txt] published Markdown links to out/llms.txt");
