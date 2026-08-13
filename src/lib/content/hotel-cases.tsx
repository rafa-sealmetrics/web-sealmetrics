export type HotelCaseSlug = "palladium-hotel-group" | "dreamplace-hotels";
export type HotelCaseLocale = "en" | "es";

type HotelCase = {
  client: string;
  logo: string;
  person: string;
  role: string;
  companyUrl: string;
  title: string;
  description: string;
  socialTitle: string;
  eyebrow: string;
  hero: ReactNode;
  heroBody: string;
  meta: readonly (readonly [string, string])[];
  quote: string;
  secondQuote: string;
  metrics: readonly { value: string; label: string; note: string; numericValue: number }[];
  problemTitle: ReactNode;
  problemBody: readonly string[];
  methodTitle: ReactNode;
  methodBody: string;
  steps: readonly (readonly [string, string, string])[];
  resultTitle: ReactNode;
  resultBody: readonly string[];
  resultSignal: string;
  resultLabel: string;
  sourceLabel: string;
  sourceText: string;
  ctaTitle: ReactNode;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const palladium = {
  en: {
    client: "Palladium Hotel Group", logo: "/logos/clients/palladium-dark.svg", person: "Toni Andújar", role: "Digital & Direct Sales Director", companyUrl: "https://www.palladiumhotelgroup.com/",
    title: "Palladium Hotel Group · Single source of truth", description: "Palladium Hotel Group aligned brand, agencies and departments around neutral measurement after finding 40% of traffic without attribution.", socialTitle: "Palladium Hotel Group — A neutral source of truth", eyebrow: "Case study · Palladium Hotel Group",
    hero: <>One number that brand, agencies and departments <em>accept as valid.</em></>, heroBody: "Palladium Hotel Group uses SealMetrics as a neutral measurement layer. The trigger was structural: 40% of inbound traffic had no source or medium in the previous stack.",
    meta: [["Sector", "Hospitality · eCommerce"], ["Primary use", "Cross-channel attribution"], ["Operating model", "Brand + agencies"], ["Decision metric", "Cost-per-Search"]],
    quote: "The data SealMetrics delivers is agnostic, unbiased and neutral. There’s no black box.", secondQuote: "Today every player is happy. The data is neutral, there’s no black box, and everyone has accepted these numbers as the reference.",
    metrics: [{ value:"40%", label:"Inbound traffic without attribution", note:"The measurement gap that triggered the review.", numericValue:40 }, { value:"35%", label:"GA4 bookings without a channel", note:"Recorded conversions that could not support a channel decision.", numericValue:35 }, { value:"+165%", label:"Display Cost-per-Search improvement", note:"After changing the DV360 measurement and investment model.", numericValue:165 }],
    problemTitle: <>Volume was visible.<br /><em>Origin was not.</em></>, problemBody: ["Palladium could see aggregate platform activity, but the missing source and medium data made it impossible to compare partners, placements and audiences on equal terms.", "The problem was not a shortage of dashboards. It was that brand teams, departments and agencies entered the same meeting with different numbers and different incentives."],
    methodTitle: <>Turn attribution into<br /><em>an operating model.</em></>, methodBody: "On Display & Video 360, the team connected every observed visit to partner, placement and audience, then evaluated the mix against availability searches in the booking engine.",
    steps: [["01", "Attribute the inbound visit", "Resolve partner, placement and audience without depending on the advertising-platform report."], ["02", "Define Cost-per-Search", "Use an availability search as the qualified-intent signal closest to a booking decision."], ["03", "Compare the inventory", "Identify which combinations generate intent and which add only apparent volume."], ["04", "Rebalance the budget", "Move investment toward the mix that performs on the agreed commercial metric."]],
    resultTitle: <>Same budget.<br /><em>A decision everyone can inspect.</em></>, resultBody: ["The model improved Display Cost-per-Search by 165% after the team rebalanced partners, placements, audiences and strategies.", "More importantly, SealMetrics became the shared reference. Agencies could still optimise their platforms, but the final discussion moved to one neutral measurement layer."], resultSignal:"+165%", resultLabel:"Display Cost-per-Search", sourceLabel:"Published evidence", sourceText:"Palladium Hotel Group internal attribution and DV360 review · April 2026",
    ctaTitle: <>Run the same comparison<br /><em>on your own channels.</em></>, ctaBody:"Keep the current stack, measure the same traffic in parallel and compare both systems against the booking or CRM total.", ctaPrimary:"Book a measurement review", ctaSecondary:"Read the Dreamplace case",
  },
  es: {
    client: "Palladium Hotel Group", logo: "/logos/clients/palladium-dark.svg", person: "Toni Andújar", role: "Director Digital y Venta Directa", companyUrl: "https://www.palladiumhotelgroup.com/",
    title: "Palladium Hotel Group · Fuente única de verdad", description: "Palladium Hotel Group alineó marca, agencias y departamentos con una medición neutral tras detectar un 40% del tráfico sin atribución.", socialTitle: "Palladium Hotel Group — Una referencia neutral", eyebrow: "Caso de éxito · Palladium Hotel Group",
    hero: <>Un número que marca, agencias y departamentos <em>aceptan como válido.</em></>, heroBody: "Palladium Hotel Group utiliza SealMetrics como capa neutral de medición. El detonante fue estructural: el 40% del tráfico entrante no tenía source o medium en el stack anterior.",
    meta: [["Sector", "Hotelería · eCommerce"], ["Uso principal", "Atribución multicanal"], ["Modelo operativo", "Marca + agencias"], ["Métrica de decisión", "Coste por Búsqueda"]],
    quote: "Los datos que da SealMetrics son agnósticos, no están sesgados y son neutrales. No hay caja negra.", secondQuote: "Hoy todos los players están contentos. Los datos son neutrales, no hay caja negra y todos han aceptado estos valores como la referencia.",
    metrics: [{ value:"40%", label:"Tráfico entrante sin atribución", note:"El gap de medición que activó la revisión.", numericValue:40 }, { value:"35%", label:"Reservas de GA4 sin canal", note:"Conversiones que no sostenían una decisión de canal.", numericValue:35 }, { value:"+165%", label:"Mejora del Coste por Búsqueda", note:"Tras cambiar el modelo de medición e inversión en DV360.", numericValue:165 }],
    problemTitle: <>El volumen era visible.<br /><em>El origen no.</em></>, problemBody: ["Palladium veía actividad agregada en las plataformas, pero la ausencia de source y medium impedía comparar partners, soportes y audiencias con el mismo criterio.", "No faltaban dashboards. Marca, departamentos y agencias llegaban a la misma reunión con cifras distintas e incentivos distintos."],
    methodTitle: <>Convertir la atribución en<br /><em>un modelo operativo.</em></>, methodBody: "En Display & Video 360, el equipo conectó cada visita observada con partner, soporte y audiencia y evaluó el mix contra búsquedas de disponibilidad del motor de reservas.",
    steps: [["01", "Atribuir la visita", "Resolver partner, soporte y audiencia sin depender del informe de la plataforma publicitaria."], ["02", "Definir Coste por Búsqueda", "Usar la búsqueda de disponibilidad como señal de intención cualificada próxima a la reserva."], ["03", "Comparar el inventario", "Separar combinaciones que generan intención de las que sólo añaden volumen aparente."], ["04", "Reequilibrar presupuesto", "Mover inversión hacia el mix que rinde en la métrica comercial acordada."]],
    resultTitle: <>Mismo presupuesto.<br /><em>Una decisión inspeccionable.</em></>, resultBody: ["El modelo mejoró un 165% el Coste por Búsqueda de Display tras reequilibrar partners, soportes, audiencias y estrategias.", "SealMetrics pasó a ser la referencia compartida. Las agencias mantienen la optimización en sus plataformas, pero la decisión final se contrasta en una capa neutral."], resultSignal:"+165%", resultLabel:"Coste por Búsqueda en Display", sourceLabel:"Evidencia publicada", sourceText:"Revisión interna de atribución y DV360 de Palladium Hotel Group · abril de 2026",
    ctaTitle: <>Ejecuta la misma comparación<br /><em>en tus propios canales.</em></>, ctaBody:"Mantén el stack actual, mide el mismo tráfico en paralelo y compara ambos sistemas contra el total del motor de reservas o CRM.", ctaPrimary:"Reserva una revisión de medición", ctaSecondary:"Lee el caso Dreamplace",
  },
} as const satisfies Record<HotelCaseLocale, HotelCase>;

const dreamplace = {
  en: {
    client:"Dreamplace Hotels", logo:"/logos/clients/dreamplace.svg", person:"Eduardo Martin", role:"Analytics & Campaigns", companyUrl:"https://www.dreamplacehotels.com/", title:"Dreamplace Hotels · Paid media on real data", description:"Dreamplace Hotels uses SealMetrics to allocate paid-media budget with 15–20% more attributed sales and 30% more measured traffic than GA.", socialTitle:"Dreamplace Hotels — Paid media on real data", eyebrow:"Case study · Dreamplace Hotels",
    hero: <>Allocate paid media on the <em>real number</em>, not the platform report.</>, heroBody:"Dreamplace integrated SealMetrics into its analysis process. The 15–20% sales-attribution gap with the previous tool is now large enough to change channel budgets.",
    meta:[["Sector","Hospitality · eCommerce"],["Using SealMetrics","Almost 2 years"],["Primary use","Channel attribution"],["Initial focus","Meta + Google"]],
    quote:"What it gives us is what we’ve always needed: data as real as possible, as close to reality as possible.", secondQuote:"The value is in optimising budget and investment. You shift toward a channel or strategy you were not seeing before.",
    metrics:[{value:"15–20%",label:"More sales attributed",note:"Closing the gap to the hotel group’s CRM.",numericValue:17.5},{value:"+30%",label:"More traffic than Google Analytics",note:"The observed gap after consent-shaped loss.",numericValue:30},{value:"2",label:"Initial decision channels",note:"Meta and Google were the first budget surfaces.",numericValue:2}],
    problemTitle:<>Revenue was recorded.<br/><em>The channel picture was incomplete.</em></>,problemBody:["Dreamplace knew the booking total from its internal systems. The uncertainty sat between that total and the channel story produced by conventional analytics.","Because the missing share was not distributed evenly, the incomplete dataset could change which channel appeared efficient — and therefore where the next euro went."],
    methodTitle:<>Use the CRM total<br/><em>as the reconciliation point.</em></>,methodBody:"The team runs SealMetrics as an independent measurement layer, compares attributed sales with the native CRM total and uses the remaining gap as a quality signal.",
    steps:[["01","Keep the source of truth","Use the hotel group’s recorded sales total as the baseline."],["02","Measure in parallel","Compare SealMetrics with the existing tools over the same commercial period."],["03","Inspect by channel","Find where consent loss changes Meta and Google attribution most."],["04","Move the investment","Use the reconciled view to shift budget toward the channel or strategy the previous stack undercounted."]],
    resultTitle:<>Less debate about the total.<br/><em>More control over the mix.</em></>,resultBody:["SealMetrics attributes 15–20% more sales than the previous tool and measures roughly 30% more traffic than Google Analytics.","That difference is used operationally: it changes channel analysis and budget allocation instead of remaining an abstract data-quality metric."],resultSignal:"15–20%",resultLabel:"additional sales attribution",sourceLabel:"Published evidence",sourceText:"Dreamplace Hotels internal CRM and analytics comparison · April 2026",
    ctaTitle:<>Reconcile analytics<br/><em>against the revenue already recorded.</em></>,ctaBody:"Run both measurement layers together and locate the channel decisions that change when the missing traffic becomes visible.",ctaPrimary:"Book an attribution review",ctaSecondary:"Read the Palladium case",
  },
  es: {
    client:"Dreamplace Hotels", logo:"/logos/clients/dreamplace.svg", person:"Eduardo Martin", role:"Analítica y Campañas", companyUrl:"https://www.dreamplacehotels.com/", title:"Dreamplace Hotels · Paid media con dato real", description:"Dreamplace Hotels asigna paid media con SealMetrics: 15–20% más ventas atribuidas y un 30% más tráfico medido que GA.", socialTitle:"Dreamplace Hotels — Paid media con dato real", eyebrow:"Caso de éxito · Dreamplace Hotels",
    hero:<>Asigna paid media con el <em>dato real</em>, no con el informe de la plataforma.</>,heroBody:"Dreamplace integró SealMetrics en su proceso de análisis. El gap del 15–20% en atribución de venta frente a la herramienta anterior ya cambia presupuestos por canal.",
    meta:[["Sector","Hotelería · eCommerce"],["Usando SealMetrics","Casi 2 años"],["Uso principal","Atribución por canal"],["Foco inicial","Meta + Google"]],
    quote:"Lo que nos aporta es lo que hemos necesitado siempre: el dato lo más real posible y lo más próximo a la realidad.",secondQuote:"El valor está en optimizar presupuesto e inversión. Derivas hacia un canal o estrategia que antes no estabas viendo.",
    metrics:[{value:"15–20%",label:"Más ventas atribuidas",note:"Cerrando el gap contra el CRM del grupo.",numericValue:17.5},{value:"+30%",label:"Más tráfico que Google Analytics",note:"El gap observado tras la pérdida por consentimiento.",numericValue:30},{value:"2",label:"Canales iniciales de decisión",note:"Meta y Google fueron las primeras superficies de presupuesto.",numericValue:2}],
    problemTitle:<>Los ingresos estaban registrados.<br/><em>La foto por canal estaba incompleta.</em></>,problemBody:["Dreamplace conocía el total de reservas desde sus sistemas internos. La incertidumbre estaba entre ese total y el relato por canal de la analítica convencional.","Como la parte ausente no se distribuye de forma uniforme, el dataset incompleto podía cambiar qué canal parecía eficiente y dónde se invertía el siguiente euro."],
    methodTitle:<>Usar el total del CRM<br/><em>como punto de conciliación.</em></>,methodBody:"El equipo ejecuta SealMetrics como capa independiente, compara la venta atribuida con el total nativo del CRM y utiliza el gap restante como señal de calidad.",
    steps:[["01","Mantener la fuente de verdad","Usar el total de ventas registrado por el grupo como línea base."],["02","Medir en paralelo","Comparar SealMetrics y las herramientas existentes durante el mismo periodo comercial."],["03","Inspeccionar por canal","Localizar dónde la pérdida por consentimiento altera más la atribución de Meta y Google."],["04","Mover la inversión","Usar la vista conciliada para asignar presupuesto al canal o estrategia inframedido por el stack anterior."]],
    resultTitle:<>Menos debate sobre el total.<br/><em>Más control sobre el mix.</em></>,resultBody:["SealMetrics atribuye un 15–20% más de ventas que la herramienta anterior y mide aproximadamente un 30% más de tráfico que Google Analytics.","La diferencia se usa operativamente: cambia el análisis por canal y el reparto presupuestario en lugar de quedarse como métrica abstracta de calidad."],resultSignal:"15–20%",resultLabel:"atribución adicional de ventas",sourceLabel:"Evidencia publicada",sourceText:"Comparación interna de CRM y analítica de Dreamplace Hotels · abril de 2026",
    ctaTitle:<>Concilia la analítica<br/><em>contra los ingresos ya registrados.</em></>,ctaBody:"Ejecuta ambas capas de medición juntas y localiza qué decisiones de canal cambian cuando aparece el tráfico ausente.",ctaPrimary:"Reserva una revisión de atribución",ctaSecondary:"Lee el caso Palladium",
  },
} as const satisfies Record<HotelCaseLocale, HotelCase>;

export const hotelCases = { "palladium-hotel-group": palladium, "dreamplace-hotels": dreamplace } as const;
export function getHotelCase(slug: HotelCaseSlug, locale: HotelCaseLocale): HotelCase { return hotelCases[slug][locale]; }
import type { ReactNode } from "react";
