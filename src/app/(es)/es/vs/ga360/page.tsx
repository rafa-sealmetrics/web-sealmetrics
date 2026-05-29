import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { breadcrumbSchema, comparisonPageSchema, quotationSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { VsComparisonV3 } from "@/components/sections/v3/VsComparisonV3";
import { RelatedPagesV3 } from "@/components/sections/v3/RelatedPagesV3";
import { getVsData } from "@/components/sections/v3/VsData";

export const metadata: Metadata = {
  title: "SealMetrics vs GA360 — Datos enterprise por menos",
  description: "GA360 cuesta 150K$+/año y sigue perdiendo 40-60% del tráfico UE. SealMetrics da dato completo desde 499€/mes.",
  openGraph: {
    title: "SealMetrics vs GA360 — Datos enterprise por menos",
    description: "GA360 cuesta 150K$+/año y sigue perdiendo 40-60% del tráfico UE. SealMetrics da dato completo desde 499€/mes.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/es/vs/ga360", languages: getAlternatesEs("/vs/ga360") },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs GA360" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "vs GA360", url: "/es/vs/ga360" }])} />
      <JsonLd data={comparisonPageSchema({
        name: "SealMetrics vs GA360",
        description: "Comparativa lado a lado: SealMetrics vs Google Analytics 360 en completitud de datos, cumplimiento UE, precio y disposicion para IA.",
        url: "/es/vs/ga360",
        competitor: { name: "Google Analytics 360", url: "https://marketingplatform.google.com/about/analytics-360/" },
        datePublished: "2026-04-15",
        dateModified: "2026-05-29",
        author: { name: "Rafa Jiménez", url: "/es/authors/rafa-jimenez" },
        criteria: [
          "Coste anual y duración del contrato",
          "Pérdida de tráfico UE por rechazo de consentimiento",
          "Residencia de datos y postura Schrems II",
          "Umbrales de muestreo en BigQuery export",
          "Tiempo de implementación y especialistas requeridos",
          "Interfaz MCP / IA nativa",
          "Latencia de reporting en tiempo real",
        ],
      })} />
      <JsonLd data={quotationSchema({
        text: "Los datos que entrega SealMetrics son agnósticos, sin sesgo y neutrales. No hay caja negra.",
        spokenBy: "Toni Andújar",
        spokenByRole: "Director Digital y Venta Directa, Palladium Hotel Group",
        url: "/es/vs/ga360",
      })} />
      <VsComparisonV3 data={getVsData("ga360", "es")} dateModified="2026-05-29" />

      <RelatedPagesV3
        locale="es"
        eyebrow="Otras comparativas"
        titleEn="See every SealMetrics comparison"
        titleEs="Ver cada comparativa de SealMetrics"
        pages={[
        { href: "/es/vs-ga4", title: "vs Google Analytics 4", desc: "El default gratis — y su punto ciego UE." },
        { href: "/es/vs/adobe-analytics", title: "vs Adobe Analytics", desc: "Potencia enterprise, cero overhead." },
        { href: "/es/vs/piwik-pro", title: "vs Piwik PRO", desc: "Hosting UE más captura completa." }
      ]}
      />
      <LogosStripEs />
      <section className="bg-warm-white border-t border-warm-100 py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer label="Respuesta rápida">
            <p>
              Google Analytics 360 (GA360) es el tier enterprise de Google Analytics, con precio desde 150.000$/año con contrato anual, alojado en Estados Unidos y requiriendo banner de cookies en toda la UE. SealMetrics es una plataforma de analítica cookieless alojada en UE que captura el 100% del tráfico entrante sin dependencia del consentimiento, atribuye last-click sobre eventos observados y arranca en 499€/mes anual sin compromiso anual.
            </p>
            <p>
              Las diferencias arquitectónicas importan para eCommerce UE: GA360 sigue perdiendo el 40-60% del tráfico UE por rechazo de consentimiento (Consent Mode v2 reconstruye el gap con modelado estadístico, no con medición), y el hosting en US requiere SCCs Schrems II con revisión DPIA trimestral. La infraestructura solo-Dublín de SealMetrics y los cero sub-procesadores fuera de UE eliminan ese overhead de compliance por completo. Lo típico es correr ambos 30 días, conciliar contra el CRM y migrar las decisiones de ingresos a SealMetrics manteniendo GA360 como conducto a Google Ads.
            </p>
          </QuickAnswer>
        </div>
      </section>
    </>
  );
}
