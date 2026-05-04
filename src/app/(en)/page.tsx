import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import {
  organizationSchema,
  softwareApplicationSchema,
  statisticClaimSchema,
  quotationSchema,
  speakableWebPageSchema,
} from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import {
  HeroV3,
  LogosStrip,
  LogosSecondary,
  ValueProp4Min,
  CompareSection,
  FeaturedCase,
} from "@/components/sections/v3/HomeV3";
import {
  IndustriesBuiltFor,
  ComparatorGA4,
  HowItWorksV3,
  CredentialsV3,
  PricingV3,
  FinalCtaV3,
} from "@/components/sections/v3/HomeV3Part2";
import { FaqV3 } from "@/components/sections/v3/FaqV3";

export const metadata: Metadata = {
  title: "SealMetrics — See the 50% of your traffic GA4 doesn't",
  description:
    "SealMetrics is the neutral source of truth brand, finance and agencies sign against — captured on 100% of your visitors, not a sampled estimate.",
  openGraph: {
    title: "SealMetrics — See the 50% of your traffic GA4 doesn't",
    description:
      "The neutral source of truth brand, finance and agencies all accept. Cookieless, 100% captured, EU-hosted in Dublin.",
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
      <section className="bg-warm-white border-t border-warm-100 py-2">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer>
            <p>
              SealMetrics is the neutral source of truth for European eCommerce — a cookieless web analytics platform that captures 100% of inbound traffic, attributes each conversion last-click at channel level, and is GDPR-compliant by architecture rather than by a consent layer added on top. Hosted exclusively in Dublin, Ireland on EU-owned infrastructure, it removes the Schrems II review GA4 + Consent Mode requires and the 40-60% consent-rejection gap that breaks aggregate channel ROAS in Europe.
            </p>
            <p>
              Customers use it to align brand, paid-media agencies, finance and internal analytics on a single number every party accepts. Palladium Hotel Group recovered 40% of previously-unattributed traffic and improved Display Cost-per-Search by +165% on DV360 after switching the measurement model. Pricing starts at €499/month annually; setup is one script tag, runs side-by-side with GA4 from day 1, no migration required.
            </p>
          </QuickAnswer>
        </div>
      </section>
      <LogosStrip />
      <ValueProp4Min />
      <CompareSection />
      <FeaturedCase />
      <IndustriesBuiltFor />
      <ComparatorGA4 />
      <HowItWorksV3 />
      <LogosSecondary />
      <CredentialsV3 />
      <PricingV3 />
      <FaqV3 />
      <FinalCtaV3 />
    </>
  );
}
