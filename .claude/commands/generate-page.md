# Generate Page

Generate a complete new page for the Sealmetrics website from a topic or brief.

## Steps

1. **Identify the page type** from the input:
   - Comparison → `/vs/[competitor]`
   - Role landing → `/for/[role]`
   - Blog post → `/blog/[slug]`
   - Glossary term → `/glossary/[term]`
   - Tool/calculator → `/[name]`
   - Institutional → `/[name]`

2. **Read reference docs:**
   - `CLAUDE.md` — Design system, copy rules, page generation rules
   - `PRD.md` section 5 — Check if page spec exists
   - `SEO-STRATEGY.md` sections 2-4 — Cluster, keywords, interlinking

3. **Generate content brief** (show to user before building):
   - URL path
   - Primary + secondary keywords
   - H1, meta title, meta description
   - Section structure (H2s)
   - Interlinking plan
   - CTA strategy

4. **After user approval, build the page:**

### File structure
```
src/app/[route]/page.tsx
```

### Required elements
- `metadata` export: title, description, openGraph, canonical
- JSON-LD structured data (script tag)
- Exactly 1 `<h1>` with primary keyword
- Proper heading hierarchy
- Contextual internal links per `SEO-STRATEGY.md` section 4
- At least 1 CTA with action-specific text
- Alternating `bg-white` / `bg-warm-white` sections
- Section separators: `border-t border-warm-100`

### Design system compliance

**Read the "Design System Rules (v4 — Signal)" section of `CLAUDE.md` and follow
it.** Do not work from a copy: this file used to restate the rules and went
stale, so it was still prescribing the retired v3 system — Source Serif 4,
Inter, 4px radius, weight 600 — long after v4 landed. Under v4 the radius is
**0 everywhere**, headlines are Onest at weight 790, emphasis is outlined text
rather than italic, and acid `#CBFF3D` is the accent. A rounded corner is the
tell that a page has not been migrated.

`scripts/audit-signal-design.mjs` checks the built output for the Signal
marker, one H1 and square geometry.

5. **Verify:**
```bash
npm run build && npm test
```

`npm run build` runs the whole postbuild chain — the Markdown twins, the
llms.txt drift gate, the CSP gate and `scripts/seo-audit.mjs`. **`npx next
build` alone skips all of it** and will let a regression through, which is what
this file used to tell you to run.

`npm run audit:contrast` is a CI gate that is NOT part of the build. Run it
too if you touched markup or colour.

6. **Add a line to `public/llms.txt`** for the new page. It is hand-written and
   `audit-llms-txt` fails the build if it drifts from the sitemap. The sitemap
   itself is derived from each page's `robots` metadata — there is no
   `public/sitemap.xml` to edit, and no exclusion list to maintain.

## Input
$ARGUMENTS — Required: topic or page description (e.g., "comparison vs matomo", "blog post about GA4 data loss", "glossary term cookieless analytics", "landing page for CTOs")
