import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { FaqAccordionV3 } from "@/components/sections/v3/FaqAccordionV3";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Analítica con IA — IA privada sobre datos completos UE",
  description:
    "Analítica con IA en la que puedes confiar: dato cookieless completo, un MCP semántico e IA privada alojada en la UE. Pregúntale a Claude o ChatGPT por tu revenue — sin cookies, sin PII.",
  openGraph: {
    title: "Analítica con IA — IA privada sobre datos completos y en la UE",
    description:
      "Apunta un LLM a datos incompletos de GA4 y se inventa las respuestas. SealMetrics es analítica con IA bien hecha: dato completo, un MCP semántico e IA privada en la UE.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Analítica con IA — IA privada sobre datos completos y en la UE",
    description: "Dato completo. Un MCP semántico. IA privada en la UE. Pregunta a tu analítica en lenguaje natural.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/ai-analytics",
    languages: getAlternates("/ai-analytics"),
  },
  keywords: [
    "analítica con ia",
    "ai analytics",
    "analítica ia privada",
    "analítica ia rgpd",
    "mcp analítica",
    "chatgpt analítica",
    "claude analítica",
    "analítica agentes ia",
    "analítica cookieless ia",
    "analítica ia ue",
  ],
};

const faqs = [
  {
    q: "¿Qué es la analítica con IA?",
    a: "La analítica con IA es la capacidad de consultar tu dato web y de revenue en lenguaje natural y obtener una respuesta directa — sin SQL, sin construir dashboards, sin abrir un ticket a un analista. Un modelo de lenguaje como Claude o ChatGPT lee tu analítica a través de un conector y devuelve el número, el diagnóstico o la siguiente acción. La trampa es que la respuesta solo es tan fiable como el dato de debajo: apunta un LLM a una analítica incompleta y basada en cookies y producirá respuestas seguras, bien formateadas y falsas. SealMetrics es analítica con IA construida sobre dato cookieless completo, así que las respuestas se apoyan en el 100% de tu tráfico.",
  },
  {
    q: "¿Existe una herramienta de analítica con IA conforme con el RGPD?",
    a: "Sí. SealMetrics es analítica con IA conforme con el RGPD por arquitectura: la capa de medición es cookieless y no trata dato personal, y la capa de IA corre sobre infraestructura privada y alojada en la UE. Con LENS private AI, la inferencia corre sobre un modelo open-source (Gemma) alojado por Scaleway en París, mientras tu dato analítico permanece en Dublín — ambos en la UE. Tu dato nunca sale de la UE, nunca se comparte con ninguna empresa y nunca se usa para entrenar modelos de terceros. No hay banner de consentimiento ni dato personal en juego.",
  },
  {
    q: "¿Puedo conectar ChatGPT o Claude a mi analítica?",
    a: "Sí. SealMetrics incluye un servidor Model Context Protocol (MCP) con más de 40 herramientas de solo lectura. Conéctalo desde Claude, ChatGPT, Cursor o Claude Code en mcp.sealmetrics.com y pregunta directamente a tu analítica — revenue por canal, conversiones, rendimiento de landing pages, desperdicio de campañas. Cada herramienta mapea un concepto de negocio a una métrica canónica, así que el modelo llama a un contrato documentado en lugar de adivinar sobre columnas en bruto. Puedes usar la IA privada de SealMetrics o traer tu propia clave de Anthropic, OpenAI o Gemini — eliges el algoritmo, no el dato.",
  },
  {
    q: "¿Qué es la IA privada para analítica?",
    a: "IA privada significa que el modelo de lenguaje que lee tu dato corre sobre infraestructura de la que controlas los límites, no sobre un endpoint público compartido. Con SealMetrics LENS private AI, la inferencia corre sobre un modelo Gemma open-source alojado por Scaleway en París — dentro de la UE, nunca compartido con terceros, nunca usado para entrenar modelos externos. Los planes Enterprise y Corporate pueden tener una instancia dedicada y no compartida. Está disponible y se puede contratar ahora, no es una beta.",
  },
  {
    q: "¿En qué se diferencia esto de poner ChatGPT encima de GA4?",
    a: "Dos diferencias, ambas estructurales. Primero, el dato: GA4 se basa en cookies y depende del consentimiento, así que en la UE suele capturar una fracción del tráfico real — un LLM que razona sobre él es seguro y falso. SealMetrics captura el 100% sin cookies. Segundo, la interfaz: un warehouse abierto obliga al modelo a adivinar cuál de cientos de campos significa «revenue», lo que produce números plausibles pero falsos. El MCP de SealMetrics expone herramientas con nombre y una definición canónica cada una, así que el modelo no puede malinterpretar el esquema. El dato completo más una superficie acotada eliminan ambos modos de fallo.",
  },
  {
    q: "¿La analítica con IA necesita cookies o dato personal?",
    a: "No tiene por qué. SealMetrics mide eventos agregados y anónimos sin cookies, sin localStorage, sin fingerprinting y sin dato personal, y atribuye el revenue a último clic a nivel de evento. Como hay cero PII por construcción, la capa de IA no puede sacar a una persona, reconstruir un journey individual ni ejecutar modelos multi-touch — solo responde lo que el dato agregado y completo puede responder, que es justo lo que mantiene las respuestas honestas y conformes.",
  },
];

