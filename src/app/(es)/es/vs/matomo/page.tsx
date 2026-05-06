import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "SealMetrics vs Matomo — Sin cookies por diseño, sin devops",
  description:
    "Matomo es open-source y EU-friendly, pero las cookies siguen activas por defecto y el self-hosting tiene coste de ops real. SealMetrics es cookieless por diseño, totalmente gestionado, con stack IA-nativo.",
  openGraph: {
    title: "SealMetrics vs Matomo — Sin cookies por diseño, sin devops",
    description:
      "El default de Matomo son cookies + banner. SealMetrics es cookieless en todo el producto, alojado en UE, con MCP y BigQuery nativos — sin devops.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/vs/matomo",
    languages: getAlternatesEs("/vs/matomo"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Matomo" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "vs Matomo", url: "/es/vs/matomo" }])} />
      <JsonLd
        data={comparisonPageSchema({
          name: "SealMetrics vs Matomo",
          description:
            "Comparativa lado a lado: SealMetrics vs Matomo en arquitectura, coste real de self-hosting, stack moderno (MCP, BigQuery, tiempo real) y compliance UE.",
          url: "/es/vs/matomo",
          competitor: { name: "Matomo", url: "https://matomo.org/" },
          datePublished: "2026-05-06",
          dateModified: "2026-05-06",
          author: { name: "Rafa Jiménez", url: "/es/authors/rafa-jimenez" },
        })}
      />
      <VsComparisonV3 data={getVsData("matomo", "es")} dateModified="2026-05-06" />
      <RelatedPagesV3
        locale="es"
        eyebrow="Otras comparativas"
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
          { href: "/es/vs/piwik-pro", title: "vs Piwik PRO", desc: "Fork comercial de Matomo — mismo origen cookies." },
          { href: "/es/vs-ga4", title: "vs Google Analytics 4", desc: "El default gratis — y su punto ciego UE." },
          { href: "/es/vs/ga360", title: "vs Google Analytics 360", desc: "Datos enterprise sin factura de 150K$." },
        ]}
      />
      <LogosStripEs />
    </>
  );
}
