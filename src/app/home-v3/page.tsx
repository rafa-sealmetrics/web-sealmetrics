import { HeroV3 } from "@/components/sections/v3/HeroV3";
import { TrustBarV3 } from "@/components/sections/v3/TrustBarV3";
import { ProblemV3 } from "@/components/sections/v3/ProblemV3";
import { CapabilitiesV3 } from "@/components/sections/v3/CapabilitiesV3";
import { Comparison } from "@/components/sections/Comparison";
import { CustomerOutcomesV3 } from "@/components/sections/v3/CustomerOutcomesV3";
import { Compliance } from "@/components/sections/Compliance";
import { Pricing } from "@/components/sections/Pricing";
import { CtaFinalV3 } from "@/components/sections/v3/CtaFinalV3";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  organizationSchema,
  softwareApplicationSchema,
} from "@/lib/schema";

export default function HomeV3() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />

      {/* ACT 1 — Connect */}
      <HeroV3 />
      <TrustBarV3 />

      {/* ACT 2 — Educate */}
      <ProblemV3 />

      {/* ACT 3 — Demonstrate */}
      <CapabilitiesV3 />
      <Comparison />

      {/* ACT 4 — Convince */}
      <CustomerOutcomesV3 />
      <Compliance />
      <Pricing />

      {/* Close */}
      <CtaFinalV3 />
    </>
  );
}
