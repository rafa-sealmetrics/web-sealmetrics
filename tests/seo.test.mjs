/**
 * SEO/GEO regression tests.
 *
 * These assert against the report that `scripts/seo-audit.mjs` writes to
 * out/seo-audit-report.json rather than re-parsing out/ — one parser, one set
 * of rules, so a test can never quietly disagree with the build gate.
 *
 *   npm run build && npm test
 *
 * Each `it` below names a defect that was live on sealmetrics.com before this
 * work. If one starts failing, that exact defect has come back.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
const REPORT = path.join(OUT, "seo-audit-report.json");

const haveBuild = existsSync(REPORT);
const skip = haveBuild
  ? false
  : "run `npm run build` first — these tests assert on the built output";

const report = haveBuild ? JSON.parse(readFileSync(REPORT, "utf8")) : { details: [] };
const of = (rule) => report.details.filter((d) => d.rule === rule).map((d) => d.detail);
const noneOf = (rule, message) => {
  const hits = of(rule);
  assert.deepEqual(hits, [], `${message}\n  ${hits.slice(0, 8).join("\n  ")}`);
};

test("sitemap integrity", { skip }, async (t) => {
  await t.test("contains no noindex URL", () =>
    noneOf("noindex-in-sitemap", "noindex pages leaked into sitemap.xml")
  );
  await t.test("contains no URL that 404s", () =>
    noneOf("sitemap-dead-url", "sitemap lists URLs with no built page")
  );
  await t.test("lists every indexable page", () =>
    noneOf("indexable-missing-from-sitemap", "indexable pages missing from sitemap.xml")
  );
  await t.test("contains no .md URL", () =>
    noneOf("markdown-in-sitemap", "Markdown twins must never be submitted for indexing")
  );
});

test("metadata uniqueness", { skip }, async (t) => {
  await t.test("no duplicate titles", () =>
    noneOf("duplicate-title", "two or more pages share a <title>")
  );
  await t.test("no duplicate meta descriptions", () =>
    noneOf("duplicate-description", "two or more pages share a meta description")
  );
  await t.test("every page has a title", () => noneOf("missing-title", "pages without <title>"));
  await t.test("every page has a description", () =>
    noneOf("missing-description", "pages without a meta description")
  );
});

test("canonicals", { skip }, async (t) => {
  await t.test("present on every page", () => noneOf("missing-canonical", "pages without canonical"));
  await t.test("absolute", () => noneOf("relative-canonical", "relative canonical URLs"));
  await t.test("trailing-slash normalised", () =>
    noneOf("canonical-no-trailing-slash", "canonical must match trailingSlash: true")
  );
  await t.test("never point at a 404", () =>
    noneOf("canonical-to-404", "canonical points at a page that was not built")
  );
});

test("social metadata", { skip }, async (t) => {
  // Next.js REPLACES the layout's openGraph object when a page declares its
  // own; this test is what stops that from silently stripping fields again.
  await t.test("Open Graph is complete on every page", () =>
    noneOf("incomplete-open-graph", "missing Open Graph fields")
  );
  await t.test("og:url agrees with the canonical", () =>
    noneOf("og-url-mismatch", "og:url and canonical disagree")
  );
  await t.test("every page has a Twitter card", () =>
    noneOf("missing-twitter-card", "pages without twitter:card")
  );
  await t.test("Twitter cards are not inherited wholesale", () =>
    noneOf("shared-twitter-card", "many pages share one Twitter card — layout inheritance leak")
  );
});

test("document structure", { skip }, async (t) => {
  await t.test("exactly one h1 per page", async () => {
    noneOf("missing-h1", "pages without an <h1>");
    noneOf("multiple-h1", "pages with more than one <h1>");
  });
  await t.test("html lang matches the route locale", async () => {
    noneOf("missing-lang", "pages without html lang");
    noneOf("wrong-lang", "html lang disagrees with the /es/ prefix");
  });
  await t.test("informative images have alt text", () =>
    noneOf("image-without-alt", "images without an alt attribute")
  );
  await t.test("no broken internal links", () =>
    noneOf("broken-internal-link", "internal links pointing at pages that do not exist")
  );
  await t.test("hreflang is reciprocal and resolves", async () => {
    // A one-sided hreflang is worse than none: Google discards the pair, so
    // the annotation looks right in the HTML while doing nothing.
    noneOf("hreflang-to-404", "hreflang points at a page that was not built");
    noneOf("hreflang-not-reciprocal", "hreflang declared in one direction only");
  });
});

test("structured data", { skip }, async (t) => {
  await t.test("all JSON-LD parses", () => noneOf("invalid-jsonld", "malformed JSON-LD"));
  await t.test("internal page URLs match the trailing-slash convention", () =>
    noneOf(
      "schema-url-no-trailing-slash",
      "JSON-LD page URLs disagree with canonicals and the sitemap"
    )
  );
  await t.test("FAQ schema matches visible page content", () =>
    noneOf(
      "faq-schema-not-visible",
      "FAQPage questions exist only in JSON-LD — a Google policy violation and uncitable by AI engines"
    )
  );
  await t.test("the organisation graph ships on every indexable page", () =>
    noneOf("org-graph-missing", "pages whose @id references have nothing to resolve against")
  );
  await t.test("publisher and provider reference the organisation node", () =>
    noneOf("publisher-not-linked", "schemas restating the organisation inline")
  );
  await t.test("one person is one node", () =>
    noneOf("person-entity-split", "a Person named in two places with two identities")
  );
  await t.test("a claimed revision is visible to the reader", () =>
    noneOf(
      "date-modified-not-visible",
      "articles claiming dateModified in schema without rendering it"
    )
  );
  await t.test("declared language matches the document", () =>
    noneOf("schema-inlanguage-mismatch", "schemas whose inLanguage contradicts <html lang>")
  );
  await t.test("breadcrumb schema never points at a 404", () =>
    noneOf("breadcrumb-to-404", "BreadcrumbList references a URL that was not built")
  );
});

test("markdown twins for AI agents", { skip }, async (t) => {
  await t.test("every indexable page has one", () =>
    noneOf("missing-markdown-twin", "indexable pages without a .md twin")
  );
  await t.test("no noindex page has one", () =>
    noneOf("markdown-twin-for-noindex", "a noindex page got a Markdown twin")
  );
  await t.test("each twin is linked from its HTML", () =>
    noneOf("markdown-twin-not-linked", "twin exists but no rel=alternate link advertises it")
  );
  await t.test("twins carry front matter", () =>
    noneOf("markdown-without-frontmatter", "twins missing YAML front matter")
  );
  await t.test("twins are not empty", () =>
    noneOf("markdown-twin-empty", "twins with no meaningful body")
  );
  await t.test("twins carry no leaked markup", () =>
    noneOf("markdown-twin-has-markup", "HTML tags survived the Markdown conversion")
  );
  await t.test("internal links stay in Markdown", () =>
    noneOf(
      "markdown-twin-links-html",
      "a twin links to the HTML page of a route that has its own twin"
    )
  );
  await t.test("no conversion CTA reaches the citable passage", () =>
    noneOf("markdown-twin-cta-leak", "a twin still renders a CTA button or an unseparated link pair")
  );
  await t.test("sibling chips keep a separator", () =>
    noneOf("markdown-twin-glued-inline", "adjacent bold runs collapsed into one another")
  );
  await t.test("front matter carries the author of record", () => {
    const post = path.join(OUT, "blog", "gdpr-eprivacy-analytics-legal-assessment.md");
    assert.ok(existsSync(post), "the sample post twin is missing");
    const md = readFileSync(post, "utf8");
    assert.match(md, /^author: "/m, "blog twins must name their author in the front matter");
    assert.match(md, /^author_url: "https:\/\//m, "the author needs a resolvable URL");
  });
  await t.test("an enumerable index is published", () => {
    const idx = path.join(OUT, "llms-md-index.txt");
    assert.ok(existsSync(idx), "out/llms-md-index.txt is missing");
    const lines = readFileSync(idx, "utf8").split("\n").filter((l) => l.startsWith("https://"));
    assert.ok(lines.length > 100, `index lists only ${lines.length} twins`);
  });
});

test("robots.txt policy", { skip }, async (t) => {
  const robots = readFileSync(path.join(OUT, "robots.txt"), "utf8");

  await t.test("publishes the sitemap", () =>
    assert.match(robots, /^Sitemap: https:\/\/sealmetrics\.com\/sitemap\.xml$/m)
  );
  await t.test("keeps Markdown twins out of the classic search index", () => {
    for (const bot of ["Googlebot", "Bingbot"]) {
      const block = robots.split(new RegExp(`User-agent: ${bot}\\s*\\n`))[1]?.split(/\n\s*\n/)[0] ?? "";
      assert.match(block, /Disallow: \/\*\.md\$/, `${bot} is not told to skip .md twins`);
    }
  });
  await t.test("does not block AI crawlers", () => {
    // Blocking these is a business decision, not a default. If it is ever
    // taken deliberately, this test is the place to record it.
    for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]) {
      const block = robots.split(new RegExp(`User-agent: ${bot}\\s*\\n`))[1]?.split(/\n\s*\n/)[0] ?? "";
      assert.ok(block, `${bot} has no explicit policy in robots.txt`);
      assert.doesNotMatch(block, /Disallow: \/\s*$/m, `${bot} is blocked from the whole site`);
      assert.doesNotMatch(block, /Disallow: \/\*\.md\$/, `${bot} cannot read the Markdown twins`);
    }
  });
});

test("404 page", { skip }, async (t) => {
  const p = path.join(OUT, "404.html");
  await t.test("is published", () => assert.ok(existsSync(p), "out/404.html is missing"));

  const html = existsSync(p) ? readFileSync(p, "utf8") : "";
  // Next embeds an RSC flight payload that mentions its built-in not-found
  // string; that is serialized data, not rendered output. Assert on the
  // document instead.
  const document = html.split("<script>self.__next_f")[0];
  await t.test("is the branded page, not Next's default", () => {
    assert.doesNotMatch(document, /404: This page could not be found/);
    assert.match(document, /<title>Page not found \(404\)/);
  });
  await t.test("declares no hreflang pointing at the homepage", () =>
    assert.doesNotMatch(document, /rel="alternate" hreflang=/i)
  );
  await t.test("declares html lang", () => assert.match(html, /<html lang="en"/));
  await t.test("has exactly one h1", () =>
    assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1)
  );
  await t.test("is noindex", () => assert.match(html, /<meta name="robots" content="noindex/));
  await t.test("carries no canonical", () => assert.doesNotMatch(html, /rel="canonical"/));
  await t.test("keeps the site chrome so visitors can navigate out", () => {
    assert.match(html, /<footer/);
    assert.match(html, /href="\/product\/?"/);
  });
  await t.test("leaves no unbranded 404 on a crawlable URL", () => {
    for (const dir of ["404", "_not-found", "404-page"]) {
      assert.ok(!existsSync(path.join(OUT, dir)), `out/${dir}/ should have been removed`);
    }
  });
});

test("llms.txt stays in sync with the sitemap", { skip }, async (t) => {
  const llms = readFileSync(path.resolve("public/llms.txt"), "utf8");
  const sitemap = readFileSync(path.join(OUT, "sitemap.xml"), "utf8");

  const sitemapPaths = new Set(
    [...sitemap.matchAll(/<loc>https:\/\/sealmetrics\.com([^<]*)<\/loc>/g)]
      .map((m) => m[1].replace(/\/$/, ""))
      .filter(Boolean)
  );
  const llmsPaths = new Set(
    [...llms.matchAll(/^- (\/[^\s—]+)/gm)].map((m) => m[1].replace(/\/$/, ""))
  );

  await t.test("lists no URL that is absent from the sitemap", () => {
    const stale = [...llmsPaths].filter((p) => !sitemapPaths.has(p));
    assert.deepEqual(stale, [], `stale llms.txt entries:\n  ${stale.join("\n  ")}`);
  });
  await t.test("declares what Sealmetrics does not do", () => {
    // GEO guardrail: models recommend more accurately when the limits are
    // stated. These are also hard product claims we must never invert.
    assert.match(llms, /does not do multi-touch attribution/i);
    assert.match(llms, /no individual user tracking/i);
  });
});

test("no client-side storage anywhere in src/", () => {
  // Hard project rule: no localStorage / sessionStorage / IndexedDB / Cache API,
  // ever. State is kept in memory per session. It is also a claim the /security
  // page makes to visitors, so breaking it is a credibility problem, not just a
  // style one. Prose mentioning the APIs is fine — actual calls are not.
  const offenders = [];
  const CALL = /(?:window\.)?(localStorage|sessionStorage|indexedDB)\s*\.\s*\w+\s*\(|caches\s*\.\s*(?:open|match|keys|delete)\s*\(/;
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(ts|tsx)$/.test(e.name)) {
        readFileSync(p, "utf8")
          .split("\n")
          .forEach((line, i) => {
            if (CALL.test(line)) offenders.push(`${p}:${i + 1}  ${line.trim().slice(0, 90)}`);
          });
      }
    }
  };
  walk(path.resolve("src"));
  assert.deepEqual(offenders, [], `client-side storage calls found:\n  ${offenders.join("\n  ")}`);
});

test("no page claims a certification Sealmetrics does not hold", { skip }, () => {
  const offenders = [];
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".md")) {
        const text = readFileSync(p, "utf8");
        // "ISO 27001 certified" / "SOC 2 certified" are the banned claims.
        // Naming the standard to say we are NOT certified is required copy,
        // so negation is checked per sentence — a disclaimer three paragraphs
        // away must not license a claim here.
        for (const sentence of text.split(/(?<=[.!?])\s+|\n/)) {
          const m = sentence.match(/(ISO\s?27001|SOC\s?2)[^.\n]{0,40}(certified|certification)/i);
          if (!m) continue;
          const negated = /\b(no|not|never|without|does not|isn't|aren't|sin|no\s+reclama)\b/i.test(
            sentence
          );
          if (!negated) offenders.push(`${path.relative(OUT, p)}: "${sentence.trim().slice(0, 120)}"`);
        }
      }
    }
  };
  walk(OUT);
  assert.deepEqual(offenders, [], `unsupported certification claims:\n  ${offenders.join("\n  ")}`);
});
