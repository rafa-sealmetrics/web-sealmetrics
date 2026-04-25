import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { VerticalPageV3 } from "@/components/sections/v3/VerticalPageV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVerticalData } from "@/components/sections/v3/VerticalsData";

export const metadata: Metadata = {
  title: "SealMetrics for Agencies",
  description: getVerticalData("agencies", "en").lede.slice(0, 155) + "…",
  alternates: {
    canonical: "https://sealmetrics.com/for/agencies",
    languages: getAlternates("/for/agencies"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For Agencies" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For Agencies", url: "/for/agencies" }])} /><VerticalPageV3 data={getVerticalData("agencies", "en")} />
      <RelatedPagesV3
        locale="en"
        eyebrow="Also explore"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/for/ecommerce", title: "For eCommerce", desc: "Most agency clients." },
        { href: "/for/hotels", title: "For hotels", desc: "Hospitality agency clients." },
        { href: "/for/media", title: "For media & publishers", desc: "Media-focused agencies." }
      ]}
      />
      <LogosStrip />
      
    </>
  );
}
