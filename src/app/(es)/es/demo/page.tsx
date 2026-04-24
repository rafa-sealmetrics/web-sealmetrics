import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { DemoFormEs } from "./DemoFormEs";

export const metadata: Metadata = {
  title: "Pide una demo — SealMetrics",
  description:
    "Walkthrough de 30 minutos personalizado. Ve cómo luce el 100% de tu tráfico sobre tu propia web.",
  openGraph: {
    title: "Pide una demo — SealMetrics",
    description: "30 min con el founder. Ve tu gap de datos en directo.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
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
      <Breadcrumbs items={[{ label: "Pide una demo" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Pide una demo", url: "/es/demo" }])} />

      <section className="pt-24 md:pt-28 pb-24 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            <div>
              <span className="eyebrow mb-5" style={{ display: "inline-flex" }}>
                Pide una demo
              </span>
              <h1 className="h-display mt-5" style={{ maxWidth: "18ch", fontSize: "clamp(40px, 5.4vw, 72px)" }}>
                Ve lo que tu analítica <em>te está ocultando.</em>
              </h1>
              <p className="text-ink-soft mt-7 leading-[1.55] max-w-[50ch]" style={{ fontSize: "clamp(16px, 1.3vw, 19px)" }}>
                En 30 minutos pasamos tu web por la calculadora de gap — en directo. Ves cuánto dato está perdiendo tu setup actual y dónde. Sin slides. Sin pitch comercial.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  { t: "Al lado de GA4", d: "Tus números de GA4 al lado de SealMetrics sobre el mismo tráfico. El gap está en tu propio dato." },
                  { t: "Tus webs, tus UTMs", d: "No un sandbox genérico. Tiramos de tus canales, campañas y embudos reales." },
                  { t: "Sin compromiso, sin email drip", d: "30 minutos. Si no te encaja, te lo decimos. Sin secuencia comercial." },
                ].map((item) => (
                  <div key={item.t} className="flex gap-4 pb-4 border-b border-warm-100 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                    <div>
                      <h3 className="text-[16px] font-semibold text-ink tracking-[-0.01em] mb-1">{item.t}</h3>
                      <p className="text-[14px] text-ink-soft leading-[1.55]">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="p-5 bg-white border border-warm-100 rounded-xl text-center">
                  <div className="font-semibold text-ink tabular-nums leading-none" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
                    <em className="italic-accent">58</em>%
                  </div>
                  <div className="text-[12px] text-ink-soft mt-2 leading-[1.4]">Conversiones sin trackear recuperadas de media</div>
                </div>
                <div className="p-5 bg-white border border-warm-100 rounded-xl text-center">
                  <div className="font-semibold text-ink tabular-nums leading-none" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
                    <em className="italic-accent">30</em> min
                  </div>
                  <div className="text-[12px] text-ink-soft mt-2 leading-[1.4]">Para ver tu gap de datos en directo</div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl" style={{ borderLeft: "3px solid #2E5C8A" }}>
                <p className="text-[15px] text-ink-2 leading-[1.6] italic">
                  &ldquo;Creíamos que nuestra analítica era fiable. SealMetrics nos mostró que nos estábamos perdiendo el 74% de las conversiones.&rdquo;
                </p>
                <p className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.08em] font-semibold mt-3">
                  Head of Digital Marketing · Retailer europeo de moda
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px]">
                <Link href="/es/how-it-works" className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors">Cómo funciona</Link>
                <Link href="/es/product" className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors">Producto completo</Link>
                <Link href="/es/data-loss-calculator" className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors">Calcula tu pérdida de datos</Link>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <DemoFormEs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
