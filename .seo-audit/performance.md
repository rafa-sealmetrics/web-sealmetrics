# Performance Audit — sealmetrics.com

**Date**: 2026-05-28
**Tool**: Lighthouse 13.3.0 (lab), simulated throttling (Moto G Power for mobile)
**Edge**: GitHub Pages behind Fastly (cache-mad22\*-MAD — Madrid POP serving from Spain)
**Goal bar**: LCP <2.0s, INP <100ms, CLS <0.05 (well-better-than-green)

## Lab scores — five representative pages

| Page | Form | Score | LCP (sim) | LCP (obs) | TBT | CLS | Note |
|---|---|---|---|---|---|---|---|
| `/` (home) | mobile | 74 | 7.6s | 2.34s | 10ms | 0.024 | sim LCP fails goal |
| `/` (home) | desktop | 98 | 1.2s | — | 0ms | 0.008 | passes goal |
| `/product/` | mobile | 75 | 7.4s | 2.28s | 30ms | 0 | sim LCP fails goal |
| `/product/` | desktop | 100 | 0.4s | — | 0ms | 0 | passes goal |
| `/pricing/` | mobile | 74 | 7.9s | 2.28s | 10ms | 0 | sim LCP fails goal — worst sim |
| `/pricing/` | desktop | 100 | 0.5s | — | 0ms | 0 | passes goal |
| `/open/` (was `/blog/`) | mobile | 75 | 7.2s | 2.34s | 20ms | 0 | sim LCP fails goal |
| `/open/` | desktop | 100 | 0.4s | — | 0ms | 0 | passes goal |
| `/vs-ga4/` (was `/vs/ga4/`) | mobile | 99 | 2.1s | 0.15s | 20ms | 0 | passes goal |
| `/vs-ga4/` | desktop | 100 | 0.5s | — | 0ms | 0 | passes goal |

**Routing fix needed (separate from perf)**: `/blog/` returns 301→404 and `/vs/ga4/` returns 404. Real routes are `/open/` and `/vs-ga4/`. Update any internal links and external links accordingly.

## CWV verdict vs. goals

- **LCP**: passes goal on desktop everywhere. Mobile **observed** LCP is 2.2–2.4s on home/product/pricing/open — sits in the "needs improvement" band but is close to the 2.0s bar. Simulated LCP (7.2–7.9s) reflects Moto G Power + slow 4G; field data via CrUX will be closer to the observed values but margin is tight.
- **INP** (lab proxy = TBT): all ≤30ms — passes goal comfortably. No long-task hot spots.
- **CLS**: 0–0.024 across the board — passes the 0.05 goal. Homepage 0.024 is the only non-zero; see CLS section below.
- **TTFB**: 18–87ms at the edge (Fastly Madrid HIT) — excellent. Lighthouse-reported document latency is 140–252ms because Lighthouse runs from the Chrome host without warm Fastly cache. Real users hitting the edge are fine.

The site already clears the standard Google "good" thresholds on desktop. Mobile observed LCP needs ~300–400ms shaved off to hit the internal <2.0s bar.

## Bottlenecks identified

### 1. LCP element is a text paragraph blocked by a 32KB font fetch
LCP element on home/product/open mobile is the hero paragraph (`<p class="text-ink-soft mt-8 ...">`); on pricing it is the `<h1 class="h-display">`. Both render only after Onest woff2 arrives. LCP breakdown shows:

- TTFB subpart: 207–292ms
- Element render delay: **2045–2086ms** (simulated)

The hero paragraph is render-blocked on the font, and the font is render-blocked on the CSS (`58217bd43b1cf9cd.css`, 15KB), which is the only render-blocking resource. Lighthouse flags est. saving of FCP 200ms / LCP 200ms from eliminating the blocking CSS. Onest **is** preloaded (two `<link rel="preload" as="font" type="font/woff2" crossorigin>` entries) and **is** `font-display: swap` — that part is correct. The delay is the CSS→font dependency.

