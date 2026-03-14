import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { Problem } from "@/components/sections/Problem";
import { RevenueAttribution } from "@/components/sections/RevenueAttribution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Comparison } from "@/components/sections/Comparison";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Compliance } from "@/components/sections/Compliance";
import { Pricing } from "@/components/sections/Pricing";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
} from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />

      {/* ACT 1 — Connect */}
      <Hero />
      <Logos />

      {/* ACT 2 — Educate */}
      <Problem />
      <RevenueAttribution />
      <HowItWorks />

      {/* ACT 3 — Demonstrate */}
      <ProductShowcase />
      <Comparison />

      {/* ACT 4 — Convince */}
      <CaseStudy />
      <Testimonials />
      <Compliance />
      <Pricing />

      {/* Close */}
      <CtaFinal />
    </>
  );
}
