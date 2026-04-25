import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { LogosStripEs } from "@/components/sections/v3/HomeV3Es";
import {
  VsGA4HeroV3,
  VsGA4GapStatsV3,
  VsGA4TableV3,
  RunBothV3,
} from "@/components/sections/v3/VsGA4V3Sections";
import { FaqAccordionV3 } from "@/components/sections/v3/FaqAccordionV3";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "SealMetrics vs Google Analytics 4 — Datos completos, sin rodeos",
  description:
    "Comparativa honesta. GA4 pierde 40–60% del tráfico UE por consentimiento y ad blockers. SealMetrics captura el 100%. Corre ambos 30 días.",
  openGraph: {
    title: "SealMetrics vs Google Analytics 4 — Datos completos, sin rodeos",
    description: "Comparativa feature a feature. Honesta.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/vs-ga4",
    languages: getAlternatesEs("/vs-ga4"),
  },
};

const faqs = [
  { q: "¿Tengo que reemplazar GA4?", a: "No. La mayoría de clientes corren SealMetrics junto a GA4 — de hecho lo recomendamos los primeros 30 días para comparar en paralelo con tus propios números del CRM." },
  { q: "¿SealMetrics se conecta a Google Ads?", a: "Sí, vía export BigQuery y API. Para import nativo de conversiones en Google Ads, puedes mantener GA4 — SealMetrics es tu fuente de verdad para decisiones, GA4 tu conducto a Google Ads." },
  { q: "¿Es realmente sin consentimiento?", a: "Sí. Sin cookies, sin localStorage, sin fingerprinting. Conteo first-party de eventos en servidor, agregado en totales por canal sin ningún identificador personal. Por eso no requiere banner bajo RGPD ni ePrivacy." },
  { q: "¿Cuánto cuesta la migración?", a: "Nada. No hay migración. Añade un script a tu web y corre los dos en paralelo. La mayoría de equipos nunca quitan GA4 del todo — simplemente dejan de tomar decisiones con él." },
  { q: "¿Qué fiabilidad tiene el 40–60% de rechazo de consentimiento?", a: "Es media cross-industry para tráfico UE con un banner estándar. Tu tasa depende de sector, dispositivo y diseño del banner. El gap es menor en B2B, mayor en B2C consumer." },
  { q: "¿Puedo usar los datos en mi BigQuery?", a: "Sí. Export a BigQuery a resolución completa incluido desde el plan Growth — sin ETL, sin muestreo. Tu warehouse recibe cada evento, igual que tu dashboard." },
  { q: "¿Y el tier gratis de GA4? ¿No es una barrera?", a: "GA4 es gratis porque tú eres el producto — tus datos entrenan los modelos de Google Ads. SealMetrics desde €499/mes anual. Para un equipo que invierte €20K+/mes en paid media, es un error de redondeo comparado con el coste de inversión mal asignada sobre datos incompletos." },
];

export default function VsGA4PageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "vs Google Analytics 4" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "vs Google Analytics 4", url: "/es/vs-ga4" }])} />
      <JsonLd data={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      <VsGA4HeroV3 locale="es" />
      <TldrBlock
        label="En resumen"
        answer={
          <>GA4 típicamente pierde el <strong>40–60% del tráfico UE</strong> por rechazo de consentimiento, ad-blockers e Intelligent Tracking Prevention de Apple — y luego reconstruye el resto con modelado estadístico. SealMetrics captura el <strong>100% del tráfico</strong> con un pixel first-party sin cookies, atribuye ingresos last-click sobre datos completos y cumple RGPD por arquitectura. La mayoría de equipos corren ambos 30 días en paralelo y toman decisiones con SealMetrics.</>
        }
        bullets={[
          <>GA4: limitado por consentimiento, muestreado, US-hosted, propiedad de Google — ideal como conducto a Google Ads.</>,
          <>SealMetrics: sin consentimiento, resolución completa, alojado en Dublín — ideal para decidir con ingresos.</>,
          <>Sin migración — instala el pixel junto a GA4 y compara con tus propios números.</>,
        ]}
      />
      <LogosStripEs />
      <VsGA4GapStatsV3 locale="es" />
      <VsGA4TableV3 locale="es" />
      <RunBothV3 locale="es" />
      <FaqAccordionV3
        locale="es"
        items={faqs}
        titleEs={<>Las <em>objeciones</em>, respondidas.</>}
        ledeEs="Lo que CMOs y CTOs realmente preguntan antes de reemplazar (o complementar) GA4."
      />
      <FinalCtaSharedV3
        locale="es"
        titleEn={<>Run both for 30 days. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Then decide.</em></>}
        titleEs={<>Corre los dos 30 días. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Y entonces decide.</em></>}
        ledeEn="Install SealMetrics alongside GA4. Compare with your own CRM."
        ledeEs="Instala SealMetrics junto a GA4. Compara con tu propio CRM. Si el gap no es real, no nos debes nada."
      />
    </>
  );
}
