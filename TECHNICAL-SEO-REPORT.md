# Technical SEO Audit · SealMetrics

Date: 2026-05-04
Build: post-commit `1d07438` · 140 routes · 124-URL sitemap
Live: `https://sealmetrics.com` (still on 2026-04-24 deploy until next push)

---

## Technical Score: **75/100**

| Category | Status | Score | Notes |
|---|---|---|---|
| Crawlability | ✅ | 95/100 | robots.txt + sitemap + 21-bot AI allowlist; 0 noindex pages in sitemap |
| Indexability | ✅ | 92/100 | 138/140 canonicals; full hreflang mesh; redirect stubs correctly noindex |
| Security | ❌ | 30/100 | All 6 security headers MISSING on production; HTTP→HTTPS not 301'd |
| URL Structure | ✅ | 90/100 | Trailing-slash consistent; longest URL 73 chars; www→apex 301 works |
| Mobile | ✅ | 90/100 | Viewport meta present; overflow-x:hidden; min-h-[44px] CTAs (Sprint 2) |
| Core Web Vitals | ⚠️ | 70/100 | Build healthy; needs Fastly cache override + JS reduction |
| Structured Data | ✅ | 92/100 | See SCHEMA-REPORT.md — post-Schema-Council |
| JS Rendering | ✅ | 100/100 | 100% SSR (static export); canonical+robots+JSON-LD all in initial HTML |

---

## Critical issues (fix immediately — INFRA, source-side already done)

### C1 — All 6 security headers missing on production
HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy: every check returned ❌. For a privacy/compliance vendor, this is the single most damaging trust signal.

**Status:** code already committed in `1d07438`; **`INFRA-RUNBOOK.md` section 2** has the Fastly VCL snippet ready to paste. User action only.

### C2 — HTTP→HTTPS still returns 200, not 301
`curl -sI http://sealmetrics.com/` returns 200. Should redirect to HTTPS.

**Status:** **`INFRA-RUNBOOK.md` section 1** — toggle "Enforce HTTPS" in GitHub Pages Settings. 30-second user action.

### C3 — Static asset cache 600s on fingerprinted chunks
Hash-named `_next/static/chunks/*.js` carry `cache-control: max-age=600`. Wastes the entire fingerprint pattern. 31 immutable assets ready for `max-age=31536000`.

**Status:** **`INFRA-RUNBOOK.md` section 3** — Fastly fetch-stage VCL snippet ready. User action only.

---

## High priority (within 1 week)

### H1 — JS bundle 292KB gz total, ~200KB on first load
`a6dad97d9634a72d.js` is 112KB raw (~37KB gz) — the noModule legacy polyfill chunk. Sprint 4 added a `browserslist` field to `package.json` that should suppress it for modern browsers, but the chunk still ships. Next 16 emits the polyfill bundle regardless.

**Action:** investigate Next 16 `compiler.legacyBrowsers` or `experimental.modernBuild` flag in `next.config.ts`. Targeting modern browsers (ES2020+) typically saves 30-40KB gz on first load. Tracked in SPRINT-COMPLETE.md as "drop noModule polyfill" — Sprint 4 patch was incomplete.

### H2 — Homepage HTML payload 219KB (EN) / 222KB (ES)
Largest pages site-wide. Most of the weight is JSON-LD (Organization graph + 3× statisticClaimSchema + 3× Quotation + Speakable + SoftwareApplication = 8 blocks). Acceptable for SEO/AI value but worth profiling.

**Action:** consider hoisting the Organization+WebSite graph to a shared `<head>` injection so it's emitted once and cached, rather than serialized into every page's HTML. Saves ~30KB per page × 140 pages = ~4MB across the site.

### H3 — IndexNow not implemented
Bing, Yandex, Naver support the IndexNow protocol for sub-minute indexing notifications. Site has no `/<key>.txt` file at root.

