import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationSchema, softwareApplicationSchema, faqSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { Logos } from "@/components/sections/Logos";

export const metadata: Metadata = {
  title: "SealMetrics — Analitica Completa para eCommerce, Sin Cookies",
  description:
    "Descubre que canales generan tus ventas. SealMetrics captura el 100% de tu trafico y conversiones — sin cookies ni banners de consentimiento.",
  openGraph: {
    title: "SealMetrics — Analitica Completa para eCommerce, Sin Cookies",
    description:
      "GA4 captura ~13% del trafico europeo. SealMetrics captura el 100% — sin cookies, sin muros de consentimiento, sin muestreo.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://sealmetrics.com/es",
    languages: getAlternatesEs("/"),
  },
};

/* ---------- Data ---------- */

const comparisonRows = [
  {
    scenario: "Visitante que rechaza cookies",
    ga4: "Invisible",
    seal: "Registrado al 100%",
  },
  {
    scenario: "Visitante con adblocker",
    ga4: "Invisible",
    seal: "Registrado al 100%",
  },
  {
    scenario: "Conversion en sesion sin consentimiento",
    ga4: "Perdida",
    seal: "Atribuida al canal correcto",
  },
  {
    scenario: "Trafico en Black Friday (pico)",
    ga4: "Muestreado",
    seal: "Datos en tiempo real, sin muestreo",
  },
  {
    scenario: "Visitante que vuelve tras 7 dias",
    ga4: "Nueva sesion (cookie expirada)",
    seal: "Mismo visitante reconocido",
  },
  {
    scenario: "Navegacion con Safari ITP",
    ga4: "Cookie limitada a 24h",
    seal: "Sin dependencia de cookies",
  },
];

const capabilities = [
  {
    title: "Datos completos, sin excepciones",
    desc: "SealMetrics captura el 100% de tus visitantes sin cookies ni banners de consentimiento. Donde GA4 muestra una fraccion del trafico real, nosotros mostramos cada sesion, cada fuente, cada conversion.",
    stat: "100%",
    statLabel: "del trafico capturado",
  },
  {
    title: "Atribucion de ingresos en datos reales",
    desc: "Atribucion last-click sobre el 100% de tus datos. Cada euro de facturacion asociado al canal que realmente genero la venta — no a \"directo / ninguno\" porque una cookie expiro.",
    stat: "3-4x",
    statLabel: "mas conversiones registradas vs. GA4",
  },
  {
    title: "LENS AI: supervision inteligente 24/7",
    desc: "Mas de 60 reglas monitorizando tu negocio en tiempo real. LENS AI detecta caidas de conversion, errores en paginas de pago y anomalias de trafico antes de que tu equipo llegue a la oficina.",
    stat: "60+",
    statLabel: "reglas de monitorizacion",
  },
  {
    title: "Preparado para agentes de IA",
    desc: "ChatGPT, Claude y Perplexity ya visitan tu web. SealMetrics identifica y clasifica trafico de agentes de IA para que sepas como interactuan con tu contenido — sin coste adicional.",
    stat: "300+",
    statLabel: "senales de deteccion",
  },
];

const caseMetrics = [
  { label: "Visitantes rastreados", before: "12.400/mes", after: "47.200" },
  { label: "Conversiones registradas", before: "340/mes", after: "1.290" },
  { label: "Ingresos atribuidos", before: "89K EUR/mes", after: "342K EUR" },
  { label: "Mejora de ROAS", before: "Base", after: "+40%" },
];

const testimonials = [
  {
    text: "Estabamos subreportando conversiones en mas de un 600%. Nuestro consejo de direccion tomaba decisiones de inversion con numeros fundamentalmente erroneos.",
    title: "CMO",
    role: "eCommerce internacional, 25M EUR facturacion",
  },
  {
    text: "LENS AI detecto una caida de conversiones por un error en la pagina de pago a las 3 AM. Cuando nuestro equipo llego, la alerta ya habia identificado la causa raiz.",
    title: "VP de Marketing",
    role: "Travel & Hospitality, 60M EUR facturacion",
  },
];

