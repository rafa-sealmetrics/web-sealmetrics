import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import {
  VsGA4HeroV3,
  VsGA4GapStatsV3,
  VsGA4TableV3,
  RunBothV3,
} from "@/components/sections/v3/VsGA4V3Sections";
import { FaqAccordionV3 } from "@/components/sections/v3/FaqAccordionV3";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "SealMetrics vs Google Analytics 4 — Complete data, no spin",
  description:
    "Honest comparison. GA4 loses 40–60% of EU traffic to consent and ad blockers. SealMetrics captures 100%. Run both alongside for 30 days.",
  openGraph: {
    title: "SealMetrics vs Google Analytics 4 — Complete data, no spin",
    description: "Feature-by-feature comparison. Honest.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/vs-ga4",
    languages: getAlternates("/vs-ga4"),
  },
};

const faqs = [
  { q: "Do I have to replace GA4?", a: "No. Most customers run SealMetrics alongside GA4 — in fact, we recommend it for your first 30 days so you can compare side by side with your own CRM numbers." },
  { q: "Will SealMetrics connect to Google Ads?", a: "Yes, via BigQuery export and API. For native Google Ads conversion import, you can keep GA4 running alongside — SealMetrics becomes your source of truth for decisions, GA4 becomes your Google Ads conduit." },
  { q: "Is SealMetrics really consent-free?", a: "Yes. No cookies, no localStorage, no fingerprinting. First-party event counting on the server side, aggregated into channel totals without any personal identifier. This means no consent banner required under GDPR or ePrivacy." },
  { q: "How much does migration cost?", a: "Nothing. There's no migration. Add one script tag to your site and run both tools in parallel. Most teams never fully remove GA4 — they just stop making decisions on it." },
  { q: "How accurate is the 40–60% consent rejection figure?", a: "It's a cross-industry average for EU traffic with a standard consent banner. Your exact rejection rate depends on your sector, device mix and banner design. The gap is smaller in B2B, larger in B2C consumer brands." },
  { q: "Can I use SealMetrics data in my BigQuery warehouse?", a: "Yes. Full-resolution export to BigQuery is included from the Growth plan up — no ETL, no sampling. Your warehouse gets every event, same as your dashboard." },
  { q: "What about GA4's free tier? Isn't the price a barrier?", a: "GA4 is free because you are the product — your data trains Google's ad models. SealMetrics starts at €499/mo annual. For a team spending €20K+/month in paid media, that's a rounding error compared to the cost of misallocated ad spend on incomplete data." },
];

export default function VsGA4Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Google Analytics 4" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "vs Google Analytics 4", url: "/vs-ga4" }])} />
      <JsonLd data={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      <VsGA4HeroV3 locale="en" />
      <TldrBlock
        answer={
          <>GA4 typically loses <strong>40–60% of EU traffic</strong> to consent rejection, ad blockers and Apple's Intelligent Tracking Prevention — then reconstructs the rest with statistical modelling. SealMetrics captures <strong>100% of traffic</strong> with a first-party cookieless pixel, attributes revenue last-click on complete data, and is GDPR-compliant by architecture. Most teams run both in parallel for 30 days, then make decisions on SealMetrics.</>
        }
        bullets={[
          <>GA4: consent-gated, sampled, US-hosted, Google-owned — best for Google Ads conduit.</>,
          <>SealMetrics: consent-free, full-resolution, EU-hosted in Dublin — best for revenue decisions.</>,
          <>No migration required — drop the pixel alongside GA4 and compare your own numbers.</>,
        ]}
      />
      <LogosStrip />
      <VsGA4GapStatsV3 locale="en" />
      <VsGA4TableV3 locale="en" />
      <RunBothV3 locale="en" />
      <FaqAccordionV3
        locale="en"
        items={faqs}
        titleEn={<>The <em>objections</em>, answered.</>}
        ledeEn="What CMOs and CTOs actually ask before replacing (or complementing) GA4."
      />
      <FinalCtaSharedV3
        locale="en"
        titleEn={<>Run both for 30 days. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Then decide.</em></>}
        titleEs={<>Corre los dos 30 días. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Y entonces decide.</em></>}
        ledeEn="Install SealMetrics alongside GA4. Compare with your own CRM. If the gap isn't real, you owe us nothing."
        ledeEs="Instala SealMetrics junto a GA4. Compara con tu propio CRM. Si el gap no es real, no nos debes nada."
      />
    </>
  );
}
