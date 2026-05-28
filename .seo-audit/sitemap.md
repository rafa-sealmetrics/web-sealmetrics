# Sitemap Audit — sealmetrics.com/sitemap.xml

Fetched: 2026-05-28 · HTTP 200 · 44 KB · 901 lines
Total `<url>` entries: 151 (100 EN + 50 ES + 1 homepage)
hreflang link tags: 294 across bilingual entries

Verdict: PASS with minor polish items. No Critical or High findings. Sitemap generator is correctly auto-discovering all `page.tsx` routes from `src/app/(en)` and `src/app/(es)/es`, and the only true dynamic route (`/open/[slug]`) is being expanded from `publishedChapters`.

---

## 1. XML validity — PASS

- `<?xml version="1.0" encoding="UTF-8"?>` present, well-formed.
- Namespaces correct: `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"` and `xmlns:xhtml="http://www.w3.org/1999/xhtml"`.
- All `<xhtml:link>` alternates correctly namespaced.
- All URLs absolute, HTTPS, properly XML-encoded.

## 2. URL hygiene — PASS

- Trailing slash: 100% consistent. Every `<loc>` ends in `/`. Matches Next.js `trailingSlash` convention.
- Spot-checked 5 URLs (`/about/`, `/blog/cookieless-analytics-explained/`, `/es/blog/ga4-google-ads-separation/`, `/open/why-we-exist/`, `/free-audit/`) — all return HTTP 200 with `chain=0` (no redirects).
- No mixed-case slugs; no query strings; no fragments.

## 3. Coverage — PASS

Filesystem `page.tsx` count vs sitemap entries reconcile cleanly:

| Section | FS dirs (EN) | Sitemap (EN) | FS dirs (ES) | Sitemap (ES) |
|---|---|---|---|---|
| `/blog/[slug]` | 27 | 27 | 6 | 6 |
| `/glossary/[slug]` | 15 | 15 | 5 | 5 |
| `/case-studies/[slug]` | 3 | 3 | 3 | 3 |
| `/for/[role]` | 9 | 9 | 9 | 9 |
| `/vs/[competitor]` | 4 | 4 | 4 | 4 |
| `/open/[slug]` (dynamic) | 8 published chapters | 8 | n/a | n/a |

Excluded routes correctly absent from sitemap:
- `/demo/thank-you/` — HTTP 200, served, NOT in sitemap. Verified `<meta name="robots" content="noindex, follow">` is set. PASS.
- `/diagnostic-result/` — HTTP 200, served, NOT in sitemap. Verified noindex meta. PASS.
- `/demo-access/` — referenced in `EXCLUDE` set, no filesystem entry, not in sitemap. PASS.

## 4. Dynamic route expansion — PASS (and worth flagging as a non-issue)

The user-supplied prompt suspected blog/glossary might be dynamic and silently dropped. They are **not** dynamic — every blog post and glossary term lives in its own `page.tsx` folder (e.g. `src/app/(en)/blog/cookieless-analytics-for-ecommerce/page.tsx`). The `collectRoutes()` walker therefore picks them up automatically. **No dynamic-route expansion is required for blog/glossary, and none is missing.**

The only dynamic segment in the filesystem is `src/app/(en)/open/[slug]/page.tsx`, and `sitemap.ts` correctly iterates `publishedChapters` to emit 8 URLs (matches the 8 chapter slugs with `status: "ready"` in `src/lib/content/open.ts`). Draft chapters (4 of them, including 03/05/glossary-not-yet-ready) are excluded as intended.

Registry slug counts vs sitemap:
- `blog.ts`: 29 entries total, 4 marked `draft: true`, 25 publishable. Sitemap has 27 EN blog posts. **Mismatch: 2 extra in sitemap.** See Finding L1 below.
- `glossary.ts`: 16 entries. Sitemap has 15 EN glossary URLs. One entry exists in `glossary.ts` but has no `page.tsx` under `(en)/glossary/`. See Finding L2.
- `open.ts`: 12 chapters total, 8 ready. Sitemap has 8 `/open/[slug]/` URLs + `/open/` + `/open/glossary/` = 10 `/open/*` URLs. Matches expectation.

## 5. Hreflang reciprocity — PASS

Random reciprocity checks:
- `/about/` ↔ `/es/about/` — both sides reference each other + `x-default → /about/`. OK.
- `/vs-ga4/` ↔ `/es/vs-ga4/` — reciprocal. OK.
- `/blog/why-ga4-shows-13pct-eu-traffic/` ↔ ES counterpart — reciprocal. OK.
- `x-default` always points to the EN URL. OK.

EN-only routes (no ES counterpart in filesystem) correctly emitted without alternates:
- `/changelog/`, `/contact/`, `/customers/`, `/free-audit/`, `/partners/`, `/pricing-plans/`, `/videos/`, `/dpa/`, `/privacy/`, `/terms/` — verified bare `<url><loc>…</loc><lastmod>…</lastmod></url>`. OK.

ES-only routes: none (every ES route mirrors an EN route).

## 6. lastmod — PASS with polish opportunity

