import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VerticalPageV3 } from "@/components/sections/v3/VerticalPageV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVerticalData } from "@/components/sections/v3/VerticalsData";

export const metadata: Metadata = {
  title: "SealMetrics para agencias",
  description: getVerticalData("agencies", "es").lede.slice(0, 155) + "…",
  alternates: {
    canonical: "https://sealmetrics.com/es/for/agencies",
    languages: getAlternatesEs("/for/agencies"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para agencias" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para agencias", url: "/es/for/agencies" }])} /><VerticalPageV3 data={getVerticalData("agencies", "es")} />
      <RelatedPagesV3
        locale="es"
        eyebrow="Explora también"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/es/for/ecommerce", title: "For eCommerce", desc: "Most agency clients." },
        { href: "/es/for/hotels", title: "For hotels", desc: "Hospitality agency clients." },
        { href: "/es/for/media", title: "For media & publishers", desc: "Media-focused agencies." }
      ]}
      />
      <LogosStripEs />
      
    </>
  );
}
