import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ThankYouVariantsEs } from "./ThankYouVariantsEs";

export const metadata: Metadata = {
  title: "Gracias — SealMetrics",
  description:
    "Tu solicitud de audit ha sido recibida. Respondemos en un día laborable.",
  openGraph: {
    title: "Gracias — SealMetrics",
    description: "Tu solicitud de audit ha sido recibida. Respondemos en un día laborable.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/es/demo/thank-you" },
  robots: { index: false, follow: false },
};

export default function ThankYouPageEs() {
  return (
    <>
      <Breadcrumbs
        locale="es"
        items={[
          { label: "Pide una demo", href: "/es/demo" },
          { label: "Gracias" },
        ]}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Pide una demo", url: "/es/demo" }, { name: "Gracias", url: "/es/demo/thank-you" }], "es")} />
      <section className="pt-12 pb-28 bg-warm-white min-h-[70vh]">
        <Suspense fallback={<div className="max-w-[640px] mx-auto px-5 sm:px-8" />}>
          <ThankYouVariantsEs />
        </Suspense>
      </section>
    </>
  );
}
