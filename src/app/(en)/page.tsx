import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import {
  organizationSchema,
  softwareApplicationSchema,
  statisticClaimSchema,
  quotationSchema,
  speakableWebPageSchema,
  faqPageSchema,
} from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import {
  HeroV3,
  LogosStrip,
  FeaturedCase,
  ProblemSection,
  SolutionStepsPLG,
  Connectors,
  FourPillars,
  PricingPLG,
  FinalUrgencyV3,
} from "@/components/sections/v3/HomeV3";
import { ComparatorGA4 } from "@/components/sections/v3/HomeV3Part2";
import { FeatureLensAIV3 } from "@/components/sections/v3/ProductV3Sections";
import { FaqV3 } from "@/components/sections/v3/FaqV3";
import { BlindnessCalculator } from "@/components/homepage/BlindnessCalculator";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";

export const metadata: Metadata = {
  title: "SealMetrics — Consentless analytics for eCommerce",
  description:
    "Consentless analytics for eCommerce. Measure 100% of your traffic — no cookies, no models. Recover the sales GA4 can't see. EU-hosted in Dublin.",
  openGraph: {
    title: "SealMetrics — Consentless analytics for eCommerce",
    description:
      "Measure 100% of your traffic. No cookies. No models. Present board-ready numbers that match Shopify. EU-hosted in Dublin.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com",
    languages: getAlternates("/"),
  },
};

const DATE_PUBLISHED = "2024-01-15";
const DATE_MODIFIED = "2025-04-15";

const webPageAuthorSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://sealmetrics.com/",
  "name": "SealMetrics — Consentless analytics for eCommerce",
  "datePublished": DATE_PUBLISHED,
  "dateModified": DATE_MODIFIED,
  "author": {
    "@type": "Organization",
    "name": "SealMetrics",
    "url": "https://sealmetrics.com"
  }
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={webPageAuthorSchema} />
      <JsonLd data={speakableWebPageSchema({ url: "/", name: "SealMetrics — complete data for eCommerce" })} />
      <JsonLd data={faqPageSchema([
        { question: "Why pay for SealMetrics when GA4 is free?", answer: "GA4 is free because you are the product — your data trains Google's ad models. More importantly, GA4 relies on cookies most EU visitors reject, so you make budget decisions on a fraction of real data. The cost of SealMetrics is a rounding error compared to the cost of misallocated ad spend." },
        { question: "Why is neutrality a feature?", answer: "Meta reports with Meta's bias. Google reports with Google's bias. GA lives inside Google's ecosystem. SealMetrics has no ad inventory to sell and no channel to favour — so brand, agencies and finance can all sign the same number without feeling they're signing against a rival." },
        { question: "How accurate is cookieless tracking?", answer: "A Spanish hotel chain measured +30% more traffic vs GA and 15–20% more attributed sales — approaching their CRM reality. Palladium Hotel Group discovered 40% of their traffic had no attribution in their previous stack and improved Cost-per-Search on Display by +165% after switching. No sampling, no modelling — every data point observed." },
        { question: "Do I need to remove GA4?", answer: "No. Most clients run SealMetrics alongside GA4 for the first 30 days so you can compare side by side. After that, most teams use SealMetrics as their source of truth and keep GA4 for specific Google product integrations." },
        { question: "GDPR compliant without a consent banner?", answer: "Yes. Cookieless by architecture — no cookies, no personal data storage, no cross-site tracking. 100% EU-hosted in Dublin, Ireland. Complies with GDPR, ePrivacy and Schrems II without consent banners." },
        { question: "How long does implementation take?", answer: "Five minutes to install. First data from the first hour. Our team handles full onboarding and configures goals, funnels and reports in week one." },
      ], "/")} />
      <JsonLd data={statisticClaimSchema({
        text: "40% of inbound traffic had no source/medium attribution in the previous measurement stack.",
        source: "Palladium Hotel Group internal audit on traffic attribution",
        sourceAuthor: "Palladium Hotel Group",
        sourceDate: "2026-04-15",
        url: "/",
        numericValue: 40,
        unit: "PERCENT",
      })} />
      <JsonLd data={statisticClaimSchema({
        text: "35% of bookings recorded in GA4 could not be assigned to the channel that generated them.",
        source: "Palladium Hotel Group bookings attribution gap",
        sourceAuthor: "Palladium Hotel Group",
        sourceDate: "2026-04-15",
        url: "/",
        numericValue: 35,
        unit: "PERCENT",
      })} />
      <JsonLd data={statisticClaimSchema({
        text: "+165% improvement in Cost-per-Search on Display after applying a SealMetrics-based measurement model on DV360.",
        source: "Palladium Hotel Group DV360 efficiency improvement",
        sourceAuthor: "Palladium Hotel Group",
        sourceDate: "2026-04-15",
        url: "/",
        numericValue: 165,
        unit: "PERCENT",
      })} />
      <JsonLd data={quotationSchema({
        text: "The data SealMetrics delivers is agnostic, unbiased and neutral. There's no black box.",
        spokenBy: "Toni Andújar",
        spokenByRole: "Digital & Direct Sales Director, Palladium Hotel Group",
        url: "/",
      })} />
      <JsonLd data={quotationSchema({
        text: "It's no longer a tool that sits next to the process. It's the tool that gives us the real data — and the one we make decisions with.",
        spokenBy: "Head of eCommerce",
        spokenByRole: "Hotel chain · Spain",
        url: "/",
      })} />
      <JsonLd data={quotationSchema({
        text: "We've used SealMetrics as 'OK, we believe this data.' It's now our single source of truth.",
        spokenBy: "Founder & CEO",
        spokenByRole: "DTC coffee brand",
        url: "/",
      })} />
      <HeroV3 />
      <LogosStrip />
      <ProblemSection />
      <BlindnessCalculator />
      <ComparatorGA4 />
      <FeaturedCase />
      <SolutionStepsPLG />
      <FourPillars />
      <Connectors />
      <PricingPLG />
      <FaqV3 />
      <FeatureLensAIV3 />
      <FinalUrgencyV3 />
      <section className="bg-warm-white border-t border-warm-100 py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer>
            <p>
              SealMetrics is consentless analytics for European eCommerce — a cookieless web analytics platform that captures 100% of inbound traffic, attributes each conversion last-click at channel level, and is GDPR-compliant by architecture rather than by a consent layer added on top. Hosted exclusively in Dublin, Ireland on EU-owned infrastructure, it removes the Schrems II review GA4 + Consent Mode requires and the 40-60% consent-rejection gap that breaks aggregate channel ROAS in Europe.
            </p>
            <p>
              Customers use it to align brand, paid-media agencies, finance and internal analytics on a single number every party accepts. Dreamplace Hotels recovered +30% more traffic vs Google Analytics and closed a 15-20% sales attribution gap against their CRM. Palladium Hotel Group recovered 40% of previously-unattributed traffic and improved Display Cost-per-Search by +165% on DV360 after switching the measurement model. Growth starts at €499/month billed annually (5M human events/mo); Scale is €899/month billed annually (15M events); Enterprise is custom-quoted. Setup is one script tag, runs side-by-side with GA4 from day 1, no migration required.
            </p>
          </QuickAnswer>
          <p className="sr-only">Published by <span itemProp="author">SealMetrics</span>. Last updated: <time dateTime={DATE_MODIFIED}>{DATE_MODIFIED}</time>. First published: <time dateTime={DATE_PUBLISHED}>{DATE_PUBLISHED}</time>.</p>
        </div>
      </section>
      <StickyCtaBar locale="en" />
    </>
  );
}
