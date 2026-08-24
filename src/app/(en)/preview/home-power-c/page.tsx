import type { Metadata } from "next";
import { LogosStrip, FinalUrgencyV3 } from "@/components/sections/v3/HomeV3";
import { StickyCtaBar } from "@/components/homepage/StickyCtaBar";
import { QuoteBlock } from "@/components/sections/v3/HomeDSections";
import { HeroPower, RealTimePower, PropertiesPower } from "@/components/preview/HomePowerSections";
import {
  AiAskDemo,
  UnfairAdvantageGrid,
  ValuePropTabs,
  TeamGrid,
  SuccessStories,
  ResourcesGrid,
} from "@/components/preview/HomeAmplitudeSections";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Preview C — Amplitude-structured home proposal",
  description: "Internal design proposal C for the Sealmetrics homepage. Not indexed, not linked publicly, kept only for design review.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Preview C — Power home proposal",
    description: "Internal design proposal C for the Sealmetrics homepage. Not indexed, not linked publicly, kept only for design review.",
    url: "https://sealmetrics.com/preview/home-power-c/",
    siteName: "Sealmetrics",
    locale: "en_US",
    type: "website",
    images: [ogImage("/preview/home-power-c/")],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Preview C — Power home proposal",
    description: "Internal design proposal C for the Sealmetrics homepage. Not indexed, not linked publicly, kept only for design review.",
    images: [ogImage("/preview/home-power-c/")],
  },
  alternates: { canonical: "https://sealmetrics.com/preview/home-power-c/" },
};

/* Variant C: Amplitude's block sequence, Sealmetrics content + design.
   hero → logos → AI demo → feature grid → tabbed value prop → quote →
   alternating feature rows → team grid → success stories → resources → CTA. */
export default function HomePowerPreviewC() {
  return (
    <>
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
