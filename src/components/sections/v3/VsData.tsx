import type { VsData } from "./VsComparisonV3";

type Locale = "en" | "es";
export type VsKey = "ga360" | "adobe-analytics" | "piwik-pro" | "google-analytics";

export function getVsData(key: VsKey, locale: Locale): VsData {
  const data: Record<VsKey, Record<Locale, Omit<VsData, "locale">>> = {
    ga360: {
      en: {
        competitor: "GA360",
        hook: "GA360 starts at $150,000/year. Enterprise-grade pricing, but the same cookie and consent architecture as free GA4. Complete EU data still requires consent.",
        eyebrow: "vs Google Analytics 360",
        h1: <>Enterprise data <em>without the $150K invoice.</em></>,
        lede: "GA360 costs six figures per year and still loses the same 40–60% of EU traffic that free GA4 loses — because the architecture is identical. SealMetrics is complete data, EU-hosted, from €499/mo.",
        gapStats: [
          { n: "$150K+", label: "Annual cost", detail: "Starts at $150,000/year. Billed annually upfront." },
          { n: "40–60%", label: "Still cookie-dependent", detail: "Same consent rejection loss as free GA4." },
          { n: "US-hosted", label: "Schrems II exposure", detail: "EU data transfers to Google infrastructure." },
          { n: "12 months", label: "Minimum contract", detail: "Annual lock-in. Negotiation via Google sales." },
        ],
        comparison: [
          { category: "Pricing", rows: [
            { feature: "Starting price", them: "$150,000/yr annual commit", us: "€499/mo · no annual commit" },
            { feature: "Billing model", them: "Enterprise sales negotiation", us: "Self-serve · transparent pricing" },
            { feature: "Contract length", them: "12-month minimum", us: "Monthly or annual (2 months free)" },
          ]},
          { category: "Data capture", rows: [
            { feature: "Cookie-dependent", them: "Yes", us: "No · cookieless by design" },
            { feature: "Consent required", them: "Yes · 40–60% reject in EU", us: "No · 100% captured" },
            { feature: "Sampling", them: "Above thresholds", us: "Zero sampling" },
          ]},
          { category: "Infrastructure", rows: [
            { feature: "Data residency", them: "US · Google infra", us: "EU · Dublin, Ireland" },
            { feature: "Schrems II", them: "Exposed", us: "Clean" },
            { feature: "BigQuery export", them: "Included (sampled above 10M/day)", us: "Full resolution · no limits" },
          ]},
          { category: "AI & modern stack", rows: [
            { feature: "MCP server", them: "No", us: "Native" },
            { feature: "Real-time (<2 min)", them: "Partial", us: "Yes · all plans" },
          ]},
        ],
        faqs: [
          { q: "Isn't GA360 more accurate than free GA4?", a: "Only on certain dimensions. GA360 removes sampling thresholds on BigQuery export and adds some advanced features, but uses the same cookie + consent architecture. Your 40–60% consent rejection loss is identical. Premium GA4 = premium incomplete data." },
          { q: "What about GA360's enterprise features?", a: "GA360 adds SLAs, dedicated support and custom data retention. SealMetrics Enterprise includes the same — plus isolated processing, custom DPA and a dedicated account manager. At a fraction of the cost." },
          { q: "Can we migrate gradually from GA360?", a: "Yes. Run both in parallel. Most customers keep GA360 for Google Ads integration during the transition and move strategic reporting to SealMetrics. Usually takes 60–90 days to fully decommission GA360." },
          { q: "Is there a way to compare costs directly?", a: "Yes. For a typical large eCommerce (15M events/month), GA360 ≈ $150K/yr vs. SealMetrics Scale = €10,788/yr — about 93% cheaper, with more complete data." },
        ],
        ctaTitle: <>Get enterprise data. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Skip the $150K invoice.</em></>,
        ctaLede: "30-minute walkthrough with the founder. We'll show your GA360 numbers next to SealMetrics on your own traffic — you see the gap and the savings.",
      },
      es: {
        competitor: "GA360",
        hook: "GA360 arranca en 150.000$/año. Precio enterprise, misma arquitectura de cookies y consentimiento que GA4 gratis. Los datos UE completos siguen requiriendo consentimiento.",
        eyebrow: "vs Google Analytics 360",
        h1: <>Datos enterprise <em>sin la factura de 150K$.</em></>,
        lede: "GA360 cuesta seis cifras al año y sigue perdiendo el mismo 40–60% del tráfico UE que GA4 gratis — porque la arquitectura es idéntica. SealMetrics es dato completo, alojado en UE, desde €499/mes.",
        gapStats: [
          { n: "150K$+", label: "Coste anual", detail: "Arranca en 150.000$/año. Pagado anualmente por adelantado." },
          { n: "40–60%", label: "Sigue con cookies", detail: "Misma pérdida por rechazo de consentimiento que GA4." },
          { n: "US-hosted", label: "Exposición Schrems II", detail: "Transferencias UE a infra Google." },
          { n: "12 meses", label: "Contrato mínimo", detail: "Lock-in anual. Negociación vía Google sales." },
        ],
        comparison: [
          { category: "Precio", rows: [
            { feature: "Precio de entrada", them: "150.000$/año compromiso anual", us: "€499/mes · sin compromiso anual" },
            { feature: "Modelo facturación", them: "Negociación enterprise sales", us: "Self-serve · precio transparente" },
            { feature: "Duración contrato", them: "Mínimo 12 meses", us: "Mensual o anual (2 meses gratis)" },
          ]},
          { category: "Captura de datos", rows: [
            { feature: "Depende de cookies", them: "Sí", us: "No · sin cookies por diseño" },
            { feature: "Consentimiento", them: "Sí · 40–60% rechaza en UE", us: "No · 100% capturado" },
            { feature: "Muestreo", them: "Sobre umbrales", us: "Cero muestreo" },
          ]},
          { category: "Infraestructura", rows: [
            { feature: "Residencia de datos", them: "US · infra Google", us: "UE · Dublín, Irlanda" },
            { feature: "Schrems II", them: "Expuesto", us: "Limpio" },
            { feature: "Export BigQuery", them: "Incluido (muestreado sobre 10M/día)", us: "Resolución completa · sin límites" },
          ]},
          { category: "IA y stack moderno", rows: [
            { feature: "MCP server", them: "No", us: "Nativo" },
            { feature: "Tiempo real (<2 min)", them: "Parcial", us: "Sí · todos los planes" },
          ]},
        ],
        faqs: [
          { q: "¿No es GA360 más preciso que GA4?", a: "Solo en ciertas dimensiones. GA360 quita umbrales de muestreo en export BigQuery y añade features avanzadas, pero usa la misma arquitectura cookies + consentimiento. Tu 40–60% de pérdida por consentimiento es idéntico. GA4 premium = datos premium incompletos." },
          { q: "¿Y las features enterprise de GA360?", a: "GA360 añade SLAs, soporte dedicado y retención custom. SealMetrics Enterprise incluye lo mismo — más procesamiento aislado, DPA custom y account manager dedicado. A una fracción del coste." },
          { q: "¿Podemos migrar gradualmente desde GA360?", a: "Sí. Corre ambos en paralelo. La mayoría de clientes mantienen GA360 para integración Google Ads durante la transición y mueven el reporting estratégico a SealMetrics. Suele tardar 60–90 días retirar GA360 del todo." },
          { q: "¿Hay forma de comparar costes directamente?", a: "Sí. Para un eCommerce grande típico (15M eventos/mes), GA360 ≈ 150K$/año vs. SealMetrics Scale = 10.788€/año — ~93% más barato, con datos más completos." },
        ],
        ctaTitle: <>Consigue dato enterprise. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Sáltate la factura de 150K$.</em></>,
        ctaLede: "Walkthrough de 30 min con el founder. Te enseñamos tus números de GA360 junto a SealMetrics sobre tu propio tráfico — ves el gap y el ahorro.",
      },
    },
    "adobe-analytics": {
      en: {
        competitor: "Adobe Analytics",
        hook: "Adobe Analytics is powerful for enterprise reporting but requires specialists, enterprise contracts and the same consent-dependent data capture. In 2026, power tools working on incomplete data are a liability.",
        eyebrow: "vs Adobe Analytics",
        h1: <>Enterprise power. <em>Zero enterprise overhead.</em></>,
        lede: "Adobe Analytics delivers depth at the cost of complexity: dedicated analysts, implementation consultants and $100K+ annual contracts. SealMetrics delivers complete data with no specialists required — from €499/mo.",
        gapStats: [
          { n: "$100K+", label: "Annual cost", detail: "Plus implementation consulting fees." },
          { n: "3–6 months", label: "Implementation", detail: "Typical time to first value." },
          { n: "Specialist", label: "Required headcount", detail: "Teams need dedicated Adobe analyst." },
          { n: "40–60%", label: "Still consent-gated", detail: "Cookie-dependent capture. Same EU gap as GA." },
        ],
        comparison: [
          { category: "Pricing & time to value", rows: [
            { feature: "Starting price", them: "$100,000/yr + implementation fees", us: "€499/mo · no hidden fees" },
            { feature: "Implementation time", them: "3–6 months typical", us: "1 week to decision-ready" },
            { feature: "Required specialists", them: "Adobe-certified analyst on team", us: "Self-serve · founder onboarding" },
          ]},
          { category: "Data capture", rows: [
            { feature: "Cookie-dependent", them: "Yes · AppMeasurement library", us: "No · first-party server-side" },
            { feature: "EU consent rejection handling", them: "Banner-dependent", us: "Not applicable (no cookies)" },
            { feature: "Sampling", them: "Virtual Report Suites impact sampling", us: "Zero sampling" },
          ]},
          { category: "Infrastructure", rows: [
            { feature: "Data residency", them: "Configurable but complex", us: "EU-only · Dublin" },
            { feature: "Schrems II", them: "Requires separate legal review", us: "Clean by architecture" },
          ]},
          { category: "Modern stack", rows: [
            { feature: "MCP / AI-native", them: "Via separate Adobe Analytics AI", us: "Native MCP server" },
            { feature: "BigQuery export", them: "Via Customer Journey Analytics (premium)", us: "Included in all plans" },
          ]},
        ],
        faqs: [
          { q: "Adobe has far more features. Are you comparing apples to apples?", a: "For most eCommerce teams, Adobe Analytics' depth is unused. The 80% of features you need — channel attribution, funnel analysis, campaign reporting, BigQuery export — SealMetrics covers with complete data and no specialists. If you genuinely need Adobe's segmentation depth, Customer Journey Analytics is where it happens; we'd recommend keeping it and adding SealMetrics for complete data capture." },
          { q: "Can SealMetrics coexist with Adobe Experience Cloud?", a: "Yes. SealMetrics operates independently. Many enterprise customers run both — Adobe for deep segmentation, SealMetrics for complete data capture and the truth number shared across agencies and finance." },
          { q: "What about Customer Journey Analytics?", a: "CJA is Adobe's newer tool for cross-channel stitching. It still depends on the same AppMeasurement collection layer — same consent rejection loss. SealMetrics provides complete capture; your CJA does more interesting analytics on complete data instead of incomplete." },
          { q: "How hard is migration?", a: "No migration. Both tools run in parallel. Decide per use case where each serves best. Most teams move acquisition + attribution reporting to SealMetrics and keep Adobe for enterprise segmentation and email orchestration." },
        ],
        ctaTitle: <>Skip the <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>6-month implementation.</em></>,
        ctaLede: "30 minutes with the founder. SealMetrics installed in 15 minutes. Decision-ready in week one. No consultants, no specialists, no $100K invoice.",
      },
      es: {
        competitor: "Adobe Analytics",
        hook: "Adobe Analytics es potente para reporting enterprise pero requiere especialistas, contratos enterprise y la misma captura de datos dependiente del consentimiento. En 2026, herramientas potentes sobre datos incompletos son una liability.",
        eyebrow: "vs Adobe Analytics",
        h1: <>Potencia enterprise. <em>Cero overhead enterprise.</em></>,
        lede: "Adobe Analytics da profundidad a coste de complejidad: analistas dedicados, consultores de implementación y contratos de 100K$+ anuales. SealMetrics da dato completo sin especialistas — desde €499/mes.",
        gapStats: [
          { n: "100K$+", label: "Coste anual", detail: "Más fees de consultoría de implementación." },
          { n: "3–6 meses", label: "Implementación", detail: "Tiempo típico al primer valor." },
          { n: "Especialista", label: "Headcount requerido", detail: "Equipos necesitan analista Adobe dedicado." },
          { n: "40–60%", label: "Sigue con consentimiento", detail: "Captura dependiente de cookies. Mismo gap UE que GA." },
        ],
        comparison: [
          { category: "Precio y tiempo al valor", rows: [
            { feature: "Precio de entrada", them: "100.000$/año + fees implementación", us: "€499/mes · sin fees ocultos" },
            { feature: "Tiempo implementación", them: "3–6 meses típicamente", us: "1 semana a decisiones" },
            { feature: "Especialistas requeridos", them: "Analista certificado Adobe", us: "Self-serve · onboarding founder" },
          ]},
          { category: "Captura de datos", rows: [
            { feature: "Depende de cookies", them: "Sí · librería AppMeasurement", us: "No · first-party server-side" },
            { feature: "Manejo rechazo UE", them: "Dependiente de banner", us: "No aplica (sin cookies)" },
            { feature: "Muestreo", them: "Virtual Report Suites afectan muestreo", us: "Cero muestreo" },
          ]},
          { category: "Infraestructura", rows: [
            { feature: "Residencia", them: "Configurable pero compleja", us: "Solo UE · Dublín" },
            { feature: "Schrems II", them: "Requiere revisión legal aparte", us: "Limpio por arquitectura" },
          ]},
          { category: "Stack moderno", rows: [
            { feature: "MCP / IA nativa", them: "Vía Adobe Analytics AI aparte", us: "MCP server nativo" },
            { feature: "Export BigQuery", them: "Vía Customer Journey Analytics (premium)", us: "Incluido en todos los planes" },
          ]},
        ],
        faqs: [
          { q: "Adobe tiene muchas más features. ¿Comparación justa?", a: "Para la mayoría de equipos eCommerce, la profundidad de Adobe no se usa. El 80% de lo que necesitas — atribución canal, análisis funnel, reporting campaña, export BigQuery — SealMetrics lo cubre con datos completos y sin especialistas. Si realmente necesitas la profundidad de segmentación de Adobe, Customer Journey Analytics es donde ocurre; recomendamos mantenerlo y añadir SealMetrics para la captura completa." },
          { q: "¿Puede coexistir con Adobe Experience Cloud?", a: "Sí. SealMetrics opera independientemente. Muchos clientes enterprise corren ambos — Adobe para segmentación profunda, SealMetrics para captura completa y el número verdad compartido con agencias y finanzas." },
          { q: "¿Y Customer Journey Analytics?", a: "CJA es la herramienta más reciente de Adobe para stitching cross-canal. Sigue dependiendo de la misma capa AppMeasurement — misma pérdida por consentimiento. SealMetrics aporta captura completa; tu CJA hace analítica más interesante sobre datos completos en lugar de incompletos." },
          { q: "¿Qué tan difícil es migrar?", a: "Sin migración. Ambas corren en paralelo. Decides caso a caso dónde encaja cada una. La mayoría mueve reporting de adquisición + atribución a SealMetrics y mantienen Adobe para segmentación enterprise y orquestación email." },
        ],
        ctaTitle: <>Sáltate la <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>implementación de 6 meses.</em></>,
        ctaLede: "30 min con el founder. SealMetrics instalado en 15 min. Listo para decidir en semana uno. Sin consultores, sin especialistas, sin factura de 100K$.",
      },
    },
    "piwik-pro": {
      en: {
        competitor: "Piwik PRO",
        hook: "Piwik PRO offers EU-hosted analytics but is still cookie-based, consent-required, and priced for €30K+/yr contracts. The architecture is closer to GA4 than you'd expect — just hosted on European servers.",
        eyebrow: "vs Piwik PRO",
        h1: <>EU hosting is the <em>beginning</em>, not the finish line.</>,
        lede: "Piwik PRO runs in Europe — that's good. But it still uses cookies, requires consent, and loses the same EU traffic GA4 loses. SealMetrics solves the root problem: the architecture, not just the hosting.",
        gapStats: [
          { n: "€30K+", label: "Enterprise minimum", detail: "Enterprise plan starts around €30K/yr." },
          { n: "Cookie-based", label: "Same consent dependency", detail: "40–60% EU traffic still lost to rejection." },
          { n: "Banner required", label: "No compliance advantage", detail: "Needs consent banner like GA4." },
          { n: "Manual DPIA", label: "Per-cookie review", detail: "Cookie addition still triggers compliance scope." },
        ],
        comparison: [
          { category: "Pricing", rows: [
            { feature: "Entry plan", them: "Free (limited) / Enterprise from €30K/yr", us: "€499/mo from Growth" },
            { feature: "Implementation support", them: "Enterprise-only", us: "Founder-led on all plans" },
          ]},
          { category: "Data capture", rows: [
            { feature: "Cookies", them: "Yes · opt-in required", us: "None" },
            { feature: "Consent banner needed", them: "Yes", us: "No · outside GDPR scope" },
            { feature: "EU traffic captured", them: "60% typical with banner", us: "100% captured" },
          ]},
          { category: "Infrastructure", rows: [
            { feature: "Data residency", them: "EU (Germany options)", us: "EU (Dublin)" },
            { feature: "Schrems II", them: "Clean", us: "Clean" },
          ]},
          { category: "Modern stack", rows: [
            { feature: "MCP / AI integration", them: "No native support", us: "Native MCP server" },
            { feature: "BigQuery export", them: "Enterprise add-on", us: "Included from Growth" },
          ]},
        ],
        faqs: [
          { q: "Piwik PRO is also EU-hosted. Why is SealMetrics different?", a: "EU hosting solves data residency. It doesn't solve consent. Piwik PRO uses cookies, requires consent, and loses the same 40–60% of EU visitors. SealMetrics solves both: EU-hosted AND cookieless, so nothing gets lost to consent rejection." },
          { q: "Isn't Piwik PRO's consent-aware tracking enough?", a: "It depends on your risk appetite. Piwik PRO has a 'consentless tracking' mode, but it relies on interpreting RGPD/ePrivacy carve-outs that vary per jurisdiction (CNIL treats it differently from BfDI). SealMetrics takes no personal data at all — you're out of scope universally, no interpretation required." },
          { q: "What about their Customer Data Platform features?", a: "Piwik PRO bundles CDP features in higher tiers. If you need a CDP, pair SealMetrics with Segment/Rudderstack (more mature, better pricing). For pure analytics, SealMetrics is complete data at a fraction of Piwik PRO's enterprise cost." },
          { q: "Can I migrate from Piwik PRO?", a: "Yes. Run both 30 days. Compare traffic volumes (SealMetrics typically shows 30–70% more), compare attribution (SealMetrics attributes the 'direct' bucket correctly). Most teams decide within the first 14 days." },
        ],
        ctaTitle: <>EU hosting <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>plus complete capture.</em></>,
        ctaLede: "30 minutes. We run your site through SealMetrics and Piwik PRO simultaneously. You see how much of your EU traffic Piwik PRO's banner still loses.",
      },
      es: {
        competitor: "Piwik PRO",
        hook: "Piwik PRO ofrece analítica alojada en UE pero sigue siendo basada en cookies, requiere consentimiento y con precio de 30K€+/año. La arquitectura está más cerca de GA4 de lo que parece — solo alojada en servidores europeos.",
        eyebrow: "vs Piwik PRO",
        h1: <>El hosting UE es el <em>principio</em>, no la meta.</>,
        lede: "Piwik PRO corre en Europa — eso está bien. Pero sigue usando cookies, requiere consentimiento y pierde el mismo tráfico UE que GA4. SealMetrics resuelve el problema de raíz: la arquitectura, no solo el hosting.",
        gapStats: [
          { n: "30K€+", label: "Mínimo enterprise", detail: "Plan enterprise arranca en ~30K€/año." },
          { n: "Con cookies", label: "Misma dependencia", detail: "40–60% tráfico UE sigue perdido por rechazo." },
          { n: "Banner requerido", label: "Sin ventaja compliance", detail: "Necesita banner como GA4." },
          { n: "DPIA manual", label: "Revisión por cookie", detail: "Añadir cookie sigue disparando scope de compliance." },
        ],
        comparison: [
          { category: "Precio", rows: [
            { feature: "Plan de entrada", them: "Free (limitado) / Enterprise desde 30K€/año", us: "€499/mes desde Growth" },
            { feature: "Soporte implementación", them: "Solo Enterprise", us: "Liderado por founder en todos los planes" },
          ]},
          { category: "Captura de datos", rows: [
            { feature: "Cookies", them: "Sí · opt-in requerido", us: "Ninguna" },
            { feature: "Banner consentimiento", them: "Sí", us: "No · fuera del scope RGPD" },
            { feature: "Tráfico UE capturado", them: "60% típico con banner", us: "100% capturado" },
          ]},
          { category: "Infraestructura", rows: [
            { feature: "Residencia", them: "UE (opciones Alemania)", us: "UE (Dublín)" },
            { feature: "Schrems II", them: "Limpio", us: "Limpio" },
          ]},
          { category: "Stack moderno", rows: [
            { feature: "MCP / integración IA", them: "Sin soporte nativo", us: "MCP server nativo" },
            { feature: "Export BigQuery", them: "Add-on enterprise", us: "Incluido desde Growth" },
          ]},
        ],
        faqs: [
          { q: "Piwik PRO también está alojado en UE. ¿Por qué es distinto SealMetrics?", a: "El hosting UE resuelve la residencia. No resuelve el consentimiento. Piwik PRO usa cookies, requiere consentimiento y pierde el mismo 40–60% de visitantes UE. SealMetrics resuelve ambos: alojado en UE Y sin cookies, así nada se pierde por rechazo." },
          { q: "¿No basta con su tracking consent-aware?", a: "Depende de tu apetito de riesgo. Piwik PRO tiene un modo 'consentless tracking', pero depende de interpretar excepciones RGPD/ePrivacy que varían por jurisdicción (CNIL lo trata distinto a BfDI). SealMetrics no toma datos personales en absoluto — estás fuera de scope universalmente, sin interpretación." },
          { q: "¿Y sus features de Customer Data Platform?", a: "Piwik PRO empaqueta features CDP en tiers altos. Si necesitas un CDP, combina SealMetrics con Segment/Rudderstack (más maduros, mejor precio). Para analítica pura, SealMetrics es dato completo a una fracción del coste enterprise de Piwik PRO." },
          { q: "¿Puedo migrar desde Piwik PRO?", a: "Sí. Corre ambos 30 días. Compara volúmenes de tráfico (SealMetrics típicamente muestra 30–70% más), compara atribución (SealMetrics atribuye el bucket 'directo' correctamente). La mayoría de equipos decide en los primeros 14 días." },
        ],
        ctaTitle: <>Hosting UE <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>más captura completa.</em></>,
        ctaLede: "30 min. Pasamos tu web por SealMetrics y Piwik PRO simultáneamente. Ves cuánto tráfico UE sigue perdiendo el banner de Piwik PRO.",
      },
    },
    "google-analytics": {
      en: {
        competitor: "Google Analytics",
        hook: "Google Analytics remains the default, but the default is losing 40–60% of EU traffic. The honest alternative isn't 'another free tool' — it's complete data at enterprise reliability.",
        eyebrow: "Google Analytics alternatives",
        h1: <>Looking for a <em>GA alternative</em> that doesn't commoditize your data?</>,
        lede: "Most alternatives are cheaper or simpler GA clones. SealMetrics is a different category: complete data, EU-hosted, zero consent scope, enterprise reliability. The serious replacement for teams past the hobbyist tier.",
        gapStats: [
          { n: "40–60%", label: "EU traffic lost", detail: "GA + consent banner combo." },
          { n: "US-hosted", label: "Schrems II exposure", detail: "Ongoing CNIL/DPA challenges." },
          { n: "Sampling", label: "Above threshold", detail: "Black Friday = estimates, not measurements." },
          { n: "14 mo", label: "Default data retention", detail: "Can extend to 50 months — still fixed cap." },
        ],
        comparison: [
          { category: "Data completeness", rows: [
            { feature: "Cookie-free capture", them: "Consent Mode v2 (modelled)", us: "Native · no modelling" },
            { feature: "Ad blocker resilience", them: "Blocked (third-party script)", us: "First-party · invisible to blockers" },
            { feature: "Sampling at scale", them: "Yes", us: "Never" },
          ]},
          { category: "Compliance", rows: [
            { feature: "GDPR posture", them: "Consent banner required", us: "Outside GDPR material scope" },
            { feature: "Schrems II", them: "Exposed", us: "Clean" },
            { feature: "Data residency", them: "US", us: "EU · Dublin" },
          ]},
          { category: "Modern stack", rows: [
            { feature: "MCP for AI agents", them: "No", us: "Native" },
            { feature: "BigQuery export", them: "Yes (sampled above thresholds)", us: "Full resolution · all plans" },
            { feature: "Real-time latency", them: "Up to 48 hours", us: "< 2 minutes" },
          ]},
          { category: "Commercial", rows: [
            { feature: "Price", them: "Free (data trains Google ads)", us: "€499/mo from annual" },
            { feature: "Your data ownership", them: "Shared with Google ad models", us: "Yours only · no training for anyone" },
          ]},
        ],
        faqs: [
          { q: "Why not just use another free analytics tool?", a: "Most free tools are lightweight clones — fewer features, less reliability, still cookie-based. If you're deciding with serious marketing budget, 'free' becomes expensive quickly: misattributed spend, unreliable dashboards, no compliance clarity. SealMetrics is priced for teams whose data decisions matter." },
          { q: "What about Plausible, Fathom, Umami — aren't those alternatives?", a: "They're great for simple sites, blogs and content publishers. They're not built for eCommerce at scale — no native revenue attribution, limited integrations, no BigQuery export, no AI/MCP. Different category, different buyer." },
          { q: "Do I need to migrate existing GA history?", a: "No. SealMetrics runs from day one on new data. Most teams keep GA running alongside for historical reference and Google Ads integration, and use SealMetrics for present + future decisions." },
          { q: "Can I use Looker Studio with SealMetrics?", a: "Yes. Full BigQuery export means Looker Studio, Power BI, Tableau — any BI tool connects natively. No ETL, no sampling limits." },
        ],
        ctaTitle: <>Stop deciding with <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>40% of your data.</em></>,
        ctaLede: "30-minute walkthrough. We'll show you what your current GA is missing, live on your own traffic. No slides, no abstract numbers — your real data.",
      },
      es: {
        competitor: "Google Analytics",
        hook: "Google Analytics sigue siendo el default, pero el default está perdiendo 40–60% del tráfico UE. La alternativa honesta no es 'otra herramienta gratis' — es dato completo con fiabilidad enterprise.",
        eyebrow: "Alternativas a Google Analytics",
        h1: <>¿Buscando una <em>alternativa a GA</em> que no commoditice tus datos?</>,
        lede: "La mayoría de alternativas son clones más baratos o simples de GA. SealMetrics es otra categoría: dato completo, alojado en UE, cero scope de consentimiento, fiabilidad enterprise. El reemplazo serio para equipos que pasan el tier hobbyist.",
        gapStats: [
          { n: "40–60%", label: "Tráfico UE perdido", detail: "Combo GA + banner de consentimiento." },
          { n: "US-hosted", label: "Exposición Schrems II", detail: "Challenges CNIL/DPA en curso." },
          { n: "Muestreo", label: "Sobre umbral", detail: "Black Friday = estimaciones, no mediciones." },
          { n: "14 meses", label: "Retención por defecto", detail: "Ampliable a 50 meses — sigue siendo tope fijo." },
        ],
        comparison: [
          { category: "Completitud de datos", rows: [
            { feature: "Captura sin cookies", them: "Consent Mode v2 (modelado)", us: "Nativo · sin modelado" },
            { feature: "Resistencia a ad blockers", them: "Bloqueado (script third-party)", us: "First-party · invisible a bloqueadores" },
            { feature: "Muestreo a escala", them: "Sí", us: "Nunca" },
          ]},
          { category: "Compliance", rows: [
            { feature: "Postura RGPD", them: "Banner de consentimiento requerido", us: "Fuera del scope material RGPD" },
            { feature: "Schrems II", them: "Expuesto", us: "Limpio" },
            { feature: "Residencia de datos", them: "US", us: "UE · Dublín" },
          ]},
          { category: "Stack moderno", rows: [
            { feature: "MCP para agentes IA", them: "No", us: "Nativo" },
            { feature: "Export BigQuery", them: "Sí (muestreado sobre umbrales)", us: "Resolución completa · todos los planes" },
            { feature: "Latencia tiempo real", them: "Hasta 48h", us: "< 2 minutos" },
          ]},
          { category: "Comercial", rows: [
            { feature: "Precio", them: "Gratis (tus datos entrenan ads de Google)", us: "€499/mes desde anual" },
            { feature: "Propiedad de datos", them: "Compartidos con modelos de ads de Google", us: "Solo tuyos · sin training para nadie" },
          ]},
        ],
        faqs: [
          { q: "¿Por qué no usar otra analítica gratis?", a: "La mayoría de herramientas gratis son clones ligeros — menos features, menos fiabilidad, siguen basadas en cookies. Si decides con presupuesto de marketing serio, 'gratis' sale caro rápido: inversión mal atribuida, dashboards poco fiables, sin claridad de compliance. SealMetrics está priced para equipos cuyas decisiones de dato importan." },
          { q: "¿Y Plausible, Fathom, Umami — no son alternativas?", a: "Son geniales para sitios simples, blogs y publishers de contenido. No están pensados para eCommerce a escala — sin atribución de ingresos nativa, integraciones limitadas, sin export BigQuery, sin IA/MCP. Categoría distinta, buyer distinto." },
          { q: "¿Tengo que migrar el histórico de GA?", a: "No. SealMetrics corre desde el día uno con datos nuevos. La mayoría mantiene GA en paralelo para referencia histórica e integración Google Ads, y usa SealMetrics para decisiones presente + futuro." },
          { q: "¿Puedo usar Looker Studio con SealMetrics?", a: "Sí. Export completo a BigQuery = Looker Studio, Power BI, Tableau — cualquier BI conecta nativamente. Sin ETL, sin límites de muestreo." },
        ],
        ctaTitle: <>Deja de decidir con <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>el 40% de tus datos.</em></>,
        ctaLede: "Walkthrough de 30 min. Te mostramos lo que tu GA actual está perdiendo, en directo, sobre tu propio tráfico. Sin slides, sin números abstractos — tu dato real.",
      },
    },
  };

  return { ...data[key][locale], locale };
}
