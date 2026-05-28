# Technical SEO Audit — sealmetrics.com (production)

- Audit date: 2026-05-28
- Auditor: Technical SEO agent (live HTTP probes, no rendering engine)
- Scope: live production HTML, headers, robots.txt, sitemap.xml, llms.txt across EN (`/`) and ES (`/es/`)
- Pages sampled: `/`, `/product/`, `/pricing/`, `/blog/`, `/vs-ga4/`, `/es/`, `/es/product/`, `/open/`, `/demo/`, `/demo/thank-you/`, plus 25-URL random sitemap sample
- Infra: GitHub Pages origin behind Fastly (`server: GitHub.com`, `via: 1.1 varnish`)

## Technical score: 72 / 100

Strong on crawlability, indexability, sitemap/hreflang plumbing and on-page structure. Loses points on TLS posture (no HTTP→HTTPS redirect, no HSTS), security headers (none set), CDN cache policy on hashed assets, and a handful of metadata length violations.

---

## Issue summary (severity-ordered)

### CRITICAL — fix immediately

#### C1. HTTP (port 80) returns 200, never redirects to HTTPS
- **Evidence**: `curl -I http://sealmetrics.com/` → `HTTP/1.1 200 OK` with full HTML body (`content-length: 191555`). Same on `http://sealmetrics.com/product/`. No 301/308 to HTTPS issued.
- **Impact**: Plaintext analytics marketing pages served forever to clients that hit `http://`. SEO duplicate-content risk (Google can crawl both schemes). Cookieless story is undermined by a non-TLS origin. Mixed-content risk if any embed loads HTTP.
- **Fix**: On GitHub Pages → repo Settings → Pages → enable "Enforce HTTPS". If Fastly sits in front, add a VCL rule forcing 301 on `req.http.X-Forwarded-Proto == "http"`. Verify with `curl -I http://sealmetrics.com/` returns `301` + `Location: https://sealmetrics.com/`.

#### C2. No HSTS header
- **Evidence**: `curl -I https://sealmetrics.com/` headers contain no `strict-transport-security`. Only `Access-Control-Allow-Origin: *` security-relevant header is set.
- **Impact**: SSL-stripping window every visit. Once C1 is fixed, HSTS is the standard hardening. Also weakens HSTS-preload eligibility.
- **Fix**: Add via Fastly: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`. Start with 6-month max-age (15768000) for 1 week, then raise to 1 year and submit to hstspreload.org.

---

### HIGH — fix this sprint

#### H1. No security headers at all (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- **Evidence**: Full response header set on `/` contains none of these. GitHub Pages does not add them; Fastly is configured pass-through.
- **Impact**: Clickjacking exposure (no `X-Frame-Options` / `frame-ancestors`), MIME-sniff exposure (no `X-Content-Type-Options: nosniff`), leaky `Referer` on outbound. Also fails most enterprise security scorecards that prospects will run pre-deal — bad look for a privacy-positioned vendor.
- **Fix**: Add at Fastly edge (project is static, so policy can be strict):
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains` (see C2)
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`
  - `Content-Security-Policy` — start in `Content-Security-Policy-Report-Only` mode. Skeleton: `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://pixel-pre.sealmetrics.com; frame-ancestors 'self'`. Tune from violation reports before promoting to enforcing.
  - Frame-ancestors handles X-Frame-Options under modern CSP — skip XFO once CSP is enforcing.

#### H2. Hashed Next.js assets served with `cache-control: max-age=600`
- **Evidence**: `curl -I https://sealmetrics.com/_next/static/chunks/24fb5f3deeee32ad.js` → `cache-control: max-age=600`. Same on `/_next/static/media/051742360c26797e-s.p.102b7f24.woff2`. GitHub Pages forces this; Fastly is not overriding.
- **Impact**: Browsers and Fastly revalidate fingerprinted assets every 10 minutes. Repeat-view LCP and TTFB are worse than they need to be on every CDN node and every returning visitor. Direct hit on Core Web Vitals (LCP, INP) on slower networks.
- **Fix**: At Fastly, for paths matching `^/_next/static/` set `Cache-Control: public, max-age=31536000, immutable` (these filenames are content-hashed and safe to long-cache). Set HTML to a short TTL (e.g. `max-age=0, must-revalidate, s-maxage=600`) so deploys propagate. This is the single biggest CWV win available.

#### H3. Homepage title and description exceed CLAUDE.md length rules (EN + ES)
- **Evidence**:
  - `/` title = 67 chars: "SealMetrics — Consentless analytics for eCommerce. Real data again." (rule: <60)
  - `/` description = 171 chars (rule: <160)
  - `/es/` title = 71 chars, description = 179 chars (same overflow in Spanish)
