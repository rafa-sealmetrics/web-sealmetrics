# PRD — Conversion Architecture Redesign

**Versión:** 1.0
**Fecha:** 2026-08-09
**Estado:** Propuesto — pendiente de priorización
**Origen:** Auditoría de solo lectura de las 250 páginas del sitio (EN+ES), agosto 2026
**Documentos relacionados:**
- `CLAUDE.md` — reglas operativas (design system, banned claims, SEO rules) — no se toca ninguna regla de posicionamiento/contenido
- `SEO-STRATEGY.md` — cluster map e interlinking SEO/GEO — este PRD añade una **capa comercial** que convive con esa arquitectura sin sustituirla (ver §7)
- `PRD.md`, `PRD-CONTENT-STRATEGY.md` — IA y estrategia de contenido existentes
- `GSC-ACTION-PLAN.md` — fuente del hallazgo "el sitio tiene un problema de conversión, no de ranking" que motiva este PRD, y de la decisión ya tomada sobre verticales (§9)
- `ACTION-PLAN.md` — formato de referencia para la priorización de este documento

---

## 1. Por qué ahora

`GSC-ACTION-PLAN.md` (28 jul 2026) ya estableció, con datos de Search Console, que **el sitio no tiene un problema de ranking — tiene un problema de conversión y de coincidencia de intención.** Cinco páginas concentran ~9.200 impresiones y 9 clics; el contenido de AI-retrieval (GEO) ya funciona (posiciones 1.0–7.6 en prompts de lenguaje natural) pero no genera clics porque la respuesta ya se entrega en el motor de IA.

La auditoría de agosto 2026 (solo lectura, 250 páginas) confirma la causa a nivel de página: el copy es correcto y honesto, pero la **arquitectura de conversión está rota** — cuatro caminos de compra sin jerarquía, un botón "gratis" que en realidad pide tarjeta, más de 120 páginas de contenido (blog, glosario, `/open`) sin ningún camino de compra, y la página que recibe al comprador más cualificado (`/security`) sin ningún siguiente paso.

Este PRD convierte esa auditoría en un plan ejecutable.

---

## 2. Objetivo y alcance

**Objetivo:** que cualquier página del sitio, sin excepción, ofrezca un camino real de compra — sin diluir el tono editorial ni la honestidad que ya diferencia a SealMetrics, y sin romper la arquitectura de interlinking SEO/GEO que ya funciona.

**Dentro de alcance:**
- Jerarquía de CTAs (header, hero, cierre de página) en todo el sitio EN+ES.
- Un componente de conversión contextual nuevo, desplegado en blog, glosario, `/open`, países y plataformas.
- Rediseño estructural (no de tono) de `/`, `/product`, `/demo`, `/security`, plantillas de `/for/*`, `/use-cases/*`, `/vs/*`.
- Etiquetado de datos ilustrativos.
- Especificación funcional de un wizard de aprovisionamiento self-serve (implementación fuera de este repo — ver §8).

**Fuera de alcance:**
- Cambios de posicionamiento, tono de voz o mensajes prohibidos — `CLAUDE.md` sigue mandando, con **una única excepción que este PRD enmienda explícitamente**: la regla "Blog posts do NOT link directly to /demo" pasa a aplicar solo a enlaces del cuerpo del texto; el `CommercialModule` (caja de conversión, no link de texto) sí enlaza directo a `/demo` (§7). Actualizar `CLAUDE.md` con esta distinción es un entregable de P0 — sin ello, PRD y ruleset quedan en contradicción.
- Cluster map, esquema JSON-LD e interlinking SEO — `SEO-STRATEGY.md` sigue mandando; este PRD solo añade una capa encima (§7).
- Cambios de pricing o de producto.

---

## 3. Diagnóstico (resumen)

