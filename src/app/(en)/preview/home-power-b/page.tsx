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
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Preview B — AI-led home proposal",
  description: "Internal design proposal B for the Sealmetrics homepage. Not indexed, not linked publicly, kept only for design review.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Preview B — Power home proposal",
    description: "Internal design proposal B for the Sealmetrics homepage. Not indexed, not linked publicly, kept only for design review.",
    url: "https://sealmetrics.com/preview/home-power-b/",
    siteName: "Sealmetrics",
    locale: "en_US",
    type: "website",
    images: [ogImage("/preview/home-power-b/")],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Preview B — Power home proposal",
    description: "Internal design proposal B for the Sealmetrics homepage. Not indexed, not linked publicly, kept only for design review.",
    images: [ogImage("/preview/home-power-b/")],
  },
  alternates: { canonical: "https://sealmetrics.com/preview/home-power-b/" },
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
