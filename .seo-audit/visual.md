# Visual & Above-the-Fold Audit — sealmetrics.com

**Date:** 2026-05-28
**Viewports:** Desktop 1440×900 · Mobile 390×844 (iPhone UA, DPR 2)
**Capture method:** Playwright (Chromium headless), `wait_until="networkidle"` + 800 ms paint settle, above-the-fold only (`full_page=False`)
**Audience lens:** CMO / eCommerce manager of European company with €10M+ revenue

Severity legend: **[CRIT]** blocks understanding or conversion · **[HIGH]** clearly hurts message or UX · **[MED]** noticeable polish issue · **[LOW]** nit

---

## 1. Homepage — `/`

- Desktop: `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/home-desktop.png`
- Mobile:  `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/home-mobile.png`

### Above-the-fold composition (desktop)
- Pill announcement: "NEW · CASE STUDY · Palladium Hotel Group: 40% of traffic had no attribution → +165% Display CPS" (centered, anchored under header)
- H1 (two lines): "Make decisions with *data you trust* again." — italic emphasis in brand green, no amber highlight visible behind the italic.
- Body: "SealMetrics captures 100% of your traffic, without cookies or consent. The complete data source that puts your marketing budget back on solid ground."
- Trust line: "Trusted by marketing teams analyzing **500M+ events** across **12 countries**"
- Two CTAs side-by-side: black "Start free trial →" + outline "Book a demo"
- Compliance dashes row: GDPR BY ARCHITECTURE — EPRIVACY — SCHREMS II CLEAN — EU-HOSTED · DUBLIN
- "INTEGRATES WITH" logos (Shopify, WooCommerce, etc.) just fit at the bottom; the dashboard mock peeks in below the fold

### Observations
- **[HIGH] Missing amber highlight under italic emphasis.** The design system mandates a "subtle amber highlight underneath" italic H1 phrases (only seen correctly on `/open`). On the homepage H1, "data you trust" is brand-green italic but sits on bare cream — the editorial signature of the brand is absent on the most important page.
- **[HIGH] Hero is text-only with no visual proof anchor.** Above the fold there is no chart, no screenshot, no logo strip — just text + buttons + a four-item compliance row + integration icons. For a €10M+ buyer, the first viewport reads more like a manifesto landing than a product page. The dashboard mock is teased only at the very bottom edge.
- **[MED] H1 promise is generic.** "Make decisions with data you trust again" works rhetorically but does not name the audience (eCommerce) or the unique mechanism (cookieless / 100% capture). The March 2026 reposition around "complete data for eCommerce" lives in the *body copy*, not in the H1.
- **[MED] CTA hierarchy fights the design system.** The header button reads "Start FREE Trial" (mixed case + caps + small) while the hero primary CTA reads "Start free trial" (sentence case). They should match. Trial-led messaging also competes with the editorial/enterprise positioning — a €10M+ ecommerce CMO is unlikely to "start a free trial" unattended.
- **[MED] Trust line lacks named brands.** "500M+ events across 12 countries" is a generic stat. The pill above advertises Palladium Hotel Group by name — that name should also appear in the trust line or in a logo strip above the fold.
- **[LOW] Header right side feels crowded.** "Start FREE Trial" + "ES" sit immediately next to each other with no separator; the language switcher reads almost like an extension of the CTA button.
- **[LOW] Pill announcement is long.** "Palladium Hotel Group: 40% of traffic had no attribution → +165% Display CPS" is one line on desktop but wraps to four lines on mobile, dominating the top of the viewport.

### Mobile (390×844)
- The pill wraps to 4 lines and pushes the H1 below the fold's first third.
- H1 ("Make decisions with *data you trust* again.") fits, italic green emphasis visible — but again no amber highlight.
- Body copy + CTAs are fully visible, both buttons stack full-width and are well sized (≈48 px touch height).
- Compliance dashes wrap to 2 lines, readable, no horizontal scroll.
- **[MED] Pill height on mobile.** The pill's "NEW · CASE STUDY" label and the headline wrap together inside the same pill shape, which on a 390 px width consumes ~120 px of vertical space before any narrative starts. Consider truncating to "Palladium: +165% Display CPS →" on mobile.
- **[LOW] Hamburger menu and ES selector** are clearly visible, tap targets large enough.

