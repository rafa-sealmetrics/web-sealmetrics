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
  title: "SealMetrics vs Adobe Analytics — Potencia enterprise, cero overhead",
  description: "Adobe Analytics cuesta 100K$+ y requiere especialistas. SealMetrics da dato completo sin consultores.",
  alternates: { canonical: "https://sealmetrics.com/es/vs/adobe-analytics", languages: getAlternatesEs("/vs/adobe-analytics") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Adobe Analytics" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "vs Adobe Analytics", url: "/es/vs/adobe-analytics" }])} /><VsComparisonV3 data={getVsData("adobe-analytics", "es")} />
      <RelatedPagesV3
        locale="es"
        eyebrow="Otras comparativas"
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
        { href: "/es/vs-ga4", title: "vs Google Analytics 4", desc: "El default gratis — y su punto ciego UE." },
        { href: "/es/vs/ga360", title: "vs Google Analytics 360", desc: "Datos enterprise sin factura de 150K$." },
        { href: "/es/vs/piwik-pro", title: "vs Piwik PRO", desc: "Hosting UE más captura completa." }
      ]}
      />
      <LogosStripEs />
      
    </>
  );
}
