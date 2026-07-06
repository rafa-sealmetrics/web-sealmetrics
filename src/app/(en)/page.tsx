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
import { LogosStrip, PricingPLG, Connectors, FinalUrgencyV3 } from "@/components/sections/v3/HomeV3";
import { InstallInSeconds } from "@/components/sections/v3/InstallInSeconds";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import {
  HeroD,
  ConsentlessAnalytics,
  PromoDaysRealTime,
  GrowthRiskCost,
  QuoteBlock,
} from "@/components/sections/v3/HomeDSections";

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

const softwareAppWithOffers = {
  ...softwareApplicationSchema(),
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Growth",
      price: "599",
      priceCurrency: "EUR",
      description: "€499/month billed annually",
      url: "https://sealmetrics.com/pricing",
    },
    {
      "@type": "Offer",
      name: "Scale",
      price: "1079",
      priceCurrency: "EUR",
      url: "https://sealmetrics.com/pricing",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "0",
      priceCurrency: "EUR",
      description: "Custom pricing",
      url: "https://sealmetrics.com/pricing",
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareAppWithOffers} />
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
        spokenBy: "Eduardo Martin",
        spokenByRole: "Analytics & Campaigns, Dreamplace Hotels",
        url: "/",
      })} />
      <HeroD />
      <ConsentlessAnalytics />
      <LogosStrip />
      <InstallInSeconds />
      <PromoDaysRealTime />
      <GrowthRiskCost />
      <QuoteBlock />
      <PricingPLG />
      <Connectors />
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
        </div>
      </section>
      <StickyCtaBar locale="en" />
    </>
  );
}
