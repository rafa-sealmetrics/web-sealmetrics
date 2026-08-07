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
  title: "Preview A — Power home proposal",
  description: "Internal design proposal A for the SealMetrics homepage. Not indexed, not linked publicly, kept only for design review.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Preview A — Power home proposal",
    description: "Internal design proposal A for the SealMetrics homepage. Not indexed, not linked publicly, kept only for design review.",
    url: "https://sealmetrics.com/preview/home-power/",
    siteName: "SealMetrics",
    locale: "en_US",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Preview A — Power home proposal",
    description: "Internal design proposal A for the SealMetrics homepage. Not indexed, not linked publicly, kept only for design review.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/preview/home-power/" },
};

/* Variant A (recommended): category-of-one stack claim leads.
   Full home structure — everything the production home has,
   plus the power narrative (matrix, real time, properties, LENS). */
export default function HomePowerPreview() {
  return (
    <>
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