- **Impact**: Google truncates titles at ~580px (≈60 chars) and descriptions at ~160 chars, hiding the strongest keyword and CTA tail. The current EN title hides "Real data again" in most SERPs.
- **Fix**: Tighten to ≤58 / ≤155 chars. Suggested EN title: "SealMetrics — Consentless analytics for eCommerce" (50 chars). Suggested EN description: "Consentless analytics that measures 100% of your eCommerce traffic. No cookies. No modelling. Numbers that match Shopify." (≈145 chars). Mirror in ES. Located in `src/app/(en)/layout.tsx` (or page.tsx) and the ES equivalent under `src/app/es/`.

#### H4. Blog index title is too short and generic
- **Evidence**: `/blog/` title = "Blog — SealMetrics" (18 chars); description = "Insights on web analytics, data quality, attribution, and privacy-first measurement." (84 chars).
- **Impact**: No keyword targeting on a high-traffic hub page. Wasted SERP real estate on a page that should rank for category terms like "cookieless analytics blog", "GDPR analytics insights", etc.
- **Fix**: Update to ~55-char title with a keyword and ~150-char description. Suggested: "Cookieless Analytics & GDPR — SealMetrics Blog" + description that names the four content pillars (data capture, attribution, GDPR, AI agents).

#### H5. Bare Next.js default 404 page
- **Evidence**: `curl https://sealmetrics.com/this-page-should-not-exist-xyz/` returns 404 with the unstyled Next.js fallback ("404: This page could not be found." in system-ui). No header, no nav, no footer, no search, no `noindex` (already on it by default), no branded recovery links.
- **Impact**: A user landing on a broken or moved URL bounces. Lost link equity from external 404 referrers because there's no internal nav to recapture them.
- **Fix**: Create `src/app/not-found.tsx` (and `src/app/es/not-found.tsx` if locale-specific) with header + footer + 4-6 contextual links (`/product/`, `/pricing/`, `/blog/`, `/vs-ga4/`, `/demo/`) and a brief "We moved some things — try these" message. Confirms 404 status, adds recovery paths. Keeps the existing `noindex`.

---

### MEDIUM — fix when polishing

#### M1. Mixed trailing-slash usage in homepage outbound links
- **Evidence**: On `/`, `href="/data-loss-calculator"` (no slash) appears alongside `href="/data-loss-calculator/"` (with slash). The slash-less version 301-redirects to the slash version.
- **Impact**: Internal 301 hop wastes crawl budget on every page render. Minor PageRank dilution per hop.
- **Fix**: Grep the codebase for `href="/[a-z-]+"$` (no trailing slash) and normalise to trailing-slash form. The site's canonical convention is trailing slash (confirmed by every canonical/sitemap entry).

#### M2. Homepage ships 20 JSON-LD blocks
- **Evidence**: 20 `<script type="application/ld+json">` blocks on `/`. Types observed: SoftwareApplication, WebPage, FAQPage, three CreativeWork, three Quotation, plus more. ~7 of them on `/product/`, `/pricing/`, `/vs-ga4/`, `/es/`.
- **Impact**: Page weight and parse cost. Quotation schema is rarely rendered by Google; CreativeWork without specific subtype is weak. Risk of structured-data spam flag if testimonial/quote count keeps growing.
- **Fix**: Audit each block. Keep: Organization (once, sitewide), WebSite (with SearchAction once, sitewide), SoftwareApplication, FAQPage where the visible content matches. Consolidate Quotation/CreativeWork into a single Review or `aggregateRating` on SoftwareApplication. Validate the result in Google's Rich Results Test.

#### M3. `/open/` page H1 is a single word
- **Evidence**: H1 on `/open/` = "Open". Title = "Open — How we measure at SealMetrics" (36 chars).
- **Impact**: One-word H1 gives Google nothing to score the page against. The /open hub is intended to attract editorial / brand searches but currently signals nothing semantic.
- **Fix**: Rewrite H1 to a keyword-loaded sentence in the editorial tone (per `feedback_open_tone.md`), e.g. "How SealMetrics measures, prices, and decides — in public" (52 chars). Keeps the brand "Open" framing as eyebrow/kicker above the H1.

#### M4. `/favicon.ico` returns 404
- **Evidence**: `curl -I /favicon.ico` → 404. `/favicon.png` and `/favicon_sealmetrics.avif|webp` (uncommitted) exist.
- **Impact**: Legacy browsers and several crawlers (including some link previewers) still hit `/favicon.ico` by default. Each load = an extra 404 in logs and a missing icon in some clients.
- **Fix**: Ship a 32x32 ICO at `public/favicon.ico` (multi-resolution: 16/32/48 in one file). Cheap and final. The new AVIF/WebP variants are good additions but don't replace the `.ico` fallback.

