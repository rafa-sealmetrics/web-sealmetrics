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
  title: "Analytics for CTOs — Architecture & Setup | SealMetrics",
  description: getVerticalData("cto", "es").lede.slice(0, 155) + "…",
  openGraph: {
    title: "Analytics for CTOs — Architecture & Setup | SealMetrics",
    description: getVerticalData("cto", "es").lede.slice(0, 155) + "…",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/cto",
    languages: getAlternatesEs("/for/cto"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para CTOs" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para CTOs", url: "/es/for/cto" }])} />
      <JsonLd data={verticalSoftwareApplicationSchema({ vertical: "CTOs", audienceType: "Chief Technology Officer", description: "SealMetrics — enterprise analytics for CTOs teams in the EU. 100% data capture, GDPR-compliant by architecture, last-click revenue attribution.", url: "/es/for/cto" })} /><VerticalPageV3 data={getVerticalData("cto", "es")} />
      <RelatedPagesV3
        locale="es"
        eyebrow="Explora también"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/es/for/cmo", title: "For CMOs", desc: "The business-side buyer." },
        { href: "/es/for/dpo", title: "For DPOs & legal", desc: "The compliance review." },
        { href: "/es/for/saas", title: "For SaaS", desc: "Technical product-led analytics." }
      ]}
      />
      <LogosStripEs />
      
    </>
  );
}
