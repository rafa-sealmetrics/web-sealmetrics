import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para Agencias — Demuestra el ROI de campañas",
  description:
    "Deja de defender resultados con datos incompletos. SealMetrics ofrece a las agencias 100% de atribución en cada cliente — sin cookies, sin huecos de consentimiento.",
  openGraph: {
    title: "SealMetrics para Agencias",
    description:
      "Atribución completa para cada cliente. 100% de conversiones capturadas, ROI real por campaña, una única fuente de verdad por cuenta.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/agencies",
    languages: getAlternatesEs("/for/agencies"),
  },
};

export default function ForAgenciesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para Agencias" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para Agencias", url: "/es/for/agencies" }], "es")} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para Agencias", description: "Deja de defender resultados de campaña con datos incompletos. SealMetrics ofrece a las agencias 100% de atribución en cada cliente — sin cookies, sin huecos de consentimiento.", url: "/es/for/agencies", audience: "Agencias de marketing" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para Agencias
            </span>
            <h1 className="headline-hero mb-8">
              Tus clientes dudan de las cifras. Porque las cifras están incompletas.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Cuando GA4 captura el 13% del tráfico europeo, cada informe a
              cliente es una negociación. Las plataformas publicitarias dicen
              una cosa, la analítica otra y el CRM del cliente una tercera. El
              problema no son tus campañas — es la{" "}
              <Link href="/glossary/data-loss-in-analytics" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                pérdida de datos
              </Link>{" "}
              entre el clic y la conversión. SealMetrics ofrece a las agencias{" "}
              <Link href="/es/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">analítica multi-cliente completa</Link>{" "}
              con una única fuente de verdad por cuenta.
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
                title: "El reporting al cliente es una batalla de credibilidad",
                desc: "Presentas resultados de campaña y el cliente los cruza con sus propios datos. Las cifras nunca coinciden. Dedicas horas a reconciliar en lugar de optimizar — y cada discrepancia erosiona la confianza.",
              },
              {
                title: "Los huecos de atribución te cuestan cuentas",
                desc: "Cuando el 60-70% de las conversiones es invisible, tus mejores campañas parecen mediocres. Los clientes cuestionan tus decisiones de inversión. Algunos se van a otra agencia. El problema real son los datos, no la estrategia.",
              },
              {
                title: "El reporting multi-cliente no es sostenible",
                desc: "Cada cliente tiene tasas de consentimiento diferentes, configuraciones de cookies distintas, huecos de datos distintos. Construyes informes sobre cimientos movedizos — y escalar significa multiplicar el trabajo de reconciliación.",
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
                title: "Una única fuente de verdad por cliente",
                desc: "Se acabó reconciliar GA4, plataformas publicitarias y exportaciones del CRM. SealMetrics captura el 100% de sesiones y conversiones. Cuando presentas una cifra, coincide con la realidad — y el cliente lo sabe.",
              },
              {
                title: "Demuestra el ROI de campañas con atribución completa",
                desc: "Cada conversión atribuida a su fuente real, en cada canal y punto de contacto. Muestra a los clientes el ROAS real de cada campaña — no la fracción que las cookies casualmente rastrearon.",
              },
              {
                title: "Escala sin multiplicar el problema de datos",
                desc: "Misma metodología, misma completitud, cada cliente. Incorpora nuevas cuentas sin preocuparte por variaciones en la tasa de consentimiento o políticas de cookies. La infraestructura de datos es consistente desde el primer día.",
              },
              {
                title: "LENS AI como tu sistema de alerta temprana",
                desc: "Más de 60 reglas de detección de anomalías operando en todas las cuentas de cliente. Caídas de tráfico, cambios en la tasa de conversión, variaciones de rendimiento de campaña — detectados automáticamente y marcados antes de que el cliente los vea.",
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
            Métricas que importan a las agencias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Conversiones capturadas" },
              { metric: "0", label: "Huecos de reconciliación" },
              { metric: "60+", label: "Reglas de anomalías LENS AI" },
              { metric: "1", label: "Fuente de verdad por cliente" },
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
            Muestra a tus clientes la foto completa.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Demo de 30 minutos con datos reales de cliente. Te mostramos la
            brecha entre lo que reporta GA4 y lo que realmente ocurrió.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Solicitar Demo para tu agencia
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
