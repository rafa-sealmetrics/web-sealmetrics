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
  title: "SealMetrics para salud",
  description: getVerticalData("healthcare", "es").lede.slice(0, 155) + "…",
  alternates: {
    canonical: "https://sealmetrics.com/es/for/healthcare",
    languages: getAlternatesEs("/for/healthcare"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para salud" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Para salud", url: "/es/for/healthcare" }])} /><VerticalPageV3 data={getVerticalData("healthcare", "es")} />
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
