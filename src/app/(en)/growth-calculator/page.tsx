import type { Metadata } from "next";
import { Calculator } from "./Calculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, webApplicationSchema, howToSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Growth Calculator — SealMetrics",
  description: "How much revenue could you scale with complete data? Enter your numbers and see the growth potential your current analytics cannot show you.",
  alternates: { canonical: "https://sealmetrics.com/growth-calculator", languages: getAlternates("/growth-calculator") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Growth Calculator" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Growth Calculator", url: "/growth-calculator" }])} />
      <JsonLd data={webApplicationSchema({ name: "Growth Calculator", description: "Estimate the revenue growth potential of switching to complete analytics.", url: "/growth-calculator" })} />
      <JsonLd
        data={howToSchema({
          name: "How to calculate your analytics growth potential",
          description: "Estimate how much additional revenue you could unlock by switching from incomplete cookie-based analytics to 100% observed data.",
          url: "/growth-calculator",
          totalTime: "PT2M",
          steps: [
            { name: "Enter monthly sessions and revenue", text: "Input your current monthly session volume and eCommerce revenue as reported by GA4 or your primary analytics tool." },
            { name: "Select your paid-media investment", text: "Input monthly spend across Google Ads, Meta Ads and other paid channels so the calculator can model reallocation gains." },
            { name: "Choose your primary market", text: "EU, UK or US. The calculator applies market-specific consent rejection and ad-blocker rates." },
            { name: "Review the complete-data uplift", text: "See how much traffic you're currently missing and what CAC, ROAS and revenue look like once you measure the full funnel." },
            { name: "Read the annual growth estimate", text: "The calculator produces an annualised revenue growth estimate from reallocating paid spend on the complete data set." },
          ],
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-10">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
            Growth calculator
          </span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            How much growth is <em>hiding</em> in your unmeasured traffic?
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[58ch] leading-[1.55]" style={{ fontSize: "clamp(16px, 1.3vw, 19px)" }}>
            Your analytics capture a fraction of real traffic. Enter your numbers and see where complete data tells you to scale.
          </p>
        </div>
      </section>

      <section className="pb-28 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Calculator />
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={<>See where <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>to scale next.</em></>}
        titleEs={<>Ve dónde <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>escalar ahora.</em></>}
        ledeEn="30 minutes. We run your traffic through the growth projection — live, against your current analytics."
        ledeEs="30 min. Pasamos tu tráfico por la proyección de crecimiento — en directo, contra tu analítica actual."
      />
    </>
  );
}
