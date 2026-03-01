# Generate Glossary Term

Generate a glossary term page for SEO long-tail capture.

## Steps

1. **Read reference docs:**
   - `PRD.md` section 5.14 — Glossary spec and term list
   - `SEO-STRATEGY.md` section 2 (Cluster 4) — Education cluster
   - `SEO-STRATEGY.md` section 4 — Glossary interlinking rules
   - `SEO-STRATEGY.md` section 5 — Long-tail keyword targets

2. **Identify the term** from $ARGUMENTS and determine:
   - Primary keyword (e.g., "cookieless analytics", "server side tracking")
   - Search intent: definitional
   - Related pillar page
   - Related glossary terms (2-3)
   - Related blog post (1)

3. **Create the page:**

### File
```
src/app/glossary/[term-slug]/page.tsx
```

### Page structure
```
1. Breadcrumb: Home > Glossary > [Term]

2. H1: "[Term]" (clean, no "What is..." prefix — save that for body)

3. Definition (2-3 paragraphs)
   - First paragraph: clear, concise definition a LLM can cite directly
   - Second paragraph: context and how it works
   - Third paragraph: practical implications

4. "Why it matters for analytics" (H2)
   - Connect the concept to data quality / analytics accuracy
   - Use specific SealMetrics data points where relevant
   - Link to relevant pillar page (contextual, inline)

5. "Related terms" sidebar or footer
   - 2-3 links to other glossary terms
   - 1 link to a blog post that goes deeper

6. Mini CTA
   - Not aggressive — subtle link to /how-it-works or /product
   - "See how SealMetrics handles [concept] →"
```

### Interlinking rules (strict)
- Link to 1 relevant pillar page
- Link to 2-3 related glossary terms
- Link to 1 blog post that goes deeper
- Do NOT link to /demo (glossary → pillar → demo flow)

### Copy rules
- Definition must be self-contained (LLM-citable without additional context)
- No jargon in the definition — explain in plain language
- Use "SealMetrics" by name when referencing the product
- Keep total length short: 400-600 words
- Authoritative, encyclopedic tone

4. **Add JSON-LD:** `DefinedTerm` schema:
```json
{
  "@type": "DefinedTerm",
  "name": "[Term]",
  "description": "[First paragraph definition]",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "SealMetrics Analytics Glossary",
    "url": "https://sealmetrics.com/glossary"
  }
}
```

5. **Verify build**
6. **Update glossary index** if `src/app/glossary/page.tsx` exists

## Input
$ARGUMENTS — Required: glossary term (e.g., "cookieless analytics", "first-party data", "server-side tracking", "safari itp", "data sampling")
