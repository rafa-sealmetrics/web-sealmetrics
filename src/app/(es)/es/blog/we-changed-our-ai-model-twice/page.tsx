import type { Metadata } from "next";
import { PostByline } from "@/components/ui/PostByline";
import { getAlternates } from "@/lib/i18n/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  speakableWebPageSchema,
  statisticClaimSchema,
} from "@/lib/schema";
import { CommercialModule } from "@/components/ui/CommercialModule";

const SLUG = "we-changed-our-ai-model-twice";
const URL = `/es/blog/${SLUG}`;
const TITLE = "Cambiamos de modelo de IA dos veces en tres semanas — y ese es justo el punto";
const DESCRIPTION =
  "La trazabilidad completa del modelo que hay detrás de Seal AI: por qué Gemma 4 falló en el tool-calling, por qué Mistral Small 3.2 acabó con los bucles pero no con las respuestas pobres, y por qué ganó gpt-oss-120b. Dos cambios en tres semanas no son inestabilidad: son la prueba de que alguien está midiendo.";

export const metadata: Metadata = {
  title: "Cambiamos de modelo de IA dos veces en tres semanas",
  description: "Por qué Gemma 4 falló en tool-calling, por qué Mistral Small 3.2 acabó con los bucles pero no con las respuestas, y por qué ganó gpt-oss-120b.",
  openGraph: {
    title: "Cambiamos de modelo de IA dos veces en tres semanas",
    description:
      "Gemma 4, Mistral Small 3.2, gpt-oss-120b — cómo falló realmente cada uno, y por qué cada cambio salió de la evidencia en producción y no de una nota de prensa.",
    type: "article",
    url: "https://sealmetrics.com/es/blog/we-changed-our-ai-model-twice/",
    siteName: "Sealmetrics",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og/blog/we-changed-our-ai-model-twice.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Cambiamos de modelo de IA dos veces en tres semanas",
    description: "Gemma 4, Mistral Small 3.2, gpt-oss-120b — cómo falló realmente cada uno, y por qué cada cambio salió de la evidencia en producción y no de una nota de prensa.",
    images: ["https://sealmetrics.com/og/blog/we-changed-our-ai-model-twice.png"],
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Cómo elijo el modelo de IA para mi producto?",
    answer:
      "Elígelo con tu propia carga de trabajo, no con un ranking. Pasa los candidatos por tu stack real — tu endpoint, tu inventario de herramientas, tus datos — y puntúalos según los comportamientos de los que depende tu producto: llamadas a herramientas correctas, respuestas ancladas en los datos devueltos, salida estructurada limpia y comportamiento ante las negativas. Despliega al ganador detrás de un interruptor de configuración, para que sustituirlo más adelante cueste un deploy y no una reescritura.",
  },
  {
    question: "Gemma, Mistral o gpt-oss para tool-calling: ¿cuál es mejor?",
    answer:
      "En nuestras pruebas contra un inventario de 63 herramientas de analítica, gpt-oss-120b fue el mejor de los tres en tool-calling. Una variante pequeña de Gemma de tipo mixture-of-experts, con unos 4B de parámetros activos por token, se quedó corta y degeneraba en bucles de repetición. Mistral Small 3.2 (denso, 24B) fue el más rápido y acabó con los bucles, pero en uso real daba respuestas escuetas, negativas sin fundamento y formato roto.",
  },
  {
    question: "¿Por qué los modelos mixture-of-experts pequeños fallan al llamar funciones?",
    answer:
      "Porque solo una fracción de los parámetros está activa en cada token. Un modelo anunciado como 26B totales pero que activa unos 4B por token tiene aproximadamente 4B de capacidad de razonamiento disponible en cada paso. Planificar una llamada a herramientas de varios pasos entre decenas de funciones y luego sintetizar los resultados es exactamente el tipo de trabajo sostenido en el que esa capacidad activa tan fina se rompe: en nuestro caso, colapsando en bucles de repetición a mitad de respuesta.",
  },
  {
    question: "¿Es mala señal que un proveedor SaaS cambie el modelo de IA de su producto?",
    answer:
      "Por sí mismo no: lo que importa es el porqué y el cómo. Un cambio motivado por mediciones sobre la carga de trabajo real del proveedor, con la evidencia publicada, indica que ese proveedor está probando. Un cambio motivado por cuál fue el último modelo anunciado, no. Pregunta qué prueba superó el modelo nuevo que el anterior suspendía, y si los resultados antiguos siguen disponibles.",
  },
  {
    question: "¿Qué es gpt-oss-120b y por qué usarlo para analítica?",
    answer:
      "gpt-oss-120b es un modelo de pesos abiertos con licencia Apache 2.0: 117B de parámetros totales con 5,1B activos por token, ventana de contexto de 128k, cuantización nativa MXFP4 que le permite caber en una sola GPU de 80GB y soporte de primer nivel en vLLM. Para analítica anclada en datos gana por fiabilidad en el tool-calling, no por conocimiento general, porque los datos viajan en el prompt y el modelo solo tiene que operar sobre ellos.",
  },
];

