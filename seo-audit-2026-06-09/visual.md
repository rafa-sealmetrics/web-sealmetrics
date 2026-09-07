# Visual + Mobile Rendering Audit — sealmetrics.com

Date: 2026-06-09 · Method: Playwright 1.60 (Chromium), live site
Viewports: Desktop 1440x900 · Mobile 390x844 (iPhone UA, DPR 3, touch)
Pages: `/`, `/pricing/`, `/vs/ga360/`, `/blog/why-ga4-shows-13pct-eu-traffic/`, `/es/`
Screenshots: `seo-audit-2026-06-09/screenshots/` (`{page}-{viewport}.png` = above-fold, `*-full.png` = full page)
Raw metrics: `seo-audit-2026-06-09/metrics.json`

## Score: 84 / 100

Strong responsive foundation: no horizontal scroll on any page/viewport, single H1 everywhere, 16px body font, hero CTAs above the fold on mobile for all commercial pages, and the Spanish version renders fully translated with no broken layout. Points lost on tap-target sizes, micro-label font sizes, one desktop layout collision, and off-canvas elements that bleed past the right edge.

## Above-the-Fold (mobile 390x844)

| Page | H1 visible | Value prop visible | CTA visible | Notes |
|---|---|---|---|---|
| Home | Yes (top 226px, 34px font) | Yes | Yes — "Start free trial" at 523px, "Book a demo" at 590px | Announcement pill wraps to 3 lines, eats ~250px before H1 |
| Pricing | Yes (390px) | Yes | Yes — both CTAs at 708px, just inside fold | Tight: any taller banner pushes CTAs below fold |
| /vs/ga360 | Yes (305px) | Yes | Yes (662px) | Good |
| Blog GA4 13% | Yes (216px, 40px font) | Yes (Key Takeaways) | No CTA above fold | Intentional per content strategy (blog → pillar → demo) |
| /es/ | Yes (226px) | Yes | Yes — "Pide una auditoría gratuita" visible | Renders correctly; CTA variant differs from EN (audit vs trial) — verify intentional |

Desktop: all five pages show H1 + value prop + dual CTA above the fold. Hero H1 at 96px desktop / 34px mobile scales cleanly.

## Prioritized Issues

### P1 — Tap targets below 44px on mobile (all pages)
35–56 interactive elements per page measure under 40px in height. Worst offenders:
- Footer link lists: 350x28px rows, stacked with no extra padding (every page).
- Breadcrumb links: 32x16px ("Home"), 24x18px ("Blog").
- Inline body links in blog post: 21–24px tall (acceptable in prose, but dense in the TOC/related areas).
- Pricing Monthly/Annual toggle: 37px tall — close, bump to 44px.
Fix: add `py-2`/min-height 44px to footer links, breadcrumbs, and the billing toggle.

### P1 — Pricing desktop hero: announcement pill collides with eyebrow label
At 1440px the "NEW · AI agent traffic tracking…" pill and the "● PRICING" eyebrow render on the same row, touching ("…free on every plan ● PRICING"). Looks broken. See `pricing-desktop.png`. Stack them vertically or hide the eyebrow when the pill is present.

### P2 — Off-canvas elements overflow the right edge
No visible horizontal scroll (document scrollWidth = viewport), but absolutely-positioned elements extend past it, which widened full-page captures (home mobile full render is 557 CSS px wide vs 390 viewport; /es/ 591px):
- `aside.bg-ink` (exit/slide-in form panel, ~536px wide) sits off-canvas right on `/` and `/es/` mobile.
- Logo marquee items (`img.object-contain`, 200–220px) overflow on every mobile page.
- Decorative `div.absolute.pointer-events-none` gradient (480px) on desktop home/es.
Fix: `overflow-x: clip` on the relevant section wrappers. Harmless today but fragile — one CSS change away from real horizontal scroll.

### P2 — Micro-label fonts below 10px
Smallest rendered text: 9.5px (pricing), 10px (home, /es/), 10.5px (/vs/ga360) — mono chips/labels like "14-DAY FREE TRIAL", compliance chips. On mobile these are hard to read. Raise mono micro-labels to 11–12px minimum.

### P3 — Mobile announcement pill height (home + /es/)
The Palladium case-study pill wraps to 3 lines on 390px and consumes ~250px before the H1. Consider a shorter mobile string (e.g. "Palladium: +165% Display CPS").

### P3 — Pricing mobile fold margin
CTAs land at 708px on an 844px viewport. On shorter devices (e.g. 667px iPhone SE) they fall below the fold. Consider tightening hero spacing on mobile.

## Spanish Version (/es/)
No broken rendering. `lang="es"` set correctly, title/nav/footer/announcement fully translated, no truncation or overflow beyond the same off-canvas items as EN. Hero CTA pair differs from EN ("Pide una auditoría gratuita" + "Cómo funciona" vs "Start free trial" + "Book a demo") — flag for marketing to confirm the variant is deliberate.

## What's Working
- `width=device-width, initial-scale=1` viewport meta on all pages.
- Zero horizontal scrolling on all 10 page/viewport combos.
- Exactly 1 H1 per page; clean hierarchy.
- 16px body font everywhere; blog prose minimum 12px.
- Full-width 55–57px hero CTA buttons on mobile (well above 44px target).
- Layout integrity holds across the entire ~22,000px mobile page length (checked full-page captures).