const faqs = [
  {
    question: "Por que pagar por SealMetrics si GA4 es gratis?",
    answer:
      "GA4 es gratis porque tu eres el producto: tus datos entrenan los modelos publicitarios de Google. Pero el problema real es que GA4 depende de cookies que la mayoria de visitantes rechazan o bloquean. Tomas decisiones de presupuesto sobre una fraccion de tus datos reales. SealMetrics captura el 100% sin cookies, para que cada euro invertido se base en informacion completa. El coste de SealMetrics es insignificante comparado con el coste de asignar mal el presupuesto publicitario.",
  },
  {
    question: "Es realmente preciso el tracking sin cookies?",
    answer:
      "SealMetrics utiliza identificacion server-side para reconocer visitantes sin cookies. Nuestros clientes registran consistentemente 3-4x mas conversiones que las herramientas basadas en cookies funcionando en el mismo sitio. Sin muestreo, sin modelado, sin estimacion: cada dato es observado, no inferido.",
  },
  {
    question: "Tengo que eliminar GA4?",
    answer:
      "No. La mayoria de clientes ejecutan SealMetrics junto a GA4. De hecho, lo recomendamos durante los primeros 30 dias para que compares los datos. Despues de ver la diferencia, la mayoria de equipos usan SealMetrics como fuente de verdad y mantienen GA4 para la integracion con Google Ads.",
  },
  {
    question: "Es compatible con RGPD sin banner de consentimiento?",
    answer:
      "Si. SealMetrics es cookieless por arquitectura: sin cookies, sin almacenamiento de datos personales, sin tracking cross-site. Nuestra infraestructura esta 100% alojada en la UE (Espana y Alemania). Cumplimos con RGPD, ePrivacy y Schrems II sin necesidad de banners de consentimiento.",
  },
  {
    question: "Cuanto tarda la implementacion?",
    answer:
      "5 minutos. Anadir un script a tu web, igual que GA4. Sin cambios de codigo, sin configurar tag managers, sin sprints de desarrollo. Los datos aparecen desde la primera hora. Nuestro equipo gestiona el onboarding completo y te ayuda a configurar objetivos, funnels e informes en la primera semana.",
  },
];

/* ---------- Page ---------- */