### 2. Favicon weighs 325KB (and is requested twice)
`/favicon.png` = **325,514 bytes** — bigger than every JS chunk on the page combined.
HTML references `/favicon.png?v=2` (icon + apple-touch-icon + shortcut icon), and `/manifest.webmanifest` references `/favicon.png` (no version). Two separate requests, both 325KB, both `loading=eager`. AVIF (6.8KB) and WebP (12.2KB) variants exist in `/public/` but are not referenced anywhere in the HTML or manifest.

### 3. GTM on the critical path (113KB transferred)
`googletagmanager.com/gtm.js?id=GTM-NWRCP5VH` is the 3rd-largest script, fires at ~t+416ms, and pulls in `pixel-pre.sealmetrics.com/t.js` (348ms duration) plus an event ping. GTM is loaded on every page. There is no privacy reason this needs to block render (it is cookieless), but the request weight + parse time eats into mobile LCP element render delay. The pixel endpoint preprod hostname is intentional per project notes.

### 4. Cache-Control: max-age=600 on every static asset
All `_next/static/chunks/*`, `_next/static/media/*` (fonts), CSS and favicon return `cache-control: max-age=600` (10 minutes). Next.js content-hashed asset filenames can safely be cached for a year. Lighthouse cache-insight reports est. LCP saving of **1350ms** for repeat visits from longer TTL.

### 5. Hero JS chunk graph is wide (10 chunks parallel)
Homepage loads 12 JS chunks (~284KB transferred); the document at t+1 finishes at t+257ms, then 10 chunks fire in parallel between t+415–576ms. Total script payload is fine — but the simultaneous fan-out competes with the font fetch for bandwidth on slow connections.

### 6. Logo AVIF is over-sized for display
`logo-sealmetrics-negro.avif` is shipped at 1219x204 intrinsic but displayed at 293x49. Wasted 12KB per page. The PNG variant in `/public/` is also 94KB; only the AVIF is loaded.

### 7. Logo PNGs in manifest reference 512×512 that does not exist as such
`manifest.webmanifest` lists `logo-sealmetrics-negro.png` (94KB) for both 192×192 and 512×512 maskable icons — the source is a wider rectangle, so PWA install previews will be wrong. Cosmetic, not perf.

## CLS notes

Only the homepage mobile run logged a non-zero CLS (0.024). cls-culprits-insight does not name a culprit element in the audit JSON — the shift is below the reporting threshold. Likely culprit: client-logo strip switching between SVG/PNG fallback after initial paint. No action required for the <0.05 bar but worth a manual check with Chrome DevTools Performance panel.

## INP / TBT notes

TBT 10–30ms on all pages. Longest single task is 71ms in `a11d59fecbaed6fc.js` (the largest app chunk). Bootup time 0.3s. Main-thread breakdown: styleLayout 263ms, scriptEvaluation 251ms, other 304ms. No event handler is highlighted as expensive. INP in the field will be dominated by Next.js client hydration on first interaction — currently fine, watch when the React tree grows.

## Render-blocking summary

| Resource | Bytes | Blocks |
|---|---|---|
| `chunks/58217bd43b1cf9cd.css` | 15.1KB | render + font discovery |
| Onest `8800dfc60902df36-s.p.woff2` | 32.5KB | LCP text element |
| Onest `051742360c26797e-s.p.woff2` | 31.6KB | LCP text element |

All 12 JS chunks load with `async` — none are render-blocking. CSS is the only blocker. Fonts are preloaded with correct `crossorigin` and `as=font`, `font-display: swap` is set.

## Image weight summary

All images on the homepage are under 100KB except the favicon. Client logos: 2.6–4.4KB (good). Brand logo AVIF: 13KB (over-sized for display but not over budget). No raster hero image — the hero is pure text + CSS.

## Concrete fixes (prioritized by expected impact)

