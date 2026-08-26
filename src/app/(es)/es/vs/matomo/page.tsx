import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVsData } from "@/components/sections/v3/VsData";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Sealmetrics vs Matomo — Sin cookies por diseño, sin devops",
  description:
    "Matomo es open-source y EU-friendly, pero mantiene cookies por defecto y el self-hosting tiene coste real. Sealmetrics es cookieless, gestionado e IA-nativo.",
  openGraph: {
    title: "Sealmetrics vs Matomo — Sin cookies por diseño, sin devops",
    description:
      "El default de Matomo son cookies + banner. Sealmetrics es cookieless en todo el producto, alojado en UE, con MCP y BigQuery nativos — sin devops.",
    type: "website",
    images: [ogImage("/es/vs/matomo/")],
    url: "https://sealmetrics.com/es/vs/matomo/",
    siteName: "Sealmetrics",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Sealmetrics vs Matomo — Sin cookies por diseño, sin devops",
    description: "El default de Matomo son cookies + banner. Sealmetrics es cookieless en todo el producto, alojado en UE, con MCP y BigQuery nativos — sin devops.",
    images: [ogImage("/es/vs/matomo/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/vs/matomo/",
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
          name: "Sealmetrics vs Matomo",
          description:
            "Comparativa lado a lado: Sealmetrics vs Matomo en arquitectura, coste real de self-hosting, stack moderno (MCP, BigQuery, tiempo real) y compliance UE.",
          url: "/es/vs/matomo",
          competitor: { name: "Matomo", url: "https://matomo.org/" },
          datePublished: "2026-05-06",
          dateModified: "2026-08-26",
          author: { name: "Rafa Jiménez", url: "/es/authors/rafa-jimenez" },
          criteria: [
            "Cookies por defecto vs sin cookies por diseño",
            "Coste operativo del self-hosting (TCO)",
            "Paridad de features en modo cookieless",
            "Tráfico UE capturado con banner",
            "Interfaz MCP / IA nativa",
            "Disponibilidad de export BigQuery",
            "Latencia en tiempo real",
          ],
        })}
      />
      <VsComparisonV3 data={getVsData("matomo", "es")} dateModified="2026-08-26" />
      <RelatedPagesV3
        locale="es"
        eyebrow="Otras comparativas"
        titleEn="See every Sealmetrics comparison"
        titleEs="Ver cada comparativa de Sealmetrics"
        pages={[
          { href: "/es/vs/piwik-pro", title: "vs Piwik PRO", desc: "Fork comercial de Matomo — mismo origen cookies." },
          { href: "/es/vs-ga4", title: "vs Google Analytics 4", desc: "El default gratis — y su punto ciego UE." },
          { href: "/es/vs/ga360", title: "vs Google Analytics 360", desc: "Datos enterprise sin factura de 150K$." },
        ]}
      />
      <LogosStripEs />
      <section className="bg-warm-white border-t border-warm-100 py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer label="Respuesta rápida">
            <p>
              Sealmetrics vs Matomo: Matomo es una plataforma de analítica open-source, EU-friendly y self-hostable, pero las cookies siguen siendo el default y el self-hosting tiene un coste operativo real. Sealmetrics es una plataforma cookieless totalmente gestionada que mide el 100% del tráfico entrante sin banner de consentimiento y atribuye cada conversión last-click sobre eventos observados, alojada en la UE (Dublín), desde 499€/mes con facturación anual.
            </p>
            <p>
              El trade-off es completitud frente a overhead. La configuración cookieless de Matomo limita lo que puede medir y aun así te deja gestionando infraestructura, actualizaciones y escalado; su modo cookies opera sin banner solo bajo una configuración de exención — permitida por los criterios de la CNIL en Francia, no por el &sect;25 de la TDDDG alemana — y en cualquier otro caso pierde a todo visitante que rechaza. Sealmetrics mide el 100% completo con un píxel first-party ligero, nada que self-hostear, y un stack IA-nativo — LENS AI y un servidor MCP — sobre datos completos.
            </p>
          </QuickAnswer>
        </div>
      </section>
    </>
  );
}
