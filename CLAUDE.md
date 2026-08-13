# SealMetrics Marketing Website

## Project

Marketing website for SealMetrics — cookieless web analytics platform targeting CMOs and ecommerce managers of European companies with 10M€+ revenue. The site educates before it sells.

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS 4 (v4 syntax with `@theme` block in globals.css)
- Static export (`output: "export"` in next.config.ts)
- Fonts: **Onest** (headlines + body), JetBrains Mono (data)
- No additional JS libraries (no Framer Motion, no animation libs)

## Design System Rules (v4 — Signal)

> Canonical source is this file. Keep `AGENTS.md` in sync — the stale v3 copy previously reintroduced retired rules.

Ported from the Sites redesign. **v3 tokens still exist in `globals.css` and must not be deleted** until the last page is migrated — see `MIGRATION-MAP.md`. New and ported pages use v4 only.

- **Light mode default** · paper background `#F4F1E8` (`bg-paper`) · alternate with `bg-paper-white` (#FFFDF7) between sections
- **Ink** `#111412` for dark slabs, header rules and the footer
- **Border radius: 0 everywhere.** No rounded cards, no pills, no rounded chips. A rounded corner is the tell that a page has not been migrated
- **Depth is a hard offset shadow, never a blur**: `shadow-hard` (3px 3px 0 ink), `shadow-slab` (20px 20px 0 acid). Buttons lift with `translate(-2px,-2px)` on hover
- **Acid** (`color-acid: #CBFF3D`) is the accent: primary CTA fill, eyebrow chips (ink background + acid text), live indicators, slab shadows. Replaces brand green and amber as the attention colour
- **Emphasis in H1/H2 is outlined text**, not italic: `color: transparent; -webkit-text-stroke: 1.5px currentColor`. The v3 italic + amber highlight is retired
- **Type**: headlines weight 790, `text-display` clamp(62px,7.2vw,112px) / line-height .84 / tracking -.075em. Body 400. Eyebrows and data in JetBrains Mono 650, 10px, tracking .12em, uppercase
- **Fonts unchanged**: Onest (headlines + body), JetBrains Mono (data, eyebrows)
- **Hairline rules** `--color-hairline` separate sections — 1px solid, never a shadow
- **Grid overlay** allowed on hero only: 64px grid at opacity .16, masked to fade horizontally
- **Bullets**: dashes (—), never dots or icons
- **No emojis, ever**
- Icons: minimal, SVG line style only
- **Green and amber survive as data semantics only** — positive delta, warning — never as emphasis or CTA. **Red alert** `#B5423B` for negative data. **Blue quote** `#2E5C8A` for pull-quote left border
- **Case studies are named, not anonymized.** Palladium Hotel Group (Toni Andújar) and Dreamplace Hotels are approved by name with their published figures. Do not re-anonymize them and do not introduce a new client name that is not already approved

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
- **`openGraph` must be complete on every page: `title`, `description`, `url`, `siteName`, `locale`, `type`, `images`.** Next.js REPLACES the layout's `openGraph` object when a page declares its own — it does not deep-merge. A page that sets only `{title, description, type}` silently ships with no `og:url`, no `og:site_name` and no `og:image`
- **Every page must declare its own `twitter` block.** Same reason in reverse: a page that omits it inherits the layout's verbatim, so hundreds of pages end up sharing one Twitter card
- Include JSON-LD structured data appropriate to page type
- **`FAQPage` JSON-LD requires the questions and answers to be rendered visibly on the page** — use `<FaqSection items={FAQ} />` (`src/components/ui/FaqSection.tsx`). Schema-only FAQ violates Google's structured data policy and cannot be cited by AI engines
- **Never hand-maintain an exclusion list for the sitemap.** Indexability is derived from each page's own `robots` metadata in `src/lib/seo/routes.ts`. To keep a page out of the sitemap, mark it `noindex` — do not add it to a list
- `npm run build` fails on any SEO/GEO regression via `scripts/seo-audit.mjs`; `npm test` reports the same rules per-rule. Run both before opening a PR
- Blog posts must declare `dateModified` explicitly in their `articleSchema({ ... })` call, and it must only be bumped for a real content revision — never for a lint pass, a canonical/metadata rewrite or a formatting sweep. It is a freshness claim to Google and AI engines, so it is author-set and never derived: there is no git-based fallback, and a post that omits it falls back to its own `datePublished`
- Internal links must be contextual (within text), not generic lists ("Related: X, Y, Z")
- **Body-text links in blog posts go to pillar pages, never directly to /demo.** The `<CommercialModule>` conversion box (`src/components/ui/CommercialModule.tsx`) is the one sanctioned exception: it links directly to /demo and /pricing because it is a visually distinct conversion component, not an in-text link — it lives outside the SEO equity flow (spoke → pillar → demo), which stays intact. See `PRD-CONVERSION-REDESIGN.md` §7
- Pillar pages (/product, /how-it-works, /security) link to /demo
- Every page includes breadcrumbs (when not homepage)
- First mention of a key concept links to its glossary page
- Comparisons (/vs/*) link to each other in a "Other comparisons" footer section
- See `SEO-STRATEGY.md` for full cluster map and keyword targets

## Deployment reality (read before trusting any config)

- Production is **GitHub Pages** (`.github/workflows/deploy.yml`), a static-export deploy with **no custom headers**
- **`vercel.json` is staged, not served.** Its HSTS, CSP, X-Frame-Options, Referrer-Policy and cache rules reach nobody today. They are a reviewed draft for the migration in `INFRA-MIGRATION.md`, kept honest by `scripts/audit-csp.mjs`. Do not cite them as a live security posture, and do not delete the file — the CSP gate lints against it
- Consequences that are not bugs: redirects are `<meta http-equiv="refresh">` stubs, not 301s; there is no `X-Robots-Tag`; there is no `Vary: Accept` content negotiation. Each has a documented workaround in this file

## GEO Rules (machine-readable surface)

- `public/llms.txt` is editorial and hand-written; `scripts/audit-llms-txt.mjs` fails the build if it drifts from the sitemap. Adding a page means adding a hand-written line
- Every indexable page gets a Markdown twin at `/<route>.md`, generated from the rendered HTML by `scripts/generate-markdown.mjs`. Never write one by hand — generating from the HTML is what stops it drifting from what a human reads
- Content negotiation (`Accept: text/markdown` + `Vary: Accept`) is **not possible** on this stack: static export on GitHub Pages, no server or edge we control. Static `.md` twins are the deliberate substitute
- `.md` twins are `Disallow`ed for Googlebot/Bingbot and `Allow`ed for AI crawlers, so they cannot compete with the HTML in the search index. Do not remove those robots.txt rules
- State the limits, not just the strengths: what SealMetrics does not do, who it is not for. Models recommend more accurately when the boundaries are explicit — `/use-cases` and `llms.txt` both do this deliberately

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

- Language: English by default. When an `/es/*` counterpart exists or is requested, ship the English and Spanish pages together with native editorial copy — never a literal machine translation
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
18. Blog post body text does NOT link directly to /demo (flow: blog → pillar → demo). Every blog post DOES include a `<CommercialModule>` conversion box (direct to /demo — the sanctioned exception, see SEO Rules) with a hook line specific to the post's topic, placed before the related-articles block

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
