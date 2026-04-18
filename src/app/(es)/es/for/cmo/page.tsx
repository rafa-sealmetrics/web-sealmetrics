import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para CMOs — Inteligencia de Decisión",
  description:
    "Deja de tomar decisiones de marketing con el 13% de tus datos. SealMetrics ofrece a los CMOs visibilidad total del tráfico, atribución precisa y detección de anomalías con IA.",
  openGraph: {
    title: "SealMetrics para CMOs",
    description:
      "Datos completos para decisiones de marketing con confianza. 100% de visibilidad del tráfico, atribución precisa, detección de anomalías con IA.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/cmo",
    languages: getAlternatesEs("/for/cmo"),
  },
};

export default function ForCMOPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para CMOs" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Para CMOs", url: "/es/for/cmo" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para CMOs", description: "Deja de tomar decisiones de marketing con el 13% de tus datos. SealMetrics ofrece a los CMOs visibilidad total del tráfico, atribución precisa y detección de anomalías con IA.", url: "/es/for/cmo", audience: "Directores de Marketing (CMOs)" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para CMOs
            </span>
            <h1 className="headline-hero mb-8">
              Todo informe al consejo empieza con datos. Asegúrate de que sean completos.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              GA4 captura aproximadamente el 13% del tráfico europeo. Tus modelos
              de atribución, tus decisiones de campaña y tus informes de ingresos
              se construyen sobre esa fracción. SealMetrics{" "}
              <Link href="/es/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">captura el 100% con atribución completa y detección de anomalías con IA</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Problemas que reconoces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                title: "La atribución no cuadra",
                desc: "Tu atribución por canal muestra cifras que no coinciden con los ingresos reales. Dedicas horas a reconciliar datos de Google Ads, Meta y GA4 — y nunca concuerdan. El problema no es el modelo. Es el 87% de puntos de contacto que faltan.",
              },
              {
                title: "Los informes al consejo transmiten incertidumbre",
                desc: "Presentas métricas de tráfico y conversión al consejo, pero sabes que las cifras son aproximaciones. Cuando alguien pregunta por qué los datos web no coinciden con los del CRM, no tienes una respuesta satisfactoria.",
              },
              {
                title: "La optimización de campañas es conjetura",
                desc: "Optimizas el gasto publicitario con datos parciales. Una campaña que parece rendir mal podría ser en realidad tu mejor campaña — simplemente no puedes ver las conversiones que genera de visitantes preocupados por la privacidad.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What changes */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Qué cambia con datos completos
          </h2>
          <div className="space-y-12 max-w-[750px]">
            {[
              {
                title: "Atribución en la que puedes confiar",
                desc: "Atribución de ingresos de último clic construida sobre el 100% de los recorridos de visitantes. Descubre qué canales, campañas y creatividades generan realmente ingresos — no cuáles son visibles para las cookies.",
              },
              {
                title: "LENS AI señala lo importante",
                desc: "Más de 60 reglas de detección de anomalías ejecutándose continuamente sobre tus datos completos. Cuando cae el tráfico, cambian las tasas de conversión o una campaña rinde por debajo, LENS te lo dice en lenguaje claro — antes de que lo descubras en una revisión semanal.",
              },
              {
                title: "Una única fuente de verdad",
                desc: "Se acabó reconciliar GA4, paneles de plataformas publicitarias y exportaciones del CRM. SealMetrics captura cada sesión, cada conversión y cada evento de ingresos. Las cifras coinciden porque los datos son completos.",
              },
              {
                title: "Visibilidad de agentes IA (Próximamente)",
                desc: "GPT, Claude, Perplexity y Google AI Overviews están enviando tráfico a tu sitio. La analítica tradicional clasifica estas visitas como directas o desconocidas. SealMetrics las identifica como sesiones de agente diferenciadas.",
              },
            ].map((item) => (
              <div key={item.title} className="pb-8 border-b border-warm-100 last:border-0">
                <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics that matter */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Métricas que importan a los CMOs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Tráfico capturado" },
              { metric: "9", label: "Tipos de informe" },
              { metric: "60+", label: "Reglas de anomalías LENS AI" },
              { metric: "<50ms", label: "Tiempo de carga del script" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-6 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <p className="font-mono text-[2rem] font-medium text-text-primary leading-tight">
                  {item.metric}
                </p>
                <p className="text-[0.8rem] text-text-tertiary mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-warm-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Descubre lo que a tus datos de marketing les falta.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Demo de 30 minutos con tu tráfico real. Te mostramos la diferencia
            entre GA4 y la realidad.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Solicitar Demo
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            O{" "}
            <Link
              href="/es/growth-calculator"
              className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors"
            >
              calcula tu pérdida de datos primero
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
