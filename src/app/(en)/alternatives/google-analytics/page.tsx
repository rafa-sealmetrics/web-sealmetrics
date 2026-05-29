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
      <LogosStrip />
      <section className="mx-auto max-w-3xl px-4 py-12 prose prose-slate">
        <h2>Why look for a Google Analytics alternative?</h2>
        <p>
          Google Analytics 4 remains the most widely deployed analytics platform, but it comes with significant trade-offs for
          European businesses: Consent Mode v2 modelling fills the gaps left by cookie refusals with statistical estimates rather
          than real sessions, data is processed on US-based infrastructure raising Schrems&nbsp;II compliance concerns, and
          sampling kicks in at scale—meaning the numbers you act on may not reflect what actually happened.
        </p>
        <h2>What makes SealMetrics a different category</h2>
        <p>
          SealMetrics is built around a cookieless, consent-agnostic data capture layer. Every hit is collected regardless of
          whether the visitor accepts, rejects, or ignores your consent banner—no modelling, no extrapolation. The result is a
          complete, unsampled dataset that reflects reality, not a statistical approximation of it.
        </p>
        <ul>
          <li><strong>EU-only infrastructure:</strong> All data is stored and processed within the European Union, satisfying
          GDPR Article 44 transfer restrictions and Schrems&nbsp;II requirements without contractual workarounds.</li>
          <li><strong>Zero sampling:</strong> Reports run against your full dataset at any traffic volume. No threshold triggers
          partial results.</li>
          <li><strong>Decision-grade attribution:</strong> Multi-touch attribution models are computed on complete data, so
          budget decisions reflect actual contribution—not modelled proxies.</li>
          <li><strong>MCP / AI-native interface:</strong> Query your analytics data in plain language through the Model Context
          Protocol, making insight retrieval accessible to every team member without SQL expertise.</li>
          <li><strong>You own your data:</strong> Export everything, at any time, in full resolution. No lock-in, no
          vendor-controlled retention windows.</li>
        </ul>
        <h2>Who should consider switching from Google Analytics?</h2>
        <p>
          SealMetrics is particularly well suited for e-commerce and lead-generation businesses operating in the EU where consent
          rejection rates exceed 30%, for enterprises that have received Data Protection Authority inquiries about GA transfers,
          and for analytics teams that have lost confidence in their conversion numbers after migrating to GA4.
        </p>
        <h2>Frequently asked questions</h2>
        <h3>Does SealMetrics require a cookie banner?</h3>
        <p>
          No. Because SealMetrics does not use cookies or persistent identifiers that fall under ePrivacy Directive scope, you
          do not need to gate data collection behind a consent banner. Your legal team should review your specific setup, but
          most EU deployments run fully without a CMP dependency.
        </p>
        <h3>Can I run SealMetrics alongside Google Analytics during migration?</h3>
        <p>
          Yes. SealMetrics runs as an independent snippet and does not interfere with GA4 or GTM. A parallel-run period of
          30–60 days is recommended so you can validate data parity before decommissioning GA.
        </p>
        <h3>How does pricing compare to Google Analytics?</h3>
        <p>
          Google Analytics 360 starts at roughly $150,000 per year. SealMetrics enterprise plans are priced on actual hit
          volume with no seat fees, making full-resolution data accessible at a fraction of the cost for most mid-market
          companies. The free GA4 tier collects and monetises your audience data as part of Google's advertising business;
          SealMetrics does not use your data for any purpose beyond delivering your analytics.
        </p>
      </section>
    </>
  );
}
