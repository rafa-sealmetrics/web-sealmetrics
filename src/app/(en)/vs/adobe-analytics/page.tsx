import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
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
    images: [ogImage("/vs/adobe-analytics/")],
    url: "https://sealmetrics.com/vs/adobe-analytics/",
    siteName: "SealMetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "SealMetrics vs Adobe Analytics — Enterprise alternative",
    description: "Adobe Analytics costs $100K+ and requires specialists. SealMetrics delivers complete data without consultants.",
    images: [ogImage("/vs/adobe-analytics/")],
  },
  alternates: { canonical: "https://sealmetrics.com/vs/adobe-analytics/", languages: getAlternates("/vs/adobe-analytics") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Adobe Analytics" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "vs Adobe Analytics", url: "/vs/adobe-analytics" }])} />
      <JsonLd data={comparisonPageSchema({
        name: "SealMetrics vs Adobe Analytics",
        description: "Side-by-side comparison: SealMetrics enterprise analytics versus Adobe Analytics on data completeness, EU compliance, pricing and implementation time.",
        url: "/vs/adobe-analytics",
        competitor: { name: "Adobe Analytics", url: "https://business.adobe.com/products/analytics/adobe-analytics.html" },
        datePublished: "2026-04-15",
        dateModified: "2026-05-29",
        author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez" },
        criteria: [
          "Annual licence cost and implementation fees",
          "Time to first decision-ready report",
          "Required specialist headcount",
          "EU consent-rejection traffic loss",
          "Cookie-based AppMeasurement architecture",
          "MCP / AI-native interface",
          "BigQuery export inclusion",
        ],
      })} />
      <VsComparisonV3 data={getVsData("adobe-analytics", "en")} dateModified="2026-05-29" />
      <RelatedPagesV3
        locale="en"
        eyebrow="Other comparisons"
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
        { href: "/vs-ga4", title: "vs Google Analytics 4", desc: "The free default — and its EU blind spot." },
        { href: "/vs/ga360", title: "vs Google Analytics 360", desc: "Enterprise data without the $150K invoice." },
        { href: "/vs/piwik-pro", title: "vs Piwik PRO", desc: "EU hosting plus complete capture." },
        { href: "/alternatives/adobe-analytics", title: "Adobe Analytics alternatives", desc: "The wider field, before you renew." }
      ]}
      />
      <LogosStrip />
      <section className="bg-warm-white border-t border-warm-100 py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer>
            <p>
              SealMetrics vs Adobe Analytics: Adobe Analytics is an enterprise analytics suite priced from roughly $100,000/year on annual contracts, with a heavy implementation, US/hybrid hosting and a cookie consent banner across the EU. SealMetrics is an EU-hosted cookieless analytics platform that captures 100% of inbound traffic without consent dependency and attributes each conversion last-click on observed events — from &euro;499/month billed annually, no annual commit.
            </p>
            <p>
              For EU eCommerce the difference is completeness and compliance. Adobe still loses 40&ndash;60% of EU traffic to consent rejection and carries Schrems II overhead through US data flows, on top of months of implementation. SealMetrics installs with one pixel, runs side by side from day one, and its Dublin-only infrastructure with zero non-EU sub-processors removes the transfer review. Teams keep Adobe for deep custom analysis where they need it and use SealMetrics as the complete, board-ready revenue number.
            </p>
          </QuickAnswer>
        </div>
      </section>
      
    </>
  );
}
