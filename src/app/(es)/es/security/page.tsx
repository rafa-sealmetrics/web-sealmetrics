import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "Seguridad y Cumplimiento — SealMetrics",
  description:
    "Privacidad por arquitectura, no por política. GDPR por diseño con residencia de datos en la UE, cero PII y aislamiento completo.",
  openGraph: {
    title: "Seguridad y Cumplimiento — SealMetrics",
    description: "Privacidad por arquitectura, no por política. Cumplimiento GDPR por diseño con residencia de datos exclusiva en la UE.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/security",
    languages: getAlternatesEs("/security"),
  },
};

const principles = [
  {
    title: "Sin recogida de datos personales",
    desc: "SealMetrics no recoge direcciones IP, huellas de dispositivo ni ningún dato que pueda identificar a una persona. La privacidad no es un ajuste — es la arquitectura.",
  },
  {
    title: "Sin cookies, sin consentimiento necesario",
    desc: "Como SealMetrics utiliza recogida cookieless de primera parte, no se requiere banner de consentimiento para analítica bajo el GDPR. Esto elimina tanto la carga legal como la friccion de experiencia de usuario.",
  },
  {
    title: "Residencia de datos exclusiva en la UE",
    desc: "Todos los datos se procesan y almacenan exclusivamente en infraestructura europea. Sin transferencias de datos fuera de la UE, sin subencargados en terceros países, sin dependencia de marcos de transferencia UE-EE.UU.",
  },
  {
    title: "Minimizacion de datos por diseño",
    desc: "Solo recogemos lo necesario para la analítica: URLs de página, referrers, tipo de navegador, resolución de pantalla y comportamiento de sesión. Sin nombres, sin emails, sin identificadores.",
  },
];

const regulations = [
  {
    name: "GDPR (UE)",
    status: "Cumplimiento por diseño",
    detail:
      "La ausencia de recogida de PII implica que las obligaciones del GDPR relativas a consentimiento, solicitudes de acceso del interesado y eliminación de datos no aplican a los datos analíticos de SealMetrics. No se requiere DPA para la capa de analítica — aunque proporcionamos uno para los clientes que lo necesiten como parte de su gobernanza interna.",
  },
  {
    name: "Directiva ePrivacy",
    status: "Sin consentimiento necesario",
    detail:
      "El artículo 5(3) de la Directiva ePrivacy exige consentimiento para almacenar información en el dispositivo del usuario. SealMetrics no almacena nada en el dispositivo del usuario — ni cookies, ni localStorage, ni huellas digitales.",
  },
  {
    name: "CCPA / CPRA (California)",
    status: "Cumplimiento verificado",
    detail:
      "SealMetrics no vende información personal, no comparte información personal para publicidad comportamental entre contextos y no recoge información personal sensible según la definición de CCPA/CPRA.",
  },
  {
    name: "UK GDPR",
    status: "Cumplimiento verificado",
    detail:
      "Los mismos principios de privacidad por diseño que garantizan el cumplimiento del GDPR de la UE aplican igualmente bajo el marco de protección de datos del Reino Unido. La residencia exclusiva en la UE satisface los requisitos de adecuación del Reino Unido.",
  },
];

const security = [
  {
    title: "Cifrado en transito y en reposo",
    desc: "Todos los datos se cifran mediante TLS 1.3 en transito y AES-256 en reposo. Las comunicaciones API utilizan endpoints autenticados con control de acceso basado en tokens.",
  },
  {
    title: "Aislamiento completo de datos",
    desc: "Los datos de cada cliente están aislados lógicamente a nivel de base de datos. Sin tablas compartidas, sin acceso cruzado entre clientes, sin mezcla de datos. Sin aprendizaje cruzado ni entrenamiento de modelos.",
  },
  {
    title: "Controles de acceso y auditoría",
    desc: "El acceso interno a datos de producción sigue el principio de mínimo privilegio. Todo acceso se registra, audita y revisa. Ningún ingeniero tiene acceso rutinario a los datos analíticos de los clientes.",
  },
  {
    title: "Alta disponibilidad",
    desc: "La infraestructura esta disenada para alta disponibilidad con redundancia en múltiples zonas de disponibilidad dentro de la UE. La monitorización y las alertas funcionan 24/7.",
  },
];

const trust = [
  {
    title: "Sin aprendizaje cruzado entre clientes",
    desc: "Tus datos nunca se utilizan para entrenar modelos, mejorar algoritmos ni generar insights para otros clientes. Lo que introduces es exclusivamente tuyo.",
  },
  {
    title: "Sin comparticion de datos con terceros",
    desc: "SealMetrics no comparte datos de clientes con ningún tercero. Sin partners publicitarios, sin data brokers, sin agregadores de analítica.",
  },
  {
    title: "Procesamiento transparente de datos",
    desc: "Documentamos exactamente que datos recogemos, como los procesamos y donde se almacenan. Sin cajas negras, sin procesamiento oculto.",
  },
  {
    title: "Derecho a la portabilidad de datos",
    desc: "Exporta tu conjunto de datos completo en cualquier momento mediante integración con BigQuery o API. Tus datos son tuyos — facilitamos que te los lleves contigo.",
  },
];