| # | Hallazgo | Impacto |
|---|---|---|
| 1 | CTA global "Start FREE Trial" es la opción primaria en header/hero, pero el ICP (CMO/ecommerce manager, empresa 10M€+) compra en modo asistido, no self-serve | Alto |
| 2 | El botón anuncia "gratis" pero pide tarjeta desde el minuto uno; el único plan sin tarjeta (Agentic Package) no tiene formulario web, solo se activa vía agente de IA/MCP | Alto |
| 3 | "Book a demo" no es una demo: formulario de 7 pasos + espera de hasta 24h. El mejor CTA del sitio (Cal.com directo) vive escondido solo en `/pricing` | Alto |
| 4 | 52 posts de blog, cero CTA propio en ninguno | Alto |
| 5 | `/security` — página del comprador más cualificado (DPO/CTO) — es la única del sitio sin ningún CTA | Alto |
| 6 | `/why-sealmetrics`, la página con mejor estructura de venta del sitio, está enterrada en un dropdown del header; la home no tiene arco de objeción/prueba | Medio |
| 7 | El precio real (€499/mes) solo es visible en 2 de ~11 páginas de contenido profundo auditadas | Medio |
| 8 | Datos de mockup (ROAS, tickers, paneles) sin etiquetar como ilustrativos en home/product, mientras `/why-sealmetrics` sí lo hace bien | Medio |
| 9 | Solo 2 casos con nombre (ambos hoteles) sostienen todo el sitio; testimonio de `/demo` es anónimo | Medio |
| 10 | Páginas largas (`/for/*`, `/use-cases/*`) solo tienen CTA arriba y abajo, nunca en medio — contradice la propia regla del proyecto | Medio |
| 11 | Glosario: ninguna de las 21 páginas con contenido propio tiene CTA; ~30 términos sin página propia | Medio |
| 12 | `/open`: el índice no vende (correcto por tono) pero los capítulos individuales enlazan directo a `/demo` sin que la regla esté formalizada | Bajo |

---

## 4. Arquitectura de conversión objetivo

### 4.1 Escalera de 3 peldaños (sustituye los 5 caminos actuales)

| Peldaño | CTA | Destino | Dónde vive |
|---|---|---|---|
| 1 — Primario | "Reserva una demo" | Cal.com directo (hoy solo vive en `/pricing`, pasa a ser el destino de `/demo`) | Header, hero de cada página, cierre de cada página |
| 2 — Secundario | "Empieza gratis" | Wizard de aprovisionamiento self-serve del Agentic Package (§8) — mientras no exista, mantener el trial de 14 días con tarjeta pero renombrar el botón para no prometer "gratis" sin serlo | Header (estilo secundario), hero |
| 3 — Contextual | Módulo de conversión (§4.2) | `/demo` o `/pricing` según contexto | Insertado dentro del contenido, no solo al final |

"Access Demo Account" (`/demo-access`) deja de vivir en el footer como puerta lateral; se absorbe como opción explícita dentro de la página `/demo`.

### 4.2 Componente: módulo de conversión contextual

**Nuevo componente:** `src/components/ui/CommercialModule.tsx`

```ts
interface CommercialModuleProps {
  locale: "en" | "es";
  hook: string;        // frase de 1 línea, específica al contenido — nunca genérica
  primaryHref?: string; // por defecto, el Cal.com de demo
  primaryLabel?: string;
  secondaryHref?: string; // por defecto, /pricing
  secondaryLabel?: string;
}
```

**Reglas de implementación:**
- Se inserta **dos veces** en páginas de contenido largo: tras el primer bloque de prueba/valor, y antes del bloque de "related content" al final.
- `hook` se escribe por página o por archetype de plantilla (blog, glosario, país, plataforma, `/open`) — nunca el texto genérico "Book a demo".
- El CTA primario del módulo enlaza **directo a `/demo`**, no al pillar intermedio — es una caja de conversión visualmente diferenciada del texto, no un link de cuerpo. Esto no compite con la ley de interlinking SEO existente (ver §7).

**Despliegue (por prioridad, ver §6):**
1. Los 10 posts de blog de comparativa/alternativas con más tráfico.
2. Resto de los 52 posts de blog (EN+ES).
3. Las 21 páginas de glosario con contenido propio.
4. Capítulos de `/open` que hoy no llevan CTA (1, 2, 11).
5. Páginas de país (`/gdpr-analytics/*`) y plataforma (`/platforms/*`).

---

## 5. Especificación por página / plantilla

