import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Comparison } from "@/components/sections/Comparison";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Compliance } from "@/components/sections/Compliance";
import { Integrations } from "@/components/sections/Integrations";
import { Pricing } from "@/components/sections/Pricing";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />

      {/* ACT 1 — Connect */}
      <Hero />
      <Logos />

      {/* ACT 2 — Educate */}
      <Problem />
      <HowItWorks />

      {/* ACT 3 — Demonstrate */}
      <ProductShowcase />
      <Comparison />

      {/* ACT 4 — Convince */}
      <CaseStudy />
      <Testimonials />
      <Compliance />
      <Integrations />
      <Pricing />

      {/* Close */}
      <CtaFinal />
    </>
  );
}
