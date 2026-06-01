import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import {
  VsGA4HeroV3,
  VsGA4GapStatsV3,
  DashboardPatternsV3,
  VsGA4TableV3,
  RunBothV3,
} from "@/components/sections/v3/VsGA4V3Sections";
import { FaqAccordionV3 } from "@/components/sections/v3/FaqAccordionV3";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";
import { ComparisonByline } from "@/components/sections/v3/ComparisonByline";
import { ComparisonMethodology } from "@/components/sections/v3/ComparisonMethodology";
import { quotationSchema } from "@/lib/schema";
import Link from "next/link";

const VS_GA4_DATE_MODIFIED = "2026-05-04";

export const metadata: Metadata = {
  title: "SealMetrics vs Google Analytics 4 — Complete data, no spin",
  description:
    "Honest comparison. GA4 loses 40–60% of EU traffic to consent and ad blockers. SealMetrics captures 100%. Run both alongside for 30 days.",
  openGraph: {
    title: "SealMetrics vs Google Analytics 4 — Complete data, no spin",
    description: "Feature-by-feature comparison. Honest.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/vs-ga4",
    languages: getAlternates("/vs-ga4"),
  },
};

const faqs = [
  { q: "Do I have to replace GA4?", a: "No. Most customers run SealMetrics alongside GA4 — in fact, we recommend it for your first 30 days so you can compare side by side with your own CRM numbers." },
  { q: "Will SealMetrics connect to Google Ads?", a: "Yes, via BigQuery export and API. For native Google Ads conversion import, you can keep GA4 running alongside — SealMetrics becomes your source of truth for decisions, GA4 becomes your Google Ads conduit." },
  { q: "Is SealMetrics really consent-free?", a: "Yes. No cookies, no localStorage, no fingerprinting. First-party event counting on the server side, aggregated into channel totals without any personal identifier. This means no consent banner required under GDPR or ePrivacy." },
  { q: "How much does migration cost?", a: "Nothing. There's no migration. Add one script tag to your site and run both tools in parallel. Most teams never fully remove GA4 — they just stop making decisions on it." },
  { q: "How accurate is the 40–60% consent rejection figure?", a: "It's a cross-industry average for EU traffic with a standard consent banner. Your exact rejection rate depends on your sector, device mix and banner design. The gap is smaller in B2B, larger in B2C consumer brands." },
  { q: "Can I use SealMetrics data in my BigQuery warehouse?", a: "Yes. Full-resolution export to BigQuery is included from the Growth plan up — no ETL, no sampling. Your warehouse gets every event, same as your dashboard." },
  { q: "What about GA4's free tier? Isn't the price a barrier?", a: "GA4 is free because you are the product — your data trains Google's ad models. SealMetrics starts at €499/mo annual. For a team spending €20K+/month in paid media, that's a rounding error compared to the cost of misallocated ad spend on incomplete data." },
];

