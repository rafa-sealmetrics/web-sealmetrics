import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para Finanzas — Analítica conforme, datos completos",
  description:
    "El sector financiero enfrenta los requisitos de consentimiento más estrictos de Europa. SealMetrics captura el 100% sin cookies, cumpliendo el GDPR.",
  openGraph: {
    title: "SealMetrics para Finanzas",
    description:
      "Analítica completa para servicios financieros. 100% de datos de visitante, cero dependencia de cookies, infraestructura exclusivamente UE, GDPR por diseño.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/finance",
    languages: getAlternatesEs("/for/finance"),
  },
};

export default function ForFinancePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para Finanzas" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Para Finanzas", url: "/es/for/finance" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para Finanzas", description: "El sector financiero enfrenta los requisitos de consentimiento más estrictos de Europa. SealMetrics captura el 100% de los recorridos de visitantes sin cookies — cumpliendo el GDPR, con alojamiento en la UE.", url: "/es/for/finance", audience: "Servicios financieros" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para servicios financieros
            </span>
            <h1 className="headline-hero mb-8">
              Cuanto más estricto tu cumplimiento, menos datos recoges. Ese trade-off es innecesario.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Los servicios financieros enfrentan las tasas de rechazo de
              consentimiento más altas de Europa — 75-85% en algunos mercados.
              Tu{" "}
              <Link href="/glossary/gdpr-analytics-compliance" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                cumplimiento GDPR
              </Link>{" "}
              es impecable, pero tu analítica muestra una fracción de la
              realidad. SealMetrics captura el 100% sin comprometer el
              cumplimiento — construido sobre{" "}
              <Link href="/es/security" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">infraestructura exclusivamente UE con arquitectura privacy-first</Link>.
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
                title: "El cumplimiento mata tu cobertura de datos",
                desc: "Tu equipo legal exige una implementación estricta del consentimiento. Resultado: el 75-85% de los visitantes rechaza las cookies. Eres cumplidor — y casi ciego. Decisiones de producto, optimización de campañas y análisis de conversión funcionan sobre el 15-25% del tráfico.",
              },
              {
                title: "Atribución de leads en ciclos largos",
                desc: "Una consulta de hipoteca, una cotización de seguro, una consulta de gestión patrimonial — estos recorridos abarcan semanas de investigación. La expiración de cookies y el rechazo del consentimiento hacen que pierdas la atribución entre la primera visita de investigación y la solicitud final.",
              },
              {
                title: "Riesgo de transferencia de datos a terceros",
                desc: "Cada herramienta de analítica que envía datos a servidores de EE.UU. crea exposición regulatoria. Google Analytics, Adobe y la mayoría de los gestores de etiquetas transfieren datos personales fuera de la UE — una responsabilidad creciente ante la evolución de la aplicación de las DPAs.",
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
                title: "100% de cobertura de datos, 100% conforme",
                desc: "Sin cookies, sin tratamiento de datos personales, sin requisito de consentimiento. SealMetrics opera bajo la exención de interés legítimo del GDPR para medición de audiencia. Tu DPO lo aprueba. Tu analítica es completa.",
              },
              {
                title: "Visibilidad completa del funnel de solicitud",
                desc: "Rastrea el recorrido completo desde la primera visita de investigación, pasando por la comparación de productos, hasta el envío de la solicitud — a lo largo de semanas y múltiples dispositivos. Descubre dónde abandonan los prospectos, qué productos atraen más investigación y qué canales generan leads cualificados.",
              },
              {
                title: "Infraestructura de datos exclusivamente UE",
                desc: "Todos los datos procesados y almacenados exclusivamente en centros de datos europeos. Sin transferencias transatlánticas, sin dependencia de decisiones de adecuación, sin riesgo Schrems III. Tu equipo de cumplimiento obtiene una arquitectura limpia que puede defender ante cualquier regulador.",
              },
              {
                title: "LENS AI para servicios financieros",
                desc: "Anomalías en funnels de solicitud, caídas de tráfico desde segmentos clave, cambios en tasas de conversión en páginas de producto y variaciones de rendimiento de campañas — detectados automáticamente. Detecta problemas antes de que aparezcan en las revisiones trimestrales.",
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
            Métricas que importan a los servicios financieros
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Recorridos de visitante capturados" },
              { metric: "0", label: "Cookies o datos personales" },
              { metric: "Solo UE", label: "Infraestructura de datos" },
              { metric: "0", label: "Transferencias transfronterizas" },
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
            Datos completos sin sacrificar el cumplimiento.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Demo de 30 minutos con tu tráfico real. Te mostramos la brecha de
            datos que crearon tus requisitos de cumplimiento — y cómo cerrarla.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Ver tus datos de visitante completos
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
