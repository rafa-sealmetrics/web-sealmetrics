import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para eCommerce — Atribución de Ingresos Completa",
  description:
    "Deja de optimizar el ROAS sobre el 30% de tus conversiones. SealMetrics captura cada añadido al carrito, checkout y compra — sin cookies, 100% atribución.",
  openGraph: {
    title: "SealMetrics para eCommerce",
    description:
      "Atribución de ingresos completa para eCommerce. 100% de conversiones capturadas, ROAS real por canal, análisis completo de abandono de carrito.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/ecommerce",
    languages: getAlternatesEs("/for/ecommerce"),
  },
};

export default function ForEcommercePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para eCommerce" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Para eCommerce", url: "/es/for/ecommerce" }], "es")} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para eCommerce", description: "Deja de optimizar el ROAS sobre el 30% de tus conversiones. SealMetrics captura cada añadido al carrito, checkout y compra — sin cookies, 100% atribución.", url: "/es/for/ecommerce", audience: "Equipos de eCommerce" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para eCommerce
            </span>
            <h1 className="headline-hero mb-8">
              Estás optimizando el ROAS sobre una fracción de tus conversiones.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              El 55% de los visitantes europeos rechaza las cookies por completo,
              y de los que aceptan, la mayoría lo hace después de la landing page.
              El resultado: la mayor parte de los recorridos de checkout son
              invisibles o se atribuyen mal. Tus mejores campañas pueden parecer
              las peores — porque no puedes ver las conversiones{" "}
              <Link href="/glossary/cookieless-analytics" className="text-text-secondary border-b border-warm-200 pb-0.5 no-underline hover:text-text-primary transition-colors">
                cookieless
              </Link>{" "}
              que generan. SealMetrics ofrece{" "}
              <Link href="/es/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors">atribución de ingresos completa</Link>{" "}
              en cada recorrido de checkout.
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
                title: "La atribución de ingresos está rota",
                desc: "Plataformas publicitarias, GA4 y tu CRM nunca coinciden en las cifras de ingresos. Dedicas horas a reconciliar — y la brecha solo crece a medida que caen las tasas de consentimiento. El problema no es el modelo de atribución. Son las conversiones que faltan.",
              },
              {
                title: "Conversiones invisibles distorsionan el ROAS",
                desc: "El 55% de los visitantes rechaza las cookies, y la mayoría de quienes aceptan lo hacen después de la landing page — lo que significa que solo ~16% tiene atribución correcta de fuente de tráfico. Reasignas presupuesto según qué canales tienen mayor tasa de consentimiento — no cuáles generan realmente ingresos.",
              },
              {
                title: "Los datos de abandono de carrito están incompletos",
                desc: "Solo ves el abandono de usuarios que consintieron. El panorama completo — dónde abandonan TODOS los usuarios, qué métodos de pago causan fricción, qué pasos pierden más ingresos — permanece oculto tras el muro del consentimiento.",
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
                title: "Atribución de ingresos de funnel completo",
                desc: "Cada añadido al carrito, cada paso del checkout y cada compra se captura — independientemente de cookies o consentimiento. Visualiza el camino completo desde la primera visita hasta la transacción, en todos los canales y dispositivos.",
              },
              {
                title: "ROAS real por canal",
                desc: "100% de las conversiones atribuidas a su fuente real, no modeladas ni estimadas. Cuando ves que una campaña ofrece un ROAS de 4,2x, esa cifra refleja cada conversión que generó — no solo las que las cookies consiguieron rastrear.",
              },
              {
                title: "Análisis completo de abandono de carrito",
                desc: "Descubre dónde abandonan TODOS los usuarios — no solo el 30-40% que aceptó cookies. Identifica fricción en el pago, sorpresas por costes de envío y problemas de UX en el checkout con datos de cada visitante.",
              },
              {
                title: "LENS AI para eCommerce",
                desc: "Más de 60 reglas de detección de anomalías afinadas para patrones de eCommerce. Problemas de disponibilidad de stock que afectan a la conversión, fallos de pasarela de pago, cambios repentinos en el valor medio del pedido y variaciones de rendimiento de campañas — detectados automáticamente y explicados en lenguaje claro.",
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

      {/* Case study */}
      <section className="py-16 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[760px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Resultado real
            </span>
            <h2 className="headline-section mb-8">
              Retailer europeo de moda. 74% de las conversiones invisibles para GA4.
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { num: "47.200", label: "Visitantes reales/mes", sub: "vs 12.400 en GA4" },
                { num: "1.290", label: "Conversiones rastreadas", sub: "vs 340 en GA4" },
                { num: "\u20AC342K", label: "Ingresos atribuidos", sub: "vs \u20AC89K en GA4" },
                { num: "+40%", label: "Mejora del ROAS", sub: "tras 60 días" },
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-white border border-warm-100 rounded-[4px]">
                  <div className="font-serif text-[1.5rem] font-medium text-text-primary mb-1">{stat.num}</div>
                  <div className="text-[0.75rem] font-medium text-text-secondary mb-0.5">{stat.label}</div>
                  <div className="text-[0.7rem] text-text-tertiary">{stat.sub}</div>
                </div>
              ))}
            </div>
            <blockquote className="border-l-2 border-warm-200 pl-5 mb-6">
              <p className="text-[0.95rem] text-text-secondary italic leading-relaxed">
                &ldquo;Todo nuestro modelo de atribución estaba construido sobre
                datos incompletos &mdash; cada decisión de presupuesto que
                tomábamos era errónea. SealMetrics nos mostró que nos faltaba
                el 74% de nuestras conversiones.&rdquo;
              </p>
              <footer className="text-[0.8rem] text-text-tertiary mt-2">
                Head of Digital Marketing, retailer europeo de moda &mdash;
                45M&euro; de ingresos
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Metrics that matter */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Métricas que importan al eCommerce
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {[
              { metric: "100%", label: "Conversiones capturadas" },
              { metric: "+40%", label: "Visibilidad del ROAS" },
              { metric: "280%", label: "Más ingresos atribuidos" },
              { metric: "0", label: "Dependencia del consentimiento" },
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
            Descubre tus datos de ingresos completos.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Ejecutaremos SealMetrics junto a tu GA4 durante 30 días. Verás cada
            conversión que tu configuración actual se está perdiendo &mdash; y los
            ingresos que representan.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Ver tus datos de ingresos completos &rarr;
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
