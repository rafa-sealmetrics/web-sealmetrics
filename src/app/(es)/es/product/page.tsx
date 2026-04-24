import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { softwareApplicationSchema, breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import {
  ProductHeroV3Es,
  FourPillarsV3Es,
  FeatureLensAIV3Es,
  FeatureAttributionV3Es,
  FeatureSuperAPIV3Es,
  NineReportsV3Es,
  IntegrationsStripV3Es,
  ProductFinalCtaV3Es,
} from "@/components/sections/v3/ProductV3SectionsEs";

export const metadata: Metadata = {
  title: "Producto — SealMetrics · Analítica completa, sin compromisos",
  description:
    "Tracking sin consentimiento, atribución de ingresos last-click, supervisión LENS AI, SuperAPI y MCP server — todo sobre 100% de datos observados. Sin muestreo, sin modelado.",
  openGraph: {
    title: "Producto — SealMetrics · Analítica completa, sin compromisos",
    description:
      "Stack analítico completo para equipos eCommerce. Sin consentimiento, 100% observado, alojado en UE. LENS AI + SuperAPI + MCP nativo.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/product",
    languages: getAlternatesEs("/product"),
  },
};

export default function ProductPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Producto" }]} locale="es" />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Producto", url: "/es/product" }])} />

      <ProductHeroV3Es />
      <TldrBlock
        label="En resumen"
        answer={
          <>SealMetrics es una <strong>plataforma de analítica first-party sin cookies</strong> para equipos eCommerce europeos. Captura el 100% del tráfico sin banner de consentimiento, atribuye ingresos last-click sobre datos completos y ejecuta detección de anomalías con IA (LENS) — todo alojado en Dublín bajo RGPD por arquitectura.</>
        }
        bullets={[
          <>Cuatro capas: Captura (sin consentimiento) · Atribución (last-click, 100% datos) · Comprensión (LENS AI) · Activación (API + MCP + BigQuery).</>,
          <>Reemplaza o complementa GA4, GA360 y Adobe Analytics para equipos europeos regulados.</>,
          <>Alojado en UE (Dublín), cero dato personal almacenado, DPA + TPSR incluidos.</>,
        ]}
      />
      <LogosStripEs />
      <FourPillarsV3Es />
      <FeatureLensAIV3Es />
      <FeatureAttributionV3Es />
      <FeatureSuperAPIV3Es />
      <NineReportsV3Es />
      <IntegrationsStripV3Es />
      <ProductFinalCtaV3Es />
    </>
  );
}