const pillars = [
  {
    eyebrow: "Los cimientos",
    title: "Dato completo",
    body: "La IA vale lo que vale su input. Cookieless, first-party, 100% del tráfico, nunca muestreado — así cada respuesta describe la totalidad de tu tráfico, no la fracción que aceptó un banner.",
    metric: "100%",
    metricLabel: "del tráfico, nunca modelado",
  },
  {
    eyebrow: "La interfaz",
    title: "Un MCP semántico",
    body: "Más de 40 herramientas de solo lectura con nombre, cada una mapeando un concepto de negocio a una métrica canónica. El modelo llama a un contrato documentado en lugar de adivinar sobre columnas en bruto. Nada que malinterpretar.",
    metric: "40+ herramientas",
    metricLabel: "vía MCP de fábrica",
  },
  {
    eyebrow: "El algoritmo",
    title: "IA privada, en la UE",
    body: "LENS private AI ejecuta la inferencia sobre un modelo open-source (Gemma) alojado por Scaleway en París, mientras tu dato permanece en Dublín. Nunca sale de la UE, nunca se comparte, nunca entrena modelos de terceros.",
    metric: "Solo UE",
    metricLabel: "inferencia + almacenamiento",
  },
  {
    eyebrow: "Tu elección",
    title: "Elige el algoritmo",
    body: "Usa la IA privada de SealMetrics, o trae tu propia clave de Anthropic, OpenAI o Gemini, o conecta el MCP alojado desde tu propio cliente. El mismo dato completo debajo — solo eliges el modelo.",
    metric: "BYOK",
    metricLabel: "o IA privada, o MCP",
  },
  {
    eyebrow: "El guardarraíl",
    title: "Cero PII, respuestas honestas",
    body: "Medición solo agregada: sin journeys por usuario, sin identificadores entre sesiones, sin modelos multi-touch. El modelo no puede fabricar a una persona porque nunca se almacenó ninguna.",
    metric: "0 PII",
    metricLabel: "por construcción",
  },
  {
    eyebrow: "El recibo",
    title: "Respuestas que puedes rastrear",
    body: "Cada respuesta se resuelve a una herramienta con nombre sobre un periodo explícito en tu zona horaria, y la atribución es a último clic a nivel de evento — así siempre puedes ver qué métrica produjo el número.",
    metric: "Último clic",
    metricLabel: "sobre el 100% del tráfico",
  },
];

const comparisonRows: Array<{ feature: string; generic: string; native: string }> = [
  { feature: "Base de dato", generic: "Basada en cookies, con consentimiento (parcial)", native: "Cookieless, 100% capturado" },
  { feature: "Cómo lo lee la IA", generic: "SQL en bruto contra tablas no vistas", native: "MCP semántico — herramientas con nombre" },
  { feature: "Respuestas plausibles pero falsas", generic: "Alto — una columna de staging parece real", native: "Acotado por estructura" },
  { feature: "Exposición de dato personal", generic: "Posible — las filas en bruto llevan PII", native: "Ninguna — 0 PII por construcción" },
  { feature: "Dónde corre la inferencia", generic: "Credenciales del warehouse a un modelo de EE. UU.", native: "IA privada en la UE, o tu clave" },
  { feature: "Ubicación del dato", generic: "Mayormente EE. UU.", native: "UE — Dublín + París" },
  { feature: "Atribución", generic: "Lo que el esquema codifique", native: "Último clic sobre el 100% del tráfico" },
  { feature: "Tiempo a la primera respuesta", generic: "Construir pipelines + dashboards", native: "Conecta el MCP, pregunta en palabras" },
];

