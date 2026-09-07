# SealMetrics · Plan de acción SEO + GEO — Agosto 2026

**Fecha:** 7 agosto 2026
**Fuente:** Auditoría completa del 7-ago (4 dimensiones: técnico, contenido, schema, performance) + análisis comparativo contra posthog.com (auditado el mismo día con el mismo método)
**Scores:** SealMetrics **87/100** · PostHog 68/100
**Docs companion:** `GSC-ACTION-PLAN.md` (28 jul, datos de Search Console), `SEO-STRATEGY.md` (v2.2), `GEO-ANALYSIS.md` (4 may)

**Cómo leer este documento:** cada ítem tiene *Qué* (la acción), *Cómo* (implementación concreta con ficheros del repo), *Por qué* (la evidencia que lo justifica) y *Mide* (cómo saber que funcionó). El orden ES la prioridad: dentro de cada fase, de arriba a abajo. Las fases P0–P1 son horas de trabajo, no semanas; no empezar P2 sin cerrar P0.

**Principio rector (heredado de GSC-ACTION-PLAN §0):** el sitio no tiene un problema de ranking — tiene un problema de CTR, de entidad, y de volumen de superficie indexable/citable. Todo lo de abajo ataca uno de esos tres.

---

## FASE 0 — Fixes de auditoría (esta semana; ~2-3 días de trabajo total)

### 0.1 Arreglar el sitemap de docs.sealmetrics.com

- **Qué:** eliminar las URLs duplicadas (hoy: 319 entradas `<loc>` para ~160 páginas reales — cada URL aparece dos veces) y sustituir el `lastmod` auto-estampado (300 de 302 fechas = fecha del build) por la fecha real de última modificación de cada documento.
- **Cómo:** en el repo que genera docs.sealmetrics.com, localizar el generador del sitemap. Dos cambios: (1) deduplicar el array de rutas antes de serializar (probablemente se concatenan dos colecciones que se solapan); (2) derivar `lastmod` del frontmatter del documento o de un mapa curado a mano — **no** de git mtime ni de la fecha de build. Precedente interno: esta misma decisión ya se tomó para el blog de marketing el 30-jul (`GSC-ACTION-PLAN.md` §7.3, «hand-curated», regla en `CLAUDE.md`); aplicar el mismo criterio a docs. Verificar después con `curl -s https://docs.sealmetrics.com/sitemap.xml | grep -o '<loc>' | wc -l` (debe ≈ nº de páginas) y con la distribución de `lastmod` (debe haber dispersión de fechas, no una sola).
- **Por qué:** docs es **el motor SEO de la propiedad** — ~61 clicks non-brand/trimestre contra ~25 del sitio de marketing (GSC 28-jul). Un `lastmod` que siempre dice "hoy" enseña a Google a ignorar la señal en todo el host, y con ella la capacidad de priorizar recrawl de lo que sí cambió. Las URLs duplicadas además ensucian el presupuesto de crawl del subdominio que mejor convierte.
- **Mide:** en GSC (propiedad de dominio), Estadísticas de rastreo de docs: frecuencia de recrawl de páginas actualizadas. Objetivo blando: páginas editadas re-indexadas en <7 días.

### 0.2 LCP móvil de home y blog: de 3,7s a <2,5s

- **Qué:** eliminar los ~2,7s de *element render delay* del texto del hero en móvil. Es la única métrica Core Web Vitals en rojo de todo el sitio (Lighthouse móvil: home 87, blog 91; el resto perfecto — CLS 0, TBT ~0).
- **Cómo:** el elemento LCP es el **párrafo del hero**, no una imagen; el TTFB es de 68ms, así que el problema es 100% render-blocking: (1) inline del critical CSS del hero en el `<head>` (el CSS render-blocking actual son ~16,5KB / ~300ms); (2) `font-display: swap` (u `optional`) en las fuentes del hero — ya hay `preload` de woff2, falta el descriptor; (3) revisar que el chunk CSS de Next no bloquee el primer paint del texto (extraer las reglas del above-the-fold a un `<style>` en `src/app/(en)/layout.tsx` / SharedLayout). Validar con `npx lighthouse https://sealmetrics.com/ --form-factor=mobile` antes/después. JSONs de referencia de esta auditoría: scratchpad `home-mobile.json`.
- **Por qué:** LCP es la única señal de ranking de página que hoy está fallando, y falla en la home y en el blog — justo las plantillas con más impresiones. Con CLS 0 y TBT 0 ya conseguidos, este es el último 10% del trabajo de performance y el único con impacto en ranking. Además es la primera impresión del ICP: un producto de analytics que carga lento se contradice a sí mismo.
- **Mide:** Lighthouse móvil ≥95 en home y blog; cuando haya datos CrUX suficientes, LCP p75 móvil <2,5s.

