# Signal v4 migration map

This file is the operational record for porting the current website to the Signal design system. A route is complete only when its content remains structured as real React components, its English and Spanish versions have been reviewed together, and the full static build passes.

## Definition of done

- Signal v4 visual language: paper, ink, acid, square geometry and hard shadows.
- No scraped or flattened page content; tables, reports, forms and interactive elements keep their semantic structure.
- Exactly one H1, correct heading order and visible breadcrumbs outside the homepage.
- Complete page metadata, Twitter metadata, canonical/hreflang and appropriate JSON-LD.
- Contextual internal links follow `SEO-STRATEGY.md`.
- Desktop and mobile review with no horizontal overflow or console errors.
- `npm run build` passes every post-build audit.

## Route status

| Block | English | Spanish | Status | Notes |
| --- | --- | --- | --- | --- |
| Global shell | Shared | Shared | Complete | Signal header/footer and common layout are in place. |
| Forms security | Shared | Shared | Complete | First-party proxy, Turnstile and tracking protections are on `main`. |
| Homepage | `/` | `/es/` | Partial | English Signal work exists; Spanish parity is still pending. |
| Product | `/product/` | `/es/product/` | Complete in PR | Real bilingual React component, Signal styling, metadata and schemas validated. |
| How it works | `/how-it-works/` | `/es/how-it-works/` | Complete in PR | Signal path, semantic data-contract table, implementation sequence and visible FAQ. |
| Pricing | `/pricing/` | `/es/pricing/` | Complete in PR | Interactive billing, four plan cards, traffic table, semantic comparison table, overage policy and visible FAQ. |
| Security | `/security/` | `/es/security/` | Complete in PR | Data boundary, controls and retention remain inspectable; Dublin-only and no unearned certifications. |
| Comparison pages | `/vs/*` | `/es/vs/*` | Pending | Port by page type and retain comparison interlinking. |
| Hotel case studies | Palladium + Dreamplace | Palladium + Dreamplace | Complete in PR | Named clients, approved quotes and published figures preserved in a bilingual Signal family. |
| Remaining case studies | Index + European hotel group | Spanish counterparts | Pending | Complete the index family and review the legacy anonymised route. |
| Solution/platform pages | Multiple | Multiple | Pending | Port reusable page families without flattening content. |
| Editorial content | Blog and glossary | Blog and glossary | Pending | Preserve Article/DefinedTerm schemas and content hierarchy. |
| Conversion routes | Demo, audit, calculators | Spanish counterparts | Pending visually | Working form logic must be reused unchanged. |

## Recommended sequence

1. Product — complete in the redesign PR.
2. How it works — complete in the redesign PR.
3. Pricing — complete in the redesign PR.
4. Security — complete in the redesign PR.
5. Case studies and comparisons.
6. Remaining commercial page families.
7. Blog and glossary templates, followed by route-level content review.
8. Final route inventory, asset audit, link crawl and production cutover rehearsal.
