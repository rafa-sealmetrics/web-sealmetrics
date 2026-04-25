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
  title: "SealMetrics para finanzas",
  description: getVerticalData("finance", "es").lede.slice(0, 155) + "…",
  alternates: {
    canonical: "https://sealmetrics.com/es/for/finance",
    languages: getAlternatesEs("/for/finance"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para finanzas" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para finanzas", url: "/es/for/finance" }])} /><VerticalPageV3 data={getVerticalData("finance", "es")} />
      <RelatedPagesV3
        locale="es"
        eyebrow="Explora también"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/es/for/dpo", title: "For DPOs & legal", desc: "Compliance framework." },
        { href: "/es/for/healthcare", title: "For healthcare", desc: "Regulated peer industry." },
        { href: "/es/for/cto", title: "For CTOs & engineering", desc: "Technical implementation." }
      ]}
      />
      <LogosStripEs />
      
    </>
  );
}
