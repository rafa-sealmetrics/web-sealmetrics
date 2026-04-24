import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "Google Analytics Alternatives — SealMetrics for complete data",
  description: "Looking for a GA alternative that doesn't commoditize your data? SealMetrics is a different category: complete, EU-hosted, enterprise-grade.",
  alternates: { canonical: "https://sealmetrics.com/alternatives/google-analytics", languages: getAlternates("/alternatives/google-analytics") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Google Analytics alternatives" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Google Analytics alternatives", url: "/alternatives/google-analytics" }])} /><VsComparisonV3 data={getVsData("google-analytics", "en")} />
      <LogosStrip />
      
    </>
  );
}
