import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { FaqAccordionV3 } from "@/components/sections/v3/FaqAccordionV3";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Seguridad & Compliance — SealMetrics",
  description: "Alojado en UE en Dublín. Cero dato personal. RGPD por arquitectura, no por capa de compliance añadida después.",
  alternates: { canonical: "https://sealmetrics.com/es/security", languages: getAlternatesEs("/security") },
};

const faqs = [
  { q: "¿Dónde se procesan y almacenan los datos?", a: "Dublín, Irlanda. Región UE única. Sin failover a terceros países. Sin sub-procesadores fuera de UE." },
  { q: "¿SealMetrics cae bajo RGPD?", a: "No. RGPD aplica a tratamiento de datos personales. SealMetrics no trata datos personales. Fuera del scope material." },
  { q: "¿Firmáis DPAs?", a: "Sí. DPA estándar en cada plan. Enterprise permite DPA custom para sectores regulados." },
  { q: "¿Qué documentación de seguridad proporcionáis?", a: "DPA, diagramas de arquitectura y cuestionario de seguridad vendor (TPSR) disponibles bajo NDA durante procurement review." },
  { q: "¿Qué pasa en un incidente de seguridad?", a: "Notificación a clientes en 4h. Informe público en 72h. Post-mortem completo en 7 días. Status en status.sealmetrics.com." },
  { q: "¿Cuestionarios de seguridad vendor?", a: "Paquete TPSR pre-construido con cuestionarios, certificados y diagramas. Corta el review de vendor de meses a semanas." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Seguridad" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Seguridad", url: "/es/security" }])} />
      <JsonLd data={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Seguridad & compliance</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>Cumplimiento <em>por arquitectura.</em></h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Alojado en UE en Dublín. Cero recolección de dato personal. Cero sub-procesadores fuera de UE. Tu equipo de compliance firma en una reunión — no tres.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <Link href="/es/demo" className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors">
              Pide el pack compliance →
            </Link>
          </div>
        </div>
      </section>

      <TldrBlock
        label="En resumen"
        answer={
          <>SealMetrics cumple <strong>RGPD por arquitectura</strong> — no por una capa de compliance añadida después. Sin cookies, sin identificadores personales, sin fingerprinting. Todo el procesamiento ocurre en Dublín (Irlanda), sobre infraestructura propiedad UE y cero sub-procesadores fuera de UE. Esto sitúa a SealMetrics fuera del scope material de RGPD y ePrivacy para la mayoría de casos eCommerce.</>
        }
        bullets={[
          <>Alojado en UE (Dublín), región única, sin transferencias a terceros países (Schrems II limpio).</>,
          <>DPA estándar en cada plan; paquete TPSR (Third-Party Security Review) pre-construido.</>,
          <>Cero dato personal almacenado — compliance firma en una reunión, no en tres.</>,
        ]}
      />

      <section className="py-28 bg-warm-50 border-t border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
            <div>
              <span className="eyebrow mb-5">Certificaciones</span>
              <h2 className="h-section mt-5">Todo el <em>papeleo.</em> Ninguna excusa.</h2>
            </div>
            <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
              Cada certificación y framework que tu equipo de compliance busca — certificado, auditado, disponible bajo NDA durante procurement review.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: "RGPD", desc: "Cumplido por arquitectura — fuera del scope material." },
              { name: "ePrivacy", desc: "Sin cookies, sin localStorage — la directiva no aplica." },
              { name: "Schrems II", desc: "Cero transferencias fuera de UE. Sin SCCs." },
              { name: "UE-hosted · Dublín", desc: "Región única. Sin failover a terceros países." },
              { name: "DPA incluido", desc: "DPA estándar en cada plan. DPA custom en Enterprise." },
              { name: "Paquete TPSR", desc: "Cuestionario de seguridad vendor pre-construido para procurement." },
            ].map((c) => (
              <article key={c.name} className="bg-white border border-warm-100 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  <h3 className="text-[17px] font-semibold text-ink tracking-[-0.015em]">{c.name}</h3>
                </div>
                <p className="text-[13.5px] leading-[1.6] text-ink-soft">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordionV3
        locale="es"
        items={faqs}
        eyebrow="FAQ"
        titleEs={<>Las <em>preguntas de compliance</em>, respondidas.</>}
        ledeEs="Lo que DPOs, CISOs y procurement preguntan. Si tu equipo tiene algo distinto, lo respondemos en el walkthrough."
      />
      <FinalCtaSharedV3
        locale="es"
        titleEn={<>Get the compliance pack.</>}
        titleEs={<>Recibe el <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>pack compliance completo.</em></>}
        ledeEn="30 min compliance walkthrough."
        ledeEs="30 min con nuestro lead de compliance. Arquitectura, DPA, postura Schrems II, TPSR — revisado con tu equipo legal."
      />
    </>
  );
}
