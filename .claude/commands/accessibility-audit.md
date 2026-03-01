# Accessibility Audit

Audit the site for WCAG 2.1 AA compliance.

## Steps

1. **Read all page and component files:**
   - `src/app/*/page.tsx`
   - `src/components/sections/*.tsx`
   - `src/components/layout/*.tsx`
   - `src/app/layout.tsx`
   - `src/app/globals.css`

2. **Check each file for:**

### Document structure
- [ ] `<html>` has `lang="en"` attribute (in layout.tsx)
- [ ] Every page has exactly 1 `<h1>`
- [ ] Heading hierarchy is sequential (no h1 → h3 skipping h2)
- [ ] Landmark regions used: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`
- [ ] `<section>` elements have `aria-label` or `aria-labelledby`

### Images
- [ ] All `<Image>` / `<img>` have meaningful `alt` text
- [ ] Decorative images have `alt=""`
- [ ] SVG icons have `aria-hidden="true"` or `role="img"` with title
- [ ] Client logos have company name as alt text

### Interactive elements
- [ ] All links have descriptive text (not "click here")
- [ ] All buttons have accessible names
- [ ] Form inputs have associated `<label>` elements
- [ ] Focus states are visible (outline or ring on `:focus-visible`)
- [ ] Tab order follows visual layout
- [ ] Skip-to-content link exists

### Color and contrast
- [ ] Text on `bg-white`: primary (#1A1A1A) = 14.5:1 ✅
- [ ] Text on `bg-warm-white` (#FAFAF7): body (#3D3D3D) — verify ≥4.5:1
- [ ] Text on `bg-warm-900` (#0E0E0C): warm-300 (#A3A396) — verify ≥4.5:1
- [ ] Green accent (#5BBFA0) on white — verify ≥4.5:1 for text use
- [ ] Red accent (#C85A54) on white — verify ≥4.5:1 for text use
- [ ] Links are distinguishable from surrounding text (not just by color)

### Motion and media
- [ ] No auto-playing media
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No content that flashes more than 3 times per second

### Forms (demo page)
- [ ] All inputs have visible labels
- [ ] Required fields are indicated (not just by color)
- [ ] Error messages are associated with inputs via `aria-describedby`
- [ ] Form has descriptive submit button text

## Output

### Summary
| Category | Issues | Pass rate |
|----------|--------|-----------|
| Structure | X | X% |
| Images | X | X% |
| Interactive | X | X% |
| Color/Contrast | X | X% |
| Forms | X | X% |

### Issues found (ordered by severity)
| Severity | File | Line | Issue | WCAG criterion | Fix |
|----------|------|------|-------|---------------|-----|
| Critical | ... | ... | ... | 1.1.1 | ... |

### Contrast calculations
| Combination | Ratio | Required | Pass? |
|-------------|-------|----------|-------|
| #1A1A1A on #FFFFFF | 14.5:1 | 4.5:1 | ✅ |

### Score
- Total checks: X
- Passed: X
- Failed: X
- WCAG 2.1 AA compliance: X%

## Input
$ARGUMENTS — Optional: specific component or page to audit. If empty, audit entire site.