- All entries have `<lastmod>` in ISO 8601 (`YYYY-MM-DD`) format.
- Blog posts use real publication dates from `blog.ts` (e.g. `cookieless-analytics-for-ecommerce` → `2026-04-24`, `why-ga4-shows-13pct-eu-traffic` → `2026-03-06`). PASS.
- 20+ distinct dates in sitemap — not all identical, which is good.
- However, **every non-blog page reuses `today` = `2026-05-28`** (the build date). This is technically correct but uninformative — every static page will get a fresh lastmod on every rebuild, which can train Google to ignore the field. See Finding M1.

## 7. Size — PASS

151 URLs · 44 KB. Far below the 50,000-URL and 50 MB caps. No need for a sitemap index file. No quality-gate concerns: no programmatic location pages, no thin doorway pages — this is a hand-authored editorial site.

---

## Findings

### Medium

**M1 — Non-blog `lastmod` is build-time, not content-time**
`sitemap.ts:64` falls back to `today` (build timestamp) for every route that isn't `/blog/*`. Glossary terms, `/for/*` pages, `/vs/*`, `/open/*` chapters, case studies and pillar pages all get `2026-05-28` regardless of when their content actually changed. Google increasingly weights lastmod for crawl scheduling and will start ignoring sitemaps that appear to lie. The blog already has `getBlogDateModified()` + `blog-modified.json` (git-based). Extend the same pattern to glossary/open/pillar pages, or read git log for each route at build time.

**M2 — `publishedChapters` filter and the `/open/glossary/` route**
`/open/glossary/` appears in the sitemap as a static page (it has its own `page.tsx`). But it's listed as a "ready" item in the Open table of contents under `/open` while `openChapters` separately tracks a glossary chapter in `open.ts`. Confirm there's no duplicate (chapter slug `glossary` would also try to emit `/open/glossary/` via the `publishedChapters` loop, colliding with the static page). Quick fix: ensure no chapter has `slug: "glossary"` with `status: "ready"`, or have the static page win deterministically (it does today, but the `enRoutes.push(\`/open/${c.slug}\`)` would inject a duplicate if such a slug existed).

### Low

**L1 — Two blog posts in sitemap aren't in the visible `blogPosts` array (or are drafts)**
`blog.ts` has 29 entries, 4 of which are `draft: true` → 25 publishable. Sitemap has 27 EN blog URLs. The auto-walker emits every `page.tsx` it finds under `(en)/blog/`, including any post whose registry entry is marked `draft`. Two scenarios are possible:
- A draft entry in `blog.ts` still has a built `page.tsx` and is leaking into the sitemap (and presumably also into search).
- Two posts have `page.tsx` files but no `blog.ts` entry (so they'll render but won't appear in the blog index or get correct `lastmod`).

Either way, the registry and filesystem should be the single source of truth and currently disagree by 2. Action: diff `blogPosts.filter(p => !p.draft).map(p => p.slug)` against `fs.readdirSync('src/app/(en)/blog')` and reconcile.

**L2 — One glossary term in registry has no page**
`glossary.ts` has 16 entries, but only 15 `page.tsx` folders exist under `(en)/glossary/`. One term is registered but un-built — links to it from other pages will 404. Action: identify the missing term and either ship a page or remove the registry entry.

**L3 — Hardcoded `today` makes sitemap non-deterministic across builds**
`sitemap.ts:10` runs `new Date().toISOString()` at module-load time. Every rebuild produces a sitemap with a fresh date for ~140 of the 151 URLs, even when nothing changed. Combined with M1, this trains crawlers to discount `lastmod`. Fix together with M1 by deriving dates from git history per file.

### Info

**I1 — No `<priority>` or `<changefreq>` tags**
Correct — Google has ignored both for years. Not a finding, just confirming we're clean.

**I2 — `/free-audit/` and `/audit/` both exist and both appear in sitemap**
`/audit/` is bilingual (EN + ES), `/free-audit/` is EN-only. Different landing pages with different conversion goals. Worth verifying with the marketing owner that this is intentional and not a duplicate-content risk; if they target the same query, set one as canonical of the other or merge.

**I3 — robots.txt declares the sitemap correctly**
`https://sealmetrics.com/robots.txt` → `Sitemap: https://sealmetrics.com/sitemap.xml`. Also exposes `LLMs-Txt:` (non-standard but harmless). Disallows `/api/` and `/demo/thank-you`. PASS.

---

## Sample entry (well-formed, hreflang reciprocal)

```xml
<url>
  <loc>https://sealmetrics.com/about/</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://sealmetrics.com/about/" />
  <xhtml:link rel="alternate" hreflang="es" href="https://sealmetrics.com/es/about/" />
  <xhtml:link rel="alternate" hreflang="x-default" href="https://sealmetrics.com/about/" />
  <lastmod>2026-05-28</lastmod>
</url>
```

## Action checklist

- [ ] M1 + L3: Replace `today` fallback with per-route git-based `lastmod` (extend the `blog-modified.json` pattern to all routes).
- [ ] L1: Reconcile `blogPosts` registry vs `(en)/blog/` directory listing (currently 2 off).
- [ ] L2: Identify the orphan glossary registry entry (16 in `glossary.ts` vs 15 pages on disk) and ship or remove.
- [ ] M2: Add a defensive check in `sitemap.ts` so a chapter slug can't shadow a static route.
- [ ] I2: Confirm `/free-audit/` vs `/audit/` is intentional product split, not duplicate content.
