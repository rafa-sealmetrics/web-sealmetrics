import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para Medios — Medición de audiencia completa",
  description:
    "Cuando el 60-70% de tus lectores europeos es invisible, tus CPMs están infravalorados. SealMetrics captura cada visita — sin cookies, 100% de los datos.",
  openGraph: {
    title: "SealMetrics para Medios",
    description:
      "Medición de audiencia completa para editores. 100% de lectores capturados, pageviews precisos, datos reales de engagement para venta publicitaria.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/media",
    languages: getAlternatesEs("/for/media"),
  },
};

export default function ForMediaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para Medios y Editores" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Para Medios y Editores", url: "/es/for/media" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para Medios", description: "Cuando el 60-70% de los lectores europeos es invisible para la analítica, tus CPMs están infravalorados. SealMetrics captura cada visita — sin cookies, 100% de los datos.", url: "/es/for/media", audience: "Editores y medios" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para Medios y Editores
            </span>
            <h1 className="headline-hero mb-8">
              Tu audiencia es mayor de lo que dice tu analítica. Tus ingresos publicitarios reflejan la cifra menor.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Las tasas de rechazo de consentimiento en la UE hacen que el 60-70%
              de tus lectores nunca aparezca en la analítica. Tu audiencia real
              es 2-3 veces lo que reportas a los anunciantes. Cada pageview
              invisible es{" "}
              <Link href="/glossary/data-loss-in-analytics" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                ingresos perdidos
              </Link>
              . SealMetrics ofrece{" "}
              <Link href="/es/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">medición de audiencia completa</Link>{" "}
              para que tus tarifas publicitarias reflejen tu alcance real.
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
                title: "Las cifras de audiencia infravaloran tu inventario",
                desc: "Los anunciantes pagan según el tamaño reportado de audiencia. Cuando tu analítica solo captura el 30-40% de los lectores, tus CPMs se calculan sobre una fracción de tu alcance real. Estás vendiendo tu inventario con descuento sin saberlo.",
              },
              {
                title: "Los datos de rendimiento de contenido están distorsionados",
                desc: "¿Qué artículos generan engagement? ¿Qué temas retienen lectores? Cuando la mayoría de las visitas son invisibles, tus decisiones editoriales se basan en una muestra sesgada — lectores que aceptaron cookies, no tu audiencia completa.",
              },
              {
                title: "Los funnels de conversión a suscripción están incompletos",
                desc: "No puedes optimizar un paywall que no puedes medir. Cuando el 60-70% de los recorridos de lector es invisible, tu funnel de free-to-paid se construye sobre datos parciales. Los puntos reales de abandono están ocultos.",
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
                title: "Cifras de audiencia reales para venta publicitaria",
                desc: "Reporta tu tamaño real de audiencia a los anunciantes — cada lector, cada pageview, cada sesión. Cuando tu audiencia verificada es 2-3 veces lo que reporta GA4, tus CPMs y tarifas de patrocinio deberían reflejarlo.",
              },
              {
                title: "Analítica completa de rendimiento de contenido",
                desc: "Descubre qué artículos, temas y formatos generan engagement real en el 100% de tu audiencia. Toma decisiones editoriales basadas en toda tu base de lectores, no en el subconjunto que aceptó cookies.",
              },
              {
                title: "Visibilidad completa del funnel de suscripción",
                desc: "Rastrea cada recorrido de lector desde la primera visita hasta la interacción con el paywall y la suscripción de pago. Identifica las barreras reales de conversión y optimiza con datos completos — no con una muestra del 30-40%.",
              },
              {
                title: "LENS AI para editores",
                desc: "Anomalías de tráfico, cambios de engagement, variaciones de fuentes de referencia y outliers de rendimiento de contenido — detectados automáticamente. Sabe cuándo una historia está en tendencia o cuando cae una fuente de tráfico antes de que impacte los ingresos.",
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
            Métricas que importan a los editores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Lectores capturados" },
              { metric: "2-3x", label: "Audiencia real vs reportada" },
              { metric: "0", label: "Dependencia de cookies" },
              { metric: "Solo UE", label: "Infraestructura" },
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
            Descubre el tamaño real de tu audiencia.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Demo de 30 minutos con tu tráfico real. Te mostramos la brecha entre
            la audiencia reportada y la real — y lo que significa para los
            ingresos publicitarios.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Ver tus datos completos de audiencia
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