export default function HomeEs() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqSchema(faqs)} />

      {/* ---- Hero ---- */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[0.8rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
                Analitica completa para eCommerce
              </p>
              <h1 className="headline-hero mb-6">
                Tus analiticas pierden el 87% del trafico europeo. Las tuyas tambien.
              </h1>
              <p className="text-[1.15rem] leading-[1.7] text-text-secondary mb-10 max-w-[520px]">
                GA4 depende de cookies que la mayoria de visitantes europeos rechaza o bloquea.
                SealMetrics es una plataforma de analitica sin cookies para equipos de eCommerce.
                Captura el 100% de tu trafico y conversiones — cada visitante, cada euro
                atribuido — sin cookies ni banners de consentimiento.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/es/demo"
                  className="inline-flex items-center px-8 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
                >
                  Solicitar Demo
                </Link>
                <Link
                  href="/es/growth-calculator"
                  className="inline-flex items-center px-8 py-3.5 text-[0.95rem] font-medium text-text-primary border border-warm-200 rounded-[4px] no-underline hover:border-text-primary transition-colors"
                >
                  Calcula tu perdida de datos
                </Link>
              </div>
              {/* Stats row */}
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-warm-100 flex-wrap">
                <div>
                  <div className="font-mono text-[1.5rem] font-medium text-text-primary">
                    100%
                  </div>
                  <div className="text-[0.8rem] text-text-tertiary">
                    del trafico capturado
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[1.5rem] font-medium text-text-primary">
                    0
                  </div>
                  <div className="text-[0.8rem] text-text-tertiary">
                    cookies necesarias
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[1.5rem] font-medium text-text-primary">
                    599&euro;
                  </div>
                  <div className="text-[0.8rem] text-text-tertiary">
                    desde / mes
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="border border-warm-100 rounded-[4px] overflow-hidden">
                <Image
                  src="/screenshots/dashboard-overview.png"
                  alt="Panel de SealMetrics mostrando atribucion completa de trafico por canal"
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

      {/* ---- Logos ---- */}
      <Logos colorful />

      {/* ---- Problema / Solucion: GA4 vs SealMetrics ---- */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-red-alert"
            >
              <circle cx="10" cy="10" r="8" />
              <path d="M10 6v5M10 13.5v.5" />
            </svg>
            <span className="text-[0.8rem] font-medium uppercase tracking-[0.06em] text-red-alert">
              El problema
            </span>
          </div>
          <h2 className="headline-section mb-4">
            Lo que GA4 pierde, tu tambien lo pierdes.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-12 max-w-[600px]">
            Cada escenario que GA4 no puede medir es una decision de negocio basada en
            datos incompletos. Asi se compara con datos completos:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="py-3 pr-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider w-[40%]">
                    Escenario
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-text-tertiary uppercase tracking-wider">
                    GA4
                  </th>
                  <th className="py-3 px-4 text-[0.8rem] font-medium text-green-muted uppercase tracking-wider">
                    SealMetrics
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.scenario} className="border-b border-warm-100">
                    <td className="py-4 pr-4 text-[0.9rem] text-text-primary font-medium">
                      {row.scenario}
                    </td>
                    <td className="py-4 px-4 text-[0.85rem] text-red-alert">
                      {row.ga4}
                    </td>
                    <td className="py-4 px-4 text-[0.85rem] text-green-muted font-medium">
                      {row.seal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[0.85rem] text-text-secondary mt-10 p-5 bg-white border border-warm-100 rounded-[4px] leading-[1.7]">
            <span className="font-medium text-text-primary">En resumen:</span>{" "}
            en un eCommerce europeo tipico, GA4 pierde entre el 40% y el 87% del
            trafico real. Cada conversion perdida es un canal infravalorado y un
            presupuesto mal asignado.
          </p>
        </div>
      </section>

      {/* ---- Capacidades ---- */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Que puedes hacer con datos completos.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-16 max-w-[600px]">
            Cuando ves el 100% de tu trafico y conversiones, dejas de suponer y
            empiezas a tomar decisiones que generan ingresos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-8 border border-warm-100 rounded-[4px] bg-warm-white"
              >
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="font-mono text-[2rem] font-medium text-text-primary">
                    {cap.stat}
                  </span>
                  <span className="text-[0.8rem] text-text-tertiary">
                    {cap.statLabel}
                  </span>
                </div>
                <h3 className="text-[1.1rem] font-medium text-text-primary mb-3">
                  {cap.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Social Proof ---- */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12">
            Resultados reales de equipos de eCommerce.
          </h2>

          {/* Case study */}
          <div className="mb-20">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Caso de estudio
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <blockquote className="text-[1.25rem] leading-relaxed text-text-primary mb-6 pl-6 border-l-2 border-warm-200">
                  &ldquo;Pensabamos que nuestras analiticas eran precisas. SealMetrics nos
                  demostro que perdíamos el 74% de nuestras conversiones. Cada decision
                  de presupuesto que habiamos tomado era incorrecta.&rdquo;
                </blockquote>
                <div>
                  <div className="font-medium text-[0.9rem] text-text-primary">
                    Head of Digital Marketing
                  </div>
                  <div className="text-[0.8rem] text-text-secondary mt-0.5">
                    Retailer de moda europeo &mdash; 45M&euro; facturacion anual
                  </div>
                </div>
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
                Cada cliente tiene acceso directo a mi. No a un ticket de soporte. A mi.
                Cree SealMetrics porque los equipos de eCommerce merecen tomar decisiones
                con datos completos.
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

      {/* ---- Como funciona (compacto) ---- */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            De la instalacion al insight en una semana.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-16 max-w-[520px]">
            SealMetrics funciona junto a tu analitica actual. Sin migracion, sin disrupciones.
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
                Un solo script. Funciona junto a GA4. Sin cambios de codigo, sin banners
                de cookies, sin interrumpir tu configuracion actual.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-warm-200 font-mono text-[0.8rem] text-text-tertiary">
                  2
                </span>
                <span className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary">
                  Dia 1
                </span>
              </div>
              <h3 className="text-[1.1rem] font-medium text-text-primary mb-3">
                Ve todo tu trafico
              </h3>
              <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                Datos completos desde la primera hora. Cada visitante, cada fuente,
                cada conversion — 100% observado, sin muestreo.
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
                Deja de invertir en lo que GA4 decia que funcionaba.
              </p>
            </div>
          </div>
          <p className="mt-12 text-[0.9rem] text-text-secondary">
            <Link
              href="/how-it-works"
              className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors"
            >
              Leer la explicacion tecnica completa
            </Link>
          </p>
        </div>
      </section>

      {/* ---- Pricing Anchor ---- */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[640px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="headline-section mb-6">
            Analitica enterprise. Sin precio enterprise.
          </h2>
          <div className="p-8 border border-warm-100 rounded-[4px] bg-white mb-6">
            <p className="font-mono text-[2rem] font-medium text-text-primary mb-2">
              Desde 499&euro;<span className="text-[1rem] text-text-tertiary font-normal">/mes</span>
            </p>
            <p className="text-[0.9rem] text-text-secondary">
              GA360 empieza en 150.000 USD/ano. Adobe Analytics en 100.000 USD/ano.
              <br />
              SealMetrics te da datos completos a una fraccion del coste.
            </p>
          </div>
          <div className="space-y-3 text-left max-w-[440px] mx-auto mb-8">
            <div className="flex items-center gap-3 text-[0.9rem] text-text-secondary">
              <span className="text-text-tertiary shrink-0">&mdash;</span>
              Todas las funcionalidades incluidas en todos los planes
            </div>
            <div className="flex items-center gap-3 text-[0.9rem] text-text-secondary">
              <span className="text-text-tertiary shrink-0">&mdash;</span>
              Webs y usuarios ilimitados
            </div>
            <div className="flex items-center gap-3 text-[0.9rem] text-text-secondary">
              <span className="text-text-tertiary shrink-0">&mdash;</span>
              Prueba gratuita de 14 dias, sin tarjeta de credito
            </div>
            <div className="flex items-center gap-3 text-[0.9rem] text-text-secondary">
              <span className="text-text-tertiary shrink-0">&mdash;</span>
              Facturacion anual: 2 meses gratis
            </div>
          </div>
          <Link
            href="/es/pricing"
            className="text-[0.9rem] text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors"
          >
            Ver precios completos
          </Link>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-12 text-center">
            Preguntas frecuentes.
          </h2>
          <div className="space-y-0">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-warm-100 [&:first-child]:border-t"
              >
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none text-[1rem] font-medium text-text-primary hover:text-text-body transition-colors [&::-webkit-details-marker]:hidden">
                  {faq.question}
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
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA Final ---- */}
      <section className="py-32 bg-white text-center border-t border-warm-100">
        <div className="max-w-[600px] mx-auto px-5 sm:px-8">
          <h2 className="headline-section mb-4">
            Compruebalo con tus propios datos. Luego decide.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-10">
            Ejecuta SealMetrics junto a GA4 durante 30 dias. Compara los numeros con
            tus propios datos. Sin compromiso, sin tarjeta de credito.
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
            Sesion de 30 minutos con el fundador. Sin compromiso.
          </p>
        </div>
      </section>
    </>
  );
}
