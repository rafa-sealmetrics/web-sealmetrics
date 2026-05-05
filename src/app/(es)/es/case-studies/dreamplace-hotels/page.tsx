import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  articleSchema,  breadcrumbSchema,
  casePersonSchema,
  reviewSchema,
  statisticClaimSchema,
  quotationSchema,
} from "@/lib/schema";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";
import { getAlternatesEs } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "Caso Dreamplace Hotels — Paid media con dato real",
  description:
    "Dreamplace Hotels asigna paid media con SealMetrics: 15–20% más atribución de venta y +30% más tráfico vs Google Analytics.",
  alternates: {
    canonical: "https://sealmetrics.com/es/case-studies/dreamplace-hotels",
    languages: getAlternatesEs("/case-studies/dreamplace-hotels"),
  },
  openGraph: {
    title:
      "Dreamplace Hotels — Decidir paid media con el dato real, no con el que reporta cada plataforma",
    description:
      "15–20% más atribución de venta acercándose al CRM. +30% más tráfico vs Google Analytics. Meta y Google como foco. Caso de estudio con Eduardo Martin.",
    type: "article",
    images: ["https://sealmetrics.com/og-image.png"],
    locale: "es_ES",
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Casos de estudio", href: "/es/case-studies" },
          { label: "Dreamplace Hotels" },
        ]}
        locale="es"
      />
      <JsonLd
        data={breadcrumbSchema(
          [
            { name: "Casos de estudio", url: "/es/case-studies" },
            { name: "Dreamplace Hotels", url: "/es/case-studies/dreamplace-hotels" },
          ],
          "es"
        )}
      />
      <JsonLd
        data={casePersonSchema({
          name: "Eduardo Martin",
          jobTitle: "Analítica y Gestión de Campañas",
          worksForName: "Dreamplace Hotels",
          worksForUrl: "https://www.dreamplacehotels.com/",
          caseUrl: "/es/case-studies/dreamplace-hotels",
          caseName: "Caso Dreamplace Hotels — Paid media con dato real",
        })}
      />
      <JsonLd
        data={articleSchema({
          headline: "Caso Dreamplace Hotels — Paid media con dato real",
          description:
            "Dreamplace Hotels reasigna paid media con SealMetrics: 15–20% más venta atribuida frente a la herramienta anterior y +30% más tráfico vs Google Analytics.",
          datePublished: "2026-04-15",
          dateModified: "2026-04-15",
          url: "/es/case-studies/dreamplace-hotels",
          category: "Caso de estudio",
          author: { name: "SealMetrics", url: "/es/about" },
          image: "https://sealmetrics.com/og-image.png",
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "SealMetrics atribuye al canal correcto entre un 15% y un 20% más ventas que la herramienta anterior, acercándose al dato nativo del CRM de Dreamplace.",
          source: "Comparación interna Dreamplace Hotels · abril 2026",
          sourceAuthor: "Dreamplace Hotels",
          sourceDate: "2026-04-15",
          url: "/es/case-studies/dreamplace-hotels",
          numericValue: 20,
          unit: "PERCENT",
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "SealMetrics captura aproximadamente un 30% más de tráfico que Google Analytics tras cerrar el gap de consentimiento.",
          source: "Comparación de tráfico Dreamplace Hotels vs Google Analytics · abril 2026",
          sourceAuthor: "Dreamplace Hotels",
          sourceDate: "2026-04-15",
          url: "/es/case-studies/dreamplace-hotels",
          numericValue: 30,
          unit: "PERCENT",
        })}
      />
      <JsonLd
        data={quotationSchema({
          text: "Lo que nos aporta es lo que hemos necesitado siempre: el dato lo más real posible y lo más próximo a la realidad.",
          spokenBy: "Eduardo Martin",
          spokenByRole: "Analítica y Campañas · Dreamplace Hotels",
          url: "/es/case-studies/dreamplace-hotels",
        })}
      />
      <JsonLd
        data={quotationSchema({
          text: "El valor está en la optimización del presupuesto y la inversión. No es solo lo que generas de más: es cómo estás invirtiendo mejor, porque derivas hacia un canal o una estrategia que antes no estabas viendo.",
          spokenBy: "Eduardo Martin",
          spokenByRole: "Analítica y Campañas · Dreamplace Hotels",
          url: "/es/case-studies/dreamplace-hotels",
        })}
      />
      <JsonLd
        data={reviewSchema({
          reviewBody:
            "Lo que nos aporta es lo que hemos necesitado siempre: el dato lo más real posible y lo más próximo a la realidad.",
          authorName: "Eduardo Martin",
          authorRole: "Analítica y Campañas · Dreamplace Hotels",
          datePublished: "2026-04-15",
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <span className="eyebrow mb-5">Caso de estudio · Dreamplace Hotels</span>
          <h1 className="h-display mt-5" style={{ maxWidth: "26ch" }}>
            Decidir inversión en paid media con el <em>dato real</em>, no con el que
            reporta cada plataforma.
          </h1>
          <p
            className="text-ink-soft mt-8 max-w-[68ch] leading-[1.55] italic"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            Dreamplace Hotels integró SealMetrics en su proceso interno de análisis. La
            diferencia respecto a otras herramientas en atribución de venta está entre el
            15% y el 20%, y esa diferencia ya mueve decisiones de presupuesto por canal.
          </p>
        </div>
      </section>

      {/* Client meta strip */}
      <section className="border-t border-warm-100 bg-warm-white py-10">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { l: "Cliente", v: "Dreamplace Hotels" },
              { l: "Sector", v: "Hotelería · eCommerce" },
              { l: "Usando SealMetrics", v: "~2 años" },
              { l: "Uso principal", v: "Atribución por canal" },
            ].map((m) => (
              <div key={m.l}>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-2">
                  {m.l}
                </div>
                <div className="text-[15px] font-semibold text-ink tracking-[-0.01em]">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro body */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <div className="space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Eduardo Martin lidera la analítica y gestión de campañas de Dreamplace Hotels. Desde hace casi
              dos años trabaja con SealMetrics, y lo que empezó como una herramienta de
              contraste se ha convertido en una pieza fija de su proceso de análisis.
            </p>
            <p>
              El contexto es familiar para cualquier marketer de eCommerce europeo: los
              últimos cambios en privacidad, los bloqueos del navegador y los banners de
              consentimiento dejaron a las herramientas de medición tradicionales por
              detrás de la realidad. La data estaba ahí, pero no se veía completa. Y sin
              dato completo no hay decisión segura.
            </p>
            <p>
              «El resto de herramientas, sabemos cómo van, sabemos cómo funcionan —no es
              que no sirvan— pero no se han adaptado a los cambios de los últimos años,
              y creíamos que algo se nos estaba quedando por el camino», explica
              Eduardo.
            </p>
          </div>

          <blockquote
            className="mt-12 border-l-[3px] pl-6 py-1 italic"
            style={{ borderColor: "#2E5C8A", color: "#0E0E0C" }}
          >
            <p className="text-[22px] leading-[1.4] tracking-[-0.01em] font-medium">
              &ldquo;Lo que nos aporta es lo que hemos necesitado siempre: el dato lo
              más real posible y lo más próximo a la realidad.&rdquo;
            </p>
            <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
              Eduardo Martin · Analítica y Campañas · Dreamplace Hotels
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Headline stats */}
      <section className="bg-warm-white border-t border-warm-100 py-16">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: "15–20",
              u: "%",
              l: "Más atribución de venta que la herramienta anterior",
              note: "Acercándose al dato nativo del CRM de Dreamplace.",
            },
            {
              n: "+30",
              u: "%",
              l: "Más tráfico registrado vs Google Analytics",
              note: "Tras cerrar el gap de consentimiento que GA4 deja abierto.",
            },
            {
              n: "2",
              u: " canales",
              l: "Meta y Google como foco inicial",
              note: "Los primeros canales donde se toman decisiones con el dato de SealMetrics.",
            },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-white border border-warm-100 rounded-xl p-7 flex flex-col gap-3"
            >
              <div
                className="font-semibold tracking-[-0.04em] text-ink leading-none tabular-nums"
                style={{ fontSize: "clamp(54px, 6vw, 78px)" }}
              >
                {s.n}
                {s.u && (
                  <span
                    className="italic font-medium"
                    style={{ color: "#E8B84B", fontStyle: "italic" }}
                  >
                    {s.u}
                  </span>
                )}
              </div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
                {s.l}
              </div>
              <div className="text-[14px] leading-[1.5] text-ink-2">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* From contrast tool to decision tool */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            De herramienta de contraste a <em>herramienta de decisión.</em>
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Durante el primer periodo de uso, SealMetrics se utilizaba para cruzar
              datos. Una foto paralela a las plataformas tradicionales que permitía
              validar si lo que reportaban Meta, Google y Analytics se acercaba a lo que
              de verdad pasaba.
            </p>
            <p>
              Tras la última campaña de la temporada, el planteamiento cambió.
              SealMetrics ya no está al lado del proceso: está <em>dentro</em> del
              proceso.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-warm-50 border border-warm-100 rounded-xl p-7">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-3">
                Antes
              </div>
              <h3 className="text-[18px] font-semibold text-ink tracking-[-0.015em] mb-2">
                Herramienta de contraste
              </h3>
              <p className="text-[15px] leading-[1.6] text-ink-2">
                SealMetrics se abría para comparar. La decisión se tomaba con el dato de
                las plataformas, y se usaba SealMetrics como control.
              </p>
            </div>
            <div
              className="border rounded-xl p-7"
              style={{
                background: "rgba(45,139,109,0.08)",
                borderColor: "rgba(45,139,109,0.25)",
              }}
            >
              <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-brand font-semibold mb-3">
                Ahora
              </div>
              <h3 className="text-[18px] font-semibold text-ink tracking-[-0.015em] mb-2">
                Herramienta de decisión
              </h3>
              <p className="text-[15px] leading-[1.6] text-ink-2">
                SealMetrics está incorporado en el proceso de extracción y análisis. Es
                el dato con el que se toman las decisiones de canal.
              </p>
            </div>
          </div>

          <p className="mt-10 text-[17px] leading-[1.7] text-ink">
            «Ya no es una herramienta que está ahí para ver qué dato nos da. Es la
            herramienta que nos está dando el dato real, y con la que se toman las
            decisiones», resume Eduardo.
          </p>
        </div>
      </section>

      {/* Where the difference shows up */}
      <section className="bg-warm-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            Dónde aparece la diferencia: <em>atribución, no solo tráfico.</em>
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Uno de los hallazgos más útiles del equipo fue distinguir dos tipos de
              gap. El primero, en tráfico bruto: SealMetrics captura alrededor de un 30%
              más de tráfico que Google Analytics. Esa cifra por sí sola ya obliga a
              revisar cualquier cálculo de conversión, coste por visita o ROAS que se
              haya hecho con los datos anteriores.
            </p>
            <p>
              El segundo gap, el que termina moviendo presupuesto, está un nivel por
              debajo: en la atribución de ese tráfico a canal.
            </p>
          </div>

          <div className="mt-10 bg-white border border-warm-100 rounded-xl p-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-3">
              El segundo gap, el que mueve presupuesto
            </div>
            <p className="text-[19px] leading-[1.5] text-ink italic">
              «Donde sí vemos la diferencia real es en cómo se atribuye ese tráfico y
              la venta. Sobre todo la venta. Entre un 15% y un 20% de diferencia de
              aproximación a CRM puro.»
            </p>
          </div>

          <p className="mt-8 text-[17px] leading-[1.7] text-ink">
            Es decir: SealMetrics atribuye al canal correcto entre un 15% y un 20% más
            de ventas que la herramienta anterior, acercándose mucho más al dato nativo
            del CRM de Dreamplace. Un porcentaje que, llevado a un presupuesto de paid
            media en alta temporada hotelera, es la diferencia entre invertir con
            convicción o invertir a ciegas.
          </p>
        </div>
      </section>

      {/* Where it's used: Meta and Google */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            Dónde se usa: Meta y Google, <em>por canal antes que por campaña.</em>
          </h2>
          <p className="mt-8 text-[17px] leading-[1.7] text-ink">
            El equipo priorizó el uso de SealMetrics en los dos frentes donde el pixel
            tradicional genera más fricción:
          </p>

          <ul className="mt-8 space-y-5">
            {[
              {
                t: "Meta y Google como foco inicial",
                d: "Los dos canales con mayor inversión y mayor discrepancia entre lo que reporta el pixel y lo que llega al CRM.",
              },
              {
                t: "Lectura por canal antes que por campaña",
                d: "Primero se fija la fiabilidad del dato a nivel de canal; a partir de ahí se baja a campañas concretas.",
              },
              {
                t: "Conversación con la agencia",
                d: "El partner de medios sabe ya que Dreamplace quiere operar con esta lectura. El plan es incorporar SealMetrics al flujo de optimización del feed para el próximo año.",
              },
            ].map((b) => (
              <li
                key={b.t}
                className="grid grid-cols-[auto_1fr] gap-5 pb-5 border-b border-warm-100 last:border-0"
              >
                <span className="text-brand mt-2">—</span>
                <div>
                  <div className="text-[18px] font-semibold text-ink tracking-[-0.015em]">
                    {b.t}
                  </div>
                  <div className="text-[15px] leading-[1.6] text-ink-2 mt-1.5">
                    {b.d}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Next operational step */}
          <div className="mt-10 bg-warm-50 border border-warm-100 rounded-xl p-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-3">
              Siguiente paso operativo
            </div>
            <h3
              className="font-semibold text-ink leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}
            >
              Properties del sitio → campañas dinámicas.
            </h3>
            <p className="mt-5 text-[16px] leading-[1.65] text-ink-2">
              Dreamplace está empezando a trabajar con las <em>properties</em> que
              SealMetrics captura (ubicación del hotel, tamaño y tipo de habitación)
              para alimentar campañas dinámicas por intención de búsqueda: usuarios
              interesados en cinco estrellas, en habitaciones familiares, etc. El
              objetivo es dejar atrás las campañas de reimpacto indiferenciado y
              trabajar con señales de intención reales.
            </p>
          </div>
        </div>
      </section>

      {/* The value: better-allocated investment (DARK SLAB) */}
      <section className="bg-ink text-white py-24 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            right: -120,
            top: -120,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(45,139,109,0.35),transparent 70%)",
          }}
        />
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 relative">
          <div className="max-w-[760px] mx-auto">
            <span className="eyebrow mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
              El valor que termina contando
            </span>
            <h2 className="h-section text-white mt-5">
              Inversión{" "}
              <em
                className="italic font-medium"
                style={{ color: "#E8B84B", fontStyle: "italic" }}
              >
                mejor asignada.
              </em>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.7] text-white/85">
              Cuando se le pregunta por el impacto, Eduardo evita dar una cifra de
              uplift en ventas que no esté cuantificada con rigor. Prefiere enmarcar el
              valor donde realmente lo ve:
            </p>

            <blockquote className="mt-10 border-l-[3px] pl-6 py-1 italic border-brand-soft">
              <p className="text-[22px] leading-[1.45] tracking-[-0.01em] font-medium text-white">
                &ldquo;El valor está en la optimización del presupuesto y la inversión.
                No es solo lo que generas de más: es cómo estás invirtiendo mejor,
                porque derivas hacia un canal o una estrategia que antes no estabas
                viendo.&rdquo;
              </p>
              <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-white/60 font-semibold">
                Eduardo Martin · Dreamplace Hotels
              </cite>
            </blockquote>

            <p className="mt-10 text-[17px] leading-[1.7] text-white/85">
              Ese diferencial de asignación —mover inversión hacia canales antes
              invisibles— repercute en la venta final. Pero antes que eso, repercute en
              la confianza con la que se toman las decisiones. Para un equipo que opera
              con presupuestos por temporada y ventanas de decisión estrechas, ese
              cambio en la base informativa es el que importa.
            </p>
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="bg-warm-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            Y una línea que explica bien <em>por qué SealMetrics importa.</em>
          </h2>
          <p className="mt-8 text-[17px] leading-[1.7] text-ink">
            Al final de la conversación, le preguntamos a Eduardo cómo le recomendaría
            SealMetrics a un colega de otro eCommerce. Su respuesta no es un pitch. Es
            una pregunta:
          </p>

          <blockquote
            className="mt-10 border-l-[3px] pl-6 py-1 italic"
            style={{ borderColor: "#2E5C8A", color: "#0E0E0C" }}
          >
            <p className="text-[22px] leading-[1.4] tracking-[-0.01em] font-medium">
              &ldquo;Le preguntaría si cree que los datos que tiene son los veraces, los
              reales. Ese es el punto de partida. A partir de ahí, la conversación sale
              sola.&rdquo;
            </p>
            <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
              Eduardo Martin · Dreamplace Hotels
            </cite>
          </blockquote>

          <p className="mt-10 text-[17px] leading-[1.7] text-ink">
            Es, probablemente, la mejor síntesis del problema que SealMetrics resuelve.
            La mayoría de equipos de marketing en eCommerce llevan años dando por
            buenos datos incompletos, porque no hay un punto de referencia claro frente
            al cual medir. Tener ese punto de referencia —y tomar decisiones de
            inversión a partir de él— es lo que hace la diferencia entre acertar por
            suerte y acertar por método.
          </p>

          <p className="mt-12 italic text-[13px] leading-[1.6] text-ink-soft">
            Caso de estudio elaborado a partir de una conversación con Eduardo Martin,
            responsable de analítica y gestión de campañas de Dreamplace Hotels, en abril de 2026. Todas las
            cifras citadas proceden de estimaciones propias del equipo de Dreamplace
            basadas en su comparación interna entre SealMetrics, herramientas de
            analítica de terceros y su CRM.
          </p>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="es"
        titleEn={
          <>
            Are the numbers you have{" "}
            <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              the real ones?
            </em>
          </>
        }
        titleEs={
          <>
            ¿Crees que los datos que tienes{" "}
            <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              son los reales?
            </em>
          </>
        }
        ledeEn="Free measurement audit. We show you how much traffic and revenue attribution is missing from your current analytics. No commitment, nothing to install."
        ledeEs="Pide una auditoría gratuita de tu medición actual. Te mostramos cuánto tráfico y atribución de venta está quedando fuera de tu analítica. Sin compromiso, sin instalar nada."
      />
    </>
  );
}
