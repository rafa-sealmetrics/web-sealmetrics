import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "Alternativas a Google Analytics — SealMetrics para dato completo",
  description: "¿Buscando una alternativa a GA que no commoditice tus datos? SealMetrics es otra categoría: completo, UE-hosted, grado enterprise.",
  alternates: { canonical: "https://sealmetrics.com/es/alternatives/google-analytics", languages: getAlternatesEs("/alternatives/google-analytics") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Alternativas a Google Analytics" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Alternativas a Google Analytics", url: "/es/alternatives/google-analytics" }])} /><VsComparisonV3 data={getVsData("google-analytics", "es")} />
      <LogosStripEs />
      
    </>
  );
}
