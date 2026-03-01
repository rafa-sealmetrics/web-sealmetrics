# Generate Blog Post

Generate a complete blog post for the SealMetrics website.

## Steps

1. **Read reference docs:**
   - `SEO-STRATEGY.md` section 5 — Keyword map for blog targets
   - `SEO-STRATEGY.md` section 4 — Blog interlinking rules
   - `PRD.md` section 5.13 — Blog spec and initial article list
   - `CLAUDE.md` — Copy rules and design system

2. **Research the topic:**
   - Identify primary keyword and search intent
   - Determine which topic cluster it belongs to (Product, Comparisons, Compliance, Education)
   - Identify the pillar page it should link to

3. **Generate content brief** (show to user):
   - Title (H1) — includes primary keyword
   - Meta title (<60 chars) — includes "SealMetrics" brand
   - Meta description (<160 chars) — includes CTA language
   - Target word count: 1,200-2,000 words
   - Section outline (H2s and H3s)
   - Key data points to include
   - Internal links plan

4. **After approval, create the blog post file:**

### If MDX is set up:
```
src/content/blog/[slug].mdx
```

### If MDX is NOT set up yet, create as a page component:
```
src/app/blog/[slug]/page.tsx
```

### Blog post structure
```
- Hero: title, date, author ("SealMetrics Team"), read time, category tag
- Introduction: hook with specific data point, state the problem
- Body: 3-5 sections with H2 headings
  - Each section: claim → evidence → implication
  - Use specific numbers (percentages, euros, timeframes)
  - Include 1 data visualization or comparison where relevant
- Conclusion: summarize key takeaway, bridge to pillar page
- Inline CTA: link to /data-loss-calculator or relevant pillar (NOT /demo)
- Related articles footer: 3 related posts
```

### Interlinking rules (strict)
- Link to exactly 1 pillar page (inline, contextual)
- Link to 1-2 glossary terms (first mention of concept)
- Link to /data-loss-calculator (inline CTA)
- Link to 2-3 related blog posts (footer)
- NEVER link directly to /demo (blog → pillar → demo flow)

### Copy rules
- Pain before solution
- Specific numbers, never vague qualifiers
- Honest about competitors — "GA4 works well when..."
- Authoritative, editorial tone
- No emojis

5. **Add JSON-LD** `Article` schema:
```json
{
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Organization", "name": "SealMetrics" },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "publisher": { "@type": "Organization", "name": "SealMetrics" }
}
```

6. **Verify build passes**

## Input
$ARGUMENTS — Required: blog topic (e.g., "why GA4 shows 13% of EU traffic", "cookieless analytics complete guide", "GDPR analytics consent requirements")
