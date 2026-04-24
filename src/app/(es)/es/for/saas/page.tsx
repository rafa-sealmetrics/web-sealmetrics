import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para SaaS — Atribución Trial-to-Paid Completa",
  description:
    "El recorrido de compra SaaS abarca semanas y múltiples sesiones. La analítica basada en cookies pierde el hilo. SealMetrics captura cada touchpoint, 100%.",
  openGraph: {
    title: "SealMetrics para SaaS",
    description:
      "Atribución trial-to-paid completa para SaaS. Visibilidad total del funnel en ciclos largos y estrategias product-led growth.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/saas",
    languages: getAlternatesEs("/for/saas"),
  },
};

export default function ForSaaSPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para SaaS" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para SaaS", url: "/es/for/saas" }], "es")} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para SaaS", description: "El recorrido desde registro a cliente de pago abarca semanas y múltiples sesiones. La analítica basada en cookies pierde el hilo. SealMetrics captura cada touchpoint — sin cookies, 100% completo.", url: "/es/for/saas", audience: "Empresas SaaS" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para SaaS
            </span>
            <h1 className="headline-hero mb-8">
              Tus mejores leads visitan 7 veces antes de registrarse. Tú solo ves 2 de esas visitas.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Los recorridos de compra SaaS son largos, multi-sesión y
              multi-dispositivo. La expiración de cookies y el rechazo del
              consentimiento en mercados europeos hacen que pierdas el hilo
              entre el primer contacto y la conversión a cliente de pago. Tu
              modelo de atribución se construye sobre fragmentos. SealMetrics
              ofrece{" "}
              <Link href="/es/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">atribución completa de trial a cliente de pago</Link>{" "}
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
                title: "La atribución trial-to-paid está rota",
                desc: "Un lead lee tu blog, vuelve a través de un retargeting, visita pricing dos veces y se registra en un trial 3 semanas después. Las cookies expiraron tras la primera visita. Tu analítica acredita al último touchpoint — o a nada.",
              },
              {
                title: "El ROI del contenido es invisible",
                desc: "Inviertes en content marketing, SEO y thought leadership. Estos canales generan awareness en la parte alta del funnel que convierte semanas después — pero la analítica basada en cookies no puede conectar esa primera visita con el registro posterior.",
              },
              {
                title: "Las métricas de PLG no son fiables",
                desc: "El product-led growth depende de entender el recorrido completo desde visitante anónimo hasta usuario gratuito y cliente de pago. Cuando el 60-70% de ese recorrido es invisible, tus funnels de activación y conversión se construyen sobre datos parciales.",
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
                title: "Atribución completa de trial a cliente de pago",
                desc: "Cada sesión, desde la primera visita anónima hasta el registro en trial y la conversión a pago — conectada sin cookies. Descubre qué canales, contenido y campañas generan realmente ingresos, no solo cuáles se llevan el crédito del último clic.",
              },
              {
                title: "ROI de content marketing, medido",
                desc: "Conecta las visitas al blog de la parte alta del funnel con las conversiones que ocurren semanas después. Sabe exactamente qué artículos, guías y landing pages contribuyen al pipeline — incluso cuando el visitante rechazó las cookies en su primera visita.",
              },
              {
                title: "Funnels completos de product-led growth",
                desc: "Rastrea el recorrido completo desde visitante anónimo hasta usuario gratuito y cliente de pago con el 100% de los datos. Identifica dónde abandonan los usuarios, qué pasos de activación importan más y dónde enfocar el esfuerzo de producto y marketing.",
              },
              {
                title: "LENS AI para SaaS",
                desc: "Anomalías en registros de trial, cambios en la tasa de activación, variaciones en el funnel de conversión y rendimiento de fuentes de tráfico — detectados automáticamente en tus datos completos. Sabe cuándo algo cambia antes de que aparezca en tu MRR.",
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
            Métricas que importan al SaaS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Recorridos de visitante capturados" },
              { metric: "0", label: "Dependencia de cookies" },
              { metric: "7x", label: "Toques medios antes del registro" },
              { metric: "60+", label: "Reglas de anomalías LENS AI" },
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
            Ve el recorrido completo desde la visita hasta el ingreso.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Demo de 30 minutos con tu tráfico real. Te mostramos cada touchpoint
            que GA4 está perdiendo — y cómo conecta con el pipeline.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Ver tus datos completos del funnel
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
