import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { softwareApplicationSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "Producto — SealMetrics",
  description:
    "Captura de datos al 100%, atribución de ingresos last-click, supervisión LENS AI y tracking de agentes IA. Analítica enterprise desde €599/mes.",
  openGraph: {
    title: "Producto — SealMetrics",
    description:
      "Analítica web completa con captura de datos al 100%, atribución de ingresos last-click, supervisión LENS AI y tracking de agentes IA.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/product",
    languages: getAlternatesEs("/product"),
  },
};

const reports = [
  {
    name: "Vista General de Tráfico",
    desc: "Recuento completo de visitantes, profundidad de sesión y engagement — del 100% del tráfico, sin muestreo.",
  },
  {
    name: "Canales de Adquisición",
    desc: "Visualiza qué canales realmente atraen visitantes, sin puntos ciegos por rechazo de consentimiento o bloqueadores de anuncios.",
  },
  {
    name: "Rendimiento de Páginas",
    desc: "Métricas a nivel de página incluyendo tiempos de carga, tasas de rebote y profundidad de scroll sobre datos completos.",
  },
  {
    name: "Recorridos del Usuario",
    desc: "Reconstrucción completa de rutas desde el primer toque hasta la conversión dentro de cada sesión.",
  },
  {
    name: "Embudos de Conversión",
    desc: "Análisis de embudos paso a paso con diagnóstico de abandonos y comparación de segmentos.",
  },
  {
    name: "Atribución de Ingresos",
    desc: "Atribución de ingresos por canal conectando cada punto de contacto de marketing con resultados de facturación.",
  },
  {
    name: "Análisis de Campañas",
    desc: "Rendimiento a nivel de campaña con integración de costes para un cálculo real de ROAS.",
  },
  {
    name: "Dashboard en Tiempo Real",
    desc: "Actividad de visitantes en vivo, campañas activas y alertas de anomalías en el momento que ocurren.",
  },
  {
    name: "Informes Personalizados",
    desc: "Construye informes a partir de cualquier combinación de dimensiones y métricas sobre tu dataset completo.",
  },
];

const productFaqs = [
  {
    q: "¿Qué datos captura SealMetrics?",
    a: "SealMetrics captura pageviews, sesiones, referrers, parámetros UTM, tipo de navegador, tamaño de pantalla, profundidad de scroll, clics, conversiones y transacciones eCommerce. Todos los datos provienen del 100% de los visitantes — sin muestreo, sin dependencia de consentimiento.",
  },
  {
    q: "¿Puedo usar SealMetrics junto con GA4?",
    a: "Sí. Muchos clientes ejecutan ambos en paralelo durante un período de transición. SealMetrics normalmente muestra entre 3 y 8 veces más visitantes y conversiones rastreadas que GA4 en mercados europeos, porque captura el tráfico que GA4 pierde por rechazo de consentimiento y bloqueadores de anuncios.",
  },
  {
    q: "¿Cómo gestiona SealMetrics las single-page applications?",
    a: "El tag JavaScript detecta automáticamente eventos de navegación client-side en SPAs y frameworks como React, Next.js y Vue. No requiere configuración adicional — las transiciones de página se rastrean como pageviews estándar.",
  },
  {
    q: "¿Qué es LENS AI y qué detecta?",
    a: "LENS es el motor de supervisión IA de SealMetrics. Monitoriza continuamente 60+ métricas incluyendo patrones de tráfico, tasas de conversión, tendencias de ingresos y rendimiento de campañas. Detecta anomalías, proporciona análisis de causa raíz y sugiere acciones — todo fundamentado en datos completos.",
  },
  {
    q: "¿Cómo funciona la atribución de ingresos sin cookies?",
    a: "SealMetrics reconstruye los recorridos de los visitantes usando datos de sesión cookieless first-party. Al capturarse el 100% de los puntos de contacto, la atribución de ingresos refleja lo que realmente sucedió — a diferencia de herramientas basadas en cookies donde el 87% de los puntos de contacto se pierden.",
  },
  {
    q: "¿SealMetrics rastrea transacciones eCommerce?",
    a: "Sí. SealMetrics rastrea vistas de producto, eventos de añadir al carrito, pasos de checkout y compras con atribución de ingresos completa. Las integraciones con Shopify, WooCommerce, PrestaShop y Magento proporcionan tracking de eCommerce automático.",
  },
  {
    q: "¿Qué integraciones están disponibles?",
    a: "SealMetrics se integra con 25+ plataformas: Google Ads, Meta Ads, TikTok Ads, Shopify, WooCommerce, BigQuery, HubSpot, Salesforce, Klaviyo y más. Los datos se pueden exportar vía API, BigQuery, webhooks o CSV.",
  },
];

