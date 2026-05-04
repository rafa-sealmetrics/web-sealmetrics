import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema";
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

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "How it works" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "How it works", url: "/how-it-works" }])} />
      <JsonLd data={speakableWebPageSchema({ url: "/how-it-works", name: "How it works — SealMetrics" })} />

      <HowItWorksHeroV3 locale="en" />
      <TldrBlock
        answer={
          <>SealMetrics is a cookieless web-analytics platform that captures 100% of website traffic anonymously, then attributes each conversion last-click at channel level for revenue decisions. The architecture is three layers: an <strong>846-byte first-party pixel</strong> logs each pageview directly from your own domain (no third-party cookies, no ad-blocker impact, no consent banner integration); a <strong>server-side pipeline in Dublin</strong> counts events anonymously and joins them to the channel observed on each pageview; a <strong>reporting and API layer</strong> exposes aggregate totals to dashboards, BigQuery, MCP servers and AI agents. Implementation takes 15 minutes for the script tag, runs side-by-side with GA4 from day 1 (no migration), and reaches full calibration within one week. Hosted exclusively in Dublin, Ireland on EU-owned infrastructure with zero sub-processors outside the EU.</>
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
