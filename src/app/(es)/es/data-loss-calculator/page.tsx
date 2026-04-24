import type { Metadata } from "next";
import { Calculator } from "../../../(en)/data-loss-calculator/Calculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, webApplicationSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Calculadora de pérdida de datos — SealMetrics",
  description: "Calcula cuánto ingreso es invisible para tu analítica actual. Banners de consentimiento + ad blockers + restricciones del navegador esconden la mayoría de tu tráfico.",
  alternates: {
    canonical: "https://sealmetrics.com/es/data-loss-calculator",
    languages: getAlternatesEs("/data-loss-calculator"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Calculadora de pérdida de datos" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Calculadora de pérdida de datos", url: "/es/data-loss-calculator" }])} />
      <JsonLd data={webApplicationSchema({ name: "Calculadora de pérdida de datos", description: "Calcula cuánto ingreso es invisible para tu analítica.", url: "/es/data-loss-calculator" })} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-10">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
            Calculadora de pérdida de datos
          </span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            ¿Cuánto ingreso es <em>invisible</em> para tu analítica?
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[58ch] leading-[1.55]" style={{ fontSize: "clamp(16px, 1.3vw, 19px)" }}>
            Cookies de consentimiento, ad blockers y restricciones de navegador esconden la mayoría de tu tráfico. Mete tus números — te mostramos exactamente qué pierde GA4 y cuánto te cuesta cada mes.
          </p>
        </div>
      </section>

      <section className="pb-28 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Calculator />
        </div>
      </section>

      <FinalCtaSharedV3
        locale="es"
        titleEn={<>See the gap on your actual traffic.</>}
        titleEs={<>Ve el gap sobre <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>tu tráfico real.</em></>}
        ledeEn="30 min live review."
        ledeEs="30 min. Pasamos tu web por SealMetrics y comparamos con tu analítica actual — en directo."
      />
    </>
  );
}
