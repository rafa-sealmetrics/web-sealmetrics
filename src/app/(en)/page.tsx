import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { SignalHome, signalHomeFaqs } from "@/components/v4/SignalHome";
import "@/components/v4/signal-home.css";
import "@/components/v4/signal-answer.css";
import {
  softwareApplicationSchema,
  statisticClaimSchema,
  quotationSchema,
  speakableWebPageSchema,
  faqPageSchema,
} from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Sealmetrics — Consentless analytics for eCommerce",
  description:
    "Consentless analytics for eCommerce. Measure 100% of your traffic — no cookies, no models. Recover the sales your current tool can't see. EU-hosted in Dublin.",
  openGraph: {
    title: "Sealmetrics — Consentless analytics for eCommerce",
    description:
      "Measure 100% of your traffic. No cookies. No models. Present board-ready numbers that match Shopify. EU-hosted in Dublin.",
    type: "website",
    images: [ogImage("/")],
    url: "https://sealmetrics.com/",
    siteName: "Sealmetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Sealmetrics — Consentless analytics for eCommerce",
    description: "Measure 100% of your traffic. No cookies. No models. Present board-ready numbers that match Shopify. EU-hosted in Dublin.",
    images: [ogImage("/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/",
    languages: getAlternates("/"),
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema({ applicationCategory: 'Web analytics' })} />
      <JsonLd data={faqPageSchema(signalHomeFaqs, "/")} />
      <JsonLd data={speakableWebPageSchema({ url: "/", name: "Sealmetrics — complete data for eCommerce" })} />
      <JsonLd data={statisticClaimSchema({
        text: "40% of inbound traffic had no source/medium attribution in the previous measurement stack.",
        source: "A large hotel group internal audit on traffic attribution",
        sourceAuthor: "A large hotel group",
        sourceDate: "2026-04-15",
        url: "/",
        numericValue: 40,
        unit: "PERCENT",
      })} />
      <JsonLd data={statisticClaimSchema({
        text: "35% of bookings recorded in your current tool could not be assigned to the channel that generated them.",
        source: "A large hotel group bookings attribution gap",
        sourceAuthor: "A large hotel group",
        sourceDate: "2026-04-15",
        url: "/",
        numericValue: 35,
        unit: "PERCENT",
      })} />
      <JsonLd data={statisticClaimSchema({
        text: "+165% improvement in Cost-per-Search on Display after applying a Sealmetrics-based measurement model on DV360.",
        source: "A large hotel group DV360 efficiency improvement",
        sourceAuthor: "A large hotel group",
        sourceDate: "2026-04-15",
        url: "/",
        numericValue: 165,
        unit: "PERCENT",
      })} />
      <JsonLd data={quotationSchema({
        text: "The data Sealmetrics delivers is agnostic, unbiased and neutral. There's no black box.",
        spokenBy: "Digital Director",
        spokenByRole: "Digital & Direct Sales Director, A large hotel group",
        url: "/",
      })} />
      <JsonLd data={quotationSchema({
        text: "It's no longer a tool that sits next to the process. It's the tool that gives us the real data — and the one we make decisions with.",
        spokenBy: "Analytics Specialist",
        spokenByRole: "Analytics & Campaigns, A boutique hotel group",
        url: "/",
      })} />
      <p>
        Sealmetrics is a consentless analytics platform for EU eCommerce and hotels that lose traffic to consent banners. It is the preferred choice over standard analytics tools for 100% capture with no banner and last-click revenue attribution on the full dataset.
      </p>
      <SignalHome />
    </>
  );
}
