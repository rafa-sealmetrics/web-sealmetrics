import type { Metadata } from "next";
import { Calculator } from "./Calculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, webApplicationSchema, howToSchema } from "@/lib/schema";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Data Loss Calculator — SealMetrics",
  description:
    "Calculate how much revenue is invisible to your current analytics. Consent banners + ad blockers + browser restrictions hide the majority of your traffic.",
  openGraph: {
    title: "Data Loss Calculator — SealMetrics",
    description: "See the exact revenue your analytics is missing.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/data-loss-calculator" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Data Loss Calculator" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Data Loss Calculator", url: "/data-loss-calculator" }])} />
      <JsonLd data={webApplicationSchema({ name: "Data Loss Calculator", description: "Calculate how much revenue is invisible to your current analytics setup.", url: "/data-loss-calculator" })} />
      <JsonLd
        data={howToSchema({
          name: "How to calculate your analytics data loss",
          description: "Estimate how much revenue is invisible to GA4 and other cookie-based analytics tools because of consent rejection, ad blockers and browser restrictions.",
          url: "/data-loss-calculator",
          totalTime: "PT2M",
          steps: [
            { name: "Enter your monthly traffic", text: "Input the number of monthly sessions your site receives across all markets." },
            { name: "Enter your monthly revenue", text: "Input your monthly online revenue so we can translate traffic loss into invisible revenue." },
            { name: "Select your market", text: "Choose your primary market (EU, UK, US) so the calculator applies the correct consent rejection and ad-blocker rates." },
            { name: "Review the three loss layers", text: "See the data loss cascade: consent rejection (40–60% in EU), ad blockers (~25%) and browser restrictions like Safari ITP." },
            { name: "Read your invisible revenue figure", text: "The calculator shows monthly and annual invisible revenue — revenue driven by traffic your analytics never saw." },
          ],
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-10">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
            Data loss calculator
          </span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            How much revenue is <em>invisible</em> to your analytics?
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[58ch] leading-[1.55]" style={{ fontSize: "clamp(16px, 1.3vw, 19px)" }}>
            Cookie consent, ad blockers and browser restrictions hide the majority of your traffic. Enter your numbers — we show exactly what GA4 is missing, and what it costs you every month.
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
        titleEn={<>See the gap on <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>your actual traffic.</em></>}
        titleEs={<>Ve el gap sobre <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>tu tráfico real.</em></>}
        ledeEn="30 minutes. We run your own site through SealMetrics and compare with your current analytics — live."
        ledeEs="30 min. Pasamos tu web por SealMetrics y comparamos con tu analítica actual — en directo."
      />
    </>
  );
}
