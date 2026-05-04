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
  title: "Analytics for Healthcare — Privacy-First | SealMetrics",
  description: getVerticalData("healthcare", "es").lede.slice(0, 155) + "…",
  openGraph: {
    title: "Analytics for Healthcare — Privacy-First | SealMetrics",
    description: getVerticalData("healthcare", "es").lede.slice(0, 155) + "…",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/healthcare",
    languages: getAlternatesEs("/for/healthcare"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para salud" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para salud", url: "/es/for/healthcare" }])} />
      <JsonLd data={verticalSoftwareApplicationSchema({ vertical: "healthcare", audienceType: "Salud y ciencias de la vida", description: "SealMetrics — enterprise analytics for healthcare teams in the EU. 100% data capture, GDPR-compliant by architecture, last-click revenue attribution.", url: "/es/for/healthcare" })} /><VerticalPageV3 data={getVerticalData("healthcare", "es")} />
      <RelatedPagesV3
        locale="es"
        eyebrow="Explora también"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/es/for/dpo", title: "For DPOs & legal", desc: "Compliance framework." },
        { href: "/es/for/finance", title: "For finance & banking", desc: "Regulated peer industry." },
        { href: "/es/for/education", title: "For education", desc: "Youth-data adjacent rules." }
      ]}
      />
      <LogosStripEs />
      
    </>
  );
}
