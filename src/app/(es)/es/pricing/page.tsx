import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Logos } from "@/components/sections/Logos";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { pricingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "Precios de SealMetrics — Analítica Completa desde €599/mes",
  description:
    "Analítica completa desde €599/mes. El 100% de tu tráfico capturado. Planes auto-escalables — sin sorpresas, sin datos bloqueados. 14 días gratis, sin tarjeta.",
  openGraph: {
    title: "Precios de SealMetrics — Analítica Completa desde €599/mes",
    description:
      "Analítica enterprise desde €599/mes. Facturación anual desde €499/mes. 14 días gratis.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/pricing",
    languages: getAlternatesEs("/pricing"),
  },
};

const everyPlanIncludes = [
  "Webs ilimitadas",
  "Usuarios ilimitados",
  "Propiedades de Conversión",
  "24 meses de retención de datos",
  "Tracking sin cookies (RGPD)",
  "Datos en tiempo real (<2 min)",
  "Análisis de funnels",
  "Vista multi-sitio (Portfolio)",
];

const differentiators = [
  {
    from: "Growth",
    to: "Scale",
    diff: "Más eventos (15M) + Analítica de Agentes IA + Webhooks + Onboarding asistido",
  },
  {
    from: "Scale",
    to: "Enterprise",
    diff: "Eventos ilimitados + SSO + Gestor de Cuenta dedicado + Procesamiento aislado",
  },
];

interface ComparisonRow {
  feature: string;
  growth: string | boolean;
  scale: string | boolean;
  enterprise: string | boolean;
}

interface ComparisonSection {
  category: string;
  rows: ComparisonRow[];
}

