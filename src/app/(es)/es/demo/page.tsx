import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { DemoFormEs } from "./DemoFormEs";

export const metadata: Metadata = {
  title: "Solicitar Demo — SealMetrics",
  description:
    "Descubre cómo SealMetrics captura el 100% de tu tráfico sin cookies. Demo personalizada de 30 minutos.",
  openGraph: {
    title: "Solicitar Demo — SealMetrics",
    description:
      "Demo personalizada de 30 minutos. Descubre cómo es ver el 100% de tu tráfico.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/demo",
    languages: getAlternatesEs("/demo"),
  },
};

export default function DemoPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Solicitar Demo" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Solicitar Demo", url: "/es/demo" }], "es")} />
      <section className="pt-12 pb-28 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left: info */}
            <div>
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
                Solicitar Demo
              </span>
              <h1 className="headline-hero mb-8">
                Descubre lo que tus analíticas están perdiendo.
              </h1>
              <p className="text-[1.1rem] leading-[1.75] text-text-secondary mb-10">
                En 30 minutos, te mostramos exactamente cuántos datos pierde tu
                configuración actual&nbsp;&mdash; y cómo SealMetrics los recupera.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Comparativa lado a lado",
                    desc: "Ejecutamos SealMetrics junto a tus datos de GA4 para que veas la diferencia en números reales.",
                  },
                  {
                    title: "Tus datos, tus dominios",
                    desc: "La demo usa tu tráfico real, no dashboards genéricos. Ves tus propios visitantes invisibles.",
                  },
                  {
                    title: "Sin compromiso",
                    desc: "30 minutos. Sin contrato, sin presión, sin llamadas de seguimiento que no hayas pedido.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="pb-6 border-b border-warm-100 last:border-0"
                  >
                    <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[0.9rem] text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="p-5 bg-warm-white border border-warm-100 rounded-[4px] text-center">
                  <div className="font-serif text-[2rem] font-medium text-text-primary mb-1">58%</div>
                  <div className="text-[0.75rem] text-text-secondary leading-snug">Conversiones no rastreadas recuperadas de media</div>
                </div>
                <div className="p-5 bg-warm-white border border-warm-100 rounded-[4px] text-center">
                  <div className="font-serif text-[2rem] font-medium text-text-primary mb-1">30 min</div>
                  <div className="text-[0.75rem] text-text-secondary leading-snug">Para ver tu brecha de datos en vivo</div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
                <p className="text-[0.85rem] text-text-secondary leading-relaxed">
                  &ldquo;Pensábamos que nuestras analíticas eran precisas. SealMetrics
                  nos mostró que estábamos perdiendo el 74% de nuestras conversiones.&rdquo;
                </p>
                <p className="text-[0.8rem] text-text-tertiary mt-2">
                  Head of Digital Marketing &mdash; Retailer de Moda Europeo
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-[0.85rem]">
                <Link href="/es/how-it-works" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Cómo funciona</Link>
                <Link href="/es/product" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Producto completo</Link>
                <Link href="/data-loss-calculator" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Calcula tu pérdida de datos</Link>
              </div>
            </div>

            {/* Right: form */}
            <DemoFormEs />
          </div>
        </div>
      </section>
    </>
  );
}
