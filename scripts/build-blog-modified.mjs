#!/usr/bin/env node
/**
 * Generates `src/lib/content/blog-modified.json` mapping each blog slug
 * to the ISO date of its most recent git commit.
 *
 * LAST-RESORT FALLBACK ONLY. `dateModified` is a freshness claim we make to
 * Google and to AI engines, so it is declared explicitly by the author in
 * each post's `articleSchema({ ... })` call, and that value always wins
 * (see `articleSchema` in src/lib/schema.ts). This map is consulted only for
 * a post that declares no `dateModified` of its own.
 *
 * The reason it cannot be the source of truth: git mtime cannot tell a real
 * revision from a mechanical sweep. A site-wide lint pass, a prettier reflow
 * or a one-character canonical rewrite bumps every file it touches, which
 * would re-date dozens of unchanged posts at once and advertise them as
 * freshly updated. That is exactly what commit c84633a did to 30 posts.
 *
 * So: when you genuinely revise a post, bump its `dateModified` by hand.
 * Do not rely on this script to notice.
 *
 * Runs as a `prebuild` step. Falls back gracefully if git isn't available
 * (e.g., shallow CI clone): missing slugs simply use `datePublished`.
 */
import { execSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const blogEnDir = path.join(repoRoot, "src/app/(en)/blog");
const outFile = path.join(repoRoot, "src/lib/content/blog-modified.json");

function gitDate(absDir) {
  try {
    const iso = execSync(`git log -1 --format=%aI -- "${absDir}"`, {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    return iso ? iso.split("T")[0] : null;
  } catch {
    return null;
  }
}

const out = {};
for (const slug of readdirSync(blogEnDir)) {
  const dir = path.join(blogEnDir, slug);
  if (!statSync(dir).isDirectory()) continue;
  const d = gitDate(dir);
  if (d) out[slug] = d;
}

writeFileSync(outFile, JSON.stringify(out, null, 2) + "\n");
console.log(`[blog-modified] wrote ${Object.keys(out).length} entries → ${path.relative(repoRoot, outFile)}`);
