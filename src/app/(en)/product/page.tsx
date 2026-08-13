import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { softwareApplicationSchema, breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { ProductSignal } from "@/components/v4/ProductSignal";
import "@/components/v4/product-signal.css";

export const metadata: Metadata = {
  title: "Product — SealMetrics · Complete analytics, no compromises",
  description:
    "Consentless tracking, last-click revenue attribution, LENS AI, SuperAPI and MCP server — all on 100% observed data. No sampling, no modelling.",
  openGraph: {
    title: "Product — SealMetrics · Complete analytics, no compromises",
    description:
      "A full analytics stack for eCommerce teams. Consentless, 100% observed, EU-hosted. LENS AI + SuperAPI + MCP native.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    url: "https://sealmetrics.com/product/",
    siteName: "SealMetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Product — SealMetrics · Complete analytics, no compromises",
    description: "A full analytics stack for eCommerce teams. Consentless, 100% observed, EU-hosted. LENS AI + SuperAPI + MCP native.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/product/",
    languages: getAlternates("/product"),
  },
};

export default function ProductPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Product", url: "/product" }])} />
      <JsonLd data={speakableWebPageSchema({ url: "/product", name: "Product — SealMetrics" })} />
      <ProductSignal locale="en" />
    </>
  );
}
