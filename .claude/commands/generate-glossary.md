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
   - Use specific Sealmetrics data points where relevant
   - Link to relevant pillar page (contextual, inline)

5. "Related terms" sidebar or footer
   - 2-3 links to other glossary terms
   - 1 link to a blog post that goes deeper

6. Mini CTA
   - Not aggressive — subtle link to /how-it-works or /product
   - "See how Sealmetrics handles [concept] →"
```

### Interlinking rules (strict)
- Link to 1 relevant pillar page
- Link to 2-3 related glossary terms
- Link to 1 blog post that goes deeper
- Do NOT link to /demo (glossary → pillar → demo flow)

### Copy rules
- Definition must be self-contained (LLM-citable without additional context)
- No jargon in the definition — explain in plain language
- Use "Sealmetrics" by name when referencing the product
- Keep total length short: 400-600 words
- Authoritative, encyclopedic tone

4. **Register the term, then use the helper.**

   The term and its short definition live in `src/lib/content/glossary.ts`
   (`glossary-es.ts` for Spanish). That one entry feeds the index page, the
   `DefinedTermSet` and the term page — do not restate the definition anywhere.

   ```tsx
   import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";

   <JsonLd data={definedTermSchema({
     name: "Data Sampling",
     description: "...",
     url: "/glossary/data-sampling",
     related: [...],
   })} />
   ```

   The helper emits a stable `@id` (`<url>#term`) so other schemas can cite the
   definition, and sets `inLanguage` from the route. A hand-written
   `DefinedTerm` has neither.

5. **Verify:** `npm run build` (0 violations) and `npm test`.
6. **Add the term to the index** in `src/lib/content/glossary.ts`; the
   `/glossary` page renders every definition inline from it, so there is
   nothing to edit on the page itself.

## Input
$ARGUMENTS — Required: glossary term (e.g., "cookieless analytics", "first-party data", "server-side tracking", "safari itp", "data sampling")
