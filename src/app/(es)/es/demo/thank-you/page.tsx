import type { Metadata } from "next";
import { Suspense } from "react";
import { ThankYouFallback } from "@/components/ui/ThankYouFallback";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ThankYouVariantsEs } from "./ThankYouVariantsEs";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Gracias — SealMetrics",
  description:
    "Tu solicitud de audit ha sido recibida. Respondemos en un día laborable.",
  openGraph: {
    title: "Gracias — SealMetrics",
    description: "Tu solicitud de audit ha sido recibida. Respondemos en un día laborable.",
    type: "website",
    images: [ogImage("/es/demo/thank-you/")],
    url: "https://sealmetrics.com/es/demo/thank-you/",
    siteName: "SealMetrics",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Gracias — SealMetrics",
    description: "Tu solicitud de audit ha sido recibida. Respondemos en un día laborable.",
    images: [ogImage("/es/demo/thank-you/")],
  },
  alternates: { canonical: "https://sealmetrics.com/es/demo/thank-you/" },
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
        <Suspense fallback={<ThankYouFallback locale="es" />}>
          <ThankYouVariantsEs />
        </Suspense>
      </section>
    </>
  );
}
