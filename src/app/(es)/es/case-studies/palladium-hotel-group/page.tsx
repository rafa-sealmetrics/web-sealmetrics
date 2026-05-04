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
  title: "Palladium Hotel Group · fuente única de verdad — Caso",
  description:
    "Palladium Hotel Group usa SealMetrics como fuente única de verdad para marca, agencias y departamentos. El disparador: 40% de tráfico sin atribución.",
  alternates: {
    canonical: "https://sealmetrics.com/es/case-studies/palladium-hotel-group",
    languages: getAlternatesEs("/case-studies/palladium-hotel-group"),
  },
  openGraph: {
    title:
      "Palladium Hotel Group — Una única fuente de verdad que todos los players aceptan",
    description:
      "Por qué Palladium Hotel Group eligió neutralidad sobre volumen reportado. 40% sin atribución. 35% reservas sin asignar. +165% Coste por Búsqueda en Display.",
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
          { label: "Palladium Hotel Group" },
        ]}
        locale="es"
      />
      <JsonLd
        data={breadcrumbSchema(
          [
            { name: "Casos de estudio", url: "/es/case-studies" },
            { name: "Palladium Hotel Group", url: "/es/case-studies/palladium-hotel-group" },
          ],
          "es"
        )}
      />
      <JsonLd
        data={casePersonSchema({
          name: "Toni Andújar",
          jobTitle: "Director Digital y Venta Directa",
          worksForName: "Palladium Hotel Group",
          worksForUrl: "https://www.palladiumhotelgroup.com/",
          caseUrl: "/es/case-studies/palladium-hotel-group",
          caseName: "Caso Palladium Hotel Group — Una fuente neutra única de verdad",
        })}
      />
      <JsonLd
        data={articleSchema({
          headline: "Caso Palladium Hotel Group — Una fuente neutra única de verdad",
          description:
            "Palladium Hotel Group adoptó SealMetrics como capa de medición neutra que marca, agencias y departamentos aceptan. 40% del tráfico no estaba atribuido antes; +165% Coste-por-Búsqueda en Display después.",
          datePublished: "2026-04-15",
          dateModified: "2026-04-15",
          url: "/es/case-studies/palladium-hotel-group",
          category: "Caso de estudio",
          author: { name: "SealMetrics", url: "/es/about" },
          image: "https://sealmetrics.com/og-image.png",
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "El 40% del tráfico entrante no tenía atribución de source/medium en el stack de medición anterior.",
          source: "Auditoría interna de Palladium Hotel Group · abril 2026",
          sourceAuthor: "Palladium Hotel Group",
          sourceDate: "2026-04-15",
          url: "/es/case-studies/palladium-hotel-group",
          numericValue: 40,
          unit: "PERCENT",
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "El 35% de las reservas registradas como evento en GA4 no podían asignarse al canal que las había generado.",
          source: "Brecha de atribución de reservas · Palladium Hotel Group · abril 2026",
          sourceAuthor: "Palladium Hotel Group",
          sourceDate: "2026-04-15",
          url: "/es/case-studies/palladium-hotel-group",
          numericValue: 35,
          unit: "PERCENT",
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "Mejora del +165% en Coste por Búsqueda del canal Display tras implantar un modelo de medición basado en SealMetrics sobre DV360.",
          source: "Mejora de eficiencia DV360 · Palladium Hotel Group · abril 2026",
          sourceAuthor: "Palladium Hotel Group",
          sourceDate: "2026-04-15",
          url: "/es/case-studies/palladium-hotel-group",
          numericValue: 165,
          unit: "PERCENT",
        })}
      />
      <JsonLd
        data={quotationSchema({
          text: "Los datos que da SealMetrics son agnósticos, no están sesgados y son neutrales. No hay caja negra.",
          spokenBy: "Toni Andújar",
          spokenByRole: "Director Digital y Venta Directa · Palladium Hotel Group",
          url: "/es/case-studies/palladium-hotel-group",
        })}
      />
      <JsonLd
        data={quotationSchema({
          text: "Hoy por hoy todos los players están contentos. Los datos son neutrales, no hay caja negra y todos han aceptado estos valores como la referencia.",
          spokenBy: "Toni Andújar",
          spokenByRole: "Director Digital y Venta Directa · Palladium Hotel Group",
          url: "/es/case-studies/palladium-hotel-group",
        })}
      />
      <JsonLd
        data={reviewSchema({
          reviewBody:
            "Los datos que da SealMetrics son agnósticos, no están sesgados y son neutrales. No hay caja negra.",
          authorName: "Toni Andújar",
          authorRole: "Director Digital y Venta Directa · Palladium Hotel Group",
          datePublished: "2026-04-15",
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <span className="eyebrow mb-5">Caso de estudio · Palladium Hotel Group</span>
          <h1 className="h-display mt-5" style={{ maxWidth: "26ch" }}>
            Una única fuente de verdad que marca, agencias y departamentos{" "}
            <em>aceptan como válida.</em>
          </h1>
          <p
            className="text-ink-soft mt-8 max-w-[68ch] leading-[1.55] italic"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            Palladium Hotel Group usa SealMetrics como single source of truth para alinear
            objetivos de conversión con sus agencias y entre departamentos. La cifra que
            disparó el cambio: el 40% de su tráfico era invisible a nivel de atribución
            para su stack de medición anterior.
          </p>
        </div>
      </section>

      {/* Client meta strip */}
      <section className="border-t border-warm-100 bg-warm-white py-10">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { l: "Cliente", v: "Palladium Hotel Group" },
              { l: "Sector", v: "Hoteles · eCommerce" },
              { l: "Uso principal", v: "Single source of truth" },
              { l: "Alcance", v: "Marca + agencias" },
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
              En marketing y eCommerce, medir el resultado de una campaña es solo una
              parte del problema. La otra, igual de importante, es que todas las partes
              implicadas estén mirando el mismo dato. Cuando la marca, la agencia de paid
              media, la agencia creativa y el equipo interno de analytics ven cuatro
              números distintos para la misma campaña, no hay conversación posible: cada
              parte defiende su métrica.
            </p>
            <p>
              Palladium Hotel Group decidió cortar ese nudo. En lugar de elegir la
              herramienta que más ventas reportaba o la que mejor le venía a cada
              departamento, eligieron un criterio distinto:{" "}
              <b>la herramienta más neutral</b>.
            </p>
            <p>
              Ese criterio les llevó a SealMetrics. Y desde entonces, los objetivos de
              conversión —a nivel de compañía, de departamento y con sus agencias
              externas— se definen y se miden contra los datos que SealMetrics entrega.
            </p>
          </div>

          <blockquote
            className="mt-12 border-l-[3px] pl-6 py-1 italic"
            style={{ borderColor: "#2E5C8A", color: "#0E0E0C" }}
          >
            <p className="text-[22px] leading-[1.4] tracking-[-0.01em] font-medium">
              &ldquo;Los datos que da SealMetrics son agnósticos, no están sesgados y son
              neutrales. No hay caja negra.&rdquo;
            </p>
            <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
              Toni Andújar · Director Digital y Venta Directa · Palladium Hotel Group
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Headline stats */}
      <section className="bg-warm-white border-t border-warm-100 py-16">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: "40",
              u: "%",
              l: "Tráfico sin atribución antes de SealMetrics",
              note: "El dato existía, pero el origen (source / medium) se perdía.",
            },
            {
              n: "35",
              u: "%",
              l: "Reservas sin atribución",
              note: "El evento se registraba en GA4, pero no se podía asignar al canal que lo generó.",
            },
            {
              n: "1",
              u: "",
              l: "Fuente única de verdad",
              note: "Aceptada por todos los players: marca, departamentos y agencias externas.",
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

      {/* The real problem */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            El problema real: cuatro herramientas, <em>cuatro verdades.</em>
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Como cualquier marca con inversión seria en paid media, Palladium Hotel Group
              Group opera con un ecosistema de medición fragmentado: el pixel de Meta, el
              tag de Google Ads, Google Analytics, el booking engine y las plataformas
              propias de cada agencia colaboradora. Varias fuentes que rara vez coinciden.
            </p>
            <p>
              El resultado habitual es conocido por cualquier equipo de Canal Directo:
              reuniones de reporting donde media hora se va en cuadrar cifras, objetivos
              negociados con la agencia en base a métricas que luego el equipo interno no
              valida, y decisiones de inversión tomadas sobre datos que cada parte
              interpreta como le conviene.
            </p>
            <p>En ese contexto, el primer descubrimiento con SealMetrics fue de escala.</p>
          </div>

          <div className="mt-10 bg-warm-50 border border-warm-100 rounded-xl p-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-3">
              El hallazgo que cambió la conversación
            </div>
            <h3
              className="font-semibold text-ink leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
            >
              El 40% del tráfico no tenía atribución.
            </h3>
            <div className="mt-5 space-y-4 text-[16px] leading-[1.65] text-ink-2">
              <p>
                Al comparar SealMetrics con su stack previo, Palladium Hotel Group
                descubrió que aproximadamente el 40% del tráfico que llegaba al site no se
                atribuía correctamente: aparecía registrado como tráfico, pero su origen
                real (source / medium) se perdía y acababa absorbido por
                &ldquo;directo&rdquo; o quedaba sin asignar.
              </p>
              <p>
                Sobre las reservas, el efecto fue equivalente. Los eventos de reserva sí
                aparecían en GA4 —porque el equipo trabaja con eventos correctamente
                configurados—, pero el 35% de esas reservas no se podía conectar con la
                campaña, canal o soporte que las había generado.
              </p>
              <p>
                Con esa foto, discutir sobre décimas de ROAS en una reunión con la
                agencia pasa a ser una conversación distinta. Ya no es &ldquo;tu número
                frente al mío&rdquo;. Es &ldquo;una parte sustancial de lo que pasa en el
                site no se está atribuyendo a nadie en el reporte de ninguno de los
                dos&rdquo;.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic decision */}
      <section className="bg-warm-white border-t border-warm-100 py-20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="max-w-[760px] mx-auto">
            <h2 className="h-section">
              La decisión estratégica: elegir por exactitud,{" "}
              <em>no por volumen reportado.</em>
            </h2>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
              <p>
                Aquí está el punto que diferencia a Palladium Hotel Group de muchos otros
                equipos digitales. Cuando una marca compara herramientas de medición, la
                tentación natural es quedarse con la que más reports y más conversiones
                ofrece, no con la que ofrece los datos más exactos. Es una tentación
                comprensible: la herramienta que infla las cifras siempre queda mejor en
                el comité de dirección.
              </p>
              <p>
                Palladium Hotel Group eligió al revés. Eligieron la herramienta que medía
                el 100% de los eventos que ocurrían en el site —sin modelado, sin
                estimación, sin atribución sesgada hacia un canal propio— y asumieron que
                el dato bueno a veces incomoda más que el dato optimista.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-[860px] mx-auto bg-white border border-warm-100 rounded-xl p-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold text-center mb-6">
              El problema de gobernanza del dato
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Plataforma A", name: "Meta Ads" },
                { label: "Plataforma B", name: "Google Ads" },
                { label: "Agregador", name: "Google Analytics" },
              ].map((t) => (
                <div
                  key={t.name}
                  className="bg-warm-50 border border-warm-100 rounded-md p-5 text-center"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-2">
                    {t.label}
                  </div>
                  <div className="text-[16px] font-semibold text-ink">{t.name}</div>
                </div>
              ))}
            </div>
            <div className="text-center text-ink-soft my-4">↓</div>
            <div className="bg-ink text-white rounded-md p-6 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-brand-soft font-semibold mb-2">
                Fuente de verdad neutral
              </div>
              <div className="text-[20px] font-semibold tracking-[-0.01em]">SealMetrics</div>
            </div>
          </div>

          <div className="mt-10 max-w-[760px] mx-auto space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Meta reporta con el sesgo de Meta. Google reporta con el sesgo de Google.
              Analytics vive en el ecosistema de Google. Cualquier cuadro de mando
              construido sobre esas tres fuentes tiene un sesgo estructural imposible de
              corregir.
            </p>
            <p>
              SealMetrics no vende inventario, no optimiza campañas y no tiene incentivo
              para inflar atribución hacia ningún canal. Esa neutralidad —técnica y
              comercial— es lo que permite que la agencia de medios, el equipo de Canal
              Directo y la dirección de la compañía firmen objetivos contra esos números
              sin que nadie sienta que está firmando contra un rival.
            </p>
          </div>
        </div>
      </section>

      {/* Business outcome */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            El resultado de negocio: el 35% de reservas{" "}
            <em>que no estaban atribuidas.</em>
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              El tráfico sin atribución tiene una consecuencia directa: las reservas que
              genera ese tráfico tampoco se pueden asignar a un canal en los reportes.
              Según el equipo de Palladium Hotel Group, aproximadamente el 35% de las
              reservas que aparecían en GA4 no podían asociarse a la fuente que las había
              generado. Reservas reales, registradas como evento, pero sin atribución
              utilizable para tomar decisiones de inversión.
            </p>
            <p>
              La proporción tiene sentido: no todo el tráfico cuya atribución se pierde
              convierte al mismo ratio que el tráfico bien atribuido, por lo que un gap
              del 40% en atribución de tráfico se traduce en un gap algo menor —pero
              todavía importante— en atribución de reservas. Una de cada tres reservas,
              aproximadamente, ocurría sin que el equipo supiera con certeza qué campaña,
              qué canal o qué decisión de marketing la había generado.
            </p>
            <p>
              Cuando SealMetrics empezó a atribuir esas reservas al canal que realmente
              las había originado, cambió no solo el volumen reportado por canal sino la
              composición del mix. Canales que parecían &ldquo;caros&rdquo; a la luz del
              stack anterior se revelaban rentables; campañas que parecían estrella
              resultaban ser pasajeras que recogían demanda generada por otros canales.
            </p>
          </div>

          <blockquote
            className="mt-12 border-l-[3px] pl-6 py-1 italic"
            style={{ borderColor: "#2E5C8A", color: "#0E0E0C" }}
          >
            <p className="text-[22px] leading-[1.4] tracking-[-0.01em] font-medium">
              &ldquo;Hoy por hoy todos los players están contentos. Los datos son
              neutrales, no hay caja negra y todos han aceptado estos valores como la
              referencia.&rdquo;
            </p>
            <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
              Toni Andújar · Director Digital y Venta Directa · Palladium Hotel Group
            </cite>
          </blockquote>
        </div>
      </section>

      {/* DV360 case */}
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
              El caso DV360
            </span>
            <h2 className="h-section text-white mt-5">
              Un modelo de medición eficiente{" "}
              <em
                className="italic font-medium"
                style={{ color: "#E8B84B", fontStyle: "italic" }}
              >
                para el canal Display.
              </em>
            </h2>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-white/85">
              <p>
                Una de las aplicaciones más intensivas que Palladium Hotel Group hizo de
                SealMetrics fue sobre sus campañas de Display &amp; Video 360, la
                plataforma programática de Google. El problema clásico de cualquier
                compra programática es el mismo: una parte del inventario convierte mejor
                que la otra, y distinguirlas desde dentro de la propia plataforma no es
                trivial.
              </p>
              <p>
                Antes de SealMetrics, el problema de fondo era de medición: con un 40%
                del tráfico sin atribución, no había manera de construir un modelo
                robusto para evaluar Display. Con el pixel y la medición nativa, el equipo
                veía agregados, pero no podía aislar qué partners, soportes o audiencias
                estaban realmente generando intención cualificada.
              </p>
              <p>
                SealMetrics les permitió implantar{" "}
                <b className="text-white">
                  un modelo de medición eficiente y robusto para el canal Display basado
                  en el Coste por Búsqueda
                </b>{" "}
                —es decir, el coste por búsqueda de disponibilidad en su booking engine—.
                Con todo el tráfico atribuido correctamente al partner y soporte de
                origen, el equipo pudo distinguir qué partes del inventario movían
                búsquedas reales de disponibilidad y cuáles solo aportaban volumen.
              </p>
              <p>
                Con ese modelo en la mano, Palladium Hotel Group optimizó{" "}
                <b className="text-white">
                  partners, soportes, audiencias y estrategias
                </b>{" "}
                de display, rebalanceando inversión hacia la combinación que rendía mejor
                sobre la métrica que importaba.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-[860px] mx-auto bg-white/5 border border-white/15 rounded-xl p-10">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand-soft font-semibold mb-4">
              Resultado en Display
            </div>
            <div
              className="font-semibold tracking-[-0.04em] text-white leading-[0.9] tabular-nums"
              style={{ fontSize: "clamp(64px, 9vw, 130px)" }}
            >
              +165
              <span
                className="italic font-medium"
                style={{ color: "#E8B84B", fontStyle: "italic" }}
              >
                %
              </span>
            </div>
            <div className="mt-5 text-[18px] leading-[1.5] text-white/85 max-w-[58ch]">
              de mejora en Coste por Búsqueda del canal Display tras implantar el modelo
              de medición sobre SealMetrics y rebalancear el mix de partners, soportes,
              audiencias y estrategias. Mismo presupuesto, modelo de medición distinto,
              decisiones distintas.
            </div>
          </div>

          <div className="mt-14 max-w-[860px] mx-auto">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/60 font-semibold mb-6">
              Cómo usaron el dato — flujo de decisión
            </div>
            <ol className="space-y-6">
              {[
                {
                  n: "01",
                  t: "Atribuir el 100%",
                  d: "SealMetrics atribuye correctamente el tráfico entrante desde DV360 a partner, soporte y audiencia, sin depender del consentimiento ni del pixel de la plataforma.",
                },
                {
                  n: "02",
                  t: "Modelar sobre Coste por Búsqueda",
                  d: "Con la atribución resuelta, se construye un modelo basado en el Coste por Búsqueda de disponibilidad en el booking engine: una métrica más cercana a la intención real que las conversiones agregadas.",
                },
                {
                  n: "03",
                  t: "Optimizar mix",
                  d: "Se rebalancean partners, soportes, audiencias y estrategias hacia la combinación que rinde mejor sobre Coste por Búsqueda. Se cortan los que aportan volumen sin intención.",
                },
                {
                  n: "04",
                  t: "Escalar con criterio",
                  d: "Con un modelo robusto, se incorporan nuevos partners y soportes con la certeza de que se evaluarán con el mismo rigor. Las decisiones de escalado dejan de ser intuición y pasan a ser dato.",
                },
              ].map((step) => (
                <li
                  key={step.n}
                  className="grid grid-cols-[auto_1fr] gap-6 pb-6 border-b border-white/10 last:border-0"
                >
                  <div className="font-mono text-[12px] tracking-[0.08em] text-brand-soft font-semibold pt-1">
                    {step.n}
                  </div>
                  <div>
                    <div className="text-[18px] font-semibold text-white tracking-[-0.015em]">
                      {step.t}
                    </div>
                    <div className="text-[15px] leading-[1.6] text-white/75 mt-1.5">
                      {step.d}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why this case matters */}
      <section className="bg-warm-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <div className="bg-white border-l-[3px] border-warm-200 rounded-md p-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-3">
              Por qué este caso importa
            </div>
            <h3
              className="font-semibold text-ink leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
            >
              El mismo principio aplicable a cualquier compra programática.
            </h3>
            <p className="mt-5 text-[16px] leading-[1.65] text-ink-2">
              Lo que Palladium Hotel Group hizo con DV360 se puede replicar con cualquier
              plataforma de compra basada en inventario múltiple: Display, Native,
              Connected TV, Audio. El patrón es idéntico: sin atribución completa, no hay
              modelo de medición posible. Con atribución completa, el Coste por Búsqueda
              —o cualquier proxy de intención cercano al producto— se convierte en la
              palanca para rebalancear el mix.
            </p>
          </div>
        </div>
      </section>

      {/* What this unlocks day-to-day */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <h2 className="h-section text-center mx-auto" style={{ maxWidth: "22ch" }}>
            Lo que esto desbloquea <em>en el día a día.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              {
                t: "Objetivos alineados con agencias",
                d: "Los KPIs de conversión que Palladium Hotel Group firma con sus agencias externas se definen y se miden contra el dato de SealMetrics. Fin de la discusión de qué pixel mira cada parte.",
              },
              {
                t: "Coherencia entre departamentos",
                d: "Canal Directo, eCommerce y dirección ven los mismos números. No hay cuatro versiones de la misma campaña circulando por la organización.",
              },
              {
                t: "Decisiones de inversión defendibles",
                d: "Cuando se recorta presupuesto de un canal o se escala otro, la decisión se sostiene sobre un dato que ningún stakeholder puede impugnar por sesgo.",
              },
              {
                t: "Menos reuniones de reconciliación",
                d: "El tiempo que antes se iba en cuadrar cifras entre herramientas se libera para el análisis y la optimización reales.",
              },
            ].map((b) => (
              <article
                key={b.t}
                className="bg-warm-50 border border-warm-100 rounded-xl p-7"
              >
                <div className="text-brand text-[18px] mb-2">→</div>
                <h4 className="text-[18px] font-semibold text-ink tracking-[-0.015em] mb-2">
                  {b.t}
                </h4>
                <p className="text-[15px] leading-[1.6] text-ink-2">{b.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson */}
      <section className="bg-warm-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            La lección para otras marcas: precisión y neutralidad{" "}
            <em>son la feature.</em>
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Las buenas herramientas de analítica se evalúan por dos criterios distintos
              que a menudo se confunden en el mismo pitch: <b>la precisión del dato</b>{" "}
              (cuánto se acerca a la realidad) y <b>la neutralidad del dato</b> (cuánto
              depende de quién lo reporta). Casos como el de Palladium Hotel Group
              muestran por qué las dos cosas importan, y por qué hacen falta las dos a la
              vez.
            </p>
            <p>
              La precisión es la base. SealMetrics mide sin modelar, sin samplear, sin
              estimar: captura el 100% de los eventos que suceden en el site y los
              procesa tal cual. En una era en la que GA4 reporta medias estadísticas
              derivadas de modelos data-driven —estimaciones, no mediciones—, tener el
              dato exacto es la primera condición para tomar decisiones defendibles.
            </p>
            <p>
              La neutralidad es lo que convierte ese dato exacto en un lenguaje común.
              Las plataformas publicitarias también son precisas en su propio dominio
              —Meta sabe perfectamente qué usuarios vieron sus anuncios, Google sabe qué
              clics generaron sus ads—, pero cada una reporta con el sesgo natural de su
              negocio: atribuirse el máximo de conversiones posibles. Un dato preciso sin
              neutralidad sigue siendo parcial. Un dato neutral sin precisión no es útil.
              Lo que desbloqueó el caso de Palladium Hotel Group es tener ambas cosas en
              la misma fuente.
            </p>
            <p>
              Cualquier organización con más de un departamento tocando la cuenta de
              marketing y más de un partner externo mirando los mismos números vive,
              silenciosamente, el mismo problema. La solución no es tener datos más
              precisos en una de las partes. Es tener una fuente cuya precisión y cuya
              neutralidad acepten todas las partes como legítimas antes de empezar a
              discutir qué hacer con ellos.
            </p>
          </div>

          <p className="mt-12 italic text-[13px] leading-[1.6] text-ink-soft">
            Caso de estudio elaborado a partir de una conversación con Digital & Direct Sales Director,
            Digital &amp; Direct Sales Director de Palladium Hotel Group, en abril de
            2026. Todas las cifras citadas proceden de estimaciones propias del equipo de
            Palladium Hotel Group basadas en su comparación interna entre SealMetrics,
            las herramientas de analítica previas de la compañía y su booking engine. Los
            porcentajes reflejan la lectura del cliente sobre su propia operación, no un
            benchmark de SealMetrics.
          </p>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="es"
        titleEn={
          <>
            Run your own{" "}
            <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              neutrality test
            </em>{" "}
            in 30 minutes.
          </>
        }
        titleEs={
          <>
            Haz tu propia{" "}
            <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              prueba de neutralidad
            </em>{" "}
            en 30 minutos.
          </>
        }
        ledeEn="Book a walkthrough. We run your own site through SealMetrics, surface the attribution gap live, and show you what you've been missing."
        ledeEs="Reserva walkthrough. Pasamos tu web por SealMetrics, sacamos el gap de atribución en directo y te mostramos qué te estás perdiendo."
      />
    </>
  );
}