### P0 — Ship today, biggest LCP win
1. **Replace `/favicon.png` (325KB) with `/favicon.avif` (6.8KB) + `/favicon.webp` (12KB) fallback.** The files already exist in `/public/`. Update `<link rel="icon">`, `<link rel="shortcut icon">`, `<link rel="apple-touch-icon">` in the EN and ES root layouts, and update `/manifest.webmanifest` `icons[].src`. Expected: −320KB on every page load, frees mobile bandwidth during the LCP window. Apple Touch Icon needs PNG — keep a single small (≤30KB) 180×180 PNG specifically for apple-touch-icon, generated from the AVIF source.

2. **Lift static-asset TTL to 1 year.** GitHub Pages does not let you set headers, but Fastly does — push a VCL or service config that sets `Cache-Control: public, max-age=31536000, immutable` for `/_next/static/*`, `/logos/*`, `/favicon.*`, fonts. Expected: per Lighthouse, 1350ms LCP saving on repeat visits + 200ms FCP. Keep the HTML at 600s so deploys remain reactive.

### P1 — Mobile LCP closer to 2.0s
3. **Inline critical CSS for above-the-fold.** The single 15KB CSS file is the only render-blocking resource. Inline the ~3–4KB needed for hero typography (Onest @font-face, `.h-display`, `.text-ink-soft`, layout containers) directly into `<head>`, defer the rest with `media="print"` + `onload` swap or `rel="preload" as="style"`. Expected: 200ms FCP/LCP per Lighthouse render-blocking-insight; bigger on slow 4G.

4. **Resize the AVIF logo to its display size.** Re-export `logo-sealmetrics-negro.avif` at 2x display dimensions (e.g. 586×98) instead of 1219×204. Expected: ~10KB saved per page, faster decode on low-end Android.

5. **Defer GTM to after LCP.** Inject the GTM snippet inside a `requestIdleCallback` or after `load` event instead of at the bottom of `<body>`. The cookieless pixel needs to fire for analytics, but it does not need to compete with hero rendering. Expected: clears 113KB + 233ms script execution out of the LCP window on mobile.

### P2 — Hardening
6. **Audit JS chunk count.** 12 chunks parallel on first load is wide. Verify Next.js 16 isn't shipping a separate chunk per Server Component island that could be merged. The 70KB `9ece9d287c64523d.js` is the page chunk; the rest are shared. Target: 6–8 chunks max for the homepage.

7. **Fix the `/blog/` and `/vs/ga4/` 404 references.** Either set up `/blog/` → `/open/` and `/vs/ga4/` → `/vs-ga4/` redirects on Fastly, or update every internal link. Right now any external link to `/blog/` or `/vs/ga4/` hits 404, which damages SEO and any prior backlinks. Not a perf issue per se but worth fixing in the same PR.

8. **Manifest icons:** generate proper 192×192 and 512×512 square PNGs (or AVIF where supported) from the logo source rather than reusing the wide rectangle.

## Field-data follow-up

Lab data passes Google's "good" thresholds for everything except mobile simulated LCP. Confirm with CrUX field data once enough origin traffic has accumulated:

```bash
curl -X POST "https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"origin":"https://sealmetrics.com","formFactor":"PHONE","metrics":["largest_contentful_paint","interaction_to_next_paint","cumulative_layout_shift"]}'
```

If the origin has insufficient traffic for CrUX, instrument `web-vitals` in a tiny inline script and POST to the pixel endpoint. Field 75th percentile is what Google ranks on — do not over-tune the lab number.

## Files referenced
- `/Users/rafa/code/web-sealmetrics/src/app/(en)/layout.tsx` — favicon and manifest references
- `/Users/rafa/code/web-sealmetrics/public/manifest.webmanifest` — icon list (rewrite paths)
- `/Users/rafa/code/web-sealmetrics/public/favicon.png` — 325KB, delete or replace
- `/Users/rafa/code/web-sealmetrics/public/favicon.avif` — 6.8KB, currently unreferenced
- `/Users/rafa/code/web-sealmetrics/public/favicon.webp` — 12KB, currently unreferenced
- `/Users/rafa/code/web-sealmetrics/public/logos/logo-sealmetrics-negro.avif` — resize to display size
- Raw Lighthouse JSON: `/tmp/lh/{home,product,pricing,blog,vsga4}-{mobile,desktop}.json`
