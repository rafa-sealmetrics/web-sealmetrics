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
  title: "SealMetrics para educación",
  description: getVerticalData("education", "es").lede.slice(0, 155) + "…",
  alternates: {
    canonical: "https://sealmetrics.com/es/for/education",
    languages: getAlternatesEs("/for/education"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para educación" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para educación", url: "/es/for/education" }])} /><VerticalPageV3 data={getVerticalData("education", "es")} />
      <RelatedPagesV3
        locale="es"
        eyebrow="Explora también"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/es/for/healthcare", title: "For healthcare", desc: "Minor-data compliance." },
        { href: "/es/for/dpo", title: "For DPOs & legal", desc: "Compliance framework." },
        { href: "/es/for/media", title: "For media & publishers", desc: "Academic media channels." }
      ]}
      />
      <LogosStripEs />
      
    </>
  );
}