#### M5. Static script loading: 9 chunks loaded async on every page
- **Evidence**: Homepage HTML contains 9 separate `<script async src="/_next/static/chunks/…">` tags plus turbopack chunk plus a noModule fallback. No `defer`, no `<link rel="modulepreload">` hints. Total script bytes are non-trivial on a 191 KB HTML payload.
- **Impact**: With H2 unfixed, all 9 chunks are revalidated every 10 minutes. Even fixed, the chunk count adds connection overhead and slightly raises INP on first interaction.
- **Fix**: In `next.config.ts` consider `experimental.optimizePackageImports` for any heavy libs (the project is intentionally library-light, so likely already minimal). Verify Lighthouse "reduce unused JavaScript" doesn't flag specific chunks. Lower-priority than H2.

#### M6. `/demo/thank-you/` is reachable (200) and only blocked via robots.txt
- **Evidence**: `curl https://sealmetrics.com/demo/thank-you/` → 200, HTML contains `<meta name="robots" content="noindex, nofollow">`. robots.txt also has `Disallow: /demo/thank-you`.
- **Impact**: This is mostly fine. Note: robots.txt `Disallow` + `noindex` together is a Google-documented anti-pattern — if the URL is disallowed, Google can't crawl it to see the `noindex`, so it can stay in the index from external links. The HTML noindex is the right answer; the robots disallow is redundant and harmful.
- **Fix**: Remove `Disallow: /demo/thank-you` from `public/robots.txt`. Keep the `noindex` meta. Let Google crawl, see the noindex, and drop it cleanly.

---

### LOW — nice to have

