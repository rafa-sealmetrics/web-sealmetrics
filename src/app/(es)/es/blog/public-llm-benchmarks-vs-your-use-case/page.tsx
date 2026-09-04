import type { Metadata } from "next";
import { PostByline } from "@/components/ui/PostByline";
import Link from "next/link";
import { getAlternates } from "@/lib/i18n/navigation";
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

const SLUG = "public-llm-benchmarks-vs-your-use-case";
const URL = `/es/blog/${SLUG}`;
const TITLE = "Los benchmarks públicos de LLM no te dicen qué modelo poner en producción";
const DESCRIPTION =
  "MMLU mide conocimiento en aislamiento. Tu producto necesita tool-calling, seguimiento de instrucciones y grounding bajo carga real. Qué miden de verdad las cifras públicas, cómo leer su letra pequeña y un método en cinco pasos para probar un modelo sobre tu propia carga de trabajo.";

export const metadata: Metadata = {
  title: "Los benchmarks públicos no eligen tu modelo",
  description: "MMLU mide conocimiento aislado. Tu producto necesita tool-calling y grounding bajo carga. Qué miden las cifras públicas y cómo probar con tu propio caso.",
  openGraph: {
    title: TITLE,
    description:
      "Qué miden realmente MMLU, GPQA, tau-bench y BFCL, y la letra pequeña que vuelve engañosas las comparaciones entre modelos.",
    type: "article",
    url: "https://sealmetrics.com/es/blog/public-llm-benchmarks-vs-your-use-case/",
    siteName: "Sealmetrics",
    locale: "es_ES",
    images: ["https://sealmetrics.com/og/blog/public-llm-benchmarks-vs-your-use-case.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: TITLE,
    description: "Qué miden realmente MMLU, GPQA, tau-bench y BFCL, y la letra pequeña que vuelve engañosas las comparaciones entre modelos.",
    images: ["https://sealmetrics.com/og/blog/public-llm-benchmarks-vs-your-use-case.png"],
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Sirve de algo MMLU para elegir un LLM para producción?",
    answer:
      "Para la mayoría de agentes en producción, de poco. MMLU mide conocimiento y razonamiento tipo test en aislamiento, sin herramientas, sin datos externos y sin salida estructurada. Un agente en producción responde llamando a herramientas sobre datos en vivo, así que lo que decide el éxito es la precisión al llamar herramientas, el seguimiento de instrucciones, la fiabilidad de la salida estructurada y la disciplina de grounding. MMLU sirve como suelo —una puntuación muy baja es una señal de alarma—, pero una alta predice muy poco sobre tu caso.",
  },
  {
    question: "¿Qué benchmarks de LLM son relevantes para agentes y uso de herramientas?",
    answer:
      "tau-bench y BFCL son los sustitutos públicos más cercanos. tau-bench evalúa la resolución de tareas en varios turnos en dominios simulados como retail o aerolíneas, donde el modelo tiene que usar herramientas y respetar reglas de negocio. BFCL, el Berkeley Function-Calling Leaderboard, evalúa directamente la precisión al invocar funciones, incluidas las llamadas múltiples y en paralelo. Los dos predicen mucho mejor que MMLU para productos agénticos, pero ninguno usa tus herramientas, tu esquema ni tus datos.",
  },
  {
    question: "¿Por qué no puedo comparar directamente las puntuaciones de tau-bench entre proveedores?",
    answer:
      "Porque las condiciones cambian y van en la letra pequeña. Algunas cifras publicadas se miden con extended thinking activado, o con un añadido al prompt, o con herramientas disponibles cuando la cifra rival se midió sin ellas. Y tau-bench y tau-2-bench son benchmarks distintos: una puntuación de tau-2-bench en retail no es comparable celda a celda con una de tau-bench en retail, aunque las dos se etiqueten como «retail».",
  },
  {
    question: "¿Cómo evalúo un LLM para mi propio caso de uso en producción?",
    answer:
      "Pasa los candidatos por tu endpoint real, con tus herramientas reales y sobre datos reales, calculando la verdad de referencia desde tu base de datos para poder verificar cada cifra que afirmen. Incluye trampas adversarias con entidades inexistentes e instrucciones inyectadas, replica cada escenario en todos los idiomas que soportas, repite cada escenario varias veces y publica intervalos de confianza en lugar de puntuaciones sueltas. Después pondera coste y latencia, porque son los que deciden si la función es usable.",
  },
  {
    question: "¿Puede un modelo con peores puntuaciones ser la mejor opción para producción?",
    answer:
      "Sí, y es habitual. En nuestra propia selección, el candidato con mejores puntuaciones públicas generales y agénticas perdió en la carga de trabajo que importaba: falló más trampas de grounding y de seguridad, consumió muchísimos más tokens de entrada, costó alrededor de diez veces más por consulta respondida y entregó tokens varias veces más despacio. La capacidad general es una entrada más entre varias, y rara vez es la que decide si una función llega a producción.",
  },
];

export default function PublicLlmBenchmarksVsYourUseCasePageEs() {
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
          { name: "Benchmarks públicos de LLM frente a tu caso de uso", url: URL },
        ])}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "En un benchmark interno de 162 consultas sobre un asistente de analítica en producción, el modelo candidato con mejores puntuaciones en los benchmarks públicos superó 15 de 18 trampas de grounding e inyección y costó alrededor de diez veces más por consulta respondida que el modelo con puntuaciones públicas más bajas, que superó 18 de 18.",
          source: "Benchmark interno de LLM de Sealmetrics (tanda 20260724-111147)",
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
          { label: "Benchmarks públicos frente a tu caso de uso" },
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
              Los benchmarks públicos de LLM no te dicen qué modelo poner en
              producción
            </h1>
            <PostByline
              datePublished="2026-07-24"
              dateModified="2026-07-28"
              readTime="7 min de lectura"
              authorName="Rafa Jiménez"
              authorUrl="/es/authors/rafa-jimenez"
              locale="es"
            />
          </header>

          <p className="tldr mb-12 text-[1.15rem] leading-[1.7] text-text-secondary font-serif italic">
            Las puntuaciones de los rankings miden a un modelo solo en una
            habitación con un examen tipo test. Tu producto necesita que llame a
            la herramienta correcta, que respete un esquema, que se niegue a
            inventarse un número y que vuelva lo bastante rápido como para que
            alguien espere la respuesta. Son habilidades distintas, y las cifras
            públicas apenas las prueban.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                MMLU y GPQA miden conocimiento y razonamiento <strong>en aislamiento</strong>.
                Los agentes en producción viven o mueren por el tool-calling, el
                seguimiento de instrucciones, la salida estructurada y el
                grounding.
              </li>
              <li>
                tau-bench y BFCL son los benchmarks agénticos relevantes, pero
                lee la letra pequeña: las cifras se miden con herramientas o sin
                ellas, con extended thinking o sin él, y <strong>tau-bench y
                tau-2-bench son benchmarks distintos</strong>.
              </li>
              <li>
                El modelo con las mejores puntuaciones generales puede seguir
                siendo la elección equivocada cuando pones en la balanza la
                disciplina de grounding, la velocidad efectiva de entrega y el
                coste.
              </li>
              <li>
                El único benchmark que zanja la cuestión es el tuyo: endpoint
                real, herramientas reales, datos reales, verdad de referencia
                desde tu base de datos, trampas adversarias y ejecuciones
                repetidas.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Cada lanzamiento de un modelo viene con una tabla. MMLU, GPQA
              Diamond, SWE-bench, AIME y una columna de tau-bench si el modelo
              se vende como agéntico. Las cifras son reales, y leerlas bien es
              una habilidad de verdad. Pero la tabla responde a una pregunta que
              la mayoría de equipos no se está haciendo.
            </p>
            <p>
              Pasamos por esto al elegir el modelo que hay detrás de{" "}
              <Link
                href="/es/blog/meet-seal-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Seal AI
              </Link>
              , el asistente de analítica en lenguaje natural que va dentro de
              Sealmetrics. Las cifras públicas acotaron el campo. No eligieron al
              ganador y, en la dimensión decisiva, apuntaban en la dirección
              equivocada.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Qué miden en realidad los benchmarks famosos
            </h2>
            <p>
              MMLU y MMLU-Pro son exámenes tipo test sobre materias académicas y
              profesionales. GPQA Diamond es un conjunto de preguntas de ciencia
              de nivel doctorado diseñadas para resistir la búsqueda web. AIME
              son matemáticas de competición. SWE-bench Verified le pide al
              modelo que resuelva issues reales de GitHub.
            </p>
            <p>
              Cada uno mide legítimamente algo. En ninguno de ellos se le
              entrega al modelo un catálogo de herramientas, se le pide que
              decida a cuál llamar y que después narre el resultado sin
              adornarlo. Y esa es la descripción real del puesto para la mayoría
              de agentes en producción.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-[0.9rem] border-collapse">
                <thead>
                  <tr className="border-b border-warm-200">
                    <th className="text-left py-2.5 pr-4 text-text-secondary font-medium">
                      Benchmark
                    </th>
                    <th className="text-left py-2.5 pr-4 text-text-secondary font-medium">
                      Qué mide
                    </th>
                    <th className="text-left py-2.5 text-text-secondary font-medium">
                      Qué necesita tu producto en su lugar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-100">
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      MMLU / MMLU-Pro
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Conocimiento y razonamiento tipo test, sin herramientas y
                      sin datos externos
                    </td>
                    <td className="py-2.5 text-text-body">
                      Elegir bien la herramienta dentro de un inventario grande,
                      turno tras turno
                    </td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      GPQA Diamond
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Razonamiento científico de nivel doctorado, resistente a
                      la búsqueda
                    </td>
                    <td className="py-2.5 text-text-body">
                      Leer bien una tabla devuelta y no redondear un número
                      hasta convertirlo en ficción
                    </td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      AIME
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Matemáticas de competición
                    </td>
                    <td className="py-2.5 text-text-body">
                      Aritmética sencilla sobre cifras consultadas, con el
                      periodo y la zona horaria correctos
                    </td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      SWE-bench Verified
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Resolver incidencias reales de software en un repositorio
                    </td>
                    <td className="py-2.5 text-text-body">
                      Emitir siempre una salida que valide contra tu esquema de
                      respuesta
                    </td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      SimpleQA
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Recuerdo factual del mundo desde los parámetros, y con qué
                      frecuencia se lo inventa el modelo
                    </td>
                    <td className="py-2.5 text-text-body">
                      Grounding: negarse a responder de memoria cuando el dato
                      está en el prompt
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      tau-bench / BFCL
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Resolución de tareas en varios turnos y precisión al
                      invocar funciones en dominios simulados
                    </td>
                    <td className="py-2.5 text-text-body">
                      Las mismas habilidades, medidas sobre <em>tus</em>{" "}
                      herramientas, tu esquema y tus datos
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              La fila de SimpleQA merece un momento, porque enseña por qué una
              mala puntuación puede ser irrelevante. El modelo que llevamos a
              producción, gpt-oss-120b, saca 0,168 de acierto en SimpleQA con
              una tasa de alucinación de 0,782. Leído en frío, parece
              descalificatorio. Leído en contexto, describe un recuerdo factual
              del mundo débil: cuánta trivia contienen los pesos. Nuestro
              asistente nunca responde desde sus pesos. El dato viaja en el
              prompt, recuperado por herramientas, y cada cifra se contrasta con
              la base de datos. El benchmark mide una capacidad que el producto
              no usa.
            </p>

            <CommercialModule
              locale="es"
              hook="¿Estás eligiendo modelo por su puesto en un ranking que no mide tu caso? En una demo ves cómo rinde LENS sobre tu propia carga de trabajo: tus preguntas, tu dato, tus cifras."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Los benchmarks que sí son relevantes, y su letra pequeña
            </h2>
            <p>
              Hay dos familias públicas que sí siguen la pista de lo que
              necesitan los productos agénticos.{" "}
              <strong>tau-bench</strong> pone al modelo en un dominio simulado
              de varios turnos (retail, aerolíneas) donde tiene que usar
              herramientas y respetar reglas de negocio para completar una
              tarea. <strong>BFCL</strong>, el Berkeley Function-Calling
              Leaderboard, mide directamente la precisión al invocar funciones,
              incluidas las llamadas múltiples y en paralelo.
            </p>
            <p>
              Úsalos. Pero léelos como un abogado, porque las tablas de los
              proveedores ponen las condiciones en las notas al pie y los
              números en las celdas, y la gente copia celdas.
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Con herramientas o sin ellas.</strong> gpt-oss-120b saca
                80,1 en GPQA Diamond sin herramientas y 80,9 con herramientas.
                Su cifra de 97,9 en AIME 2025 es una cifra con herramientas.
                Citar una contra la otra de un rival no es una comparación, es
                un error de categoría.
              </li>
              <li>
                <strong>Con extended thinking, o con un añadido al prompt.</strong>{" "}
                La puntuación de 80,5 de Claude Sonnet 4 en tau-bench retail está
                medida con extended thinking activado más un añadido al prompt,
                según la propia nota al pie de Anthropic. Es una configuración
                publicada legítima y declarada con claridad, y no es la misma
                configuración que una ejecución simple de una sola pasada.
              </li>
              <li>
                <strong>Distinto benchmark, misma palabra.</strong> La cifra de
                86,2 en retail de Claude Sonnet 4.5 es de <em>tau-2-bench</em>,
                no de tau-bench. Las dos dicen «retail». No son la misma prueba,
                y alinearlas en una misma columna produce un ranking que no
                existe.
              </li>
            </ul>
            <p>
              Para hacerse una idea, algunos puntos de referencia que sí son
              comparables entre sí: GPT-4o se mueve entre 60,4 y 61,2 en
              tau-bench retail; gpt-oss-120b, en 67,8; qwen3-235b-a22b-2507, en
              71,3. Esos tres los puedes poner en fila. Las cifras de Claude de
              arriba no, no sin volver a declarar las condiciones.
            </p>
            <p>
              Volvimos a verificar cada cifra pública de nuestro propio informe
              de selección de modelo contra las fuentes primarias: fichas
              técnicas de los proveedores y publicaciones de los benchmarks, en
              vez de recopilatorios de segunda mano. Dos de ellas estaban mal en
              nuestro primer borrador, y las dos por exactamente los fallos que
              acabamos de enumerar. Si nos pasó a nosotros yendo con cuidado,
              está pasando en la tabla comparativa que estás leyendo en algún
              otro sitio.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              La velocidad también es un benchmark, y no el que crees
            </h2>
            <p>
              Las medianas entre proveedores publicadas por Artificial Analysis
              (consultadas el 23 de julio de 2026; varían a diario) sitúan a
              gpt-oss-120b en 262,8 tokens de salida por segundo con 0,89
              segundos de tiempo hasta el primer token, a Gemini 2.5 Flash en
              201,9, a GPT-4.1 en 114,7, a Qwen3-235B en 56,7 con 2,32 segundos
              hasta el primer token y a Claude Sonnet 4.5 en 42,0. GPT-5 con
              esfuerzo de razonamiento alto tarda más de 100 segundos hasta el
              primer token: un buen intercambio para un proceso por lotes,
              inservible para un chat interactivo.
            </p>
            <p>
              Dos advertencias sobre números así. La primera: son medianas entre
              proveedores; lo que tú obtengas depende del host que uses de
              verdad. En nuestra propia infraestructura, gpt-oss-120b entrega un
              efectivo de 75 a 90 tokens de salida por segundo dentro de bucles
              reales de herramientas, y ese es el número que manda en la
              experiencia de usuario, no la mediana del titular. La segunda: una
              respuesta agéntica son varias llamadas al modelo más idas y
              vueltas a las herramientas, así que para que la interfaz parezca
              viva importa más el tiempo hasta el primer token que el pico de
              rendimiento.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Un caso concreto en el que el ranking apuntaba al lado equivocado
            </h2>
            <p>
              Sobre cifras públicas, qwen3-235b-a22b-2507 gana a gpt-oss-120b en
              casi todos los ejes que nos importan: 93,1 en MMLU-Redux frente a
              90,0 en MMLU, 83,0 frente a 80,8 en MMLU-Pro, 71,3 frente a 67,8
              en tau-bench retail, más 70,9 en BFCL v3 y la mejor puntuación
              multilingüe del conjunto abierto. Si esto lo decidiera una tabla,
              la tabla decidió por qwen.
            </p>
            <p>
              Después pasamos los dos por el producto real: 18 escenarios en
              español e inglés, tres pasadas, tres modelos, 162 consultas en
              vivo contra los datos de una cuenta real, con el inventario
              completo de 63 herramientas y la verdad de referencia calculada
              desde la base de datos.
            </p>
            <p>
              gpt-oss-120b superó 18 de 18 trampas de grounding e inyección y
              verificó 144 de 144 hechos afirmados. qwen3-235b superó 15 de 18,
              y entre sus fallos estuvo reproducir una instrucción inyectada en
              dos de tres intentos en inglés mientras ignoraba el ataque
              idéntico en las nueve ejecuciones en español. Además consumió 2,2
              veces los tokens de entrada, salió alrededor de diez veces más
              caro por consulta respondida y entregó entre 21 y 23 tokens de
              salida efectivos por segundo frente a los 75-90 de nuestro
              ganador.
            </p>
            <p>
              Nada de eso se ve en un ranking. Tampoco es una crítica al
              ranking: esos benchmarks nunca se diseñaron para predecir el coste
              por consulta respondida en una carga de trabajo de analítica con
              63 herramientas y en dos idiomas. Respondieron correctamente a su
              pregunta. Simplemente era una pregunta distinta de la nuestra.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Cinco pasos para evaluar un modelo sobre tu propia carga de trabajo
            </h2>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Usa los benchmarks públicos como filtro, no como decisión.</strong>{" "}
                Son excelentes para eliminar candidatos que claramente no dan la
                talla. Deja de usarlos en cuanto dos candidatos sean los dos
                plausibles.
              </li>
              <li>
                <strong>Prueba a través de tu endpoint real.</strong> El mismo
                código de producto, el mismo inventario de herramientas, los
                mismos datos; cambia solo el modelo por configuración. Un
                sandbox con tres herramientas de juguete no te dice nada del
                comportamiento con sesenta.
              </li>
              <li>
                <strong>Calcula la verdad de referencia desde tu base de datos.</strong>{" "}
                Extrae las cifras verdaderas al empezar la tanda para que cada
                número que afirme el modelo se compruebe automáticamente. Sin
                verdad de referencia estás puntuando sensaciones.
              </li>
              <li>
                <strong>Añade escenarios adversarios y repítelos.</strong>{" "}
                Pregunta por entidades que no existen. Pregunta por periodos sin
                datos. Planta una instrucción inyectada con un canario. Replica
                todo eso en cada idioma que soportes, ejecuta cada escenario
                varias veces y publica intervalos de confianza en lugar de
                puntuaciones sueltas.
              </li>
              <li>
                <strong>Pondera el coste y la velocidad efectiva al final, y en serio.</strong>{" "}
                A dos modelos que son los dos suficientemente correctos los
                separan los tokens consumidos y el tiempo hasta la respuesta.
                Ahí es donde suele esconderse una diferencia de un orden de
                magnitud.
              </li>
            </ol>
            <p>
              Y publica tus defectos. Nuestra tanda contenía una pregunta mal
              formulada —«tráfico por dispositivo del último mes» admite dos
              lecturas—, y todos y cada uno de los fallos de hechos de la tanda
              entera se remontan a ella. Ese error es nuestro, no una
              alucinación del modelo, y decirlo es lo que hace que el resto de
              los números merezca la pena leerlos.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              En resumen
            </h2>
            <p>
              Los benchmarks públicos te dicen si un modelo es capaz. No te
              dicen si es <em>adecuado</em>. La adecuación depende de tus
              herramientas, tu esquema, tus idiomas, tu presupuesto de latencia
              y tu tolerancia a un número dicho con seguridad y equivocado, y
              nada de eso aparece en una tabla de lanzamiento.
            </p>
            <p>
              La versión larga de este argumento, con el razonamiento completo de
              selección de modelo, está en{" "}
              <Link
                href="/es/blog/best-llm-for-data-analytics"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                El mejor LLM para analítica de datos no es el que gana en los
                benchmarks
              </Link>
              . La auditoría de mercado que hay detrás, incluida la restricción
              de alojamiento soberano en la UE que dio forma a la lista corta,
              está documentada en nuestro{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/model-selection"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                informe de selección de modelo
              </Link>
              .
            </p>
          </div>

          <CommercialModule
            locale="es"
            hook="¿Cinco pasos son demasiados para esta semana? El primero cuesta media hora: trae tus preguntas reales a una demo y evalúa el resultado contra tus propios números."
          />

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
                  El mejor LLM para analítica de datos no es el que gana en los
                  benchmarks
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  7 min de lectura
                </p>
              </div>
              <div>
                <Link
                  href="/es/blog/grounding-analytics-ai"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Grounding: por qué una buena IA de analítica no debería
                  «saber» nada
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  6 min de lectura
                </p>
              </div>
              <div>
                <Link
                  href="/es/blog/we-changed-our-ai-model-twice"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Cambiamos de modelo de IA dos veces en tres semanas, y ese es
                  justo el punto
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  6 min de lectura
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
