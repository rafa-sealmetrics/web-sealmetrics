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

export const metadata: Metadata = {
  title: "SealMetrics vs Adobe Analytics — Alternativa enterprise",
  description: "Adobe Analytics cuesta 100K$+ y requiere especialistas. SealMetrics da dato completo sin consultores.",
  openGraph: {
    title: "SealMetrics vs Adobe Analytics — Alternativa enterprise",
    description: "Adobe Analytics cuesta 100K$+ y requiere especialistas. SealMetrics da dato completo sin consultores.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    url: "https://sealmetrics.com/es/vs/adobe-analytics/",
    siteName: "SealMetrics",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "SealMetrics vs Adobe Analytics — Alternativa enterprise",
    description: "Adobe Analytics cuesta 100K$+ y requiere especialistas. SealMetrics da dato completo sin consultores.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/es/vs/adobe-analytics/", languages: getAlternatesEs("/vs/adobe-analytics") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Adobe Analytics" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "vs Adobe Analytics", url: "/es/vs/adobe-analytics" }])} />
      <JsonLd data={comparisonPageSchema({
        name: "SealMetrics vs Adobe Analytics",
        description: "Comparativa lado a lado: SealMetrics vs Adobe Analytics en completitud de datos, cumplimiento UE, precio y tiempo de implementacion.",
        url: "/es/vs/adobe-analytics",
        competitor: { name: "Adobe Analytics", url: "https://business.adobe.com/products/analytics/adobe-analytics.html" },
        datePublished: "2026-04-15",
        dateModified: "2026-05-29",
        author: { name: "Rafa Jiménez", url: "/es/authors/rafa-jimenez" },
        criteria: [
          "Coste anual de licencia y fees de implementación",
          "Tiempo al primer informe accionable",
          "Especialistas requeridos en plantilla",
          "Pérdida de tráfico UE por rechazo de consentimiento",
          "Arquitectura AppMeasurement basada en cookies",
          "Interfaz MCP / IA nativa",
          "Inclusión de export BigQuery",
        ],
      })} />
      <VsComparisonV3 data={getVsData("adobe-analytics", "es")} dateModified="2026-05-29" />
      <RelatedPagesV3
        locale="es"
        eyebrow="Otras comparativas"
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
        { href: "/es/vs-ga4", title: "vs Google Analytics 4", desc: "El default gratis — y su punto ciego UE." },
        { href: "/es/vs/ga360", title: "vs Google Analytics 360", desc: "Datos enterprise sin factura de 150K$." },
        { href: "/es/vs/piwik-pro", title: "vs Piwik PRO", desc: "Hosting UE más captura completa." }
      ]}
      />
      <LogosStripEs />
      
      <section className="bg-warm-white border-t border-warm-100 py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer label="Respuesta rápida">
            <p>
              SealMetrics vs Adobe Analytics: Adobe Analytics es una suite de analítica enterprise desde unos 100.000 $/año en contratos anuales, con una implementación pesada, hosting en EE. UU./híbrido y un banner de consentimiento en toda la UE. SealMetrics es una plataforma cookieless alojada en la UE que mide el 100% del tráfico entrante sin depender del consentimiento y atribuye cada conversión last-click sobre eventos observados — desde 499€/mes con facturación anual, sin compromiso anual.
            </p>
            <p>
              Para el eCommerce UE la diferencia es completitud y compliance. Adobe sigue perdiendo el 40–60% del tráfico UE por rechazo de consentimiento y arrastra overhead Schrems II por sus flujos de datos a EE. UU., además de meses de implementación. SealMetrics se instala con un píxel, corre en paralelo desde el día uno, y su infraestructura solo en Dublín sin sub-procesadores fuera de la UE elimina la revisión de transferencias. Los equipos mantienen Adobe para análisis custom profundo donde lo necesitan y usan SealMetrics como el número de revenue completo y listo para el board.
            </p>
          </QuickAnswer>
        </div>
      </section>
    </>
  );
}