#### L1. `hrefLang` attribute case (React style) instead of `hreflang`
- **Evidence**: All pages render `<link rel="alternate" hrefLang="en" …>` (camelCase from React's JSX). HTML attribute names are case-insensitive at parse time, so Google/Bing read it correctly.
- **Impact**: Cosmetic only. Some third-party SEO tools (older Screaming Frog versions, lighter crawlers) may flag false-positive "missing hreflang". Does not affect Google.
- **Fix**: None required. If desired, force lowercase by using `dangerouslySetInnerHTML` for the link tags in `src/app/.../layout.tsx`. Not worth doing.

#### L2. Homepage description string contains HTML entity `&#x27;` (apostrophe)
- **Evidence**: `<meta name="description" content="… GA4 can&#x27;t see …">`
- **Impact**: Renders fine in SERPs (Google decodes), but slightly noisy in raw HTML inspection.
- **Fix**: Already correct HTML escaping — React's standard output. No action needed.

#### L3. Preconnects/dns-prefetch absent
- **Evidence**: No `<link rel="preconnect">` or `<link rel="dns-prefetch">` on any sampled page.
- **Impact**: Minor — site is fully first-party, no Google Fonts, no external CDN for assets. The only third-party connection the marketing site makes is to `pixel-pre.sealmetrics.com` from the tracking pixel, and that's lazy-loaded after first paint.
- **Fix**: Optionally add `<link rel="preconnect" href="https://pixel-pre.sealmetrics.com" crossorigin>` in the root layout `<head>`. Saves ~50-150 ms on the first pixel POST. Not critical.

#### L4. Empty `<meta name="next-size-adjust" content="">` on every page
- **Evidence**: Present in every static HTML. Next.js 16 internal — used for font size-adjust.
- **Impact**: None. Standard Next.js artifact.
- **Fix**: None — framework-managed.

#### L5. `next/image` not used (intentional)
- **Evidence**: All image tags are plain `<img>` with explicit `width`/`height`, `loading="lazy"`, `decoding="async"`, and `alt`. Hero logo correctly uses `loading="eager"` + `fetchPriority="high"`.
- **Impact**: None — actually a clean implementation for static export. No CLS risk since dimensions are set. The `output: "export"` + `unoptimized: true` setup precludes next/image transforms anyway.
- **Fix**: None. Consider serving `.avif` or `.webp` variants with `<picture>` for heavier raster images if any LCP regression appears.

---

## Category breakdown

### 1. Crawlability — PASS
- `robots.txt` correctly served, 200, valid syntax, sitemap declared, all major AI crawlers explicitly allowed (GPTBot, Claude, Perplexity, Google-Extended, CCBot, etc.) — strong AI-citation posture
- `/sitemap.xml` returns 200, valid XML, 151 URLs, every URL has hreflang triples (en, es, x-default), `<lastmod>` populated
- 25-URL random sample from sitemap: 25/25 returned 200
- No accidental blocked paths
- One minor issue: `Disallow: /demo/thank-you` is redundant given on-page noindex (see M6)

### 2. Indexability — PASS
- All sampled pages have correct self-referential canonical (matches the URL)
- No accidental `noindex` on indexable pages
- `/demo/thank-you/` correctly has `noindex, nofollow` meta
- Default Next.js 404 page also correctly carries `noindex`
- URL case sensitivity enforced (uppercase paths return 404 — no duplicate content)
- hreflang reciprocity verified between `/product/` ↔ `/es/product/` and `/` ↔ `/es/`: each side declares both alternates plus `x-default` pointing to EN. Clean.
- One issue: title/description length overflow on homepage EN+ES (H3) and blog index (H4)

### 3. Security headers — FAIL
- HTTP → HTTPS: **no redirect** (C1)
- HSTS: **missing** (C2)
- CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy: all **missing** (H1)
- HTTPS itself: working, valid cert via GitHub Pages
- www → non-www: 301 in place (correct)

### 4. URL structure — PASS with minor noise
- Trailing slash convention enforced (slashless URLs 301 to slashed)
- Lowercase enforced (uppercase returns 404)
- No query strings in canonical URLs
- One internal link inconsistency on homepage (M1) — `/data-loss-calculator` linked without slash, triggers internal 301

### 5. Mobile — PASS
- `<meta name="viewport" content="width=device-width, initial-scale=1">` on all sampled pages
- All `<img>` tags have explicit `width`/`height` (no CLS from images)
- Responsive Tailwind classes throughout (verified via grep on rendered HTML — `md:`, `lg:` breakpoint utilities present)
- No fixed-pixel layouts in inline styles

### 6. Core Web Vitals signals — MIXED
- LCP risk: **medium**. Fonts preloaded as `as="font"` crossorigin (good). Hero image marked `fetchPriority="high"`, `loading="eager"` (good). But H2 (10-min cache on hashed assets) hits repeat-view LCP hard.
- INP risk: **low**. Static HTML, minimal interactivity, no heavy framework runtime (no Framer Motion, no animation libs per CLAUDE.md).
- CLS risk: **low**. All images have width/height. No web-font swap visible (next/font handles the swap with size-adjust).
- One render-blocking: `<link rel="stylesheet" href="/_next/static/chunks/58217bd43b1cf9cd.css">` is render-blocking by default — acceptable for one file.
- 21 scripts on homepage, all `async`, plus 10 JSON-LD blocks. Trim JSON-LD per M2.

### 7. JavaScript rendering — PASS
- Static HTML contains all primary content (H1, paragraphs, CTAs, navigation, footer) for every sampled page
- 100% server-rendered via Next.js static export — Googlebot and AI crawlers see the same HTML as humans on first paint
- No client-side-only content on indexable pages
- Page weights (gzipped roughly 1/4 of these numbers): home 191 KB, product 122 KB, pricing 184 KB, blog 110 KB, vs-ga4 135 KB, es 184 KB

### 8. Bilingual integrity — PASS
- hreflang triples on every page: `en`, `es`, `x-default` → EN
- Reciprocity confirmed on spot-checked pairs (`/` ↔ `/es/`, `/product/` ↔ `/es/product/`)
- `<html lang>` set correctly (`en` on EN pages, `es` on ES pages)
- Canonical URLs align with hreflang self-references
- Sitemap declares both locales for every page with xhtml:link alternates
- For deeper hreflang validation (currency tags, region targeting, cluster coverage) defer to the `seo-hreflang` sub-skill

---

## Recommended fix order

1. **C1** — enable "Enforce HTTPS" in GitHub Pages settings (1 minute, infra)
2. **C2 + H1** — add Fastly VCL snippet with HSTS + CSP-Report-Only + nosniff + Referrer-Policy + Permissions-Policy (1 PR)
3. **H2** — add Fastly VCL override of `Cache-Control` for `/_next/static/*` → `public, max-age=31536000, immutable` (same PR as above)
4. **H3 + H4** — tighten homepage and blog index metadata (1 small content PR)
5. **H5** — build branded `not-found.tsx` (1 component PR)
6. **M1, M2, M3, M4, M6** — bundle into one cleanup PR

## Out of scope / not flagged

- AI crawler robots.txt rules: already comprehensive, well above the typical baseline
- Sitemap content: 151 URLs, 100% return 200, hreflang clean
- llms.txt: well-structured, lists 70+ canonical paths, all real
- `pixel-pre.sealmetrics.com` references on the marketing site: per `project_pixel_endpoint.md` this is by design; not flagged
- Open section structure: per `project_open_section.md`, 11 chapters in 4 parts; only `/open/` index H1 flagged for being one word

## Evidence artefacts (local)

- `/tmp/home.html`, `/tmp/product.html`, `/tmp/pricing.html`, `/tmp/blog.html`, `/tmp/vsga4.html`, `/tmp/es.html`, `/tmp/es_product.html`, `/tmp/open.html`, `/tmp/demo.html`, `/tmp/post.html`
- `/tmp/sm.xml` (sitemap.xml snapshot)
- `/tmp/llms.txt` (llms.txt snapshot)
- `/tmp/all_urls.txt` (151 sitemap URLs)
- `/tmp/sample.txt` (25-URL random sample, all returned 200)
