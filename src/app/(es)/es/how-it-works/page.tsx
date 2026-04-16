import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "Como Funciona la Analitica Sin Cookies — SealMetrics",
  description:
    "SealMetrics usa un script first-party de 846 bytes en tu dominio. Sin cookies, sin dependencia del consentimiento, sin vulnerabilidad a ad blockers. Captura del 100% en 5 minutos.",
  openGraph: {
    title: "Como Funciona la Analitica Sin Cookies — SealMetrics",
    description: "Como la analitica sin cookies captura el 100% de tu trafico. Recopilacion cookieless first-party explicada.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/how-it-works",
    languages: getAlternatesEs("/how-it-works"),
  },
};

const howItWorksFaqs = [
  {
    q: "Como funciona el tracking cookieless sin identificar usuarios?",
    a: "SealMetrics utiliza recopilacion cookieless first-party para capturar datos de comportamiento (paginas visitadas, referrer, tipo de navegador, duracion de sesion) sin almacenar nada en el dispositivo del visitante. Sin cookies, sin localStorage, sin fingerprinting. Las sesiones se reconstruyen sin identificadores personales.",
  },
  {
    q: "SealMetrics se ve afectado por los ad blockers?",
    a: "No. SealMetrics opera como infraestructura first-party en tu propio dominio. Los ad blockers apuntan a peticiones de analitica de terceros (como las dirigidas a google-analytics.com). Como los datos de SealMetrics fluyen a traves de tu dominio, son invisibles para los ad blockers.",
  },
  {
    q: "Cuanto tiempo lleva la instalacion?",
    a: "5 minutos. Anade un tag JavaScript a tu web, ya sea directamente en el HTML o a traves de Google Tag Manager. Sin configuracion de consent mode, sin integracion con banners de cookies y sin variables de Tag Manager que configurar.",
  },
  {
    q: "Necesito modificar mi banner de consentimiento?",
    a: "No. SealMetrics no requiere consentimiento bajo el RGPD ni la ePrivacy porque no utiliza cookies y no recopila datos personales. Si ya tienes un banner de consentimiento para otras herramientas (como GA4 o pixeles publicitarios), SealMetrics funciona de forma independiente.",
  },
  {
    q: "Donde se procesan y almacenan los datos?",
    a: "Todos los datos se procesan y almacenan exclusivamente en servidores de la UE. Sin transferencias fuera de la UE, sin subencargados en terceros paises, sin dependencia de Clausulas Contractuales Tipo ni otros mecanismos de transferencia internacional.",
  },
  {
    q: "SealMetrics utiliza fingerprinting?",
    a: "No. SealMetrics no utiliza browser fingerprinting, canvas fingerprinting ni ninguna tecnica que cree un identificador unico a partir de las caracteristicas del dispositivo. Es una decision arquitectonica deliberada: el fingerprinting genera datos personales y requeriria consentimiento.",
  },
  {
    q: "Que ocurre si supero mi limite de eventos?",
    a: "Nunca bloqueamos tu tracking. Al 80% de tu limite de eventos recibes un email de alerta, al 100% una notificacion en el dashboard y al 120% nos ponemos en contacto para hablar de un upgrade. No se pierde ningun dato durante ningun periodo de exceso.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Como Funciona" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Como Funciona", url: "/es/how-it-works" }])} />
      <JsonLd data={faqSchema(howItWorksFaqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Como Funciona
            </span>
            <h1 className="headline-hero mb-8">
              Un enfoque diferente para la medicion.
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              La analitica tradicional pierde la mayor parte de tus datos antes
              de que lleguen a registrarse. SealMetrics se construyo desde cero
              para resolver esto&nbsp;&mdash; sin cookies, sin dependencia del
              consentimiento y sin comprometer la privacidad.
            </p>
          </div>
        </div>
      </section>

      {/* The problem visual */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[800px]">
            <h2 className="headline-section mb-8">
              Donde desaparecen tus datos
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-10">
              Tu web tiene visitantes reales. Pero entre banners de
              consentimiento, ad blockers, caducidad de cookies y restricciones
              de navegador, solo una fraccion de ellos queda registrada por las
              herramientas tradicionales.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "70,000",
                  label: "Visitantes reales llegan a tu web",
                  width: "100%",
                  color: "bg-text-primary",
                },
                {
                  step: "45,500",
                  label: "Tras el banner de consentimiento (35% rechaza en la UE)",
                  width: "65%",
                  color: "bg-text-body",
                },
                {
                  step: "27,300",
                  label: "Tras los ad blockers que eliminan el tracking (40%)",
                  width: "39%",
                  color: "bg-text-secondary",
                },
                {
                  step: "16,400",
                  label: "Tras los limites de cookies de Safari ITP y Firefox ETP",
                  width: "23%",
                  color: "bg-text-tertiary",
                },
                {
                  step: "10,000",
                  label: "Lo que GA4 reporta como tu trafico total",
                  width: "14%",
                  color: "bg-red-alert",
                },
              ].map((item) => (
                <div key={item.step}>
                  <div className="flex justify-between text-[0.85rem] mb-2">
                    <span className="text-text-secondary">{item.label}</span>
                    <span className="font-mono text-text-primary font-medium">
                      {item.step}
                    </span>
                  </div>
                  <div className="h-6 bg-warm-100 rounded-[2px]">
                    <div
                      className={`h-full ${item.color} rounded-[2px]`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
              <div className="flex justify-between text-[0.85rem] mb-2">
                <span className="text-text-secondary">
                  Lo que SealMetrics captura
                </span>
                <span className="font-mono text-green-muted font-medium">
                  70,000
                </span>
              </div>
              <div className="h-6 bg-warm-100 rounded-[2px]">
                <div className="h-full bg-green-muted rounded-[2px] w-full" />
              </div>
              <p className="text-[0.8rem] text-text-tertiary mt-3">
                Captura del 100%. Sin dependencia de consentimiento. Sin perdida de datos.
              </p>
            </div>

            <p className="mt-8 text-[0.9rem] text-text-secondary">
              Quieres ver los numeros para tu propia web?{" "}
              <Link
                href="/data-loss-calculator"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Calcula tu perdida de datos
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Three steps */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-16">Como funciona SealMetrics</h2>
          <div className="space-y-20">
            {[
              {
                number: "01",
                title: "Recopilacion de datos first-party",
                desc: "Un script ligero de 846 bytes se ejecuta en tu dominio. Recopila datos de comportamiento mediante metodos first-party, lo que significa que los datos viajan directamente desde el navegador de tu visitante a tu dominio, sin pasar nunca por un tercero.",
                details: [
                  "Sin cookies de terceros ni peticiones externas",
                  "Invisible para ad blockers (infraestructura first-party)",
                  "Funciona independientemente del estado del banner de consentimiento",
                  "Impacto cero en la velocidad de carga (<50ms)",
                  "Una sola linea de codigo para instalar",
                ],
              },
              {
                number: "02",
                title: "Procesamiento a resolucion completa",
                desc: "Cada sesion se registra de forma individual. No modelamos, no muestreamos, no estimamos. Cuando ves 72.847 visitantes en tu dashboard, ese numero representa 72.847 sesiones reales, no una proyeccion estadistica.",
                details: [
                  "100% de las sesiones capturadas, no una muestra",
                  "Procesamiento de datos en tiempo real",
                  "Sin umbrales de datos que activen el muestreo",
                  "Granularidad a nivel de sesion para cada visitante",
                  "Infraestructura exclusivamente en la UE para todo el procesamiento",
                ],
              },
              {
                number: "03",
                title: "Inteligencia lista para la toma de decisiones",
                desc: "Los datos completos permiten inteligencia completa. Nueve informes especializados, atribucion de ingresos, deteccion de anomalias LENS AI con 60+ reglas, todo construido sobre la imagen completa, no sobre aproximaciones. Tracking de agentes IA disponible proximamente.",
                details: [
                  "9 tipos de informes que cubren todo el funnel",
                  "Atribucion de ingresos por canal, campana y creatividad",
                  "LENS AI: haz preguntas en lenguaje natural, obtiene respuestas de datos reales",
                  "Tracking de agentes IA: ve las visitas de GPT, Claude y Perplexity como sesiones (Proximamente)",
                  "Atribucion de ingresos por canal, campana y creatividad",
                ],
              },
            ].map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8"
              >
                <div className="font-serif text-[4rem] font-light text-warm-200 leading-none">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-[1.5rem] font-medium text-text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-6 max-w-[600px]">
                    {step.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {step.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-[0.9rem] text-text-body"
                      >
                        <span className="text-text-tertiary shrink-0">
                          &mdash;
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical details */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Que diferencia a SealMetrics de otras herramientas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: "First-party, no third-party",
                desc: "Las herramientas tradicionales envian datos a servidores externos mediante peticiones de terceros. SealMetrics opera como infraestructura first-party en tu dominio, lo que lo hace invisible para los ad blockers e inmune a las restricciones de cookies de terceros.",
              },
              {
                title: "Invisible para los bloqueadores",
                desc: "Las peticiones de analitica de terceros son lo primero que bloquean las herramientas de privacidad. SealMetrics opera como infraestructura first-party en tu dominio: la ruta de datos es entre tu visitante y tu dominio, sin ninguna llamada externa que interceptar.",
              },
              {
                title: "Sin cookies, sin dependencia de consentimiento",
                desc: "SealMetrics no utiliza cookies y no recopila datos personales. Esto significa que los banners de consentimiento no afectan a la recopilacion de datos. Mides el 100% de los visitantes independientemente de su eleccion de consentimiento.",
              },
              {
                title: "Sin muestreo, sin modelado",
                desc: "GA4 aplica muestreo de datos cuando el trafico supera ciertos umbrales. Adobe utiliza modelado estadistico. SealMetrics registra cada sesion de forma individual: lo que ves es lo que realmente ocurrio.",
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
          <p className="mt-10 text-[0.9rem] text-text-secondary">
            SealMetrics{" "}
            <Link
              href="/integrations"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              se conecta con 25+ plataformas
            </Link>{" "}
            incluyendo Google Ads, Meta, Shopify y BigQuery. Quieres los detalles tecnicos y de cumplimiento?{" "}
            <Link
              href="/es/security"
              className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
            >
              Lee nuestra arquitectura de seguridad y privacidad
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-8">
            {howItWorksFaqs.map((faq) => (
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
      <section className="py-28 bg-white text-center border-t border-warm-100">
        <div className="max-w-[500px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Compruebalo con tus propios datos.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-8">
            Ejecuta SealMetrics junto a tu configuracion actual. Compara los
            numeros. Y entonces decide. O lee mas en nuestro{" "}
            <Link
              href="/blog"
              className="text-text-primary no-underline border-b border-warm-200 hover:border-text-body transition-colors"
            >
              blog de analitica
            </Link>
            .
          </p>
          <Link
            href="/es/demo"
            className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Solicitar Demo
          </Link>
          <p className="mt-4 text-[0.8rem] text-text-tertiary">
            30 minutos de recorrido. Sin compromiso.
          </p>
        </div>
      </section>
    </>
  );
}
