import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { pricingSchema, breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import { PricingPlansV3 } from "@/components/sections/v3/PricingPlansV3";
import {
  PricingHeroV3Es,
  PlanIncludesV3Es,
  TrafficCountingV3Es,
  PlanAdaptsV3Es,
  FullComparisonV3Es,
  PricingFinalCtaV3Es,
} from "@/components/sections/v3/PricingV3SectionsEs";
import { PricingFaqV3 } from "@/components/sections/v3/PricingFaqV3";
import { AgenticSetupSteps } from "@/components/sections/v3/AgenticPlanV3";
import { McpInstaller } from "@/components/sections/v3/McpInstaller";

export const metadata: Metadata = {
  title: "Precios SealMetrics — Paga por humanos, no por bots",
  description:
    "Tier Agentic gratis hasta 1M eventos, configurado desde tu asistente de IA. Planes de pago desde €499/mes anual — todas las features en cada plan. Solo pagas más si creces.",
  openGraph: {
    title: "Precios SealMetrics — Paga por humanos, no por bots",
    description:
      "Analítica completa desde €499/mes. Todas las features en cada plan. Agentes IA gratis. 14 días gratis.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/pricing",
    languages: getAlternatesEs("/pricing"),
  },
};

const faqsForSchema = [
  { question: "¿Qué cuenta como evento humano?", answer: "Cualquier interacción real de un visitante: páginas vistas, clics, conversiones, envíos de formulario, añadir al carrito, suscripciones. El tráfico de agentes IA y bots tradicionales se excluye." },
  { question: "¿Por qué el tráfico de agentes IA es gratis?", answer: "Los agentes IA (ChatGPT, Claude, Perplexity) son una categoría nueva de tráfico sobre la que necesitas visibilidad. Los trackeamos gratis." },
  { question: "¿Qué pasa si supero mi límite de eventos?", answer: "El tracking nunca se detiene. Nunca bloqueamos, limitamos ni muestreamos. Si superas 2+ meses seguidos, el plan se actualiza en el siguiente ciclo. Un mes de exceso al año es gratis." },
  { question: "¿Hay prueba gratuita?", answer: "Sí. Cada plan incluye 14 días gratis con acceso completo." },
  { question: "¿Todas las features están incluidas en cada plan?", answer: "Analítica core, tracking de conversiones, monitoring, API, MCP Server y export BigQuery están incluidos desde Growth. LENS AI y Agent Analytics son features premium disponibles en Scale+." },
  { question: "¿Qué es el Agentic Package?", answer: "Un tier gratuito de SealMetrics que configuras directamente desde tu asistente de IA (Claude Desktop, Codex o cualquier agente compatible con MCP). Tu agente crea la cuenta y genera el píxel — la misma analítica completa sin cookies que Growth, gratis hasta 1M de eventos humanos al mes, self-serve con solo documentación. Al superar 1M, se activa el plan Growth." },
];

export default function PricingPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Precios" }]} locale="es" />
      <JsonLd data={pricingSchema([
        { name: "Agentic", price: "0", description: "1M eventos humanos/mes · gratis · configurado desde tu asistente de IA" },
        { name: "Growth", price: "499", description: "5M eventos humanos/mes · anual" },
        { name: "Scale", price: "899", description: "15M eventos humanos/mes · anual" },
      ], { locale: "es" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Precios", url: "/es/pricing" }])} />

      <PricingHeroV3Es />
      <LogosStripEs />
      <PricingPlansV3 locale="es" />
      <McpInstaller locale="es" />
      <AgenticSetupSteps locale="es" />
      <PlanIncludesV3Es />
      <TrafficCountingV3Es />
      <PlanAdaptsV3Es />
      <FullComparisonV3Es />
      <PricingFaqV3 locale="es" />
      <PricingFinalCtaV3Es />
      <section className="bg-warm-white border-t border-warm-100 py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <QuickAnswer label="Respuesta rápida">
            <p>
              El precio de SealMetrics es analítica enterprise con facturación anual, sin sorpresas por uso. El plan Growth son 499€/mes anual (599€/mes mensual) por 5 millones de eventos humanos al mes; el Scale son 899€/mes anual (1.079€/mes mensual) por 15 millones; Enterprise es a medida para portfolios con eventos ilimitados, procesamiento aislado, SSO/SAML, RBAC, SLA del 99,9% y account manager dedicado. Todos los planes incluyen la misma arquitectura: 100% de captura, atribución last-click, alojado en Dublín, RGPD por diseño y DPA estándar.
            </p>
            <p>
              Para un equipo eCommerce UE con 20K€+/mes en paid media, el plan Growth representa menos del 2,5% del spend en paid — típicamente menos que el coste de una sola decisión mal atribuida. La facturación anual incluye dos meses gratis frente a la mensual. Trial de 14 días gratis; sin migración desde GA4 porque corren en paralelo.
            </p>
          </QuickAnswer>
        </div>
      </section>
    </>
  );
}
