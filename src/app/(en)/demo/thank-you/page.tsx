import type { Metadata } from "next";
import { Suspense } from "react";
import { ThankYouFallback } from "@/components/ui/ThankYouFallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ThankYouVariants } from "./ThankYouVariants";

export const metadata: Metadata = {
  title: "Thank You — SealMetrics",
  description:
    "Your audit request has been received. We respond within one business day.",
  openGraph: {
    title: "Thank You — SealMetrics",
    description: "Your audit request has been received. We respond within one business day.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    url: "https://sealmetrics.com/demo/thank-you/",
    siteName: "SealMetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Thank You — SealMetrics",
    description: "Your audit request has been received. We respond within one business day.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/demo/thank-you/" },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Book a Demo", href: "/demo" },
          { label: "Thank You" },
        ]}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Book a Demo", url: "/demo" }, { name: "Thank You", url: "/demo/thank-you" }])} />
      <section className="pt-12 pb-28 bg-warm-white min-h-[70vh]">
        <Suspense fallback={<ThankYouFallback locale="en" />}>
          <ThankYouVariants />
        </Suspense>
      </section>
    </>
  );
}
