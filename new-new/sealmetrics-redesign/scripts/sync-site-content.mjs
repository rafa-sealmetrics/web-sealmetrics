import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const sourceRoot = path.resolve(projectRoot, "../../out");
const generatedFile = path.join(projectRoot, "app/site-content.generated.json");
const inventoryFile = path.join(projectRoot, "docs/sitemap-inventory.md");
const sitemapFile = path.join(projectRoot, "public/sitemap.xml");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(absolute);
  }

  return files;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error("Missing frontmatter");

  const meta = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      try { value = JSON.parse(value); } catch { value = value.slice(1, -1); }
    }
    meta[key] = value;
  }

  return { meta, body: match[2].trim() };
}

function routeFromFile(file) {
  const relative = path.relative(sourceRoot, file).split(path.sep).join("/");
  if (relative === "index.md") return "";
  return relative.replace(/\.md$/, "");
}

function categoryFor(route, meta) {
  if (!route) return "Homepage";
  if (route.startsWith("es/blog/")) return "Blog · ES";
  if (route.startsWith("blog/")) return "Blog · EN";
  if (route.startsWith("es/glossary/")) return "Glossary · ES";
  if (route.startsWith("glossary/")) return "Glossary · EN";
  if (route.startsWith("es/for/")) return "Audience · ES";
  if (route.startsWith("for/")) return "Audience · EN";
  if (route.startsWith("es/vs/") || route === "es/vs-ga4") return "Comparison · ES";
  if (route.startsWith("vs/") || route === "vs-ga4") return "Comparison · EN";
  if (route === "es" || route.startsWith("es/")) return "Other · ES";
  return meta.content_type === "blog" ? "Blog · EN" : "Other · EN";
}

function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

const files = (await walk(sourceRoot)).sort();
const pages = {};

for (const file of files) {
  const route = routeFromFile(file);
  const { meta, body } = parseFrontmatter(await readFile(file, "utf8"));
  const expectedCanonical = `https://sealmetrics.com/${route ? `${route}/` : ""}`;
  const canonical = String(meta.canonical_url || expectedCanonical);

  if (canonical !== expectedCanonical) {
    throw new Error(`Canonical mismatch for ${route || "/"}: ${canonical}`);
  }

  pages[route] = {
    title: String(meta.title || "SealMetrics"),
    description: String(meta.description || ""),
    canonical,
    lang: meta.lang === "es" ? "es" : "en",
    contentType: String(meta.content_type || "product"),
    dateModified: String(meta.date_modified || meta.last_verified || ""),
    body,
  };
}

if (Object.keys(pages).length !== 237) {
  throw new Error(`Expected 237 canonical pages; found ${Object.keys(pages).length}`);
}

const routeEntries = Object.entries(pages);
const categories = new Map();
for (const [route, page] of routeEntries) {
  const category = categoryFor(route, page);
  const values = categories.get(category) ?? [];
  values.push(page.canonical);
  categories.set(category, values);
}

const categoryOrder = [
  "Homepage",
  "Other · EN",
  "Audience · EN",
  "Comparison · EN",
  "Blog · EN",
  "Glossary · EN",
  "Other · ES",
  "Audience · ES",
  "Comparison · ES",
  "Blog · ES",
  "Glossary · ES",
];

const inventory = [
  "# SealMetrics sitemap inventory",
  "",
  `Canonical inventory generated from the production Markdown twins: **${routeEntries.length} URLs**.`,
  "",
  ...categoryOrder.flatMap((category) => {
    const urls = (categories.get(category) ?? []).sort();
    return [`## ${category} (${urls.length})`, "", ...urls.map((url) => `- ${url}`), ""];
  }),
].join("\n");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routeEntries.map(([, page]) => [
    "  <url>",
    `    <loc>${escapeXml(page.canonical)}</loc>`,
    page.dateModified ? `    <lastmod>${escapeXml(page.dateModified)}</lastmod>` : "",
    "  </url>",
  ].filter(Boolean).join("\n")),
  "</urlset>",
  "",
].join("\n");

await mkdir(path.dirname(inventoryFile), { recursive: true });
await writeFile(generatedFile, `${JSON.stringify(pages)}\n`);
await writeFile(inventoryFile, inventory);
await writeFile(sitemapFile, sitemap);

console.log(`Synced ${routeEntries.length} canonical pages.`);