**Action:** generate a 32-char key, drop into `/public/<key>.txt`, ping `https://api.indexnow.org/IndexNow` from CI on each deploy. ~2h. Lifts Bing/Copilot indexing speed dramatically.

---

## Medium priority (within 1 month)

### M1 — `<meta name="robots">` not in raw HTML on most pages
Default is "index, follow" via Next 16, but Google's December 2025 guidance recommends explicit `<meta name="robots" content="index, follow">` in the initial response — no JS dependency. Today only the redirect stubs and noindex pages emit the tag. Add an explicit allow-tag via `metadata.robots` in the root layout.

### M2 — Per-page `lastmod` for static routes
Today's sitemap uses `today` for all non-blog entries (build date). Over time Google discounts the signal. Mirror the `build-blog-modified.mjs` pattern for static page directories. ~30 min.

### M3 — Brotli not negotiated by GitHub Pages
GitHub Pages serves gzip only. If Fastly fronts the origin (likely), enable brotli at the Fastly edge. ~10% additional payload reduction over gzip. Add to INFRA-RUNBOOK as a section 5.

---

## Low priority (backlog)

### L1 — One blog URL just over 70 chars
`/blog/eu-digital-omnibus-cookie-banners-analytics/` (73 chars). Below the 100-char threshold but on the long side. Acceptable.

### L2 — Two pages without canonical
138/140. The 2 outliers are likely `/_not-found/` and `/404/` — Next 16 internals. Verify and add canonical if needed.

---

## Category deep dive

### Crawlability (95)

✅ `robots.txt` exists, well-formed, references `Sitemap:` directive
✅ 21 AI crawlers explicitly allowed (GPTBot, ClaudeBot, PerplexityBot, etc.) — see GEO-ANALYSIS.md
✅ `sitemap.xml` valid XML (Sitemaps 0.9 namespace)
✅ 124 URLs (well under 50k cap)
✅ 17 noindex pages in `/out/` correctly excluded from sitemap (redirect stubs + thank-you + diagnostic)
✅ Custom `LLMs-Txt:` directive at end of robots.txt for AI crawler discoverability

### Indexability (92)

✅ 138/140 pages have canonical (2 outliers are Next internals — not crawled)
✅ Self-referential canonicals on content pages
✅ Hreflang full mesh: 84 bilingual URLs with reciprocal en+es+x-default — 0 violations (HREFLANG-REPORT.md)
✅ Redirect stubs (`/contact`, `/customers`, `/features`, `/partners`, `/pricing-plans`, `/case-studies/european-hotel-group` EN+ES) correctly carry `noindex,follow` + canonical pointing at destination
✅ No duplicate content (canonical + trailing-slash policy + hreflang clean)
✅ Pagination not currently in use (no `page=2` patterns in any cluster)

### Security (30) — INFRA-only blockers

❌ Strict-Transport-Security MISSING
❌ Content-Security-Policy MISSING
❌ X-Frame-Options MISSING
❌ X-Content-Type-Options MISSING
❌ Referrer-Policy MISSING
❌ Permissions-Policy MISSING
❌ HTTP→HTTPS returns 200, not 301
✅ Valid SSL certificate
✅ HTTP/2 negotiated
✅ www→apex 301 working
✅ No mixed content (0 `http://` URLs in HTML)

All 7 ❌ are addressed by **INFRA-RUNBOOK.md** sections 1-3. The Fastly VCL snippets are ready to paste.

### URL Structure (90)

✅ Trailing slash consistent (124/124 sitemap URLs end with `/`)
✅ Hierarchy is logical (`/blog/<slug>`, `/glossary/<slug>`, `/case-studies/<slug>`, `/for/<vertical>`, `/vs/<vendor>`, `/es/<path>`)
✅ No query parameters for content
✅ Longest URL: 73 chars (acceptable; threshold is 100)
✅ www→apex 301 works
✅ No redirect chains in sitemap (0 sitemap URLs return non-200 in build)
⚠️ `/vs-ga4/` (legacy) coexists with `/vs/{ga360,adobe-analytics,piwik-pro}/` — intentional content architecture per Sprint 1 decision; not a defect

