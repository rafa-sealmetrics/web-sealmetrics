# Conversion Audit

Audit conversion elements across the site — CTAs, social proof, objection handling, and user flow.

## Steps

1. **Read all page files** in `src/app/*/page.tsx` and `src/components/sections/*.tsx`
2. **Read `PRD.md` section 10** for conversion KPI targets per page

## Audit each page for:

### CTAs
- [ ] Has at least 1 CTA (except blog posts, which link to pillars instead)
- [ ] CTA text is action-specific ("Book a Demo", not "Learn More")
- [ ] CTA placement is after value demonstration, not before context
- [ ] Primary CTA links to /demo or /pricing
- [ ] CTA button uses correct styling (dark solid for primary, outlined for secondary)
- [ ] No more than 2 CTAs per page (avoid choice paralysis)

### Social proof
- [ ] Homepage has logos section
- [ ] Homepage has testimonials
- [ ] Homepage has case study preview
- [ ] Pricing page has trust indicators
- [ ] Demo page has trust indicators next to form
- [ ] Comparison pages reference real customer results

### Objection handling
- [ ] Pricing page has FAQ section addressing common objections
- [ ] Security page addresses compliance concerns explicitly
- [ ] Product page shows integrations (reduces "will it work with my stack?" objection)
- [ ] Demo form explains what happens after submission

### Pain-before-solution flow
- [ ] Each page states the problem before presenting the solution
- [ ] Problem statement uses specific numbers (13%, 87%, etc.)
- [ ] Solution presentation follows immediately after pain
- [ ] No features listed without connecting to a business outcome

### User flow analysis
- [ ] Homepage → Demo path is clear (max 2 clicks)
- [ ] Pricing → Demo path exists
- [ ] vs-ga4 → Demo path exists
- [ ] Product → Demo path exists
- [ ] No dead-end pages (every page has a next action)

## Output

### CTA inventory
| Page | CTA text | Links to | Position | Score |
|------|----------|----------|----------|-------|
| / Hero | "Book a Demo" | /demo | Top | ✅ |

### Conversion flow map
```
Homepage → /demo (Hero CTA)
Homepage → /pricing → /demo
Homepage → /product → /demo
...
```

### Issues found
| Page | Issue | Impact | Fix |
|------|-------|--------|-----|
| /product | No CTA visible in first viewport | High | Add hero CTA |

### Recommendations (ordered by conversion impact)
1. [High] ...
2. [Medium] ...
3. [Low] ...

### Score
- Pages audited: X
- CTAs found: X
- Missing CTAs: X
- Social proof elements: X
- Conversion health: X/100

## Input
$ARGUMENTS — Optional: specific page to audit. If empty, audit all pages.