export default function WeChangedOurAiModelTwicePageEs() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-24",
          dateModified: "2026-07-28",
          url: URL,
          category: "IA",
          author: {
            name: "Rafa Jiménez",
            url: "/es/authors/rafa-jimenez",
            jobTitle: "Founder, Sealmetrics",
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", url: "/es/blog" },
          { name: "Cambiamos de modelo de IA dos veces en tres semanas", url: URL },
        ])}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "Sealmetrics sustituyó dos veces en tres semanas el modelo que hay detrás de Seal AI — de gemma-4-26b-a4b (2 de julio de 2026) a mistral-small-3.2-24b (21 de julio de 2026) y de ahí a gpt-oss-120b (22 de julio de 2026) — y un benchmark bilingüe posterior de 162 consultas confirmó la elección final: 18 de 18 trampas de grounding e inyección superadas y 144 de 144 hechos verificados correctos, frente a 9 de 18 trampas en el caso de mistral-small-3.2.",
          source: "Sealmetrics internal LLM benchmark (run 20260724-111147)",
          sourceAuthor: "Sealmetrics",
          sourceDate: "2026-07-24",
          url: URL,
        })}
      />
      <JsonLd data={faqPageSchema(FAQ, URL)} />
      <JsonLd
        data={speakableWebPageSchema({
          url: URL,
          name: TITLE,
          selectors: [".key-takeaways", ".tldr"],
        })}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/es/blog" },
          { label: "Cambiamos de modelo de IA dos veces" },
        ]}
        locale="es"
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              IA
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Cambiamos de modelo de IA dos veces en tres semanas — y ese es
              justo el punto
            </h1>
            <PostByline
              datePublished="2026-07-24"
              dateModified="2026-07-28"
              readTime="6 min de lectura"
              authorName="Rafa Jiménez"
              authorUrl="/es/authors/rafa-jimenez"
              locale="es"
            />
          </header>

          <p className="tldr mb-12 text-[1.15rem] leading-[1.7] text-text-secondary font-serif italic">
            En tres semanas, el modelo que hay detrás de Seal AI cambió dos
            veces. Nuestra primera elección fue mala, la segunda fue mejor y aun
            así insuficiente, y la tercera es la que está funcionando hoy. Cada
            cambio salió de una evidencia en nuestro propio producto, no de un
            anuncio de lanzamiento.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Nuestra primera elección fue mala. Un modelo mixture-of-experts
                con solo unos 4B de parámetros activos por token no era capaz de
                planificar llamadas a herramientas sobre un inventario de 63
                funciones y degeneraba en bucles de repetición.
              </li>
              <li>
                La segunda acabó con los bucles y fue la más rápida de la
                terna, pero el uso real destapó respuestas escuetas, negativas
                sin fundamento y formato roto.
              </li>
              <li>
                La tercera — <strong>gpt-oss-120b</strong> — fue la mejor de las
                tres en tool-calling, con cero negativas y cero fallos de
                formato, y con una calidad a la altura de un modelo que cuesta
                unas cuatro veces más.
              </li>
              <li>
                Dos cambios en tres semanas no son inestabilidad. Son la pinta
                que tiene medir: cada cambio lo disparó un fallo que observamos,
                y después lo volvimos a verificar con un benchmark bilingüe de
                162 consultas.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Esta parte no suele contarla nadie. El modelo que hay detrás de
              una funcionalidad de IA se anuncia una vez, en el post de
              lanzamiento, y cualquier cambio posterior ocurre en silencio.
              Nosotros hacemos lo contrario, porque esos cambios son lo más útil
              que podemos contarte sobre cómo se construyó la funcionalidad.
            </p>
            <p>
              Seal AI es la capa de IA privada dentro de Sealmetrics: haces una
              pregunta sobre tu analítica en lenguaje natural y responde{" "}
              <em>llamando a herramientas</em> contra tus datos — 63 en total,
              desde vistas generales y canales hasta embudos y segmentos. Ese
              trabajo castiga a los modelos de formas que los benchmarks
              generalistas no enseñan nunca. Esto es lo que pasó cuando probamos
              tres de ellos.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              La línea temporal
            </h2>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>2 de julio de 2026 — gemma-4-26b-a4b.</strong> Primera
                elección. Sustituido tras demostrar que era demasiado débil para
                llamar funciones y degenerar en bucles de repetición.
              </li>
              <li>
                <strong>21 de julio de 2026 — mistral-small-3.2-24b.</strong>{" "}
                Denso de 24B, más rápido y más barato. Acabó con los bucles.
                Sustituido cuando el uso real destapó respuestas escuetas,
                negativas absurdas y formato roto.
              </li>
              <li>
                <strong>22 de julio de 2026 — gpt-oss-120b.</strong> El mejor de
                la terna en tool-calling, cero negativas, cero fallos de
                formato. El modelo por defecto hoy.
              </li>
              <li>
                <strong>24 de julio de 2026 — la verificación.</strong> 162
                consultas reales contra tres modelos y dos idiomas, sobre el
                stack de producto real, para comprobar que la decisión aguantaba
                una medición y no solo una impresión.
              </li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Elección uno: no había parámetros activos suficientes para pensar
            </h2>
            <p>
              Empezamos con <strong>gemma-4-26b-a4b</strong>. Sobre el papel
              parecía una elección eficiente: un modelo mixture-of-experts, 26B
              de parámetros totales, barato de servir. El número que importaba
              era justo el que infravaloramos: solo unos{" "}
              <strong>4B de parámetros activos por token</strong>.
            </p>
            <p>
              Un modelo mixture-of-experts enruta cada token por un subconjunto
              pequeño de sus parámetros. El tamaño total te compra amplitud de
              conocimiento; el tamaño activo te compra razonamiento en cada
              paso. Cuatro mil millones de parámetros activos no dan para
              sostener un plan mientras eliges la función correcta entre 63,
              rellenas bien sus argumentos, lees el resultado y decides qué
              llamar a continuación.
            </p>
            <p>
              El fallo no fue sutil. Fallaba al llamar funciones y, durante la
              fase de síntesis — la parte en la que convierte los resultados de
              las herramientas en prosa —, degeneraba en{" "}
              <strong>bucles de repetición</strong>, repitiendo la misma frase
              hasta dejar la respuesta inservible. Es un modo de fallo conocido
              de los modelos mixture-of-experts abiertos bajo presión de
              generación, y habíamos elegido una configuración especialmente
              expuesta a él.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Elección dos: se acabaron los bucles, empeoraron las respuestas
            </h2>
            <p>
              Diecinueve días después pasamos a{" "}
              <strong>mistral-small-3.2-24b</strong>: un modelo denso de 24B,
              más rápido y más barato de ejecutar. Denso significa que todos los
              parámetros participan en todos los tokens, así que el problema de
              razonamiento por paso desapareció. Combinado con controles de
              muestreo — temperatura baja y una penalización de frecuencia que
              frena la degeneración habitual de los modelos abiertos —, los
              bucles de repetición se acabaron.
            </p>
            <p>
              Entonces el uso real empezó a generar otro tipo de quejas. La
              salida era <strong>escueta</strong> allí donde un marketer
              necesitaba una explicación. Producía{" "}
              <strong>negativas absurdas</strong>: se negaba a contestar
              preguntas que era perfectamente capaz de responder. Y{" "}
              <strong>se le rompía el formato</strong>: las partes estructuradas
              de una respuesta no volvían limpias de forma fiable.
            </p>
            <p>
              Nada de eso aparece en un ranking. Todo eso aparece la primera vez
              que alguien pregunta algo real sobre su propio tráfico y recibe
              una no-respuesta de dos líneas.
            </p>

            <CommercialModule
              locale="es"
              hook="¿Tu proveedor de IA te cuenta por qué eligió su modelo — y qué descartó por el camino? En una demo ves la elección actual, gpt-oss-120b en Scaleway París, respondiendo sobre tu propio tráfico."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Elección tres: gpt-oss-120b
            </h2>
            <p>
              Al día siguiente cambiamos a <strong>gpt-oss-120b</strong>: un
              modelo de pesos abiertos con licencia Apache 2.0, 117B de
              parámetros totales con 5,1B activos por token, ventana de contexto
              de 128k, cuantización nativa MXFP4 que le permite caber en una
              sola GPU de 80GB y soporte de primer nivel en vLLM.
            </p>
            <p>
              Fue el que mejor llamaba a herramientas de los tres. Cero
              negativas. Cero fallos de formato. Y entregó una calidad a la
              altura de un modelo que cuesta{" "}
              <strong>unas cuatro veces más</strong> de ejecutar, algo que
              importa porque un asistente de analítica que la gente usa de
              verdad lanza muchísimas consultas.
            </p>
            <p>
              Que sea de pesos abiertos tampoco es un detalle menor. Podemos
              fijar una versión exacta, inspeccionarla, hacerle red teaming y
              reproducir un resultado meses después. Una API cerrada puede
              cambiar bajo tus pies sin avisar; te enteras por un ticket de
              soporte.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Y después nos revisamos a nosotros mismos
            </h2>
            <p>
              Dos cambios en tres semanas basados en impresiones no son un
              proceso, así que montamos un benchmark: 18 escenarios en español e
              inglés, tres pasadas, tres modelos —{" "}
              <strong>162 consultas reales</strong> — contra el endpoint real
              del asistente, el inventario real de 63 herramientas y los datos
              de una cuenta real, con la verdad de referencia (ground truth)
              calculada en vivo desde la base de datos de analítica para que
              cada cifra fuera comprobable.
            </p>
            <p>
              gpt-oss-120b superó <strong>18 de 18</strong> trampas de grounding
              e inyección y acertó <strong>144 de 144</strong> hechos
              verificados. Mistral Small 3.2 superó <strong>9 de 18</strong>. Su
              fallo característico no era inventar: al preguntarle por una
              campaña que no existe, reconoce la ausencia y luego se desvía a
              describir otras campañas reales con cifras que nadie había pedido.
              En inglés, además, alegaba una incapacidad falsa —«no tengo acceso
              a las herramientas necesarias»— en lugar de explicar dónde
              terminan realmente los datos.
            </p>
            <p>
              Mistral fue de verdad el modelo más rápido de la tanda, con una
              mediana de respuesta en torno a los tres segundos, y su coste
              quedó a un pequeño porcentaje del ganador. Aun así perdió, porque
              la diferencia en las trampas era lo bastante amplia como para que
              los intervalos de confianza dejaran de solaparse. La velocidad
              vale poco si la respuesta cambia la pregunta por lo bajo.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Por qué cambiar dos veces es la funcionalidad, no el fallo
            </h2>
            <p>
              Cada uno de estos cambios fue barato para el cliente e invisible
              en el producto: el modelo se selecciona por configuración y el
              código del producto es idéntico entre modelos. Es deliberado. Si
              sustituir un modelo sale caro, dejas de sustituirlo y empiezas a
              defender el que ya tienes.
            </p>
            <p>
              La alternativa a cambiar dos veces no es la estabilidad: es no
              mirar. Un equipo que no cambia de modelo en un año dentro de un
              campo en movimiento o tiene una suerte excepcional o no está
              midiendo. Preferimos decirte que nuestra primera elección fue mala
              antes que fingir que una trazabilidad con tres entradas solo tenía
              una.
            </p>
            <p>
              Así que el resumen honesto es: pusimos en producción un modelo que
              no daba la talla, lo sustituimos por otro que hacía el trabajo mal
              de formas que solo el uso real revela, y aterrizamos en uno que
              después intentamos romper con ganas y no pudimos. La próxima
              entrada de esta trazabilidad se publicará igual.
            </p>
            <p>
              El expediente completo de la decisión — la auditoría de mercado,
              los benchmarks públicos verificados y la tanda bilingüe íntegra —
              está en nuestro{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/model-selection"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                informe de selección de modelo
              </Link>
              . Si prefieres la metodología antes que el veredicto, lee{" "}
              <Link
                href="/es/blog/how-we-benchmark-our-own-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                cómo hacemos el benchmark de nuestra propia IA
              </Link>
              , o{" "}
              <Link
                href="/es/blog/meet-seal-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                conoce Seal AI
              </Link>{" "}
              para ver qué hace realmente el asistente.
            </p>
          </div>

          <CommercialModule
            locale="es"
            hook="¿Y si el modelo vuelve a cambiar? En una demo ves por qué da igual: la superficie de dato es la misma, la evaluación se repite y puedes traer tu propia clave si lo prefieres."
          />

          <section className="mt-16 pt-10 border-t border-warm-100">
            <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
              Lecturas relacionadas
            </h2>
            <div className="space-y-4">
              <div>
                <Link
                  href="/es/blog/how-we-benchmark-our-own-ai"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Cómo hacemos el benchmark de nuestra propia IA (y por qué
                  publicamos las tandas que descartamos)
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  8 min de lectura
                </p>
              </div>
              <div>
                <Link
                  href="/es/blog/best-llm-for-data-analytics"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  El mejor LLM para analítica de datos no es el que puntúa más
                  alto en los benchmarks
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  7 min de lectura
                </p>
              </div>
              <div>
                <Link
                  href="/es/blog/public-llm-benchmarks-vs-your-use-case"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Los benchmarks públicos de LLM no te dirán qué modelo poner en
                  producción
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  7 min de lectura
                </p>
              </div>
            </div>
          </section>
          <FaqSection items={FAQ} locale="es" />
        </div>
      </article>
    </>
  );
}
