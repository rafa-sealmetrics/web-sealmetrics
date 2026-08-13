# Signal migration report

Status: visually approved for release, not deployed.

## Executive result

- Indexable canonical URLs in the sitemap: **237**.
- URLs carrying the Signal v4 design marker: **237 / 237**.
- URLs with exactly one H1: **237 / 237**.
- URLs using the restored repository brand asset: **237 / 237**.
- URLs containing the rejected generated wordmark: **0**.
- Native route-specific Signal page files: **15**.
- Existing structured React routes adapted by the shared Signal system: **222**.
- Mandatory design-coverage gaps: **0**.
- Production deployments made by this work: **0**.

The shared adaptation does not replace page content with a universal template. Existing tables remain tables, forms retain their client logic, calculators remain interactive, articles retain their individual React markup and schemas, and comparison pages retain their per-competitor data.

## Native Signal routes

### English

- `/`
- `/product/`
- `/how-it-works/`
- `/pricing/`
- `/security/`
- `/case-studies/`
- `/case-studies/palladium-hotel-group/`
- `/case-studies/dreamplace-hotels/`

### Spanish

- `/es/product/`
- `/es/how-it-works/`
- `/es/pricing/`
- `/es/security/`
- `/es/case-studies/`
- `/es/case-studies/palladium-hotel-group/`
- `/es/case-studies/dreamplace-hotels/`

## Coverage by sitemap family

These counts include both native and shared Signal-adapted routes.

| Family | URLs with new design |
| --- | ---: |
| Home | 2 |
| Blog | 77 |
| Glossary | 42 |
| Audience and industry | 24 |
| Comparisons and alternatives | 15 |
| Case studies | 6 |
| Platforms and integrations | 6 |
| GDPR, legal, trust and security | 14 |
| Conversion and calculators | 11 |
| Other commercial and editorial routes | 40 |
| **Total** | **237** |

## What changed across the shared system

- Restored the previous SealMetrics logo asset in the header, footer and homepage brand moment.
- Paper `#F4F1E8`, paper-white `#FFFDF7`, ink `#111412` and acid `#CBFF3D` applied as the shared palette.
- Square geometry enforced across the content surface.
- Rounded cards, pills and blurred utility shadows retired by the compatibility layer.
- Existing headline emphasis converted from italic/amber highlighting to outlined Signal treatment.
- Existing brand-attention CTAs moved to acid with ink text and hard-offset hover depth.
- Eyebrows use the ink-and-acid mono treatment.
- Tables keep semantic markup and use the shared hairline system.
- Pull quotes retain the blue semantic border.
- Existing structured page content and interaction code remain unchanged unless the route received a native Signal component.

## Validation completed

- Production-style static build: **265 routes generated**.
- Indexable routes, sitemap entries and Markdown twins: **237 / 237 / 237**.
- Repository, tracking and forms-proxy tests: **70 / 70 passed**.
- SEO, metadata, structured data, Markdown, knowledge, llms.txt and CSP audits: **0 violations**.
- Signal design build gate verifies every sitemap route for the v4 marker, one H1, restored repository brand and square-geometry layer.
- First-party forms, tracking and calculators were not replaced or redirected to browser-visible n8n endpoints.
- Every public lead flow is now covered by an automated gate requiring the first-party relay and a Turnstile token.
- The deployed forms relay passed its health check, accepted CORS from `https://sealmetrics.com`, and rejected a valid-looking lead without Turnstile before any n8n forwarding.
- The SealMetrics tracker is present at runtime as `https://pixel-pre.sealmetrics.com/t.js?id=sealmetrics2`, with no browser console errors in the representative page check. Exported trailing-slash URLs are classified correctly in EN and ES (`product`, `pricing`, `case-studies`) instead of falling back to `other`.

## Pending before deployment

There are no missing URLs in the design coverage. Stakeholder visual review was approved on 2026-08-13. The remaining runtime validation is one real hosted submission for each of the six form types after release, so Turnstile, the relay, n8n and mailbox delivery are verified together. Production remains unchanged until explicit merge authorization.
