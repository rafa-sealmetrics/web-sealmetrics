import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "Alternativas a Google Analytics — SealMetrics",
  description: "¿Buscando una alternativa a GA que no commoditice tus datos? SealMetrics es otra categoría: completo, UE-hosted, grado enterprise.",
  openGraph: {
    title: "Alternativas a Google Analytics — SealMetrics",
    description: "¿Buscando una alternativa a GA que no commoditice tus datos? SealMetrics es otra categoría: completo, UE-hosted, grado enterprise.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/es/alternatives/google-analytics", languages: getAlternatesEs("/alternatives/google-analytics") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Alternativas a Google Analytics" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Alternativas a Google Analytics", url: "/es/alternatives/google-analytics" }])} />
      <JsonLd data={comparisonPageSchema({ name: "Alternativas a Google Analytics — SealMetrics", description: "Alternativa enterprise a Google Analytics para empresas europeas que necesitan datos completos y residencia UE.", url: "/es/alternatives/google-analytics", competitor: { name: "Google Analytics", url: "https://marketingplatform.google.com/about/analytics/" }, datePublished: "2026-04-15", dateModified: "2026-05-04", author: { name: "Rafa Jiménez", url: "/es/authors/rafa-jimenez" } })} /><VsComparisonV3 data={getVsData("google-analytics", "es")} dateModified="2026-05-04" />
      <LogosStripEs />
      
    </>
  );
}