export default function ProductoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Producto" }]} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Producto", url: "/es/product" }])} />
      <JsonLd data={faqSchema(productFaqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* Hero */}
      <section className="pt-12 pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Producto
            </span>
            <h1 className="headline-hero mb-8">
              Nueve informes construidos sobre el 100% de la realidad.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary mb-10">
              Atribución de ingresos, detección de anomalías con IA y tracking
              de agentes&nbsp;&mdash; todo impulsado por captura completa de
              datos, no estimaciones estadísticas. Descubre cómo{" "}
              <Link
                href="/for/cmo"
                className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
              >
                los responsables de marketing usan SealMetrics
              </Link>{" "}
              para recuperar los datos que estaban perdiendo. Analítica
              enterprise a una fracción del precio de GA360 o Adobe.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <Link
                href="/es/demo"
                className="inline-flex items-center px-7 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
              >
                Solicitar Demo
              </Link>
              <Link
                href="/es/how-it-works"
                className="inline-flex items-center px-7 py-3.5 text-[0.95rem] text-text-secondary border border-warm-200 rounded-[4px] no-underline hover:border-text-body hover:text-text-primary transition-colors"
              >
                Cómo Funciona
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Capture */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
                Captura de Datos
              </span>
              <h2 className="headline-section mb-5">
                Cada visitante. Sin excepciones.
              </h2>
              <p className="text-[1rem] leading-[1.7] text-text-secondary mb-6">
                La analítica basada en cookies pierde la mayoria del tráfico
                europeo. SealMetrics utiliza{" "}
                <Link
                  href="/es/how-it-works"
                  className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
                >
                  recopilación cookieless first-party
                </Link>{" "}
                que captura cada sesión independientemente del estado de
                consentimiento, la configuración del navegador o el uso de
                bloqueadores de anuncios.
              </p>
              <ul className="space-y-2">
                {[
                  "Sin cookies — funciona sin banners de consentimiento",
                  "Infraestructura first-party — invisible para bloqueadores de anuncios",
                  "100% de captura de sesiones sin importar navegador o consentimiento",
                  "Reconstrucción de sesión desde el primer toque hasta la conversión",
                  "Script de 846 bytes — impacto cero en rendimiento de página",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-text-secondary"
                  >
                    <span className="text-text-tertiary shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-warm-100 rounded-[4px] p-8">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-6">
                Captura de datos por escenario
              </div>
              <div className="flex items-center pb-3 mb-1 border-b border-warm-100 text-[0.7rem] font-medium uppercase tracking-[0.04em] text-text-tertiary">
                <span className="flex-1">Escenario</span>
                <span className="w-24 text-right">SealMetrics</span>
                <span className="w-24 text-right">GA4</span>
              </div>
              {[
                { scenario: "Visita estándar", sm: "100%", ga: "~100%" },
                { scenario: "Consentimiento rechazado", sm: "100%", ga: "0%" },
                { scenario: "Safari ITP", sm: "100%", ga: "~30%" },
                { scenario: "Ad blocker activo", sm: "100%", ga: "0%" },
                { scenario: "Firefox ETP", sm: "100%", ga: "~40%" },
                { scenario: "Modo incognito", sm: "100%", ga: "~60%" },
              ].map((row) => (
                <div
                  key={row.scenario}
                  className="flex items-center py-3 border-b border-warm-100/60 last:border-0 text-[0.85rem]"
                >
                  <span className="flex-1 text-text-secondary">
                    {row.scenario}
                  </span>
                  <span className="w-24 text-right font-mono text-green-muted font-medium">
                    {row.sm}
                  </span>
                  <span className="w-24 text-right font-mono text-text-tertiary">
                    {row.ga}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Attribution */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-warm-white border border-warm-100 rounded-[4px] p-8">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-6">
                Comparativa de atribución &mdash; mismo tráfico, datos diferentes
              </div>
              <div className="flex items-center pb-3 mb-1 border-b border-warm-100 text-[0.7rem] font-medium uppercase tracking-[0.04em] text-text-tertiary">
                <span className="flex-1">Canal</span>
                <span className="w-24 text-right">SealMetrics</span>
                <span className="w-24 text-right">GA4</span>
              </div>
              {[
                { channel: "Organic Search", sm: "€67,240", ga: "€12,100" },
                { channel: "Paid Search", sm: "€52,180", ga: "€8,450" },
                { channel: "Social (Meta)", sm: "€31,450", ga: "€4,200" },
                { channel: "Email", sm: "€22,890", ga: "€6,780" },
                { channel: "Direct", sm: "€11,070", ga: "€3,340" },
              ].map((row) => (
                <div
                  key={row.channel}
                  className="flex items-center py-3 border-b border-warm-100/60 last:border-0 text-[0.85rem]"
                >
                  <span className="flex-1 text-text-secondary">
                    {row.channel}
                  </span>
                  <span className="w-24 text-right font-mono text-text-primary font-medium">
                    {row.sm}
                  </span>
                  <span className="w-24 text-right font-mono text-text-tertiary">
                    {row.ga}
                  </span>
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-warm-100">
                <div className="flex items-center text-[0.85rem]">
                  <span className="flex-1 font-medium text-text-primary">
                    Total atribuido
                  </span>
                  <span className="w-24 text-right font-mono text-text-primary font-medium">
                    €184,830
                  </span>
                  <span className="w-24 text-right font-mono text-text-tertiary">
                    €34,870
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
                Atribución de Ingresos
              </span>
              <h2 className="headline-section mb-5">
                Descubre que genera ingresos de verdad.
              </h2>
              <p className="text-[1rem] leading-[1.7] text-text-secondary mb-6">
                La atribución construida sobre el 13% de los datos produce
                resultados enganosos. SealMetrics{" "}
                <Link
                  href="/integrations"
                  className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
                >
                  se conecta con 25+ plataformas
                </Link>{" "}
                y vincula cada punto de contacto a los ingresos usando datos de
                sesión completos&nbsp;&mdash; mostrando el ROI real de cada
                canal, campaña y creatividad.
              </p>
              <ul className="space-y-2">
                {[
                  "Desglose de ingresos por canal y campaña",
                  "Integración de costes para cálculo real de ROAS",
                  "Análisis de embudos con diagnóstico de abandonos",
                  "Análisis de cohortes y modelado de LTV",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-text-secondary"
                  >
                    <span className="text-text-tertiary shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LENS AI */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
                LENS AI
              </span>
              <h2 className="headline-section mb-5">
                Haz preguntas de negocio. Obtiene respuestas de datos completos.
              </h2>
              <p className="text-[1rem] leading-[1.7] text-text-secondary mb-6">
                LENS monitoriza 60+ métricas de forma continua, detectando
                cambios en patrones de tráfico, tasas de conversión, tendencias
                de ingresos y rendimiento de canales. Haz preguntas en lenguaje
                natural y obtiene respuestas listas para tomar
                decisiones&nbsp;&mdash; fundamentadas en datos completos, no en
                dashboards que necesitan interpretacion.
              </p>
              <ul className="space-y-2">
                {[
                  "60+ reglas automatizadas de detección de anomalías",
                  "Alertas en lenguaje natural y respuesta a preguntas",
                  "Análisis de causa raíz con acciones sugeridas",
                  "Estimación de impacto en ingresos por anomalía",
                  "Notificaciones via Slack, email y webhooks",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-text-secondary"
                  >
                    <span className="text-text-tertiary shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-warm-100 rounded-[4px] p-8 space-y-4">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-2">
                LENS AI &mdash; Detecciones recientes
              </div>
              {[
                {
                  severity: "Alta prioridad",
                  color: "text-red-alert",
                  text: "El tráfico organico de Alemania cayo un 34% en 72h. Correlaciona con alerta de indexacion en Search Console.",
                  time: "Hace 2h",
                },
                {
                  severity: "Media",
                  color: "text-[#E0A458]",
                  text: "Tasa de abandono de carrito +12% en movil desde el despliegue de v4.2.1.",
                  time: "Hace 6h",
                },
                {
                  severity: "Insight",
                  color: "text-green-muted",
                  text: "El email \"Winter Sale\" supera a paid search 3.2x en ROAS. Considera reasignar presupuesto.",
                  time: "Hace 1d",
                },
                {
                  severity: "Resuelto",
                  color: "text-text-tertiary",
                  text: "Error 500 en página de pago resuelto. Ingresos recuperados estimados: €4,200.",
                  time: "Hace 2d",
                },
              ].map((a) => (
                <div
                  key={a.text}
                  className="p-4 bg-warm-white border border-warm-100 rounded-[4px]"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`text-[0.65rem] font-medium uppercase tracking-[0.06em] ${a.color}`}
                    >
                      {a.severity}
                    </span>
                    <span className="text-[0.65rem] text-text-tertiary">
                      {a.time}
                    </span>
                  </div>
                  <div className="text-[0.8rem] text-text-secondary leading-snug">
                    {a.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent Analytics */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-warm-white border border-warm-100 rounded-[4px] p-8">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-6">
                Actividad de agentes &mdash; ultimos 7 días
              </div>
              {[
                { agent: "GPT-4 (OpenAI)", sessions: "1,247", pages: "4,891" },
                {
                  agent: "Claude (Anthropic)",
                  sessions: "892",
                  pages: "3,104",
                },
                { agent: "Perplexity", sessions: "634", pages: "2,340" },
                {
                  agent: "Google AI Overview",
                  sessions: "421",
                  pages: "1,687",
                },
                { agent: "Otros agentes IA", sessions: "298", pages: "1,052" },
              ].map((row) => (
                <div
                  key={row.agent}
                  className="flex justify-between items-center py-3 border-b border-warm-100/60 last:border-0"
                >
                  <span className="text-[0.85rem] text-text-secondary">
                    {row.agent}
                  </span>
                  <div className="flex gap-6">
                    <span className="font-mono text-[0.8rem] text-text-tertiary">
                      {row.sessions} sesiones
                    </span>
                    <span className="font-mono text-[0.8rem] text-text-primary font-medium">
                      {row.pages} páginas
                    </span>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-warm-100">
                <div className="text-[0.75rem] text-text-tertiary font-medium">
                  Próximamente
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
                Agent Analytics
              </span>
              <h2 className="headline-section mb-5">
                Ve lo que los agentes IA hacen en tu web.{" "}
                <span className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-text-tertiary border border-warm-200 rounded-[2px] align-middle">
                  Próximamente
                </span>
              </h2>
              <p className="text-[1rem] leading-[1.7] text-text-secondary mb-6">
                ChatGPT, Claude, Perplexity y otros agentes IA ya están
                navegando tu web&nbsp;&mdash; scrapeando contenido, respondiendo
                preguntas sobre tus productos, enviando tráfico hacia ti. La
                mayoria de herramientas de analítica no detectan que esto esta
                pasando. SealMetrics rastrea la actividad de agentes IA por
                separado del tráfico humano, para que entiendas ambas audiencias.
              </p>
              <ul className="space-y-2">
                {[
                  "Tracking separado para agentes IA vs. visitantes humanos",
                  "Identifica que modelos de IA navegan tu sitio",
                  "Entiende como interactuan los agentes con tu contenido",
                  "Monitoriza tendencias de tráfico referido por IA",
                  "Gratis e ilimitado en todos los planes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9rem] text-text-secondary"
                  >
                    <span className="text-text-tertiary shrink-0">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[600px] mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Informes
            </span>
            <h2 className="headline-section mb-4">
              Nueve informes. Cero conjeturas.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
              Cada informe se construye sobre el 100% de tus datos&nbsp;&mdash;
              sin muestreo, sin modelado, sin estimaciones. Lo que ves es lo que
              realmente paso.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reports.map((r, i) => (
              <div
                key={r.name}
                className="p-6 border border-warm-100 rounded-[4px] bg-white"
              >
                <span className="font-mono text-[0.75rem] text-text-tertiary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[1rem] font-medium text-text-primary mt-2 mb-2">
                  {r.name}
                </h3>
                <p className="text-[0.8rem] text-text-secondary leading-snug">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise comparison */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Nivel Enterprise
            </span>
            <h2 className="headline-section mb-4">
              Calidad enterprise. Precio que no lo es.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
              SealMetrics ofrece datos completos a una fracción de lo que cuestan
              GA360 o Adobe Analytics&nbsp;&mdash; con capacidades que ellos no
              ofrecen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: "SealMetrics",
                highlight: true,
                items: [
                  "100% de captura de datos",
                  "LENS AI (60+ reglas)",
                  "Agent Analytics (gratis)",
                  "Servidores solo en la UE",
                  "Sin consentimiento necesario",
                  "Desde €599/mes",
                ],
              },
              {
                name: "GA360",
                highlight: false,
                items: [
                  "Captura dependiente de consentimiento",
                  "Insights IA básicos",
                  "Sin tracking de agentes",
                  "Servidores en EE.UU. (UE limitado)",
                  "Consentimiento obligatorio",
                  "~$150,000/año",
                ],
              },
              {
                name: "Adobe Analytics",
                highlight: false,
                items: [
                  "Captura dependiente de consentimiento",
                  "Adobe Sensei (complemento)",
                  "Sin tracking de agentes",
                  "Residencia configurable",
                  "Consentimiento obligatorio",
                  "~$100,000/año",
                ],
              },
              {
                name: "Piwik PRO",
                highlight: false,
                items: [
                  "Captura dependiente de consentimiento",
                  "Sin detección IA",
                  "Sin tracking de agentes",
                  "UE disponible",
                  "Consentimiento obligatorio",
                  "~€30,000/año",
                ],
              },
            ].map((col) => (
              <div
                key={col.name}
                className={`p-7 rounded-[4px] ${
                  col.highlight
                    ? "border-2 border-text-primary"
                    : "border border-warm-100"
                }`}
              >
                <h3
                  className={`font-serif text-[1.1rem] font-medium mb-5 ${
                    col.highlight ? "text-text-primary" : "text-text-tertiary"
                  }`}
                >
                  {col.name}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-[0.85rem] ${
                        col.highlight ? "text-text-body" : "text-text-tertiary"
                      }`}
                    >
                      <span className="shrink-0">&mdash;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/vs-ga4"
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
            >
              Ver la comparativa completa SealMetrics vs GA4
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-8">
            {productFaqs.map((faq) => (
              <div
                key={faq.q}
                className="pb-8 border-b border-warm-100 last:border-0"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {faq.q}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Compruebalo con tus propios datos.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Creado por un equipo que{" "}
            <Link
              href="/about"
              className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
            >
              entiende los datos de eCommerce
            </Link>
            , SealMetrics evoluciona constantemente. Consulta nuestras ultimas{" "}
            <Link
              href="/changelog"
              className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
            >
              novedades de producto
            </Link>
            , o dejanos ejecutarlo en tu web y mostrarte exactamente lo que
            estabas perdiendo.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Solicitar Demo
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            30 minutos de recorrido. Sin compromiso.
          </p>
        </div>
      </section>
    </>
  );
}
