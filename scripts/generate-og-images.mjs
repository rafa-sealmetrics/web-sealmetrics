#!/usr/bin/env node
/**
 * Pre-renders per-post OG images (1200×630 PNG) at build time.
 * Sources:
 *   - Blog: parses src/lib/content/blog.ts for { slug, title, category }
 *   - Glossary: parses src/lib/content/glossary.ts (if it exports an array) — falls back to filesystem
 *   - Case studies: hardcoded list (small + manually curated)
 *
 * Output: /public/og/<segment>/<slug>.png — referenced by each page's
 * metadata.openGraph.images. The PNG fallback through `<picture>` is the
 * default; AVIF + WebP siblings are then created by `optimize-images.mjs`
 * in the same prebuild pass.
 *
 * Idempotent: skips files already on disk newer than this script.
 */
import { readFileSync, mkdirSync, statSync, existsSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const blogTsPath = path.join(repoRoot, "src/lib/content/blog.ts");
const outDir = path.join(repoRoot, "public/og");
const scriptMtime = statSync(fileURLToPath(import.meta.url)).mtimeMs;

// Brand lockup for the card footer, embedded as a data URI because satori has
// no filesystem access. Sourced from the PNG that `logo-sealmetrics.svg`
// generates, so the card follows the brand without a second hand-made asset.
const LOGO_PATH = path.join(repoRoot, "public/logos/logo-sealmetrics-negro.png");
const LOGO_DATA_URI = `data:image/png;base64,${readFileSync(LOGO_PATH).toString("base64")}`;
const LOGO_H = 30;
const LOGO_W = Math.round(LOGO_H * 5.603); // ratio del lockup
const logoNode = (h = LOGO_H) => ({
  type: "img",
  props: { src: LOGO_DATA_URI, width: Math.round(h * 5.603), height: h },
});

mkdirSync(path.join(outDir, "blog"), { recursive: true });
mkdirSync(path.join(outDir, "case-studies"), { recursive: true });
mkdirSync(path.join(outDir, "glossary"), { recursive: true });

// Load Onest from node_modules — Next already pulls Google Fonts at build time
// so the woff2 lives in node_modules under .next-font cache. Use a simple
// system-fallback render: satori needs a font but woff/ttf works.
// Fall back to embedded Inter-like via fetch isn't possible offline; download
// once and cache.
const FONT_CACHE = path.join(repoRoot, ".og-font-cache");
mkdirSync(FONT_CACHE, { recursive: true });
const fontPath = path.join(FONT_CACHE, "onest-700.ttf");

async function ensureFont() {
  if (existsSync(fontPath)) return readFileSync(fontPath);
  // Resolve current Onest 700 TTF URL from Google Fonts CSS — version-stable approach.
  try {
    const cssRes = await fetch(
      "https://fonts.googleapis.com/css2?family=Onest:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    if (!cssRes.ok) throw new Error(`CSS HTTP ${cssRes.status}`);
    const css = await cssRes.text();
    const ttfUrl = css.match(/url\((https:[^)]+\.ttf)\)/)?.[1];
    if (!ttfUrl) throw new Error("no .ttf URL in Google CSS");
    const fontRes = await fetch(ttfUrl);
    if (!fontRes.ok) throw new Error(`Font HTTP ${fontRes.status}`);
    const buf = Buffer.from(await fontRes.arrayBuffer());
    writeFileSync(fontPath, buf);
    return buf;
  } catch (err) {
    console.warn(`[og] font fetch failed (${err.message}); skipping OG generation`);
    return null;
  }
}

function parseBlogPosts() {
  const src = readFileSync(blogTsPath, "utf8");
  const posts = [];
  const re = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)"[\s\S]*?(?:category:\s*"([^"]+)")?[\s\S]*?(?:date:\s*"([^"]+)")?[\s\S]*?(?:draft:\s*(true|false))?\s*[,}]/g;
  // Simpler approach: split by `slug: "` boundaries
  const blocks = src.split(/\n  \{\n/).slice(1);
  for (const block of blocks) {
    const slug = block.match(/slug:\s*"([^"]+)"/)?.[1];
    const title = block.match(/title:\s*"([^"]+)"/)?.[1];
    const category = block.match(/category:\s*"([^"]+)"/)?.[1] ?? "Blog";
    const draft = /draft:\s*true/.test(block);
    if (slug && title && !draft) posts.push({ slug, title, category });
  }
  return posts;
}

function ogTemplate({ eyebrow, title }) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 88px",
        backgroundColor: "#FAFAF7",
        fontFamily: "Onest",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#2D8B6D",
                  },
                  children: eyebrow,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 64,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "#0E0E0C",
                    lineHeight: 1.08,
                    marginTop: 28,
                    maxWidth: 1000,
                  },
                  children: title,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #E4E3DE",
              paddingTop: 28,
            },
            children: [
              logoNode(30),
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 20,
                    color: "#6B6B5E",
                    letterSpacing: "0.04em",
                  },
                  children: "sealmetrics.com",
                },
              },
            ],
          },
        },
      ],
    },
  };
}

