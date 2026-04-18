import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "SealMetrics para DPOs — Analítica GDPR por diseño",
  description:
    "Sin cookies, sin PII, sin dependencia del consentimiento, infraestructura exclusivamente UE. La plataforma que tu equipo de privacidad sí aprobará.",
  openGraph: {
    title: "SealMetrics para DPOs",
    description:
      "Sin cookies, sin PII, infraestructura exclusivamente UE. Analítica que tu equipo de privacidad aprobará.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/for/dpo",
    languages: getAlternatesEs("/for/dpo"),
  },
};

export default function ForDPOPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Para DPOs" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Para DPOs", url: "/es/for/dpo" }])} />
      <JsonLd data={servicePageSchema({ name: "SealMetrics para DPOs", description: "Sin cookies, sin PII, sin dependencia del consentimiento, infraestructura exclusivamente en la UE. SealMetrics es la plataforma de analítica que tu equipo de privacidad sí aprobará.", url: "/es/for/dpo", audience: "Delegados de Protección de Datos (DPOs)" })} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Para DPOs
            </span>
            <h1 className="headline-hero mb-8">
              Analítica que no requiere una evaluación de impacto.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Sin cookies. Sin datos personales. Sin transferencias internacionales.
              Infraestructura exclusivamente en la UE. SealMetrics está diseñado para
              que la evaluación de privacidad sea sencilla&nbsp;&mdash; porque no hay
              nada problemático que evaluar.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy architecture */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Privacidad por arquitectura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: "Sin cookies",
                desc: "SealMetrics no establece, lee ni depende de cookies de ningún tipo — ni de primera parte ni de terceros. Esto elimina el principal desencadenante de los requisitos de consentimiento bajo la Directiva ePrivacy y las directrices del GDPR sobre cookies.",
              },
              {
                title: "Sin recogida de datos personales",
                desc: "Sin almacenamiento de direcciones IP, sin fingerprinting de dispositivo, sin IDs de usuario, sin hashes de email. Los datos que SealMetrics recoge son conductuales y agregados. Los visitantes individuales no pueden ser identificados, reidentificados ni rastreados entre sitios.",
              },
              {
                title: "Infraestructura exclusivamente UE",
                desc: "Todo el procesamiento, almacenamiento y respaldo de datos ocurre dentro de la Unión Europea. Sin subencargados fuera de la UE, sin dependencia de Cláusulas Contractuales Tipo, sin dependencia de decisiones de adecuación UE-EE.UU.",
              },
              {
                title: "Sin dependencia del consentimiento",
                desc: "Como SealMetrics no recoge datos personales ni usa cookies, el estado del banner de consentimiento no afecta a la recogida de datos. No es un workaround — es una consecuencia de la arquitectura. Sin datos personales no hay requisito de consentimiento para analítica.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory alignment */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Alineación regulatoria</h2>
          <div className="space-y-8 max-w-[750px]">
            {[
              {
                regulation: "GDPR (Reglamento 2016/679)",
                status: "Cumplimiento por diseño",
                detail:
                  "Sin tratamiento de datos personales según el artículo 4(1). Sin elaboración de perfiles, sin decisiones individuales automatizadas, sin capacidad de identificación del interesado.",
              },
              {
                regulation: "Directiva ePrivacy (2002/58/CE)",
                status: "Sin desencadenante de consentimiento",
                detail:
                  "Sin acceso al equipo terminal (sin cookies, sin almacenamiento local, sin fingerprinting de dispositivo). El requisito de consentimiento del artículo 5(3) no aplica.",
              },
              {
                regulation: "Schrems II / Transferencias UE-EE.UU.",
                status: "No aplicable",
                detail:
                  "Toda la infraestructura dentro de la jurisdicción UE. Sin transferencias a terceros países. Sin dependencia de SCC, BCR ni decisiones de adecuación.",
              },
              {
                regulation: "Guía de la CNIL (DPA francesa)",
                status: "Alineado",
                detail:
                  "Coherente con los criterios de exención de la CNIL para herramientas de medición de audiencia que no requieren consentimiento cuando están correctamente configuradas.",
              },
              {
                regulation: "Guía DSK (DPA alemana)",
                status: "Alineado",
                detail:
                  "Cumple los requisitos de la DPA alemana para analítica sin consentimiento: sin tracking entre sitios, sin datos personales, procesamiento exclusivamente en la UE.",
              },
            ].map((item) => (
              <div
                key={item.regulation}
                className="pb-6 border-b border-warm-100 last:border-0"
              >
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="font-serif text-[1rem] font-medium text-text-primary">
                    {item.regulation}
                  </h3>
                  <span className="text-[0.75rem] font-medium text-green-muted uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust architecture */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Arquitectura de confianza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: "Sin intercambio de datos entre clientes",
                desc: "Los datos de cada cliente están aislados. No hay agregación entre clientes, sin modelos compartidos, sin benchmarking que pueda filtrar información competitiva.",
              },
              {
                title: "Portabilidad de datos",
                desc: "Los clientes son dueños de sus datos. Capacidad completa de exportación en formatos estándar en cualquier momento. Sin bloqueo de proveedor por restricciones de acceso a los datos.",
              },
              {
                title: "Procesamiento transparente",
                desc: "Documentamos exactamente qué datos se recogen, cómo se procesan y dónde se almacenan. Sin algoritmos opacos, sin flujos de datos oscuros.",
              },
              {
                title: "DPA disponible",
                desc: "Acuerdo de Tratamiento de Datos estándar disponible para todos los planes. Negociación de DPA personalizado disponible en el plan Enterprise. Respuestas a cuestionarios de seguridad a petición.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-warm-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Revisa toda la arquitectura de privacidad.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Estaremos encantados de explicar a tu equipo de privacidad la arquitectura
            técnica, los flujos de datos y la documentación de cumplimiento.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Solicitar Revisión de Privacidad
          </Link>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-[0.8rem] text-text-tertiary">
            <Link
              href="/es/security"
              className="no-underline border-b border-warm-200 pb-0.5 text-text-secondary hover:text-text-primary transition-colors"
            >
              Arquitectura de seguridad
            </Link>
            <Link
              href="/dpa"
              className="no-underline border-b border-warm-200 pb-0.5 text-text-secondary hover:text-text-primary transition-colors"
            >
              Acuerdo de Tratamiento de Datos
            </Link>
            <Link
              href="/privacy"
              className="no-underline border-b border-warm-200 pb-0.5 text-text-secondary hover:text-text-primary transition-colors"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
