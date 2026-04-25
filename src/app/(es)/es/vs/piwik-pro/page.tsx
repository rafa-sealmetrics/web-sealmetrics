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
  title: "SealMetrics vs Piwik PRO — Hosting UE más captura completa",
  description: "Piwik PRO está alojado en UE pero sigue con cookies. SealMetrics resuelve la arquitectura de raíz, no solo el hosting.",
  alternates: { canonical: "https://sealmetrics.com/es/vs/piwik-pro", languages: getAlternatesEs("/vs/piwik-pro") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Piwik PRO" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "vs Piwik PRO", url: "/es/vs/piwik-pro" }])} /><VsComparisonV3 data={getVsData("piwik-pro", "es")} />
      <RelatedPagesV3
        locale="es"
        eyebrow="Otras comparativas"
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
        { href: "/es/vs-ga4", title: "vs Google Analytics 4", desc: "El default gratis — y su punto ciego UE." },
        { href: "/es/vs/ga360", title: "vs Google Analytics 360", desc: "Datos enterprise sin factura de 150K$." },
        { href: "/es/vs/adobe-analytics", title: "vs Adobe Analytics", desc: "Potencia enterprise, cero overhead." }
      ]}
      />
      <LogosStripEs />
      
    </>
  );
}
