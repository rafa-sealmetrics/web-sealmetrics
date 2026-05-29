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
      <section className="mx-auto max-w-4xl px-4 py-10 prose prose-slate lg:prose-lg">
        <h1>Las mejores alternativas a Google Analytics para empresas europeas</h1>
        <p>
          Google Analytics 4 sigue siendo la herramienta de analítica web más utilizada del mundo, pero presenta
          limitaciones críticas para empresas que operan bajo el RGPD: muestreo de datos en cuentas de alto volumen,
          dependencia del consentimiento de cookies para recoger información fiable y alojamiento de datos fuera de la
          Unión Europea, lo que genera fricciones legales tras las sentencias Schrems II.
        </p>
        <h2>¿Por qué buscar una alternativa a Google Analytics?</h2>
        <p>
          Muchas empresas europeas descubren que, tras implementar un banner de cookies conforme al RGPD, entre el 30 %
          y el 60 % de sus visitantes rechazan el seguimiento. GA4 intenta paliar esta pérdida mediante el modelado
          estadístico de Consent Mode, pero ese modelado no es dato real: es una estimación que puede desviarse
          significativamente según el sector y el perfil del usuario.
        </p>
        <p>
          Además, los planes gratuitos de GA4 aplican muestreo a partir de ciertos umbrales de sesiones, lo que
          distorsiona los informes de sitios con tráfico elevado. Para e-commerce o medios digitales con millones de
          visitas mensuales, tomar decisiones sobre datos muestreados supone un riesgo real.
        </p>
        <h2>SealMetrics: analítica sin cookies ni muestreo</h2>
        <p>
          SealMetrics captura el 100 % del tráfico sin necesidad de cookies de seguimiento ni de consentimiento previo
          del usuario, gracias a una metodología de medición server-side compatible con el RGPD desde el diseño. Los
          datos se procesan y almacenan en servidores dentro de la Unión Europea, eliminando los problemas de
          transferencia internacional que señala Schrems II.
        </p>
        <p>
          A diferencia de GA4, SealMetrics no aplica muestreo: cada sesión, conversión y evento se registra a
          resolución completa. Esto permite a los equipos de marketing y producto trabajar con cifras exactas, no con
          aproximaciones estadísticas.
        </p>
        <h2>Criterios clave para evaluar alternativas</h2>
        <ul>
          <li><strong>Captura sin cookies:</strong> ¿Recoge datos reales o depende de consentimiento y modelado?</li>
          <li><strong>Residencia de datos UE:</strong> ¿Cumple con Schrems II sin cláusulas contractuales adicionales?</li>
          <li><strong>Muestreo:</strong> ¿Los informes reflejan el 100 % del tráfico o una muestra?</li>
          <li><strong>Propiedad de los datos:</strong> ¿Puedes exportar y eliminar tus datos en cualquier momento?</li>
          <li><strong>Integraciones IA / MCP:</strong> ¿Permite consultas en lenguaje natural sobre tus métricas?</li>
        </ul>
        <p>
          En la tabla comparativa que encontrarás más abajo analizamos GA4 frente a SealMetrics en cada uno de estos
          criterios, con datos verificados y casos de uso reales de clientes enterprise.
        </p>
      </section>
      <VsComparisonV3 data={getVsData("google-analytics", "es")} dateModified="2026-05-29" />
      <LogosStripEs />
    </>
  );
}
