import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
} from "@/lib/schema";
import { HeroDark } from "@/components/sections/HeroDark";
import { Logos } from "@/components/sections/Logos";
import { Scenarios } from "@/components/sections/Scenarios";
import { JourneyComparison } from "@/components/sections/JourneyComparison";
import { FunnelBreakdown } from "@/components/sections/FunnelBreakdown";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorksCompact } from "@/components/sections/HowItWorksCompact";
import { PricingAnchor } from "@/components/sections/PricingAnchor";
import { FaqFocused } from "@/components/sections/FaqFocused";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata: Metadata = {
  title: "SealMetrics — Complete eCommerce Analytics, No Cookies",
  description:
    "Know exactly which channels drive your revenue. SealMetrics captures 100% of your traffic and conversions — without cookies or consent banners.",
  openGraph: {
    title: "SealMetrics — Complete eCommerce Analytics, No Cookies",
    description:
      "Know exactly which channels drive your revenue. Complete data on 100% of traffic so you scale what works — not what GA4 happens to report.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />
      <HeroDark />
      <Logos colorful />
      <Scenarios />
      <JourneyComparison />
      <FunnelBreakdown />
      <SocialProof />
      <HowItWorksCompact />
      <PricingAnchor />
      <FaqFocused />
      <CtaFinal />
    </>
  );
}
