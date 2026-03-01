# Generate Page

Generate a complete new page for the SealMetrics website from a topic or brief.

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
- Source Serif 4 for headlines (weight 400)
- Inter for body
- JetBrains Mono for data/numbers
- Border radius: 4px max
- Font weight: 600 max
- Dashes (—) for lists, never bullets
- No emojis, no gradients, no decorative icons
- Green (`green-muted`) for positive, red (`red-alert`) for negative

5. **Verify build:**
```bash
cd /Users/rafa/code/web-sealmetrics && npx next build 2>&1 | tail -10
```

6. **Update sitemap** if `public/sitemap.xml` exists

## Input
$ARGUMENTS — Required: topic or page description (e.g., "comparison vs matomo", "blog post about GA4 data loss", "glossary term cookieless analytics", "landing page for CTOs")
