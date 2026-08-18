import type { Metadata } from "next";
import { GrowthIndexSignal } from "@/components/v4/GrowthIndexSignal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Growth — Practical systems for digital teams",
  description: "Practical thinking on measurement, attribution, privacy, and revenue for digital teams that need growth they can defend.",
  openGraph: {
    title: "Growth — Practical systems for digital teams",
    description: "Practical thinking on measurement, attribution, privacy, and revenue for digital teams that need growth they can defend.",
    type: "website",
    url: "https://sealmetrics.com/growth/",
    siteName: "SealMetrics",
    locale: "en_US",
    images: [ogImage("/growth/")],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Growth — Practical systems for digital teams",
    description: "Practical thinking on measurement, attribution, privacy, and revenue for digital teams that need growth they can defend.",
    images: [ogImage("/growth/")],
  },
  alternates: { canonical: "https://sealmetrics.com/growth/" },
};

export default function GrowthPage() {
  return (
    <>
      <JsonLd data={collectionPageSchema({ name: "Growth", description: "Practical thinking on measurement, attribution, privacy, and revenue for digital teams.", url: "/growth" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Growth", url: "/growth" }])} />
      <GrowthIndexSignal />
    </>
  );
}