| Página / plantilla | Cambio | Archivos afectados | Prioridad |
|---|---|---|---|
| Header (global) | Sustituir CTA único "Start FREE Trial" por dos CTAs: "Empieza gratis" (secundario) + "Reserva una demo" (primario, Cal.com). Subir `/why-sealmetrics` a link directo, fuera del dropdown "Why" | `src/components/layout/Header.tsx` | P0 |
| CTAs compartidos (global) | La inversión de jerarquía de todo el sitio vive aquí, no en el header: invertir orden/estilo primario-secundario en los componentes compartidos que renderizan cada hero y cada cierre de página | `DualCTA`, `FinalCtaSharedV3`, `StickyCtaBar` (en `src/components/sections/v3/`) | P0 |
| Footer (global) | Añadir línea de cierre con el CTA primario cerca del copyright; replantear el bloque "Access Demo Account" como parte de la escalera, no como puerta aparte | `src/components/layout/Footer.tsx` | P1 |
| `/security` | Añadir CTA de cierre dirigido a DPO/CTO ("Habla con quien firma la DPA" / cuestionario de seguridad) + enlaces laterales a `/for/dpo`, `/for/cto`, `/dpa`, `/trust` | `src/app/(en)/security/page.tsx` (+ mirror ES) | P0 |
| `/demo` | Calendario Cal.com visible desde el primer scroll; formulario de 6 preguntas pasa a ser cualificación opcional posterior, no el único camino; sustituir testimonio anónimo por uno con nombre en cuanto exista (ver §9) | `src/app/(en)/demo/page.tsx`, `DemoForm.tsx` | P0 |
| Home (`/`) | Inyectar arco de objeción del CFO + mecanismo legal (hoy solo en `/why-sealmetrics`) antes de la sección de pricing; etiquetar mockups como "Escenario ilustrativo"; mover el bloque `QuickAnswer` fuera del cierre visual de la página; invertir jerarquía de CTA | `src/app/(en)/page.tsx`, `src/components/sections/v3/HomeV3.tsx`, `HomeDSections.tsx` | P1 |
| `/product` | Añadir sección de ROI/prueba antes del CTA final; etiquetar paneles mockup (`SuperApiVisual`, `AttributionBarsVisual`, `LensChatVisual`) como ilustrativos | `src/app/(en)/product/page.tsx`, `src/components/sections/v3/ProductV3Sections.tsx` | P1 |
| `/pricing` | Separar visualmente el badge "coming soon" del resto del hero para no mezclar roadmap con producto en vivo | `src/components/sections/v3/PricingV3Sections.tsx`, `PricingPlansV3.tsx` | P2 |
| Plantilla de blog (52 páginas) | Insertar `CommercialModule` antes de "Related articles"; los enlaces contextuales del cuerpo del texto siguen apuntando a pillars como hoy | `src/app/(en)/blog/*/page.tsx` (+ mirrors ES) | P0 (top 10) / P1 (resto) |
| Plantilla de glosario (21 páginas con contenido propio) | Insertar `CommercialModule` antes de `RelatedGlossaryTerms`; dar página propia a términos de intención comercial media-alta hoy solo indexados (`roas`, `ltv`, `utm-parameters`, `funnel`, `cohort`) | `src/app/(en)/glossary/*/page.tsx`, `src/lib/content/glossary.ts` | P1 |
| Plantilla de persona (`/for/*`) | Mover el primer CTA de antes de "Pains" a después de "Outcomes"; añadir CTA intermedio; mostrar ancla de precio ("Desde €499/mes") en hero o outcomes | `src/components/sections/v3/VerticalPageV3.tsx`, `VerticalsData.tsx` | P1 |
| Plantilla de use-case (`/use-cases/*`) | Insertar `CommercialModule` tras el bloque de mayor prueba (ej. tras el checklist de `/use-cases/ga4-migration`) | `src/app/(en)/use-cases/*/page.tsx` | P1 |
| `/searchmetrics-vs-sealmetrics` | Añadir segunda vía de conversión para el tráfico que sí es comprador de analytics, sin diluir el tono de desambiguación | `src/app/(en)/searchmetrics-vs-sealmetrics/page.tsx` | P2 |
| Capítulos de `/open` (1, 2, 11) | Formalizar regla: contenido de manifiesto enlaza a pillar/persona relacionada, no a `/demo` directo; añadir ese enlace lateral donde falta | `src/app/(en)/open/[slug]/page.tsx`, `src/lib/content/open.ts` | P2 |

---

## 6. Fases de implementación

> Cada fase toca decenas de páginas: ejecutar `npm run build` y `npm test` (gates SEO/GEO de `scripts/seo-audit.mjs`) antes de cada PR, como exige `CLAUDE.md`.

### P0 — impacto alto, coste bajo (semana 1-2)
- Enmendar la regla de blog→demo en `CLAUDE.md` (ver §2) antes de tocar código.
- Header + componentes CTA compartidos: nueva jerarquía de CTA.
- CTA de cierre en `/security`.
- Cal.com visible en `/demo` desde el primer scroll.
- Etiquetar mockups como "Escenario ilustrativo" (home + product).
- `CommercialModule`: construir el componente + desplegar en los 10 posts de blog de mayor tráfico/intención de decisión.

