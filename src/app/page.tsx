import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
} from "@/lib/schema";
import { DiagnosticBanner } from "@/components/homepage/DiagnosticBanner";
import { Hero } from "@/components/sections/Hero";
import { InlineQuiz } from "@/components/homepage/InlineQuiz";
import { Logos } from "@/components/sections/Logos";
import { Problem } from "@/components/sections/Problem";
import { CalculatorEmbed } from "@/components/sections/CalculatorEmbed";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Comparison } from "@/components/sections/Comparison";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Compliance } from "@/components/sections/Compliance";
import { Integrations } from "@/components/sections/Integrations";
import { Faq } from "@/components/sections/Faq";
import { Pricing } from "@/components/sections/Pricing";
import { FounderNote } from "@/components/sections/FounderNote";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata: Metadata = {
  title: "SealMetrics — See Every Growth Lever in Your eCommerce",
  description:
    "Your eCommerce is growing. With complete data on 100% of traffic, you see exactly which channels to scale — without cookies or consent banners.",
  openGraph: {
    title: "SealMetrics — See Every Growth Lever in Your eCommerce",
    description:
      "See every growth lever in your eCommerce. Complete data on 100% of traffic so you scale what works — not what GA4 happens to report.",
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
      <DiagnosticBanner />
      <Hero />
      <InlineQuiz />
      <Logos colorful />
      <Problem />
      <CalculatorEmbed />
      <HowItWorks />
      <ProductShowcase />
      <Comparison />
      <CaseStudy />
      <Testimonials />
      <Compliance />
      <Integrations />
      <Faq />
      <Pricing />
      <FounderNote />
      <CtaFinal />
    </>
  );
}
