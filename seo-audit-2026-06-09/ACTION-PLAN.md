# SEO Action Plan — sealmetrics.com (2026-06-09)

Overall score: **84/100**. No critical issues. Ordered by impact ÷ effort.

## Critical (fix immediately)
None.

## High (fix within 1 week)

1. **Translate the /es/ homepage social-proof slab** — "The single source of truth", "European eCommerce signs against" (also a grammar error in itself), and the Dreamplace/Palladium paragraph are in English on the Spanish page. Hurts ES E-E-A-T and translation-quality signals.
2. **Reconcile statistics sitewide** — pick canonical numbers and apply everywhere: ad blockers (40% vs ~25%), consent rejection (55% vs 40–60%), invisible traffic (62% homepage vs 87% blogs). Inconsistency undermines AI/LLM citation of the signature 13%/87% claim. Suggest a single `src/lib/content/stats.ts` source of truth.
3. **Replace 94KB header logo PNG** (`logo-sealmetrics-negro.png`, 160×32, `fetchPriority="high"` on every page) with SVG or WebP <5KB. Biggest single performance win.
4. **Fix Palladium case-study Review schema** — self-serving 5-star review of own product is ineligible (Google policy); also `author` is `{"@type": "Organization", "name": "Toni Andújar"}` (wrong type). Drop `reviewRating`, keep quote as testimonial.
5. **Add hreflang `<link>` tags to the blog post template** — only template missing them; Bing ignores sitemap hreflang.

## Medium (fix within 1 month)

6. **Trailing-slash mismatch** — canonicals end `/`, all schema URLs don't. One fix in `src/lib/schema.ts`.
7. **OG gaps** — blog posts missing `og:image` + `og:url`; homepage missing `og:url`; case studies share a generic OG image.
8. **lastmod inflation in sitemap** — 137/170 URLs re-stamped with build date every deploy (`lastModFor()` fallback, `src/app/sitemap.ts:60-67`). Use git dates or a date map.
9. **Thin content** — expand `/blog/cookieless-analytics-explained/` (~773 words) to 1,500+; expand `/for/ecommerce/` (<800 words) and replace its anonymous testimonial with a named one (Palladium is de-anonymized).
10. **Case-study Article author** — Person named "SealMetrics" → should be Organization.
11. **Tap targets <44px** — footer link rows (28px), breadcrumbs (16–18px), pricing billing toggle (37px); 35–56 offenders per page.
12. **Pricing desktop layout** — "NEW" pill collides with "PRICING" eyebrow (see `screenshots/pricing-desktop.png`).
13. **Favicon** — `/favicon.ico` 404s; new favicon files sit untracked in `public/`. Commit + reference them.
14. **GTM INP risk** — add `preconnect` to googletagmanager.com; audit container tags.

## Low (backlog)

15. `/data-loss-calculator` homepage href missing trailing slash (avoidable 301).
16. robots.txt: also disallow `/es/demo/thank-you`, `/demo-access`, `/diagnostic-result`.
17. Verify `/vs/ga4/` (200, not redirect) has canonical to the real page; otherwise indexable duplicate.
18. Mobile polish: `overflow-x: clip` on off-canvas/marquee wrappers; bump 9.5–10.5px mono micro-labels; Palladium pill wraps to 3 lines on 390px.
19. Schema polish: `@id` references instead of inline duplicated Organization; ≥112px logo for Organization; Spanish Organization description on /es/; `offers` on SoftwareApplication if free-trial framing fits; fix `spokenByCharacter` misuse in Quotation.
20. Author `sameAs`: add more profiles beyond LinkedIn. Visible dates on glossary pages.
21. Get a free PSI/CrUX API key and re-run for field data.
22. Verify intent: ES hero CTA pair differs from EN ("Pide una auditoría gratuita" vs "Start free trial").

## Migration-gated (not actionable on GitHub Pages)
- Security headers (HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
- Brotli compression, immutable caching for hashed assets

Per project constraints: no DNS/edge changes without a planned hosting migration — the zone serves the customer production pixel.
