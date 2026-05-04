import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "Google Analytics Alternatives — SealMetrics",
  description: "Looking for a GA alternative that doesn't commoditize your data? SealMetrics is a different category: complete, EU-hosted, enterprise-grade.",
  openGraph: {
    title: "Google Analytics Alternatives — SealMetrics",
    description: "Looking for a GA alternative that doesn't commoditize your data? SealMetrics is a different category: complete, EU-hosted, enterprise-grade.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/alternatives/google-analytics", languages: getAlternates("/alternatives/google-analytics") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Google Analytics alternatives" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Google Analytics alternatives", url: "/alternatives/google-analytics" }])} />
      <JsonLd data={comparisonPageSchema({ name: "Google Analytics alternatives — SealMetrics", description: "Enterprise alternative to Google Analytics for European companies that need complete data, EU residency and decision-grade attribution.", url: "/alternatives/google-analytics", competitor: { name: "Google Analytics", url: "https://marketingplatform.google.com/about/analytics/" }, datePublished: "2026-04-15", dateModified: "2026-05-04", author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez" } })} />
      <VsComparisonV3 data={getVsData("google-analytics", "en")} dateModified="2026-05-04" />
      <LogosStrip />
      
    </>
  );
}