### Hierarchy / editorial polish
- Typography hierarchy works: H1 dominates, body is comfortable, mono small-caps for compliance row is on-brand.
- Editorial feel is present but undermined by the missing amber highlight and lack of visual proof anchor.

### CLS hot-spots
- The "INTEGRATES WITH" logo row uses external brand SVGs/PNGs that load late — likely to shift the announcement pill or hero up on first paint.
- The dashboard mock that peeks at the bottom is the largest LCP candidate; if it loads after fonts swap, expect a perceptible reflow of the hero block.

---

## 2. Product — `/product/`

- Desktop: `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/product-desktop.png`
- Mobile:  `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/product-mobile.png`

### Above-the-fold composition (desktop)
- Breadcrumb "Home / Product"
- Eyebrow: green dot + "PLATFORM OVERVIEW" (mono small-caps)
- H1 (two lines): "Complete analytics, *without the compromises.*" — italic phrase in brand green, occupies the bottom half of the viewport
- Sub-body: "A full analytics stack built for eCommerce teams: consentless tracking, revenue attribution, LENS AI, SuperAPI and MCP server — all on the same full-resolution data. No sampling. No modelling."
- CTAs: "Start FREE Trial →" + "Book a demo" + "14-DAY FREE TRIAL" subtext
- Below that: nothing — the entire viewport is whitespace + heading + two CTAs

### Observations
- **[CRIT] Empty top third of viewport.** ~250 px of bare cream between the breadcrumb and the eyebrow on desktop. The H1 only starts around y=300 and finishes near y=540. There is no logo strip, no product screenshot, no diagram, no "what does this thing actually do" anchor above the fold. For a product page this is a major missed opportunity.
- **[CRIT] No product visual above the fold.** A page literally titled "Product" with no product imagery in viewport 1 is a hard conversion problem. CMOs evaluating analytics tools want to see the interface immediately. Adobe, Piwik PRO, Amplitude, and even GA4 all lead with a dashboard screenshot.
- **[HIGH] No amber highlight under italic** (same as homepage). The "without the compromises." phrase is brand-green italic on bare cream.
- **[HIGH] Feature laundry list in subhead.** "LENS AI, SuperAPI, MCP server" — these are internal product names with no context. The audience is a CMO, not a developer. The subhead reads like an internal release note.
- **[MED] CTA inconsistency persists.** "Start FREE Trial" (mixed case, all-caps "FREE") here vs "Start free trial" on homepage. Pick one.
- **[LOW] "14-DAY FREE TRIAL"** in mono small-caps is the only piece of social-proof-ish content above the fold; consider replacing with a customer name or stat ("Used by Palladium Hotel Group · 500M+ events").

### Mobile (390×844)
- Breadcrumb fits.
- H1 wraps to 3 lines ("Complete analytics, / *without the* / *compromises.*") and italic phrase splits awkwardly across two lines.
- Subhead is long and consumes most of the remaining vertical space.
- CTAs visible at the very bottom of the fold — barely.
- **[HIGH] Mobile CTAs hover at the fold edge.** "Start FREE Trial" + "Book a demo" sit ~30 px above the 844 px fold line; depending on browser chrome, they may push below the fold on iOS Safari (≈92 px UI). Consider tightening the eyebrow spacing.
- **[MED] H1 breaks "without the compromises" awkwardly** — the italic phrase wraps with "without the" on one line and "compromises." alone on the next. Consider non-breaking hyphenation or a slightly shorter copy line.

### Hierarchy / editorial polish
- Typography is editorially clean, but the page feels under-built — it's all text, no product.

### CLS hot-spots
- Low risk in viewport 1 (no images), but the lack of imagery is itself the problem.

