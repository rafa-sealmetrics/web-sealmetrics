import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { pricingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
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

export const metadata: Metadata = {
  title: "Precios SealMetrics — Paga por humanos, no por bots",
  description:
    "Analítica completa desde €499/mes anual. Todas las features en cada plan. Agentes IA gratis. Solo pagas más si creces. 14 días gratis, sin tarjeta.",
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
  { question: "¿Hay prueba gratuita?", answer: "Sí. Cada plan incluye 14 días gratis con acceso completo. Sin tarjeta." },
  { question: "¿Todas las features están incluidas en cada plan?", answer: "Sí. Analítica core, tracking de conversiones, LENS AI, monitoring, API, MCP Server y export BigQuery están incluidos desde Growth." },
];

export default function PricingPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Precios" }]} locale="es" />
      <JsonLd data={pricingSchema([
        { name: "Growth", price: "499", description: "5M eventos humanos/mes · anual" },
        { name: "Scale", price: "899", description: "15M eventos humanos/mes · anual" },
      ], { locale: "es" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Precios", url: "/es/pricing" }])} />
      <JsonLd data={faqSchema(faqsForSchema)} />

      <PricingHeroV3Es />
      <LogosStripEs />
      <PricingPlansV3 locale="es" />
      <PlanIncludesV3Es />
      <TrafficCountingV3Es />
      <PlanAdaptsV3Es />
      <FullComparisonV3Es />
      <PricingFaqV3 locale="es" />
      <PricingFinalCtaV3Es />
    </>
  );
}
