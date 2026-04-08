import type { Metadata } from "next";
import { Calculator } from "./Calculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Growth Calculator — SealMetrics",
  description:
    "How much revenue could you scale with complete data? Enter your numbers and see the growth potential your analytics cannot show you.",
  openGraph: {
    title: "Growth Calculator — SealMetrics",
    description:
      "How much revenue could you scale with complete data? Enter your numbers and see the growth potential your analytics cannot show you.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/growth-calculator",
  },
};

export default function GrowthCalculatorPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Growth Calculator" }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Growth Calculator", url: "/growth-calculator" },
        ])}
      />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[660px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Growth Calculator
            </span>
            <h1 className="headline-hero mb-6">
              How much growth is hiding in your unmeasured traffic?
            </h1>
            <p className="text-[1.15rem] leading-[1.75] text-text-secondary">
              Your analytics capture a fraction of real traffic — see what
              complete data reveals about where to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Calculator />
        </div>
      </section>
    </>
  );
}