---

## 3. Pricing — `/pricing/`

- Desktop: `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/pricing-desktop.png`
- Mobile:  `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/pricing-mobile.png`

### Above-the-fold composition (desktop)
- Breadcrumb "Home / Pricing"
- Top pill: "NEW · AI agent traffic tracking · coming soon · free on every plan" + green dot eyebrow "PRICING" floating to its right
- H1 (three lines): "Pay for *humans.* Not bots. Not consent banners. Not guesswork."
- Sub-body: "Every plan includes complete analytics on 100% of your traffic — no sampling, no modelled estimates, no feature walls. You only pay more when you actually grow."
- CTAs: "Start FREE Trial →" + "Book a demo" + "14-DAY FREE TRIAL"

### Observations
- **[CRIT] No pricing visible on the pricing page above the fold.** This is the single biggest issue across the audit. A visitor on `/pricing/` should see a price (or at minimum a starting price / "from €X / month / billed by traffic") within viewport 1. Instead they see a clever H1 and a free-trial CTA. CMOs evaluating SealMetrics vs GA360 (€150K) and Piwik PRO (€30K) need a price anchor to start the mental math.
- **[HIGH] The pill announcement layout is broken.** On desktop, the pill ("AI agent traffic tracking · coming soon · free on every plan") and the eyebrow dot+"PRICING" are placed in the same horizontal row but visually disconnected — the eyebrow looks like a stray label dangling off the right of the pill. They should either share a single component or be on separate lines.
- **[HIGH] H1 is witty but evasive.** "Pay for humans. Not bots. Not consent banners. Not guesswork." is rhetorically strong but does not tell the user *what they pay for or how much.* For a pricing page this fails the prime directive.
- **[MED] Missing amber highlight under italic** — same pattern as home and product.
- **[LOW] CTAs duplicate the rest of the site.** Every page leads with the same Start Trial + Book Demo pair. On a pricing page, a "See pricing details ↓" anchor link would be more useful than a third Trial CTA.

### Mobile (390×844)
- Pill grows to a 3-line block, then a separate "● PRICING" line below it, then a 4-line H1.
- The entire above-the-fold is consumed by pill + eyebrow + H1; the body and CTAs land right at the fold line.
- **[CRIT] CTAs pushed below the fold on mobile.** On a 390×844 viewport, by the time you read the H1 you must scroll to reach the CTAs and the body copy. The pricing page is now a 2-screen experience to even see a button.
- **[HIGH] Pill+eyebrow stack is heavy.** Replace mobile pill with a one-line truncated version or move "PRICING" eyebrow inside the pill.

### Hierarchy / editorial polish
- Editorial register is strong, but inappropriate for a pricing page — this reads like a manifesto page, not a commercial page.

### CLS hot-spots
- The pill+eyebrow horizontal layout will likely reflow on initial paint if either uses web fonts that swap, particularly the mono "PRICING" label.

---

## 4. `/vs/ga4/` — **404 NOT FOUND**

- Desktop: `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/vs-ga4-desktop.png` (default Next.js 404)
- Mobile:  `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/vs-ga4-mobile.png` (default Next.js 404)

### Observations
- **[CRIT] `/vs/ga4/` does not exist on production.** Verified `curl -I` returns 404 for both `/vs/ga4/` and `/vs/ga4`. The `/vs/` hub at `https://sealmetrics.com/vs/` only links to: `/vs/adobe-analytics/`, `/vs/ga360/`, `/vs/matomo/`, `/vs/piwik-pro/`. **GA4 — the single most-searched comparison and the tool 90% of prospects are migrating from — has no comparison page.** This is the most impactful SEO/content gap surfaced by the visual audit.
- **[CRIT] 404 page is the stock Next.js page.** Plain serif "404 | This page could not be found." on white background — no header, no logo, no link back home, no editorial design system. Any 404 (broken links, mistyped URLs, expired blog posts) currently looks like a default framework page rather than a SealMetrics page. This breaks brand trust the moment something goes wrong.

