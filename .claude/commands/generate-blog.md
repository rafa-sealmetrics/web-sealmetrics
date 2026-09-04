# Generate Blog Post

Generate a complete blog post for the Sealmetrics website.

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
   - Meta title (<60 chars) — includes "Sealmetrics" brand
   - Meta description (<160 chars) — includes CTA language
   - Target word count: 1,200-2,000 words
   - Section outline (H2s and H3s)
   - Key data points to include
   - Internal links plan

4. **Register the post first, then create the page.**

   The registry is the source of truth for a post's dates, and the sitemap
   reads it. A page that carries its own dates cannot be seen by the sitemap
   and will fail the build.

   Add the entry to `src/lib/content/blog.ts`:
   ```ts
   {
     slug: "your-slug",
     title: "...",
     description: "...",
     date: "2026-09-04",        // publication
     // dateModified: only when you later revise the post for real
     category: "Regulation",
     readTime: "8 min",
     author: AUTHORS.rafa,
     related: [],
   },
   ```

   Then create `src/app/(en)/blog/[slug]/page.tsx`. There is no MDX in this
   repo — every page is a TSX component, and the route group `(en)` is part of
   the path. Ship the Spanish twin at `src/app/(es)/es/blog/[slug]/page.tsx`
   with native editorial copy, never a machine translation.

### Blog post structure
```
- Hero: title, QuickAnswer, <PostByline>, category tag
- Introduction: hook with specific data point, state the problem
- Body: 3-5 sections with H2 headings
  - Each section: claim → evidence → implication
  - Use specific numbers (percentages, euros, timeframes)
  - Include 1 data visualization or comparison where relevant
- Conclusion: summarize key takeaway, bridge to pillar page
- <CommercialModule> with a hook line specific to this post's topic
- Related articles footer: 3 related posts
```

### Interlinking rules (strict)
- Link to exactly 1 pillar page (inline, contextual)
- Link to 1-2 glossary terms (first mention of concept)
- Link to /data-loss-calculator (inline CTA)
- Link to 2-3 related blog posts (footer)
- Body text NEVER links directly to /demo (blog → pillar → demo flow).
  `<CommercialModule>` is the one sanctioned exception and every post has one

### Copy rules
- Pain before solution
- Specific numbers, never vague qualifiers
- Honest about competitors — "GA4 works well when..."
- Authoritative, editorial tone
- No emojis
- **Never claim multi-touch attribution, customer journeys, session
  reconstruction or user-level analysis.** Sealmetrics is aggregate, anonymous
  event measurement with last-click attribution. A post shipped in September
  2026 promised readers "the full customer journey, from the first click to the
  final checkout" and had to be corrected in production

5. **Dates and schema come from the helpers. Never write either by hand.**

   ```tsx
   import { articleSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";
   import { postDates } from "@/lib/content/blog";
   import { PostByline } from "@/components/ui/PostByline";

   export default function Page() {
     const dates = postDates("your-slug");          // ("your-slug", "es") on the ES twin

     return (
       <>
         <JsonLd data={articleSchema({
           headline: "...",
           description: "...",
           ...dates,
           url: "/blog/your-slug",
           category: "Regulation",
           author: AUTHORS.rafa,
         })} />
         ...
         <PostByline {...dates} readTime="8 min read"
           authorName="Rafa Jiménez" authorUrl="/authors/rafa-jimenez" />
   ```

   `articleSchema()` is what references the publisher by `@id`, resolves the
   author to the single Person node and sets `inLanguage`. Writing the Article
   object by hand — which this file used to tell you to do — fails
   `publisher-not-linked`, and hard-coding the dates fails
   `lastmod-disagrees-with-date-modified`.

   If the post has an FAQ, the questions and answers must be **visible on the
   page** (`<FaqSection>`); schema-only FAQ fails `faq-schema-not-visible`.

6. **Verify:** `npm run build` (0 violations) and `npm test`. Both must pass
   before opening a PR. `npm run audit:contrast` is a CI gate that is NOT part
   of the build — run it too if you touched any markup.

## Input
$ARGUMENTS — Required: blog topic (e.g., "why GA4 shows 13% of EU traffic", "cookieless analytics complete guide", "GDPR analytics consent requirements")
