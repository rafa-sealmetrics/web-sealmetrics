#!/usr/bin/env node
/**
 * Generates AVIF + WebP siblings for every PNG/JPG under /public.
 * AVIF is ~30-50% smaller than WebP at equivalent quality, ~50-70% smaller than PNG.
 * Static export means we can't use next/image's optimizer; this is the substitute.
 *
 * Re-run by `npm run prebuild`.
 *
 * Freshness is decided by CONTENT, not mtime. The previous version skipped a
 * target whose mtime was >= its source, which is unreliable the moment the
 * filesystem is not a warm working copy: a fresh `git checkout` writes every
 * file at roughly the same instant in arbitrary order, so a handful of targets
 * land marginally older than their source and get re-encoded. That produced a
 * few dozen byte-different-but-content-identical images on every CI run — churn
 * that shows up as a dirty tree and teaches people to ignore the warning.
 *
 * Instead we record, per target, a hash of the source bytes plus the encoder
 * settings used, in `scripts/image-manifest.json`. A target is regenerated only
 * when the source content changes, the settings change, or the file is missing.
 * This also fixes a latent bug: under mtime comparison, editing the quality
 * values below regenerated nothing, because no mtime had moved.
 *
 * Deliberately NOT part of the signature: the sharp / libvips / libaom
 * versions. Those ship as per-platform prebuilt binaries, so including them
 * would make the manifest disagree between a macOS dev machine and CI's Linux
 * runner — reintroducing permanent churn in a different disguise. To force a
 * re-encode after upgrading sharp, delete the manifest (or the outputs).
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const publicDir = path.join(repoRoot, "public");
const manifestPath = path.join(here, "image-manifest.json");

const SOURCE_EXT = new Set([".png", ".jpg", ".jpeg"]);
const SKIP_DIRS = new Set(["screenshots"]);

const AVIF_OPTS = { quality: 60, effort: 4 };
const WEBP_OPTS = { quality: 78 };

// Encoder settings participate in the freshness key, so changing a quality
// value above is enough to trigger a re-encode on the next build.
const SIGNATURES = {
  avif: `avif:${JSON.stringify(AVIF_OPTS)}`,
  webp: `webp:${JSON.stringify(WEBP_OPTS)}`,
};

let generated = 0;
let skipped = 0;
let adopted = 0;

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

/** Repo-relative, forward-slashed — so the manifest is identical on any OS. */
const key = (abs) => path.relative(repoRoot, abs).split(path.sep).join("/");

async function loadManifest() {
  if (!existsSync(manifestPath)) return {};
  try {
    const parsed = JSON.parse(await readFile(manifestPath, "utf8"));
    return parsed && typeof parsed === "object" && parsed.targets ? parsed.targets : {};
  } catch {
    // A corrupt manifest must not fail the build — treat it as absent and
    // rebuild it. Worst case is one round of re-encoding.
    console.warn("[optimize-images] manifest unreadable — rebuilding it");
    return {};
  }
}

const previous = await loadManifest();
const next = {};

async function process(src) {
  const srcHash = createHash("sha256").update(await readFile(src)).digest("hex");
  const base = src.replace(/\.(png|jpg|jpeg)$/i, "");

  for (const [format, target, opts] of [
    ["avif", `${base}.avif`, AVIF_OPTS],
    ["webp", `${base}.webp`, WEBP_OPTS],
  ]) {
    const targetKey = key(target);
    const record = { source: key(src), sourceHash: srcHash, signature: SIGNATURES[format] };
    const prev = previous[targetKey];
    const exists = existsSync(target);

    if (exists && prev?.sourceHash === srcHash && prev?.signature === record.signature) {
      skipped++;
      next[targetKey] = record;
      continue;
    }

    // Migration path: the target exists but predates the manifest. Adopt it
    // rather than re-encoding, so introducing the manifest does not produce a
    // one-off diff touching every generated image in the repo. Delete the
    // manifest to force a genuine full rebuild.
    if (exists && !prev) {
      adopted++;
      next[targetKey] = record;
      continue;
    }

    await sharp(src)[format](opts).toFile(target);
    generated++;
    next[targetKey] = record;
  }
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

// Sorted keys so the committed manifest diffs cleanly and never reorders.
const sortedTargets = Object.fromEntries(
  Object.entries(next).sort(([a], [b]) => a.localeCompare(b))
);
await writeFile(
  manifestPath,
  `${JSON.stringify({ version: 1, targets: sortedTargets }, null, 2)}\n`
);

const adoptedNote = adopted ? `, adopted ${adopted}` : "";
console.log(
  `[optimize-images] generated ${generated}, skipped ${skipped}${adoptedNote} (across ${sources.length} sources)`
);
