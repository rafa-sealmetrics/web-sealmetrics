import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para Hoteles — 100% del tráfico de reservas",
  description:
    "Los hoteles pierden el 60-70% de los datos de visitantes por muros de consentimiento y bloqueadores. SealMetrics captura el 100% del tráfico de reservas sin cookies.",
  openGraph: {
    title: "SealMetrics para Hoteles",
    description:
      "100% de visibilidad del tráfico de reservas para hoteles y turismo. Claridad entre canal directo y OTAs, optimización estacional, sin cookies.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/hotels",
    languages: getAlternatesEs("/for/hotels"),
  },
};

export default function ForHotelsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para Hoteles y Turismo" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para Hoteles y Turismo", url: "/es/for/hotels" }], "es")} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para Hoteles", description: "Los hoteles pierden el 60-70% de los datos de visitantes por muros de consentimiento y bloqueadores de anuncios. SealMetrics captura el 100% del tráfico de reservas sin cookies.", url: "/es/for/hotels", audience: "Sector hotelero y turístico" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para Hoteles y Turismo
            </span>
            <h1 className="headline-hero mb-8">
              El 60-70% de tu tráfico de reservas es invisible. Tu estrategia de canal directo se construye sobre una fracción de la realidad.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Las altas tasas de rechazo de consentimiento y el uso de
              bloqueadores en mercados turísticos europeos hacen que la mayoría
              de interacciones con tus huéspedes nunca se registren. SealMetrics{" "}
              <Link href="/es/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">captura el 100% de tu tráfico de reservas</Link>{" "}
              con recogida{" "}
              <Link href="/glossary/cookieless-analytics" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                cookieless
              </Link>{" "}
              first-party &mdash; sin cookies, sin dependencia del consentimiento, sin pérdida de datos.
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
                title: "La atribución directo vs OTA es una caja negra",
                desc: "Inviertes en captar reservas directas, pero no puedes medir el coste real por reserva directa frente a la comisión de las OTAs. Cuando el 60-70% de los visitantes es invisible, el rendimiento del canal directo es pura conjetura.",
              },
              {
                title: "Los muros de consentimiento destruyen los datos de reserva",
                desc: "En mercados turísticos europeos, entre el 35% y el 60% de los visitantes rechaza los banners de consentimiento. Suma bloqueadores de anuncios y Safari ITP y tu analítica de motor de reservas se convierte en una pequeña muestra de la realidad — no en la foto completa que necesitas para decidir sobre ingresos.",
              },
              {
                title: "El ROI de las campañas estacionales es adivinación",
                desc: "Las decisiones de inversión en temporada alta requieren confianza. Pero cuando tomas decisiones de seis cifras basadas en el 30-40% de los datos de conversión, estás optimizando para la minoría visible — no para tu base real de huéspedes.",
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
                title: "Visibilidad completa del funnel de reservas",
                desc: "Desde la búsqueda inicial hasta la comparación de tarifas y la reserva final. Ve cada paso del funnel con el 100% de los datos de visitantes — sin depender de cookies que los muros de consentimiento y las restricciones del navegador destruyen.",
              },
              {
                title: "Claridad entre canal directo y OTAs",
                desc: "Mide la tasa real de reserva directa con el 100% de los datos. Consulta el coste por reserva por canal — directo, OTA, metasearch, campañas de pago — y toma decisiones de distribución con cifras completas, no con estimaciones.",
              },
              {
                title: "Optimización de campañas estacionales",
                desc: "Tener el 100% de los datos de conversión significa decidir con confianza el presupuesto en temporada alta y baja. Sabes exactamente qué campañas generan reservas en temporada alta, y qué promociones de temporada baja aportan retorno real.",
              },
              {
                title: "LENS AI para hostelería",
                desc: "Anomalías de reservas, problemas de paridad de tarifas, caídas bruscas de tráfico desde mercados clave y cambios en las tasas de conversión — detectados en tiempo real y explicados en lenguaje claro. Se acabó descubrir los problemas en la reunión semanal de revenue.",
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
            Métricas que importan a los hoteles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Tráfico de reservas capturado" },
              { metric: "60-70%", label: "Antes invisible" },
              { metric: "0", label: "Cookies necesarias" },
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
            Descubre tus datos de reserva completos.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Demo de 30 minutos con tu tráfico real. Te mostramos cada recorrido
            de reserva que GA4 está perdiendo — y los ingresos que representa.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Ver tus datos completos de reservas
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
