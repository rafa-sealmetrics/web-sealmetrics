# PRD — SealMetrics Marketing Website

**Versión:** 1.1
**Fecha:** 28 febrero 2026
**Estado:** En desarrollo

**Documentos relacionados:**
- `CLAUDE.md` — Reglas operativas del proyecto (design system, convenciones, SEO rules)
- `SEO-STRATEGY.md` — Topic clusters, interlinking, keyword map, LLM discoverability

---

## 1. Visión del producto

Crear la web de marketing de SealMetrics que posicione la plataforma como la alternativa seria a Google Analytics 4 para empresas europeas con facturación superior a 10M€. La web debe **educar antes de vender** — explicar el problema de la pérdida de datos antes de presentar la solución.

### Audiencia primaria

| Rol | Qué busca | Qué necesita para decidir |
|-----|-----------|---------------------------|
| **CMO / Head of Marketing** | Datos completos para atribuir revenue | Comparativa con GA4, ROI claro, casos reales |
| **Ecommerce Manager** | Visibilidad completa del funnel | Demo con sus propios datos, métricas de conversión |
| **CTO / VP Engineering** | Cumplimiento técnico, integración simple | Documentación técnica, seguridad, arquitectura |
| **DPO / Legal** | Compliance sin configuración | Detalle GDPR, ePrivacy, residencia de datos EU |

### Posicionamiento

> SealMetrics no compite en "analytics bonito" ni en "analytics barato". Compite en **datos completos** — el único analytics que captura el 100% del tráfico sin cookies, sin banners de consentimiento y sin comprometer la privacidad.

---

## 2. Principios de diseño

### Enfoque visual: light mode uniforme

La web utiliza un tono claro uniforme en todas las páginas, alternando entre `bg-white` y `bg-warm-white` para crear separación visual entre secciones sin rupturas de contexto.

- **Todas las secciones** → Fondo light (white o warm-white)
- **Separación** → Bordes `border-warm-100` entre secciones alternas
- **Footer** → Casi negro cálido (`warm-900: #0E0E0C`) que cierra la página con peso visual
- **Sin transiciones dark/light** → No se usan gradientes de transición

### Sistema visual

| Elemento | Decisión | Razón |
|----------|----------|-------|
| Tipografía headlines | Source Serif 4, weight 400 | Autoridad editorial, no corporativo genérico |
| Tipografía body | Inter, weight 400 | Legibilidad, neutralidad |
| Tipografía datos | JetBrains Mono | Precision, credibilidad numérica |
| Border radius | 4px máximo | Seriedad sin frialdad |
| Font weight máximo | 600 | Elegancia, evita estética startup |
| Bullets | Dashes (—) | Editorial, no listas técnicas |
| Emojis | Nunca | Profesionalismo |
| Gradientes decorativos | Nunca | Limpieza |
| Iconos | Mínimos, SVG lineales | No distraer del mensaje |

### Paleta

```
Light:
  white:        #FFFFFF
  warm-white:   #FAFAF7
  warm-50:      #F5F5F0
  warm-100:     #EBEBDF
  warm-200:     #D4D4C8
  warm-300:     #A3A396
  warm-400:     #78786C

Footer (warm dark):
  warm-800:     #1A1A16
  warm-900:     #0E0E0C

Text:
  primary:      #1A1A1A
  body:         #3D3D3D
  secondary:    #6B6B5E
  tertiary:     #9B9B8E

Accent:
  green-muted:  #5BBFA0   (indicadores positivos)
  red-alert:    #C85A54   (datos negativos, urgencia)
```