const comparisonData: ComparisonSection[] = [
  {
    category: "Analítica Core",
    rows: [
      { feature: "Tracking sin cookies (RGPD)", growth: true, scale: true, enterprise: true },
      { feature: "Datos en tiempo real (<2 min)", growth: true, scale: true, enterprise: true },
      { feature: "Tracking de pageviews y sesiones", growth: true, scale: true, enterprise: true },
      { feature: "Atribución UTM y por canal", growth: true, scale: true, enterprise: true },
      { feature: "Analítica por dispositivo y geo", growth: true, scale: true, enterprise: true },
      { feature: "Análisis de funnels", growth: true, scale: true, enterprise: true },
      { feature: "Frescura de datos", growth: "Antes de las 6am diario", scale: "Antes de las 6am diario — SLA 99,5%", enterprise: "Antes de las 6am diario — SLA personalizado" },
    ],
  },
  {
    category: "Analítica de Agentes IA (Próximamente)",
    rows: [
      { feature: "Detección de agentes IA", growth: false, scale: "Próximamente", enterprise: "Próximamente" },
      { feature: "Agent Scoring (300+ señales)", growth: false, scale: "Próximamente", enterprise: "Próximamente" },
      { feature: "Firmas HTTP (RFC 9421)", growth: false, scale: "Próximamente", enterprise: "Próximamente" },
      { feature: "Detección de proveedor (OpenAI, Anthropic, etc.)", growth: false, scale: "Próximamente", enterprise: "Próximamente" },
    ],
  },
  {
    category: "eCommerce",
    rows: [
      { feature: "Tracking de conversiones", growth: true, scale: true, enterprise: true },
      { feature: "Tracking de microconversiones", growth: true, scale: true, enterprise: true },
      { feature: "Propiedades de Conversión", growth: true, scale: true, enterprise: true },
      { feature: "Atribución de ingresos", growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "LENS AI",
    rows: [
      { feature: "Predicción y forecasting", growth: true, scale: true, enterprise: true },
      { feature: "Detección de anomalías", growth: true, scale: true, enterprise: true },
      { feature: "Oportunidades de crecimiento", growth: true, scale: true, enterprise: true },
      { feature: "Informes semanales y mensuales", growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "Monitorización y alertas",
    rows: [
      { feature: "Alertas críticas", growth: true, scale: true, enterprise: true },
      { feature: "Monitorización de negocio", growth: true, scale: true, enterprise: true },
      { feature: "Gestión de riesgos", growth: true, scale: true, enterprise: true },
      { feature: "Alertas personalizadas", growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "Datos y API",
    rows: [
      { feature: "Acceso API (completo)", growth: true, scale: true, enterprise: true },
      { feature: "MCP Server", growth: true, scale: true, enterprise: true },
      { feature: "Exportación CSV / JSON", growth: true, scale: true, enterprise: true },
      { feature: "BigQuery Export", growth: true, scale: true, enterprise: true },
      { feature: "Webhooks", growth: false, scale: true, enterprise: true },
    ],
  },
  {
    category: "Multi-sitio",
    rows: [
      { feature: "Vista multi-sitio (Portfolio)", growth: true, scale: true, enterprise: true },
    ],
  },
  {
    category: "Gobernanza",
    rows: [
      { feature: "Control de acceso por roles (RBAC)", growth: "Básico", scale: "Avanzado", enterprise: "Completo" },
      { feature: "SSO / SAML", growth: false, scale: false, enterprise: true },
      { feature: "Procesamiento aislado", growth: false, scale: false, enterprise: true },
    ],
  },
  {
    category: "Soporte",
    rows: [
      { feature: "Soporte por email", growth: true, scale: true, enterprise: true },
      { feature: "Soporte por chat", growth: true, scale: true, enterprise: true },
      { feature: "Soporte prioritario", growth: false, scale: true, enterprise: true },
      { feature: "Gestor de Cuenta dedicado", growth: false, scale: false, enterprise: true },
      { feature: "Onboarding", growth: "Docs + Vídeos", scale: "1 sesión", enterprise: "Servicio a medida" },
      { feature: "SLA", growth: "99%", scale: "99,5%", enterprise: "99,9%" },
    ],
  },
  {
    category: "Infraestructura",
    rows: [
      { feature: "Eventos humanos / mes", growth: "5M", scale: "15M", enterprise: "Ilimitados" },
      { feature: "Agentes IA", growth: "Próximamente", scale: "Próximamente", enterprise: "Próximamente" },
      { feature: "Webs", growth: "Ilimitadas", scale: "Ilimitadas", enterprise: "Ilimitadas" },
      { feature: "Usuarios", growth: "Ilimitados", scale: "Ilimitados", enterprise: "Ilimitados" },
      { feature: "Retención de datos", growth: "24 meses", scale: "24 meses", enterprise: "Personalizada" },
    ],
  },
];

const faqs = [
  {
    q: "¿Qué cuenta como un evento humano?",
    a: "Un evento humano es cualquier interaccion de un visitante real: pageviews, clics, conversiones, envios de formulario, acciones de añadir al carrito, suscripciones a newsletter. El tráfico de agentes IA y bots tradicionales se excluye de tu recuento de eventos — se rastrean por separado y no cuentan para tu límite.",
  },
  {
    q: "¿Por qué el tráfico de agentes IA es gratis?",
    a: "Los agentes IA (ChatGPT, Claude, Perplexity) representan una nueva categoría de tráfico sobre la que necesitas visibilidad. Los rastreamos gratis porque entender quien lee tu contenido con IA es una ventaja estrategica, no un centro de coste.",
  },
  {
    q: "¿Qué pasa si supero mi límite de eventos?",
    a: "Tu tracking nunca se detiene. Nunca bloqueamos, limitamos ni muestreamos tus datos — eso iría en contra del propósito de una analítica completa. Al 80% de uso recibes un email informativo (sin acción necesaria). Al 100% aparece un indicador en tu panel. Si superas tu límite durante 2+ meses consecutivos, tu plan se actualiza automáticamente en tu próximo ciclo de facturación. Un mes de exceso al año es gratuito — los picos estacionales no activan nada.",
  },
  {
    q: "¿Me pueden subir de plan automáticamente sin avisar?",
    a: "Siempre recibirás un email antes de que cualquier cambio de plan entre en vigor. Las subidas automáticas solo ocurren tras 2+ meses consecutivos por encima del 120% de tu límite, y se aplican al inicio de tu próximo ciclo de facturación — nunca a mitad de ciclo. Los clientes con plan anual solo se ajustan en la renovación. Nunca te subiremos de plan por un unico mes de pico.",
  },
  {
    q: "¿Y si mi tráfico baja? Puedo bajar de plan?",
    a: "Si — y de hecho te lo sugeriremos. Si tu uso cae por debajo del 50% de tu límite de plan durante 3+ meses, te enviaremos proactivamente un email con una opción de un clic para pasar a un plan menor. Si no haces nada, nada cambia. Preferimos que pagues por lo que usas.",
  },
  {
    q: "¿Todas las funcionalidades están realmente incluidas en todos los planes?",
    a: "Sí. Analítica core, tracking de conversiones, LENS AI, monitorización, API, MCP Server y BigQuery Export están incluidos en todos los planes desde Growth. Las unicas diferencias entre planes son el volumen de eventos, funcionalidades de gobernanza (RBAC, SSO), nivel de soporte y Agent AI Analytics (disponible desde Scale). Nunca encontraras un muro de funcionalidades.",
  },
  {
    q: "¿Puedo cambiar entre facturación mensual y anual?",
    a: "Sí. Cambia a facturación anual en cualquier momento para obtener 2 meses gratis. Los compromisos anuales se facturan por adelantado. Si cambias de mensual a anual, el cambio se aplica en tu próximo ciclo de facturación.",
  },
  {
    q: "¿Hay prueba gratuita?",
    a: "Sí. Todos los planes incluyen una prueba gratuita de 14 días con acceso completo a todas las funcionalidades. Sin tarjeta de crédito. Veras tus datos reales a los pocos minutos de instalar nuestro script.",
  },
  {
    q: "¿Qué significa webs y usuarios ilimitados?",
    a: "Todos los planes incluyen webs ilimitadas y miembros de equipo ilimitados. Sin cargos por puesto, sin cargos por dominio. Añade todo tu equipo y todos tus dominios desde el primer día.",
  },
  {
    q: "¿SealMetrics captura el 100% del tráfico — significa eso que mi recuento de eventos será mayor que en GA4?",
    a: "Sí, significativamente. Como rastreamos sin cookies ni banners de consentimiento, capturamos visitantes que GA4 nunca ve — tipicamente un 40-90% más de tráfico dependiendo de tu tasa de rechazo de consentimiento. Tenlo en cuenta al estimar tu plan: si GA4 te muestra 100K sesiones/mes, tu tráfico real puede ser 170K-300K sesiones, generando aproximadamente 4-6 eventos por sesión.",
  },
  {
    q: "¿Cobráis por evento si me paso de mi límite?",
    a: "No. No hacemos facturación por exceso de eventos. Tu plan tiene un límite claro, y si creces consistentemente más alla de el, pasas al siguiente plan a un precio fijo. Sin partidas sorpresa, sin facturas variables, sin necesidad de calculadora.",
  },
  {
    q: "¿Cómo funciona la facturación de planes anuales si mi uso crece a mitad de año?",
    a: "Los planes anuales están protegidos durante todo el período de contrato. Si tu tráfico crece a mitad de año, absorbemos el exceso hasta tu fecha de renovación. En la renovación, te recomendaremos el plan que se ajuste a tu uso actual. Nunca recibirás una factura inesperada a mitad de contrato.",
  },
];

const adaptCards = [
  {
    title: "Nunca cortamos tus datos",
    desc: "Sin importar tu uso, tu tracking sigue funcionando. Nunca bloqueamos, limitamos ni muestreamos tus datos. Datos completos es nuestra promesa — no la rompemos por facturación.",
  },
  {
    title: "Si creces, tu plan crece contigo",
    desc: "Si tu tráfico supera consistentemente el límite de tu plan durante 2+ meses, actualizamos automáticamente tu plan al inicio de tu próximo ciclo de facturación. Recibiras un email confirmando el cambio — sin llamadas comerciales, sin negociaciones. Los planes mensuales se ajustan el mes siguiente. Los planes anuales se ajustan solo en la renovación.",
  },
  {
    title: "Si necesitas menos, te lo diremos",
    desc: "Si tu uso baja significativamente durante 3+ meses, te enviamos proactivamente un email sugiriendo un plan menor. Un clic para confirmar. Si no haces nada, nada cambia. Preferimos que pagues por lo que necesitas a que sobrepagues en silencio.",
  },
  {
    title: "Los picos estacionales corren de nuestra cuenta",
    desc: "Black Friday? Rebajas de enero? Una campaña viral? Un mes de exceso al año esta incluido sin coste adicional y no activa ningún cambio de plan. Tu negocio tiene picos — tu factura de analítica no deberia penalizarte por ellos.",
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <span className="text-[0.8rem] font-medium text-green-muted">Si</span>;
  }
  if (value === false) {
    return <span className="text-text-tertiary">&mdash;</span>;
  }
  return <span className="text-[0.8rem] text-text-secondary">{value}</span>;
}

export default function PricingPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Precios" }]} locale="es" />
      <JsonLd data={pricingSchema([
        { name: "Growth", price: "599", description: "5M eventos humanos/mes" },
        { name: "Scale", price: "1079", description: "15M eventos humanos/mes" },
      ])} />
      <JsonLd data={breadcrumbSchema([{ name: "Precios", url: "/es/pricing" }], "es")} />
      <JsonLd data={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="headline-hero mb-6">
            Paga por tráfico humano. No por bots. No por suposiciones.
          </h1>
          <p className="text-[1.15rem] leading-[1.75] text-text-secondary max-w-[640px] mx-auto mb-2">
            Tracking de agentes IA disponible próximamente.
            <br />
            Todas las funcionalidades incluidas en todos los planes.
          </p>
          <p className="text-[0.9rem] text-text-tertiary mb-10">
            Otras analíticas te cobran por tráfico de bots. Nosotros solo contamos humanos.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Solicitar Demo
          </Link>
          <p className="mt-4 text-[0.85rem] text-text-tertiary">
            O{" "}
            <a
              href="/es/growth-calculator"
              className="text-text-secondary no-underline border-b border-warm-200 hover:text-text-primary transition-colors"
            >
              calcula tu pérdida de datos primero &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* Plans with billing toggle */}
      <PricingPlans locale="es" />

      {/* Client logos — social proof */}
      <Logos locale="es" />

      {/* Todos los planes incluyen */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-10">Todos los planes incluyen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {everyPlanIncludes.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-[0.9rem] text-text-secondary"
              >
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                {feature}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 text-[0.9rem] text-text-primary font-medium">
            <span className="text-text-tertiary shrink-0">&mdash;</span>
            Datos frescos antes de las 6am diariamente — incluido Black Friday
            <span className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-green-muted border border-green-muted rounded-[2px]">
              Nuevo
            </span>
          </div>
          <p className="text-[0.8rem] text-text-tertiary mt-8">
            Tracking de agentes IA (ChatGPT, Claude, Perplexity) disponible próximamente. No contara contra tu límite de eventos.
          </p>
        </div>
      </section>

      {/* Que diferencia a cada plan */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-10">Que diferencia a cada plan</h2>
          <div className="space-y-5">
            {differentiators.map((d) => (
              <div
                key={d.from}
                className="flex items-start gap-3 text-[0.9rem]"
              >
                <span className="text-green-muted shrink-0 mt-0.5">&rarr;</span>
                <p className="text-text-secondary">
                  <span className="font-medium text-text-primary">
                    {d.from} &rarr; {d.to}:
                  </span>{" "}
                  {d.diff}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[0.85rem] text-text-secondary mt-10 pt-8 border-t border-warm-100 text-center">
            Solo pagas mas si creces. Todas las funcionalidades core están siempre incluidas.
          </p>
        </div>
      </section>

      {/* FAQ rápido — preguntas pre-decisión */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mx-auto text-center mb-12">
            <h2 className="headline-section">
              Preguntas antes de decidir.
            </h2>
          </div>
          <div className="max-w-[760px] mx-auto divide-y divide-warm-100">
            {[
              {
                q: "¿Hay realmente una prueba gratuita de 14 días sin tarjeta de crédito?",
                a: "Sí. Instala el script, ve tus datos reales en minutos y decide al final de los 14 días. No se requiere tarjeta para empezar. Si no ves valor, no pagas.",
              },
              {
                q: "¿SealMetrics captura el 100% del tráfico — será mi recuento de eventos mucho mayor que en GA4?",
                a: "Sí, significativamente. Si GA4 muestra 100K sesiones/mes, tu tráfico real puede ser 150K-300K, generando 4-6 eventos por sesión. Lo senalamos proactivamente para que elijas el plan correcto desde el principio. Sin sorpresas.",
              },
              {
                q: "¿Qué pasa si supero el límite de mi plan?",
                a: "Tu tracking nunca se detiene. Nunca bloqueamos ni muestreamos tus datos — eso iría en contra del propósito. Al 80% de uso recibes un email (sin acción necesaria). Las subidas automáticas solo ocurren tras 2+ meses consecutivos por encima de tu límite, siempre en tu próximo ciclo de facturación. Un mes de exceso al año es gratuito.",
              },
              {
                q: "¿Puedo bajar de plan si mi tráfico disminuye?",
                a: "Si — y te lo sugeriremos. Si tu uso baja por debajo del 50% de tu plan durante 3+ meses, te ofrecemos proactivamente una bajada con un clic. Preferimos que pagues por lo que usas.",
              },
              {
                q: "¿Todas las funcionalidades están realmente incluidas en todos los planes?",
                a: "Sí. Analítica core, LENS AI, tracking de conversiones, API, MCP Server y BigQuery Export están incluidos desde Growth. Las unicas diferencias entre planes son volumen de eventos, funcionalidades de gobernanza (SSO, RBAC), nivel de soporte y Agent Analytics (Scale+). Nunca encontraras un muro de funcionalidades.",
              },
              {
                q: "¿Hay un contrato mínimo o permanencia?",
                a: "Sin permanencia en planes mensuales — cancela cuando quieras. Los planes anuales se facturan por adelantado y ofrecen 2 meses gratis. Preferimos ganarnos la retención con resultados, no con contratos.",
              },
            ].map((item, i) => (
              <details key={i} className="group py-5 cursor-pointer">
                <summary className="flex items-center justify-between gap-4 text-[1rem] font-medium text-text-primary select-none list-none marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-text-tertiary group-open:rotate-45 transition-transform duration-200 text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[0.95rem] text-text-secondary leading-relaxed pr-8">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Comparación completa de funcionalidades */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Comparación completa de funcionalidades
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="py-3 pr-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider w-[40%]">
                    Funcionalidad
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider text-center">
                    Growth
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider text-center">
                    Scale
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider text-center">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((section) => (
                  <Fragment key={section.category}>
                    <tr>
                      <td
                        colSpan={4}
                        className="pt-6 pb-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-text-tertiary"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-b border-warm-100"
                      >
                        <td className="py-3.5 pr-4 text-[0.85rem] text-text-secondary">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={row.growth} />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={row.scale} />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={row.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cómo funciona el recuento de tráfico */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-10 text-center">
            Cómo funciona el recuento de tráfico
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="py-3 pr-4 text-[0.8rem] font-medium text-text-tertiary">
                    Tipo de tráfico
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary text-center">
                    Rastreado
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary text-center">
                    Cuenta para el límite
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary text-center">
                    Visible en el panel
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warm-100">
                  <td className="py-3.5 pr-4 text-[0.9rem] font-medium text-text-primary">
                    Humanos
                  </td>
                  <td className="py-3.5 px-4 text-center text-[0.85rem] font-medium text-green-muted">
                    Si
                  </td>
                  <td className="py-3.5 px-4 text-center text-[0.85rem] font-medium text-text-primary">
                    Si
                  </td>
                  <td className="py-3.5 px-4 text-center text-[0.85rem] text-text-secondary">
                    Human Analytics
                  </td>
                </tr>
                <tr className="border-b border-warm-100">
                  <td className="py-3.5 pr-4">
                    <span className="text-[0.9rem] font-medium text-text-primary">
                      Agentes IA
                    </span>{" "}
                    <span className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-text-tertiary border border-warm-200 rounded-[2px]">
                      Próximamente
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center text-[0.85rem] font-medium text-green-muted">
                    Si
                  </td>
                  <td className="py-3.5 px-4 text-center text-[0.85rem] font-medium text-green-muted">
                    No
                  </td>
                  <td className="py-3.5 px-4 text-center text-[0.85rem] text-text-secondary">
                    Agent Analytics
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[0.85rem] text-text-secondary mt-8 p-5 bg-warm-white border border-warm-100 rounded-[4px] leading-[1.7]">
            <span className="font-medium text-text-primary">Importante:</span>{" "}
            SealMetrics captura el 100% de tu tráfico — incluyendo visitantes que rechazan cookies en otras herramientas de analítica. Esto significa que tu recuento de eventos en SealMetrics será significativamente mayor que lo que ves en Google Analytics. Al elegir tu plan, estima tu tráfico real como 2-3x lo que GA4 reporta.
          </p>
        </div>
      </section>

      {/* Tu plan se adapta a tu negocio */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-3 text-center">
            Tu plan se adapta a tu negocio
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary text-center max-w-[680px] mx-auto mb-14">
            Nunca bloqueamos tu tracking. Nunca te sorprendemos con facturas. Tu plan escala contigo — automática y transparentemente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {adaptCards.map((card) => (
              <div
                key={card.title}
                className="p-7 bg-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-0">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-warm-100 last:border-0"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between py-5 font-serif text-[1.1rem] font-medium text-text-primary [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-text-tertiary text-[1.1rem] ml-4 shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary pb-6">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-warm-100 text-center">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-8">
            ¿Listo para ver lo que los humanos realmente hacen en tu web?</h2>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Solicitar Demo
          </Link>
          <div className="mt-4">
            <Link
              href="/es/how-it-works"
              className="text-[0.9rem] text-text-tertiary hover:text-text-secondary transition-colors"
            >
              Descubre cómo funciona
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
