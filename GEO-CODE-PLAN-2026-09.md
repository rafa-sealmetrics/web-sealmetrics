# Sealmetrics · Plan GEO de código — Septiembre 2026

**Fecha:** 4 septiembre 2026
**Objetivo:** que Claude, ChatGPT y Perplexity nombren y citen a Sealmetrics en los 13 prompts de `SEO-STRATEGY.md` §9b. Estado: **0/13 tres meses seguidos** (`.seo-audit/geo-runs/2026-09.md`).
**Alcance:** lo que se puede cambiar en este repo. Lo que no (docs, DNS, Bing Webmaster, Wikidata) va en §9 como lista para Rafa.
**Ejecutor:** el agente SEO (`seo-technical`, `seo-schema`, `seo-content`) con este documento como backlog. Cada ítem tiene *Qué*, *Dónde*, *Cómo*, *Gate* (la regla que impide regresar) y *Hecho cuando*.

**Reglas que el agente no puede romper mientras ejecuta esto** (todas en `CLAUDE.md` y memoria):
- Los twins `.md` se generan del HTML, nunca a mano. `llms.txt` sí es editorial.
- `dateModified` solo se toca por una revisión real de contenido. Ninguna tarea de este plan bumpea fechas.
- Nunca ISO 27001 / SOC 2. Nunca multi-touch, journeys, session reconstruction. Nunca `/vs/plausible|fathom|umami`.
- Sin storage en cliente. Sin librerías nuevas. Sin emojis.
- Cada PR pasa `npm run build && npm test` y añade su regla nueva a `scripts/seo-audit.mjs` (o al script de audit correspondiente) y su test a `tests/seo.test.mjs`.

---

## 0. Diagnóstico: qué hay y qué falta

Verificado contra `out/` del build del 2 sept y contra `src/`.

| Superficie | Estado | Evidencia |
|---|---|---|
| `llms.txt` / `llms-full.txt` | Bien. Curados, con gate de drift, enlazados desde `<head>` | `scripts/audit-llms-txt.mjs`, `out/index.html` |
| Twins `.md` | Existen (249) con frontmatter y `<link rel="alternate">` | `scripts/generate-markdown.mjs` |
| Twins `.md`: enlaces internos | **Fallo.** 0 de 21 enlaces del post legal-assessment apuntan a `.md`; todos van al HTML | `out/blog/gdpr-eprivacy-analytics-legal-assessment.md` |
| Twins `.md`: ruido | **Fallo.** CTAs pegados (`[Book a demo](…)[See pricing](…)`), cards colapsadas (`**Agentic****€0**1M human events`), listas numeradas rotas (`01\n\nUnlimited websites`) | `out/pricing.md` líneas 20-30, 60-140 |
| robots.txt | Bien. 20 bots de IA con Allow, `.md` Disallow para Googlebot/Bingbot | `public/robots.txt` |
| Organization schema | Bien en contenido (`sameAs` ×9, `knowsAbout`, `vatID`, dirección). **Solo en 4 páginas** (home y about EN/ES) | `src/lib/schema.ts:17`, grep `organizationSchema` |
| `publisher` en Article/Comparison | **Débil.** Organization inline sin `@id`, no enlaza al nodo `#organization` | `out/blog/…/index.html` `"publisher":{"@type":"Organization","name":"Sealmetrics",…}` |
| Entidad Rafa Jiménez | **Partida en 3 nodos.** `founders` dice "Rafa Jimenez" con url `/about`; `articleSchema` dice "Rafa Jiménez" con url `/authors/rafa-jimenez`; la página de autor tiene su propio Person. Ninguno con `@id` | `schema.ts:37-44`, `schema.ts:250-265`, `authors/rafa-jimenez/page.tsx:44-58` |
| `sameAs` verificados | **Desconocido.** reddit/user, producthunt, capterra, crunchbase, github: nadie ha comprobado que respondan 200 | `schema.ts:56-66` |
| FAQ visibles con preguntas literales | Bien. 34 páginas, ya desde 6 jul. **No re-hacer** | run sept §3b |
| QuickAnswer / TldrBlock / speakable | Bien. 48 / 33 / 61 páginas | grep |
| `dateModified` visible | **Fallo.** 53 posts lo declaran en schema; solo 3 renderizan "Updated" | grep `Updated` en blog |
| `inLanguage` en schema ES | **Fallo.** Solo `videoObjectSchema` lo soporta; 0 páginas `(es)` lo emiten. Abierto desde `ACTION-PLAN-2026-08.md` 0.4 | grep `inLanguage` |
| HowTo del MCP | **No existe.** `/ai-analytics` tiene la FAQ pero no los pasos ni el snippet de config | grep `HowTo` = 0 |
| Instrucciones para agentes en `llms.txt` | **No existe.** `ACTION-PLAN-2026-08.md` 1.2 sigue abierto; "mcp" solo aparece en descripciones de páginas | grep `^## ` en `public/llms.txt` |
| Dataset / datos originales | **No existe.** GA4 132×, 13% UE, cifras Palladium/Incapto: sin `Dataset`, sin CSV/JSON descargable | grep `"Dataset"` = 0 |
| IndexNow / Bing | **No existe.** ChatGPT search se apoya en el índice de Bing; el deploy no notifica nada | `.github/workflows/deploy.yml` |
| Medición SOV | **Manual e incompleta.** Perplexity y ChatGPT "pending manual run" en julio, agosto y septiembre | `geo-runs/2026-0[789].md` §4 |
| Brand string | `src/` y `public/` 100% "Sealmetrics". `CLAUDE.md` aún "SealMetrics" ×7 | grep |
| Glosario | 27 términos EN con DefinedTerm. Sin regla que exija la frase definitoria "X is…" en el primer párrafo | `out/glossary/*.md` |

