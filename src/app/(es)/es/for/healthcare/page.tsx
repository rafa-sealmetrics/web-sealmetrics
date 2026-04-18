import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para Salud — Datos completos",
  description:
    "La sanidad enfrenta el mayor listón de privacidad de Europa. SealMetrics captura el 100% de los recorridos sin cookies ni datos personales — conforme al GDPR.",
  openGraph: {
    title: "SealMetrics para Salud",
    description:
      "Analítica completa para proveedores de salud. 100% de recorridos de visitante capturados, cero datos personales, infraestructura exclusivamente UE.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/healthcare",
    languages: getAlternatesEs("/for/healthcare"),
  },
};

export default function ForHealthcarePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para Salud" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Para Salud", url: "/es/for/healthcare" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para Salud", description: "La sanidad enfrenta el mayor listón de privacidad de Europa. SealMetrics captura el 100% de los recorridos de visitantes sin cookies ni datos personales — conforme al GDPR.", url: "/es/for/healthcare", audience: "Organizaciones sanitarias" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para Salud
            </span>
            <h1 className="headline-hero mb-8">
              La privacidad del paciente es innegociable. La analítica completa no debería ser el coste.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Los sitios web de salud manejan la intención de visitante más
              sensible de cualquier sector. Las tasas de rechazo del
              consentimiento alcanzan el 80-90%. Tu{" "}
              <Link href="/glossary/gdpr-analytics-compliance" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                cumplimiento GDPR
              </Link>{" "}
              es esencial — pero no debería significar operar con el 10-20% de
              tus datos de visitantes. SealMetrics está construido sobre{" "}
              <Link href="/es/security" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">infraestructura UE privacy-first</Link>{" "}
              que captura el 100% sin procesar datos personales.
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
                title: "Los requisitos de privacidad crean un vacío de datos",
                desc: "Tu equipo de cumplimiento exige una implementación estricta del consentimiento — con razón. Pero el resultado es que el 80-90% de los visitantes rechaza las cookies. Eres cumplidor y casi ciego. El rendimiento de páginas de servicio, funnels de citas y ROI de campañas se mide sobre una rebanada de tráfico.",
              },
              {
                title: "Optimizar el funnel de citas es imposible",
                desc: "¿Cuántos visitantes investigan un especialista, comparan servicios y luego reservan cita? Cuando el 80-90% de esos recorridos es invisible, no puedes identificar puntos de abandono, optimizar el flujo de reserva ni medir qué servicios generan más demanda.",
              },
              {
                title: "Las herramientas de terceros crean exposición regulatoria",
                desc: "Cualquier herramienta de analítica que transfiera datos a servidores de EE.UU. es un riesgo de cumplimiento en sanidad. Los patrones de navegación del paciente — qué condiciones investigan, qué especialistas consultan — son datos sensibles. La analítica alojada en EE.UU. crea una responsabilidad que tu DPO no puede aceptar.",
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
                title: "100% de datos, cero datos personales procesados",
                desc: "SealMetrics captura cada sesión e interacción de página sin cookies, sin datos personales y sin requisitos de consentimiento. Tus estándares de privacidad siguen siendo los más altos de cualquier sector — y tu analítica por fin es completa.",
              },
              {
                title: "Visibilidad completa del funnel de citas",
                desc: "Rastrea el recorrido completo desde la investigación de síntomas, pasando por la comparación de especialistas, hasta la reserva de cita — en todos los visitantes. Identifica dónde abandonan los pacientes, qué servicios generan más interés y dónde el flujo de reserva crea fricción.",
              },
              {
                title: "Infraestructura exclusivamente UE, sin excepciones",
                desc: "Todos los datos procesados y almacenados exclusivamente en centros de datos europeos. Sin transferencias transatlánticas, sin acuerdos de tratamiento con entidades estadounidenses, sin zonas grises regulatorias. Una arquitectura que tu DPO y tu equipo legal pueden defender con confianza.",
              },
              {
                title: "LENS AI para salud",
                desc: "Anomalías del funnel de citas, cambios de tráfico en páginas de servicio, variaciones en la tasa de finalización de reserva y caídas en fuentes de referencia — detectados automáticamente. Identifica problemas operativos antes de que afecten al acceso del paciente o al uso del servicio.",
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
            Métricas que importan al sector salud
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Recorridos de visitante capturados" },
              { metric: "0", label: "Datos personales procesados" },
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
            Analítica completa, cero concesiones en privacidad.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Demo de 30 minutos con tu tráfico real. Te mostramos la brecha de
            datos que crearon tus requisitos de privacidad — y cómo cerrarla
            sin ninguna concesión de cumplimiento.
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
