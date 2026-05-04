import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, verticalSoftwareApplicationSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { VerticalPageV3 } from "@/components/sections/v3/VerticalPageV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVerticalData } from "@/components/sections/v3/VerticalsData";

export const metadata: Metadata = {
  title: "Analytics for CTOs — Architecture & Setup | SealMetrics",
  description: getVerticalData("cto", "en").lede.slice(0, 155) + "…",
  openGraph: {
    title: "Analytics for CTOs — Architecture & Setup | SealMetrics",
    description: getVerticalData("cto", "en").lede.slice(0, 155) + "…",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/for/cto",
    languages: getAlternates("/for/cto"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For CTOs" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For CTOs", url: "/for/cto" }])} />
      <JsonLd data={verticalSoftwareApplicationSchema({ vertical: "CTOs", audienceType: "Chief Technology Officer", description: "SealMetrics — enterprise analytics for CTOs teams in the EU. 100% data capture, GDPR-compliant by architecture, last-click revenue attribution.", url: "/for/cto" })} /><VerticalPageV3 data={getVerticalData("cto", "en")} />
      <RelatedPagesV3
        locale="en"
        eyebrow="Also explore"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/for/cmo", title: "For CMOs", desc: "The business-side buyer." },
        { href: "/for/dpo", title: "For DPOs & legal", desc: "The compliance review." },
        { href: "/for/saas", title: "For SaaS", desc: "Technical product-led analytics." }
      ]}
      />
      <LogosStrip />
      
    </>
  );
}
