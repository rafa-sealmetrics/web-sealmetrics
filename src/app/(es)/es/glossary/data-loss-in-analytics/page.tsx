import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "¿Qué es la pérdida de datos en analítica? — Glosario SealMetrics",
  description:
    "La pérdida de datos en analítica es la brecha entre tráfico real y tráfico medido por las herramientas con cookies. En la UE alcanza típicamente el 60-87%.",
  openGraph: {
    title: "¿Qué es la pérdida de datos en analítica?",
    description: "Brecha entre tráfico real y tráfico observable por herramientas con cookies. En la UE: 60-87%.",
    type: "article",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/glossary/data-loss-in-analytics",
    languages: getAlternatesEs("/glossary/data-loss-in-analytics"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glosario", href: "/es/glossary" }, { label: "Pérdida de datos en analítica" }]} locale="es" />
      <JsonLd data={definedTermSchema({ name: "Pérdida de datos en analítica", description: "La brecha entre tráfico real y tráfico observable por las herramientas con cookies.", url: "/es/glossary/data-loss-in-analytics", related: [{ name: "Plataforma de gestión de consentimiento", url: "/es/glossary/consent-management-platform" }, { name: "Impacto del bloqueador en analítica", url: "/es/glossary/ad-blocker-analytics-impact" }, { name: "Intelligent Tracking Prevention", url: "/es/glossary/intelligent-tracking-prevention" }, { name: "Analítica sin cookies", url: "/es/glossary/cookieless-analytics" }] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glosario", url: "/es/glossary" }, { name: "Pérdida de datos en analítica", url: "/es/glossary/data-loss-in-analytics" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definición</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Pérdida de datos en analítica</h1>
        </header>
        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              La diferencia entre el tráfico que realmente recibe un sitio y el tráfico que las herramientas con cookies son capaces de observar. En tráfico UE, esta brecha ronda típicamente el 60-87% por la combinación de rechazo de consentimiento, bloqueadores de anuncios y restricciones de navegador.
            </p>
          </div>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Las tres capas de pérdida</h2>
          <p>La pérdida ocurre en cascada — cada capa multiplica la anterior:</p>
          <ul className="space-y-2 pl-0 list-none">
            {[
              "Rechazo de consentimiento — 40-60% del tráfico UE rechaza el banner de cookies y nunca aparece en GA4",
              "Bloqueadores de anuncios — ~25% adicional bloquea el script analytics-google.com aunque acepte el banner",
              "Restricciones de navegador — Safari ITP y Firefox ETP recortan sesiones a 7 días, fragmentando los journeys del 35% restante",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem]">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">El impacto en decisiones</h2>
          <p>Cuando la analítica capta sólo el 13% del tráfico real, los modelos de atribución, ROAS, CPA y customer lifetime value se calculan sobre una muestra estadística — no sobre el dato. Las decisiones de reasignación de presupuesto basadas en esa muestra suelen estar sesgadas hacia los canales con mayor probabilidad de aceptar cookies, no hacia los que más ingresos generan en realidad.</p>

          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Cómo cerrar la brecha</h2>
          <p>La <Link href="/es/glossary/cookieless-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">analítica sin cookies</Link> elimina los tres vectores de pérdida en su origen: sin cookies que requieran consentimiento, sin scripts que los bloqueadores reconozcan, sin dependencia de identificadores que ITP/ETP recorten. El resultado es conteo agregado sobre el 100% del tráfico — no una muestra, no una estimación.</p>
        </div>

        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Más: <Link href="/es/data-loss-calculator" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Calculadora de pérdida de datos</Link>
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
