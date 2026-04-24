# SealMetrics Marketing Website

## Project

Marketing website for SealMetrics — cookieless web analytics platform targeting CMOs and ecommerce managers of European companies with 10M€+ revenue. The site educates before it sells.

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS 4 (v4 syntax with `@theme` block in globals.css)
- Static export (`output: "export"` in next.config.ts)
- Fonts: **Onest** (headlines + body), JetBrains Mono (data)
- No additional JS libraries (no Framer Motion, no animation libs)

## Design System Rules (v3 — Editorial Authority)

- **Light mode default** · warm cream background `#FAFAF7` · alternate `bg-warm-white` and `bg-white` between sections
- **Two dark slabs allowed per page** (typically: featured case study, final CTA or pricing) — `bg-ink` (#0E0E0C)
- **Footer** — `bg-warm-900` (#0E0E0C), warm near-black
- **Border radius**: up to 4px for inputs, 10–16px for cards, 20–24px for hero/case slabs, pills (999px) for chips and announcement tags
- **Font weight**: headlines 600, italic emphasis 500, body 400, data chips 600 mono
- **Italic emphasis** on key phrases in H1/H2 with subtle amber highlight underneath (`color-amber-soft`)
- **Bullets**: dashes (—), never dots or icons
- **No emojis, ever**
- **Decorative gradients**: allowed as subtle `radial-gradient` (opacity ≤0.35) inside dark slabs only (case study, pricing, final CTA)
- Icons: minimal, SVG line style only
- **Brand accent** (`color-brand: #2D8B6D`) for positive indicators, deltas, link color
- **Amber** (`color-amber: #E8B84B`) for highlight behind italic emphasis, positive deltas inside dark slabs
- **Red alert** (`color-red-alert: #B5423B`) for negative data, anomalies, urgency
- **Blue quote** (`color-quote: #2E5C8A`) for editorial pull-quote left-border
- Sections separated by `border-t border-warm-100`
- Case studies currently anonymized (e.g. "European hotel group" instead of "Grupo Palladium") until explicit client OK to de-anonymize

## Content rules — DO NOT include

- **NEVER claim ISO 27001 or SOC 2 certification** — not certified yet. If compliance is mentioned, use: GDPR by architecture, ePrivacy, Schrems II clean, EU-hosted in Dublin, DPA included, TPSR package
- **NEVER include `rafa@sealmetrics.com` or any personal email** — use Cal.com link or `/demo` CTA for contact
- Data centre location: **Dublin, Ireland only** (not Frankfurt, not Germany)
- Agency partners to mention when relevant: Product Hackers, 3dids, Ayesa

## File Conventions

- Pages: `src/app/[route]/page.tsx`
- Homepage sections: `src/components/sections/[Name].tsx`
- Layout components: `src/components/layout/[Name].tsx`
- Reusable UI: `src/components/ui/[Name].tsx`
- Content data: `src/lib/content/`
- Design tokens: `src/app/globals.css` (@theme block)

## SEO Rules (apply to every page)

- Every page must have unique `title` (<60 chars) and `description` (<160 chars)
- Every page must have `openGraph` metadata (title, description, type)
- Include JSON-LD structured data appropriate to page type
- Internal links must be contextual (within text), not generic lists ("Related: X, Y, Z")
- Blog posts link to pillar pages, never directly to /demo
- Pillar pages (/product, /how-it-works, /security) link to /demo
- Every page includes breadcrumbs (when not homepage)
- First mention of a key concept links to its glossary page
- Comparisons (/vs/*) link to each other in a "Other comparisons" footer section
- See `SEO-STRATEGY.md` for full cluster map and keyword targets

## Competitive Positioning

SealMetrics competes in the **enterprise analytics** tier, NOT in the privacy-lightweight tier.

**Compare with (same league):**
- Google Analytics 360 (GA360) — enterprise Google, $150K+/yr
- Adobe Analytics — enterprise legacy, $100K+/yr
- Piwik PRO — EU enterprise privacy analytics, €30K+/yr
- GA4 (free) — the default everyone is migrating from

**NEVER compare with (different category):**
- Plausible, Fathom, Simple Analytics, Umami, Cabin — these are lightweight/privacy tools at €9-50/mo
- Comparing with them commoditizes SealMetrics and makes the price look expensive
- If a blog post mentions them, frame them as "privacy-first lightweight alternatives" in a different category

**Positioning frame:**
- SealMetrics is enterprise-grade analytics at a fraction of GA360/Adobe pricing
- The differentiator is complete data (cookieless, 100%) + EU compliance + AI supervision
- Frame price as investment vs. cost of bad decisions on incomplete data

## Copywriting Rules

- Language: English only (i18n planned for later)
- Tone: authoritative, precise, editorial — not startup-casual, not corporate-boring
- Never use superlatives without data ("the best" → "captures 100%")
- Pain before solution — state the problem before presenting the answer
- Use specific numbers: "13%", "87%", "60+ rules" — not "most", "many", "several"
- CTA text should be action-specific: "Book a Demo", "Calculate Your Data Loss", "See Full Comparison" — not "Learn More" or "Click Here"
- Avoid jargon without explanation on educational pages
- Be honest about competitors — "GA4 works well when..." not "GA4 is terrible"
- Frame SealMetrics vs enterprise tools (GA360, Adobe), never vs lightweight privacy tools

## Page Generation Rules (auto-applied when creating any page)

When asked to create a new page, ALWAYS apply these rules automatically:

### Structure
1. Read `PRD.md` section 5 for page spec if it exists
2. Read `SEO-STRATEGY.md` sections 2-4 to determine which cluster the page belongs to and what it should link to
3. Follow the design system rules above (light mode, alternating white/warm-white)
4. Include proper `metadata` export with title (<60 chars), description (<160 chars), openGraph, and canonical URL

### SEO (automatic)
5. Add JSON-LD structured data matching the page type (see SEO-STRATEGY.md section 6)
6. Ensure exactly 1 `<h1>`, proper heading hierarchy (h1 → h2 → h3)
7. Add contextual inline internal links per interlinking rules (SEO-STRATEGY.md section 4)
8. First mention of a key concept → link to glossary page
9. Include breadcrumbs (unless homepage)

### Copy (automatic)
10. Pain before solution — state the problem first
11. Use specific numbers, never vague qualifiers
12. CTA text must be action-specific ("Book a Demo", not "Learn More")
13. Honest about competitors — acknowledge strengths, differentiate on data
14. Tone: authoritative, editorial — not startup-casual

### Conversion (automatic)
15. Every page below Tier 1 must include at least 1 CTA linking to /demo or /pricing
16. CTA placement: after demonstrating value, never at the top before context
17. Comparison pages include "Other comparisons" footer section linking to sibling /vs/* pages
18. Blog posts do NOT link directly to /demo (flow: blog → pillar → demo)

### Technical
19. Static export compatible — no server components with dynamic data
20. Images via next/image with unoptimized: true
21. Client components only where interactive (forms, calculators)
22. No additional JS libraries

## Skills (manual invocation with `/command`)

Available skills in `.claude/commands/`:

### Generation
- `/generate-page [topic]` — Generate a complete new page from a topic
- `/generate-blog [topic]` — Generate a blog post with proper interlinking
- `/generate-comparison [competitor]` — Generate a /vs/* comparison page
- `/generate-glossary [term]` — Generate a glossary term page
- `/generate-schema [page]` — Generate JSON-LD structured data for a page
- `/generate-sitemap` — Generate/update sitemap.xml and robots.txt
- `/generate-llms-txt` — Generate/update llms.txt for LLM discoverability

### Optimization
- `/optimize-page [page]` — Optimize an existing page for SEO + conversion
- `/content-brief [topic]` — Generate a content brief before building

### Audits
- `/seo-audit [page?]` — Audit SEO of a specific page or all pages
- `/interlinking-audit [page?]` — Audit internal links across the site
- `/conversion-audit [page?]` — Audit CTAs, social proof, and conversion flow
- `/accessibility-audit [page?]` — Audit WCAG 2.1 AA compliance
- `/lighthouse-check` — Build analysis + performance/SEO/a11y report

## Reference Documents

- `PRD.md` — Full product spec, page requirements, phases
- `SEO-STRATEGY.md` — Topic clusters, interlinking map, keyword targets, LLM discoverability
- `mockups/estrategia-diseno.html` — Original design strategy
- `mockups/informe-competidores.html` — 23 competitor analysis
