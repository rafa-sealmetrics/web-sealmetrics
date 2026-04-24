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
  title: "SealMetrics for CMOs",
  description: getVerticalData("cmo", "en").lede.slice(0, 155) + "…",
  alternates: {
    canonical: "https://sealmetrics.com/for/cmo",
    languages: getAlternates("/for/cmo"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For CMOs" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For CMOs", url: "/for/cmo" }])} /><VerticalPageV3 data={getVerticalData("cmo", "en")} />
      <RelatedPagesV3
        locale="en"
        eyebrow="Also explore"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/for/cto", title: "For CTOs & engineering", desc: "Engineering side of the analytics decision." },
        { href: "/for/dpo", title: "For DPOs & legal", desc: "The compliance angle." },
        { href: "/for/ecommerce", title: "For eCommerce", desc: "The use case most CMOs start from." }
      ]}
      />
      <LogosStrip />
      
    </>
  );
}
