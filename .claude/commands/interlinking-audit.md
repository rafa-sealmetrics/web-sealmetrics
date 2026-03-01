# Interlinking Audit

Audit all internal links across the site and verify they follow the strategy in `SEO-STRATEGY.md`.

## Steps

1. **Read `SEO-STRATEGY.md` sections 3-4** for link equity flow and interlinking rules
2. **Scan all page files** in `src/app/*/page.tsx` and `src/components/sections/*.tsx`
3. **For each page, extract:**
   - All `<a href>` and `<Link href>` internal links
   - The page's position in the information hierarchy (Tier 1-6)
   - The topic cluster it belongs to

## Check for violations:

### Rule violations
- [ ] Homepage links to blog/glossary (should only link to pillars + /demo)
- [ ] Blog posts link directly to /demo (should go blog → pillar → demo)
- [ ] Pages skip hierarchy levels (content → conversion without pillar)
- [ ] Generic link text used ("Learn More", "Click Here", "Read more")
- [ ] Comparison pages missing "Other comparisons" cross-link section

### Structural issues
- [ ] Orphan pages (no incoming internal links)
- [ ] Dead-end pages (no outgoing internal links)
- [ ] Broken links (link to pages that don't exist yet — flag as TODO)
- [ ] Over-linked pages (same page linked >3 times from one source)
- [ ] Under-linked pillar pages (should have 5+ incoming links)

### Link equity flow
- [ ] Link equity flows correctly: content → pillars → conversion
- [ ] Pillar pages have cross-links to each other (1-2 max)
- [ ] /demo and /pricing receive links from pillar pages

## Output

### Link map
```
/ (Tier 1) → /product, /how-it-works, /security, /pricing, /demo
/product (Tier 2) → /how-it-works, /demo, /vs-ga4
...
```

### Violations found
| Page | Issue | Severity | Fix |
|------|-------|----------|-----|
| /blog/x | Links to /demo directly | High | Change to link to /product |

### Missing links (recommendations)
| From | To | Anchor text suggestion |
|------|----|----------------------|
| /product | /how-it-works | "first-party server-side collection" |

### Score
- Pages audited: X
- Total internal links: X
- Violations: X
- Missing recommended links: X
- Health score: X/100

## Input
$ARGUMENTS — Optional: specific page to audit. If empty, audit all pages.