### P1 — estructural (semana 3 – mes 2)
- `CommercialModule` en el resto de blog (42 posts) y en las 21 páginas de glosario.
- Home: inyectar arco de objeción/prueba de `/why-sealmetrics`; subir `/why-sealmetrics` al header.
- Plantilla de persona: reordenar CTAs, mostrar precio.
- Plantilla de use-case: CTA intermedio.
- Footer: CTA de cierre.
- Integrar los 2 casos de ecommerce nuevos (esperados septiembre 2026 — ver `project_ecommerce_case_studies_pipeline.md`): sustituir testimonio anónimo de `/demo`, reforzar `/for/ecommerce`, `/vs-ga4`, home.

### P2 — refinamiento (mes 2-3)
- `/pricing`: separar badge de roadmap.
- `/searchmetrics-vs-sealmetrics`: segunda vía de conversión.
- `/open`: formalizar regla de enlace por tono y aplicarla a capítulos 1, 2, 11.
- Housekeeping menor: actualizar precios obsoletos en `PRD.md`, homogeneizar `/vs/ga4` vs `/vs-ga4`, limpiar variantes de home sin usar (`HomeV3Part2.tsx`).

---

## 7. Interlinking: cómo convive con `SEO-STRATEGY.md`

No se toca la ley de interlinking existente (spoke → pillar → demo, §4 de `SEO-STRATEGY.md`) — los datos de `GSC-ACTION-PLAN.md` confirman que esa arquitectura funciona para SEO/GEO. Se añade una **segunda capa, comercial, que no compite por link equity**:

- **Capa SEO (intacta):** enlaces en el cuerpo del texto → spoke → pillar → demo.
- **Capa comercial (nueva):** `CommercialModule`, visualmente diferenciado (caja, no link de texto), con destino directo a `/demo`/`/pricing`.

Conexiones cruzadas a añadir: `/security` ↔ `/for/dpo`, `/for/cto`; términos de glosario con perfil de comprador claro ↔ página `/for/*` correspondiente; `/searchmetrics-vs-sealmetrics` → un pillar de producto real.

---

## 8. Fuera de alcance de este repo: wizard de aprovisionamiento self-serve

El Agentic Package (1M eventos/mes, sin tarjeta) ya tiene la lógica de backend construida y expuesta como herramientas MCP (detectar plataforma, generar guía de instrumentación, crear cuenta, verificar evento) — hoy solo accesible si el visitante ya usa un agente de IA. Se propone construir una interfaz web que reutilice esa misma lógica para humanos:

1. URL + email de trabajo, sin tarjeta.
2. Detección automática de plataforma.
3. Snippet de instalación a medida / instalación de un clic.
4. Verificación en vivo del primer evento.
5. Aterrizaje en dashboard con datos reales.

Esto vive en `my.sealmetrics.com`, no en este repo. El interino mientras no exista ya está definido en §4.1 (peldaño 2).

---

## 9. Decisiones resueltas y pendientes

**Resueltas:**
- El trial de 14 días con tarjeta se mantiene para Growth/Scale (buena economía de conversión); el hueco real es la ausencia de una vía sin tarjeta accesible por web, que resuelve el wizard (§8).
- `/for/finance`, `/for/healthcare`, `/for/education` **se mantienen separadas** — no se consolidan. (Nota: `GSC-ACTION-PLAN.md` había marcado la consolidación como pendiente por tráfico de coincidencia basura y falta de caso de cliente; se mantiene la página pero queda abierta la pregunta de inversión, ver abajo.)
- 2 casos de ecommerce nuevos confirmados para septiembre 2026.

**Pendientes:**
- Para Finance/Healthcare/Education: ¿hay pipeline real en alguno de los tres que justifique invertir en un caso con nombre propio, o quedan como colateral sin expectativa de tráfico orgánico?
- Prioridad relativa entre construir el wizard (§8, fuera de este repo) y el resto del plan P0/P1 — depende de disponibilidad del equipo de producto.

---

## 10. Métricas de éxito

| Métrica | Objetivo | Fuente |
|---|---|---|
| Reservas de demo vía Cal.com directo | Sustituir al formulario de 7 pasos como vía principal | Analítica interna / Cal.com |
| Páginas de blog con `CommercialModule` desplegado | 52/52 (EN) en 6 semanas | Auditoría de código |
| Páginas de glosario con `CommercialModule` desplegado | 21/21 en 6 semanas | Auditoría de código |
| Paneles de mockup sin etiquetar como ilustrativos | 0 | Auditoría de código |
| Testimonios con nombre en el sitio | De 2 a 4-5 tras septiembre 2026 | Contenido |