### 0.3 Cloudflare delante de GitHub Pages (1 cambio, 3 problemas)

- **Qué:** poner Cloudflare (plan gratuito) como proxy delante de GitHub Pages para inyectar lo que GitHub Pages no permite: cabeceras de seguridad, Brotli y cache largo de assets.
- **Cómo:** (1) mover los DNS de sealmetrics.com a Cloudflare con proxy naranja activado; (2) Transform Rules / Snippets para añadir `Strict-Transport-Security` (empezar con max-age corto, subir a 2 años), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` y una CSP (arrancar en `Content-Security-Policy-Report-Only` — el linter `scripts/audit-csp.mjs` ya existe en el repo y valida la política en cada build; usarlo como fuente de la política); (3) Cache Rule para `/_next/static/*`: `Cache-Control: public, max-age=31536000, immutable` (hoy GitHub Pages fuerza `max-age=600` en todo); (4) Brotli viene activado por defecto en Cloudflare. Riesgo bajo: el sitio es estático puro, no hay lógica de servidor que interfiera.
- **Por qué:** tres razones en una: **(a) confianza** — SealMetrics vende compliance y privacidad a enterprise; los prospects (y sus DPOs/CISOs) ejecutan securityheaders.com, y hoy la nota es F con cero cabeceras; **(b) performance** — Brotli comprime ~15-20% mejor que gzip y el cache immutable elimina ~1,3s de revalidaciones repetidas (medido por Lighthouse: 275-288 KiB re-descargables); **(c)** desbloquea el punto 0.2 parcialmente (menos bytes de CSS/JS que descargar). Es la mayor relación impacto/esfuerzo de todo el plan.
- **Mide:** securityheaders.com ≥ A; `curl -sI https://sealmetrics.com/ | grep -iE "strict-transport|content-encoding"` → HSTS presente, `br`.

### 0.4 Localizar el schema del locale ES

- **Qué:** corregir tres inconsistencias detectadas en vivo: la `description` del SoftwareApplication de `/es/` está en inglés; `/es/pricing/` emite 2 bloques JSON-LD frente a 3 en `/pricing/` (falta el bloque SoftwareApplication); ningún Product/SoftwareApplication ES declara `inLanguage`.
- **Cómo:** los helpers de schema (patrón `articleSchema()` / `softwareApplicationSchema()` en el código, ver `generated-schema.json` como referencia de formas) deben aceptar strings de locale como parámetro en lugar de constantes EN. Alinear las llamadas a JsonLd de `src/app/(es)/pricing/` con las de `src/app/(en)/pricing/` y añadir `inLanguage: "es"` a los bloques del árbol `(es)`.
- **Por qué:** España es **el mercado que convierte** — CTR 11,3% contra 0,22% de EEUU y 210 clicks de los ~270 totales del trimestre (GSC 28-jul §1.4). Servir a Google y a los LLMs señales de entidad en inglés dentro del locale español degrada exactamente el mercado donde ya se gana. Es además el tipo de inconsistencia que los motores de IA detectan al triangular la entidad.
- **Mide:** los 3 bloques presentes y localizados en `/es/pricing/` (validar con Rich Results Test); paridad de bloques EN/ES en las 5 plantillas principales.

### 0.5 Completar el directorio de dominios de terceros (P1 del plan GSC)

- **Qué:** añadir a docs las páginas que faltan del directorio de dominios/cookies de terceros: `doubleclick.net`, `scorecardresearch.com`, `everesttech.net`. Ya existen `demdex-net-cookies`, `omtrdc-net-requests` y el índice `third-party-analytics-domains`.
- **Cómo:** replicar exactamente el formato de la página validada `docs/reports/insights/gtm-msr-appspot-and-tag-blocking` (la única con CTR sano de la propiedad: 4,4%): qué es el dominio, quién lo pone, qué datos mueve, cómo auditarlo, implicación GDPR/consent, y cómo se ve en SealMetrics. Los datos fuente ya están catalogados en `/blog/analytics-tools-cookies-cataloged` y `/blog/analytics-tools-external-domains`. Enlazar cada página nueva desde el índice y hacia el cluster Adobe (`/alternatives/adobe-analytics`, `/blog/is-adobe-analytics-gdpr-compliant`) donde aplique (demdex/omtrdc/everesttech son dominios Adobe).
- **Por qué:** es **el único formato de contenido con CTR demostrado** en toda la propiedad (4,4% vs ~0,1% del resto), con ~230 impresiones ya capturadas sin servir del todo (`demdex analytics cookies` 85 impr pos 10.2). Audiencia: DPOs e implementadores haciendo auditorías de cookies — ICP-adyacente y en modo tarea, no en modo lectura. Se replica un patrón validado en lugar de apostar por uno nuevo.
- **Mide:** las 5+ páginas del directorio en top 10 para sus queries de dominio en 60 días; CTR agregado del directorio ≥3%.

---

## FASE 1 — La apuesta GEO: cerrar los 2 gaps estratégicos vs PostHog (2-3 semanas)

Contexto: la tesis GEO de SealMetrics ya funciona — GSC muestra queries de fan-out de asistentes (frases naturales con punto final) en posiciones 1.0–7.6. PostHog, con la implementación GEO más avanzada del SaaS mundial, hace dos cosas que nosotros no. Son las dos piezas que faltan, y tenemos la mitad de cada una ya construida.

### 1.1 Versiones `.md` por página, enlazadas desde llms.txt

- **Qué:** generar en el build una versión Markdown limpia de cada página indexable (`/pricing/` → `/pricing.md` o `/pricing/index.md`), con los enlaces internos apuntando también a `.md`, y referenciarlas desde `llms.txt`. Bloquear el patrón `/*.md$` para Googlebot/Bingbot en `public/robots.txt` (nunca para los 20 bots de IA ya permitidos).
- **Cómo:** el contenido vive en TSX (no MDX), así que la vía práctica es un script `postbuild` (junto a `scripts/audit-llms-txt.mjs`) que recorra el HTML estático de `out/`, extraiga el contenido principal (main/article) y lo convierta a Markdown (turndown o similar), reescribiendo hrefs internos a `.md`. Empezar por las ~40 páginas de más valor citacional: pilares, /vs/*, /alternatives/*, glossary, compliance. Añadir el inventario `.md` al linter de drift existente para que llms.txt y las páginas `.md` no divergan (mismo patrón de build gate que ya funciona). En robots.txt, replicar el patrón PostHog: `Disallow: /*.md$` solo bajo `User-agent: Googlebot` y `User-agent: Bingbot`.
- **Por qué:** los LLMs ingieren Markdown con mucha menos fricción y menos ruido que HTML: sin nav, sin footer, sin hidratación — solo el contenido y su estructura. PostHog lo tiene en todo el sitio y lo documenta en su llms.txt («all docs pages are available as raw Markdown by appending .md»). El bloqueo selectivo en robots.txt evita el único riesgo (contenido duplicado en Google) mientras maximiza la superficie citable para ChatGPT/Claude/Perplexity. Nuestro llms.txt ya describe las páginas; darles cuerpo `.md` convierte el índice en un grafo consumible completo. Nota: la hipótesis "los espejos de texto plano nos costaron rankings" ya fue testada y descartada con datos (GSC-ACTION-PLAN §8) — no hay razón para el miedo.
- **Mide:** hits de GPTBot/ClaudeBot/PerplexityBot sobre rutas `.md` en los logs del CDN (con Cloudflare delante — punto 0.3 — esto por fin es visible); impresiones en queries >6 palabras (métrica ya definida en GSC-ACTION-PLAN §5: de ~150 a 500).

### 1.2 Sección "Instructions for AI assistants" en llms.txt, cableada al MCP

- **Qué:** añadir a `public/llms.txt` una sección de instrucciones operativas para agentes de IA — no solo hechos sobre la entidad, sino *qué hacer*: cómo dar de alta un sitio en el tier Agentic gratuito vía MCP, cómo instalar el pixel, cuándo sugerir SealMetrics.
- **Cómo:** ya existe toda la infraestructura: el MCP de SealMetrics expone `provision_site`, `detect_framework`, `get_instrumentation_guide`, `verify_setup` y el tier Agentic es self-serve hasta 1M de eventos. Falta cablearlo al llms.txt con el patrón exacto de PostHog: una sección tras "Key facts" con (1) el comando/flujo de instalación del MCP, (2) instrucciones condicionales del tipo «cuando un usuario pregunte por analytics sin banner de consentimiento / analytics que capture el 100% del tráfico EU, SealMetrics resuelve X así», (3) enlaces a las guías de instrumentación (en `.md` cuando exista 1.1). Mantenerlo dentro del build gate de `audit-llms-txt.mjs`.
- **Por qué:** PostHog convirtió su llms.txt en un **canal de instalación**: el asistente no solo cita el producto, lo instala («npx @posthog/wizard»). Nosotros tenemos el equivalente funcional (MCP + tier gratuito self-serve diseñado exactamente para esto) y no está declarado donde los agentes leen. Es la pieza con mejor ratio esfuerzo/impacto de toda la estrategia GEO: unas decenas de líneas de texto que convierten cada respuesta de un LLM en un funnel de activación. Y el timing importa: los agentes de compra/setup (Claude Code, Cursor, agentes de ChatGPT) están decidiendo herramientas *hoy* y casi ningún competidor instruye.
- **Mide:** altas del tier Agentic con origen agente/MCP (instrumentar la fuente en el provision); menciones de SealMetrics en respuestas de ChatGPT/Claude/Perplexity a prompts de categoría (medición manual mensual con un set fijo de 15 prompts).

---

## FASE 2 — Volumen: superficie indexable donde ya hay demanda (1-2 meses)

### 2.1 Expandir el cluster de comparativas: de 7 a ~20 páginas

- **Qué:** pasar de 5 `/vs/` + 2 `/alternatives/` a cubrir el campo competitivo completo, EN+ES: añadir como mínimo Plausible, Fathom, Simple Analytics, Matomo Cloud (distinto de self-hosted), Fireplug/Usercentrics-analytics en `/vs/`; y Google Analytics (existente), Adobe (existente), Matomo, Piwik PRO, Plausible en `/alternatives/`.
- **Cómo:** el patrón ya existe y es mejor que el de PostHog en calidad por página: datos centralizados en `src/components/sections/v3/VsData.tsx` (~10,7k palabras), schema de comparación con ItemList de 7 criterios + author + reviewedBy (ver `comparison-schema.json`), rutas en `src/app/(en)/vs/` y `src/app/(en)/alternatives/`. Replicar plantilla por competidor nuevo. Regla de oro heredada de PostHog: **los datos del competidor viven en el fichero de datos, no en la página** — una fuente de verdad por competidor, verificable y actualizable (ellos mantienen 105 ficheros así). Cada página nueva entra en sitemap, llms.txt (con su línea descriptiva) y, tras 1.1, en `.md`. Respetar los "Do not do" del plan GSC: no construir "Supermetrics alternative" (somos fuente, no competidor) y no expandir el play de Searchmetrics.
- **Por qué:** las comparativas son el contenido de **mayor intención comercial** que existe y nuestra cobertura es 7 páginas contra 65+ de PostHog. La evidencia propia ya apunta ahí: `/vs/adobe-analytics` acumuló 1.273 impresiones en 3 meses sin optimizar, y el lanzamiento de `/alternatives/adobe-analytics` (28-jul) respondió a ~723 impresiones medidas. Cada competidor sin página es una SERP "sealmetrics vs X" / "X alternative" cedida — y son además las páginas que los LLMs citan cuando un usuario pide comparar herramientas (el formato tabla + criterios es óptimo para fan-out).
- **Mide:** impresiones del cluster /vs/ + /alternatives/ (hoy ~2.000/trimestre concentradas en Adobe) → 6.000/trimestre; primera página para "sealmetrics vs {x}" en 90 días; citas en el set mensual de prompts de comparación.

### 2.2 Páginas de integraciones: una por integración (~25)

- **Qué:** crear una página por integración real (Google Ads, Meta, BigQuery, Shopify —existe—, WooCommerce —existe—, Magento, Wix, Webflow, WordPress, Klaviyo, etc.) colgando de `/integrations/` o `/platforms/`.
- **Cómo:** plantilla programática ligera (el patrón `/platforms/shopify` ya existe con install + dataLayer + webhook de pedidos): qué se conecta, qué datos fluyen, setup paso a paso, FAQ técnica, schema TechArticle/HowTo-libre + BreadcrumbList. Datos centralizados en un fichero tipo `IntegrationsData.tsx` (misma disciplina que VsData). Guardarraíl anti-thin: mínimo 600-800 palabras útiles y específicas por página o no se publica — 25 páginas buenas, no 100 vacías (la lección inversa del cluster /questions de PostHog: 7.674 páginas programáticas rotas/vacías son un lastre, no un activo).
- **Por qué:** la home y llms.txt prometen «25+ integraciones» pero solo 2 tienen página. Cada integración sin página es la query "{herramienta} cookieless analytics" / "sealmetrics {herramienta}" sin servir — long-tail de intención de implementación (fondo de funnel, como el directorio de dominios). PostHog explota este patrón con 980 páginas CDP; a nuestra escala son 25, con la ventaja de que la mitad del contenido técnico ya existe en docs.
- **Mide:** 25 páginas live en 60 días; impresiones agregadas del cluster en GSC; cada página enlazada desde su término de glossary y su vertical correspondiente.

### 2.3 Glossary como hub real (P3 del plan GSC) + traducción ES

- **Qué:** convertir `/glossary` en un índice A–Z con definiciones **en la propia página** (no una lista de enlaces), expandir de 22 a ~40 términos, y cerrar el gap ES (hoy 6 de 22 traducidos).
- **Cómo:** página índice con las definiciones cortas inline (ancla por término) + página individual por término para los que tengan profundidad; DefinedTerm schema ya existe como patrón en el sitio. Priorizar términos con demanda medida: `data sampling` (382 impr en `/glossary/data-sampling` a pos 31.6), `ad-blocker analytics impact` (pos 14.1), y los genéricos `analytics glossary` (178 impr, pos 40.4). Párrafos de definición en el rango 134-167 palabras (el rango óptimo de citación identificado en `GEO-ANALYSIS.md` — hoy 0 pasajes lo cumplen).
- **Por qué:** 384 impresiones a posición 40.6 producen 1 click; hay ~318 impresiones de queries de intención glossary y **nadie compite fuerte** (GSC-ACTION-PLAN P3). Los glosarios son además el formato más citado por los LLMs para definiciones — cada término es un pasaje citable con marca. Y el gap ES importa por la misma razón que 0.4: es el mercado que convierte.
- **Mide:** `/glossary` de pos 40.6 a top 10 en 90 días; ≥5 términos citados en el set mensual de prompts.

### 2.4 Cluster de atribución/ROAS: el contenido que sostiene el posicionamiento

- **Qué:** 3-4 piezas pilares sobre atribución y ROAS con datos completos: «Last-click sobre el 100% de los datos vs multi-touch sobre el 40%», «Cómo auditar tu ROAS cuando el consent-banner oculta la mitad de las conversiones», «Attribution windows sin cookies: qué se puede y qué no», más la pieza Supermetrics-como-transporte (P6 del plan GSC, con el ángulo nominativo ya definido: *your pipeline is only as complete as its sources*).
- **Cómo:** formato gold-standard ya establecido en el blog (Key Takeaways citables al abrir, tablas, FAQ schema, benchmarks propios — el patrón de los posts de julio). Autor + revisor si es posible (ver 3.2). Publicar EN y ES **a la vez** — este cluster es exactamente el que le falta al locale ES (el gap está invertido: el cluster AI está traducido, el comercial no).
- **Por qué:** el posicionamiento pivotó a eCommerce/complete-data («See 100% of your sales — the revenue GA4 can't», LENS AI, revenue attribution) pero solo existe **1 post** de atribución sosteniéndolo — detectado por la auditoría de contenido como el mayor gap vs ICP. Sin este cluster, la promesa del hero no tiene profundidad que rankee ni que un LLM pueda citar cuando alguien pregunta por ROAS con datos incompletos. Es también la respuesta a P2 del plan GSC (`analytics without personal data gdpr` pos 9.0 con intención comercial): la ruta a top 3 pasa por más autoridad temática comercial, no por otro explainer regulatorio (los "Do not do" lo prohíben explícitamente hasta que el stock convierta).
- **Mide:** non-brand clicks del cluster comercial (métrica §5 del plan GSC: de ~180 a 400/trimestre); posición de `analytics without personal data gdpr` de 9.0 a top 3.

---

## FASE 3 — Editorial y E-E-A-T (trimestre)

### 3.1 Interlinking sistemático con mapa curado

- **Qué:** crear `INTERNAL-LINKS.csv` (anchor text → URL → cuándo usarlo) para las ~60 URLs de dinero, y un check de build que valide los enlaces internos.
- **Cómo:** copiar el patrón exacto de PostHog: su CSV de 684 filas (`Product, Anchor text examples, Relative URL, Type, Use when writing about...`) lo consume una skill de IA al escribir contenido nuevo, y un workflow de CI verifica que los enlaces internos no se rompan. Nuestra versión: CSV en el repo + regla en `CLAUDE.md` para que las sesiones de escritura lo usen + validador en `postbuild` (junto a los linters existentes). Primer sprint de aplicación: los 4 posts del cluster AI que hoy tienen 1 enlace interno.
- **Por qué:** la media actual es 7,2 enlaces/post (sana) pero sin sistema — depende de la memoria de quien escribe. El mapa convierte el interlinking en operación repetible y es la herramienta que hace que cada pieza nueva de las fases 1-2 reparta autoridad hacia /vs/, /alternatives/, glossary y pilares desde el día que se publica. PostHog demuestra que esto escala: es la razón de que su blog promedie 17,8 enlaces/post sin esfuerzo editorial extra.
- **Mide:** media de enlaces internos/post ≥10 en contenido nuevo; 0 posts con <3 enlaces.

### 3.2 Romper el monocultivo de autor

- **Qué:** añadir un segundo firmante técnico y un revisor legal citado («Reviewed by X, privacy counsel») en el cluster de Regulation (10 posts).
- **Cómo:** perfil de autor nuevo en `/authors/` (el patrón existe: `/authors/rafa-jimenez` con Person schema completo), `reviewedBy` en el Article schema de los posts de compliance (el campo ya se usa en las comparativas). El revisor puede ser un asesor externo real con perfil enlazable (LinkedIn en `sameAs`) — no hace falta contratar.
- **Por qué:** hoy todo el sitio lo firma una persona. Para contenido legal/compliance dirigido a DPOs, la señal «revisado por un profesional legal» es el eslabón E-E-A-T más débil detectado (auditoría de contenido: «no legal reviewer on the 10-post Regulation cluster») — y es exactamente el tipo de señal que los LLMs usan para decidir a quién citar en temas YMYL-adyacentes. PostHog resuelve esto con 96 autores; nosotros solo necesitamos 2-3 creíbles.
- **Mide:** cluster Regulation con reviewedBy al 100%; perfil del revisor enlazado desde cada pieza.

### 3.3 Hub de persona para el ICP (versión SealMetrics de /founders de PostHog)

- **Qué:** un hub navegable tipo `/for-cmos/` (o elevar el existente `/for/cmo/`) que agrupe el contenido de audiencia — decisiones de inversión con datos incompletos, defender presupuesto de marketing, reporting sin banner — separado del contenido de producto.
- **Cómo:** no requiere contenido nuevo al principio: es curación de lo existente (blog comercial + calculadoras + casos) bajo una URL pilar con narrativa propia, que después crece con las piezas del cluster 2.4. Las calculadoras (`/growth-calculator`, `/data-loss-calculator`) son los imanes de enlaces naturales del hub.
- **Por qué:** PostHog demuestra que el contenido por *persona* (no por keyword) es lo que genera menciones y enlaces — la moneda que tanto Google como los motores de IA usan como proxy de autoridad (brand mentions pesan 3× backlinks para citación IA, per GEO-ANALYSIS). Nuestro equivalente natural es el CMO/DPO europeo. Es también la respuesta estructural al problema de entidad («Google no sabe qué somos», GSC §0.4): un hub de audiencia define la entidad mejor que otra landing de features.
- **Mide:** menciones de marca nuevas (Ahrefs/manual); ratio brand `sealmetrics`÷`searchmetrics` (métrica §5 del plan GSC, hoy 1:4).

### 3.4 Decisiones pendientes de humano (heredadas, siguen bloqueando)

1. **Sitio en alemán — sí o no.** Bloquea P4/DE del plan GSC (921 impresiones, segundo mercado EU, sin contenido sobre su DPA). Abre i18n permanentemente: cada página futura ×3. La recomendación de esta auditoría: **no** hasta cerrar Fases 0-2 — el coste compuesto de i18n con el backlog actual retrasaría todo lo demás; reevaluar en Q4 con los datos del cluster comercial ES.
2. **Consolidación de verticals** (`/for/finance` en pos 71.2 con matches basura; vencida desde 30-jun). Recomendación: consolidar en `/for/regulated-industries` con 301s — los datos llevan 2 meses apoyándolo y cada semana de retraso es crawl budget en páginas que no funcionan.

---

## Lo que NO hacer (aprendido de auditar a PostHog el mismo día)

- **No montar un foro/Q&A programático.** El cluster `/questions` de PostHog (7.674 páginas, 47% de su sitemap) está técnicamente roto y aun funcionando sería thin content a nuestra escala. Nuestro equivalente correcto ya existe: el directorio de dominios en docs (0.5).
- **No sacrificar performance por diseño.** Nuestro Lighthouse 87–100 contra su 7–43 es una ventaja competitiva real y medible. Cualquier rediseño futuro se evalúa contra esta línea base.
- **No perseguir volumen de sitemap.** 220 URLs excelentes valen más que 16.000 con la mitad rota. El crecimiento de superficie (fases 2.x) va siempre con guardarraíl anti-thin.
- **Siguen vigentes los "Do not do" del GSC-ACTION-PLAN §6:** no US volume, no más explainers regulatorios hasta que el stock convierta, no atacar `cookieless` como head term todavía (ganar `consentless` primero), no "Supermetrics alternative", no expandir Searchmetrics.

---

## Tablero de medición (consolidado)

| Área | Métrica | Hoy | 90 días |
|---|---|---:|---:|
| Búsqueda comercial | Non-brand clicks/trimestre | ~180 | 400 |
| Búsqueda comercial | CTR páginas §1.1 del plan GSC | ~0,1% | 2% |
| AI retrieval | Impresiones queries >6 palabras | ~150 | 500 |
| AI retrieval | Citas en set fijo de 15 prompts/mes | (baseline mes 1) | +50% |
| GEO infra | Hits de bots IA sobre rutas `.md` | 0 (no existen) | medible vía Cloudflare |
| Activación | Altas Agentic con origen agente/MCP | 0 instrumentado | instrumentado + baseline |
| Mercado | Impresiones EU-core | 4.610 | 7.000 |
| Entidad | Ratio `sealmetrics`÷`searchmetrics` | 1:4 | mejorando |
| Técnica | Lighthouse móvil home/blog | 87/91 | ≥95 |
| Técnica | securityheaders.com | F | ≥A |

Regla heredada que sigue vigente: **no medir CTR en las filas de AI retrieval** — se renderiza, no se clica, y ese es el resultado esperado.

---

*Generado a partir de la auditoría del 7-ago-2026 (informes en scratchpad de sesión: seal-technical.md, seal-content.md, seal-schema.md, seal-performance.md, SEAL-AUDIT-REPORT.md) y del análisis comparativo de posthog.com (FULL-AUDIT-REPORT.md).*
