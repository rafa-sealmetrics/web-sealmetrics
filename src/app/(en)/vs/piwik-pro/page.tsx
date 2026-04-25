import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "SealMetrics vs Piwik PRO — EU hosting plus complete capture",
  description: "Piwik PRO is EU-hosted but still cookie-based. SealMetrics solves the root architecture, not just the hosting.",
  alternates: { canonical: "https://sealmetrics.com/vs/piwik-pro", languages: getAlternates("/vs/piwik-pro") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Piwik PRO" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "vs Piwik PRO", url: "/vs/piwik-pro" }])} /><VsComparisonV3 data={getVsData("piwik-pro", "en")} />
      <RelatedPagesV3
        locale="en"
        eyebrow="Other comparisons"
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
        { href: "/vs-ga4", title: "vs Google Analytics 4", desc: "The free default — and its EU blind spot." },
        { href: "/vs/ga360", title: "vs Google Analytics 360", desc: "Enterprise data without the $150K invoice." },
        { href: "/vs/adobe-analytics", title: "vs Adobe Analytics", desc: "Enterprise power, zero overhead." }
      ]}
      />
      <LogosStrip />
      
    </>
  );
}
