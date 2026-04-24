import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, faqSchema, howToSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { WhatIsV3 } from "@/components/sections/v3/WhatIsV3";
import {
  HowItWorksHeroV3,
  ArchitectureV3,
  ImplementationStepsV3,
  HowItWorksFaqV3,
} from "@/components/sections/v3/HowItWorksV3Sections";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "How SealMetrics Works — First-party, Cookieless, EU-hosted",
  description:
    "First-party 846-byte pixel. Anonymous server-side event counting. Dublin-hosted storage. GDPR-compliant by architecture, not by a compliance layer.",
  openGraph: {
    title: "How SealMetrics Works — First-party, Cookieless, EU-hosted",
    description:
      "Three layers. One pipeline. How SealMetrics counts 100% of your traffic anonymously, without cookies or user tracking.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/how-it-works",
    languages: getAlternates("/how-it-works"),
  },
};

const faqs = [
  { question: "How does cookieless tracking work without identifying users?", answer: "SealMetrics uses first-party cookieless collection to capture behavioral data without storing anything on the visitor's device." },
  { question: "Is SealMetrics affected by ad blockers?", answer: "No. SealMetrics operates as first-party infrastructure on your own domain." },
  { question: "How long does setup take?", answer: "5 minutes. Add one JavaScript tag to your website." },
  { question: "Where is data processed and stored?", answer: "Dublin, Ireland — exclusively on EU servers. No transfers outside the EU." },
];

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "How it works" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "How it works", url: "/how-it-works" }])} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={howToSchema({
        name: "Install SealMetrics in one week",
        description: "From install to decision-ready analytics in 7 days. No cookie banner integration, no migration from GA4.",
        url: "/how-it-works",
        totalTime: "P7D",
        steps: [
          { name: "Install the pixel", text: "Add one 846-byte script tag to your site. 15 minutes with your dev. Works with any CMS or framework. No cookie banner integration." },
          { name: "Real data flows", text: "Full traffic visibility from the first hour. Every pageview, every source, every conversion counted — 100% observed on Day 1, no identifiers required." },
          { name: "GA4 side-by-side", text: "On Day 3, compare SealMetrics against your existing GA4. See the gap with your own numbers." },
          { name: "Tag microconversions", text: "On Day 5, tag the 5–10 microconversions that matter for revenue attribution." },
          { name: "Decision-ready", text: "By Week 1, funnels, channels and attribution are all calibrated. Start making reallocation decisions with defensible data." },
        ],
      })} />

      <HowItWorksHeroV3 locale="en" />
      <TldrBlock
        answer={
          <>SealMetrics works in three layers: a <strong>846-byte first-party pixel</strong> logs each pageview directly from your domain (no third-party cookies, no ad-blocker impact); a <strong>server-side pipeline in Dublin</strong> counts events anonymously and attributes each conversion last-click at channel level; a <strong>reporting + API layer</strong> exposes aggregate totals to dashboards, warehouses and AI agents. Install takes 15 minutes, full calibration one week.</>
        }
        bullets={[
          <>One JavaScript tag — works on any CMS, SPA or headless setup.</>,
          <>Aggregate, anonymous counts — no user identifiers, no per-visitor journeys, no session stitching.</>,
          <>GDPR-compliant by architecture (no cookies, no PII, EU-only processing).</>,
          <>Side-by-side with GA4 from day 1 — no migration required.</>,
        ]}
      />
      <LogosStrip />
      <WhatIsV3 locale="en" muted />
      <ArchitectureV3 locale="en" />
      <ImplementationStepsV3 locale="en" />
      <HowItWorksFaqV3 locale="en" />
      <FinalCtaSharedV3
        locale="en"
        titleEn={<>Ready to see your <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>complete data?</em></>}
        titleEs={<>¿Listo para ver tus <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>datos completos?</em></>}
        ledeEn="Book a 30-minute walkthrough with the founder. We'll run your own site through the gap calculator live."
        ledeEs="Reserva 30 min con el founder. Pasamos tu web por la calculadora de gap en directo."
      />
    </>
  );
}
