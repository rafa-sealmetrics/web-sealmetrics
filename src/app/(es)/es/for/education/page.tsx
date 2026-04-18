import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para Educación — Atribución completa de matrícula",
  description:
    "Los estudiantes investigan durante meses antes de matricularse. La analítica con cookies pierde el recorrido. SealMetrics captura cada visita — sin cookies.",
  openGraph: {
    title: "SealMetrics para Educación",
    description:
      "Atribución completa de matrícula para universidades y proveedores educativos. 100% de los recorridos de estudiantes capturados, sin cookies, alojado en la UE.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/education",
    languages: getAlternatesEs("/for/education"),
  },
};

export default function ForEducationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para Educación" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Para Educación", url: "/es/for/education" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para Educación", description: "Los estudiantes investigan durante meses antes de matricularse. La analítica basada en cookies pierde el recorrido. SealMetrics captura cada visita — sin cookies, conforme al GDPR.", url: "/es/for/education", audience: "Instituciones educativas" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para Educación
            </span>
            <h1 className="headline-hero mb-8">
              Un futuro estudiante visita tu sitio 12 veces antes de solicitar plaza. Tú ves 3 de esas visitas.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Los recorridos de matrícula universitaria abarcan meses —
              investigación de programas, comparaciones de campus, páginas de
              ayudas económicas, inscripciones a jornadas de puertas abiertas.
              La expiración de cookies y el rechazo del consentimiento en la UE
              hacen que tu{" "}
              <Link href="/glossary/multi-touch-attribution" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                atribución
              </Link>{" "}
              capture solo fragmentos de un recorrido que determina tu próxima
              promoción. SealMetrics ofrece{" "}
              <Link href="/es/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">atribución completa de matrícula</Link>{" "}
              en cada punto de contacto.
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
                title: "La atribución de matrícula está desconectada",
                desc: "Un estudiante te descubre por un anuncio de Google, vuelve vía búsqueda orgánica, asiste a una jornada virtual y solicita plaza 4 meses después. Las cookies expiraron tras la primera sesión. Tu analítica atribuye la solicitud al tráfico directo — o a nada.",
              },
              {
                title: "Las decisiones de inversión en campañas carecen de evidencia",
                desc: "Lanzas campañas en buscadores, redes sociales y display para cada ciclo de matrícula. Pero cuando el 60-70% de las visitas resultantes es invisible, estás asignando presupuestos de captación de seis cifras según qué canales tienen mayor tasa de consentimiento.",
              },
              {
                title: "El rendimiento de las páginas de programa es un punto ciego",
                desc: "¿Qué páginas de programa convierten investigadores en solicitantes? ¿Qué contenido impulsa las inscripciones a jornadas de puertas abiertas? Cuando la mayoría de los recorridos es invisible, tu estrategia de contenido se guía por la minoría que consintió — no por tu base completa de futuros estudiantes.",
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
                title: "Atribución completa del funnel de matrícula",
                desc: "Cada visita desde la primera búsqueda de programa hasta el envío de solicitud — conectada a lo largo de meses y dispositivos sin cookies. Descubre qué canales, contenido y eventos generan realmente solicitudes, no solo cuáles se llevan el crédito del último clic.",
              },
              {
                title: "ROI de campañas de captación, medido",
                desc: "100% de las conversiones atribuidas a su fuente real. Sabe exactamente qué campañas generan inscripciones a puertas abiertas, solicitudes de información y solicitudes de matrícula — y asigna el presupuesto de captación con confianza.",
              },
              {
                title: "Analítica completa de páginas de programa",
                desc: "Descubre cómo TODOS los futuros estudiantes interactúan con las páginas de programa, comparan ofertas y progresan hacia la solicitud. Identifica qué programas atraen más investigación, dónde abandonan los prospectos y qué contenido impulsa la acción.",
              },
              {
                title: "LENS AI para educación",
                desc: "Anomalías en funnels de solicitud, variaciones de tráfico durante los periodos de matrícula, cambios de engagement en páginas de programa y caídas de rendimiento de campañas — detectados automáticamente. Detecta problemas durante ventanas críticas de captación antes de que impacten en las cifras de ingreso.",
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
            Métricas que importan al sector educativo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Visitas de futuros estudiantes capturadas" },
              { metric: "12+", label: "Visitas medias antes de solicitar" },
              { metric: "0", label: "Dependencia de cookies" },
              { metric: "Solo UE", label: "Infraestructura de datos" },
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
            Descubre el recorrido completo de matrícula.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Demo de 30 minutos con tu tráfico real. Te mostramos cada visita de
            futuro estudiante que GA4 está perdiendo — y qué significa para tu
            estrategia de captación.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Ver tus datos completos de matrícula
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
