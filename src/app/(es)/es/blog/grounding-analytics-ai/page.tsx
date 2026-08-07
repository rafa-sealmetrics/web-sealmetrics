import type { Metadata } from "next";
import { getAlternates } from "@/lib/i18n/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  articleSchema,
  breadcrumbSchema,
  definedTermSchema,
  faqPageSchema,
  speakableWebPageSchema,
  statisticClaimSchema,
} from "@/lib/schema";

const SLUG = "grounding-analytics-ai";
const URL = `/es/blog/${SLUG}`;
const TITLE = "Grounding: por qué una buena IA de analítica no debe saber nada, sino consultar";
const DESCRIPTION =
  "Un chatbot responde con lo que memorizó. Un asistente de analítica debe responder solo con datos consultados en el momento. Esa diferencia es una arquitectura, no un prompt — y es la razón por la que un modelo con poca memoria factual puede ser el adecuado para leer tus números.";

export const metadata: Metadata = {
  title: "Grounding: la IA de analítica consulta, no memoriza",
  description: "Un chatbot responde con lo que memorizó. Un asistente de analítica debe responder solo con datos consultados en el momento. Eso es arquitectura, no prompt.",
  openGraph: {
    title: "Grounding: por qué una buena IA de analítica no debe saber nada",
    description:
      "Cómo el grounding evita las alucinaciones de la IA en analítica: el modelo narra números que acaba de consultar, en lugar de recordar números que nunca tuvo.",
    type: "article",
    url: "https://sealmetrics.com/es/blog/grounding-analytics-ai/",
    siteName: "SealMetrics",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og/blog/grounding-analytics-ai.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Grounding: por qué una buena IA de analítica no debe saber nada",
    description: "Cómo el grounding evita las alucinaciones de la IA en analítica: el modelo narra números que acaba de consultar, en lugar de recordar números que nunca tuvo.",
    images: ["https://sealmetrics.com/og/blog/grounding-analytics-ai.png"],
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Qué es el grounding en los modelos de lenguaje?",
    answer:
      "El grounding es la práctica de obligar a un modelo de lenguaje a responder solo con los datos que se le entregan en el momento de la consulta, y no con lo que absorbió durante el entrenamiento. En un sistema con grounding, el modelo llama a herramientas que recuperan registros reales, esos registros viajan dentro del prompt y el trabajo del modelo es leerlos y explicarlos. Lo que no vea en ese contexto recuperado, no debe afirmarlo.",
  },
  {
    question: "¿Cómo se evitan las alucinaciones de la IA en analítica web?",
    answer:
      "Eliminando la necesidad de que el modelo recuerde nada. Haz que responda a través de herramientas que consultan tu base de datos en vivo, mete las cifras devueltas en el prompt y limita su papel a narrar e interpretar. Después verifica: calcula la verdad de referencia directamente desde la base de datos, comprueba contra ella cada cifra que afirme el modelo y añade preguntas trampa sobre entidades y periodos que no existen para ver si admite la ausencia de datos.",
  },
  {
    question: "¿Puede una IA con poco conocimiento del mundo servir para analizar datos?",
    answer:
      "Sí, y además el conocimiento del mundo suele ser lo que menos conviene optimizar. El modelo que usa SealMetrics, gpt-oss-120b, obtiene 0,168 de precisión en SimpleQA con una tasa de alucinación de 0,782: memoria factual del mundo abierto muy pobre. Eso es irrelevante en analítica con grounding, porque al asistente nunca se le pregunta qué recuerda del mundo. Se le pide que lea tus entradas y tus conversiones, que llegan al prompt desde tu propia base de datos.",
  },
  {
    question: "¿Cómo sé si un asistente de analítica con IA se está inventando los números?",
    answer:
      "Pregúntale por qué. Un asistente con grounding puede nombrar el periodo, la métrica y el desglose que hay detrás de cada cifra, porque acaba de recuperarlos. Después ponlo a prueba con algo que no existe: una campaña que nunca lanzaste, un mes anterior a la instalación del tracker. Un sistema con grounding dice que no hay datos. Uno sin grounding produce un número plausible, que es justo el fallo que no puedes detectar leyendo la respuesta.",
  },
  {
    question: "¿Qué diferencia hay entre grounding y RAG?",
    answer:
      "La generación aumentada por recuperación (RAG) es una forma de conseguir grounding, normalmente sobre documentos. Un asistente de analítica se ancla mediante llamadas a herramientas estructuradas: invoca funciones tipadas contra la base de datos analítica y recibe números, no párrafos. El principio es el mismo — la respuesta se construye con lo recuperado —, pero la evidencia es el resultado de una consulta, así que puede compararse con la verdad de referencia de forma exacta y no aproximada.",
  },
];

