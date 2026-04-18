import type { Metadata } from "next";
import { type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationSchema, softwareApplicationSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { Logos } from "@/components/sections/Logos";

export const metadata: Metadata = {
  title: "SealMetrics — Analítica Completa para eCommerce, Sin Cookies",
  description:
    "Descubre qué canales generan tus ventas. SealMetrics captura el 100% de tu tráfico y conversiones — sin cookies ni banners de consentimiento.",
  openGraph: {
    title: "SealMetrics — Analítica Completa para eCommerce, Sin Cookies",
    description:
      "Descubre qué canales generan tus ventas. Datos completos del 100% de tu tráfico para escalar lo que funciona — no lo que GA4 muestra.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es",
    languages: getAlternatesEs("/"),
  },
};

/* ================================================================
   DATA
   ================================================================ */

/* --- Scenarios bento cards --- */

interface ScenarioCard {
  title: string;
  desc: string;
  outcome: string;
  visual: ReactNode;
  ga4?: string;
  complete?: string;
}

const scenarioCards: ScenarioCard[] = [
  {
    title: "Descubre qué canales generan ingresos realmente",
    desc: "Tu GA4 dice que orgánico aporta el 12% de los ingresos. La cifra real es 4x mayor — pero no puedes verla porque GA4 perdió esas sesiones.",
    ga4: "340 conversiones atribuidas",
    complete: "1.290 conversiones registradas",
    outcome: "Orgánico era 4x mayor de lo que mostraba GA4 — presupuesto reasignado.",
    visual: (
      <div className="flex items-end gap-2 h-12 mb-5">
        <div className="w-6 bg-warm-200 rounded-[2px]" style={{ height: "30%" }} />
        <div className="w-6 bg-warm-200 rounded-[2px]" style={{ height: "20%" }} />
        <div className="w-6 bg-green-muted rounded-[2px]" style={{ height: "100%" }} />
        <div className="w-6 bg-warm-200 rounded-[2px]" style={{ height: "45%" }} />
        <div className="w-6 bg-warm-200 rounded-[2px]" style={{ height: "15%" }} />
      </div>
    ),
  },
  {
    title: "Encuentra las campañas que vale la pena escalar",
    desc: "Tu campaña de Meta parece que está en punto muerto.",
    ga4: "340 conversiones registradas",
    complete: "1.290 conversiones reales",
    outcome: "El ROAS real era 3,8x — la campaña merecía 3x más presupuesto.",
    visual: (
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-[1.1rem] text-warm-300 line-through">340</span>
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-muted">
          <path d="M1 6h16M13 1l5 5-5 5" />
        </svg>
        <span className="font-mono text-[1.1rem] text-green-muted font-medium">1.290</span>
      </div>
    ),
  },
  {
    title: "Detecta problemas antes de que te cuesten dinero",
    desc: "Un error en la página de pago pasa desapercibido durante 14 horas.",
    ga4: "Ves una caída de conversiones... mañana",
    complete: "LENS AI te alerta a las 3 AM con la causa raíz",
    outcome: "Resuelto en 20 minutos en vez de perder un día entero de facturación.",
    visual: (
      <div className="flex items-center gap-2 mb-5">
        <span className="inline-block w-2 h-2 rounded-full bg-green-muted animate-pulse" />
        <span className="font-mono text-[0.8rem] text-green-muted">LENS AI — alerta activada</span>
      </div>
    ),
  },
  {
    title: "Reporta cifras en las que tu CFO confíe",
    desc: "Tu consejo ve números diferentes en cada herramienta. GA4 muestrea datos y modela conversiones. SealMetrics observa todo — cero estimación, cero discrepancias.",
    ga4: "Datos muestreados, conversiones modeladas",
    complete: "100% datos observados, cero muestreo",
    outcome: "Una sola fuente de verdad — sin defender discrepancias.",
    visual: (
      <div className="font-mono text-[0.8rem] text-text-tertiary mb-5 space-y-1.5">
        <div className="flex justify-between max-w-[180px]">
          <span>Muestreo</span>
          <span className="text-green-muted font-medium">0%</span>
        </div>
        <div className="flex justify-between max-w-[180px]">
          <span>Cobertura</span>
          <span className="text-green-muted font-medium">100%</span>
        </div>
        <div className="flex justify-between max-w-[180px]">
          <span>Modelado</span>
          <span className="text-green-muted font-medium">0%</span>
        </div>
      </div>
    ),
  },
  {
    title: "Estadísticas en tiempo real, incluso en Black Friday",
    desc: "Mientras GA4 retrasa datos horas o los muestrea durante picos de tráfico, SealMetrics muestra todo en tiempo real. Cada venta, cada fuente, cada conversión — según ocurre, incluso en Black Friday.",
    outcome: "Reacciona a lo que pasa ahora, no a lo que pasó ayer.",
    visual: (
      <div className="flex items-center gap-2 mb-5">
        <span className="inline-block w-2 h-2 rounded-full bg-green-muted animate-pulse" />
        <span className="font-mono text-[0.8rem] text-text-tertiary">
          En vivo &mdash;{" "}
          <span className="text-green-muted font-medium">2.847</span> visitantes ahora
        </span>
      </div>
    ),
  },
  {
    title: "SuperAPI: el mejor aliado de tu equipo de datos",
    desc: "Una API que sirve datos analíticos en crudo a cualquier herramienta — dashboards de BI, data warehouses, modelos personalizados. Sin límites de exportación, sin cuotas.",
    outcome: "Tu equipo de datos construye sobre datos completos, no sobre exportaciones muestreadas.",
    visual: (
      <div className="font-mono text-[0.75rem] text-text-tertiary mb-5 space-y-0.5">
        <div><span className="text-green-muted">GET</span> /api/v1/conversions</div>
        <div><span className="text-green-muted">GET</span> /api/v1/sources</div>
        <div><span className="text-green-muted">GET</span> /api/v1/journeys</div>
      </div>
    ),
  },
  {
    title: "Sin banner de consentimiento. Más conversiones.",
    desc: "SealMetrics es cookieless por arquitectura. Sin cookies significa sin banner de consentimiento. Nuestros clientes reportan un 8% menos de rebote desde el primer día.",
    outcome: "Elimina fricción, recupera conversiones — y cumple al 100% con el RGPD.",
    visual: (
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-[0.8rem] text-warm-300 line-through">Banner de cookies</span>
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-muted">
          <path d="M1 6h16M13 1l5 5-5 5" />
        </svg>
        <span className="font-mono text-[0.8rem] text-green-muted font-medium">UX limpia</span>
      </div>
    ),
  },
  {
    title: "MCP: pregúntale lo que quieras a tus datos",
    desc: "Conecta SealMetrics a Claude, ChatGPT o cualquier asistente de IA vía MCP. Haz preguntas en lenguaje natural y obtén respuestas de tus datos analíticos reales — sin dashboards, sin SQL, sin esperar a tu analista.",
    outcome: "Los insights que antes requerían una reunión ahora requieren una frase.",
    visual: (
      <div className="font-mono text-[0.75rem] mb-5 space-y-1.5">
        <div className="p-2 bg-white border border-warm-100 rounded-[4px]">
          <span className="text-text-tertiary">&gt; </span>
          <span className="text-text-secondary">¿Qué SKUs se añaden más al carrito pero se compran menos?</span>
        </div>
        <div className="p-2 bg-white border border-warm-100 rounded-[4px]">
          <span className="text-text-tertiary">&gt; </span>
          <span className="text-text-secondary">¿Qué SKUs están en tendencia y podrían despuntar el mes que viene?</span>
        </div>
        <div className="p-2 bg-white border border-warm-100 rounded-[4px]">
          <span className="text-text-tertiary">&gt; </span>
          <span className="text-text-secondary">¿Qué campaña generó más ingresos el martes pasado?</span>
        </div>
        <div className="p-2 bg-white border border-warm-100 rounded-[4px]">
          <span className="text-text-tertiary">&gt; </span>
          <span className="text-text-secondary">¿Qué landing pages tienen mayor abandono antes de la compra?</span>
        </div>
        <div className="p-2 bg-white border border-warm-100 rounded-[4px]">
          <span className="text-text-tertiary">&gt; </span>
          <span className="text-text-secondary">Compara ingresos de paid vs orgánico este mes vs el mes pasado.</span>
        </div>
      </div>
    ),
  },
];

/* --- Journey Comparison cards --- */

const revenueCards = [
  {
    title: "Conoce tus canales más rentables de verdad",
    withGA4: "GA4 atribuye el 40-60% de las conversiones a \"directo / ninguno\" porque las cookies fueron bloqueadas. Ves un mix de canales distorsionado.",
    withSeal: "SealMetrics rastrea cada sesión sin cookies. Ves qué canales generan compras realmente — y cuánto invertir en cada uno.",
  },
  {
    title: "Encuentra páginas de producto que pierden ingresos",
    withGA4: "GA4 muestrea las páginas de alto tráfico, así que un producto con 12.000 visitas y un 0,3% de conversión parece normal en datos agregados.",
    withSeal: "Con el 100% de los datos detectas las páginas exactas donde los visitantes tienen alta intención de compra pero abandonan. Arregla la página, no el presupuesto de ads.",
  },
  {
    title: "Mide el ROAS real de tus campañas",
    withGA4: "GA4 registró 340 conversiones de tu campaña de Meta. Parece que está en punto muerto. ¿La recortas?",
    withSeal: "SealMetrics registró 1.290 conversiones reales de la misma campaña. El ROAS real es 3,8x. La escalas en vez de eliminarla.",
  },
  {
    title: "Descubre qué emails y promociones venden de verdad",
    withGA4: "Un cliente hace clic en tu email del martes, navega y compra el viernes. GA4 atribuye la venta a \"directo\" porque la cookie de sesión expiró.",
    withSeal: "SealMetrics atribuye la conversión a la campaña de email que inició la visita — porque no depende de cookies para conectar sesiones.",
  },
  {
    title: "Vende en cualquier mercado sin puntos ciegos",
    withGA4: "¿Expandiéndote a Francia, Alemania o Brasil? Cada país tiene leyes de consentimiento diferentes. GA4 pierde más tráfico donde la regulación es más estricta.",
    withSeal: "SealMetrics funciona sin consentimiento en todo el mundo. Cumplimos con RGPD, ePrivacy, LGPD, POPIA y toda regulación de privacidad relevante. Mismos datos al 100% en cada mercado.",
  },
  {
    title: "Reacciona en tiempo real en picos de ventas",
    withGA4: "Black Friday a las 10 AM. Los datos de GA4 van 4-8 horas retrasados y el muestreo se activa con alto tráfico. Estás a ciegas en el peor momento.",
    withSeal: "SealMetrics muestra datos en tiempo real con cero muestreo, incluso en tus momentos de mayor tráfico. Y nuestro píxel de 846 bytes significa cero impacto en la velocidad de carga — tu web sigue rápida cuando más importa.",
  },
];

const costCards = [
  {
    title: "Recorta gasto en campañas que no convierten",
    withGA4: "GA4 dice que tu campaña de Meta genera 40 conversiones/mes. Sigues financiándola basándote en esa cifra.",
    withSeal: "SealMetrics muestra que el número real es 6. Recortas 3.200 euros/mes en gasto desperdiciado y lo reasignas a lo que funciona de verdad.",
  },
  {
    title: "Elimina tu banner de consentimiento y recupera tráfico",
    withGA4: "El 40-60% de los visitantes europeos rechazan cookies. GA4 los pierde por completo. Tu tasa de rebote incluye un popup que añade fricción antes de que el visitante vea tu producto.",
    withSeal: "SealMetrics no necesita cookies ni banner de consentimiento. Nuestros clientes ven un 8% menos de rebote desde el primer día. Esos son ingresos que estabas perdiendo por un popup.",
  },
  {
    title: "Deja de sobrefinanciar los canales equivocados",
    withGA4: "GA4 dice que paid search genera el 45% de los ingresos. Construyes todo tu presupuesto alrededor de esa cifra.",
    withSeal: "SealMetrics muestra que el número real es 28%. Has estado gastando de más 12.000 euros/mes en un canal que es la mitad de efectivo de lo que creías.",
  },
  {
    title: "Detecta páginas rotas antes de que te cuesten un día entero",
    withGA4: "Un error JavaScript en tu checkout falla silenciosamente para el 3% de los visitantes. GA4 muestra una caída vaga en conversiones... 24 horas después.",
    withSeal: "LENS AI monitoriza más de 60 reglas y lo detecta en minutos. 900 transacciones pérdidas al mes prevenidas, no descubiertas después del hecho.",
  },
  {
    title: "Acaba con la reunión semanal de reconciliación de datos",
    withGA4: "GA4 dice 1.200 conversiones. Tu CRM dice 1.800. Tu plataforma de ads dice 2.100. Tu equipo dedica 6 horas por semana a explicar la diferencia al consejo.",
    withSeal: "SealMetrics es una sola fuente de verdad — 100% datos observados, cero muestreo, cero modelado. Los números cuadran porque son los números reales.",
  },
  {
    title: "Mantén tu web rápida — tu equipo SEO te lo agradecerá",
    withGA4: "El gtag.js de GA4 añade 80-90KB a cada carga de página. Más tu CMP, herramienta de heatmap y grabador de sesiones. Cada script ralentiza tus Core Web Vitals.",
    withSeal: "El píxel de SealMetrics pesa 846 bytes. Eso es 100x más ligero que GA4. Tus páginas cargan más rápido, tus CWV mejoran, y tu equipo SEO deja de quejarse de los scripts de analítica.",
  },
];

/* --- Funnel steps --- */

const funnelSteps = [
  {
    label: "Visitantes Web",
    seal: "124.800",
    ga4: "~43.700",
    ga4Loss: 65,
    detail: "GA4 solo ve a los visitantes que aceptan cookies. Te estás perdiendo la mayoría de tu tráfico real desde el primer paso.",
    filters: ["UTM source", "UTM medium", "UTM campaign", "País", "Dispositivo"],
  },
  {
    label: "Vistas de Categoría",
    seal: "87.360",
    ga4: "~39.300",
    ga4Loss: 55,
    drop: "30% abandonan",
    detail: "¿Qué categorías atraen navegantes vs. compradores? GA4 no puede decírtelo — perdió a la mayoría de esos visitantes en la puerta.",
    filters: ["Categoría", "Landing page", "UTM source", "UTM medium", "UTM campaign", "Dispositivo"],
  },
  {
    label: "Vistas de Producto",
    seal: "54.600",
    ga4: "~30.000",
    ga4Loss: 45,
    drop: "37% abandonan",
    detail: "¿Qué SKUs reciben vistas pero nunca llegan al carrito? Con datos muestreados, GA4 estima. SealMetrics muestra cada interacción de producto.",
    filters: ["SKU", "Producto", "Talla", "Color", "Rango de precio", "UTM source", "UTM campaign"],
  },
  {
    label: "Añadir al Carrito",
    seal: "16.380",
    ga4: "~10.200",
    ga4Loss: 38,
    drop: "70% abandonan",
    detail: "¿Qué productos se añaden más al carrito pero se compran menos? GA4 apenas ve la mitad de estos eventos.",
    filters: ["SKU", "Talla", "Color", "Valor del carrito", "UTM source", "UTM medium", "UTM campaign"],
  },
  {
    label: "Iniciar Checkout",
    seal: "9.828",
    ga4: "~6.900",
    ga4Loss: 30,
    drop: "40% abandonan",
    detail: "¿En qué paso del checkout abandonan los carritos de alto valor? GA4 muestra una estimación muestreada. SealMetrics muestra el paso exacto, para cada visitante.",
    filters: ["Paso de checkout", "Método de pago", "Valor del carrito", "UTM source", "UTM campaign", "Dispositivo"],
  },
  {
    label: "Compra",
    seal: "5.897",
    ga4: "~4.400",
    ga4Loss: 25,
    drop: "40% abandonan",
    detail: "GA4 registró ~4.400 compras. El número real es 5.897. Cada decisión de presupuesto que tomas se basa en conversiones incompletas.",
    filters: ["SKU", "Valor del pedido", "Código de cupón", "UTM source", "UTM medium", "UTM campaign"],
  },
];

/* --- Social proof --- */

const caseMetrics = [
  { label: "Visitantes rastreados", before: "12.400/mes", after: "47.200" },
  { label: "Conversiones registradas", before: "340/mes", after: "1.290" },
  { label: "Ingresos atribuidos", before: "89K\u20AC/mes", after: "342K\u20AC" },
  { label: "Mejora de ROAS", before: "Base", after: "+40%" },
];

const testimonials = [
  {
    text: "Estábamos subreportando conversiones en más de un 600%. Nuestro consejo de dirección tomaba decisiones de inversión con números fundamentalmente erróneos.",
    title: "CMO",
    role: "eCommerce internacional, 25M\u20AC facturación",
  },
  {
    text: "LENS AI detectó una caída de conversiones por un error en la página de pago a las 3 AM. Cuando nuestro equipo llegó, la alerta ya había identificado la causa raíz.",
    title: "VP de Marketing",
    role: "Travel & Hospitality, 60M\u20AC facturación",
  },
];

/* --- FAQ --- */

interface Faq {
  q: string;
  aText: string;
  aJsx: ReactNode;
}

const faqs: Faq[] = [
  {
    q: "¿Por qué pagar por SealMetrics si GA4 es gratis?",
    aText: "GA4 es gratis porque tú eres el producto — tus datos entrenan los modelos publicitarios de Google. Pero el problema real es que GA4 depende de cookies que la mayoría de visitantes rechazan o bloquean. Tomas decisiones de presupuesto sobre una fracción de tus datos reales. SealMetrics captura el 100% de tu tráfico sin cookies, para que cada euro invertido se base en información completa. El coste de SealMetrics es insignificante comparado con el coste de asignar mal el presupuesto publicitario.",
    aJsx: (
      <>
        GA4 es gratis porque tú eres el producto — tus datos entrenan los
        modelos publicitarios de Google. Pero el problema real es que GA4
        depende de cookies que la mayoría de visitantes rechazan o bloquean.
        Tomas decisiones de presupuesto sobre una fracción de tus datos reales.
        SealMetrics captura el 100% de tu tráfico sin cookies, para que cada
        euro invertido se base en información completa. El coste de SealMetrics
        es insignificante comparado con el coste de asignar mal el presupuesto
        publicitario. Consulta nuestra{" "}
        <Link href="/vs-ga4" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
          comparativa completa con GA4
        </Link>.
      </>
    ),
  },
  {
    q: "¿Es realmente preciso el tracking sin cookies?",
    aText: "SealMetrics utiliza identificación server-side para reconocer visitantes sin cookies. Nuestros clientes registran consistentemente 3-4x más conversiones que las herramientas basadas en cookies funcionando en el mismo sitio. Sin muestreo, sin modelado, sin estimación — cada dato es observado, no inferido.",
    aJsx: (
      <>
        SealMetrics utiliza identificación server-side para reconocer visitantes
        sin cookies. Nuestros clientes registran consistentemente 3-4x más
        conversiones que las herramientas basadas en cookies funcionando en el
        mismo sitio. Sin{" "}
        <Link href="/glossary/data-sampling" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
          muestreo
        </Link>
        , sin modelado, sin estimación — cada dato es observado, no inferido.
      </>
    ),
  },
  {
    q: "¿Tengo que eliminar GA4?",
    aText: "No. La mayoría de clientes ejecutan SealMetrics junto a GA4. De hecho, lo recomendamos durante los primeros 30 días para que compares los datos lado a lado. Después de ver la diferencia, la mayoría de equipos usan SealMetrics como fuente de verdad y mantienen GA4 para la integración con Google Ads.",
    aJsx: (
      <>
        No. La mayoría de clientes ejecutan SealMetrics junto a GA4. De hecho,
        lo recomendamos durante los primeros 30 días para que compares los datos
        lado a lado. Después de ver la diferencia, la mayoría de equipos usan
        SealMetrics como fuente de verdad y mantienen GA4 para la integración
        con Google Ads.
      </>
    ),
  },
  {
    q: "¿Es compatible con RGPD sin banner de consentimiento?",
    aText: "Sí. SealMetrics es cookieless por arquitectura — sin cookies, sin almacenamiento de datos personales, sin tracking cross-site. Nuestra infraestructura está 100% alojada en la UE (España y Alemania). Cumplimos con RGPD, ePrivacy y Schrems II sin necesidad de banners de consentimiento. Puedes eliminar tu banner de cookies por completo.",
    aJsx: (
      <>
        Sí. SealMetrics es cookieless por arquitectura — sin cookies, sin
        almacenamiento de datos personales, sin tracking cross-site. Nuestra
        infraestructura está 100% alojada en la UE (España y Alemania).
        Cumplimos con RGPD, ePrivacy y Schrems II sin necesidad de{" "}
        <Link href="/glossary/consent-management-platform" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
          banners de consentimiento
        </Link>
        . Más sobre nuestra{" "}
        <Link href="/es/security" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
          seguridad y cumplimiento
        </Link>.
      </>
    ),
  },
  {
    q: "¿Cuánto tarda la implementación?",
    aText: "5 minutos. Añades un solo script a tu web — igual que GA4. Sin cambios de código, sin configurar tag managers, sin sprints de desarrollo. Los datos aparecen desde la primera hora. Nuestro equipo gestiona el onboarding completo y te ayuda a configurar objetivos, funnels e informes en la primera semana.",
    aJsx: (
      <>
        5 minutos. Añades un solo script a tu web — igual que GA4. Sin cambios
        de código, sin configurar tag managers, sin sprints de desarrollo. Los
        datos aparecen desde la primera hora. Nuestro equipo gestiona el
        onboarding completo y te ayuda a configurar objetivos, funnels e
        informes en la primera semana.{" "}
        <Link href="/es/how-it-works" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
          Descubre cómo funciona
        </Link>.
      </>
    ),
  },
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.aText,
    },
  })),
};

