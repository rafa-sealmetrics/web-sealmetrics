import type { Metadata } from "next";
import { LogosStrip, FinalUrgencyV3 } from "@/components/sections/v3/HomeV3";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { AnnouncementBar, AnnouncementBarOffset } from "@/components/preview/AnnouncementBar";
import { HeroPower, RealTimePower, PropertiesPower } from "@/components/preview/HomePowerSections";
import {
  AiAskDemo,
  UnfairAdvantageGrid,
  ValuePropTabs,
  QuoteBlock,
  TeamGrid,
  SuccessStories,
  ResourcesGrid,
} from "@/components/preview/HomeAmplitudeSections";

export const metadata: Metadata = {
  title: "Preview C — Amplitude-structured home proposal",
  description: "Internal design proposal. Not for indexing.",
  robots: { index: false, follow: false },
};

/* Variant C: Amplitude's block sequence, SealMetrics content + design.
   hero → logos → AI demo → feature grid → tabbed value prop → quote →
   alternating feature rows → team grid → success stories → resources → CTA. */
export default function HomePowerPreviewC() {
  return (
    <>
      <AnnouncementBarOffset />
      <AnnouncementBar />
      <HeroPower variant="a" />
      <LogosStrip />
      <AiAskDemo />
      <UnfairAdvantageGrid />
      <ValuePropTabs />
      <QuoteBlock />
      <RealTimePower />
      <PropertiesPower />
      <TeamGrid />
      <SuccessStories />
      <ResourcesGrid />
      <FinalUrgencyV3 />
      <StickyCtaBar locale="en" />
    </>
  );
}
