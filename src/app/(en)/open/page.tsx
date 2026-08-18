import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { publishedChapters } from "@/lib/content/open";
import { OpenIndexSignal } from "@/components/v4/OpenIndexSignal";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Open — How we measure at SealMetrics",
  description:
    "An open document on how we measure, comply, and build SealMetrics. Eleven chapters planned, publishing as we write.",
  openGraph: {
    title: "Open — How we measure at SealMetrics",
    description:
      "An open document on how we measure, comply, and build SealMetrics. Eleven chapters planned.",
    type: "website",
    images: [ogImage("/open/")],
    url: "https://sealmetrics.com/open/",
    siteName: "SealMetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Open — How we measure at SealMetrics",
    description: "An open document on how we measure, comply, and build SealMetrics. Eleven chapters planned.",
    images: [ogImage("/open/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/open/",
  },
};

export default function OpenIndexPage() {
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Open — SealMetrics",
    inLanguage: "en",
    author: { "@type": "Organization", name: "SealMetrics" },
    description:
      "An open document on how we measure, comply, and build SealMetrics. Eleven chapters planned, published as we write.",
    hasPart: publishedChapters.map((c) => ({
      "@type": "Chapter",
      name: c.title,
      position: c.number,
      url: `https://sealmetrics.com/open/${c.slug}/`,
    })),
  };

  return (
    <>
      <JsonLd data={bookSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Open", url: "/open" }])} />
      <OpenIndexSignal />
    </>
  );
}
