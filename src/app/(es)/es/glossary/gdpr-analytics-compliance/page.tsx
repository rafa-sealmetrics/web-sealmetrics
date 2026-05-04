import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { definedTermSchema, breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "Cumplimiento RGPD en analítica — Glosario SealMetrics",
  description:
    "Qué exige el RGPD a la analítica web: base legal, minimización de datos, limitación de propósito y consentimiento para tracking con cookies.",
  openGraph: {
    title: "Cumplimiento RGPD en analítica",
    description: "Qué exige el RGPD a la analítica web y cómo la arquitectura sin cookies cambia el problema.",
    type: "article",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/glossary/gdpr-analytics-compliance",
    languages: getAlternatesEs("/glossary/gdpr-analytics-compliance"),
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glosario", href: "/es/glossary" }, { label: "Cumplimiento RGPD analítica" }]} locale="es" />
      <JsonLd data={definedTermSchema({ name: "Cumplimiento RGPD en analítica", description: "Cumplir los requisitos del RGPD para la recolección y tratamiento de datos en analítica web.", url: "/es/glossary/gdpr-analytics-compliance", related: [{ name: "Plataforma de gestión de consentimiento", url: "/es/glossary/consent-management-platform" }, { name: "Residencia de datos analítica", url: "/es/glossary/analytics-data-residency" }, { name: "Analítica sin cookies", url: "/es/glossary/cookieless-analytics" }, { name: "Recolección first-party", url: "/es/glossary/first-party-data-collection" }] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glosario", url: "/es/glossary" }, { name: "Cumplimiento RGPD analítica", url: "/es/glossary/gdpr-analytics-compliance" }])} />
      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <header className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">Definición</span>
          <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">Cumplimiento RGPD en analítica</h1>
        </header>
        <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
          <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <p className="text-[1rem] text-text-primary font-medium">
              Cumplir los requisitos del RGPD para la analítica web: base legal para el tratamiento, minimización de datos, limitación de propósito y — si se usan cookies — consentimiento válido recogido antes del tracking.
            </p>
          </div>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Requisitos del RGPD para analítica</h2>
          <p>El Reglamento General de Protección de Datos (RGPD) aplica a cualquier tratamiento de datos personales de residentes UE. Para analítica web, los requisitos clave son:</p>
          <ul className="space-y-2 pl-0 list-none">
            {[
              "Base legal — habitualmente consentimiento (Art. 6(1)(a)) para tracking con cookies, o interés legítimo para datos no personales",
              "Minimización de datos — recoger sólo lo necesario para el propósito declarado",
              "Limitación de propósito — usar el dato sólo para el fin de analítica declarado",
              "Limitación del almacenamiento — definir y aplicar periodos de retención",
              "Derechos del interesado — facilitar acceso, rectificación y borrado",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem]">
                <span className="text-text-tertiary shrink-0">&mdash;</span>
                {item}
              </li>
            ))}
          </ul>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">La capa ePrivacy</h2>
          <p>Más allá del RGPD, la Directiva ePrivacy (Art. 5(3)) exige consentimiento antes de acceder o almacenar información en el dispositivo del usuario — lo que incluye colocar cookies. Por eso las <Link href="/es/glossary/consent-management-platform" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">plataformas de gestión de consentimiento</Link> son obligatorias para la analítica con cookies.</p>
          <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">Cumplimiento por arquitectura</h2>
          <p>La <Link href="/es/glossary/cookieless-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">analítica sin cookies</Link> aborda el cumplimiento de otra manera. Al no recoger dato personal y no almacenar nada en el dispositivo del visitante, el requisito de consentimiento bajo ePrivacy no aplica y las obligaciones RGPD son mínimas. Es coherente con la guía de la CNIL (Francia), DSK (Alemania) y otras autoridades UE sobre exenciones de medición de audiencia.</p>
        </div>
        <div className="mt-10 pt-6 border-t border-warm-100">
          <p className="text-[0.85rem] text-text-tertiary">
            Más: <Link href="/es/security" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Seguridad y arquitectura de privacidad</Link>
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