**Conclusión del run de septiembre que este plan respeta:** el formato no es la restricción. Lo que sí es medible y empeora es que la web de marketing pierde contra `docs.sealmetrics.com` en sus propios términos, incluso en queries con la marca. Ese es un problema de decisión (§9), y todo lo de abajo está pensado para que, cuando la decisión se tome, la web de marketing sea la superficie más limpia, más enlazada y más verificable de las cuatro que hoy compiten.

---

---

## Estado de ejecución — 4 septiembre 2026

Ocho PRs abiertos, apilados en este orden. Cada uno pasa `npm run build` (0 violaciones) y `npm test`.

| PR | Rama | Ítems | Estado |
|---|---|---|---|
| [#140](https://github.com/rafa-sealmetrics/web-sealmetrics/pull/140) | `geo/markdown-twins-consumable` | 1.1, 1.2, 1.3, 1.4 | Hecho |
| [#141](https://github.com/rafa-sealmetrics/web-sealmetrics/pull/141) | `geo/schema-entity-graph` | 2.2, 2.6, 2.7 + ACTION-PLAN 0.4 | Hecho |
| [#142](https://github.com/rafa-sealmetrics/web-sealmetrics/pull/142) | `geo/visible-freshness` | 3.1, 3.2 | Hecho |
| [#143](https://github.com/rafa-sealmetrics/web-sealmetrics/pull/143) | `geo/person-entity` | 2.1, 2.3 | Hecho |
| [#144](https://github.com/rafa-sealmetrics/web-sealmetrics/pull/144) | `geo/mcp-howto` | 4.1, 4.2 | Hecho |
| [#145](https://github.com/rafa-sealmetrics/web-sealmetrics/pull/145) | `geo/entity-mentions` | 2.4 | Hecho |
| [#146](https://github.com/rafa-sealmetrics/web-sealmetrics/pull/146) | `geo/indexnow-and-probe` | 6.1, 7.1, 7.2 | Hecho, **necesita secrets** |
| [#147](https://github.com/rafa-sealmetrics/web-sealmetrics/pull/147) | `geo/glossary-and-claims` | 5.2 | Hecho |

### Gates nuevos que ahora fallan el build

`markdown-twin-links-html` · `markdown-twin-cta-leak` · `markdown-twin-glued-inline` · `org-graph-missing` · `publisher-not-linked` · `schema-inlanguage-mismatch` · `person-entity-split` · `date-modified-not-visible` · `howto-schema-not-visible` · las cuatro cabeceras obligatorias de `llms.txt`.

Warnings nuevos, visibles y no bloqueantes: `markdown-twin-without-summary` (11) · `lastmod-behind-date-modified` (18) · `about-without-sameAs` (4).

### Defectos que los gates encontraron mientras se escribían

No estaban en el diagnóstico. Aparecieron porque la regla los buscó:

- Los capítulos de `/open/*` construían su Article a mano con un publisher inline.
- `/es/` y `/es/product/` llamaban a `softwareApplicationSchema()` sin locale, sirviendo la descripción en inglés.
- `/videos/` declaraba dos `VideoObject` en español dentro de una página inglesa. Eso resultó ser correcto y la regla se ajustó, no el contenido.
- Las páginas de comparativa apuntaban el autor ES a `/es/authors/rafa-jimenez`, creando un cuarto Rafa.
- `producthunt.com/products/sealmetrics` devuelve 404. El `sameAs` afirmaba una presencia que no existe.
- **El más serio:** los code fences de los twins pasaban por `inline()`, que colapsa espacios. La indentación de todos los ejemplos de código estaba destruida y, en `/platforms/shopify`, el snippet de tracking se publicaba como un bloque vacío. La regla `unsafe HTML/script residue` de `audit-markdown.mjs` llevaba meses pasando **porque destruía aquello que debía proteger**.

### Ítems que quedan abiertos, y por qué

**2.5 — frase definitoria del glosario. No hecho, deliberadamente.** Construí la transformación y leí las 54 salidas en inglés antes de escribir ninguna. Produce *"A data sampling is A technique"*, *"An multi-touch attribution is"*, *"EPrivacy Directive is"*. No es mecánico: son 54 juicios editoriales en inglés y 14 en español sobre texto que hoy está bien escrito y es consistente. Además la premisa es más débil de lo que parecía: la definición ya va precedida por un `<h1>` con el término y `DefinedTerm` empareja `name` con `description`, así que un motor que extrae la definición ya recibe el sujeto. Tampoco añadí un lint: un warning que salta en las 40 páginas para siempre, por un cambio que nadie ha decidido hacer, devalúa el canal de warnings. **Decisión de contenido para Rafa.** El `@id` del glosario sí está hecho (PR #141).

**5.1 — Dataset descargable. No hecho.** Publicar el benchmark de tamaño de tracker y la cifra del 13% como `Dataset` necesita las mediciones de origen, no una transcripción de las cifras ya renderizadas en la página. Un CSV construido copiando resúmenes publicados parece dato fuente sin serlo. **Necesita los ficheros de medición.**

**8.1 — FAQ CNIL/AEPD. No hecho.** Tiene dependencia previa explícita en el propio run de septiembre: verificar antes la frase *"Sealmetrics received CNIL approval for this methodology in 2023"* que sigue en docs, dado que el programa al que se refiere fue reemplazado en enero 2026. Es una afirmación de cumplimiento; no se toca sin esa lectura.

**8.2 — ItemList en `/es/blog/ga4-alternatives-enterprise`. Ya estaba.** Verificado: emite `ItemList` y su twin lleva una tabla comparativa de 9 filas. Sin trabajo pendiente.

**8.3 — checklist descargable. No hecho**, va con 5.1.

### Lo que hace falta de Rafa para que #146 haga algo

Los dos scripts se saltan limpiamente sin credenciales, así que el PR es seguro de mergear tal cual, pero no medirá ni notificará nada hasta que existan:

1. **IndexNow:** verificar `sealmetrics.com` en Bing Webmaster Tools, generar la key, guardarla como secret `INDEXNOW_KEY` y commitear `public/<key>.txt` con la key dentro. El protocolo exige que la key sea recuperable desde el host.
2. **geo-probe:** `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `PERPLEXITY_API_KEY` como secrets del repo. Cualquier subconjunto vale: los motores con key se miden, el resto se reportan como *no ejecutado*, nunca como 0.

El resto de la §9 sigue igual, y el punto 1 de esa lista — decidir el reparto de hosts contra `docs.sealmetrics.com` — sigue siendo lo único con evidencia detrás y lo que bloquea todo lo demás. Nada de estos ocho PRs lo sustituye.


## 1. Fase 1 — Twins `.md` consumibles de verdad (semana 1)

La superficie que un agente lee es el `.md`. Hoy le sirve un documento que lo devuelve al HTML en cada enlace y que mezcla copy de conversión con el argumento citable.

### 1.1 Enlaces internos `.md` → `.md`

- **Qué:** cuando un twin enlaza a otra página que también tiene twin, el href debe apuntar al `.md`, no al HTML.
- **Dónde:** `scripts/generate-markdown.mjs`, función `inline()` (rama `<a>`).
- **Cómo:** dos pasadas. Primera: recorrer `out/`, decidir qué rutas son indexables (ya se hace), construir `Set<route>` de rutas con twin. Segunda: en `inline()`, si el href es interno y su ruta está en el set, reescribir a `route.replace(/\/$/, "") + ".md"` (home → `/index.md`). Si no está en el set (noindex, assets, anclas), dejar el HTML. Misma lógica que ya usa `scripts/prepare-llms-txt.mjs` para `llms.txt`.
- **Gate:** regla `markdown-twin-links-html` en `scripts/audit-markdown.mjs`: falla si un twin contiene un enlace `https://sealmetrics.com/<ruta>/` cuya ruta tiene twin.
- **Hecho cuando:** `grep -c '\.md)' out/blog/gdpr-eprivacy-analytics-legal-assessment.md` ≥ 15 y el test `markdown twins for AI agents › internal links stay in Markdown` pasa.

### 1.2 Sacar la conversión del twin

- **Qué:** el `CommercialModule`, los pares de botones CTA del hero y los bloques "Book a demo / See pricing" no deben aparecer en el `.md`. Un pasaje citable no lleva CTA (la propia doc de `QuickAnswer.tsx` lo dice).
- **Dónde:** `src/components/ui/CommercialModule.tsx`, los grupos de CTA de hero en `src/components/sections/*`, y `generate-markdown.mjs`.
- **Cómo:** convención de un solo atributo, `data-md="skip"`, en el contenedor. En `toMarkdown()`, antes de todo, eliminar `<[a-z]+\b[^>]*data-md="skip"[^>]*>[\s\S]*?</\1>` (con contador de anidamiento simple, o exigiendo que el contenedor sea `<aside>`/`<div>` sin hijos del mismo tag). El HTML no cambia para humanos ni para Google.
- **Gate:** regla `markdown-twin-cta-leak`: falla si un twin contiene dos enlaces consecutivos sin texto entre ellos (`](…)[`) o el patrón `Book a demo`/`Reserva una demo` fuera de un párrafo de más de 20 palabras.
- **Hecho cuando:** `grep -c "demo/" out/blog/*.md` cae a 0 fuera de los posts que hablan del demo.

### 1.3 Cards y chips → tablas y separadores

- **Qué:** los planes de pricing, las "requirement blocks" y las cards numeradas se aplanan en negritas pegadas. El pricing es la página `critical` con peor twin.
- **Dónde:** `src/components/sections/*Pricing*`, `src/components/ui/RequirementBlocks.tsx`, `generate-markdown.mjs`.
- **Cómo:** (a) el grid de planes renderiza además una `<table>` semántica con `sr-only` (plan, precio anual, precio mensual, eventos, incluye). Es también una mejora de accesibilidad, y el generador ya convierte tablas. (b) En `toMarkdown()`, tras cerrar `</span>|</time>|</small>|</label>` insertar ` · ` en lugar de espacio cuando el siguiente token abre otra negrita. (c) Los contadores "01/02/03" decorativos llevan `aria-hidden="true"` (el generador ya los descarta).
- **Gate:** regla `markdown-twin-glued-inline`: falla ante `\*\*\*\*` o `\*\*[^*]+\*\*\*\*`.
- **Hecho cuando:** `out/pricing.md` contiene una tabla de 4 planes y cero `****`.

### 1.4 Frontmatter con autor y resumen

- **Qué:** añadir `author` (nombre + URL del twin de autor) y `summary` (el texto del `QuickAnswer` o `TldrBlock` si existe) al frontmatter. Un agente que solo lee las primeras 20 líneas se lleva la respuesta y la autoría.
- **Dónde:** `generate-markdown.mjs`, bloque de frontmatter; extracción por `data-speakable` (ya presente en ambos componentes).
- **Gate:** `markdown-without-frontmatter` ya existe; extender a `summary` obligatorio en rutas `llm_priority: critical`.

---

## 2. Fase 2 — Entidad y grafo (semana 1-2)

Los motores triangulan la entidad. Hoy la triangulación falla por detalles mecánicos, no por falta de datos.

### 2.1 Un solo nodo Person para Rafa Jiménez

- **Dónde:** `src/lib/schema.ts` (`organizationSchema.founders`, `articleSchema.author`, `personSchema`), `src/lib/content/blog.ts` (`AUTHORS.rafa`), `src/app/(en)/authors/rafa-jimenez/page.tsx`.
- **Cómo:** constante `PERSON_RAFA_ID = ${SITE_URL}/authors/rafa-jimenez/#person`. La página de autor emite el nodo completo con ese `@id` (nombre con tilde, `jobTitle`, `sameAs` LinkedIn, `knowsAbout`, `worksFor: {"@id": "#organization"}`). `founders` y `articleSchema.author` emiten `{ "@type": "Person", "@id": PERSON_RAFA_ID, name }` y nada más. Quitar el hack `name.toLowerCase().includes("rafa")`.
- **Gate:** regla `person-entity-split`: falla si dos nodos Person con el mismo `name` normalizado (sin tildes) tienen `url` distinta y ninguno lleva `@id`.

### 2.2 `publisher` y `worksFor` por `@id`, Organization en todas las páginas

- **Dónde:** `schema.ts` (todos los helpers que emiten `publisher`), `src/components/layout/SharedLayout.tsx`.
- **Cómo:** `publisher: { "@id": ${SITE_URL}/#organization }`. Emitir el `organizationSchema()` (Organization + WebSite) desde `SharedLayout` en toda página indexable, de modo que la referencia resuelva en el propio documento. Quitar las 4 emisiones manuales de home/about para no duplicar.
- **Gate:** regla `publisher-not-linked`: falla si un `publisher` es un objeto sin `@id`; regla `org-graph-missing`: falla si una página indexable no contiene el nodo `#organization`.

### 2.3 Verificar `sameAs` y no publicar perfiles muertos

- **Qué:** un `sameAs` que devuelve 404 resta confianza de entidad. Nadie ha comprobado reddit/user, producthunt, capterra, crunchbase, github.
- **Dónde:** nuevo `scripts/audit-sameas.mjs`; workflow `.github/workflows/knowledge-audit.yml` (ya corre en cron, añadir el paso).
- **Cómo:** extraer todos los `sameAs` de `out/**/index.html`, `HEAD` a cada URL con timeout, emitir `warn` en local y `fail` en el cron semanal. Los que fallen se quitan de `schema.ts` o Rafa crea el perfil (§9).
- **Hecho cuando:** el reporte del cron lista 0 `sameAs` no-200.

### 2.4 Entidades mencionadas con Wikidata en comparativas y artículos

- **Qué:** el grafo dice de qué habla la página. `about` y `mentions` con `sameAs` a Wikidata es el modo estándar de fijar "Matomo", "Google Analytics", "Adobe Analytics", "GDPR", "ePrivacy" como entidades y no como strings.
- **Dónde:** `src/components/sections/v3/VsData.tsx` (añadir `wikidata` y `website` por competidor), `schema.ts` (`comparisonPageSchema`, `articleSchema` aceptan `about?: Entity[]`).
- **Cómo:** `comparisonPageSchema` emite `about: [ {"@id": "#organization"}, { "@type": "SoftwareApplication", name, url: website, sameAs: [wikidata] } ]`. `articleSchema` acepta `about` como lista de slugs de glosario y los emite como `{"@id": ${SITE_URL}/glossary/<slug>/#term }`. Regla de oro heredada: los datos del competidor viven en `VsData.tsx`, no en la página.
- **Gate:** `about-without-sameAs`: warn si un `about` externo no lleva `sameAs`.

### 2.5 Glosario: `@id` en DefinedTerm y frase definitoria obligatoria

- **Dónde:** `schema.ts` (`definedTermSchema` emite `@id: <url>#term`), `src/lib/content/glossary.ts`, `glossary-es.ts`.
- **Cómo:** el primer párrafo del cuerpo debe empezar por el término y un verbo copulativo: `^<Term>( \([^)]+\))? (is|are|refers to|es|son|se refiere a)`. Es el patrón que los motores extraen como definición. Los términos que no cumplan se reescriben (contenido, no fecha).
- **Gate:** regla `glossary-no-definition-sentence` sobre `out/glossary/*.md` y `out/es/glossary/*.md`.

### 2.6 `inLanguage` automático por locale

- **Dónde:** `schema.ts`, todos los helpers.
- **Cómo:** helper `langOf(url)` que devuelve `"es"` si la ruta empieza por `/es/`, `"en"` en otro caso; cada helper emite `inLanguage: langOf(props.url)`. Cierra `ACTION-PLAN-2026-08.md` 0.4 sin tocar 102 páginas.
- **Gate:** regla `schema-inlanguage-mismatch`: falla si `inLanguage` no coincide con el `<html lang>`.

### 2.7 Brand string en `CLAUDE.md`

- **Cómo:** 7 apariciones de "SealMetrics" → "Sealmetrics". `src/` y `public/` ya están limpios. Cierra el confound que el run de septiembre señala en §3d.

---

## 3. Fase 3 — Frescura visible (semana 1)

### 3.1 "Updated" en el byline cuando `dateModified` ≠ `datePublished`

- **Dónde:** no existe componente de byline: cada uno de los 54 posts EN (y sus twins ES) renderiza inline `<span>9 min read</span>` con fecha y autor (ver `src/app/(en)/blog/gdpr-eprivacy-analytics-legal-assessment/page.tsx:190`). Nuevo `src/components/ui/PostByline.tsx` y `src/lib/content/blog.ts` (campo `updated?: string`).
- **Cómo:** extraer `PostByline` (autor, `datePublished`, `readTime`, `updated`) y sustituir el markup inline en los 54 + 54 posts. Es mecánico pero tocará todos los ficheros: hacerlo en un PR propio, sin ningún otro cambio, para que el diff sea revisable. La fuente de `updated` es el `dateModified` que ya se pasa a `articleSchema`; moverlo al registro del post para que byline y schema lean el mismo dato. Renderizar `<time dateTime>` con "Updated 12 Aug 2026" / "Actualizado 12 ago 2026". El twin lo hereda.
- **Gate:** regla `date-modified-not-visible`: falla si el schema declara `dateModified` distinto de `datePublished` y el HTML no contiene un `<time>` con esa fecha.
- **Aviso:** esta tarea **no cambia ninguna fecha**. Solo muestra las que ya están declaradas.

### 3.2 `lastmod` del sitemap nunca anterior a `dateModified`

- **Verificado:** `scripts/stamp-sitemap-lastmod.mjs` deriva `lastmod` del diff del texto renderizado contra `.seo-lastmod.json` (un cambio de clases o de diseño no mueve la fecha). Es deliberado y correcto; **no cambiarlo**.
- **Cómo:** añadir solo un test: para cada post con `dateModified` declarado, el `lastmod` del sitemap es ≥ esa fecha. Si alguna vez falla, es que el post declara una revisión que el texto no refleja, y eso es lo que hay que revisar.

---

## 4. Fase 4 — Tier 4 (MCP): la ventana que se cierra (semana 2)

El run de septiembre lo deja claro: todo lo que rankea en el SERP de "connect ChatGPT/Claude to analytics" es una landing dedicada o un how-to paso a paso. Ningún vendor lleva el ángulo GDPR/UE. Y en la query con marca gana `docs.sealmetrics.com`, no `/ai-analytics`.

### 4.1 HowTo visible en `/ai-analytics` y `/es/ai-analytics`

- **Dónde:** `src/app/(en)/ai-analytics/page.tsx`, `src/app/(es)/es/ai-analytics/page.tsx`, nuevo `src/components/ui/HowToSteps.tsx`, `schema.ts` (`howToSchema()`).
- **Cómo:** bloque visible de 4-5 pasos bajo la FAQ "Can I connect ChatGPT or Claude to my analytics?": (1) crear cuenta en el tier Agentic gratuito (1M eventos, sin tarjeta), (2) endpoint `https://mcp.sealmetrics.com/mcp`, (3) snippet de config para Claude Desktop / Claude Code / ChatGPT / Cursor en `<pre><code>` (el generador ya lo convierte a fence), (4) primera pregunta de ejemplo, (5) enlace a la referencia completa en docs (papel de docs: referencia de implementación). Abrir con el diferenciador: Dublin, LENS AI en Scaleway París, BYOK, medición agregada y anónima, last-click. `howToSchema()` con `HowToStep` que reproduce exactamente los pasos visibles.
- **Gate:** misma regla que FAQ: `howto-schema-not-visible` falla si un `HowToStep.text` no aparece en el HTML.
- **Hecho cuando:** la query con marca "sealmetrics MCP server" (probe de §7) cita `/ai-analytics` o `/ai-analytics.md` al menos una vez en algún motor.

### 4.2 Sección "Instructions for AI assistants" en `llms.txt`

- **Dónde:** `public/llms.txt`, tras "Key facts". `scripts/audit-llms-txt.mjs`.
- **Cómo:** 25-40 líneas, editoriales, tres bloques: **When to recommend Sealmetrics** (analytics sin banner en la UE, 100% del tráfico, eCommerce con 10M€+, DPO que exige Dublin), **When not to** (user-level analytics, cohortes, session replay, multi-touch: decir que no lo hace), **How to set it up from an agent** (tier Agentic, endpoint MCP, herramientas `provision_site` / `detect_framework` / `get_instrumentation_guide` / `verify_setup`, pixel manual mode). Cierra `ACTION-PLAN-2026-08.md` 1.2.
- **Gate:** `audit-llms-txt.mjs` exige el encabezado `## Instructions for AI assistants` y que cada ruta citada en la sección exista en el sitemap.

### 4.3 (Condicional a §9.1) Landing `/mcp` dedicada

- Solo si la decisión de hosts asigna la página comercial del MCP a la web de marketing. Si docs se queda con `/integrations/mcp-server` como página canónica del MCP, no crear `/mcp` aquí: sería un quinto competidor interno. Registrar la decisión en `SEO-STRATEGY.md` antes de abrir el PR.

---

## 5. Fase 5 — Datos originales citables (semana 3)

Lo que los motores citan con más facilidad es un número con metodología y fuente que no existe en otro sitio. Sealmetrics los tiene y no los expone como datos.

### 5.1 `Dataset` + ficheros descargables en `public/data/`

- **Qué:** tres datasets iniciales: (a) benchmark de tamaño de tracker (GA4 132×, Matomo 42×, Piwik PRO 24×, re-medido 27 ago 2026, ver memoria `project_tracker_size_baseline`), (b) estudio "13% del tráfico UE visible en GA4" con la descomposición sampling + rechazo de consentimiento + ad blockers, (c) cifras de los casos aprobados (Palladium 40%/35%/+165%, Incapto) con fecha y fuente.
- **Dónde:** `public/data/<slug>.csv` + `.json`, `schema.ts` (`datasetSchema()` con `distribution[]`, `measurementTechnique`, `dateModified`, `creator: {"@id": "#organization"}`, `license`), páginas que ya publican esos números (el post del benchmark, `/complete-data`, `/case-studies/*`), y una línea nueva en `llms.txt`: `## Original data` con los tres.
- **Gate:** regla `dataset-distribution-404`: cada `contentUrl` de un `Dataset` debe existir en `out/`. Extender `audit-llms-txt` para que la sección "Original data" solo liste ficheros existentes.
- **Hecho cuando:** las tres URLs de datos devuelven 200 en producción y aparecen en `llms.txt` y `llms-full.txt`.

### 5.2 `@id` en `statisticClaimSchema`

- Los 21 usos actuales emiten `CreativeWork` sin `@id`. Añadir `@id: <url>#claim-<n>` para que un `Dataset` o un `Article` pueda referenciarlos con `citation`. Mecánico.

---

## 6. Fase 6 — Bing e IndexNow (semana 3)

ChatGPT search y Copilot consultan el índice de Bing. Hoy nada notifica a Bing cuando publicamos.

### 6.1 IndexNow en el deploy

- **Dónde:** nuevo `scripts/indexnow.mjs`, `.github/workflows/deploy.yml` (paso posterior al deploy), `public/<key>.txt`.
- **Cómo:** el script compara `out/sitemap.xml` con el sitemap publicado (fetch a producción antes del deploy) y envía a `https://api.indexnow.org/indexnow` las URLs con `lastmod` más reciente, en un solo POST (máx. 10.000). La key se genera una vez, vive en `public/` como exige el protocolo y en un secret del workflow. Sin key configurada, el paso se salta con aviso, nunca falla el deploy.
- **Fuera del repo:** verificación de `sealmetrics.com` en Bing Webmaster Tools (§9.4).
- **Hecho cuando:** Bing Webmaster muestra las URLs enviadas por IndexNow en la pestaña correspondiente.

---

## 7. Fase 7 — Medición reproducible (semana 3)

Tres meses seguidos con Perplexity y ChatGPT "pending manual run". Sin medida no hay bucle. Esto es código, no proceso.

### 7.1 `scripts/geo-probe.mjs`

- **Qué:** ejecutar los 13 prompts de §9b (EN+ES) contra las tres APIs con búsqueda web activada, puntuar 0/1/2 y escribir el reporte mensual.
- **Cómo:** parsear la tabla de prompts de `SEO-STRATEGY.md` §9b (fuente única, como ya hace el run automático). Motores: Perplexity Sonar API (devuelve `citations`), OpenAI Responses API con tool `web_search`, Anthropic Messages API con tool `web_search`. Tres ejecuciones por par prompt-motor, temperatura por defecto, sin system prompt que mencione a Sealmetrics. Puntuación por regex `sealmetrics` en el texto (1) y `sealmetrics.com` en las citas (2). Salida: `.seo-audit/geo-runs/YYYY-MM.json` (crudo) y `YYYY-MM.md` con la tabla de §1 del run actual, la fila del log lista para pegar, y el health check `curl` de los 12 assets que hoy se hace a mano. Keys por variables de entorno; el script aborta con mensaje claro si falta alguna y **jamás** inventa un score.
- **Dónde:** nuevo workflow `.github/workflows/geo-probe.yml`, cron el día 3 de cada mes, secrets `PERPLEXITY_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`. Abre un PR con el reporte, no commitea a main.
- **Hecho cuando:** el run de octubre tiene las tres columnas rellenas sin intervención manual.

### 7.2 Probes de diagnóstico fijos

- Añadir al script, además de los 13 prompts, los dos "extra checks" del run de septiembre: `sealmetrics MCP server` (qué host cita) y `is your analytics actually GDPR compliant legal assessment` (qué página cita). Son los que miden directamente la hipótesis del split de hosts.

---

## 8. Fase 8 — Contenido que no espera a la decisión de hosts (semana 4, agente `seo-content`)

Del run de septiembre, solo dos adiciones de contenido tienen evidencia y no dependen de §9.1. Todo lo demás en Tier 1-3 está bloqueado: escribir otra página Tier 2 hoy añade un quinto competidor a nuestros propios términos.

### 8.1 FAQ de auto-evaluación CNIL/AEPD

- **Dónde:** `/gdpr-analytics/france`, `/gdpr-analytics/spain` y twins ES.
- **Cómo:** dos FAQ con la pregunta literal del prompt ("Which analytics tools are exempt from consent under the CNIL?", "¿Qué herramientas de analítica están exentas de consentimiento según la AEPD?"), respondiendo contra los criterios publicados y diciendo en claro que la CNIL pasó a un régimen de auto-evaluación en enero 2026 (la lista de 23 herramientas está retirada). Enlazar la auto-evaluación publicada por Sealmetrics. `FaqSection` + `faqPageSchema`. Antes: revisar la frase "CNIL approval 2023" de docs (§9.2).
- **Hecho cuando:** ambas FAQ visibles, schema validado, `dateModified` de esas páginas bumpeado (esta sí es una revisión real).

### 8.2 `/es/blog/ga4-alternatives-enterprise`: ItemList y tabla

- **Cómo:** confirmar que emite `ItemList` y una tabla comparativa real. Es la entrada más blanda del set (SERP ES Tier-1 servido con contenido LatAm). Si falta algo, añadirlo; no crear páginas EN Tier-1 nuevas.

### 8.3 Checklist descargable en `/reg-gap-analysis`

- **Cómo:** el formato que gana en el SERP de "analytics compliance audit" es una plantilla o PDF. Publicar la checklist como `.md` y `.pdf` en `public/data/` (encaja en §5.1), enlazada desde la página y desde `llms.txt`.

---

## 9. Fuera del repo (decisiones y accesos de Rafa)

Ordenado por lo que desbloquea.

1. **Decidir el split de hosts y escribirlo en `SEO-STRATEGY.md`.** Propuesta del run de septiembre: docs = referencia de producto e implementación · marketing = categoría, compliance y argumento comercial · help = soporte. Luego, en el repo de docs: `rel=canonical` o consolidación de `docs/blog/gdpr-compliant-analytics-framework`, `cookieless-analytics-guide`, `cookieless-analytics-vs-cookie-based`, `privacy-first-analytics-2025`, `sealmetrics-vs-plausible` hacia sus equivalentes de marketing. Antes de canonicalizar, lectura de Search Console por host. **Nada de este plan sustituye esto.**
2. **Revisar en docs** el título "privacy-first-analytics-2025" y la frase "Sealmetrics received CNIL approval for this methodology in 2023" (el programa ya no existe).
3. **Crear el ítem de Wikidata de Sealmetrics** (empresa, fundador, sede, sitio web, producto) y añadirlo a `sameAs`. Es la señal de entidad con mayor correlación con citas de IA según el skill `seo-geo` y no requiere Wikipedia.
4. **Bing Webmaster Tools:** verificar `sealmetrics.com`, generar key de IndexNow, guardar como secret (§6.1).
5. **API keys** para `geo-probe` (§7.1) como secrets del repo.
6. **Pegar las dos filas de log** de agosto y septiembre en §9b (siguen sin estar).
7. **Cloudflare delante de GitHub Pages** (`ACTION-PLAN-2026-08.md` 0.3): es lo único que haría visibles los hits de GPTBot/ClaudeBot/PerplexityBot sobre los `.md`. Sin logs, §1 se mide solo por citas.
8. Verificar o crear los perfiles que `audit-sameas` (§2.3) reporte como muertos.

---

## 10. Orden de ejecución y tabla resumen

| Semana | Ítems | Agente | PRs |
|---|---|---|---|
| 1 | 1.1, 1.2, 1.3, 1.4, 2.2, 2.6, 2.7, 3.1, 3.2 | `seo-technical` + `seo-schema` | 3 PRs: twins, grafo base, frescura |
| 2 | 2.1, 2.3, 2.4, 2.5, 4.1, 4.2 | `seo-schema` + `seo-content` | 3 PRs: entidad, glosario, MCP |
| 3 | 5.1, 5.2, 6.1, 7.1, 7.2 | `seo-technical` | 3 PRs: datasets, IndexNow, geo-probe |
| 4 | 8.1, 8.2, 8.3 | `seo-content` | 2 PRs |

| ID | Acción | Impacto GEO | Esfuerzo | Gate nuevo |
|---|---|---|---|---|
| 1.1 | Enlaces `.md` → `.md` | Alto | 2 h | `markdown-twin-links-html` |
| 1.2 | CTAs fuera del twin | Alto | 2 h | `markdown-twin-cta-leak` |
| 1.3 | Cards → tablas | Medio | 4 h | `markdown-twin-glued-inline` |
| 1.4 | Frontmatter autor + summary | Medio | 2 h | extensión de `markdown-without-frontmatter` |
| 2.1 | Person único con `@id` | Alto | 2 h | `person-entity-split` |
| 2.2 | `publisher` por `@id`, Org en todas | Alto | 2 h | `publisher-not-linked`, `org-graph-missing` |
| 2.3 | `sameAs` verificados | Medio | 2 h | `audit-sameas.mjs` en cron |
| 2.4 | `about`/`mentions` con Wikidata | Alto | 4 h | `about-without-sameAs` |
| 2.5 | Glosario `@id` + frase definitoria | Medio | 3 h + reescrituras | `glossary-no-definition-sentence` |
| 2.6 | `inLanguage` automático | Medio | 1 h | `schema-inlanguage-mismatch` |
| 2.7 | Brand string en CLAUDE.md | Bajo | 10 min | — |
| 3.1 | `PostByline` + "Updated" visible | Medio | 4 h (108 ficheros, mecánico) | `date-modified-not-visible` |
| 3.2 | `lastmod` ≥ `dateModified` | Bajo | 30 min | test |
| 4.1 | HowTo MCP visible + schema | Alto | 4 h | `howto-schema-not-visible` |
| 4.2 | Instrucciones para agentes en `llms.txt` | Alto | 2 h | encabezado obligatorio en `audit-llms-txt` |
| 5.1 | Datasets descargables | Alto | 6 h | `dataset-distribution-404` |
| 5.2 | `@id` en claims | Bajo | 30 min | — |
| 6.1 | IndexNow en deploy | Alto | 3 h | paso de workflow |
| 7.1 | `geo-probe.mjs` + cron | Alto (mide todo lo demás) | 8 h | — |
| 8.1 | FAQ CNIL/AEPD | Medio | 3 h | FAQ visible (existente) |
| 8.3 | Checklist descargable | Medio | 2 h | `dataset-distribution-404` |

**Cómo saber que el plan funciona (run de octubre, §7.1):** el primer cambio observable esperado no es un prompt ganado, sino que `/ai-analytics` y `/blog/gdpr-eprivacy-analytics-legal-assessment` reaparezcan en los probes con marca y en los probes restringidos por dominio. Si eso no ocurre tras §9.1, el problema sigue siendo de hosts y ningún ítem de §1-8 lo va a mover por sí solo.
