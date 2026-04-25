# SealMetrics v3 · SEO Action Plan

Prioritized recommendations after full audit. Critical → High → Medium → Low.

---

## ✅ CRITICAL (fixed during audit)

All blocking issues resolved pre-deploy:

1. **Hreflang missing on 53 URLs** → 11 routes added to `translatedPaths` in `src/lib/i18n/navigation.ts`
2. **`<h3>` before `<h1>` on 19 pages** → `LogosStrip` moved after hero on all verticals + vs pages
3. **`og:image` missing on 18 pages with custom `openGraph`** → default URL injected everywhere
4. **Descriptions > 160 chars on verticals** → auto-trimmed via template

---

## 🔥 HIGH (within 24h)

### H1. Regenerate sitemap.xml before deploy
The `public/sitemap.xml` currently reflects the OLD site. Needs regeneration to include the new v3 routes (`/es/vs-ga4`, `/es/alternatives/*`, `/es/about`, `/es/integrations`, `/es/platforms`, `/es/blog`, `/es/glossary`, `/es/case-studies`, `/es/data-loss-calculator`) with proper hreflang `xhtml:link` pairs.

- Option A: add `src/app/sitemap.ts` using Next.js built-in sitemap generator
- Option B: regenerate manually pre-deploy

### H2. Replace SVG illustrations with real photography
The "Industries" section on the home (Hotels/eCommerce/Infrastructure/Agencies) uses editorial SVG scenes. For premium feel + better OG sharing, replace with real photos:
- Hotel room / lobby photo
- DTC product flat-lay or store mockup
- Real EU data center interior
- Multi-brand dashboard composite

### H3. Real founder photo
Current: "RJ" avatar on gradient background in About + FinalCTA. Replace with professional headshot of Rafa Jiménez. Square crop, 400x400 minimum.

### H4. Real product dashboard screenshot for hero
The home hero currently uses an inline SVG dashboard mockup. Replace with real SealMetrics dashboard screenshot (16:10 aspect, 1200x750 ideal).

---

## 📊 MEDIUM (within 1 week)

### M1. Add `Product` schema to pricing plans
Each of the 3 plans (Growth/Scale/Enterprise) should have `Product` + `Offer` JSON-LD for Rich Results eligibility. Currently only `SoftwareApplication` at page level.

### M2. Consistent `Article` schema on all blog posts
Audit all 24 blog posts; ensure each has `articleSchema` JSON-LD with author, datePublished, category.

### M3. Update blog posts and glossary terms to v3 copy standards
Currently inherit Onest font automatically but content is legacy. Port to:
- H1 with italic emphasis + amber highlight
- Editorial callouts for key definitions
- Final CTA slab matching site pattern
- ~39 individual pages affected

### M4. Add `/es/privacy`, `/es/terms`, `/es/dpa`
Legal pages only exist in EN. Create Spanish translations for ES visitors (compliance signal).

### M5. Update `CLAUDE.md` design system rules
The CLAUDE.md rules now slightly out of date. Update to match v3 implemented state:
- "Up to 4px radius" → allow 10-20px for cards, 999px for pills
- Font weight rule update
- Dark slab pattern documented

### M6. Update robots.txt + llms.txt for GitHub Pages
Both reference `https://sealmetrics.com/`. If deploying to a different domain (preview subdomain, GitHub Pages URL), update references. `public/robots.txt` is currently uncommitted — verify content.

---

## 🔧 LOW (backlog)

### L1. Security headers via deploy config
GitHub Pages doesn't allow custom headers, but document for future Cloudflare / Vercel deploy:
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### L2. Performance budget validation
Post-deploy:
- Run Lighthouse on 10 representative pages
- Set budget: LCP <2.5s, INP <200ms, CLS <0.1
- Validate Onest font loading doesn't cause FOUT

### L3. OG image per section
Currently one generic `og-image.png`. Create 4-5 section-specific OG images:
- Home/generic (exists)
- Pricing-specific
- Product-specific
- Vs comparison-specific
- Verticals-specific

### L4. Submit updated sitemap to Google Search Console post-deploy
Once deployed, submit the new sitemap to GSC to accelerate indexing of v3 pages.

### L5. Monitor AI citation signals
Track brand mentions in:
- ChatGPT search results
- Perplexity citations
- Google AI Overviews
- Claude web search
All depend on external linking + content quality post-deploy.

---

## Post-deploy monitoring checklist

- [ ] Run Lighthouse on home, pricing, product, vs-ga4, /for/cmo
- [ ] Verify hreflang alternates return 200 on both sides
- [ ] Test OG image rendering on Twitter/LinkedIn/Facebook share previews
- [ ] Submit sitemap to GSC
- [ ] Monitor 404s for old URLs (if any route changed)
- [ ] Monitor Core Web Vitals in GSC Experience report
- [ ] Track "SealMetrics vs …" keyword rankings (high commercial intent)
- [ ] Track "for cmo / for cto / for dpo" vertical landing pages ranking
