import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { softwareApplicationSchema, breadcrumbSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import {
  ProductHeroV3,
  FourPillarsV3,
  FeatureLensAIV3,
  FeatureAttributionV3,
  FeatureSuperAPIV3,
  NineReportsV3,
  IntegrationsStripV3,
  ProductFinalCtaV3,
} from "@/components/sections/v3/ProductV3Sections";

export const metadata: Metadata = {
  title: "Product — SealMetrics · Complete analytics, no compromises",
  description:
    "Consentless tracking, last-click revenue attribution, LENS AI supervision, SuperAPI and MCP server — all on 100% observed data. No sampling, no modelling.",
  openGraph: {
    title: "Product — SealMetrics · Complete analytics, no compromises",
    description:
      "A full analytics stack for eCommerce teams. Consentless, 100% observed, EU-hosted. LENS AI + SuperAPI + MCP native.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/product",
    languages: getAlternates("/product"),
  },
};

export default function ProductPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Product" }]} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Product", url: "/product" }])} />

      <ProductHeroV3 />
      <TldrBlock
        answer={
          <>SealMetrics is a <strong>cookieless, first-party analytics platform</strong> for European eCommerce teams. It captures 100% of traffic without consent banners, attributes revenue last-click on complete data, and runs AI anomaly detection (LENS) on top — all hosted in Dublin under GDPR-by-architecture.</>
        }
        bullets={[
          <>Four layers: Capture (consentless) · Attribute (last-click, 100% data) · Understand (LENS AI) · Activate (API + MCP + BigQuery).</>,
          <>Replaces or complements GA4, GA360 and Adobe Analytics for EU-regulated teams.</>,
          <>EU-hosted in Dublin, zero personal data stored, DPA + TPSR included.</>,
        ]}
      />
      <LogosStrip />
      <FourPillarsV3 />
      <FeatureLensAIV3 />
      <FeatureAttributionV3 />
      <FeatureSuperAPIV3 />
      <NineReportsV3 />
      <IntegrationsStripV3 />
      <ProductFinalCtaV3 />
    </>
  );
}
