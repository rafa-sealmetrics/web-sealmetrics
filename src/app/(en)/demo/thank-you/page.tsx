import type { Metadata } from "next";
import { Suspense } from "react";
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
  },
  alternates: { canonical: "https://sealmetrics.com/demo/thank-you" },
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
        <Suspense fallback={<div className="max-w-[640px] mx-auto px-5 sm:px-8" />}>
          <ThankYouVariants />
        </Suspense>
      </section>
    </>
  );
}
