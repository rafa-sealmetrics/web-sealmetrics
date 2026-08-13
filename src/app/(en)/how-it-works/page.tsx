import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqPageSchema, speakableWebPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { HowItWorksSignal, howItWorksFaqItems } from "@/components/v4/HowItWorksSignal";
import "@/components/v4/how-it-works-signal.css";

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
    url: "https://sealmetrics.com/how-it-works/",
    siteName: "SealMetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "How SealMetrics Works — First-party, Cookieless, EU-hosted",
    description: "Three layers. One pipeline. How SealMetrics counts 100% of your traffic anonymously, without cookies or user tracking.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/how-it-works/",
    languages: getAlternates("/how-it-works"),
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "How it works", url: "/how-it-works" }])} />
      <JsonLd data={speakableWebPageSchema({ url: "/how-it-works", name: "How it works — SealMetrics" })} />
      <JsonLd data={faqPageSchema(howItWorksFaqItems.en, "/how-it-works")} />
      <HowItWorksSignal locale="en" />
    </>
  );
}