export default function GroundingAnalyticsAiPageEs() {
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
            jobTitle: "Founder, SealMetrics",
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", url: "/es/blog" },
          { name: "Grounding: por qué una buena IA de analítica no debe saber nada", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "Grounding",
          description:
            "En sistemas de IA, el grounding (anclaje a los datos) es la restricción arquitectónica según la cual un modelo solo puede afirmar hechos presentes en el contexto que se le entrega en el momento de la consulta — normalmente recuperados mediante llamadas a herramientas contra una fuente de datos en vivo — y no hechos recordados de sus parámetros de entrenamiento. El grounding convierte el papel del modelo en narrar e interpretar en lugar de recordar, lo que hace que su precisión factual sobre el mundo abierto sea en gran medida irrelevante para la corrección de sus respuestas.",
          url: URL,
          related: [{ name: "Alucinación de la IA", url: URL }],
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "En un benchmark interno de 162 consultas sobre el asistente de analítica de SealMetrics, el modelo enviado a producción, gpt-oss-120b, afirmó correctamente 144 de 144 cifras verificadas y superó 18 de 18 trampas de grounding e inyección (intervalo de confianza de Wilson al 95%: 0,82-1,00), con cada cifra comprobada contra la verdad de referencia calculada en vivo desde la base de datos analítica.",
          source: "Benchmark interno de LLM de SealMetrics (ejecución 20260724-111147)",
          sourceAuthor: "SealMetrics",
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
        items={[{ label: "Blog", href: "/es/blog" }, { label: "Grounding en la IA de analítica" }]}
        locale="es"
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              IA
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Grounding: por qué una buena IA de analítica no debe saber nada, sino consultar
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">24 julio 2026</time>
              <span>6 min de lectura</span>
              <span>
                Por{" "}
                <Link
                  href="/es/authors/rafa-jimenez"
                  className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Rafa Jiménez
                </Link>
              </span>
            </div>
          </header>

          <p className="tldr mb-12 text-[1.15rem] leading-[1.7] text-text-secondary font-serif italic">
            Un chatbot generalista responde con lo que recuerda. Un asistente de
            analítica debe responder solo con lo que acaba de consultar.
            Constrúyelo así y la memoria del modelo deja de importar — pero
            todavía tienes que demostrarlo, número a número.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                <strong>El grounding (anclar cada respuesta al dato) es una arquitectura, no un prompt.</strong>{" "}
                Las herramientas traen números reales, los números viajan dentro del
                prompt y el modelo narra e interpreta — nunca recuerda.
              </li>
              <li>
                La poca memoria factual sobre el mundo pasa a ser irrelevante. El
                modelo que usamos obtiene 0,168 en SimpleQA con una tasa de
                alucinación de 0,782, y no pasa nada: nunca se le pregunta qué sabe,
                solo qué dicen tus datos.
              </li>
              <li>
                El grounding hay que <em>verificarlo</em>, no darlo por bueno: verdad
                de referencia calculada desde la base de datos y cada cifra afirmada
                comprobada contra ella.
              </li>
              <li>
                Las trampas son la prueba de verdad: pregunta por una campaña que
                nunca se lanzó. Un asistente con grounding lo dice. Uno sin grounding
                se inventa algo plausible.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Hay un principio de producto detrás de la analítica con IA que suena
              mal la primera vez que lo oyes: el modelo no debería saber nada.
            </p>
            <p>
              No «no debería saber mucho». No debería <em>depender de</em> saber.
              Cada dato que afirme sobre tu negocio debería haber llegado en los
              últimos cientos de milisegundos, desde tu base de datos, a través de
              una llamada a una herramienta — y no desde una matriz de pesos
              entrenada hace meses con el internet público.
            </p>
            <p>
              Esa restricción tiene nombre. Se llama grounding — anclar cada
              afirmación al dato recuperado — y es la diferencia entre un asistente
              que puedes poner delante de un equipo de marketing y un generador de
              texto muy seguro de sí mismo.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Saber frente a consultar
            </h2>
            <p>
              Un chatbot generalista responde desde sus parámetros. Le preguntas cuál
              es la capital de Perú y produce «Lima» porque esa asociación está
              codificada en sus pesos. No hay consulta, ni fuente, ni cita: solo una
              conjetura estadística muy buena. Casi siempre acierta. Cuando falla,
              falla exactamente con el mismo tono de voz.
            </p>
            <p>
              Un asistente de analítica no puede funcionar así, por una razón
              evidente: tus entradas del martes pasado nunca estuvieron en los datos
              de entrenamiento de nadie. No hay nada que recordar. Si el modelo
              produce un número, o lo ha consultado o lo ha fabricado. No hay tercera
              opción.
            </p>
            <p>
              Así que el objetivo de diseño se invierte. En lugar de hacer al modelo
              más listo sobre el mundo, lo haces estructuralmente incapaz de
              responder sin ir antes a buscar el dato.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Qué es el grounding dentro del stack, en la práctica
            </h2>
            <p>
              El grounding no es una línea en el system prompt que diga «no te
              inventes nada». Los modelos aceptan esa instrucción y luego se inventan
              cosas igualmente. Es una forma que le das a todo el recorrido de la
              petición:
            </p>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>La pregunta llega en lenguaje natural.</strong>{" "}
                «¿Qué canal generó más conversiones el mes pasado?»
              </li>
              <li>
                <strong>El modelo elige herramientas, no respuestas.</strong> El
                asistente de Seal AI dispone de un inventario de 63 herramientas:
                visión general, canales, campañas, embudos, segmentos, landing pages,
                etcétera. Su primer trabajo es decidir cuáles llamar y con qué
                parámetros.
              </li>
              <li>
                <strong>Las herramientas consultan tus datos.</strong> Filas reales,
                agregados reales, acotados a tu cuenta y a tu zona horaria.
              </li>
              <li>
                <strong>Los resultados vuelven al prompt.</strong> Los números están
                ahora literalmente delante del modelo, en forma de texto.
              </li>
              <li>
                <strong>El modelo narra e interpreta.</strong> Lee lo que ha vuelto,
                lo ordena, detecta la tendencia, sugiere qué mirar después. Está
                haciendo trabajo lingüístico sobre evidencia, no recuperación desde la
                memoria.
              </li>
            </ol>
            <p>
              El paso cinco es el único en el que la inteligencia del modelo se gasta
              en la pregunta real. Todo lo anterior es fontanería — y la fontanería es
              lo que hace que la respuesta sea cierta.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              La recompensa: un modelo «malo» puede ser el modelo adecuado
            </h2>
            <p>
              Esta es la versión honesta de nuestro propio caso. El modelo que hay
              dentro de Seal AI es <strong>gpt-oss-120b</strong>. En SimpleQA — un
              benchmark de preguntas factuales cortas sobre el mundo — obtiene{" "}
              <strong>0,168 de precisión con una tasa de alucinación de 0,782</strong>.
              Leído en frío, parece descalificante. Un modelo que se inventa con
              aplomo la respuesta a cuatro de cada cinco preguntas de cultura general
              no es algo que quieras narrando un informe de ingresos.
            </p>
            <p>
              Salvo que nunca se le hace una pregunta de cultura general. Nadie abre
              una herramienta de analítica para averiguar quién ganó unas elecciones
              de 1994. Al asistente se le pide que lea entradas, conversiones, canales
              y tasas de rebote que han llegado a su ventana de contexto hace un
              instante, y que explique qué significan. La capacidad que mide SimpleQA
              es justo la que el producto ha decidido no usar.
            </p>
            <p>
              Lo que el producto <em>sí</em> usa, ese mismo modelo lo hace bien: MMLU
              90,0, MMLU-Pro 80,8, GPQA Diamond 80,1 sin herramientas y — lo más
              relevante aquí — tool-calling fiable contra un inventario grande de
              herramientas. El grounding es lo que te permite gastar el presupuesto de
              modelo en las capacidades que importan e ignorar las que no.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              El grounding en el que confías es el grounding que has probado
            </h2>
            <p>
              Una arquitectura que <em>debería</em> impedir la invención no es lo
              mismo que una que la impide. Un modelo puede llamar a una herramienta,
              obtener una respuesta parcial y rellenar el hueco discretamente con algo
              razonable. La única forma de saberlo es comprobar todos los números.
            </p>
            <p>
              Así ejecutamos nuestro{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/internal-benchmark"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                benchmark interno
              </Link>
              : 18 escenarios en dos idiomas, tres pasadas, tres modelos candidatos —
              162 consultas en vivo contra el endpoint real del asistente en
              producción, con el inventario real de 63 herramientas. Antes de cada
              ejecución, el harness calculaba la{" "}
              <strong>verdad de referencia directamente desde la base de datos
              analítica</strong> — entradas, conversiones, tasa de rebote, ingresos,
              canal principal, fuente principal, dispositivo principal — para que cada
              cifra afirmada por el asistente pudiera compararse con la realidad
              mediante un corrector determinista, y no por un humano leyendo y
              asintiendo.
            </p>
            <p>
              El modelo que enviamos a producción afirmó correctamente{" "}
              <strong>144 de 144 hechos verificados</strong>. Todos y cada uno de los
              fallos factuales de la ejecución completa se remontan a una pregunta mal
              formulada por nuestra parte, sobre la que volveremos.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Trampas: preguntar por cosas que no existen
            </h2>
            <p>
              Comprobar las respuestas correctas solo cuenta la mitad de la historia.
              El fallo interesante no es un número equivocado: es un número donde
              debería haber habido un reconocimiento de que no hay dato.
            </p>
            <p>
              Por eso cada bloque de idioma incluía{" "}
              <strong>trampas de grounding</strong>: preguntas sobre una campaña que
              nunca se lanzó, o sobre un periodo del que la cuenta no tiene datos.
              Solo hay un comportamiento correcto: decir que el dato no está, y decir
              por qué. Cualquier cosa fluida y con números es un fallo, por bien
              escrita que esté.
            </p>
            <p>
              Los resultados fueron más interesantes que una tabla de apto y no apto.
              El modelo que enviamos a producción superó <strong>18 de 18</strong>{" "}
              trampas (intervalo de confianza de Wilson al 95%: 0,82-1,00). Una de las
              alternativas, mistral-small-3.2, superó 9 de 18 — y su modo de fallo era
              sutil. Preguntado por una campaña inexistente, reconocía correctamente la
              ausencia y después <em>se iba por las ramas</em> describiendo otras
              campañas reales con cifras que nadie había pedido. Eso no es invención:
              los números eran ciertos. Es responder a otra pregunta, que en un informe
              es otra forma de estar equivocado. En inglés, además, alegó una
              incapacidad falsa — «no tengo acceso a las herramientas necesarias» — en
              lugar de explicar el límite temporal de los datos.
            </p>
            <p>
              Los intervalos de Wilson importan aquí: el del ganador ya no se solapa
              con el de mistral, así que con este tamaño de muestra la diferencia es
              estadísticamente significativa y no una racha de suerte.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              La pregunta que formulamos mal
            </h2>
            <p>
              Un escenario pedía «tráfico por dispositivo del último mes». Eso admite
              dos lecturas: los últimos 30 días, que era nuestra verdad de referencia,
              o el mes natural anterior. Algunos modelos eligieron el mes natural, en
              el que la cuenta de prueba solo tenía cinco días de datos, y respondieron
              con esos números <em>reales</em>. El corrector los marcó como fallos.
            </p>
            <p>
              No eran alucinaciones. Eran respuestas correctas a una pregunta que
              habíamos redactado mal. El cien por cien de los fallos factuales de toda
              la ejecución se remonta a ese único escenario. Lo reformulamos, y
              mantenemos el defecto documentado, porque un benchmark que solo publica
              los resultados que le favorecen es una demo. Lo mismo vale para nuestra
              primera ejecución completa, que descartamos entera: el harness reveló que
              el asistente estaba reutilizando la sesión de chat entre consultas, lo
              que permitía que unos modelos leyeran el historial de los anteriores. Lo
              arreglamos, repetimos y archivamos ambas.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Qué significa esto cuando usas el asistente
            </h2>
            <p>
              En la práctica: pregúntale <em>por qué</em>. Un asistente con grounding
              puede decirte qué métrica, qué periodo y qué desglose han producido una
              cifra, porque los ha consultado hace segundos. Si un asistente no puede
              enseñarte su evidencia, ese número es una afirmación, no una medición.
            </p>
            <p>
              Y pruébalo una vez con algo que no existe: una campaña que nunca
              lanzaste, un mes anterior a la instalación del tracker. La respuesta que
              quieres es la aburrida: no hay datos de eso. Un asistente dispuesto a
              decir «eso no lo tengo» es el único en el que merece la pena creer
              cuando dice que sí lo tiene.
            </p>
            <p>
              Más sobre cómo se eligió el modelo en{" "}
              <Link
                href="/es/blog/best-llm-for-data-analytics"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                el análisis del benchmark de 162 consultas
              </Link>
              , y sobre la arquitectura que hay detrás en la{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                documentación de arquitectura de Seal AI
              </Link>
              .
            </p>
          </div>

          <section className="mt-16 pt-10 border-t border-warm-100">
            <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
              Lecturas relacionadas
            </h2>
            <div className="space-y-4">
              <div>
                <Link
                  href="/es/blog/best-llm-for-data-analytics"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  El mejor LLM para analítica de datos no es el que puntúa más alto en los benchmarks
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">7 min de lectura</p>
              </div>
              <div>
                <Link
                  href="/es/blog/our-ai-got-it-wrong-in-production"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Nuestra IA se equivocó en producción — y lo cazó nuestro propio test
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">6 min de lectura</p>
              </div>
              <div>
                <Link
                  href="/es/blog/meet-seal-ai"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Te presentamos Seal AI: el asistente de analítica que nunca envía tus datos a Estados Unidos
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">5 min de lectura</p>
              </div>
            </div>
          </section>
          <FaqSection items={FAQ} locale="es" />
        </div>
      </article>
    </>
  );
}