export default function VsGA4Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Google Analytics 4" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "vs Google Analytics 4", url: "/vs-ga4" }])} />
      <JsonLd data={comparisonPageSchema({ name: "SealMetrics vs Google Analytics 4 (GA4)", description: "Honest side-by-side: SealMetrics versus GA4 on EU data completeness (40-60% gap), consent dependency, attribution, AI readiness and decision-grade reliability.", url: "/vs-ga4", competitor: { name: "Google Analytics 4", url: "https://marketingplatform.google.com/about/analytics/" }, datePublished: "2026-04-15", dateModified: VS_GA4_DATE_MODIFIED, author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez" }, criteria: ["EU traffic captured (with consent banner vs without)", "Consent banner dependency", "Cookie-based vs cookieless architecture", "Data sampling thresholds in standard reports", "Last-click attribution on observed events", "Data residency and Schrems II posture", "Pricing for enterprise eCommerce", "MCP / AI-native interface", "Time to first decision-ready report"] })} />
      <JsonLd data={quotationSchema({
        text: "The data SealMetrics delivers is agnostic, unbiased and neutral. There's no black box.",
        spokenBy: "Toni Andújar",
        spokenByRole: "Digital & Direct Sales Director, Palladium Hotel Group",
        url: "/vs-ga4",
      })} />

      <VsGA4HeroV3 locale="en" />
      <div className="-mt-12 mb-2 max-w-[1200px] mx-auto px-5 sm:px-8">
        <ComparisonByline dateModified={VS_GA4_DATE_MODIFIED} locale="en" />
      </div>
      <TldrBlock
        answer={
          <>GA4 is Google&rsquo;s free analytics product, hosted in the United States, that requires a cookie consent banner across the EU and uses statistical modelling for unconsented traffic. SealMetrics is an EU-hosted cookieless analytics platform that captures 100% of inbound traffic without a consent banner and attributes every conversion last-click on observed events. The substantive difference is data completeness: GA4 typically reports <strong>13–40% of real EU traffic</strong> after consent rejection (40–60%), ad blockers (~25%) and Safari&rsquo;s Intelligent Tracking Prevention; SealMetrics captures the full <strong>100%</strong> on aggregate. Most teams run both for 30 days side-by-side, compare against their CRM, then keep GA4 as a Google Ads conversion conduit while making revenue and budget decisions on SealMetrics. Pricing starts at €499/month annually.</>
        }
        bullets={[
          <>GA4: consent-gated, sampled, US-hosted, Google-owned — best for Google Ads conduit.</>,
          <>SealMetrics: consent-free, full-resolution, EU-hosted in Dublin — best for revenue decisions.</>,
          <>No migration required — drop the pixel alongside GA4 and compare your own numbers.</>,
        ]}
      />
      <LogosStrip />
      <VsGA4GapStatsV3 locale="en" />
      <DashboardPatternsV3 locale="en" />
      <VsGA4TableV3 locale="en" />
      <RunBothV3 locale="en" />
      <FaqAccordionV3
        locale="en"
        items={faqs}
        titleEn={<>The <em>objections</em>, answered.</>}
        ledeEn="What CMOs and CTOs actually ask before replacing (or complementing) GA4."
      />
      {/* Migration callout — Palladium Hotel Group switched from GA-stack to SealMetrics */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[860px] mx-auto px-5 sm:px-8">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand font-semibold">
            Switched from a Google-Analytics stack
          </span>
          <h2 className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.02em] text-ink mt-3 mb-6 leading-[1.15]">
            How Palladium Hotel Group recovered <em className="italic-accent">40% of unattributed traffic</em>.
          </h2>
          <blockquote
            className="border-l-[3px] pl-6 py-1 italic"
            style={{ borderColor: "#2E5C8A", color: "#0E0E0C" }}
          >
            <p className="text-[20px] leading-[1.45] tracking-[-0.01em] font-medium">
              &ldquo;The data SealMetrics delivers is agnostic, unbiased and neutral. There&rsquo;s no black box.&rdquo;
            </p>
            <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
              Toni Andújar · Digital &amp; Direct Sales Director · Palladium Hotel Group
            </cite>
          </blockquote>
          <p className="mt-6 text-[15.5px] leading-[1.65] text-ink-2">
            Palladium ran SealMetrics alongside their existing GA-tier stack. The audit
            surfaced 40% of inbound traffic with no source/medium attribution, 35% of
            bookings unassigned to a channel in GA4, and a +165% Cost-per-Search
            improvement on Display once the SealMetrics measurement model drove DV360
            decisions. They kept GA4 as the Google Ads conduit and made revenue
            decisions on SealMetrics.
          </p>
          <Link
            href="/case-studies/palladium-hotel-group"
            className="inline-flex items-center gap-2 mt-6 text-ink font-semibold no-underline border-b border-warm-200 pb-px hover:border-ink"
          >
            Read the full Palladium case study →
          </Link>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={<>Run both for 30 days. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Then decide.</em></>}
        titleEs={<>Corre los dos 30 días. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Y entonces decide.</em></>}
        ledeEn="Install SealMetrics alongside GA4. Compare with your own CRM. If the gap isn't real, you owe us nothing."
        ledeEs="Instala SealMetrics junto a GA4. Compara con tu propio CRM. Si el gap no es real, no nos debes nada."
      />

      <ComparisonMethodology
        locale="en"
        competitor="Google Analytics 4"
        dateModified={VS_GA4_DATE_MODIFIED}
      />
    </>
  );
}
