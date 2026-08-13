import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { softwareApplicationSchema, breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { ProductSignal } from "@/components/v4/ProductSignal";
import "@/components/v4/product-signal.css";

export const metadata: Metadata = {
  title: "Producto — SealMetrics · Analítica completa",
  description:
    "Tracking sin consentimiento, atribución last-click, supervisión LENS AI, SuperAPI y MCP server sobre 100% de datos observados. Sin muestreo.",
  openGraph: {
    title: "Producto — SealMetrics · Analítica completa",
    description:
      "Stack analítico completo para equipos eCommerce. Sin consentimiento, 100% observado, alojado en UE. LENS AI + SuperAPI + MCP nativo.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    locale: "es_ES",
    url: "https://sealmetrics.com/es/product/",
    siteName: "SealMetrics",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Producto — SealMetrics · Analítica completa",
    description: "Stack analítico completo para equipos eCommerce. Sin consentimiento, 100% observado, alojado en UE. LENS AI + SuperAPI + MCP nativo.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/product/",
    languages: getAlternatesEs("/product"),
  },
};

export default function ProductPageEs() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Producto", url: "/es/product" }])} />
      <JsonLd data={speakableWebPageSchema({ url: "/es/product", name: "Producto — SealMetrics" })} />
      <ProductSignal locale="es" />
    </>
  );
}
