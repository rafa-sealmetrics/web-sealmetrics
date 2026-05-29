import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, comparisonPageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "Alternativas a Google Analytics — SealMetrics",
  description: "¿Buscando una alternativa a GA que no commoditice tus datos? SealMetrics es otra categoría: completo, UE-hosted, grado enterprise.",
  openGraph: {
    title: "Alternativas a Google Analytics — SealMetrics",
    description: "¿Buscando una alternativa a GA que no commoditice tus datos? SealMetrics es otra categoría: completo, UE-hosted, grado enterprise.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/es/alternatives/google-analytics", languages: getAlternatesEs("/alternatives/google-analytics") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Alternativas a Google Analytics" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Alternativas a Google Analytics", url: "/es/alternatives/google-analytics" }])} />
      <JsonLd data={comparisonPageSchema({
        name: "Alternativas a Google Analytics — SealMetrics",
        description: "Alternativa enterprise a Google Analytics para empresas europeas que necesitan datos completos y residencia UE.",
        url: "/es/alternatives/google-analytics",
        competitor: { name: "Google Analytics", url: "https://marketingplatform.google.com/about/analytics/" },
        datePublished: "2026-04-15",
        dateModified: "2026-05-29",
        author: { name: "Rafa Jiménez", url: "/es/authors/rafa-jimenez" },
        criteria: [
          "Captura sin cookies vs modelado de Consent Mode",
          "Pérdida de tráfico UE por rechazo de consentimiento",
          "Residencia de datos y postura Schrems II",
          "Muestreo a escala",
          "Export BigQuery a resolución completa",
          "Interfaz MCP / IA nativa",
          "Pricing y propiedad de los datos",
        ],
      })} />
      <section className="mx-auto max-w-3xl px-4 py-10 prose prose-slate lg:prose-lg">
        <h1>Alternativas a Google Analytics para empresas europeas</h1>
        <p>
          Google Analytics 4 sigue siendo la herramienta de analítica más extendida del mundo, pero su modelo de
          consentimiento, la dependencia de cookies de terceros y el almacenamiento de datos en servidores
          estadounidenses generan fricciones crecientes para las empresas que operan bajo el RGPD. En esta página
          comparamos SealMetrics con GA4 en los criterios que más importan a los equipos de datos y cumplimiento.
        </p>
        <h2>Por qué las empresas buscan alternativas a Google Analytics</h2>
        <ul>
          <li>
            <strong>Pérdida de datos por rechazo de consentimiento.</strong> Con tasas de rechazo de banners de
            cookies superiores al 40 % en Europa, GA4 pierde una fracción significativa del tráfico real incluso
            con Consent Mode activado.
          </li>
          <li>
            <strong>Muestreo en informes a escala.</strong> GA4 aplica muestreo en exploraciones con grandes
            volúmenes de sesiones, lo que reduce la fiabilidad de los análisis ad hoc.
          </li>
          <li>
            <strong>Residencia de datos y Schrems II.</strong> Las transferencias de datos a EE. UU. siguen
            siendo objeto de litigios regulatorios en varios países de la UE. Múltiples autoridades de protección
            de datos han declarado el uso de GA ilegal sin medidas adicionales.
          </li>
          <li>
            <strong>Propiedad y uso secundario de los datos.</strong> Google puede usar datos agregados para
            mejorar sus propios productos y modelos publicitarios, lo que genera incertidumbre sobre la
            confidencialidad de los datos de negocio.
          </li>
        </ul>
        <h2>SealMetrics: una categoría diferente</h2>
        <p>
          SealMetrics no es simplemente otra herramienta de analítica web: está diseñada desde cero para capturar
          el 100 % de las sesiones sin depender de cookies ni del consentimiento del usuario, cumpliendo
          plenamente con el RGPD. Los datos se almacenan exclusivamente en infraestructura europea y nunca se
          utilizan para fines distintos al análisis del cliente.
        </p>
        <h2>Criterios clave de la comparativa</h2>
        <p>
          A continuación encontrarás una tabla detallada que analiza ambas plataformas en siete dimensiones:
          captura sin cookies, pérdida de tráfico UE, residencia de datos, muestreo, exportación a BigQuery,
          integración con IA y modelo de precios. Cada criterio incluye evidencia verificable y enlaces a fuentes
          oficiales.
        </p>
      </section>
      <VsComparisonV3 data={getVsData("google-analytics", "es")} dateModified="2026-05-29" />
      <LogosStripEs />
    </>
  );
}
