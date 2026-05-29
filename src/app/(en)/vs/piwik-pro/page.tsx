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
  title: "SealMetrics vs Piwik PRO — EU hosting plus complete capture",
  description: "Piwik PRO is EU-hosted but still cookie-based. SealMetrics solves the root architecture, not just the hosting.",
  openGraph: {
    title: "SealMetrics vs Piwik PRO — EU hosting plus complete capture",
    description: "Piwik PRO is EU-hosted but still cookie-based. SealMetrics solves the root architecture, not just the hosting.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/vs/piwik-pro", languages: getAlternates("/vs/piwik-pro") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Piwik PRO" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "vs Piwik PRO", url: "/vs/piwik-pro" }])} />
      <JsonLd data={comparisonPageSchema({
        name: "SealMetrics vs Piwik PRO",
        description: "Side-by-side comparison: SealMetrics versus Piwik PRO on architecture (cookie-based vs cookieless), EU hosting, consent dependency and AI readiness.",
        url: "/vs/piwik-pro",
        competitor: { name: "Piwik PRO", url: "https://piwik.pro/" },
        datePublished: "2026-04-15",
        dateModified: "2026-05-29",
        author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez" },
        criteria: [
          "Cookie vs cookieless collection architecture",
          "Consent banner requirement",
          "EU traffic captured (with banner vs without)",
          "Data residency and Schrems II posture",
          "Pricing for enterprise eCommerce",
          "MCP / AI-native interface",
          "BigQuery / warehouse export",
        ],
      })} />
      <VsComparisonV3 data={getVsData("piwik-pro", "en")} dateModified="2026-05-29" />
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
