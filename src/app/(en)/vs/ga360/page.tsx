import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { breadcrumbSchema, comparisonPageSchema, quotationSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "SealMetrics vs GA360 — Enterprise data for less",
  description: "GA360 costs $150K+/year and still loses 40-60% of EU traffic. SealMetrics delivers complete data at €499/mo.",
  openGraph: {
    title: "SealMetrics vs GA360 — Enterprise data for less",
    description: "GA360 costs $150K+/year and still loses 40-60% of EU traffic. SealMetrics delivers complete data at €499/mo.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/vs/ga360", languages: getAlternates("/vs/ga360") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs GA360" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "vs GA360", url: "/vs/ga360" }])} />
      <JsonLd data={comparisonPageSchema({ name: "SealMetrics vs Google Analytics 360", description: "Side-by-side comparison: SealMetrics enterprise analytics versus Google Analytics 360 (GA360) on data completeness, EU compliance, pricing and AI readiness.", url: "/vs/ga360", competitor: { name: "Google Analytics 360", url: "https://marketingplatform.google.com/about/analytics-360/" }, datePublished: "2026-04-15", dateModified: "2026-05-04", author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez" } })} />
      <section className="bg-warm-white border-t border-warm-100 pt-28 pb-2">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer>
            <p>
              Google Analytics 360 (GA360) is the enterprise tier of Google Analytics, priced from $150,000/year with annual contracts, hosted in the United States, and requiring a cookie consent banner across the EU. SealMetrics is an EU-hosted cookieless analytics platform that captures 100% of inbound traffic without consent dependency, attributes last-click on observed events, and starts at €499/month annually with no annual commit.
            </p>
            <p>
              The architectural differences matter for EU eCommerce: GA360 still loses 40-60% of EU traffic to consent rejection (Consent Mode v2 reconstructs the gap with statistical modelling, not measurement), and US hosting requires Schrems II SCCs with quarterly DPIA review. SealMetrics&rsquo; Dublin-only infrastructure and zero sub-processors outside the EU remove that compliance overhead entirely. Customers typically run both for 30 days, reconcile against their CRM, and migrate revenue decisions to SealMetrics while keeping GA360 as a Google Ads conduit.
            </p>
          </QuickAnswer>
        </div>
      </section>
      <VsComparisonV3 data={getVsData("ga360", "en")} dateModified="2026-05-04" />

      {/* Migration callout — Palladium Hotel Group case study (GA-stack switch) */}
      <JsonLd data={quotationSchema({
        text: "Today every player is happy. The data is neutral, there's no black box, and everyone has accepted these numbers as the reference.",
        spokenBy: "Toni Andújar",
        spokenByRole: "Digital & Direct Sales Director, Palladium Hotel Group",
        url: "/vs/ga360",
      })} />
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[860px] mx-auto px-5 sm:px-8">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand font-semibold">
            Switched from a Google-Analytics stack
          </span>
          <h2 className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.02em] text-ink mt-3 mb-6 leading-[1.15]">
            What replacing GA at the enterprise tier <em className="italic-accent">actually unlocks</em>.
          </h2>
          <blockquote
            className="border-l-[3px] pl-6 py-1 italic"
            style={{ borderColor: "#2E5C8A", color: "#0E0E0C" }}
          >
            <p className="text-[20px] leading-[1.45] tracking-[-0.01em] font-medium">
              &ldquo;Today every player is happy. The data is neutral, there&rsquo;s no black box, and everyone has accepted these numbers as the reference.&rdquo;
            </p>
            <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
              Toni Andújar · Digital &amp; Direct Sales Director · Palladium Hotel Group
            </cite>
          </blockquote>
          <p className="mt-6 text-[15.5px] leading-[1.65] text-ink-2">
            Palladium audited SealMetrics against their existing GA-tier stack and
            found 40% of inbound traffic with no source/medium attribution, 35% of
            bookings unassigned to a channel, and a +165% Cost-per-Search improvement
            on Display once SealMetrics drove the DV360 measurement model. They kept
            GA as a Google Ads conduit and moved revenue decisions to SealMetrics.
          </p>
          <Link
            href="/case-studies/palladium-hotel-group"
            className="inline-flex items-center gap-2 mt-6 text-ink font-semibold no-underline border-b border-warm-200 pb-px hover:border-ink"
          >
            Read the full Palladium case study →
          </Link>
        </div>
      </section>

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
