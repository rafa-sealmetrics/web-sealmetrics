# Performance Audit — Core Web Vitals (2026-06-09)

**Scope:** `/`, `/pricing/`, `/blog/why-ga4-shows-13pct-eu-traffic/`
**Method:** Static analysis. PageSpeed Insights keyless API returned HTTP 429 (daily quota exhausted: `quota_limit_value: 0`); CrUX API requires a key. Re-run with an API key (free, Google Cloud console) for field data — especially since CrUX field data is what Google actually ranks on.

## Estimated Score: 88 / 100 (mobile, lab-equivalent estimate)

The site is structurally fast: static export, text-based LCP, preloaded fonts, lazy-loaded below-fold images, small DOM. The deductions are one heavy header PNG, ~195 KB of JS, GitHub Pages cache/compression limits, and GTM.

## Core Web Vitals Status (estimated — validate with CrUX)

| Metric | Estimate | Status |
|--------|----------|--------|
| LCP | ~1.8–2.4 s mobile | Pass (borderline on slow 4G due to 94 KB logo PNG competing for bandwidth) |
| INP | <200 ms | Pass likely (no heavy client interactivity; GTM payload is the unknown) |
| CLS | <0.05 | Pass (all `<img>` have width/height; `font-display: swap` with both body fonts preloaded) |

## Measured Data

### Network / server
- TTFB (from EU-adjacent test): `/` 57 ms, `/pricing/` 65 ms, blog 220 ms (Fastly cache MISS — cold edge for long-tail URLs)
- HTML: home 185 KB raw / 33 KB gzip; pricing 184 KB / 24 KB; blog 73 KB / 17 KB
- Compression: **gzip only — no Brotli** (br request fell back to identity, 225 KB uncompressed). GitHub Pages limitation.
- Caching: `cache-control: max-age=600` on **everything**, including content-hashed `/_next/static/*` assets that should be `immutable, max-age=31536000`. GitHub Pages does not allow custom headers.

### Render path (homepage)
- 1 stylesheet (15 KB gzip), 11 JS chunks all `async` (1 is `noModule`) — **no render-blocking JS**
- JS total: 195 KB gzip (~156 KB for modern browsers excluding the noModule legacy chunk). Largest chunks: 71 KB, 40 KB (legacy), 38 KB.
- 2 woff2 fonts preloaded (Onest, ~31 KB each, uncompressed-irrelevant since woff2); 28 `@font-face` declarations all `font-display: swap`
- No `preconnect`/`dns-prefetch` for `www.googletagmanager.com`
- H1 is text ("Make decisions with data you trust again") — LCP element is text, ideal

### Images
- **`/logos/logo-sealmetrics-negro.png` is 94 KB** for a 160×32 header logo, marked `loading="eager" fetchPriority="high" decoding="sync"` — it competes with fonts/CSS in the critical window on every page (header + blog pages)
- All other images: SVG logos, `loading="lazy"`, explicit dimensions. Good.

### Main thread
- DOM size: home ~865 elements, pricing ~862, blog ~280 — all well under 1,500
- Third-party: GTM (`GTM-NWRCP5VH`) inline in head + noscript iframe. Container contents not auditable statically; whatever tags fire inside it are the main INP risk.

## Prioritized Fixes

1. **(High, ~50–100 ms LCP + 90 KB/page)** Replace `logo-sealmetrics-negro.png` (94 KB) with an SVG or optimized WebP/AVIF (<5 KB). It is `fetchPriority="high"` on every page. Also check `logo-sealmetrics-blancov.png` in the footer. Files: `public/logos/`, header component in `src/components/layout/`.
2. **(Medium)** Add `<link rel="preconnect" href="https://www.googletagmanager.com">` in `src/app/layout.tsx`; audit the GTM container — every tag in it runs on the main thread and is the only credible INP threat on this site.
3. **(Medium, blocked by hosting)** Brotli + long-lived immutable caching for `/_next/static/*` + edge cache warmth for blog URLs all require leaving GitHub Pages (e.g., Cloudflare Pages/Netlify). **Not a quick win** — pixel/api/app share the DNS zone serving customer production; any migration must be planned, not bundled into this audit (see memory: no DNS quick wins). Document as future infra work only.
4. **(Low)** Homepage/pricing raw HTML is ~185 KB (large inline JSON-LD + RSC payload). Gzip handles it (33 KB), but trimming duplicated JSON-LD strings would shave parse time on low-end mobiles.
5. **(Process)** Get a free PSI/CrUX API key and re-run for field LCP/INP/CLS at p75 — lab estimates here cannot replace CrUX, and INP under GTM load is unverified.

## What is already correct (do not touch)
- Text LCP, async-only JS, font preload + swap, dimensioned/lazy images, DOM <900, static export, TTFB <100 ms on cached pages.
