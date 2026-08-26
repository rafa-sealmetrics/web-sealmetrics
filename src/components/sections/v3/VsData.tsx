import type { VsData } from "./VsComparisonV3";

type Locale = "en" | "es";
export type VsKey = "ga360" | "adobe-analytics" | "piwik-pro" | "matomo" | "google-analytics";

export function getVsData(key: VsKey, locale: Locale): VsData {
  const data: Record<VsKey, Record<Locale, Omit<VsData, "locale">>> = {
    ga360: {
      en: {
        competitor: "GA360",
        techReportHref: "https://docs.sealmetrics.com/guides/tracker-performance-report",
        hook: "GA360 starts at $150,000/year. Enterprise-grade pricing, but the same cookie and consent architecture as free GA4. Complete EU data still requires consent.",
        eyebrow: "vs Google Analytics 360",
        h1: <>Enterprise data <em>without the $150K invoice.</em></>,
        lede: "GA360 costs six figures per year and still loses the same 40–60% of EU traffic that free GA4 loses — because the architecture is identical. Sealmetrics is complete data, EU-hosted, from €499/mo.",
        tldr: {
          answer: (
            <>
              GA360 is Google&rsquo;s enterprise tier of Analytics:
              SLAs, dedicated support, custom retention, sampling
              relief on BigQuery — wrapped in a <strong>$150K+/year</strong>{" "}
              annual commit. Underneath, the collection architecture is
              identical to free GA4: cookie-based, consent-required,
              US-hosted. In the EU, GA360 loses the same{" "}
              <strong>40–60% of traffic</strong> to consent rejection
              and ad blockers that free GA4 loses — premium price,
              premium incomplete data. Sealmetrics replaces the
              measurement layer for around <strong>7%</strong> of the
              GA360 cost, captures 100% on aggregate and keeps
              everything in Dublin.
            </>
          ),
          bullets: [
            <>GA360: premium support &amp; sampling relief, same collection layer as free GA4.</>,
            <>Sealmetrics: full capture, EU-only processing, ~93% cheaper than GA360 at scale.</>,
            <>Most teams keep GA360 only for Google Ads conversion import, run Sealmetrics for revenue decisions.</>,
          ],
        },
        caseStudy: {
          eyebrow: "Switched from a Google-Analytics stack",
          title: <>How Palladium Hotel Group recovered <em className="italic-accent">40% of unattributed traffic</em>.</>,
          quote: "The data Sealmetrics delivers is agnostic, unbiased and neutral. There's no black box.",
          quoteAuthor: "Toni Andújar · Digital & Direct Sales Director · Palladium Hotel Group",
          body: "Palladium ran Sealmetrics alongside their existing GA-tier stack. The audit surfaced 40% of inbound traffic with no source/medium attribution, 35% of bookings unassigned to a channel in GA4, and a +165% Cost-per-Search improvement on Display once the Sealmetrics measurement model drove DV360 decisions. They kept GA4 as the Google Ads conduit and made revenue decisions on Sealmetrics.",
          href: "/case-studies/palladium-hotel-group",
          linkLabel: "Read the full Palladium case study",
        },
        gapStats: [
          { n: "$150K+", label: "Annual cost", detail: "Starts at $150,000/year. Billed annually upfront." },
          { n: "40–60%", label: "Still cookie-dependent", detail: "Same consent rejection loss as free GA4." },
          { n: "US-hosted", label: "Schrems II exposure", detail: "EU data transfers to Google infrastructure." },
          { n: "12 months", label: "Minimum contract", detail: "Annual lock-in. Negotiation via Google sales." },
        ],
        comparison: [
          { category: "Pricing", block: "commercial", rows: [
            { feature: "Starting price", them: "$150,000/yr annual commit", us: "€499/mo · no annual commit" },
            { feature: "Billing model", them: "Enterprise sales negotiation", us: "Self-serve · transparent pricing" },
            { feature: "Contract length", them: "12-month minimum", us: "Monthly or annual (2 months free)" },
          ]},
          { category: "Data capture", block: "technical", rows: [
            { feature: "Cookie-dependent", them: "Yes", us: "No · cookieless by design" },
            { feature: "Consent required", them: "Yes · 40–60% reject in EU", us: "No · 100% captured" },
            { feature: "Sampling", them: "Above thresholds", us: "Zero sampling" },
          ]},
          { category: "Infrastructure", block: "technical", rows: [
            { feature: "Data residency", them: "US · Google infra", us: "EU · Dublin, Ireland" },
            { feature: "Schrems II", them: "Exposed", us: "Clean" },
            { feature: "BigQuery export", them: "Included (sampled above 10M/day)", us: "Full resolution · no limits" },
          ]},
          { category: "AI & modern stack", block: "reporting", rows: [
            { feature: "MCP server", them: "No", us: "Native" },
            { feature: "Real-time (<2 min)", them: "Partial", us: "Yes · all plans" },
          ]},
          { category: "Tracker performance (measured)", block: "technical", rows: [
            { feature: "Script weight on the wire (gzip)", them: "~146 KB · same gtag.js as free GA4", us: "1.1 KB · ~132× lighter" },
            { feature: "JavaScript parsed on the device", them: "~409 KB", us: "2.0 KB" },
            { feature: "Pageview hit secured", them: "~0.5–0.7 s best case · only after consent", us: "~0.1–0.3 s · sendBeacon from the head" },
          ]},
          { category: "Customer success", block: "commercial", rows: [
            { feature: "Onboarding", them: "Google sales + certified partners", us: "Founder-led · 15-minute install" },
            { feature: "Support", them: "Enterprise SLAs · via resellers", us: "Direct support on every plan" },
          ]},
          { category: "Reporting parity", block: "reporting", rows: [
            { feature: "Standard reports", them: "Same GA4 interface · 24–48 h processing lag", us: "Decision-ready defaults · real-time" },
            { feature: "Custom analysis", them: "Explorations · sampling relief only in BigQuery", us: "Segments + property breakdowns · unsampled" },
            { feature: "Audiences & remarketing", them: "Yes · its real strength", us: "Not a remarketing tool — no personal identifiers by design" },
          ]},
        ],
        faqs: [
          { q: "Isn't GA360 more accurate than free GA4?", a: "Only on certain dimensions. GA360 removes sampling thresholds on BigQuery export and adds some advanced features, but uses the same cookie + consent architecture. Your 40–60% consent rejection loss is identical. Premium GA4 = premium incomplete data." },
          { q: "What about GA360's enterprise features?", a: "GA360 adds SLAs, dedicated support and custom data retention. Sealmetrics Enterprise includes the same — plus isolated processing, custom DPA and a dedicated account manager. At a fraction of the cost." },
          { q: "Can we migrate gradually from GA360?", a: "Yes. Run both in parallel. Most customers keep GA360 for Google Ads integration during the transition and move strategic reporting to Sealmetrics. Usually takes 60–90 days to fully decommission GA360." },
          { q: "Is there a way to compare costs directly?", a: "Yes. For a typical large eCommerce (15M events/month), GA360 ≈ $150K/yr vs. Sealmetrics Scale = €10,788/yr — about 93% cheaper, with more complete data." },
        ],
        ctaTitle: <>Get enterprise data. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Skip the $150K invoice.</em></>,
        ctaLede: "30-minute walkthrough with the founder. We'll show your GA360 numbers next to Sealmetrics on your own traffic — you see the gap and the savings.",
      },
      es: {
        competitor: "GA360",
        techReportHref: "https://docs.sealmetrics.com/guides/tracker-performance-report",
        hook: "GA360 arranca en 150.000$/año. Precio enterprise, misma arquitectura de cookies y consentimiento que GA4 gratis. Los datos UE completos siguen requiriendo consentimiento.",
        eyebrow: "vs Google Analytics 360",
        h1: <>Datos enterprise <em>sin la factura de 150K$.</em></>,
        lede: "GA360 cuesta seis cifras al año y sigue perdiendo el mismo 40–60% del tráfico UE que GA4 gratis — porque la arquitectura es idéntica. Sealmetrics es dato completo, alojado en UE, desde €499/mes.",
        tldr: {
          answer: (
            <>
              GA360 es el tier enterprise de Google Analytics: SLAs,
              soporte dedicado, retención custom, alivio de muestreo
              en BigQuery — todo envuelto en un compromiso anual de{" "}
              <strong>150.000$+/año</strong>. Debajo, la capa de
              recolección es idéntica a la de GA4 gratuito:
              basada en cookies, requiere consentimiento, alojada en
              EE.UU. En la UE, GA360 pierde el mismo{" "}
              <strong>40–60% de tráfico</strong> que GA4 gratis por
              rechazo de consentimiento y ad-blockers — precio premium,
              datos premium incompletos. Sealmetrics reemplaza la capa
              de medición por cerca del <strong>7%</strong> del coste
              de GA360, captura el 100% en agregado y mantiene todo en
              Dublín.
            </>
          ),
          bullets: [
            <>GA360: soporte premium y alivio de muestreo, misma capa de recolección que GA4 gratis.</>,
            <>Sealmetrics: captura completa, procesamiento solo en UE, ~93% más barato que GA360 a escala.</>,
            <>La mayoría de equipos mantienen GA360 solo para el import de conversiones de Google Ads y deciden sobre Sealmetrics.</>,
          ],
        },
        caseStudy: {
          eyebrow: "Migró desde un stack Google-Analytics",
          title: <>Cómo Palladium Hotel Group recuperó <em className="italic-accent">el 40% de tráfico no atribuido</em>.</>,
          quote: "Los datos que entrega Sealmetrics son agnósticos, sin sesgo y neutrales. No hay caja negra.",
          quoteAuthor: "Toni Andújar · Digital & Direct Sales Director · Palladium Hotel Group",
          body: "Palladium corrió Sealmetrics junto a su stack GA-tier existente. La auditoría reveló un 40% del tráfico entrante sin atribución source/medium, un 35% de reservas sin canal asignado en GA4 y una mejora del +165% en Cost-per-Search en Display una vez el modelo de medición de Sealmetrics dirigió las decisiones de DV360. Mantuvieron GA4 como conducto a Google Ads y tomaron las decisiones de ingresos sobre Sealmetrics.",
          href: "/es/case-studies/palladium-hotel-group",
          linkLabel: "Leer el case study completo de Palladium",
        },
        gapStats: [
          { n: "150K$+", label: "Coste anual", detail: "Arranca en 150.000$/año. Pagado anualmente por adelantado." },
          { n: "40–60%", label: "Sigue con cookies", detail: "Misma pérdida por rechazo de consentimiento que GA4." },
          { n: "US-hosted", label: "Exposición Schrems II", detail: "Transferencias UE a infra Google." },
          { n: "12 meses", label: "Contrato mínimo", detail: "Lock-in anual. Negociación vía Google sales." },
        ],
        comparison: [
          { category: "Precio", block: "commercial", rows: [
            { feature: "Precio de entrada", them: "150.000$/año compromiso anual", us: "€499/mes · sin compromiso anual" },
            { feature: "Modelo facturación", them: "Negociación enterprise sales", us: "Self-serve · precio transparente" },
            { feature: "Duración contrato", them: "Mínimo 12 meses", us: "Mensual o anual (2 meses gratis)" },
          ]},
          { category: "Captura de datos", block: "technical", rows: [
            { feature: "Depende de cookies", them: "Sí", us: "No · sin cookies por diseño" },
            { feature: "Consentimiento", them: "Sí · 40–60% rechaza en UE", us: "No · 100% capturado" },
            { feature: "Muestreo", them: "Sobre umbrales", us: "Cero muestreo" },
          ]},
          { category: "Infraestructura", block: "technical", rows: [
            { feature: "Residencia de datos", them: "US · infra Google", us: "UE · Dublín, Irlanda" },
            { feature: "Schrems II", them: "Expuesto", us: "Limpio" },
            { feature: "Export BigQuery", them: "Incluido (muestreado sobre 10M/día)", us: "Resolución completa · sin límites" },
          ]},
          { category: "IA y stack moderno", block: "reporting", rows: [
            { feature: "MCP server", them: "No", us: "Nativo" },
            { feature: "Tiempo real (<2 min)", them: "Parcial", us: "Sí · todos los planes" },
          ]},
          { category: "Rendimiento del tracker (medido)", block: "technical", rows: [
            { feature: "Peso del script en red (gzip)", them: "~146 KB · el mismo gtag.js que GA4 gratis", us: "1,1 KB · ~132× más ligero" },
            { feature: "JavaScript parseado en el dispositivo", them: "~409 KB", us: "2,0 KB" },
            { feature: "Pageview asegurado", them: "~0,5–0,7 s mejor caso · solo tras consentimiento", us: "~0,1–0,3 s · sendBeacon desde el head" },
          ]},
          { category: "Customer success", block: "commercial", rows: [
            { feature: "Onboarding", them: "Google sales + partners certificados", us: "Liderado por el founder · instalación en 15 min" },
            { feature: "Soporte", them: "SLAs enterprise · vía resellers", us: "Soporte directo en todos los planes" },
          ]},
          { category: "Paridad de reporting", block: "reporting", rows: [
            { feature: "Informes estándar", them: "Misma interfaz GA4 · 24–48 h de retraso", us: "Listos por defecto · tiempo real" },
            { feature: "Análisis custom", them: "Explorations · alivio de muestreo solo en BigQuery", us: "Segmentos + breakdowns por propiedad · sin muestreo" },
            { feature: "Audiencias y remarketing", them: "Sí · su verdadera fortaleza", us: "No es una herramienta de remarketing — sin identificadores personales por diseño" },
          ]},
        ],
        faqs: [
          { q: "¿No es GA360 más preciso que GA4?", a: "Solo en ciertas dimensiones. GA360 quita umbrales de muestreo en export BigQuery y añade features avanzadas, pero usa la misma arquitectura cookies + consentimiento. Tu 40–60% de pérdida por consentimiento es idéntico. GA4 premium = datos premium incompletos." },
          { q: "¿Y las features enterprise de GA360?", a: "GA360 añade SLAs, soporte dedicado y retención custom. Sealmetrics Enterprise incluye lo mismo — más procesamiento aislado, DPA custom y account manager dedicado. A una fracción del coste." },
          { q: "¿Podemos migrar gradualmente desde GA360?", a: "Sí. Corre ambos en paralelo. La mayoría de clientes mantienen GA360 para integración Google Ads durante la transición y mueven el reporting estratégico a Sealmetrics. Suele tardar 60–90 días retirar GA360 del todo." },
          { q: "¿Hay forma de comparar costes directamente?", a: "Sí. Para un eCommerce grande típico (15M eventos/mes), GA360 ≈ 150K$/año vs. Sealmetrics Scale = 10.788€/año — ~93% más barato, con datos más completos." },
        ],
        ctaTitle: <>Consigue dato enterprise. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Sáltate la factura de 150K$.</em></>,
        ctaLede: "Walkthrough de 30 min con el founder. Te enseñamos tus números de GA360 junto a Sealmetrics sobre tu propio tráfico — ves el gap y el ahorro.",
      },
    },
    "adobe-analytics": {
      en: {
        competitor: "Adobe Analytics",
        techReportHref: "https://docs.sealmetrics.com/guides/tracker-performance-adobe-analytics",
        hook: "Adobe Analytics is powerful for enterprise reporting but requires specialists, enterprise contracts and the same consent-dependent data capture. In 2026, power tools working on incomplete data are a liability.",
        eyebrow: "vs Adobe Analytics",
        h1: <>Enterprise power. <em>Zero enterprise overhead.</em></>,
        lede: "Adobe Analytics delivers depth at the cost of complexity: dedicated analysts, implementation consultants and $100K+ annual contracts. Sealmetrics delivers complete data with no specialists required — from €499/mo.",
        tldr: {
          answer: (
            <>
              Adobe Analytics is a powerful enterprise reporting suite —
              segmentation depth, calculated metrics, Customer Journey
              Analytics stitching. Three frictions show up in every
              vendor review: <strong>$100K+/year</strong> base licence,
              <strong> 3–6 month</strong> implementation, and a dedicated
              Adobe-certified analyst on staff. Under all of it, the
              AppMeasurement collection layer is still cookie-based and
              consent-gated — the EU traffic gap is unchanged. Sealmetrics
              replaces the measurement layer (complete capture, EU-only,
              from €499/mo) and lets Adobe do what it does best on
              complete data instead of incomplete.
            </>
          ),
          bullets: [
            <>Adobe: deep segmentation and CJA stitching for enterprise reporting.</>,
            <>Sealmetrics: complete EU data capture, no consultants, decision-ready in week one.</>,
            <>Run both — Adobe for analyst-driven deep dives, Sealmetrics for the board number that reconciles.</>,
          ],
        },
        caseStudy: {
          eyebrow: "Switched from a GA-tier enterprise stack",
          title: <>How Palladium Hotel Group made <em className="italic-accent">enterprise reporting unnecessary</em>.</>,
          quote: "The data Sealmetrics delivers is agnostic, unbiased and neutral. There's no black box.",
          quoteAuthor: "Toni Andújar · Digital & Direct Sales Director · Palladium Hotel Group",
          body: "Palladium ran Sealmetrics alongside their enterprise GA-tier stack. The audit surfaced 40% of inbound traffic with no source/medium attribution, 35% of bookings unassigned to a channel, and a +165% Cost-per-Search improvement on Display once the Sealmetrics measurement model drove DV360 decisions. They kept their existing reporting tools for deep dives and moved revenue decisions to Sealmetrics.",
          href: "/case-studies/palladium-hotel-group",
          linkLabel: "Read the full Palladium case study",
        },
        gapStats: [
          { n: "$100K+", label: "Annual cost", detail: "Plus implementation consulting fees." },
          { n: "3–6 months", label: "Implementation", detail: "Typical time to first value." },
          { n: "+25%", label: "Measured traffic gap", detail: "30-day parallel run on a European media site. Losses beyond consent: blockers + a ~3 s hit window." },
          { n: "40–60%", label: "Still consent-gated", detail: "Cookie-dependent capture. Same EU gap as GA." },
        ],
        comparison: [
          { category: "Pricing & time to value", block: "commercial", rows: [
            { feature: "Starting price", them: "$100,000/yr + implementation fees", us: "€499/mo · no hidden fees" },
            { feature: "Implementation time", them: "3–6 months typical", us: "1 week to decision-ready" },
            { feature: "Required specialists", them: "Adobe-certified analyst on team", us: "Self-serve · founder onboarding" },
          ]},
          { category: "Data capture", block: "technical", rows: [
            { feature: "Cookie-dependent", them: "Yes · AppMeasurement library", us: "No · first-party server-side" },
            { feature: "EU consent rejection handling", them: "Banner-dependent", us: "Not applicable (no cookies)" },
            { feature: "Sampling", them: "Virtual Report Suites impact sampling", us: "Zero sampling" },
          ]},
          { category: "Tracker performance (measured)", block: "technical", rows: [
            { feature: "Script weight on the wire (gzip)", them: "~170 KB · Launch + AppMeasurement", us: "1.1 KB · ~155× lighter" },
            { feature: "JavaScript parsed on the device", them: "~730 KB", us: "2.0 KB" },
            { feature: "Pageview hit secured", them: "~3.0 s · field-measured on a dual-vendor site", us: "~0.1–0.3 s · sendBeacon from the head" },
            { feature: "Hit transport", them: "Image GET · canceled if the visitor leaves early", us: "sendBeacon · survives page close" },
          ]},
          { category: "Infrastructure", block: "technical", rows: [
            { feature: "Data residency", them: "Configurable but complex", us: "EU-only · Dublin" },
            { feature: "Schrems II", them: "Requires separate legal review", us: "Clean by architecture" },
          ]},
          { category: "Modern stack", block: "reporting", rows: [
            { feature: "MCP / AI-native", them: "Via separate Adobe Analytics AI", us: "Native MCP server" },
            { feature: "BigQuery export", them: "Via Customer Journey Analytics (premium)", us: "Included in all plans" },
          ]},
          { category: "Customer success", block: "commercial", rows: [
            { feature: "Onboarding", them: "Implementation partners · consultant-led", us: "Founder-led · 15-minute install" },
            { feature: "Support", them: "Tiered enterprise support plans", us: "Direct support on every plan" },
            { feature: "Account management", them: "Enterprise account teams", us: "Dedicated manager on Enterprise" },
          ]},
          { category: "Reporting parity", block: "reporting", rows: [
            { feature: "Prebuilt marketing reports", them: "Analysis Workspace — you build everything", us: "Channels, campaigns, funnels, pages — ready by default" },
            { feature: "Deep segmentation", them: "Its real strength · analyst-driven", us: "Segments + property breakdowns · deep dives via BigQuery" },
            { feature: "Calculated metrics", them: "Yes · in Workspace", us: "Via BigQuery export + MCP" },
            { feature: "Report freshness", them: "Minutes to hours depending on report type", us: "Real-time · under 2 minutes" },
            { feature: "Audience activation / remarketing", them: "Experience Cloud integration", us: "Not a remarketing tool — no personal identifiers by design" },
          ]},
        ],
        faqs: [
          { q: "Adobe has far more features. Are you comparing apples to apples?", a: "For most eCommerce teams, Adobe Analytics' depth is unused. The 80% of features you need — channel attribution, funnel analysis, campaign reporting, BigQuery export — Sealmetrics covers with complete data and no specialists. If you genuinely need Adobe's segmentation depth, Customer Journey Analytics is where it happens; we'd recommend keeping it and adding Sealmetrics for complete data capture." },
          { q: "Can Sealmetrics coexist with Adobe Experience Cloud?", a: "Yes. Sealmetrics operates independently. Many enterprise customers run both — Adobe for deep segmentation, Sealmetrics for complete data capture and the truth number shared across agencies and finance." },
          { q: "What about Customer Journey Analytics?", a: "CJA is Adobe's newer tool for cross-channel stitching. It still depends on the same AppMeasurement collection layer — same consent rejection loss. Sealmetrics provides complete capture; your CJA does more interesting analytics on complete data instead of incomplete." },
          { q: "How much more traffic does Sealmetrics actually measure vs Adobe?", a: "In a 30-day parallel run on a European media site (June 2026), Sealmetrics measured +25% pageviews over Adobe Analytics — a stable ratio across the whole month, with Adobe firing without a consent gate. The gap comes from losses beyond consent: privacy filter lists blocking Adobe's collection endpoints, a pageview that fires ~3 seconds into the load (field-measured — any visit that bounces earlier never existed for Adobe), and an image-GET transport that is canceled when the visitor leaves. Where Adobe sits behind a consent banner, the gap grows further." },
          { q: "How hard is migration?", a: "No migration. Both tools run in parallel. Decide per use case where each serves best. Most teams move acquisition + attribution reporting to Sealmetrics and keep Adobe for enterprise segmentation and email orchestration." },
        ],
        ctaTitle: <>Skip the <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>6-month implementation.</em></>,
        ctaLede: "30 minutes with the founder. Sealmetrics installed in 15 minutes. Decision-ready in week one. No consultants, no specialists, no $100K invoice.",
      },
      es: {
        competitor: "Adobe Analytics",
        techReportHref: "https://docs.sealmetrics.com/guides/tracker-performance-adobe-analytics",
        hook: "Adobe Analytics es potente para reporting enterprise pero requiere especialistas, contratos enterprise y la misma captura de datos dependiente del consentimiento. En 2026, herramientas potentes sobre datos incompletos son una liability.",
        eyebrow: "vs Adobe Analytics",
        h1: <>Potencia enterprise. <em>Cero overhead enterprise.</em></>,
        lede: "Adobe Analytics da profundidad a coste de complejidad: analistas dedicados, consultores de implementación y contratos de 100K$+ anuales. Sealmetrics da dato completo sin especialistas — desde €499/mes.",
        tldr: {
          answer: (
            <>
              Adobe Analytics es una suite potente de reporting
              enterprise — profundidad de segmentación, métricas
              calculadas, stitching cross-canal de Customer Journey
              Analytics. Tres fricciones aparecen en cada revisión de
              vendor: licencia base de <strong>100K$+/año</strong>,
              implementación de <strong>3–6 meses</strong> y un analista
              certificado en Adobe en plantilla. Debajo de todo, la capa
              de recolección AppMeasurement sigue siendo basada en
              cookies y dependiente de consentimiento — el gap UE no
              cambia. Sealmetrics reemplaza la capa de medición (captura
              completa, sólo UE, desde €499/mes) y deja que Adobe haga
              lo que mejor hace sobre dato completo en lugar de
              incompleto.
            </>
          ),
          bullets: [
            <>Adobe: segmentación profunda y stitching CJA para reporting enterprise.</>,
            <>Sealmetrics: captura UE completa, sin consultores, listo para decidir en semana uno.</>,
            <>Corre ambos — Adobe para deep dives liderados por analista, Sealmetrics para el número del board que cuadra.</>,
          ],
        },
        caseStudy: {
          eyebrow: "Migró desde un stack enterprise tipo GA",
          title: <>Cómo Palladium Hotel Group hizo <em className="italic-accent">innecesario el reporting enterprise</em>.</>,
          quote: "Los datos que entrega Sealmetrics son agnósticos, sin sesgo y neutrales. No hay caja negra.",
          quoteAuthor: "Toni Andújar · Digital & Direct Sales Director · Palladium Hotel Group",
          body: "Palladium corrió Sealmetrics junto a su stack enterprise GA-tier. La auditoría reveló un 40% del tráfico entrante sin atribución source/medium, un 35% de reservas sin canal asignado y una mejora del +165% en Cost-per-Search en Display una vez el modelo de medición de Sealmetrics dirigió las decisiones de DV360. Mantuvieron sus herramientas existentes para deep dives y movieron las decisiones de ingresos a Sealmetrics.",
          href: "/es/case-studies/palladium-hotel-group",
          linkLabel: "Leer el case study completo de Palladium",
        },
        gapStats: [
          { n: "100K$+", label: "Coste anual", detail: "Más fees de consultoría de implementación." },
          { n: "3–6 meses", label: "Implementación", detail: "Tiempo típico al primer valor." },
          { n: "+25%", label: "Gap de tráfico medido", detail: "30 días en paralelo en un medio europeo. Pérdidas más allá del consentimiento: blockers + ventana de hit de ~3 s." },
          { n: "40–60%", label: "Sigue con consentimiento", detail: "Captura dependiente de cookies. Mismo gap UE que GA." },
        ],
        comparison: [
          { category: "Precio y tiempo al valor", block: "commercial", rows: [
            { feature: "Precio de entrada", them: "100.000$/año + fees implementación", us: "€499/mes · sin fees ocultos" },
            { feature: "Tiempo implementación", them: "3–6 meses típicamente", us: "1 semana a decisiones" },
            { feature: "Especialistas requeridos", them: "Analista certificado Adobe", us: "Self-serve · onboarding founder" },
          ]},
          { category: "Captura de datos", block: "technical", rows: [
            { feature: "Depende de cookies", them: "Sí · librería AppMeasurement", us: "No · first-party server-side" },
            { feature: "Manejo rechazo UE", them: "Dependiente de banner", us: "No aplica (sin cookies)" },
            { feature: "Muestreo", them: "Virtual Report Suites afectan muestreo", us: "Cero muestreo" },
          ]},
          { category: "Rendimiento del tracker (medido)", block: "technical", rows: [
            { feature: "Peso del script en red (gzip)", them: "~170 KB · Launch + AppMeasurement", us: "1,1 KB · ~155× más ligero" },
            { feature: "JavaScript parseado en el dispositivo", them: "~730 KB", us: "2,0 KB" },
            { feature: "Pageview asegurado", them: "~3,0 s · medido en campo en un sitio dual-vendor", us: "~0,1–0,3 s · sendBeacon desde el head" },
            { feature: "Transporte del hit", them: "Image GET · se cancela si el visitante se va", us: "sendBeacon · sobrevive al cierre" },
          ]},
          { category: "Infraestructura", block: "technical", rows: [
            { feature: "Residencia", them: "Configurable pero compleja", us: "Solo UE · Dublín" },
            { feature: "Schrems II", them: "Requiere revisión legal aparte", us: "Limpio por arquitectura" },
          ]},
          { category: "Stack moderno", block: "reporting", rows: [
            { feature: "MCP / IA nativa", them: "Vía Adobe Analytics AI aparte", us: "MCP server nativo" },
            { feature: "Export BigQuery", them: "Vía Customer Journey Analytics (premium)", us: "Incluido en todos los planes" },
          ]},
          { category: "Customer success", block: "commercial", rows: [
            { feature: "Onboarding", them: "Partners de implementación · liderado por consultores", us: "Liderado por el founder · instalación en 15 min" },
            { feature: "Soporte", them: "Planes de soporte enterprise por tiers", us: "Soporte directo en todos los planes" },
            { feature: "Account management", them: "Equipos de cuenta enterprise", us: "Manager dedicado en Enterprise" },
          ]},
          { category: "Paridad de reporting", block: "reporting", rows: [
            { feature: "Informes de marketing listos", them: "Analysis Workspace — lo construyes todo tú", us: "Canales, campañas, funnels, páginas — listos por defecto" },
            { feature: "Segmentación profunda", them: "Su verdadera fortaleza · liderada por analista", us: "Segmentos + breakdowns por propiedad · deep dives vía BigQuery" },
            { feature: "Métricas calculadas", them: "Sí · en Workspace", us: "Vía export BigQuery + MCP" },
            { feature: "Frescura del informe", them: "De minutos a horas según el tipo de informe", us: "Tiempo real · menos de 2 minutos" },
            { feature: "Activación de audiencias / remarketing", them: "Integración Experience Cloud", us: "No es una herramienta de remarketing — sin identificadores personales por diseño" },
          ]},
        ],
        faqs: [
          { q: "Adobe tiene muchas más features. ¿Comparación justa?", a: "Para la mayoría de equipos eCommerce, la profundidad de Adobe no se usa. El 80% de lo que necesitas — atribución canal, análisis funnel, reporting campaña, export BigQuery — Sealmetrics lo cubre con datos completos y sin especialistas. Si realmente necesitas la profundidad de segmentación de Adobe, Customer Journey Analytics es donde ocurre; recomendamos mantenerlo y añadir Sealmetrics para la captura completa." },
          { q: "¿Puede coexistir con Adobe Experience Cloud?", a: "Sí. Sealmetrics opera independientemente. Muchos clientes enterprise corren ambos — Adobe para segmentación profunda, Sealmetrics para captura completa y el número verdad compartido con agencias y finanzas." },
          { q: "¿Y Customer Journey Analytics?", a: "CJA es la herramienta más reciente de Adobe para stitching cross-canal. Sigue dependiendo de la misma capa AppMeasurement — misma pérdida por consentimiento. Sealmetrics aporta captura completa; tu CJA hace analítica más interesante sobre datos completos en lugar de incompletos." },
          { q: "¿Cuánto tráfico más mide realmente Sealmetrics vs Adobe?", a: "En 30 días corriendo en paralelo en un medio europeo (junio 2026), Sealmetrics midió un +25% de pageviews sobre Adobe Analytics — con ratio estable todo el mes y con Adobe disparando sin consent-gate. El gap viene de pérdidas más allá del consentimiento: listas de privacidad que bloquean los endpoints de recogida de Adobe, un pageview que dispara a ~3 segundos de la carga (medido en campo — toda visita que rebota antes nunca existió para Adobe) y un transporte image-GET que se cancela cuando el visitante se va. Donde Adobe va detrás de un banner de consentimiento, el gap crece aún más." },
          { q: "¿Qué tan difícil es migrar?", a: "Sin migración. Ambas corren en paralelo. Decides caso a caso dónde encaja cada una. La mayoría mueve reporting de adquisición + atribución a Sealmetrics y mantienen Adobe para segmentación enterprise y orquestación email." },
        ],
        ctaTitle: <>Sáltate la <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>implementación de 6 meses.</em></>,
        ctaLede: "30 min con el founder. Sealmetrics instalado en 15 min. Listo para decidir en semana uno. Sin consultores, sin especialistas, sin factura de 100K$.",
      },
    },
    "piwik-pro": {
      en: {
        competitor: "Piwik PRO",
        hook: "Piwik PRO offers EU-hosted analytics but is still cookie-based, consent-required, and priced for €30K+/yr contracts. The architecture is closer to GA4 than you'd expect — just hosted on European servers.",
        eyebrow: "vs Piwik PRO",
        h1: <>EU hosting is the <em>beginning</em>, not the finish line.</>,
        lede: "Piwik PRO runs in Europe — that's good. But it still uses cookies, requires consent, and loses the same EU traffic GA4 loses. Sealmetrics solves the root problem: the architecture, not just the hosting.",
        tldr: {
          answer: (
            <>
              Piwik PRO is the most credible EU-hosted commercial
              analytics — German data residency, enterprise contracts,
              GDPR-aware product. But the architecture is closer to GA4
              than the marketing suggests: cookies on by default,
              consent banner required, the consentless mode is a
              configuration with caveats per jurisdiction. Sealmetrics
              is consentless by design — no cookie, no identifier, no
              configuration. EU hosting solves data residency; complete
              capture requires removing the cookie itself. Sealmetrics
              does both.
            </>
          ),
          bullets: [
            <>Piwik PRO: EU-hosted, but cookie + consent architecture loses the same 40–60% of traffic.</>,
            <>Sealmetrics: cookieless and consentless by design, 100% capture, EU-only.</>,
            <>If hosting was the only concern Piwik PRO would suffice; in 2026, the cookie is the bottleneck.</>,
          ],
        },
        caseStudy: {
          eyebrow: "Switched from a cookie-based EU analytics stack",
          title: <>How Dreamplace Hotels traded <em className="italic-accent">configuration for clarity</em>.</>,
          quote: "What it gives us is what we've always needed: data as real as possible, as close to reality as possible.",
          quoteAuthor: "Eduardo Martin · Analytics & Campaigns · Dreamplace Hotels",
          body: "Dreamplace moved off a cookie-based EU analytics stack to Sealmetrics. Aggregate channel revenue began reconciling with the PMS within the first week. The reporting conversation shifted from \"which number is real\" to which channels actually drove the bookings — the original purpose of analytics, restored.",
          href: "/case-studies/dreamplace-hotels",
          linkLabel: "Read the full Dreamplace case study",
        },
        gapStats: [
          { n: "€30K+", label: "Enterprise minimum", detail: "Enterprise plan starts around €30K/yr." },
          { n: "Cookie-based", label: "Same consent dependency", detail: "40–60% EU traffic still lost to rejection." },
          { n: "Banner required", label: "No compliance advantage", detail: "Needs consent banner like GA4." },
          { n: "Manual DPIA", label: "Per-cookie review", detail: "Cookie addition still triggers compliance scope." },
        ],
        comparison: [
          { category: "Pricing", block: "commercial", rows: [
            { feature: "Entry plan", them: "Free (limited) / Enterprise from €30K/yr", us: "€499/mo from Growth" },
            { feature: "Implementation support", them: "Enterprise-only", us: "Founder-led on all plans" },
          ]},
          { category: "Data capture", block: "technical", rows: [
            { feature: "Cookies", them: "Yes · opt-in required", us: "None" },
            { feature: "Consent banner needed", them: "Yes", us: "No · GDPR by architecture" },
            { feature: "EU traffic captured", them: "60% typical with banner", us: "100% captured" },
          ]},
          { category: "Infrastructure", block: "technical", rows: [
            { feature: "Data residency", them: "EU (Germany options)", us: "EU (Dublin)" },
            { feature: "Schrems II", them: "Clean", us: "Clean" },
          ]},
          { category: "Modern stack", block: "reporting", rows: [
            { feature: "MCP / AI integration", them: "No native support", us: "Native MCP server" },
            { feature: "BigQuery export", them: "Enterprise add-on", us: "Included from Growth" },
          ]},
          { category: "Customer success", block: "commercial", rows: [
            { feature: "Onboarding", them: "Guided on enterprise contracts", us: "Founder-led · 15-minute install" },
            { feature: "Support", them: "Tiered · SLAs on enterprise", us: "Direct support on every plan" },
          ]},
          { category: "Reporting parity", block: "reporting", rows: [
            { feature: "Prebuilt reports", them: "Full classic reporting UI · mature", us: "Decision-ready defaults · channels, funnels, pages" },
            { feature: "Reporting in consentless mode", them: "Consentless mode drops visitor-level reports", us: "Full reporting · always cookieless" },
            { feature: "Custom analysis", them: "Segments + custom reports", us: "Segments + property breakdowns · BigQuery for deep dives" },
          ]},
        ],
        faqs: [
          { q: "Piwik PRO is also EU-hosted. Why is Sealmetrics different?", a: "EU hosting solves data residency. It doesn't solve consent. Piwik PRO uses cookies, requires consent, and loses the same 40–60% of EU visitors. Sealmetrics solves both: EU-hosted AND cookieless, so nothing gets lost to consent rejection." },
          { q: "Isn't Piwik PRO's consent-aware tracking enough?", a: "It depends on your risk appetite. Piwik PRO has a 'consentless tracking' mode, but it relies on interpreting RGPD/ePrivacy carve-outs that vary per jurisdiction (CNIL treats it differently from BfDI). Sealmetrics takes no personal data at all — you're out of scope universally, no interpretation required." },
          { q: "What about their Customer Data Platform features?", a: "Piwik PRO bundles CDP features in higher tiers. If you need a CDP, pair Sealmetrics with Segment/Rudderstack (more mature, better pricing). For pure analytics, Sealmetrics is complete data at a fraction of Piwik PRO's enterprise cost." },
          { q: "Can I migrate from Piwik PRO?", a: "Yes. Run both 30 days. Compare traffic volumes (Sealmetrics typically shows 30–70% more), compare attribution (Sealmetrics attributes the 'direct' bucket correctly). Most teams decide within the first 14 days." },
        ],
        ctaTitle: <>EU hosting <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>plus complete capture.</em></>,
        ctaLede: "30 minutes. We run your site through Sealmetrics and Piwik PRO simultaneously. You see how much of your EU traffic Piwik PRO's banner still loses.",
      },
      es: {
        competitor: "Piwik PRO",
        hook: "Piwik PRO ofrece analítica alojada en UE pero sigue siendo basada en cookies, requiere consentimiento y con precio de 30K€+/año. La arquitectura está más cerca de GA4 de lo que parece — solo alojada en servidores europeos.",
        eyebrow: "vs Piwik PRO",
        h1: <>El hosting UE es el <em>principio</em>, no la meta.</>,
        lede: "Piwik PRO corre en Europa — eso está bien. Pero sigue usando cookies, requiere consentimiento y pierde el mismo tráfico UE que GA4. Sealmetrics resuelve el problema de raíz: la arquitectura, no solo el hosting.",
        tldr: {
          answer: (
            <>
              Piwik PRO es la analítica comercial alojada en UE más
              creíble — residencia de datos en Alemania, contratos
              enterprise, producto consciente del RGPD. Pero la
              arquitectura está más cerca de GA4 de lo que sugiere el
              marketing: cookies activadas por defecto, banner de
              consentimiento requerido, el modo sin consentimiento es
              una configuración con matices por jurisdicción.
              Sealmetrics es sin consentimiento por diseño — sin
              cookie, sin identificador, sin configuración. El hosting
              UE resuelve la residencia; la captura completa requiere
              quitar la cookie. Sealmetrics hace ambos.
            </>
          ),
          bullets: [
            <>Piwik PRO: alojado en UE, pero la arquitectura cookie + consentimiento sigue perdiendo el 40–60%.</>,
            <>Sealmetrics: sin cookies y sin consentimiento por diseño, 100% de captura, sólo UE.</>,
            <>Si solo importara el hosting Piwik PRO bastaría; en 2026, la cookie es el cuello de botella.</>,
          ],
        },
        caseStudy: {
          eyebrow: "Migró desde un stack EU basado en cookies",
          title: <>Cómo Dreamplace Hotels cambió <em className="italic-accent">configuración por claridad</em>.</>,
          quote: "Lo que nos aporta es lo que hemos necesitado siempre: el dato lo más real posible y lo más próximo a la realidad.",
          quoteAuthor: "Eduardo Martin · Analytics & Campaigns · Dreamplace Hotels",
          body: "Dreamplace migró desde un stack EU basado en cookies a Sealmetrics. Los ingresos agregados por canal empezaron a cuadrar con el PMS en la primera semana. La conversación de reporting pasó de \"qué número es real\" a qué canales realmente generaron las reservas — el propósito original de la analítica, restaurado.",
          href: "/es/case-studies/dreamplace-hotels",
          linkLabel: "Leer el case study completo de Dreamplace",
        },
        gapStats: [
          { n: "30K€+", label: "Mínimo enterprise", detail: "Plan enterprise arranca en ~30K€/año." },
          { n: "Con cookies", label: "Misma dependencia", detail: "40–60% tráfico UE sigue perdido por rechazo." },
          { n: "Banner requerido", label: "Sin ventaja compliance", detail: "Necesita banner como GA4." },
          { n: "DPIA manual", label: "Revisión por cookie", detail: "Añadir cookie sigue disparando scope de compliance." },
        ],
        comparison: [
          { category: "Precio", block: "commercial", rows: [
            { feature: "Plan de entrada", them: "Free (limitado) / Enterprise desde 30K€/año", us: "€499/mes desde Growth" },
            { feature: "Soporte implementación", them: "Solo Enterprise", us: "Liderado por founder en todos los planes" },
          ]},
          { category: "Captura de datos", block: "technical", rows: [
            { feature: "Cookies", them: "Sí · opt-in requerido", us: "Ninguna" },
            { feature: "Banner consentimiento", them: "Sí", us: "No · fuera del scope RGPD" },
            { feature: "Tráfico UE capturado", them: "60% típico con banner", us: "100% capturado" },
          ]},
          { category: "Infraestructura", block: "technical", rows: [
            { feature: "Residencia", them: "UE (opciones Alemania)", us: "UE (Dublín)" },
            { feature: "Schrems II", them: "Limpio", us: "Limpio" },
          ]},
          { category: "Stack moderno", block: "reporting", rows: [
            { feature: "MCP / integración IA", them: "Sin soporte nativo", us: "MCP server nativo" },
            { feature: "Export BigQuery", them: "Add-on enterprise", us: "Incluido desde Growth" },
          ]},
          { category: "Customer success", block: "commercial", rows: [
            { feature: "Onboarding", them: "Guiado en contratos enterprise", us: "Liderado por el founder · instalación en 15 min" },
            { feature: "Soporte", them: "Por tiers · SLAs en enterprise", us: "Soporte directo en todos los planes" },
          ]},
          { category: "Paridad de reporting", block: "reporting", rows: [
            { feature: "Informes listos", them: "UI de reporting clásica completa · madura", us: "Listos por defecto · canales, funnels, páginas" },
            { feature: "Reporting en modo consentless", them: "El modo consentless pierde informes a nivel visitante", us: "Reporting completo · siempre sin cookies" },
            { feature: "Análisis custom", them: "Segmentos + informes custom", us: "Segmentos + breakdowns por propiedad · BigQuery para deep dives" },
          ]},
        ],
        faqs: [
          { q: "Piwik PRO también está alojado en UE. ¿Por qué es distinto Sealmetrics?", a: "El hosting UE resuelve la residencia. No resuelve el consentimiento. Piwik PRO usa cookies, requiere consentimiento y pierde el mismo 40–60% de visitantes UE. Sealmetrics resuelve ambos: alojado en UE Y sin cookies, así nada se pierde por rechazo." },
          { q: "¿No basta con su tracking consent-aware?", a: "Depende de tu apetito de riesgo. Piwik PRO tiene un modo 'consentless tracking', pero depende de interpretar excepciones RGPD/ePrivacy que varían por jurisdicción (CNIL lo trata distinto a BfDI). Sealmetrics no toma datos personales en absoluto — estás fuera de scope universalmente, sin interpretación." },
          { q: "¿Y sus features de Customer Data Platform?", a: "Piwik PRO empaqueta features CDP en tiers altos. Si necesitas un CDP, combina Sealmetrics con Segment/Rudderstack (más maduros, mejor precio). Para analítica pura, Sealmetrics es dato completo a una fracción del coste enterprise de Piwik PRO." },
          { q: "¿Puedo migrar desde Piwik PRO?", a: "Sí. Corre ambos 30 días. Compara volúmenes de tráfico (Sealmetrics típicamente muestra 30–70% más), compara atribución (Sealmetrics atribuye el bucket 'directo' correctamente). La mayoría de equipos decide en los primeros 14 días." },
        ],
        ctaTitle: <>Hosting UE <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>más captura completa.</em></>,
        ctaLede: "30 min. Pasamos tu web por Sealmetrics y Piwik PRO simultáneamente. Ves cuánto tráfico UE sigue perdiendo el banner de Piwik PRO.",
      },
    },
    matomo: {
      en: {
        competitor: "Matomo",
        hook: "Matomo is open-source and EU-friendly. Cloud is mid-priced and self-hosted is 'free' on paper. But cookies are on by default, dropping the banner means a consent-exempt configuration that costs you attribution, and the modern stack arrives as plugins you install and maintain.",
        eyebrow: "vs Matomo",
        h1: <>Open-source is great. <em>Cookies are still the bottleneck.</em></>,
        lede: "Matomo (Cloud or self-hosted) is the most credible open-source analytics in Europe. But its default is cookie-based, its cookieless mode trades features for compliance, and the operational cost of self-hosting eats the 'free' label. Sealmetrics is cookieless by design, EU-hosted, with a modern stack — from €499/mo, no devops required.",
        tldr: {
          answer: (
            <>
              Matomo is the most credible open-source analytics in
              Europe — Cloud or self-hosted, GDPR-aware, plugin
              ecosystem. Two architectural realities: cookies are on
              by default, and running without a banner means adopting a
              consent-exempt configuration that costs you
              returning-visitor recognition and multi-session
              attribution — permitted under France&rsquo;s CNIL
              criteria, not under Germany&rsquo;s TDDDG §25.
              Self-hosting is &ldquo;free on the licence&rdquo; but typically costs <strong>€15–40K/year</strong>{" "}
              in operations once you account for servers, security
              patches, plugin maintenance and on-call. Sealmetrics is
              cookieless across the entire product, fully managed,
              EU-hosted in Dublin, with native MCP and BigQuery — from
              €499/mo, no devops required.
            </>
          ),
          bullets: [
            <>Matomo Cloud / self-host: cookies on by default; no banner only under a consent-exempt configuration that drops features.</>,
            <>Self-hosting TCO: licence is free, operations are 0.2–0.5 FTE for a serious eCommerce.</>,
            <>Sealmetrics: cookieless across the whole product, modern AI-native stack, zero ops.</>,
          ],
        },
        caseStudy: {
          eyebrow: "Replaced a DIY analytics stack",
          title: <>How Dreamplace Hotels traded <em className="italic-accent">DIY ops for clarity</em>.</>,
          quote: "What it gives us is what we've always needed: data as real as possible, as close to reality as possible.",
          quoteAuthor: "Eduardo Martin · Analytics & Campaigns · Dreamplace Hotels",
          body: "Dreamplace moved to Sealmetrics from a DIY analytics setup. Aggregate channel revenue began reconciling with the PMS within the first week. No servers to patch, no plugins to maintain, no cookie banner to defend — just channel performance reconciled to the booking ledger, on day one.",
          href: "/case-studies/dreamplace-hotels",
          linkLabel: "Read the full Dreamplace case study",
        },
        gapStats: [
          { n: "Cookies on", label: "Default tracking mode", detail: "Cookieless mode exists but is limited and not the default." },
          { n: "Self-host", label: "DevOps overhead", detail: "Servers, backups, security patches, scaling — your team's time." },
          { n: "Plugin maze", label: "Modern features bolted on", detail: "Real-time, advanced reports and integrations live behind paid plugins." },
          { n: "Add-on", label: "MCP is a plugin", detail: "Matomo MCP shipped in 2026 as an installable plugin — layered on data the exempt configuration has already thinned." },
        ],
        comparison: [
          { category: "Pricing & operations", block: "commercial", rows: [
            { feature: "Entry cost", them: "Cloud from $23 / ~€29 per month (50K hits) · self-hosted 'free' + ops", us: "€499/mo · all-inclusive · no ops" },
            { feature: "Total cost of ownership (self-host)", them: "Server, ops, security, plugins, upgrades", us: "Zero infra cost · fully managed" },
            { feature: "Implementation support", them: "Community forum / paid consultancy", us: "Founder-led on all plans" },
          ]},
          { category: "Data capture", block: "technical", rows: [
            { feature: "Default mode", them: "Cookies on · no banner only under a consent-exempt configuration (CNIL criteria); banner required in Germany", us: "Cookieless · nothing written to or read from the device" },
            { feature: "Cookieless mode available", them: "Yes — config_id recognises a visitor for ~30 min (24h max) by design", us: "Full functionality, always cookieless" },
            { feature: "EU traffic captured (typical)", them: "~60% running a consent banner (default setup)", us: "100% captured" },
            { feature: "Report archiving at scale", them: "No sampling — but cron-driven archiving bottlenecks on self-host", us: "No archiving step · unsampled" },
          ]},
          { category: "Compliance", block: "technical", rows: [
            { feature: "GDPR posture", them: "Compliant by configuration · must be maintained and evidenced", us: "Compliant by architecture · no configuration to audit" },
            { feature: "Data residency (Cloud)", them: "EU options · paid plans", us: "EU-only · Dublin · all plans" },
            { feature: "Schrems II", them: "Clean (Cloud EU)", us: "Clean" },
          ]},
          { category: "Modern stack", block: "reporting", rows: [
            { feature: "Native MCP / AI agents", them: "Plugin (Cloud + On-Premise, since 2026)", us: "Native · no plugin · all plans" },
            { feature: "BigQuery / warehouse export", them: "Paid plugin or manual ETL", us: "Native · all plans · full resolution" },
            { feature: "Real-time latency", them: "Live visitor log is real-time · reports wait on cron archiving", us: "< 2 minutes · default" },
            { feature: "Ask-your-data AI assistant", them: "MCP plugin or premium add-on", us: "LENS AI on all plans (BYOK) · managed Private AI from Scale" },
          ]},
          { category: "Customer success", block: "commercial", rows: [
            { feature: "Onboarding", them: "Self-serve · docs + forum", us: "Founder-led · 15-minute install" },
            { feature: "Support", them: "Paid support plans (Cloud)", us: "Direct support on every plan" },
          ]},
          { category: "Reporting parity", block: "reporting", rows: [
            { feature: "Prebuilt reports", them: "Full classic reporting UI · mature", us: "Decision-ready defaults · channels, funnels, pages" },
            { feature: "Reporting in cookieless mode", them: "Drops visitor profiles + several reports", us: "Full reporting · always cookieless" },
            { feature: "Custom analysis", them: "Custom reports + segments (some behind plugins)", us: "Segments + property breakdowns · unsampled" },
          ]},
        ],
        faqs: [
          { q: "Isn't Matomo's cookieless mode equivalent to Sealmetrics?", a: "Not really. Without cookies Matomo falls back to config_id, a short-lived environment hash — a window of roughly 30 minutes, 24 hours at most — deliberately built not to recognise returning visitors. Pageviews, events, downloads, outlinks and site search survive intact; returning-visitor counts, visit frequency, multi-session campaign attribution and cohorts degrade. Sealmetrics is cookieless across the entire product with no toggle and no feature loss. The legal basis also differs in kind: Matomo without a banner depends on holding a consent-exempt configuration — permitted under the CNIL criteria in France, not under Germany's TDDDG §25 — while Sealmetrics writes nothing to the visitor's device and reads nothing from it, so ePrivacy Article 5(3) is not engaged in the first place." },
          { q: "Self-hosted Matomo is free. Sealmetrics costs €499/mo. Why pay?", a: "Self-hosting is free on the licence. It is not free in operations: you need a server, security patches, backups, plugin maintenance, upgrade cycles and someone responsible when something breaks at 3 AM. For a serious eCommerce, that's typically 0.2–0.5 FTE — €15K–€40K/yr in real cost. Sealmetrics replaces all of that for €6K/yr, with cookieless data and a modern stack on top." },
          { q: "How does Matomo compare to Piwik PRO?", a: "Piwik PRO is a commercial fork of Matomo, with enterprise features and EU hosting layered on top. Both share the cookie-based architecture origin. Piwik PRO is closer to enterprise pricing (~€30K+/yr) while Matomo Cloud is more mid-market. Sealmetrics differs from both at the architecture level: not a privacy-friendly skin on cookie tracking, but cookieless capture by design." },
          { q: "What about Matomo's 1.5M+ users and ecosystem?", a: "Matomo's ecosystem is real and useful for blogs, content sites and small eCommerce. Sealmetrics is built for European eCommerce €10M+ where 40–60% data loss to consent banners breaks paid-media decisions. Different category, different buyer. If your site is content-driven and consent is acceptable, Matomo Cloud is reasonable. If your CFO is questioning marketing spend on incomplete numbers, you're past the lightweight tier." },
          { q: "What happens to this comparison if the EU Digital Omnibus passes?", a: "It narrows the gap, and it is worth saying so plainly. The Commission's proposal of 19 November 2025 (COM(2025) 837) would move cookie rules into the GDPR through a new Article 88a and exempt first-party, aggregated audience measurement for the controller's own use from consent. Adopted broadly as drafted — ordinary legislative procedure, realistically 2027–2028, substantive amendments likely — a Matomo in exempt configuration would qualify across the EU rather than only in France. What does not change: that configuration still costs you returning-visitor recognition and multi-session attribution, a first-party endpoint still survives ad blockers that a third-party script does not, and you still run the servers. Our position has never depended on the banner alone." },
          { q: "Can I migrate gradually from Matomo?", a: "Yes. Run both in parallel 30 days. Compare traffic counts (Sealmetrics typically captures 30–70% more EU traffic than a Matomo running a consent banner), compare attribution at channel level, compare revenue alignment with your backend. Most teams decide within the first 14 days." },
        ],
        ctaTitle: <>Cookieless by design. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>No devops required.</em></>,
        ctaLede: "30 minutes with the founder. We run your site through Sealmetrics and Matomo simultaneously — you see the traffic a Matomo consent banner still loses, what the exempt configuration costs you in attribution, and what your real-data dashboards look like.",
      },
      es: {
        competitor: "Matomo",
        hook: "Matomo es open-source y amigable con UE. Cloud es de precio medio y self-hosted es 'gratis' sobre el papel. Pero las cookies siguen activas por defecto, quitar el banner exige una configuración de exención que te cuesta atribución, y el stack moderno llega como plugins que instalas y mantienes.",
        eyebrow: "vs Matomo",
        h1: <>Open-source está bien. <em>Las cookies siguen siendo el cuello de botella.</em></>,
        lede: "Matomo (Cloud o self-hosted) es la analítica open-source más creíble en Europa. Pero su modo por defecto es con cookies, su modo cookieless cambia features por compliance, y el coste operativo del self-hosting se come la etiqueta de 'gratis'. Sealmetrics es cookieless por diseño, alojado en UE, con stack moderno — desde €499/mes, sin devops.",
        tldr: {
          answer: (
            <>
              Matomo es la analítica open-source más creíble de Europa
              — Cloud o self-hosted, RGPD-aware, ecosistema de plugins.
              Dos realidades arquitectónicas: cookies activadas por
              defecto, y operar sin banner exige adoptar una configuración
              de exención que te cuesta el reconocimiento de visitante
              recurrente y la atribución multi-sesión — permitida por
              los criterios de la CNIL francesa, no por el §25 de la
              TDDDG alemana. Y self-hosting &laquo;gratis
              en licencia&raquo; que suele costar{" "}
              <strong>15–40K€/año</strong> en operaciones una vez
              cuentas servidores, parches de seguridad, mantenimiento
              de plugins y on-call. Sealmetrics es cookieless en todo
              el producto, totalmente gestionado, alojado en Dublín, con
              MCP nativo y BigQuery — desde €499/mes, cero devops.
            </>
          ),
          bullets: [
            <>Matomo Cloud / self-host: cookies por defecto; sin banner solo bajo una configuración de exención que recorta features.</>,
            <>TCO self-hosting: la licencia es gratis, las operaciones son 0,2–0,5 FTE para un eCommerce serio.</>,
            <>Sealmetrics: sin cookies en todo el producto, stack moderno AI-native, cero operaciones.</>,
          ],
        },
        caseStudy: {
          eyebrow: "Reemplazó un stack DIY de analítica",
          title: <>Cómo Dreamplace Hotels cambió <em className="italic-accent">DIY por claridad</em>.</>,
          quote: "Lo que nos aporta es lo que hemos necesitado siempre: el dato lo más real posible y lo más próximo a la realidad.",
          quoteAuthor: "Eduardo Martin · Analytics & Campaigns · Dreamplace Hotels",
          body: "Dreamplace migró a Sealmetrics desde un setup analítico DIY. Los ingresos agregados por canal empezaron a cuadrar con el PMS en la primera semana. Sin servidores que parchear, sin plugins que mantener, sin banner de cookies que defender — solo rendimiento de canal cuadrado con el ledger de reservas, desde el día uno.",
          href: "/es/case-studies/dreamplace-hotels",
          linkLabel: "Leer el case study completo de Dreamplace",
        },
        gapStats: [
          { n: "Cookies on", label: "Modo de tracking por defecto", detail: "El modo cookieless existe pero es limitado y no es el default." },
          { n: "Self-host", label: "Overhead DevOps", detail: "Servidores, backups, parches de seguridad, escalado — tiempo de tu equipo." },
          { n: "Laberinto plugins", label: "Features modernas a pedazos", detail: "Tiempo real, reportes avanzados e integraciones detrás de plugins de pago." },
          { n: "Add-on", label: "El MCP es un plugin", detail: "Matomo MCP salió en 2026 como plugin instalable — encima de un dato que la configuración de exención ya ha adelgazado." },
        ],
        comparison: [
          { category: "Precio y operación", block: "commercial", rows: [
            { feature: "Coste de entrada", them: "Cloud desde $23 / ~29€ al mes (50K hits) · self-hosted 'gratis' + ops", us: "€499/mes · todo incluido · sin ops" },
            { feature: "TCO (self-host)", them: "Servidor, ops, seguridad, plugins, upgrades", us: "Cero coste de infra · totalmente gestionado" },
            { feature: "Soporte implementación", them: "Foro comunidad / consultoría de pago", us: "Liderado por founder en todos los planes" },
          ]},
          { category: "Captura de datos", block: "technical", rows: [
            { feature: "Modo por defecto", them: "Cookies on · sin banner solo bajo configuración de exención (criterios CNIL); banner requerido en Alemania", us: "Sin cookies · no escribe ni lee nada del dispositivo" },
            { feature: "Modo cookieless disponible", them: "Sí — config_id reconoce al visitante ~30 min (24h máx) por diseño", us: "Funcionalidad completa, siempre sin cookies" },
            { feature: "Tráfico UE capturado (típico)", them: "~60% con banner de consentimiento (configuración por defecto)", us: "100% capturado" },
            { feature: "Archivado de informes a escala", them: "Sin muestreo — pero el archivado por cron hace cuello de botella en self-host", us: "Sin paso de archivado · sin muestreo" },
          ]},
          { category: "Compliance", block: "technical", rows: [
            { feature: "Postura RGPD", them: "Cumplimiento por configuración · hay que mantenerlo y demostrarlo", us: "Cumplimiento por arquitectura · sin configuración que auditar" },
            { feature: "Residencia (Cloud)", them: "Opciones UE · planes de pago", us: "Solo UE · Dublín · todos los planes" },
            { feature: "Schrems II", them: "Limpio (Cloud UE)", us: "Limpio" },
          ]},
          { category: "Stack moderno", block: "reporting", rows: [
            { feature: "MCP / agentes IA nativos", them: "Plugin (Cloud + On-Premise, desde 2026)", us: "Nativo · sin plugin · todos los planes" },
            { feature: "Export BigQuery / warehouse", them: "Plugin de pago o ETL manual", us: "Nativo · todos los planes · resolución completa" },
            { feature: "Latencia tiempo real", them: "El log de visitas es en tiempo real · los informes esperan al archivado por cron", us: "< 2 minutos · por defecto" },
            { feature: "Asistente IA sobre tus datos", them: "Plugin MCP o add-on premium", us: "LENS AI en todos los planes (BYOK) · Private AI gestionada desde Scale" },
          ]},
          { category: "Customer success", block: "commercial", rows: [
            { feature: "Onboarding", them: "Self-serve · docs + foro", us: "Liderado por el founder · instalación en 15 min" },
            { feature: "Soporte", them: "Planes de soporte de pago (Cloud)", us: "Soporte directo en todos los planes" },
          ]},
          { category: "Paridad de reporting", block: "reporting", rows: [
            { feature: "Informes listos", them: "UI de reporting clásica completa · madura", us: "Listos por defecto · canales, funnels, páginas" },
            { feature: "Reporting en modo cookieless", them: "Pierde perfiles de visitante + varios informes", us: "Reporting completo · siempre sin cookies" },
            { feature: "Análisis custom", them: "Informes custom + segmentos (algunos tras plugins)", us: "Segmentos + breakdowns por propiedad · sin muestreo" },
          ]},
        ],
        faqs: [
          { q: "¿No es el modo cookieless de Matomo equivalente a Sealmetrics?", a: "No del todo. Sin cookies, Matomo cae a config_id, un hash de entorno efímero — una ventana de unos 30 minutos, 24 horas como máximo — diseñado deliberadamente para no reconocer visitantes recurrentes. Páginas vistas, eventos, descargas, outlinks y búsqueda interna sobreviven intactos; se degradan los visitantes recurrentes, la frecuencia de visita, la atribución de campaña multi-sesión y las cohortes. Sealmetrics es cookieless en todo el producto, sin toggle y sin pérdida de funcionalidad. La base legal también difiere en naturaleza: Matomo sin banner depende de sostener una configuración de exención — permitida por los criterios de la CNIL en Francia, no por el §25 de la TDDDG alemana — mientras que Sealmetrics no escribe nada en el dispositivo del visitante ni lee nada de él, así que el artículo 5(3) de ePrivacy no llega a activarse." },
          { q: "Matomo self-hosted es gratis. Sealmetrics cuesta €499/mes. ¿Por qué pagar?", a: "Self-hosting es gratis en licencia. No es gratis en operación: necesitas servidor, parches de seguridad, backups, mantenimiento de plugins, ciclos de upgrade y alguien responsable cuando algo se rompe a las 3 AM. Para un eCommerce serio, suele ser 0,2–0,5 FTE — 15K€–40K€/año de coste real. Sealmetrics reemplaza todo eso por 6K€/año, con dato cookieless y stack moderno encima." },
          { q: "¿Cómo se compara Matomo con Piwik PRO?", a: "Piwik PRO es un fork comercial de Matomo, con features enterprise y hosting UE encima. Ambos comparten el origen de arquitectura basada en cookies. Piwik PRO está más cerca de pricing enterprise (~30K€+/año) mientras Matomo Cloud es más mid-market. Sealmetrics se diferencia de ambos en arquitectura: no es una capa privacy-friendly sobre tracking con cookies, sino captura cookieless por diseño." },
          { q: "¿Y los más de 1,5M de usuarios y el ecosistema de Matomo?", a: "El ecosistema de Matomo es real y útil para blogs, sitios de contenido y eCommerce pequeño. Sealmetrics está construido para eCommerce europeo de 10M€+ donde 40–60% de pérdida de datos por banners de consentimiento rompe las decisiones de paid media. Categoría distinta, buyer distinto. Si tu sitio es content-driven y el consentimiento es aceptable, Matomo Cloud es razonable. Si tu CFO está cuestionando el spend de marketing por números incompletos, estás más allá del tier ligero." },
          { q: "¿Qué pasa con esta comparativa si sale adelante el Digital Omnibus europeo?", a: "Estrecha la diferencia, y conviene decirlo sin rodeos. La propuesta de la Comisión de 19 de noviembre de 2025 (COM(2025) 837) trasladaría las reglas de cookies al RGPD mediante un nuevo artículo 88a y eximiría de consentimiento la medición de audiencia agregada, first-party y de uso propio del responsable. Si se adopta en algo parecido a su forma actual — procedimiento legislativo ordinario, realistamente 2027–2028, con enmiendas sustantivas probables — un Matomo en configuración de exención encajaría en toda la UE y no solo en Francia. Lo que no cambia: esa configuración te sigue costando el reconocimiento de visitante recurrente y la atribución multi-sesión, un endpoint first-party sigue sobreviviendo a bloqueadores que tumban un script de tercera parte, y los servidores los sigues llevando tú. Nuestra posición nunca ha dependido solo del banner." },
          { q: "¿Puedo migrar gradualmente desde Matomo?", a: "Sí. Corre ambos en paralelo 30 días. Compara conteos de tráfico (Sealmetrics típicamente captura 30–70% más tráfico UE que un Matomo con banner de consentimiento), compara atribución a nivel de canal, compara alineación de revenue con tu backend. La mayoría de equipos decide en los primeros 14 días." },
        ],
        ctaTitle: <>Cookieless por diseño. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Sin devops.</em></>,
        ctaLede: "30 min con el founder. Pasamos tu sitio por Sealmetrics y Matomo a la vez — ves el tráfico que un banner de Matomo sigue perdiendo, lo que te cuesta en atribución la configuración de exención, y cómo se ven tus dashboards con datos reales.",
      },
    },
    "google-analytics": {
      en: {
        competitor: "Google Analytics",
        techReportHref: "https://docs.sealmetrics.com/guides/tracker-performance-report",
        hook: "Google Analytics remains the default, but the default is losing 40–60% of EU traffic. The honest alternative isn't 'another free tool' — it's complete data at enterprise reliability.",
        eyebrow: "Google Analytics alternatives",
        h1: <>Looking for a <em>GA alternative</em> that doesn't commoditize your data?</>,
        lede: "Most alternatives are cheaper or simpler GA clones. Sealmetrics is a different category: complete data, EU-hosted, zero consent scope, enterprise reliability. The serious replacement for teams past the hobbyist tier.",
        tldr: {
          answer: (
            <>
              Google Analytics remains the default — and most
              alternatives are cheaper clones of the same architecture.
              Plausible and Fathom are lighter; Matomo is open-source;
              Piwik PRO is EU-hosted; GA360 is the premium version of
              the original. They share the same trade-off: cookie or
              cookie-light tracking that still loses{" "}
              <strong>40–60% of EU traffic</strong> to consent rejection
              and ad blockers. The serious alternative for an eCommerce
              over €10M revenue is a different category — complete
              capture, EU-hosted, zero consent scope, last-click
              attribution on 100% of data.
            </>
          ),
          bullets: [
            <>Plausible, Fathom, Umami: lightweight; fine for blogs and content sites.</>,
            <>Matomo, Piwik PRO: open-source / EU-hosted; cookie-based architecture, same gap.</>,
            <>Sealmetrics: complete EU data capture, enterprise reliability, modern AI-native stack.</>,
          ],
        },
        caseStudy: {
          eyebrow: "Migrated from a Google-Analytics stack",
          title: <>What &ldquo;serious alternative&rdquo; <em className="italic-accent">actually unlocks</em>.</>,
          quote: "The data Sealmetrics delivers is agnostic, unbiased and neutral. There's no black box.",
          quoteAuthor: "Toni Andújar · Digital & Direct Sales Director · Palladium Hotel Group",
          body: "Palladium audited Sealmetrics against their existing GA stack. The result: 40% of inbound traffic with no source/medium attribution in GA, 35% of bookings unassigned to a channel, and a +165% Cost-per-Search improvement on Display once the Sealmetrics measurement model drove DV360 decisions.",
          href: "/case-studies/palladium-hotel-group",
          linkLabel: "Read the full Palladium case study",
        },
        gapStats: [
          { n: "40–60%", label: "EU traffic lost", detail: "GA + consent banner combo." },
          { n: "US-hosted", label: "Schrems II exposure", detail: "Ongoing CNIL/DPA challenges." },
          { n: "Sampling", label: "Above threshold", detail: "Black Friday = estimates, not measurements." },
          { n: "14 mo", label: "Default data retention", detail: "Can extend to 50 months — still fixed cap." },
        ],
        comparison: [
          { category: "Data completeness", block: "technical", rows: [
            { feature: "Cookie-free capture", them: "Consent Mode v2 (modelled)", us: "Native · no modelling" },
            { feature: "Ad blocker resilience", them: "Blocked (third-party script)", us: "First-party · invisible to blockers" },
            { feature: "Sampling at scale", them: "Yes", us: "Never" },
          ]},
          { category: "Compliance", block: "technical", rows: [
            { feature: "GDPR posture", them: "Consent banner required", us: "GDPR by architecture" },
            { feature: "Schrems II", them: "Exposed", us: "Clean" },
            { feature: "Data residency", them: "US", us: "EU · Dublin" },
          ]},
          { category: "Modern stack", block: "reporting", rows: [
            { feature: "MCP for AI agents", them: "No", us: "Native" },
            { feature: "BigQuery export", them: "Yes (sampled above thresholds)", us: "Full resolution · all plans" },
            { feature: "Real-time latency", them: "Up to 48 hours", us: "< 2 minutes" },
          ]},
          { category: "Commercial", block: "commercial", rows: [
            { feature: "Price", them: "Free (data trains Google ads)", us: "€499/mo from annual" },
            { feature: "Your data ownership", them: "Shared with Google ad models", us: "Yours only · no training for anyone" },
          ]},
          { category: "Tracker performance (measured)", block: "technical", rows: [
            { feature: "Script weight on the wire (gzip)", them: "~146 KB · gtag.js", us: "1.1 KB · ~132× lighter" },
            { feature: "JavaScript parsed on the device", them: "~409 KB", us: "2.0 KB" },
            { feature: "Pageview hit secured", them: "~0.5–0.7 s best case · only after consent", us: "~0.1–0.3 s · sendBeacon from the head" },
          ]},
          { category: "Customer success", block: "commercial", rows: [
            { feature: "Onboarding", them: "Self-serve or agency-led", us: "Founder-led · 15-minute install" },
            { feature: "Human support", them: "Community forums on the free tier", us: "Direct support on every plan" },
          ]},
          { category: "Reporting parity", block: "reporting", rows: [
            { feature: "Standard reports", them: "Reports + Explorations · 24–48 h processing lag", us: "Decision-ready defaults · real-time" },
            { feature: "Custom analysis", them: "Explorations · sampled at scale", us: "Segments + property breakdowns · unsampled" },
            { feature: "Audiences & remarketing", them: "Yes · its real strength", us: "Not a remarketing tool — no personal identifiers by design" },
          ]},
        ],
        faqs: [
          { q: "Why not just use another free analytics tool?", a: "Most free tools are lightweight clones — fewer features, less reliability, still cookie-based. If you're deciding with serious marketing budget, 'free' becomes expensive quickly: misattributed spend, unreliable dashboards, no compliance clarity. Sealmetrics is priced for teams whose data decisions matter." },
          { q: "What about Plausible, Fathom, Umami — aren't those alternatives?", a: "They're great for simple sites, blogs and content publishers. They're not built for eCommerce at scale — no native revenue attribution, limited integrations, no BigQuery export, no AI/MCP. Different category, different buyer." },
          { q: "Do I need to migrate existing GA history?", a: "No. Sealmetrics runs from day one on new data. Most teams keep GA running alongside for historical reference and Google Ads integration, and use Sealmetrics for present + future decisions." },
          { q: "Can I use Data Studio with Sealmetrics?", a: "Yes. Full BigQuery export means Data Studio, Power BI, Tableau — any BI tool connects natively. No ETL, no sampling limits." },
        ],
        ctaTitle: <>Stop deciding with <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>40% of your data.</em></>,
        ctaLede: "30-minute walkthrough. We'll show you what your current GA is missing, live on your own traffic. No slides, no abstract numbers — your real data.",
      },
      es: {
        competitor: "Google Analytics",
        techReportHref: "https://docs.sealmetrics.com/guides/tracker-performance-report",
        hook: "Google Analytics sigue siendo el default, pero el default está perdiendo 40–60% del tráfico UE. La alternativa honesta no es 'otra herramienta gratis' — es dato completo con fiabilidad enterprise.",
        eyebrow: "Alternativas a Google Analytics",
        h1: <>¿Buscando una <em>alternativa a GA</em> que no commoditice tus datos?</>,
        lede: "La mayoría de alternativas son clones más baratos o simples de GA. Sealmetrics es otra categoría: dato completo, alojado en UE, cero scope de consentimiento, fiabilidad enterprise. El reemplazo serio para equipos que pasan el tier hobbyist.",
        tldr: {
          answer: (
            <>
              Google Analytics sigue siendo el default — y la mayoría
              de alternativas son clones más baratos de la misma
              arquitectura. Plausible y Fathom son más ligeros; Matomo
              es open-source; Piwik PRO está alojado en UE; GA360 es la
              versión premium del original. Comparten el mismo
              trade-off: tracking con cookies o cookie-light que sigue
              perdiendo <strong>40–60% del tráfico UE</strong> por
              rechazo de consentimiento y ad-blockers. La alternativa
              seria para un eCommerce con más de 10M€ de ingresos es
              otra categoría — captura completa, alojada en UE, cero
              scope de consentimiento, atribución last-click sobre el
              100% de los datos.
            </>
          ),
          bullets: [
            <>Plausible, Fathom, Umami: ligeros; bien para blogs y sites de contenido.</>,
            <>Matomo, Piwik PRO: open-source / alojados en UE; arquitectura con cookies, mismo gap.</>,
            <>Sealmetrics: captura UE completa, fiabilidad enterprise, stack moderno AI-native.</>,
          ],
        },
        caseStudy: {
          eyebrow: "Migró desde un stack Google-Analytics",
          title: <>Qué desbloquea <em className="italic-accent">una alternativa de verdad</em>.</>,
          quote: "Los datos que entrega Sealmetrics son agnósticos, sin sesgo y neutrales. No hay caja negra.",
          quoteAuthor: "Toni Andújar · Digital & Direct Sales Director · Palladium Hotel Group",
          body: "Palladium auditó Sealmetrics contra su stack GA existente. Resultado: 40% del tráfico entrante sin atribución source/medium en GA, 35% de reservas sin canal asignado y una mejora del +165% en Cost-per-Search en Display una vez el modelo de medición de Sealmetrics dirigió las decisiones de DV360.",
          href: "/es/case-studies/palladium-hotel-group",
          linkLabel: "Leer el case study completo de Palladium",
        },
        gapStats: [
          { n: "40–60%", label: "Tráfico UE perdido", detail: "Combo GA + banner de consentimiento." },
          { n: "US-hosted", label: "Exposición Schrems II", detail: "Challenges CNIL/DPA en curso." },
          { n: "Muestreo", label: "Sobre umbral", detail: "Black Friday = estimaciones, no mediciones." },
          { n: "14 meses", label: "Retención por defecto", detail: "Ampliable a 50 meses — sigue siendo tope fijo." },
        ],
        comparison: [
          { category: "Completitud de datos", block: "technical", rows: [
            { feature: "Captura sin cookies", them: "Consent Mode v2 (modelado)", us: "Nativo · sin modelado" },
            { feature: "Resistencia a ad blockers", them: "Bloqueado (script third-party)", us: "First-party · invisible a bloqueadores" },
            { feature: "Muestreo a escala", them: "Sí", us: "Nunca" },
          ]},
          { category: "Compliance", block: "technical", rows: [
            { feature: "Postura RGPD", them: "Banner de consentimiento requerido", us: "RGPD por arquitectura · sin dato personal persistido" },
            { feature: "Schrems II", them: "Expuesto", us: "Limpio" },
            { feature: "Residencia de datos", them: "US", us: "UE · Dublín" },
          ]},
          { category: "Stack moderno", block: "reporting", rows: [
            { feature: "MCP para agentes IA", them: "No", us: "Nativo" },
            { feature: "Export BigQuery", them: "Sí (muestreado sobre umbrales)", us: "Resolución completa · todos los planes" },
            { feature: "Latencia tiempo real", them: "Hasta 48h", us: "< 2 minutos" },
          ]},
          { category: "Comercial", block: "commercial", rows: [
            { feature: "Precio", them: "Gratis (tus datos entrenan ads de Google)", us: "€499/mes desde anual" },
            { feature: "Propiedad de datos", them: "Compartidos con modelos de ads de Google", us: "Solo tuyos · sin training para nadie" },
          ]},
          { category: "Rendimiento del tracker (medido)", block: "technical", rows: [
            { feature: "Peso del script en red (gzip)", them: "~146 KB · gtag.js", us: "1,1 KB · ~132× más ligero" },
            { feature: "JavaScript parseado en el dispositivo", them: "~409 KB", us: "2,0 KB" },
            { feature: "Pageview asegurado", them: "~0,5–0,7 s mejor caso · solo tras consentimiento", us: "~0,1–0,3 s · sendBeacon desde el head" },
          ]},
          { category: "Customer success", block: "commercial", rows: [
            { feature: "Onboarding", them: "Self-serve o vía agencia", us: "Liderado por el founder · instalación en 15 min" },
            { feature: "Soporte humano", them: "Foros de comunidad en el tier gratuito", us: "Soporte directo en todos los planes" },
          ]},
          { category: "Paridad de reporting", block: "reporting", rows: [
            { feature: "Informes estándar", them: "Reports + Explorations · 24–48 h de retraso de procesado", us: "Listos por defecto · tiempo real" },
            { feature: "Análisis custom", them: "Explorations · muestreado a escala", us: "Segmentos + breakdowns por propiedad · sin muestreo" },
            { feature: "Audiencias y remarketing", them: "Sí · su verdadera fortaleza", us: "No es una herramienta de remarketing — sin identificadores personales por diseño" },
          ]},
        ],
        faqs: [
          { q: "¿Por qué no usar otra analítica gratis?", a: "La mayoría de herramientas gratis son clones ligeros — menos features, menos fiabilidad, siguen basadas en cookies. Si decides con presupuesto de marketing serio, 'gratis' sale caro rápido: inversión mal atribuida, dashboards poco fiables, sin claridad de compliance. Sealmetrics está priced para equipos cuyas decisiones de dato importan." },
          { q: "¿Y Plausible, Fathom, Umami — no son alternativas?", a: "Son geniales para sitios simples, blogs y publishers de contenido. No están pensados para eCommerce a escala — sin atribución de ingresos nativa, integraciones limitadas, sin export BigQuery, sin IA/MCP. Categoría distinta, buyer distinto." },
          { q: "¿Tengo que migrar el histórico de GA?", a: "No. Sealmetrics corre desde el día uno con datos nuevos. La mayoría mantiene GA en paralelo para referencia histórica e integración Google Ads, y usa Sealmetrics para decisiones presente + futuro." },
          { q: "¿Puedo usar Data Studio con Sealmetrics?", a: "Sí. Export completo a BigQuery = Data Studio, Power BI, Tableau — cualquier BI conecta nativamente. Sin ETL, sin límites de muestreo." },
        ],
        ctaTitle: <>Deja de decidir con <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>el 40% de tus datos.</em></>,
        ctaLede: "Walkthrough de 30 min. Te mostramos lo que tu GA actual está perdiendo, en directo, sobre tu propio tráfico. Sin slides, sin números abstractos — tu dato real.",
      },
    },
  };

  return { ...data[key][locale], locale };
}
