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
  title: "SealMetrics vs GA360 — Enterprise data without the $150K invoice",
  description: "GA360 costs $150K+/year and still loses 40-60% of EU traffic. SealMetrics delivers complete data at €499/mo.",
  alternates: { canonical: "https://sealmetrics.com/vs/ga360", languages: getAlternates("/vs/ga360") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs GA360" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "vs GA360", url: "/vs/ga360" }])} /><VsComparisonV3 data={getVsData("ga360", "en")} />
      <RelatedPagesV3
        locale="en"
        eyebrow="Other comparisons"
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
        { href: "/vs-ga4", title: "vs Google Analytics 4", desc: "The free default — and its EU blind spot." },
        { href: "/vs/adobe-analytics", title: "vs Adobe Analytics", desc: "Enterprise power, zero overhead." },
        { href: "/vs/piwik-pro", title: "vs Piwik PRO", desc: "EU hosting plus complete capture." }
      ]}
      />
      <LogosStrip />
      
    </>
  );
}
