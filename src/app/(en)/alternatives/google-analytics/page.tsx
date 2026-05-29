import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "Consentless Google Analytics Alternatives — SealMetrics",
  description: "Looking for a consentless GA alternative that doesn't commoditize your data? SealMetrics is a different category: complete, EU-hosted, enterprise-grade.",
  openGraph: {
    title: "Consentless Google Analytics Alternatives — SealMetrics",
    description: "Looking for a consentless GA alternative that doesn't commoditize your data? SealMetrics is a different category: complete, EU-hosted, enterprise-grade.",
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
      <JsonLd data={comparisonPageSchema({
        name: "Google Analytics alternatives — SealMetrics",
        description: "Enterprise alternative to Google Analytics for European companies that need complete data, EU residency and decision-grade attribution.",
        url: "/alternatives/google-analytics",
        competitor: { name: "Google Analytics", url: "https://marketingplatform.google.com/about/analytics/" },
        datePublished: "2026-04-15",
        dateModified: "2026-05-29",
        author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez" },
        criteria: [
          "Cookie-free data capture vs Consent Mode modelling",
          "EU consent-rejection traffic loss",
          "Data residency and Schrems II posture",
          "Sampling at scale",
          "BigQuery export full resolution",
          "MCP / AI-native interface",
          "Pricing and data ownership",
        ],
      })} />
      <VsComparisonV3 data={getVsData("google-analytics", "en")} dateModified="2026-05-29" />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Why choose a consentless Google Analytics alternative?</h2>
        <p>Google Analytics relies on consent banners and modelling to estimate traffic — meaning every user who rejects cookies becomes invisible. A consentless analytics approach captures every visit without relying on cookies or consent signals, giving you complete, unsampled data while remaining fully compliant with GDPR and ePrivacy regulations. SealMetrics is built consentless by design: no cookies, no consent mode, no data gaps.</p>
      </section>
      <LogosStrip />
      
    </>
  );
}
