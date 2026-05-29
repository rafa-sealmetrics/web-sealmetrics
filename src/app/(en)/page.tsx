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

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700">
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">What is consentless analytics?</h2>
              <p>
                Consentless analytics means tracking visitor behaviour without setting cookies or storing personal data. Because no personal data is processed, EU privacy law does not require a consent banner. Every session — including those from visitors who would have rejected cookies — is counted, giving you a complete, unsampled view of your traffic and conversions.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">Why GA4 underreports in Europe</h2>
              <p>
                Google Analytics 4 relies on first-party cookies and, under GDPR, requires explicit consent before firing. Studies show 40–60% of European visitors decline or ignore consent banners. That means GA4 is blind to nearly half your audience. Budget decisions made on that partial data systematically over-invest in channels that happen to attract cookie-accepting users and under-invest in the rest.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">How channel attribution works without cookies</h2>
              <p>
                SealMetrics reads UTM parameters and HTTP referrer headers at the moment of each request — no cookie is needed to carry that information across sessions. Combined with server-side event collection, this produces last-click attribution at the channel and campaign level that is consistent, reproducible and auditable, unlike probabilistic models or Google's Consent Mode data-fill estimations.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">GDPR, ePrivacy and Schrems II compliance</h2>
              <p>
                Because SealMetrics does not set cookies and does not transfer personal data outside the EU, it falls outside the scope of the ePrivacy Directive's consent requirement and eliminates the Schrems II risk that comes with sending IP addresses and identifiers to US-based servers. Your legal team can verify compliance without a Data Transfer Impact Assessment.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">Integrations and data portability</h2>
              <p>
                SealMetrics connects to Google Ads, Meta Ads, Microsoft Ads, Shopify and major ESPs via native integrations. Raw event data is exportable to BigQuery or via REST API so your data warehouse team can join SealMetrics revenue data with CRM, inventory and finance tables without vendor lock-in.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">Implementation and onboarding</h2>
              <p>
                Installation is a single JavaScript snippet or a server-side tag in Google Tag Manager. The first events appear within minutes. SealMetrics engineers configure conversion goals, funnel steps and custom dimensions during a guided onboarding session in the first week. There is no need to remove GA4 — both tools run in parallel until your team is confident in the data.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StickyCtaBar locale="en" />
    </>
  );
}