const useCases = [
  {
    role: "CMO",
    headline: "Pregunta por qué se movió el ROAS y obtén respuesta",
    body: "«¿Por qué flojearon las ventas esta semana?» devuelve un diagnóstico — tráfico vs conversión, qué canal, qué landing page — apoyado en dato completo, no en una estimación modelada.",
  },
  {
    role: "eCommerce Manager",
    headline: "Revenue por SKU, en lenguaje natural",
    body: "Baja al revenue por categoría, variante y campaña preguntando, no construyendo un informe. Cada ítem es consultable — sin umbrales de muestreo escondiendo la cola larga.",
  },
  {
    role: "CTO / DPO",
    headline: "Una capa de IA que compliance aprueba",
    body: "IA privada alojada en la UE, cero PII en el dato, sin entrenamiento de modelos de terceros, un DPA incluido. La IA nunca ve a una persona porque nunca se almacenó ninguna.",
  },
  {
    role: "Constructor de IA",
    headline: "Monta un analista con Claude en una tarde",
    body: "Conecta el MCP de SealMetrics a Claude, ChatGPT, Cursor o Claude Code y deja que responda preguntas de revenue directamente — el mismo servidor puede incluso dar de alta un sitio nuevo desde el chat.",
  },
];

export default function AiAnalyticsEsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Analítica con IA" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Analítica con IA", url: "/es/ai-analytics" }])} />
      <JsonLd data={faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a })), "/es/ai-analytics")} />

      {/* HERO */}
      <section className="bg-warm-white border-b border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-[920px]">
            <span className="eyebrow mb-6 block">Analítica con IA</span>
            <h1
              className="font-semibold leading-[1.05] tracking-[-0.035em] text-ink"
              style={{ fontSize: "clamp(44px, 6.4vw, 88px)" }}
            >
              Pregúntale lo que sea a tu analítica.{" "}
              <em className="italic font-medium" style={{ color: "#2D8B6D", fontStyle: "italic" }}>
                Fíate de la respuesta.
              </em>
            </h1>
            <p className="mt-8 text-[19px] leading-[1.6] text-ink-soft max-w-[68ch]">
              Apunta un LLM a una analítica incompleta y basada en cookies y se inventará respuestas
              seguras y falsas. SealMetrics es analítica con IA construida al revés — dato cookieless
              completo, un MCP semántico que el modelo no puede malinterpretar e IA privada alojada en la
              UE. Pregúntale a Claude o ChatGPT por tu revenue y obtén un número que puedes defender.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 flex-wrap">
              <Link
                href="/es/demo"
                className="inline-flex items-center justify-center bg-ink text-white px-8 py-4 rounded-md text-[15px] font-semibold no-underline hover:brightness-110"
              >
                Reserva una demo →
              </Link>
              <Link
                href="https://lens-lite.sealmetrics.com"
                className="inline-flex items-center justify-center border border-warm-200 text-ink px-8 py-4 rounded-md text-[15px] font-semibold no-underline hover:bg-warm-50"
              >
                Prueba la demo de LENS
              </Link>
            </div>
            <p className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.12em] mt-8">
              IA privada · Alojada en la UE · 0 PII
            </p>
          </div>
        </div>
      </section>

      <TldrBlock
        label="En breve"
        answer={
          <>
            La analítica con IA solo es tan fiable como el dato de debajo. SealMetrics combina{" "}
            <strong>dato cookieless al 100%</strong> con un <strong>MCP semántico</strong> e{" "}
            <strong>IA privada alojada en la UE</strong> (LENS AI), así un LLM responde tus preguntas de
            revenue desde dato completo que no puede malinterpretar — con cero dato personal en juego.
          </>
        }
        bullets={[
          <>IA genérica sobre GA4: dato parcial, riesgo de PII, inferencia en EE. UU., respuestas plausibles pero falsas.</>,
          <>SealMetrics: dato completo, 0 PII, IA privada UE, atribución a último clic sobre el 100% del tráfico.</>,
          <>Conecta Claude, ChatGPT, Cursor o Claude Code vía MCP — o trae tu propia clave de modelo.</>,
        ]}
      />

      <LogosStrip />

      {/* SEIS PILARES */}
      <section className="py-24 border-t border-warm-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="max-w-[760px] mb-16">
            <span className="eyebrow mb-5 block">Qué hace a la analítica lista para IA</span>
            <h2
              className="font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}
            >
              El LLM es la parte fácil.{" "}
              <em className="italic font-medium" style={{ color: "#2D8B6D", fontStyle: "italic" }}>
                Las respuestas fiables son lo difícil.
              </em>
            </h2>
            <p className="mt-6 text-[17px] leading-[1.6] text-ink-soft">
              Seis propiedades separan la analítica con IA sobre la que puedes actuar de un chatbot
              adivinando sobre un warehouse. Escribimos la versión larga en{" "}
              <Link href="/es/blog/self-service-analytics-lens-ai" className="text-brand no-underline border-b border-warm-200 hover:border-brand">
                cómo SealMetrics habilita la analítica self-service
              </Link>
              .
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-warm-100 bg-warm-50 p-7 hover:border-warm-200 transition-colors"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-brand">
                  {p.eyebrow}
                </span>
                <h3 className="mt-3 text-[22px] font-semibold text-ink leading-[1.2]">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink-soft">{p.body}</p>
                <div className="mt-6 pt-5 border-t border-warm-100">
                  <span className="block text-[28px] font-semibold text-ink leading-none">{p.metric}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft mt-2 block">
                    {p.metricLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABLA COMPARATIVA */}
      <section className="py-24 border-t border-warm-100 bg-warm-50">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
          <div className="max-w-[760px] mb-14">
            <span className="eyebrow mb-5 block">Lado a lado</span>
            <h2
              className="font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(34px, 4vw, 52px)" }}
            >
              IA genérica sobre un warehouse vs analítica AI-native.
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-warm-100 bg-white">
            <table className="w-full text-left min-w-[640px]">
              <thead className="bg-warm-50 border-b border-warm-100">
                <tr>
                  <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                    Propiedad
                  </th>
                  <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                    LLM + warehouse en bruto
                  </th>
                  <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-brand">
                    SealMetrics LENS AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i !== comparisonRows.length - 1 ? "border-b border-warm-100" : ""}>
                    <td className="px-6 py-4 text-[15px] text-ink font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-[15px] text-ink-soft">{row.generic}</td>
                    <td className="px-6 py-4 text-[15px] text-ink font-semibold">{row.native}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IA PRIVADA / MCP */}
      <section className="py-24 border-t border-warm-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow mb-5 block">IA privada, LENS AI</span>
            <h2
              className="font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(32px, 3.8vw, 48px)" }}
            >
              Tu dato responde tus preguntas — dentro de la UE.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.6] text-ink-soft">
              LENS AI es la capa de IA privada sobre tu{" "}
              <Link href="/es/glossary/cookieless-analytics" className="text-brand no-underline border-b border-warm-200 hover:border-brand">
                analítica cookieless
              </Link>
              . La inferencia corre sobre un modelo open-source (Gemma) alojado por Scaleway en París; tu
              dato analítico permanece en Dublín. Ambos en la UE — nunca compartido, nunca usado para
              entrenar modelos de terceros. ¿Prefieres tu propia stack? Usa tu clave de Anthropic, OpenAI o
              Gemini.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Conecta Claude, ChatGPT, Cursor o Claude Code vía MCP en mcp.sealmetrics.com",
                "Más de 40 herramientas de solo lectura: overview, canales, conversiones, funnels, landing pages, propiedades",
                "IA privada sobre Gemma / Scaleway (París) o trae tu propia clave de modelo — eliges el algoritmo",
                "Enterprise y Corporate pueden tener una instancia de IA privada dedicada y no compartida",
                "El dato está completo antes de las 6 AM cada mañana; los dashboards se actualizan en vivo cuando importa, como un pico de promo",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-[15px] leading-[1.55] text-ink-soft">
                  <span className="text-brand font-bold mt-0.5" aria-hidden>
                    →
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/es/product"
                className="inline-flex items-center justify-center bg-ink text-white px-7 py-3.5 rounded-md text-[14px] font-semibold no-underline hover:brightness-110"
              >
                Ver LENS AI en la plataforma →
              </Link>
              <Link
                href="/es/how-it-works"
                className="inline-flex items-center justify-center border border-warm-200 text-ink px-7 py-3.5 rounded-md text-[14px] font-semibold no-underline hover:bg-warm-50"
              >
                Cómo se recoge el dato
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-warm-100 bg-dark-bg p-8 text-white shadow-[0_24px_60px_-24px_rgba(14,14,12,0.5)]">
            <div className="font-mono text-[11px] text-white/50 uppercase tracking-[0.12em] mb-4">
              Claude · MCP · SealMetrics LENS AI
            </div>
            <p className="font-mono text-[13px] leading-[1.7] text-white/90">
              <span className="text-brand-soft">{">"}</span> Las ventas pintan flojas esta semana frente a
              la anterior. ¿Qué ha pasado y por dónde empiezo a mirar?
            </p>
            <div className="my-6 h-px bg-white/10" />
            <p className="text-[13px] leading-[1.7] text-white/80">
              El tráfico aguantó — esto es un problema de conversión, no de adquisición. Está aislado en tu
              página de <code className="text-amber">/checkout</code>, donde la tasa cayó a mitad de semana
              y arrastró las conversiones de directo, mientras la búsqueda de pago no se vio afectada. La
              pérdida de revenue se concentra en una sola categoría. Empieza por la página de checkout, no
              por el presupuesto de medios.
            </p>
            <div className="mt-6 font-mono text-[11px] text-white/40 leading-[1.7]">
              → get_overview · get_channels · get_landing_pages · get_conversions
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="py-24 border-t border-warm-100 bg-warm-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="max-w-[760px] mb-14">
            <span className="eyebrow mb-5 block">Para quién es</span>
            <h2
              className="font-semibold leading-[1.1] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(34px, 4vw, 52px)" }}
            >
              Una capa de IA, todos los roles.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((u) => (
              <div key={u.role} className="rounded-2xl border border-warm-100 bg-white p-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-brand">
                  {u.role}
                </span>
                <h3 className="mt-3 text-[22px] font-semibold text-ink leading-[1.25]">{u.headline}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink-soft">{u.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[15px] leading-[1.6] text-ink-soft max-w-[720px]">
            El caso de cumplimiento se apoya en la arquitectura, no en un certificado — RGPD por diseño,
            ePrivacy limpio, alojado en la UE en Dublín, DPA incluido. Para la postura completa, ve{" "}
            <Link href="/es/security" className="text-brand no-underline border-b border-warm-200 hover:border-brand">
              seguridad y cumplimiento
            </Link>{" "}
            y cómo se sostiene como{" "}
            <Link href="/es/glossary/gdpr-analytics-compliance" className="text-brand no-underline border-b border-warm-200 hover:border-brand">
              analítica conforme con el RGPD
            </Link>
            .
          </p>
        </div>
      </section>

      <FaqAccordionV3
        locale="es"
        items={faqs}
        titleEs={
          <>
            Las <em>preguntas</em> que los equipos hacen sobre analítica con IA.
          </>
        }
        ledeEs="Respuestas honestas sobre analítica con IA, IA privada, MCP y qué tiene que ser cierto para que un LLM responda tus preguntas de revenue sin inventárselas."
      />

      <FinalCtaSharedV3
        locale="es"
        titleEn={
          <>
            Give your AI complete data.{" "}
            <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>
              Then trust what it tells you.
            </em>
          </>
        }
        titleEs={
          <>
            Dale a tu IA datos completos.{" "}
            <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>
              Y fíate de lo que te diga.
            </em>
          </>
        }
        ledeEn="Book a demo and ask LENS AI a question about your own traffic. Complete cookieless data, private AI in the EU, zero PII. Thirty minutes, on your numbers."
        ledeEs="Reserva una demo y hazle a LENS AI una pregunta sobre tu propio tráfico. Dato cookieless completo, IA privada en la UE, cero PII. Treinta minutos, sobre tus números."
        primaryTextEn="Book a Demo →"
        primaryTextEs="Reserva una demo →"
      />
    </>
  );
}
