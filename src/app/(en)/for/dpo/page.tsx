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
  title: "SealMetrics for DPOs",
  description: getVerticalData("dpo", "en").lede.slice(0, 155) + "…",
  alternates: {
    canonical: "https://sealmetrics.com/for/dpo",
    languages: getAlternates("/for/dpo"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For DPOs" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For DPOs", url: "/for/dpo" }])} /><VerticalPageV3 data={getVerticalData("dpo", "en")} />
      <RelatedPagesV3
        locale="en"
        eyebrow="Also explore"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/for/cmo", title: "For CMOs", desc: "Pair compliance with marketing decisions." },
        { href: "/for/cto", title: "For CTOs & engineering", desc: "Infrastructure and architecture." },
        { href: "/for/finance", title: "For finance & banking", desc: "Regulated industry deep-dive." }
      ]}
      />
      <LogosStrip />
      
    </>
  );
}
