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
import { AnnouncementBar, AnnouncementBarOffset } from "@/components/layout/AnnouncementBar";
import {
  HeroPower,
  PowerMatrix,
  RealTimePower,
  PropertiesPower,
  LensTriadSlab,
  EuStackBand,
} from "@/components/preview/HomePowerSections";

export const metadata: Metadata = {
  title: "Preview A — Power home proposal",
  description: "Internal design proposal. Not for indexing.",
  robots: { index: false, follow: false },
};

/* Variant A (recommended): category-of-one stack claim leads.
   Full home structure — everything the production home has,
   plus the power narrative (matrix, real time, properties, LENS). */
export default function HomePowerPreview() {
  return (
    <>
      <AnnouncementBarOffset />
      <AnnouncementBar />
      <HeroPower variant="a" />
      <LogosStrip />
      <ProblemSection />
      <PowerMatrix />
      <RealTimePower />
      <PropertiesPower />
      <LensTriadSlab />
      <EuStackBand />
      <FeaturedCase />
      <PricingPLG />
      <FaqV3 />
      <FinalUrgencyV3 />
      <StickyCtaBar locale="en" />
    </>
  );
}
