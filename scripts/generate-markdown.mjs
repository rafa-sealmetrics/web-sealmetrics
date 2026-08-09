#!/usr/bin/env node
/**
 * Generates a clean Markdown twin of every indexable page, for AI agents.
 *
 *   /blog/meet-seal-ai/  →  /blog/meet-seal-ai.md
 *   /                    →  /index.md
 *
 * WHY STATIC .md FILES AND NOT CONTENT NEGOTIATION
 * The site is `output: "export"` deployed to GitHub Pages. There is no server
 * and no edge worker we control (see INFRA-MIGRATION.md), so `Accept:
 * text/markdown` + `Vary: Accept` is not implementable here — it would need a
 * hosting migration. Static `.md` twins give agents the same payload with the
 * hosting we actually have.
 *
 * GUARANTEES
 *   - Only indexable pages get a twin (noindex pages are skipped), so the
 *     Markdown surface can never contradict the robots policy.
 *   - The twin is generated FROM the rendered HTML, so it cannot drift from
 *     what a human reads.
 *   - `<link rel="alternate" type="text/markdown">` is injected into the HTML
 *     only for pages that actually got a twin — HTML and Markdown stay in
 *     lockstep by construction.
 *   - `.md` URLs are never added to sitemap.xml (the sitemap is generated from
 *     route sources, not from out/).
 *   - robots.txt Disallows `/*.md$` for classic search crawlers and Allows it
 *     for AI crawlers, so the twins cannot compete with the HTML in the index.
 *
 * Run: node scripts/generate-markdown.mjs   (wired into `postbuild`)
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const OUT = path.join(repoRoot, "out");
const SITE = "https://sealmetrics.com";

if (!existsSync(OUT)) {
  console.error("[generate-markdown] out/ missing — run `npm run build` first.");
  process.exit(1);
}

/* ------------------------------------------------------------------ utils */

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

const ENTITIES = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", "#39": "'",
  "#x27": "'", "#x2F": "/", "#38": "&", mdash: "—", ndash: "–", hellip: "…",
  rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“",
  eacute: "é", middot: "·", times: "×", euro: "€", deg: "°", sect: "§",
};
function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n] ?? ENTITIES[n.toLowerCase()] ?? m);
}

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`, "i"));
  return m ? m[1] : null;
};

/** Strip tags → plain inline text. */
function textOf(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

/* -------------------------------------------------- html → markdown (inline) */

function inline(html) {
  let s = html;
  s = s.replace(/<br\s*\/?>/gi, "  \n");
  s = s.replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => {
    const inner = inline(t).trim();
    return inner ? `**${inner}**` : "";
  });
  s = s.replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => {
    const inner = inline(t).trim();
    return inner ? `*${inner}*` : "";
  });
  s = s.replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (_, t) => {
    const inner = textOf(t);
    return inner ? `\`${inner}\`` : "";
  });
  s = s.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_, a, t) => {
    const label = inline(t).trim();
    let href = attr(a, "href");
    if (!label) return "";
    if (!href || href.startsWith("#")) return label;
    if (href.startsWith("/")) href = SITE + href;
    return `[${label}](${href})`;
  });
  s = s.replace(/<[^>]+>/g, "");
  return decodeEntities(s).replace(/[ \t]+/g, " ");
}

/* --------------------------------------------------- html → markdown (block) */

function toMarkdown(html) {
  let s = html;

  // Drop everything that is chrome, script or decoration.
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<style[\s\S]*?<\/style>/gi, "");
  s = s.replace(/<svg[\s\S]*?<\/svg>/gi, "");
  s = s.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
  s = s.replace(/<template[\s\S]*?<\/template>/gi, "");
  s = s.replace(/<form[\s\S]*?<\/form>/gi, "");
  s = s.replace(/<button[\s\S]*?<\/button>/gi, "");
  s = s.replace(/<nav\b[\s\S]*?<\/nav>/gi, "");
  s = s.replace(/<[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/[a-z]+>/gi, "");

  // Restore the boundaries the markup implied but the text does not. Without
  // this, adjacent inline chips collapse into "July 24, 20265 min readBy…".
  s = s.replace(/<\/(div|section|article|aside|header|footer|dl|dd|dt|figure|figcaption)>/gi, "\n\n");
  // Only the chip-ish inline tags. Emphasis and links are excluded on purpose:
  // they routinely sit right before punctuation, and a space there would
  // produce "**bold** ." in the output.
  s = s.replace(/<\/(span|time|small|label)>/gi, (m) => m + " ");

  const out = [];

  // Tables first — they carry comparison data AI engines quote directly.
  s = s.replace(/<table\b[^>]*>([\s\S]*?)<\/table>/gi, (_, body) => {
    const rows = [...body.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((r) =>
      [...r[1].matchAll(/<(t[hd])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((c) =>
        inline(c[2]).replace(/\|/g, "\\|").replace(/\s+/g, " ").trim()
      )
    ).filter((r) => r.length);
    if (!rows.length) return "";
    const width = Math.max(...rows.map((r) => r.length));
    const pad = (r) => [...r, ...Array(width - r.length).fill("")];
    const [head, ...rest] = rows;
    return (
      "\n\n@@TABLE@@" +
      [
        `| ${pad(head).join(" | ")} |`,
        `| ${Array(width).fill("---").join(" | ")} |`,
        ...rest.map((r) => `| ${pad(r).join(" | ")} |`),
      ].join("\n@@TABLE@@") +
      "\n\n"
    );
  });

  s = s.replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi, (_, code) => {
    const langMatch = code.match(/language-([a-z0-9]+)/i);
    const body = decodeEntities(code.replace(/<[^>]+>/g, "")).replace(/^\n+|\n+$/g, "");
    return `\n\n@@FENCE@@${langMatch ? langMatch[1] : ""}\n${body}\n@@FENCE@@\n\n`;
  });

  s = s.replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, t) => {
    const body = inline(t.replace(/<\/?p[^>]*>/gi, "\n")).trim();
    if (!body) return "";
    return "\n\n" + body.split("\n").filter(Boolean).map((l) => `> ${l.trim()}`).join("\n> \n") + "\n\n";
  });

  s = s.replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, tag, body) => {
    let i = 0;
    const items = [...body.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)]
      .map((m) => inline(m[1]).replace(/\s+/g, " ").trim())
      .filter(Boolean)
      .map((t) => (tag.toLowerCase() === "ol" ? `${++i}. ${t}` : `- ${t}`));
    return items.length ? `\n\n${items.join("\n")}\n\n` : "";
  });

  s = s.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, lvl, t) => {
    const title = inline(t).replace(/\s+/g, " ").trim();
    return title ? `\n\n${"#".repeat(Number(lvl))} ${title}\n\n` : "";
  });

  s = s.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => {
    const body = inline(t).replace(/\s+/g, " ").trim();
    return body ? `\n\n${body}\n\n` : "";
  });

  s = s.replace(/<img\b([^>]*)>/gi, (_, a) => {
    const alt = attr(a, "alt");
    let src = attr(a, "src") || "";
    if (src.startsWith("/")) src = SITE + src;
    return alt ? `\n\n![${decodeEntities(alt)}](${src})\n\n` : "";
  });

  // Anything left over becomes loose text.
  s = inline(s);

  s = s
    .replace(/@@FENCE@@/g, "```")
    .replace(/@@TABLE@@/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/ +([.,;:!?)])/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  out.push(s);
  return out.join("\n");
}

