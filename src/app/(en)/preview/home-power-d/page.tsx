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

export const metadata: Metadata = {
  title: "Preview D — Setup, real time & LENS home proposal",
  description: "Internal design proposal. Not for indexing.",
  robots: { index: false, follow: false },
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
