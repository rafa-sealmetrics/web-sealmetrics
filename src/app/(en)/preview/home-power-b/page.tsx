import type { Metadata } from "next";
import {
  LogosStrip,
  ProblemSection,
  FeaturedCase,
  PricingPLG,
  FinalUrgencyV3,
} from "@/components/sections/v3/HomeV3";
import { FaqV3 } from "@/components/sections/v3/FaqV3";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import {
  HeroPower,
  PowerMatrix,
  RealTimePower,
  PropertiesPower,
  LensTriadSlab,
  EuStackBand,
} from "@/components/preview/HomePowerSections";

export const metadata: Metadata = {
  title: "Preview B — AI-led home proposal",
  description: "Internal design proposal. Not for indexing.",
  robots: { index: false, follow: false },
};

/* Variant B: LENS Private AI leads the hero and the AI slab opens
   the page; the stack proof and full home structure follow. */
export default function HomePowerPreviewB() {
  return (
    <>
      <HeroPower variant="b" />
      <LensTriadSlab />
      <LogosStrip />
      <ProblemSection />
      <PowerMatrix />
      <RealTimePower />
      <PropertiesPower />
      <EuStackBand />
      <FeaturedCase />
      <PricingPLG />
      <FaqV3 />
      <FinalUrgencyV3 />
      <StickyCtaBar locale="en" />
    </>
  );
}
