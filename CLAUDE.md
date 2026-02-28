# SealMetrics Marketing Website

## Project

Marketing website for SealMetrics — cookieless web analytics platform targeting CMOs and ecommerce managers of European companies with 10M€+ revenue. The site educates before it sells.

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS 4 (v4 syntax with `@theme` block in globals.css)
- Static export (`output: "export"` in next.config.ts)
- Fonts: Source Serif 4 (headlines), Inter (body), JetBrains Mono (data)
- No additional JS libraries (no Framer Motion, no animation libs)

## Design System Rules

- **All pages light mode** — alternate `bg-white` and `bg-warm-white` between sections
- **Footer** — `bg-warm-900` (#0E0E0C), warm near-black
- Border radius: 4px maximum
- Font weight: 600 maximum, headlines at 400
- Bullets: dashes (—), never dots or icons
- No emojis, ever
- No decorative gradients
- Icons: minimal, SVG line style only
- Green accent (`green-muted: #5BBFA0`) for positive indicators in light sections
- Red accent (`red-alert: #C85A54`) for negative data, urgency
- Sections separated by `border-t border-warm-100`

## File Conventions

- Pages: `src/app/[route]/page.tsx`
- Homepage sections: `src/components/sections/[Name].tsx`
- Layout components: `src/components/layout/[Name].tsx`
- Reusable UI: `src/components/ui/[Name].tsx`
- Content data: `src/lib/content/`
- Design tokens: `src/app/globals.css` (@theme block)

## SEO Rules (apply to every page)

- Every page must have unique `title` (<60 chars) and `description` (<160 chars)
- Every page must have `openGraph` metadata (title, description, type)
- Include JSON-LD structured data appropriate to page type
- Internal links must be contextual (within text), not generic lists ("Related: X, Y, Z")
- Blog posts link to pillar pages, never directly to /demo
- Pillar pages (/product, /how-it-works, /security) link to /demo
- Every page includes breadcrumbs (when not homepage)
- First mention of a key concept links to its glossary page
- Comparisons (/vs/*) link to each other in a "Other comparisons" footer section
- See `SEO-STRATEGY.md` for full cluster map and keyword targets

## Copywriting Rules

- Language: English only (i18n planned for later)
- Tone: authoritative, precise, editorial — not startup-casual, not corporate-boring
- Never use superlatives without data ("the best" → "captures 100%")
- Pain before solution — state the problem before presenting the answer
- Use specific numbers: "13%", "87%", "60+ rules" — not "most", "many", "several"
- CTA text should be action-specific: "Book a Demo", "Calculate Your Data Loss", "See Full Comparison" — not "Learn More" or "Click Here"
- Avoid jargon without explanation on educational pages
- Be honest about competitors — "GA4 works well when..." not "GA4 is terrible"

## Reference Documents

- `PRD.md` — Full product spec, page requirements, phases
- `SEO-STRATEGY.md` — Topic clusters, interlinking map, keyword targets, LLM discoverability
- `mockups/estrategia-diseno.html` — Original design strategy
- `mockups/informe-competidores.html` — 23 competitor analysis