/* ================================================================
   COMPONENTS
   ================================================================ */

function BentoCard({ card, large }: { card: ScenarioCard; large: boolean }) {
  return (
    <div className={`p-8 border border-warm-100 rounded-[4px] bg-warm-white ${large ? "md:col-span-2" : "md:col-span-1"}`}>
      {card.visual}
      <h3 className={`font-medium text-text-primary mb-3 ${large ? "text-[1.2rem]" : "text-[1.05rem]"}`}>
        {card.title}
      </h3>
      <p className="text-[0.9rem] text-text-secondary mb-4 leading-[1.7]">
        {card.desc}
      </p>
      {card.ga4 && card.complete && (
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-[0.85rem]">
            <span className="text-text-tertiary shrink-0">GA4:</span>
            <span className="text-text-secondary">{card.ga4}</span>
          </div>
          <div className="flex items-start gap-2 text-[0.85rem]">
            <span className="text-green-muted shrink-0">Completo:</span>
            <span className="text-text-primary font-medium">{card.complete}</span>
          </div>
        </div>
      )}
      <p className="text-[0.85rem] text-green-muted font-medium">
        {card.outcome}
      </p>
    </div>
  );
}

/* ================================================================
   PAGE
   ================================================================ */

export default function HomeEs() {
  const pairedCards = scenarioCards.slice(0, 8);
  const mcpCard = scenarioCards[8];

  const rows: [ScenarioCard, ScenarioCard][] = [];
  for (let i = 0; i < pairedCards.length; i += 2) {
    rows.push([pairedCards[i], pairedCards[i + 1]]);
  }

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqSchemaData} />

      {/* ============================================================
          HERO DARK
          ============================================================ */}
      <section className="section-dark bg-dark-bg pt-32 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="headline-hero mb-6">
                Descubre exactamente qué canales generan tus ventas.
              </h1>
              <p className="text-[1.15rem] leading-[1.7] text-dark-text-secondary mb-10 max-w-[520px]">
                SealMetrics es una plataforma de{" "}
                <Link href="/glossary/cookieless-analytics" className="text-dark-text no-underline border-b border-dark-border hover:border-dark-text-secondary transition-colors">
                  analítica cookieless
                </Link>{" "}
                para equipos de eCommerce. Captura el 100% de tu tráfico
                y conversiones — cada visitante, cada euro atribuido — sin
                cookies ni banners de consentimiento. La{" "}
                <Link href="/vs-ga4" className="text-dark-text no-underline border-b border-dark-border hover:border-dark-text-secondary transition-colors">
                  alternativa a GA4
                </Link>{" "}
                diseñada para datos completos.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/es/demo"
                  className="inline-flex items-center px-8 py-3.5 text-[0.95rem] font-medium text-dark-bg bg-white rounded-[4px] no-underline hover:bg-warm-50 transition-colors"
                >
                  Solicitar Demo
                </Link>
                <Link
                  href="/es/growth-calculator"
                  className="inline-flex items-center px-8 py-3.5 text-[0.95rem] font-medium text-dark-text border border-dark-border rounded-[4px] no-underline hover:border-dark-text-secondary transition-colors"
                >
                  Descubre lo que te pierdes
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="border border-dark-border rounded-[4px] overflow-hidden">
                <Image
                  src="/screenshots/dashboard-overview.png"
                  alt="Panel de SealMetrics mostrando atribución completa de tráfico por canal"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="transition-to-light" />

      {/* ============================================================
          LOGOS
          ============================================================ */}
      <Logos colorful />

      {/* ============================================================
          SCENARIOS (Bento grid)
          ============================================================ */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Esto es lo que puedes hacer con datos completos.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-16 max-w-[600px]">
            Cuando ves el 100% de tu tráfico y conversiones, dejas de suponer y
            empiezas a tomar decisiones que generan ingresos. Esto es lo que nuestra{" "}
            <Link href="/es/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
              plataforma de analítica para eCommerce
            </Link>{" "}
            hace posible.
          </p>

          <div className="space-y-6">
            {rows.map((row, i) => {
              const evenRow = i % 2 === 0;
              return (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {evenRow ? (
                    <>
                      <BentoCard card={row[0]} large />
                      <BentoCard card={row[1]} large={false} />
                    </>
                  ) : (
                    <>
                      <BentoCard card={row[0]} large={false} />
                      <BentoCard card={row[1]} large />
                    </>
                  )}
                </div>
              );
            })}

            {/* MCP — full-width featured card */}
            {mcpCard && (
              <div className="p-8 md:p-10 border border-warm-100 rounded-[4px] bg-warm-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-[1.3rem] font-medium text-text-primary mb-3">
                      {mcpCard.title}
                    </h3>
                    <p className="text-[0.95rem] text-text-secondary mb-4 leading-[1.7]">
                      {mcpCard.desc}
                    </p>
                    <p className="text-[0.85rem] text-green-muted font-medium mb-6">
                      {mcpCard.outcome}
                    </p>
                    <div className="border border-warm-100 rounded-[4px] overflow-hidden">
                      <Image
                        src="/screenshots/dashboard-property-skus.png"
                        alt="Análisis de propiedades de SealMetrics mostrando datos de conversión a nivel de SKU por fuente, medio y campaña"
                        width={1080}
                        height={900}
                        className="w-full h-auto"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div>{mcpCard.visual}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          JOURNEY COMPARISON (Revenue + Costs)
          ============================================================ */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          {/* Increase revenue */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-muted">
                <path d="M10 16V4M5 9l5-5 5 5" />
              </svg>
              <span className="text-[0.8rem] font-medium uppercase tracking-[0.06em] text-green-muted">
                Ingresos
              </span>
            </div>
            <h2 className="headline-section mb-4">
              Encuentra ingresos que no sabías que tenías.
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-12 max-w-[560px]">
              Tu eCommerce ya genera más ingresos de los que GA4 puede mostrarte.
              Esto es lo que cambia cuando ves el 100% de tus datos con{" "}
              <Link href="/glossary/revenue-attribution" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
                atribución de ingresos
              </Link>{" "}
              completa.
            </p>
            <div className="mb-10 border border-green-muted/20 rounded-[4px] overflow-hidden">
              <Image
                src="/screenshots/dashboard-traffic-sources.png"
                alt="Informe de tráfico por fuente de SealMetrics mostrando atribución de ingresos en canales orgánico, CPC, afiliados, Facebook y newsletter"
                width={1080}
                height={960}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {revenueCards.map((card) => (
                <div
                  key={card.title}
                  className="p-6 border border-green-muted/20 rounded-[4px] bg-white"
                >
                  <h3 className="text-[0.95rem] font-medium text-text-primary mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="inline-block text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-1">
                        Con GA4
                      </span>
                      <p className="text-[0.83rem] leading-[1.65] text-text-secondary">
                        {card.withGA4}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-warm-100">
                      <span className="inline-block text-[0.7rem] font-medium uppercase tracking-[0.06em] text-green-muted mb-1">
                        Con SealMetrics
                      </span>
                      <p className="text-[0.83rem] leading-[1.65] text-text-primary font-medium">
                        {card.withSeal}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reduce costs */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-red-alert">
                <path d="M10 4v12M5 11l5 5 5-5" />
              </svg>
              <span className="text-[0.8rem] font-medium uppercase tracking-[0.06em] text-red-alert">
                Costes
              </span>
            </div>
            <h2 className="headline-section mb-4">
              Deja de gastar en lo que no funciona.
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-12 max-w-[560px]">
              Los datos incompletos ocultan el desperdicio. La{" "}
              <Link href="/glossary/data-loss-in-analytics" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
                pérdida de datos en analítica
              </Link>{" "}
              significa que no puedes ver dónde se escapa el dinero — ni cómo pararlo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {costCards.map((card) => (
                <div
                  key={card.title}
                  className="p-6 border border-warm-100 rounded-[4px] bg-white"
                >
                  <h3 className="text-[0.95rem] font-medium text-text-primary mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="inline-block text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-1">
                        Con GA4
                      </span>
                      <p className="text-[0.83rem] leading-[1.65] text-text-secondary">
                        {card.withGA4}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-warm-100">
                      <span className="inline-block text-[0.7rem] font-medium uppercase tracking-[0.06em] text-green-muted mb-1">
                        Con SealMetrics
                      </span>
                      <p className="text-[0.83rem] leading-[1.65] text-text-primary font-medium">
                        {card.withSeal}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FUNNEL BREAKDOWN
          ============================================================ */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Ve exactamente dónde pierdes clientes — y por qué.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-6 max-w-[600px]">
            GA4 te muestra un funnel muestreado construido sobre una fracción de
            tu tráfico. SealMetrics muestra cada paso con el 100% de tus datos —
            filtrable por UTM, SKU, talla, color y cualquier dimensión que tu
            equipo necesite.
          </p>
          <p className="text-[0.85rem] text-text-tertiary mb-14">
            Ejemplo: eCommerce con 124.800 visitantes mensuales reales.
          </p>

          <div className="space-y-0">
            {funnelSteps.map((step, i) => {
              const isFirst = i === 0;
              const isLast = i === funnelSteps.length - 1;
              const widthPct = 100 - (i * 12);

              return (
                <div key={step.label}>
                  {!isFirst && step.drop && (
                    <div className="flex items-center justify-center py-2">
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-red-alert">
                          <path d="M7 2v10M4 9l3 3 3-3" />
                        </svg>
                        <span className="font-mono text-[0.75rem] text-red-alert">
                          {step.drop}
                        </span>
                      </div>
                    </div>
                  )}

                  <div
                    className="mx-auto"
                    style={{ width: `${widthPct}%`, minWidth: "280px" }}
                  >
                    <div
                      className={`p-5 border rounded-[4px] ${
                        isLast
                          ? "border-green-muted/30 bg-green-muted/5"
                          : "border-warm-100 bg-warm-white"
                      }`}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className={`text-[0.95rem] font-medium ${isLast ? "text-green-muted" : "text-text-primary"}`}>
                          {step.label}
                        </h3>
                        <span className={`font-mono text-[1.1rem] font-medium ${isLast ? "text-green-muted" : "text-text-primary"}`}>
                          {step.seal}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[0.75rem] text-text-tertiary">
                          Lo que ves con GA4:
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[0.8rem] text-text-tertiary">
                            {step.ga4}
                          </span>
                          <span className="font-mono text-[0.7rem] text-red-alert">
                            &minus;{step.ga4Loss}%
                          </span>
                        </div>
                      </div>

                      <p className="text-[0.8rem] text-text-secondary mb-3 leading-relaxed">
                        {step.detail}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {step.filters.map((f) => (
                          <span
                            key={f}
                            className="inline-block px-2 py-0.5 text-[0.7rem] font-mono text-text-tertiary bg-white border border-warm-100 rounded-[3px]"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 border border-warm-100 rounded-[4px] overflow-hidden">
            <Image
              src="/screenshots/dashboard-funnel.png"
              alt="Informe de funnel de SealMetrics mostrando la progresión de conversión desde entradas hasta compra, filtrable por parámetros UTM"
              width={1080}
              height={1060}
              className="w-full h-auto"
              unoptimized
            />
          </div>

          <p className="text-center mt-12 text-[0.95rem] text-text-secondary max-w-[520px] mx-auto">
            Cada paso. Cada producto. Cada filtro. Sobre el 100% de tu tráfico —
            no una{" "}
            <Link href="/glossary/data-sampling" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
              estimación muestreada
            </Link>.
          </p>
        </div>
      </section>

      {/* ============================================================
          SOCIAL PROOF
          ============================================================ */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Resultados reales de equipos de eCommerce.
          </h2>
          {/* Case study */}
          <div className="mb-20">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Caso de Estudio
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <blockquote className="text-[1.25rem] leading-relaxed text-text-primary mb-6 pl-6 border-l-2 border-warm-200">
                  &ldquo;Pensábamos que nuestras analíticas eran precisas.
                  SealMetrics nos demostró que perdíamos el 74% de nuestras
                  conversiones. Cada decisión de presupuesto que habíamos tomado
                  era incorrecta.&rdquo;
                </blockquote>
                <div>
                  <div className="font-medium text-[0.9rem] text-text-primary">
                    Head of Digital Marketing
                  </div>
                  <div className="text-[0.8rem] text-text-secondary mt-0.5">
                    Retailer de moda europeo &mdash; 45M&euro; facturación anual
                  </div>
                </div>
                <Link
                  href="/case-studies"
                  className="inline-block mt-4 text-[0.85rem] text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors"
                >
                  Leer más casos de estudio
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {caseMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-5 bg-white border border-warm-100 rounded-[4px]"
                  >
                    <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-2">
                      {m.label}
                    </div>
                    <div className="font-mono text-[0.8rem] text-text-tertiary line-through mb-0.5">
                      {m.before}
                    </div>
                    <div className="font-mono text-[1.5rem] font-medium text-text-primary">
                      {m.after}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {testimonials.map((t) => (
              <div
                key={t.title}
                className="p-7 border border-warm-100 rounded-[4px] bg-white"
              >
                <p className="text-[0.95rem] leading-[1.7] text-text-body mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-warm-100 flex items-center justify-center text-[0.8rem] font-medium text-text-tertiary shrink-0">
                    {t.title.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-[0.85rem] text-text-primary">
                      {t.title}
                    </div>
                    <div className="text-[0.8rem] text-text-secondary">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Founder note */}
          <div className="max-w-[640px] mx-auto flex flex-col sm:flex-row items-start gap-6 pt-12 border-t border-warm-100">
            <div className="w-14 h-14 rounded-full bg-warm-200 flex items-center justify-center text-[1rem] font-medium text-text-secondary shrink-0">
              RJ
            </div>
            <div>
              <p className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-2">
                Creado por un fundador, atendido por un fundador
              </p>
              <p className="text-[0.95rem] text-text-primary leading-relaxed mb-3">
                Cada cliente tiene acceso directo a mí. No a un ticket de soporte.
                A mí. Creé SealMetrics porque los equipos de eCommerce merecen
                tomar decisiones con datos completos.
              </p>
              <p className="text-[0.9rem] font-medium text-text-primary">
                Rafa Jim&eacute;nez
              </p>
              <a
                href="https://www.linkedin.com/in/rafajimenez/"
                className="text-[0.8rem] text-text-tertiary no-underline hover:text-text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fundador, SealMetrics &rarr; LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS
          ============================================================ */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            De la instalación al insight en una semana.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-16 max-w-[520px]">
            SealMetrics funciona junto a tu analítica actual. Sin migración, sin
            interrupciones. Consulta la{" "}
            <Link
              href="/es/product"
              className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors"
            >
              descripción completa del producto
            </Link>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-warm-200 font-mono text-[0.8rem] text-text-tertiary">
                  1
                </span>
                <span className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary">
                  5 minutos
                </span>
              </div>
              <h3 className="text-[1.1rem] font-medium text-text-primary mb-3">
                Instala
              </h3>
              <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                Un solo script. Funciona junto a GA4. Sin cambios de código, sin
                banners de cookies, sin interrumpir tu configuración actual.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-warm-200 font-mono text-[0.8rem] text-text-tertiary">
                  2
                </span>
                <span className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary">
                  Día 1
                </span>
              </div>
              <h3 className="text-[1.1rem] font-medium text-text-primary mb-3">
                Ve todo tu tráfico
              </h3>
              <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                Datos completos desde la primera hora. Cada visitante, cada fuente,
                cada conversión — 100% observado, sin muestreo.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-warm-200 font-mono text-[0.8rem] text-text-tertiary">
                  3
                </span>
                <span className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary">
                  Semana 1
                </span>
              </div>
              <h3 className="text-[1.1rem] font-medium text-text-primary mb-3">
                Escala lo que funciona
              </h3>
              <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                Reasigna presupuesto a los canales que realmente generan ingresos.
                Deja de invertir en lo que GA4 decía que funcionaba.
              </p>
            </div>
          </div>

          <p className="mt-12 text-[0.9rem] text-text-secondary">
            <Link
              href="/es/how-it-works"
              className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors"
            >
              Leer la explicación técnica completa
            </Link>
          </p>
        </div>
      </section>

      {/* ============================================================
          PRICING ANCHOR
          ============================================================ */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[640px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="headline-section mb-6">
            Analítica enterprise. Sin precio enterprise.
          </h2>
          <div className="p-8 border border-warm-100 rounded-[4px] bg-white mb-6">
            <p className="font-mono text-[2rem] font-medium text-text-primary mb-2">
              Desde 499&euro;<span className="text-[1rem] text-text-tertiary font-normal">/mes</span>
            </p>
            <p className="text-[0.9rem] text-text-secondary">
              GA360 empieza en 150.000 $/año. Adobe Analytics en 100.000 $/año.
              <br />
              SealMetrics te da datos completos a una fracción del coste.
            </p>
          </div>
          <Link
            href="/es/pricing"
            className="text-[0.9rem] text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors"
          >
            Ver precios completos
          </Link>
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Preguntas frecuentes.
          </h2>
          <div className="space-y-0">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-warm-100 [&:first-child]:border-t"
              >
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none text-[1rem] font-medium text-text-primary hover:text-text-body transition-colors [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="shrink-0 ml-4 transition-transform group-open:rotate-45"
                  >
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </summary>
                <div className="pb-6 pr-8">
                  <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                    {faq.aJsx}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA FINAL
          ============================================================ */}
      <section className="py-32 bg-warm-white text-center border-t border-warm-100">
        <div className="max-w-[600px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Compruébalo con tus propios datos. Luego decide.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-10">
            Ejecuta SealMetrics junto a GA4 durante 30 días. Compara los números
            con tus propios datos. Sin compromiso, sin tarjeta de crédito.
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <Link
              href="/es/demo"
              className="inline-flex items-center gap-2 px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              Solicitar Demo
            </Link>
            <Link
              href="/es/growth-calculator"
              className="inline-flex items-center gap-2 px-9 py-4 text-[1rem] font-medium text-text-primary border border-warm-200 rounded-[4px] no-underline hover:border-text-primary transition-colors"
            >
              Calcula tus ingresos ocultos
            </Link>
          </div>
          <p className="mt-5 text-[0.8rem] text-text-tertiary">
            Sesión de 30 minutos con el fundador. Sin compromiso.
          </p>
        </div>
      </section>
    </>
  );
}
