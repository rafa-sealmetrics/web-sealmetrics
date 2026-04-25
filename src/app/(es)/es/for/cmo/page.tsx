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
  title: "SealMetrics para CMOs",
  description: getVerticalData("cmo", "es").lede.slice(0, 155) + "…",
  alternates: {
    canonical: "https://sealmetrics.com/es/for/cmo",
    languages: getAlternatesEs("/for/cmo"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para CMOs" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para CMOs", url: "/es/for/cmo" }])} /><VerticalPageV3 data={getVerticalData("cmo", "es")} />
      <RelatedPagesV3
        locale="es"
        eyebrow="Explora también"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/es/for/cto", title: "For CTOs & engineering", desc: "Engineering side of the analytics decision." },
        { href: "/es/for/dpo", title: "For DPOs & legal", desc: "The compliance angle." },
        { href: "/es/for/ecommerce", title: "For eCommerce", desc: "The use case most CMOs start from." }
      ]}
      />
      <LogosStripEs />
      
    </>
  );
}
