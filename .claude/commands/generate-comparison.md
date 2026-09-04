# Generate Comparison Page

Generate a `/vs/[competitor]` comparison page following the established pattern.

## Steps

1. **Read reference docs:**
   - `PRD.md` section 5.10 — Comparison page spec
   - `SEO-STRATEGY.md` section 2 (Cluster 2) — Comparison cluster rules
   - `SEO-STRATEGY.md` section 4 — Comparison interlinking rules
   - `SEO-STRATEGY.md` section 5 — Keywords for comparisons
   - `src/app/vs-ga4/page.tsx` — Reference implementation (follow same structure)

2. **Research the competitor** from $ARGUMENTS:
   - What they do (positioning, features)
   - Where they're strong (be honest)
   - Where Sealmetrics is different (data completeness, cookieless, EU)
   - Pricing comparison if available

3. **Generate content brief** (show to user):
   - URL: `/vs/[competitor-slug]`
   - Primary keyword: "sealmetrics vs [competitor]"
   - Secondary keywords: "[competitor] alternative", "[competitor] vs cookieless"
   - Comparison table rows (8-12 features)
   - Competitor strengths section (2-3 points)
   - Sealmetrics differences section (3-4 points)

4. **After approval, create the page:**

### File
```
src/app/vs/[competitor-slug]/page.tsx
```

### Page structure (follow vs-ga4 pattern)
```
1. Hero
   - "Sealmetrics vs [Competitor]"
   - Subtitle: key differentiator in one line
   - Two stat cards showing key difference

2. Comparison table
   - 8-12 rows across 3-4 categories (Data, Intelligence, Privacy, Other)
   - SM column: specific capabilities
   - Competitor column: honest representation
   - Use checkmarks (✓), specific values, or brief text — not just yes/no

3. "Where [Competitor] works well"
   - 2-3 genuine strengths
   - Honest, not dismissive
   - "If you need X, [Competitor] is a solid choice"

4. "Where Sealmetrics is different"
   - 3-4 specific differentiators backed by data
   - Focus on data completeness, cookieless, EU compliance
   - Use specific numbers

5. "Other comparisons" footer
   - Links to all other /vs/* pages
   - Format: grid of cards linking to sibling comparisons

6. CTA section
   - "See it with your own data — Book a Demo"
   - Link to /demo
```

### Required internal links
- → /product (inline: "see full platform")
- → /how-it-works (inline: "how our collection works")
- → /data-loss-calculator (inline: "calculate your own data loss")
- → /demo (CTA)
- → other /vs/* pages (footer: "Other comparisons")

5. **Register the competitor, then build the schema from it.**

   Competitor facts live in `src/lib/content/competitors.ts`, never inline on
   the page — one record per product, so two of our pages describe the same
   competitor identically:

   ```ts
   "piwik-pro": {
     name: "Piwik PRO",
     url: "https://piwik.pro/",
     // wikidata: only if an item for the PRODUCT actually exists.
     // Adobe Analytics and Piwik PRO have none. Do NOT substitute an
     // approximately-related item — a wrong sameAs is a false statement
     // about identity, and `about-without-sameAs` warns for exactly that.
   },
   ```

   Then:
   ```tsx
   import { comparisonPageSchema, breadcrumbSchema } from "@/lib/schema";
   import { competitor } from "@/lib/content/competitors";

   <JsonLd data={comparisonPageSchema({
     name: "Sealmetrics vs Piwik PRO",
     description: "...",
     url: "/vs/piwik-pro",
     competitor: competitor("piwik-pro"),
     datePublished: "...",
     author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez" },
     criteria: [...],
   })} />
   ```

   Never write the `WebPage`/`Article` object by hand. The helper is what
   references the publisher by `@id`, resolves the author to the single Person
   node and sets `inLanguage`; a hand-written one fails `publisher-not-linked`
   and `person-entity-split`.

6. **Mark the CTA block `data-md="skip"`.** The Markdown twin is the passage an
   answer engine quotes, and a CTA means nothing outside the page.
   `markdown-twin-cta-leak` fails the build otherwise.

7. **Verify:** `npm run build` (0 violations) and `npm test`.

## Never compare with

Plausible, Fathom, Simple Analytics, Umami, Cabin. Different category, and
comparing commoditizes Sealmetrics — see CLAUDE.md. The competitive tier is
GA360, Adobe Analytics, Piwik PRO and GA4.

## Input
$ARGUMENTS — Required: competitor name (e.g., "matomo", "plausible", "amplitude", "piwik-pro", "adobe-analytics")