> **Nota:** Los tokens dark-bg, dark-card, dark-border, dark-text y green (#00FF7F) se mantienen en el CSS para las subpáginas que aún usan secciones dark (product, security, vs-ga4, etc.), pero la homepage es 100% light.

---

## 3. Stack técnico

| Componente | Tecnología | Versión |
|------------|------------|---------|
| Framework | Next.js (App Router) | 16.x |
| UI | React | 19.x |
| Styling | Tailwind CSS (v4, @theme) | 4.x |
| Language | TypeScript (strict) | 5.x |
| Fonts | next/font/google | — |
| Export | Static (output: "export") | — |
| PostCSS | @tailwindcss/postcss | 4.x |

### Estructura de directorio

```
src/
├── app/
│   ├── globals.css              ← Design system tokens
│   ├── layout.tsx               ← Root layout (fonts, Header, Footer)
│   ├── page.tsx                 ← Homepage
│   ├── product/page.tsx
│   ├── pricing/page.tsx
│   ├── demo/page.tsx
│   ├── security/page.tsx
│   ├── how-it-works/page.tsx
│   ├── vs-ga4/page.tsx
│   ├── vs/[competitor]/page.tsx ← NUEVO
│   ├── customers/page.tsx       ← NUEVO
│   ├── customers/[slug]/page.tsx← NUEVO
│   ├── for/cmo/page.tsx         ← NUEVO
│   ├── for/cto/page.tsx         ← NUEVO
│   ├── for/dpo/page.tsx         ← NUEVO
│   ├── about/page.tsx           ← NUEVO
│   ├── integrations/page.tsx    ← NUEVO
│   ├── blog/page.tsx            ← NUEVO
│   ├── blog/[slug]/page.tsx     ← NUEVO
│   ├── glossary/page.tsx        ← NUEVO
│   ├── data-loss-calculator/page.tsx ← NUEVO
│   ├── changelog/page.tsx       ← NUEVO
│   └── legal/
│       ├── privacy/page.tsx     ← NUEVO
│       ├── terms/page.tsx       ← NUEVO
│       └── dpa/page.tsx         ← NUEVO
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/                ← Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Logos.tsx
│   │   ├── Problem.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── Comparison.tsx
│   │   ├── CaseStudy.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Compliance.tsx
│   │   ├── Integrations.tsx
│   │   ├── Pricing.tsx
│   │   └── CtaFinal.tsx
│   └── ui/                      ← NUEVO: componentes reutilizables
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionHeader.tsx
│       └── ComparisonTable.tsx
└── lib/                          ← NUEVO
    ├── content/                  ← Datos de contenido (competitors, glossary, etc.)
    └── utils.ts
```

---

## 4. Arquitectura de información

### Navegación principal (header)

```
Product       Solutions ▾         Customers     Pricing     Resources ▾      [Book a Demo]
              ├── For CMOs                                   ├── Blog
              ├── For CTOs                                   ├── How It Works
              ├── For DPOs                                   ├── vs GA4
              └── Data Loss                                  ├── Glossary
                  Calculator                                 └── Changelog
```

### Jerarquía de páginas por función

```
TIER 1 — Conversión directa (mayor prioridad)
├── /                         Homepage: narrativa completa en 4 actos
├── /demo                     Formulario de solicitud de demo
└── /pricing                  Planes, FAQs, CTA

TIER 2 — Educación (el CMO necesita entender)
├── /product                  Qué hace SealMetrics (deep dive)
├── /how-it-works             Cómo funciona técnicamente
├── /vs-ga4                   Comparación directa con GA4
└── /vs/[competitor]          Comparaciones individuales (SEO alto intent)

TIER 3 — Prueba social (el CMO necesita validar)
├── /customers                Índice de casos + logos
└── /customers/[slug]         Caso de éxito individual

TIER 4 — Justificación interna (el CMO necesita convencer a otros)
├── /security                 Para el CTO/DPO: seguridad e infraestructura
├── /for/cmo                  Landing específica para CMOs
├── /for/cto                  Landing técnica para CTOs
└── /for/dpo                  Landing compliance para DPOs

TIER 5 — Captura orgánica SEO
├── /blog                     Artículos educativos
├── /blog/[slug]              Artículo individual
├── /glossary                 Términos del sector (cookieless, first-party, etc.)
└── /data-loss-calculator     Herramienta interactiva

TIER 6 — Institucional
├── /about                    Equipo, misión, historia
├── /integrations             Todas las integraciones
├── /changelog                Actualizaciones del producto
└── /legal/*                  Privacy Policy, Terms, DPA
```

---

## 5. Especificación por página

### 5.1 Homepage `/`

**Estado:** ✅ Construida
**Objetivo:** Convertir visitantes fríos en solicitudes de demo
**Estructura narrativa:**

| Acto | Sección | Fondo | Objetivo psicológico |
|------|---------|-------|---------------------|
| 1. Conectar | Hero | white | Pain-first: "tu data está incompleta" |
| 1. Conectar | Logos | white | Credibilidad inmediata |
| 2. Educar | Problem | warm-white | Cuantificar el problema (87%, barras) |
| 2. Educar | HowItWorks | white | Explicar la solución en 3 pasos |
| 3. Demostrar | ProductShowcase | warm-white | Dashboard, data capture, revenue, LENS AI |
| 3. Demostrar | Comparison | white | SM vs GA4 tabla directa |
| 4. Convencer | CaseStudy | warm-white | Resultados reales con métricas |
| 4. Convencer | Testimonials | white | Voces de CMOs similares |
| 4. Convencer | Compliance | warm-white | GDPR, ePrivacy, EU residency |
| 4. Convencer | Integrations | warm-white | Ecosistema técnico |
| 4. Convencer | Pricing | white | Transparencia de precios |
| 5. Cerrar | CtaFinal | white | "See what you've been missing" |

> Todas las secciones son light. Se alterna white / warm-white para ritmo visual.

### 5.2 Product `/product`

**Estado:** ✅ Construida
**Objetivo:** Deep-dive en funcionalidades para visitors que necesitan más detalle
**Secciones:**
- Hero dark con CTA dual
- Data Capture: tabla de escenarios (Standard, Consent declined, Safari ITP, Ad blocker, Firefox ETP, Incognito)
- Revenue Attribution: comparación de revenue por canal SM vs GA4
- LENS AI: feed de anomalías en tiempo real con severity y timestamps
- Reports: 9 reportes en grid (light section)
- CTA final dark

### 5.3 Pricing `/pricing`

**Estado:** ✅ Construida
**Objetivo:** Transparencia + conversión a demo
**Planes:**
- Growth: €390/mes (hasta 500K pageviews)
- Business: €790/mes (hasta 2M pageviews) — destacado
- Enterprise: Custom (ilimitado)
**Secciones:** Hero + Plans grid + 6 FAQs + CTA dark

### 5.4 How It Works `/how-it-works`

**Estado:** ✅ Construida
**Objetivo:** Explicar la mecánica sin jerga
**Secciones:**
- Hero light
- Funnel de pérdida de datos: barras progresivas 70K → 10K (GA4) vs 70K (SM)
- 3 pasos detallados: First-party collection, Full-resolution processing, Actionable intelligence
- CTA dark

### 5.5 vs GA4 `/vs-ga4`

**Estado:** ✅ Construida
**Objetivo:** Capturar búsquedas comparativas, convertir evaluadores
**Secciones:**
- Hero con cards 13% vs 100%
- Tabla comparativa: 17 filas, 4 categorías (Data, Intelligence, Privacy, Other)
- "When to use each" — honesto, no ataque
- CTA dark

### 5.6 Security `/security`

**Estado:** ✅ Construida
**Objetivo:** Satisfacer al CTO/DPO que valida internamente
**Secciones:**
- Hero light
- 4 principios core (no PII, no cookies, EU-only, data minimization)
- Regulatory compliance: GDPR, ePrivacy, CCPA/CPRA, UK GDPR
- Infrastructure security (dark): encryption, isolation, access controls, uptime
- CTA light

### 5.7 Demo `/demo`

**Estado:** ✅ Construida
**Objetivo:** Capturar leads cualificados
**Layout:** 2 columnas — info + formulario
**Campos:** Full name, Work email, Company, Website URL, Monthly pageviews (select), Notes
**Elementos de confianza:** 3 value props + testimonial

---

### 5.8 Customers `/customers` — NUEVO

**Estado:** 🔲 Por construir
**Objetivo:** Prueba social concentrada + entry point a casos individuales
**Secciones:**
- Hero light: "Companies that see the full picture"
- Grid de logos (12-16) con enlace a caso individual si existe
- 2-3 casos destacados (featured) con métricas clave en cards
- Cifra agregada: "€X.XM in recovered attribution across X clients"
- CTA: "Join them — Book a Demo"

**Contenido necesario:**
- Logos de clientes reales (Mango, MediaMarkt, Promofarma, Tous, Masaltos, Tendam + más)
- 2-3 casos con datos reales: antes/después de métricas
- Testimonials reales con nombre, cargo, empresa

### 5.9 Customer Case `/customers/[slug]` — NUEVO

**Estado:** 🔲 Por construir
**Objetivo:** Caso de éxito detallado para justificación interna
**Estructura:**
- Header: logo empresa + sector + tamaño
- The challenge (light): qué problema tenían
- The solution: cómo implementaron SM
- The results: 4-6 métricas antes/después con gráficos
- Quote del stakeholder
- "Related stories" al final
- CTA: "Get similar results"

**Formato de datos:**

```typescript
interface CaseStudy {
  slug: string;
  company: string;
  logo: string;
  sector: string;
  size: string;              // "25M€ revenue" | "60M€ revenue"
  challenge: string;
  solution: string;
  results: {
    metric: string;
    before: string;
    after: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}
```

### 5.10 Comparison Pages `/vs/[competitor]` — NUEVO

**Estado:** 🔲 Por construir
**Objetivo:** Capturar búsquedas "sealmetrics vs X" (alto intent de compra)
**Páginas a crear:**
1. `/vs/matomo` — open source, self-hosted
2. `/vs/plausible` — lightweight, privacy
3. `/vs/amplitude` — product analytics
4. `/vs/piwik-pro` — enterprise privacy
5. `/vs/snowplow` — data pipeline
6. `/vs/adobe-analytics` — enterprise legacy

**Estructura por página:**
- Hero: "SealMetrics vs [Competitor]"
- Tabla de comparación (8-12 filas relevantes)
- Sección "Where [competitor] works well" (honesto)
- Sección "Where SealMetrics is different" (datos)
- CTA

**Formato de datos:**

```typescript
interface CompetitorComparison {
  slug: string;
  name: string;
  tagline: string;       // "Open-source analytics" etc.
  rows: {
    feature: string;
    sm: string;
    competitor: string;
    category: string;
  }[];
  competitorStrengths: string[];
  smDifferences: string[];
}
```

### 5.11 Landing por rol `/for/[role]` — NUEVO

**Estado:** 🔲 Por construir
**Objetivo:** El CMO puede enviar un link al CTO o DPO que habla su idioma

**`/for/cmo` — "For Marketing Leaders"**
- Pain: "You're making budget decisions on 13% of data"
- Proof: Revenue attribution comparison, ROAS accuracy
- Value: "See every touchpoint, attribute every euro"
- Social proof: CMO testimonials
- CTA: Book a Demo

**`/for/cto` — "For Technical Leaders"**
- Pain: "Your analytics infrastructure is a compliance risk"
- Proof: Architecture diagram, 1.2KB script, first-party, no PII
- Value: "One script tag. Full compliance. Zero maintenance"
- Technical details: API docs preview, integrations, security specs
- CTA: Request Technical Overview

**`/for/dpo` — "For Data Protection Officers"**
- Pain: "GA4 requires consent, DPA, SCCs, and ongoing monitoring"
- Proof: Regulatory mapping (GDPR, ePrivacy, CCPA)
- Value: "Compliant by architecture — not configuration"
- Legal specifics: What data is collected (exactly), what is NOT
- CTA: Download Compliance Summary (PDF)

### 5.12 Data Loss Calculator `/data-loss-calculator` — NUEVO

**Estado:** 🔲 Por construir
**Objetivo:** Herramienta interactiva viral que genera demos
**Tipo de componente:** Client component con estado local

**Inputs:**
1. Monthly visitors (slider: 10K — 10M+)
2. EU traffic percentage (slider: 0% — 100%)
3. Consent acceptance rate (slider: 0% — 100%)
4. Average order value (input: €)
5. Conversion rate (input: %)

**Outputs (calculados en tiempo real):**
- Visitors invisible to GA4 (number + percentage)
- Estimated missed conversions
- Estimated missed revenue per month
- Estimated missed revenue per year
- "With SealMetrics, you would see all [X] visitors"

**Diseño:**
- Layout 2 columnas: inputs (izquierda) + resultados en vivo (derecha, card warm-white)
- Los números en rojo (GA4) vs verde (SealMetrics)
- CTA: "See your real numbers — Book a Demo"
- Botón compartir: genera URL con parámetros

### 5.13 Blog `/blog` — NUEVO

**Estado:** 🔲 Por construir
**Objetivo:** SEO + educación + nurturing
**Contenido gestionado:** MDX files en `/src/content/blog/`

**Artículos iniciales (10):**
1. "Why GA4 shows 13% of your EU traffic"
2. "What is cookieless analytics? A complete guide"
3. "GDPR and analytics: what actually requires consent"
4. "How ad blockers affect your analytics data"
5. "First-party vs third-party data collection explained"
6. "Revenue attribution with incomplete data: the hidden cost"
7. "Safari ITP, Firefox ETP, and the death of cookie tracking"
8. "How to audit your analytics data loss"
9. "Server-side analytics vs client-side: pros and cons"
10. "The real cost of free analytics"

**Estructura de listing:**
- Grid de cards (2 columnas)
- Tag por categoría
- Fecha + tiempo de lectura
- No paginación inicial (scroll completo)

**Estructura de artículo:**
- Hero: título, fecha, autor, tiempo de lectura
- Table of contents (lateral sticky en desktop)
- MDX content con componentes custom (Callout, ComparisonTable, StatCard)
- Related articles (3)
- CTA inline: "Calculate your data loss"

### 5.14 Glossary `/glossary` — NUEVO

**Estado:** 🔲 Por construir
**Objetivo:** SEO long-tail + educación
**Contenido:** MDX files en `/src/content/glossary/`

**Términos iniciales (20):**
Cookieless analytics, First-party data, Third-party cookies, Server-side tracking, Consent Management Platform (CMP), GDPR Article 6, ePrivacy Directive, Data sampling, Attribution modeling, Multi-touch attribution, Ad blocker, Safari ITP, Firefox ETP, Data residency, PII (Personally Identifiable Information), Data minimization, Privacy by design, Session stitching, Conversion rate optimization, ROAS

**Estructura:**
- Índice alfabético con anchor links
- Cada término: definición (2-3 párrafos) + "Why it matters for analytics" + link a contenido relacionado
- Sidebar: "Related terms"

### 5.15 About `/about` — NUEVO

**Estado:** 🔲 Por construir
**Objetivo:** Credibilidad institucional
**Secciones:**
- Mission statement: "We believe marketing decisions should be based on complete data"
- Story: fundación, problema que detectaron, evolución
- Team (key members con foto + bio breve)
- Numbers: clientes, países, sessions procesadas
- "Based in the EU" — refuerzo de data residency
- CTA: "Join our mission" o "Work with us"

### 5.16 Integrations `/integrations` — NUEVO

**Estado:** ✅ Parcial (existe en homepage)
**Objetivo:** Lista completa de integraciones + categorización
**Secciones:**
- Hero: "Works with your existing stack"
- Categorías: Advertising (Google Ads, Meta, TikTok), Ecommerce (Shopify, WooCommerce, PrestaShop, Magento), CRM (HubSpot, Salesforce), Data (BigQuery, Snowflake, Looker), Marketing automation (Klaviyo, Mailchimp)
- Cada integración: logo + nombre + descripción 1 línea + estado (Available / Coming soon)
- CTA: "Need a custom integration?"

### 5.17 Changelog `/changelog` — NUEVO

**Estado:** 🔲 Por construir
**Objetivo:** Demostrar que el producto evoluciona activamente
**Formato:** Timeline vertical con entries
**Cada entry:** fecha + título + categoría tag (New, Improved, Fixed) + descripción
**Fuente de datos:** MDX files en `/src/content/changelog/`

### 5.18 Legal `/legal/*` — NUEVO

**Estado:** 🔲 Por construir
**Páginas:**
- `/legal/privacy` — Privacy Policy
- `/legal/terms` — Terms of Service
- `/legal/dpa` — Data Processing Agreement
**Formato:** Texto largo, estructura de headings, sin decoración

---

## 6. Componentes reutilizables a crear

| Componente | Uso | Props |
|------------|-----|-------|
| `Button` | CTAs en todo el sitio | variant (primary/secondary/ghost), href, size |
| `SectionHeader` | Cabecera de sección con label + título + descripción | label, title, description |
| `ComparisonTable` | Tablas SM vs X | rows, smLabel, competitorLabel |
| `StatCard` | Métricas destacadas | number, label, color, prefix/suffix |
| `FeatureList` | Listas con dashes | items |
| `TestimonialCard` | Testimonios | quote, author, role, company |
| `CaseStudyCard` | Preview de caso | company, metrics, link |
| `BlogCard` | Preview de artículo | title, date, readTime, tag, slug |
| `Calculator` | Data loss calculator | (client component con estado) |
| `MDXComponents` | Componentes para MDX | Callout, Table, StatCard, Image |

---

## 7. SEO y metadata

### Metadata por página

Cada página debe tener:
- `title` único (< 60 chars)
- `description` única (< 160 chars)
- `openGraph` con title, description, type
- `canonical` URL

### Páginas de alto valor SEO

| Página | Keyword target | Search intent |
|--------|---------------|---------------|
| `/vs-ga4` | "sealmetrics vs google analytics" | Comparativo |
| `/vs/matomo` | "sealmetrics vs matomo" | Comparativo |
| `/vs/plausible` | "sealmetrics vs plausible" | Comparativo |
| `/how-it-works` | "cookieless analytics how it works" | Educacional |
| `/glossary` (terms) | "what is cookieless analytics" etc. | Educacional |
| `/blog` (articles) | "ga4 data loss", "gdpr analytics" etc. | Educacional |
| `/data-loss-calculator` | "analytics data loss calculator" | Herramienta |

### Structured data (JSON-LD)

- Homepage: `Organization` + `WebSite`
- Product: `SoftwareApplication`
- Pricing: `Product` con `Offer` por plan
- Blog posts: `Article` con `author`, `datePublished`
- FAQ (pricing): `FAQPage`
- Glossary: `DefinedTermSet`

---

## 8. Performance

### Objetivos

| Métrica | Target |
|---------|--------|
| LCP | < 1.5s |
| FID | < 50ms |
| CLS | < 0.05 |
| Lighthouse Performance | > 95 |
| Lighthouse Accessibility | > 95 |
| Bundle size (JS) | < 80KB first load |

### Estrategia

- Static export (pre-rendered HTML)
- Fonts via next/font (no layout shift)
- Imágenes: next/image con WebP/AVIF + lazy loading
- Componentes client solo donde es necesario (Header toggle, Calculator)
- No JavaScript frameworks adicionales (no Framer Motion, no animation libraries)
- CSS-only animations donde sean necesarias (transitions, hover states)

---

## 9. Fases de implementación

### Fase 1 — Core (✅ Completada)

Todo lo que necesitas para lanzar con una landing page funcional.

| Página | Estado |
|--------|--------|
| Homepage (/) | ✅ |
| Product (/product) | ✅ |
| Pricing (/pricing) | ✅ |
| How It Works (/how-it-works) | ✅ |
| vs GA4 (/vs-ga4) | ✅ |
| Security (/security) | ✅ |
| Demo (/demo) | ✅ |
| Header + Footer | ✅ |
| Design system (globals.css) | ✅ |

**Archivos:** 22 ficheros .tsx, 1 .css, configs

### Fase 2 — Conversión (siguiente prioridad)

Las páginas que más impacto tienen en tasa de conversión.

| Página | Prioridad | Impacto esperado |
|--------|-----------|-----------------|
| `/customers` + 3 casos | Alta | Social proof = confianza |
| `/data-loss-calculator` | Alta | Viral + generador de demos |
| `/vs/matomo` | Alta | SEO alto intent |
| `/vs/plausible` | Alta | SEO alto intent |
| `/vs/amplitude` | Media | SEO alto intent |
| Header con dropdowns (Solutions, Resources) | Alta | Navegación mejorada |
| Componentes UI reutilizables | Alta | Velocidad de desarrollo |

**Dependencias:**
- Casos de clientes requieren datos reales (contenido)
- Calculator requiere client component con React state
- Comparisons requieren investigación de cada competidor

**Estimación de complejidad:** Media — ~15 ficheros nuevos

### Fase 3 — Justificación interna

Páginas que el CMO usa para convencer a otros stakeholders internos.

| Página | Prioridad | Impacto esperado |
|--------|-----------|-----------------|
| `/for/cmo` | Alta | Landing específica |
| `/for/cto` | Alta | Convierte al technical buyer |
| `/for/dpo` | Media | Elimina objeción legal |
| `/about` | Media | Credibilidad institucional |
| `/integrations` (completa) | Media | Reducir fricción técnica |

**Dependencias:**
- Landings por rol requieren messaging específico por perfil
- About requiere contenido de equipo

**Estimación de complejidad:** Media — ~8 ficheros nuevos

### Fase 4 — Contenido orgánico (SEO)

Sistema de contenido para captura orgánica de tráfico.

| Página | Prioridad | Impacto esperado |
|--------|-----------|-----------------|
| `/blog` + MDX setup | Alta | SEO educacional |
| 10 artículos iniciales | Alta | Tráfico orgánico |
| `/glossary` + 20 términos | Media | SEO long-tail |
| `/changelog` | Baja | Señal de producto activo |

**Dependencias:**
- Blog requiere setup de MDX (next-mdx-remote o @next/mdx)
- Artículos requieren redacción de contenido
- Glossary requiere definiciones precisas

**Estimación de complejidad:** Alta — MDX pipeline + ~30 ficheros de contenido

### Fase 5 — Legal + polish

| Página | Prioridad |
|--------|-----------|
| `/legal/privacy` | Alta (necesario para launch) |
| `/legal/terms` | Alta (necesario para launch) |
| `/legal/dpa` | Media |
| Responsive audit completo | Alta |
| Accessibility audit (WCAG 2.1 AA) | Alta |
| JSON-LD structured data | Media |
| Sitemap.xml + robots.txt | Alta |
| 404 page | Media |
| OG images por página | Media |

---

## 10. Métricas de éxito

### KPIs de la web

| Métrica | Target | Cómo medir |
|---------|--------|-----------|
| Demo requests / mes | >50 | Form submissions |
| Bounce rate homepage | <40% | SM analytics |
| Scroll depth homepage | >70% reach pricing | SM analytics |
| Pages per session | >2.5 | SM analytics |
| Time on site | >3 min | SM analytics |
| Calculator completions | >200/mes | Event tracking |
| Blog traffic | >5K sessions/mes (M6) | SM analytics |

### KPIs de conversión por página

| Página | Conversión esperada |
|--------|-------------------|
| Homepage → Demo | 2-4% |
| Pricing → Demo | 8-12% |
| vs-ga4 → Demo | 5-8% |
| Calculator → Demo | 10-15% |
| Customer case → Demo | 6-10% |

---

## 11. Decisiones pendientes

| Decisión | Opciones | Quién decide | Cuándo |
|----------|----------|-------------|--------|
| CMS para blog | MDX local vs Headless CMS (Ghost, Sanity) | Producto | Antes de Fase 4 |
| Form handling | API route vs tercero (Formspree, HubSpot) | Desarrollo | Antes de launch |
| Analytics propio | Instalar SM en la propia web | Producto | Launch |
| Imágenes/screenshots | Reales del producto vs mockups estáticos | Diseño | Antes de Fase 2 |
| Contenido de casos | Datos reales vs anonimizados | Legal/Marketing | Antes de Fase 2 |
| i18n (español) | next-intl vs subdominio | Desarrollo | Post Fase 4 |
| Hosting | Vercel vs Cloudflare Pages vs self-hosted EU | Ingeniería | Antes de launch |

---

## 12. Resumen de estado actual

```
22 componentes .tsx construidos
7 páginas funcionales
1 design system completo
0 errores de build
0 dependencias innecesarias

Dirección visual:
  Homepage → 100% light mode (white / warm-white alternado)
  Footer   → warm-900 (#1F1F1A), gris cálido oscuro
  Subpáginas (product, security, etc.) → mantienen secciones dark por ahora

Stack mínimo:
  next, react, react-dom, tailwindcss, typescript
  — nada más —
```

**Próximo paso recomendado:** Fase 2 — empezando por `/customers`, `/data-loss-calculator`, y actualización del Header con navegación por dropdowns.
