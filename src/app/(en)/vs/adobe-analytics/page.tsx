import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "SealMetrics vs Adobe Analytics — Enterprise alternative",
  description: "Adobe Analytics costs $100K+ and requires specialists. SealMetrics delivers complete data without consultants.",
  openGraph: {
    title: "SealMetrics vs Adobe Analytics — Enterprise alternative",
    description: "Adobe Analytics costs $100K+ and requires specialists. SealMetrics delivers complete data without consultants.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/vs/adobe-analytics", languages: getAlternates("/vs/adobe-analytics") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Adobe Analytics" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "vs Adobe Analytics", url: "/vs/adobe-analytics" }])} />
      <JsonLd data={comparisonPageSchema({ name: "SealMetrics vs Adobe Analytics", description: "Side-by-side comparison: SealMetrics enterprise analytics versus Adobe Analytics on data completeness, EU compliance, pricing and implementation time.", url: "/vs/adobe-analytics", competitor: { name: "Adobe Analytics", url: "https://business.adobe.com/products/analytics/adobe-analytics.html" } })} />
      <VsComparisonV3 data={getVsData("adobe-analytics", "en")} />
      <RelatedPagesV3
        locale="en"
        eyebrow="Other comparisons"
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
        { href: "/vs-ga4", title: "vs Google Analytics 4", desc: "The free default — and its EU blind spot." },
        { href: "/vs/ga360", title: "vs Google Analytics 360", desc: "Enterprise data without the $150K invoice." },
        { href: "/vs/piwik-pro", title: "vs Piwik PRO", desc: "EU hosting plus complete capture." }
      ]}
      />
      <LogosStrip />
      
    </>
  );
}
