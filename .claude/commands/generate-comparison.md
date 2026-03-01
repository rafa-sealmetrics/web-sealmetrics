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
   - Where SealMetrics is different (data completeness, cookieless, EU)
   - Pricing comparison if available

3. **Generate content brief** (show to user):
   - URL: `/vs/[competitor-slug]`
   - Primary keyword: "sealmetrics vs [competitor]"
   - Secondary keywords: "[competitor] alternative", "[competitor] vs cookieless"
   - Comparison table rows (8-12 features)
   - Competitor strengths section (2-3 points)
   - SealMetrics differences section (3-4 points)

4. **After approval, create the page:**

### File
```
src/app/vs/[competitor-slug]/page.tsx
```

### Page structure (follow vs-ga4 pattern)
```
1. Hero
   - "SealMetrics vs [Competitor]"
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

4. "Where SealMetrics is different"
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

5. **Add JSON-LD:** `WebPage` schema with comparison content
6. **Verify build**

## Input
$ARGUMENTS — Required: competitor name (e.g., "matomo", "plausible", "amplitude", "piwik-pro", "adobe-analytics")