const securityFaqs = [
  {
    q: "¿SealMetrics requiere un banner de consentimiento?",
    a: "No. SealMetrics no utiliza cookies, localStorage ni ninguna forma de almacenamiento en el dispositivo, y no recoge datos personales (ni direcciones IP, ni IDs de dispositivo, ni identificadores de usuario). Bajo el GDPR y la Directiva ePrivacy, el consentimiento solo es necesario cuando se recogen datos personales o se almacena información en el dispositivo del usuario. SealMetrics no hace ninguna de las dos cosas.",
  },
  {
    q: "¿SealMetrics cumple con el GDPR?",
    a: "Sí, por arquitectura. El GDPR aplica al tratamiento de datos personales. SealMetrics no recoge datos personales — ni direcciones IP, ni huellas de dispositivo, ni identificadores de usuario. Los datos que SealMetrics procesa (URLs de página, referrers, tipo de navegador, resolución de pantalla, comportamiento de sesión) no constituyen datos personales según el Artículo 4(1) del GDPR.",
  },
  {
    q: "¿SealMetrics transfiere datos fuera de la UE?",
    a: "No. Todos los datos se procesan y almacenan exclusivamente en servidores de la UE. No hay subencargados en terceros países, ni infraestructura cloud en EE.UU., ni dependencia de Standard Contractual Clauses, decisiones de adecuación u otros mecanismos de transferencia transfronteriza.",
  },
  {
    q: "¿Qué datos personales recoge SealMetrics?",
    a: "Ninguno. SealMetrics recoge URLs de página, URLs de referrer, tipo de navegador, sistema operativo, resolución de pantalla, idioma, duración de sesión y profundidad de scroll. No recoge direcciones IP, huellas de dispositivo, IDs de usuario, direcciones de email ni ningún dato que pueda identificar a una persona.",
  },
  {
    q: "¿Cómo cumple SealMetrics con la Directiva ePrivacy?",
    a: "El Artículo 5(3) de la Directiva ePrivacy exige consentimiento para almacenar o acceder a información en el dispositivo del usuario. SealMetrics no almacena nada en el dispositivo del usuario — ni cookies, ni localStorage, ni huellas digitales. Esto significa que el requisito de consentimiento de la Directiva ePrivacy no aplica.",
  },
  {
    q: "¿Mi DPO puede verificar el cumplimiento?",
    a: "Sí. Proporcionamos un Data Processing Agreement (DPA), documentacion técnica detallada de nuestros métodos de recogida de datos, una lista de todos los puntos de datos recogidos y nuestra arquitectura de infraestructura. También publicamos autoevaluaciones contra los criterios de la CNIL y UK PECR.",
  },
  {
    q: "¿Existe un Data Processing Agreement?",
    a: "Sí. Un DPA esta disponible para todos los clientes, aunque los datos analíticos de SealMetrics no contienen datos personales. Muchas organizaciones requieren un DPA como parte de su gobernanza interna, y proporcionamos uno que documenta nuestras prácticas de procesamiento de datos, medidas de seguridad y lista de subencargados.",
  },
];

export default function SecurityPageEs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Seguridad" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Seguridad", url: "/es/security" }], "es")} />
      <JsonLd data={faqSchema(securityFaqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Seguridad y Cumplimiento
            </span>
            <h1 className="headline-hero mb-8">
              Privacidad por arquitectura, no por política.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary mb-10">
              SealMetrics no recoge datos personales. El cumplimiento no es una
              opción de configuración&nbsp;&mdash; es la base de como funciona la
              plataforma. Tu DPO agradecera la simplicidad, y puedes leer por que{" "}
              <Link
                href="/for/cto"
                className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
              >
                los equipos técnicos aprueban SealMetrics
              </Link>{" "}
              sin la friccion habitual de las revisiones de seguridad.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <Link
                href="/es/demo"
                className="inline-flex items-center px-7 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
              >
                Solicitar una Demo
              </Link>
              <Link
                href="/es/product"
                className="inline-flex items-center px-7 py-3.5 text-[0.95rem] text-text-secondary border border-warm-200 rounded-[4px] no-underline hover:border-text-body hover:text-text-primary transition-colors"
              >
                Ver la Plataforma
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principios */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Principios fundamentales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {principles.map((p) => (
              <div
                key={p.title}
                className="p-8 border border-warm-100 rounded-[4px] bg-warm-white"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {p.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cumplimiento normativo */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Cumplimiento normativo</h2>
          <div className="space-y-6">
            {regulations.map((r) => (
              <div
                key={r.name}
                className="p-8 bg-white border border-warm-100 rounded-[4px]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3">
                  <h3 className="font-serif text-[1.1rem] font-medium text-text-primary">
                    {r.name}
                  </h3>
                  <span className="text-[0.75rem] font-medium tracking-[0.04em] uppercase text-green-muted">
                    {r.status}
                  </span>
                </div>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seguridad de infraestructura */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Seguridad de infraestructura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {security.map((s) => (
              <div
                key={s.title}
                className="p-8 border border-warm-100 rounded-[4px] bg-warm-white"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {s.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arquitectura de confianza */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">Arquitectura de confianza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {trust.map((t) => (
              <div
                key={t.title}
                className="p-8 bg-white border border-warm-100 rounded-[4px]"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {t.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-8">
            {securityFaqs.map((faq) => (
              <div
                key={faq.q}
                className="pb-8 border-b border-warm-100 last:border-0"
              >
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-3">
                  {faq.q}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                  {faq.a}
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
            ¿Preguntas sobre cumplimiento?</h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Estaremos encantados de comentar tus requisitos normativos
            específicos y proporcionar documentacion para tu revisión interna.
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Contactar
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            Proporcionamos DPAs, respuestas a cuestionarios de seguridad y
            documentacion técnica.
          </p>
        </div>
      </section>
    </>
  );
}
