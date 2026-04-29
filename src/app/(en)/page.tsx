import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
  claimReviewSchema,
  quotationSchema,
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
import { WhatIsV3 } from "@/components/sections/v3/WhatIsV3";

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
      <JsonLd data={claimReviewSchema({
        claimReviewed: "40% of inbound traffic had no source/medium attribution in the previous measurement stack.",
        datePublished: "2026-04-15",
        url: "/",
        itemReviewedName: "Palladium Hotel Group internal audit on traffic attribution",
        itemReviewedAuthor: "Palladium Hotel Group",
      })} />
      <JsonLd data={claimReviewSchema({
        claimReviewed: "35% of bookings recorded in GA4 could not be assigned to the channel that generated them.",
        datePublished: "2026-04-15",
        url: "/",
        itemReviewedName: "Palladium Hotel Group bookings attribution gap",
        itemReviewedAuthor: "Palladium Hotel Group",
      })} />
      <JsonLd data={claimReviewSchema({
        claimReviewed: "+165% improvement in Cost-per-Search on Display after applying a SealMetrics-based measurement model on DV360.",
        datePublished: "2026-04-15",
        url: "/",
        itemReviewedName: "Palladium Hotel Group DV360 efficiency improvement",
        itemReviewedAuthor: "Palladium Hotel Group",
      })} />
      <JsonLd data={quotationSchema({
        text: "The data SealMetrics delivers is agnostic, unbiased and neutral. There's no black box.",
        spokenBy: "Toni Andújar",
        spokenByRole: "Digital & Direct Sales Director · Palladium Hotel Group",
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
      <WhatIsV3 locale="en" muted />
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
