# Technical SEO Audit — sealmetrics.com

Date: 2026-06-09 · Live fetch (GitHub Pages / Fastly) · Sample: 12 pages (6 EN + 6 ES twins) + all 170 sitemap URLs status-checked

## Overall Technical Score: 86/100

| Category | Score | Status |
|---|---|---|
| Crawlability | 96 | Pass |
| Indexability | 95 | Pass |
| Hreflang / i18n | 80 | Pass with gaps |
| Security | 55 | Constrained by hosting |
| URL Structure & Redirects | 92 | Pass |
| Mobile | 100 | Pass |
| 404 Handling | 95 | Pass |
| JavaScript Rendering | 100 | Pass |
| Structured Data | 90 | Pass |

---

## What was checked

- `robots.txt` — 200, valid. `Allow: /` for all, `Disallow: /api/` and `/demo/thank-you`. 20 AI/LLM crawler tokens explicitly allowed (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, etc.). Sitemap and `LLMs-Txt` directives present; `llms.txt` resolves 200.
- `sitemap.xml` — 200, 170 URLs, all with trailing slash, all returned HTTP 200 (zero dead sitemap entries). Per-URL `xhtml:link` hreflang annotations (en / es / x-default) and `lastmod` present throughout.
- Canonicals — all 12 sampled pages self-canonicalize correctly to the trailing-slash HTTPS URL. ES pages canonicalize to themselves (correct — not to EN).
- Hreflang in `<head>` — present and reciprocal on homepage, /pricing/, /vs/ga360/, /glossary/cookieless-analytics/, /for/ecommerce/ and ES twins (rendered as `hrefLang=`, case-insensitive, valid). **Missing on blog posts** (EN + ES) — only the sitemap carries hreflang for blog URLs.
- Redirects — http→https 301, www→apex 301, non-trailing-slash→slash 301. Single-hop chains everywhere tested. Uppercase paths 404 (case-sensitive GitHub Pages — acceptable).
- 404 — custom page, real HTTP 404 status, `noindex` meta. Correct (no soft-404).
- Security headers — none of HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy are sent.
- Mobile — `<meta name="viewport" content="width=device-width, initial-scale=1">` and `<meta charset="utf-8">` on all sampled pages.
- Rendering — full static HTML (homepage ~185 KB, content + h1 + JSON-LD server-rendered). No JS required for indexing.
- Internal links (homepage sample, 38 unique) — zero broken; one avoidable 301 (`/data-loss-calculator` linked without trailing slash).

---

## Issues

### Critical
- None.

### High
- **No security headers (HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy).** GitHub Pages does not allow custom response headers — this **cannot be fixed at the current host** and any "add headers at the CDN" recommendation requires a hosting migration first (we do not control the Fastly layer). Log as accepted risk or as a driver for the eventual migration; do not attempt edge workarounds. Partial in-HTML mitigation possible via `<meta http-equiv="Content-Security-Policy">` if ever needed, but limited and not recommended as primary fix.

### Medium
- **Blog posts missing hreflang `<link>` tags in `<head>`** (verified on `/blog/cookieless-analytics-explained/` and its `/es/` twin; non-blog templates have them). Sitemap hreflang covers Google, but the inconsistency means Bing and other engines that rely on head tags may mis-serve language versions, and mixed methods complicate debugging. Fix: add the same `alternates.languages` metadata used by pillar/glossary/vs templates to the blog post template (`src/app/blog/[slug]/page.tsx` or equivalent).
- **Open Graph gaps on blog posts**: `og:image` and `og:url` missing on blog (homepage has `og:image` but also lacks `og:url`). Affects social sharing previews, not rankings. Add `og:url` site-wide and a default `og:image` for articles.

### Low
- **`/favicon.ico` returns 404.** New `favicon_sealmetrics.avif`/`.webp` exist in `public/` (untracked, not yet deployed). Ship a real `favicon.ico` (or `icon.png` via Next metadata) — some crawlers and tools request it unconditionally.
- **Internal link to `/data-loss-calculator` (no trailing slash) on homepage** triggers an avoidable 301. Update the href to `/data-loss-calculator/`. Grep for other non-slash internal hrefs site-wide.
- `/manifest.webmanifest` linked without trailing slash — correct as a file URL, no action.

### By design / not issues
- `pixel-pre.sealmetrics.com` endpoint — correct by design, do not flag.
- Uppercase URL 404s — expected on case-sensitive static hosting; internal links are consistently lowercase.
- 20-block AI crawler robots.txt — intentional LLM discoverability strategy, consistent with `llms.txt`.

---

## Strengths to preserve

- Zero dead sitemap URLs across all 170 entries; consistent trailing-slash URL policy.
- Clean single-hop redirect behavior on protocol, host, and slash variants.
- Self-referencing canonicals correct on every sampled page in both languages.
- Fully server-rendered static HTML — no JS rendering dependency, ideal for crawlers and LLM ingestion.
- Proper hard-404 with noindex (no soft-404 risk).
- JSON-LD present on sampled page types.

## Recommended fix order

1. Add hreflang head tags to the blog post template (Medium, ~1 file).
2. Add `og:url` site-wide and `og:image` to article metadata (Medium).
3. Deploy `favicon.ico`; fix `/data-loss-calculator` href (Low).
4. Document security headers as a hosting-migration prerequisite — no action on current stack (High, blocked).
