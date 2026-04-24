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
  title: "SealMetrics para CTOs",
  description: getVerticalData("cto", "es").lede.slice(0, 155) + "…",
  alternates: {
    canonical: "https://sealmetrics.com/es/for/cto",
    languages: getAlternatesEs("/for/cto"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para CTOs" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para CTOs", url: "/es/for/cto" }])} /><VerticalPageV3 data={getVerticalData("cto", "es")} />
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