### Mobile (90)

✅ Viewport meta tag present
✅ Responsive Tailwind CSS
✅ `overflow-x: hidden` on html + body (Sprint 2 — was breaking 6/8 pages on 390px)
✅ Header CTA `min-h-[44px]` (Sprint 2 — was 41px, below WCAG 44px)
✅ Mobile-first indexing compliant (Google's exclusive mode since 2024-07-05)
⚠️ Some inline `text-[10px]` / `text-[11px]` labels on data chips — below the 12px legibility floor for body text but acceptable for monospace stamps. Not a Mobile Friendliness fail.

### Core Web Vitals (70)

Build-side analysis (production CWV pending fresh CrUX data after deploy):
- ✅ Per-route HTML 32-222KB; homepages largest (heavy JSON-LD)
- ⚠️ JS bundle 292KB gz total — H1 above
- ⚠️ noModule polyfill 112KB raw still shipping despite browserslist tightening
- ✅ Logo 94KB PNG → 13KB AVIF (86% reduction)
- ✅ AVIF/WebP siblings for all 9 raster sources
- ✅ Per-post OG images (24 + 2 case studies × 3 formats)
- ⚠️ Static asset cache 600s — INFRA fix pending
- ✅ `priority` removed from non-LCP images; LCP candidate is now H1 text on hero pages

### Structured Data (92)

See **SCHEMA-REPORT.md** (post-Schema Council). Headlines:
- 0 deprecated schemas (HowTo/FAQPage/ClaimReview all removed)
- 18 active schema helpers, all validated
- DefinedTerm + DefinedTermSet on glossary cluster
- statisticClaimSchema (16 instances) with QuantitativeValue + isBasedOn
- Article on every blog + case study (with auto-bound dateModified + per-post OG)
- Person schema for named case-study sources (Toni Andújar, Eduardo Martin)

### JS Rendering (100)

✅ 100% SSR via static export — every word of visible UI in initial HTML
✅ AI crawlers (none execute JS) see full content
✅ Canonical present in raw HTML (not JS-injected) — 1 per page
✅ JSON-LD structured data present in raw HTML — multiple blocks per page
✅ No client-only critical content
✅ No CSR/SPA hydration risk for indexing

Per Google's December 2025 JS SEO guidance:
- ✅ Canonical tags identical between SSR and client (no JS injection)
- ✅ Robots directives served in initial HTML (where present)
- ✅ Static export means no non-200 status codes on indexed routes
- ✅ Structured data (Product, Article) in initial server-rendered HTML

---

## What's still pending after this audit

| # | Item | Owner | Effort |
|---|---|---|---|
| 1 | Run INFRA-RUNBOOK.md sections 1-3 (HTTPS toggle + Fastly VCL) | infra | 30 min |
| 2 | `git push origin main` to ship the 6 commits | dev | 1 min |
| 3 | Drop noModule legacy polyfill via Next 16 config | dev | 1-2h |
| 4 | Implement IndexNow for Bing/Yandex/Naver | dev | 2h |
| 5 | Per-page `lastmod` for static routes (mirror blog-modified.mjs) | dev | 30 min |

After items 1+2, projected technical score: **75 → 92**.

---

## Source-of-truth files

- `public/robots.txt` — 21 AI bots + sitemap directive + LLMs-Txt declaration
- `public/sitemap.xml` (built from `src/app/sitemap.ts`) — 124 URLs, hreflang full mesh
- `INFRA-RUNBOOK.md` — Fastly VCL + GitHub Pages toggles for the 7 production-side fixes
- `SCHEMA-REPORT.md`, `HREFLANG-REPORT.md`, `VALIDATION-REPORT.md`, `GEO-ANALYSIS.md`, `SPRINT-COMPLETE.md` — companion audits
