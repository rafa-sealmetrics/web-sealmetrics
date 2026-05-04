#!/usr/bin/env node
/**
 * Generates AVIF + WebP siblings for every PNG/JPG under /public.
 * AVIF is ~30-50% smaller than WebP at equivalent quality, ~50-70% smaller than PNG.
 * Static export means we can't use next/image's optimizer; this is the substitute.
 *
 * Re-run by `npm run prebuild`. Idempotent: skips files whose sibling is newer
 * than the source.
 */
import { readdir, stat, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const publicDir = path.join(repoRoot, "public");

const SOURCE_EXT = new Set([".png", ".jpg", ".jpeg"]);
const SKIP_DIRS = new Set(["screenshots"]);

let generated = 0;
let skipped = 0;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(path.join(dir, entry.name));
    } else if (SOURCE_EXT.has(path.extname(entry.name).toLowerCase())) {
      yield path.join(dir, entry.name);
    }
  }
}

async function isSiblingFresh(src, sibling) {
  if (!existsSync(sibling)) return false;
  const [s, t] = await Promise.all([stat(src), stat(sibling)]);
  return t.mtimeMs >= s.mtimeMs;
}

async function process(src) {
  const base = src.replace(/\.(png|jpg|jpeg)$/i, "");
  const avif = `${base}.avif`;
  const webp = `${base}.webp`;
  const tasks = [];

  if (!(await isSiblingFresh(src, avif))) {
    tasks.push(
      sharp(src)
        .avif({ quality: 60, effort: 4 })
        .toFile(avif)
        .then(() => generated++)
    );
  } else {
    skipped++;
  }
  if (!(await isSiblingFresh(src, webp))) {
    tasks.push(
      sharp(src)
        .webp({ quality: 78 })
        .toFile(webp)
        .then(() => generated++)
    );
  } else {
    skipped++;
  }

  await Promise.all(tasks);
}

const sources = [];
for await (const f of walk(publicDir)) sources.push(f);

const concurrency = 4;
const queue = [...sources];
const workers = Array.from({ length: concurrency }, async () => {
  while (queue.length) {
    const src = queue.shift();
    if (!src) return;
    try {
      await process(src);
    } catch (err) {
      console.error(`[optimize-images] failed: ${path.relative(repoRoot, src)} — ${err.message}`);
    }
  }
});
await Promise.all(workers);

console.log(`[optimize-images] generated ${generated}, skipped ${skipped} (across ${sources.length} sources)`);