### Recommendations
- Create `/vs/ga4/` urgently — likely the highest-traffic missing page on the entire site.
- Build a branded `not-found.tsx` with header, footer, breadcrumb, and links to /product, /pricing, /blog, /vs.

---

## 5. Blog — `/blog/`

- Desktop: `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/blog-desktop.png`
- Mobile:  `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/blog-mobile.png`

### Above-the-fold composition (desktop)
- Breadcrumb "Home / Blog"
- Eyebrow: "● BLOG"
- H1 (two lines): "Thinking about analytics, *done properly.*" — italic green emphasis, very large
- Subhead: "Data quality, attribution, privacy regulation, and the future of measurement. Written for marketing and analytics leaders."
- Section separator, then first article begins: "ECOMMERCE · 10 min · Cookieless Analytics for eCommerce: The 2026 Guide" with date right-aligned "April 24, 2026"

### Observations
- **[HIGH] No article visual above the fold.** The first article is text-only; an editorial blog index without thumbnails or category color coding feels under-designed for the "authoritative editorial" register the brand claims. Even minimalist editorial publications (Stratechery, The Browser) include thumbnails or category swatches.
- **[MED] Massive H1 eats half the viewport.** "Thinking about analytics, done properly." is rhetorically nice but consumes ~340 px of vertical space. On a blog *index* the user is here to find articles; the H1 should be smaller (or moved into a sidebar) so 2+ articles are visible above the fold.
- **[MED] Missing amber highlight under italic** — same as elsewhere.
- **[LOW] Only one article visible** above the fold on desktop; on a blog with multiple categories this is a discovery problem. Consider a 2- or 3-column grid for the first row of articles.

### Mobile (390×844)
- H1 wraps to 4 lines, subhead to 3 lines, separator visible, then only the article eyebrow ("ECOMMERCE · 10 min") and title visible at the fold.
- **[HIGH] Mobile pushes article meta below fold** — no article excerpt or "Read →" affordance visible in viewport 1. The mobile user must scroll to discover even the first article's preview.

### Hierarchy / editorial polish
- Strong: typography is the brand at its best here, but the page sacrifices density for atmosphere.

### CLS hot-spots
- Low risk — no hero image. But if articles get thumbnails later, they will be primary LCP elements.

---

## 6. Open — `/open/`

- Desktop: `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/open-desktop.png`
- Mobile:  `/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots/open-mobile.png`

### Above-the-fold composition (desktop)
- Breadcrumb "Home / Open"
- Eyebrow: "● OPEN DOCUMENT · V1.0" (mono)
- Hero word: **"Open"** in large italic brand-green — and **this is the only page with the amber highlight visible under the italic emphasis.**
- H2-ish line: "How we measure, comply, and build SealMetrics — *in writing and in public.*" (italic phrase in brand green)
- Body: "Eleven chapters on our method, architecture, and operation. No marketing pages, no vague promises. If you find anything inaccurate or incomplete, write to us."
- Meta row (mono small-caps): "8 CHAPTERS PUBLISHED · 60 MIN READ · MORE CHAPTERS IN PROGRESS"
- CTA: black "Start with chapter 01 →" (single CTA, no Book a demo)

### Observations
- **[HIGH] Inconsistency with rest of site — but in a good way.** The amber highlight under "Open" is the *correct* application of the design system. The fact that it appears here and nowhere else suggests the rest of the site shipped without the highlight, not that this page is wrong. Use this page as the visual reference and retrofit the others.
- **[MED] Hero "Open" word is left-aligned and small.** Compared to the homepage H1, the hero word here is restrained — which works editorially but leaves ~50% of the right-side viewport empty on desktop (no chapter list preview, no table of contents, no chapter card grid).
- **[MED] Chapter count mismatch.** Body says "Eleven chapters" but meta row says "8 CHAPTERS PUBLISHED · MORE CHAPTERS IN PROGRESS." Pick a framing — either "Eleven chapters (8 published, 3 in progress)" or just "Eleven chapters." The current phrasing creates a tiny credibility wobble on a page that prides itself on precision.
- **[LOW] Single CTA is good.** Editorial discipline: no /demo, no /pricing — just into the document. On-brand.

