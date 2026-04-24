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
  title: "SealMetrics for Education",
  description: getVerticalData("education", "en").lede.slice(0, 155) + "…",
  alternates: {
    canonical: "https://sealmetrics.com/for/education",
    languages: getAlternates("/for/education"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "For Education" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "For Education", url: "/for/education" }])} /><VerticalPageV3 data={getVerticalData("education", "en")} />
      <RelatedPagesV3
        locale="en"
        eyebrow="Also explore"
        titleEn="Related roles and industries"
        titleEs="Roles e industrias relacionadas"
        pages={[
        { href: "/for/healthcare", title: "For healthcare", desc: "Minor-data compliance." },
        { href: "/for/dpo", title: "For DPOs & legal", desc: "Compliance framework." },
        { href: "/for/media", title: "For media & publishers", desc: "Academic media channels." }
      ]}
      />
      <LogosStrip />
      
    </>
  );
}
