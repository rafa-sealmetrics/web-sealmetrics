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
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Sealmetrics vs Piwik PRO — EU hosting plus complete capture",
  description: "Piwik PRO is EU-hosted but still cookie-based. Sealmetrics solves the root architecture, not just the hosting.",
  openGraph: {
    title: "Sealmetrics vs Piwik PRO — EU hosting plus complete capture",
    description: "Piwik PRO is EU-hosted but still cookie-based. Sealmetrics solves the root architecture, not just the hosting.",
    type: "website",
    images: [ogImage("/vs/piwik-pro/")],
    url: "https://sealmetrics.com/vs/piwik-pro/",
    siteName: "Sealmetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Sealmetrics vs Piwik PRO — EU hosting plus complete capture",
    description: "Piwik PRO is EU-hosted but still cookie-based. Sealmetrics solves the root architecture, not just the hosting.",
    images: [ogImage("/vs/piwik-pro/")],
  },
  alternates: { canonical: "https://sealmetrics.com/vs/piwik-pro/", languages: getAlternates("/vs/piwik-pro") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Piwik PRO" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "vs Piwik PRO", url: "/vs/piwik-pro" }])} />
      <JsonLd data={comparisonPageSchema({
        name: "Sealmetrics vs Piwik PRO",
        description: "Side-by-side comparison: Sealmetrics versus Piwik PRO on architecture (cookie-based vs cookieless), EU hosting, consent dependency and AI readiness.",
        url: "/vs/piwik-pro",
        competitor: { name: "Piwik PRO", url: "https://piwik.pro/" },
        datePublished: "2026-04-15",
        dateModified: "2026-08-27",
        author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez" },
        criteria: [
          "Cookie vs cookieless collection architecture",
          "Consent banner requirement",
          "EU traffic captured (with banner vs without)",
          "Data residency and Schrems II posture",
          "Pricing for enterprise eCommerce",
          "What an AI agent can read (full dataset vs post-consent subset)",
          "BigQuery / warehouse export",
        ],
      })} />
      <VsComparisonV3 data={getVsData("piwik-pro", "en")} dateModified="2026-08-27" />
      <RelatedPagesV3
        locale="en"
        eyebrow="Other comparisons"
        titleEn="See every Sealmetrics comparison"
        titleEs="Ver cada comparativa de Sealmetrics"
        pages={[
        { href: "/vs-ga4", title: "vs Google Analytics 4", desc: "The free default — and its EU blind spot." },
        { href: "/vs/ga360", title: "vs Google Analytics 360", desc: "Enterprise data without the six-figure invoice." },
        { href: "/vs/adobe-analytics", title: "vs Adobe Analytics", desc: "Enterprise power, zero overhead." }
      ]}
      />
      <LogosStrip />
      <section className="bg-warm-white border-t border-warm-100 py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer>
            <p>
              Sealmetrics vs Piwik PRO: Piwik PRO is an EU-based enterprise analytics platform with strong privacy governance, but it is still cookie-based by default — so it depends on a consent banner and loses the traffic that rejects it. Sealmetrics is cookieless by design: it captures 100% of inbound traffic without a consent banner and attributes each conversion last-click on observed events, EU-hosted in Dublin, from &euro;499/month billed annually.
            </p>
            <p>
              Both are GDPR-focused and EU-hosted, so the real decision is measurement completeness. In consent mode, Piwik PRO measures only the consented share — typically 40&ndash;60% of EU traffic — while Sealmetrics measures the full 100% because it stores zero personal data and needs no consent. For teams that already chose Piwik PRO for compliance, Sealmetrics closes the remaining data-loss gap without adding cookie-banner dependency.
            </p>
          </QuickAnswer>
        </div>
      </section>
      
    </>
  );
}