### Mobile (390×844)
- Hero "Open" word with amber highlight is centered/left, scaled appropriately.
- H2 wraps cleanly to 3 lines; italic phrase wraps onto its own lines but reads fine.
- Body, meta row, and CTA all visible above the fold.
- No horizontal scroll, tap target on the CTA is generous (~52 px).
- **[LOW]** Meta row wraps to 2 lines on mobile, which is fine.

### Hierarchy / editorial polish
- **The strongest page in the audit.** This is what the editorial design system is supposed to look like. Amber highlight present, hierarchy clear, single CTA, no commercial noise, no startup-CTA-stacking. Use it as the design north star.

### CLS hot-spots
- Low risk — pure typography above the fold.

---

## Cross-page patterns

### Amber-highlight regression (CRIT)
The italic emphasis on H1/H2 phrases should be backed by a "subtle amber highlight underneath" per the design system in CLAUDE.md. This is rendered correctly only on `/open/`. It is absent on `/`, `/product/`, `/pricing/`, `/blog/`. This regression strips the brand's editorial signature from every commercial page. Likely a single CSS class/utility missing on the italic spans on those pages.

### CTA inconsistency (HIGH)
- Header: "Start FREE Trial" (caps on FREE)
- Hero primary on homepage: "Start free trial" (sentence case)
- Hero primary on product/pricing: "Start FREE Trial"
- Plus "Book a demo" appears alongside on most pages.
Pick one casing rule (the design system says action-specific, plain sentence case: "Book a Demo", "Start Free Trial") and apply globally.

### No product visual anywhere above the fold (HIGH)
Across home, product, pricing, blog, and open — zero pages show a dashboard, chart, or interface element in viewport 1. The site is text-first to a fault. For a €10M+ buyer comparing to GA360/Adobe (which both lead with screenshots), the absence of any product imagery in the first viewport hurts perceived legitimacy.

### Default Next.js 404 (CRIT)
`not-found.tsx` is missing or default. Any broken/missing URL — including the surfaced /vs/ga4/ gap — lands users on a stock framework page with no header, no logo, no recovery links. Brand trust hit.

### Mobile fold pressure (HIGH on pricing, MED elsewhere)
Pricing has the worst mobile fold: 4-line pill + eyebrow + 4-line H1 pushes both CTA and any commercial content below the fold. Product is close behind. Both pages need tighter top spacing on mobile.

### Missing /vs/ga4/ (CRIT)
Highest-impact content gap. GA4 is the migration source for ~90% of prospects. The `/vs/` hub lists ga360, adobe-analytics, matomo, piwik-pro — but not GA4. Build this page next.

---

## Priority queue (impact × effort)

1. **CRIT** Create `/vs/ga4/` — highest-search comparison, currently 404.
2. **CRIT** Add pricing anchor / starting price above the fold on `/pricing/`.
3. **CRIT** Build branded `not-found.tsx`.
4. **HIGH** Retrofit amber highlight under italic H1/H2 across `/`, `/product/`, `/pricing/`, `/blog/`. Use `/open/` as reference.
5. **HIGH** Add a product visual (dashboard or chart) above the fold on `/product/` and `/`.
6. **HIGH** Normalize CTA copy ("Start Free Trial" / "Book a Demo" sentence case, globally).
7. **HIGH** Tighten mobile top spacing on `/pricing/` so CTAs sit in viewport 1.
8. **MED** Rework `/pricing/` H1 to anchor on price or value framing, not "Pay for humans."
9. **MED** Reduce `/blog/` H1 vertical footprint so 2+ articles fit above the fold.
10. **LOW** Resolve "Eleven chapters" vs "8 chapters published" copy on `/open/`.