/* --------------------------------------------------------------- extraction */

function mainContent(html) {
  const start = html.indexOf('<main id="main-content">');
  if (start === -1) return null;
  const from = start + '<main id="main-content">'.length;
  const end = html.lastIndexOf("</main>");
  if (end <= from) return null;
  return html.slice(from, end);
}

/* -------------------------------------------------------------------- main */

const files = walk(OUT).sort();
let written = 0;
let skippedNoindex = 0;
let skippedNoMain = 0;
const manifest = [];

for (const file of files) {
  const rel = path.relative(OUT, file).replace(/\\/g, "/");
  if (!rel.endsWith("index.html")) continue; // trailingSlash build: one per route
  let route = "/" + rel.replace(/index\.html$/, "");
  if (route === "/") route = "/";

  const html = readFileSync(file, "utf8");

  // Never produce a Markdown twin of a page we asked robots not to index.
  const robots = html.match(/<meta name="robots" content="([^"]*)"/i)?.[1] ?? "";
  if (/noindex/i.test(robots)) {
    skippedNoindex++;
    continue;
  }
  if (route.startsWith("/404") || route.startsWith("/_not-found")) continue;

  const body = mainContent(html);
  if (!body) {
    skippedNoMain++;
    continue;
  }

  const md = toMarkdown(body);
  // A twin with almost no prose is noise for an agent — better absent.
  if (md.replace(/[^\p{L}\p{N}]/gu, "").length < 200) {
    skippedNoMain++;
    continue;
  }

  const title = decodeEntities(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "").trim();
  const description = decodeEntities(
    html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? ""
  ).trim();
  const canonical =
    html.match(/<link rel="canonical" href="([^"]*)"/i)?.[1] ?? `${SITE}${route}`;
  const lang = html.match(/<html lang="([^"]*)"/i)?.[1] ?? "en";
  const modified =
    html.match(/"dateModified"\s*:\s*"([^"]+)"/)?.[1] ??
    html.match(/"datePublished"\s*:\s*"([^"]+)"/)?.[1] ??
    null;

  const mdPath =
    route === "/"
      ? path.join(OUT, "index.md")
      : path.join(OUT, route.replace(/^\/|\/$/g, "") + ".md");
  const mdUrl = `${SITE}${mdPath.replace(OUT, "").replace(/\\/g, "/")}`;

  const frontMatter = [
    "---",
    `title: ${JSON.stringify(title)}`,
    description ? `description: ${JSON.stringify(description)}` : null,
    `canonical_url: ${canonical}`,
    `lang: ${lang}`,
    modified ? `date_modified: ${modified}` : null,
    `source: ${SITE}${route}`,
    "publisher: SealMetrics",
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  mkdirSync(path.dirname(mdPath), { recursive: true });
  writeFileSync(mdPath, `${frontMatter}\n\n${md}\n`);
  written++;
  manifest.push({ route, md: mdUrl });

  // Advertise the twin from the HTML — only now that it exists.
  const linkTag = `<link rel="alternate" type="text/markdown" href="${mdUrl}"/>`;
  if (!html.includes('type="text/markdown"')) {
    writeFileSync(file, html.replace("</head>", `${linkTag}</head>`));
  }
}

// Machine-readable index of every twin, for agents that want to enumerate.
manifest.sort((a, b) => a.route.localeCompare(b.route));
writeFileSync(
  path.join(OUT, "llms-md-index.txt"),
  [
    "# SealMetrics — Markdown twins of every indexable page",
    "# One clean Markdown document per HTML page. Generated from the rendered",
    "# HTML at build time, so it cannot drift from what a human reads.",
    `# Generated for ${manifest.length} pages.`,
    "",
    ...manifest.map((m) => m.md),
    "",
  ].join("\n")
);

console.log(
  `[generate-markdown] wrote ${written} .md twins ` +
    `(skipped ${skippedNoindex} noindex, ${skippedNoMain} without extractable content)`
);
if (written === 0) {
  console.error("[generate-markdown] produced nothing — that is a build failure.");
  process.exit(1);
}
