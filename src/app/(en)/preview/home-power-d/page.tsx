import type { Metadata } from "next";
import { LogosStrip, PricingPLG, FinalUrgencyV3 } from "@/components/sections/v3/HomeV3";
import { AgenticSetupSteps } from "@/components/sections/v3/AgenticPlanV3";
import { McpInstaller } from "@/components/sections/v3/McpInstaller";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import {
  HeroD,
  ConsentlessAnalytics,
  OneMinuteLede,
  PromoDaysRealTime,
  GrowthRiskCost,
  QuoteBlock,
} from "@/components/sections/v3/HomeDSections";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Preview D — Setup, real time & LENS home proposal",
  description: "Internal design proposal D for the SealMetrics homepage. Not indexed, not linked publicly, kept only for design review.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Preview D — Power home proposal",
    description: "Internal design proposal D for the SealMetrics homepage. Not indexed, not linked publicly, kept only for design review.",
    url: "https://sealmetrics.com/preview/home-power-d/",
    siteName: "SealMetrics",
    locale: "en_US",
    type: "website",
    images: [ogImage("/preview/home-power-d/")],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Preview D — Power home proposal",
    description: "Internal design proposal D for the SealMetrics homepage. Not indexed, not linked publicly, kept only for design review.",
    images: [ogImage("/preview/home-power-d/")],
  },
  alternates: { canonical: "https://sealmetrics.com/preview/home-power-d/" },
};

/* Variant D: three-message home.
   1. ~1-min setup (AgenticSetupSteps + McpInstaller, the #agentic-setup section)
   2. Real-time Promo Days — decide during, not the day after
   3. LENS AI — unblock growth, mitigate risk, reduce cost */
export default function HomePowerPreviewD() {
  return (
    <>
      <HeroD />
      <ConsentlessAnalytics />
      <LogosStrip />
      <OneMinuteLede />
      <AgenticSetupSteps />
      <McpInstaller />
      <PromoDaysRealTime />
      <GrowthRiskCost />
      <QuoteBlock />
      <PricingPLG />
      <FinalUrgencyV3 />
      <StickyCtaBar locale="en" />
    </>
  );
}
