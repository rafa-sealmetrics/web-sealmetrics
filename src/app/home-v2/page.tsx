import { HeroV2 } from "@/components/sections/v2/HeroV2";
import { Logos } from "@/components/sections/Logos";
import { ProblemV2 } from "@/components/sections/v2/ProblemV2";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesV2 } from "@/components/sections/v2/FeaturesV2";
import { Comparison } from "@/components/sections/Comparison";
import { ImpactV2 } from "@/components/sections/v2/ImpactV2";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Compliance } from "@/components/sections/Compliance";
import { Pricing } from "@/components/sections/Pricing";
import { CtaFinalV2 } from "@/components/sections/v2/CtaFinalV2";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
} from "@/lib/schema";

export default function HomeV2() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />

      {/* ACT 1 — Connect */}
      <HeroV2 />
      <Logos colorful />

      {/* ACT 2 — Educate */}
      <ProblemV2 />
      <HowItWorks />

      {/* ACT 3 — Demonstrate */}
      <FeaturesV2 />
      <Comparison />

      {/* ACT 4 — Convince */}
      <ImpactV2 />
      <CaseStudy />
      <Testimonials />
      <Compliance />
      <Pricing />

      {/* Close */}
      <CtaFinalV2 />
    </>
  );
}