/**
 * Site-wide default card (public/og-image.png), used by ~125 pages that do not
 * have a per-page OG image. Kept as its own template because it carries a blurb
 * and a stats row that the per-page cards do not — extending ogTemplate would
 * have put the per-page renders at risk for no gain.
 *
 * The price lives here rather than in a hand-made raster: it had drifted to a
 * tier that no longer exists (€199 against a real entry price of €499), and a
 * baked-in figure nobody can grep is exactly how that happens.
 */
function ogSiteTemplate({ eyebrow, title, blurb, stats, note }) {
  const text = (children, style) => ({ type: "div", props: { style, children } });
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 88px",
        backgroundColor: "#FAFAF7",
        fontFamily: "Onest",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column" },
            children: [
              text(eyebrow, {
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#6B6B5E",
              }),
              text(title, {
                fontSize: 62,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#0E0E0C",
                lineHeight: 1.06,
                marginTop: 26,
                maxWidth: 900,
              }),
              text(blurb, {
                fontSize: 24,
                color: "#6B6B5E",
                lineHeight: 1.45,
                marginTop: 26,
                maxWidth: 860,
              }),
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column" },
            children: [
              {
                type: "div",
                props: {
                  style: { display: "flex", gap: "72px" },
                  children: stats.map((s) => ({
                    type: "div",
                    props: {
                      style: { display: "flex", flexDirection: "column" },
                      children: [
                        text(s.value, {
                          fontSize: 44,
                          fontWeight: 700,
                          letterSpacing: "-0.03em",
                          color: "#0E0E0C",
                        }),
                        text(s.label, {
                          fontSize: 17,
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#6B6B5E",
                          marginTop: 6,
                        }),
                      ],
                    },
                  })),
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid #E4E3DE",
                    marginTop: 34,
                    paddingTop: 26,
                  },
                  children: [
                    logoNode(28),
                    text(note, { fontSize: 20, color: "#6B6B5E", letterSpacing: "0.02em" }),
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function renderTemplate({ outFile, node, font }) {
  if (existsSync(outFile)) {
    const m = statSync(outFile).mtimeMs;
    if (m >= scriptMtime) return false;
  }
  const svg = await satori(node, {
    width: 1200,
    height: 630,
    fonts: [{ name: "Onest", data: font, weight: 700, style: "normal" }],
  });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  writeFileSync(outFile, png);
  return true;
}

async function renderOg({ outFile, eyebrow, title, font }) {
  return renderTemplate({ outFile, node: ogTemplate({ eyebrow, title }), font });
}

const font = await ensureFont();
if (!font) {
  console.log("[og] no font available; skipping");
  process.exit(0);
}

let generated = 0;
let skipped = 0;

// Site-wide default card. Copy tracks the live home hero (HeroD in
// HomeDSections.tsx) rather than being written here: the card had drifted to
// "Decision Intelligence for Ecommerce", which predates the complete-data
// repositioning, and a social preview quoting a headline the site no longer
// uses is the same failure mode as the €199 price it also carried.
{
  const out = path.join(repoRoot, "public/og-image.png");
  const made = await renderTemplate({
    outFile: out,
    node: ogSiteTemplate({
      eyebrow: "eCommerce analytics",
      title: "See 100% of your sales — the revenue GA4 can’t.",
      blurb:
        "Measure every visit and every sale — no cookies, no consent banner, no 40–60% blind spot.",
      stats: [
        { value: "100%", label: "Data capture" },
        { value: "0", label: "Cookies used" },
        { value: "EU", label: "Data residency" },
      ],
      note: "Enterprise analytics from €499/mo",
    }),
    font,
  });
  if (made) generated++; else skipped++;
}

// Blog
for (const post of parseBlogPosts()) {
  const out = path.join(outDir, "blog", `${post.slug}.png`);
  const made = await renderOg({ outFile: out, eyebrow: post.category, title: post.title, font });
  if (made) generated++; else skipped++;
}

// Case studies
const cases = [
  { slug: "palladium-hotel-group", title: "A neutral single source of truth all stakeholders accept", eyebrow: "Case study · Palladium Hotel Group" },
  { slug: "dreamplace-hotels", title: "Decide paid media on real data, not what each platform reports", eyebrow: "Case study · Dreamplace Hotels" },
];
for (const c of cases) {
  const out = path.join(outDir, "case-studies", `${c.slug}.png`);
  const made = await renderOg({ outFile: out, eyebrow: c.eyebrow, title: c.title, font });
  if (made) generated++; else skipped++;
}

console.log(`[og] generated ${generated}, skipped ${skipped}`);
