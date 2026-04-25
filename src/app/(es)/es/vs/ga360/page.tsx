import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "SealMetrics vs GA360 — Datos enterprise sin la factura de 150K$",
  description: "GA360 cuesta 150K$+/año y sigue perdiendo 40-60% del tráfico UE. SealMetrics da dato completo desde 499€/mes.",
  alternates: { canonical: "https://sealmetrics.com/es/vs/ga360", languages: getAlternatesEs("/vs/ga360") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs GA360" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "vs GA360", url: "/es/vs/ga360" }])} /><VsComparisonV3 data={getVsData("ga360", "es")} />
      <RelatedPagesV3
        locale="es"
        eyebrow="Otras comparativas"
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
        { href: "/es/vs-ga4", title: "vs Google Analytics 4", desc: "El default gratis — y su punto ciego UE." },
        { href: "/es/vs/adobe-analytics", title: "vs Adobe Analytics", desc: "Potencia enterprise, cero overhead." },
        { href: "/es/vs/piwik-pro", title: "vs Piwik PRO", desc: "Hosting UE más captura completa." }
      ]}
      />
      <LogosStripEs />
      
    </>
  );
}
