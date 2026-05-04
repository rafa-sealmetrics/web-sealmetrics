import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, verticalSoftwareApplicationSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VerticalPageV3 } from "@/components/sections/v3/VerticalPageV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVerticalData } from "@/components/sections/v3/VerticalsData";

export const metadata: Metadata = {
  title: "Analytics for DPOs — GDPR by Architecture | SealMetrics",
  description: getVerticalData("dpo", "es").lede.slice(0, 155) + "…",
  openGraph: {
    title: "Analytics for DPOs — GDPR by Architecture | SealMetrics",
    description: getVerticalData("dpo", "es").lede.slice(0, 155) + "…",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/dpo",
    languages: getAlternatesEs("/for/dpo"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para DPOs" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para DPOs", url: "/es/for/dpo" }])} />
      <JsonLd data={verticalSoftwareApplicationSchema({ vertical: "DPOs", audienceType: "Data Protection Officer", description: "SealMetrics — enterprise analytics for DPOs teams in the EU. 100% data capture, GDPR-compliant by architecture, last-click revenue attribution.", url: "/es/for/dpo" })} /><VerticalPageV3 data={getVerticalData("dpo", "es")} />
      <RelatedPagesV3
        locale="es"
        eyebrow="Explora también"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/es/for/cmo", title: "For CMOs", desc: "Pair compliance with marketing decisions." },
        { href: "/es/for/cto", title: "For CTOs & engineering", desc: "Infrastructure and architecture." },
        { href: "/es/for/finance", title: "For finance & banking", desc: "Regulated industry deep-dive." }
      ]}
      />
      <LogosStripEs />
      
    </>
  );
}
