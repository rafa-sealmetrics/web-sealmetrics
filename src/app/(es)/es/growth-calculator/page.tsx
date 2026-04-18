import type { Metadata } from "next";
import { Calculator } from "@/app/(en)/growth-calculator/Calculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "Calculadora de Crecimiento — SealMetrics",
  description:
    "¿Cuánto revenue podrías escalar con datos completos? Introduce tus números y descubre el potencial de crecimiento que tu analítica no puede mostrarte.",
  openGraph: {
    title: "Calculadora de Crecimiento — SealMetrics",
    description:
      "¿Cuánto revenue podrías escalar con datos completos? Introduce tus números y descubre el potencial de crecimiento que tu analítica no puede mostrarte.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/growth-calculator",
    languages: getAlternatesEs("/growth-calculator"),
  },
};

export default function GrowthCalculatorPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Calculadora de Crecimiento" }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Calculadora de Crecimiento", url: "/es/growth-calculator" },
        ])}
      />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[660px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Calculadora de Crecimiento
            </span>
            <h1 className="headline-hero mb-6">
              ¿Cuánto crecimiento se esconde en tu tráfico no medido?</h1>
            <p className="text-[1.15rem] leading-[1.75] text-text-secondary">
              Tu analítica captura solo una fracción del tráfico real &mdash;
              descubre lo que los datos completos revelan sobre dónde escalar.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator — reuse the English calculator component (numbers are universal) */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Calculator />
        </div>
      </section>
    </>
  );
}
