import type { Metadata } from "next";
import { getAlternates } from "@/lib/i18n/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  speakableWebPageSchema,
  statisticClaimSchema,
} from "@/lib/schema";

const SLUG = "our-ai-got-it-wrong-in-production";
const URL = `/es/blog/${SLUG}`;
const TITLE = "Nuestra IA se equivocó en producción — y lo cazó nuestro propio test";
const DESCRIPTION =
  "Un modelo devolvió un gráfico cuya clave del eje Y era una lista en lugar de un string. La validación estricta del esquema lo rechazó y toda la respuesta del chat se cayó con un HTTP 500, por un gráfico decorativo. El bug, el arreglo en dos capas y tres reglas para quien publique salida estructurada de un LLM.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: "Nuestra IA se equivocó en producción",
    description:
      "Un campo mal formado en un gráfico tumbó una respuesta entera. Lo que encontramos en 1 de 162 consultas del benchmark, cómo lo arreglamos en dos capas y qué nos enseñó sobre la salida estructurada de los LLM.",
    type: "article",
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Por qué un LLM devuelve salida estructurada mal formada?",
    answer:
      "Porque la generación es probabilística y tu esquema no lo es. Un modelo que ha entendido la petición a la perfección puede expresarla igualmente con una forma que tu contrato no admite: por ejemplo, emitiendo una lista donde el esquema espera un string, porque la pregunta implicaba dos series de datos en lugar de una. No suele ser un fallo de comprensión, sino una decisión de serialización que nadie le dijo a tu validador que aceptara.",
  },
  {
    question: "¿Cómo valido la salida estructurada de un LLM?",
    answer:
      "Valida en la frontera de parseo y decide campo a campo qué significa un fallo. Convierte las malformaciones que puedas recuperar sin ambigüedad, descarta con un warning los elementos que no puedas recuperar, y rechaza la respuesta entera solo cuando lo que ha fallado es justo lo que el usuario pedía. Trata cada campo como entrada no confiable, exactamente igual que tratarías el cuerpo de una petición llegada de internet.",
  },
  {
    question: "¿Debe fallar una petición de API por culpa de un gráfico mal formado?",
    answer:
      "No. Si la respuesta de texto ya está generada y es correcta, un elemento decorativo que no pasa la validación debe degradarse, no llevarse por delante la respuesta. Nuestro bug hacía justo lo contrario: un gráfico cuya clave de eje tenía el tipo equivocado provocaba que toda la respuesta del chat devolviera un HTTP 500, así que el usuario perdía una respuesta perfectamente buena por un elemento visual que no había pedido.",
  },
  {
    question: "¿Cómo detectar bugs de una IA antes de que los reporten los usuarios?",
    answer:
      "Poniendo tu propio producto a prueba en volumen. Este lo encontramos como un único error de transporte en 162 consultas reales del benchmark contra el endpoint de producción: una frecuencia lo bastante baja como para que las pruebas manuales lo hubieran pasado por alto, y lo bastante alta como para que los usuarios acabaran topándose con él. Los benchmarks que pilotan el stack real, y no un mock, hacen también de test de integración.",
  },
  {
    question: "¿Qué fallback conviene si la salida de un LLM no pasa la validación del esquema?",
    answer:
      "Uno de dos capas. Primero, una capa de conversión en la frontera de parseo que repare las formas recuperables conocidas para que el elemento sobreviva. Segundo, un airbag que descarte cualquier elemento que siga siendo inválido tras la conversión, registre un warning y deje pasar el resto de la respuesta. Y después añade un test de regresión por cada malformación que hayas visto de verdad, porque esa misma forma volverá.",
  },
];

export default function OurAiGotItWrongInProductionPageEs() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-24",
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
          { name: "Nuestra IA se equivocó en producción", url: URL },
        ])}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "SealMetrics detectó un fallo de salida estructurada en producción como 1 error de transporte en 162 consultas reales de benchmark: un modelo emitió un gráfico cuya clave del eje Y era una lista de dos series en lugar de un string, la validación estricta del esquema lo rechazó y toda la respuesta del chat devolvió un HTTP 500, descartando una respuesta de texto ya generada.",
          source: "SealMetrics internal LLM benchmark (run 20260724-111147)",
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
        items={[
          { label: "Blog", href: "/es/blog" },
          { label: "Nuestra IA se equivocó en producción" },
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
              Nuestra IA se equivocó en producción — y lo cazó nuestro propio
              test
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
            Alguien pidió una comparativa. El modelo respondió correctamente y
            después adjuntó un gráfico cuya clave del eje Y era una lista en
            lugar de un string. La validación del esquema rechazó el gráfico y
            toda la respuesta se cayó con un 500: una buena respuesta tirada a
            la basura por culpa de un adorno.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Una pregunta de comparativa hizo que el modelo emitiera dos
                series de datos en un campo que el esquema declaraba como un
                único string. La validación estricta lo rechazó y toda la
                respuesta del chat devolvió un HTTP 500.
              </li>
              <li>
                Lo encontramos como <strong>1 error de transporte en 162</strong>{" "}
                consultas reales del benchmark: lo bastante raro como para
                sobrevivir a las pruebas manuales, lo bastante frecuente como
                para llegar a los usuarios.
              </li>
              <li>
                El arreglo tiene dos capas: convertir en la frontera de parseo
                las malformaciones recuperables, y un airbag que descarta con un
                warning cualquier elemento que siga siendo inválido en lugar de
                tumbar la respuesta.
              </li>
              <li>
                La regla general: trata cada campo de la salida estructurada de
                un LLM como entrada no confiable, y no dejes nunca que un
                elemento cosmético decida si el usuario recibe una respuesta.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Construimos{" "}
              <Link
                href="/es/blog/meet-seal-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Seal AI
              </Link>{" "}
              dando por hecho que seremos nosotros quienes encontremos sus bugs.
              Este lo encontramos nosotros, en el producto tal y como se
              entrega, y enseña más que cualquier caso de éxito que pudiéramos
              publicar.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Qué pasó
            </h2>
            <p>
              El asistente responde preguntas de analítica en lenguaje natural
              y, cuando un gráfico ayuda, lo devuelve junto al texto: un objeto
              estructurado que describe qué pintar, validado contra un esquema
              estricto antes de llegar al navegador.
            </p>
            <p>
              Al pedirle una <em>comparativa</em>, el modelo hizo algo
              perfectamente razonable desde su punto de vista: produjo un
              gráfico con <strong>dos series</strong>. Y para expresarlo, puso
              como clave del eje Y una <strong>lista</strong> con dos nombres de
              campo. Nuestro esquema decía que esa clave es un string.
            </p>
            <p>
              La validación rechazó el objeto. El rechazo se propagó. Toda la
              respuesta del chat devolvió un <strong>HTTP 500</strong>.
            </p>
            <p>
              Esa es la parte que conviene digerir con calma. La respuesta de
              texto ya estaba generada. Era correcta, estaba anclada en datos
              reales y era útil. El usuario no recibió nada de eso, porque un
              elemento decorativo no pasó una comprobación de tipos.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Cómo lo encontramos
            </h2>
            <p>
              Apareció como un único error de transporte en las{" "}
              <strong>162 consultas reales</strong> de nuestro benchmark
              interno, que pilota el endpoint de producción real en lugar de un
              mock. Un error en 162 es una frecuencia incómoda: demasiado raro
              para que alguien lo reproduzca a mano durante una revisión,
              demasiado común para quedarse en lo teórico cuando un producto
              responde miles de preguntas a la semana.
            </p>
            <p>
              Estábamos ejecutando ese benchmark para comparar modelos. Lo que
              sacamos fue un defecto de producción, que es el argumento más
              fuerte que conocemos a favor de{" "}
              <Link
                href="/es/blog/how-we-benchmark-our-own-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                hacer el benchmark contra tu stack real
              </Link>{" "}
              en lugar de contra una simulación. Un mock habría validado nuestro
              esquema contra nuestras propias suposiciones y habría pasado.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Por qué este tipo de bug es inevitable
            </h2>
            <p>
              Es tentador archivar esto como «el modelo se equivocó». En
              realidad no. Entendió la petición — una comparativa necesita dos
              series — y expresó esa comprensión con una forma que nuestro
              contrato no había previsto.
            </p>
            <p>
              Esa es la condición permanente de la salida estructurada de un
              LLM: un generador probabilístico a un lado, un esquema estricto al
              otro. El prompt reduce la tasa de desajuste. Nunca llega a cero,
              y menos en los bordes: comparativas, peticiones multimétrica,
              periodos raros, otros idiomas. Si tu arquitectura da por hecho que
              esa tasa es cero, no has construido una funcionalidad: has
              construido un cara o cruz con buenas probabilidades.
            </p>
            <p>
              Nuestro error no fue que el esquema fuera estricto. Estricto está
              bien. Nuestro error fue darle a un validador estricto la autoridad
              de tumbar una respuesta entera por un elemento opcional.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              El arreglo en dos capas
            </h2>
            <p>
              No parcheamos el prompt y dimos el tema por cerrado. Los retoques
              de prompt no son una frontera: son una esperanza. Cambiamos la
              frontera misma.
            </p>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Conversión en la frontera de parseo.</strong> Cuando la
                clave del eje Y llega como lista, cogemos su primera serie y
                seguimos. La malformación es recuperable sin ambigüedad, así que
                el gráfico sobrevive — degradado a una sola serie en vez de
                perdido del todo, que es un resultado muchísimo mejor que nada.
              </li>
              <li>
                <strong>Un airbag detrás.</strong> Cualquier gráfico que siga
                siendo inválido tras la conversión se descarta, se registra un
                warning y la respuesta continúa sin él. Un gráfico malo ya no
                puede tumbar una respuesta. Nunca.
              </li>
            </ol>
            <p>
              Después aplicamos el mismo tipo de blindaje a la{" "}
              <strong>ruta de carga del historial de conversaciones</strong>,
              donde un único elemento almacenado mal formado podría haber
              envenenado igualmente la carga de una conversación pasada entera.
              Y añadimos tests de regresión para esa malformación exacta, porque
              la misma forma volverá: los modelos cambian, y esta era una cosa
              sensata que emitir.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Tres reglas para quien publique salida estructurada de un LLM
            </h2>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Trata cada campo como entrada no confiable.</strong> La
                salida de un modelo no es una estructura de datos tuya que va y
                vuelve. Es una carga útil de un sistema que no controlas, y
                merece el mismo escepticismo que el cuerpo de una petición
                llegada de internet: comprobación de tipos, límites y una
                decisión explícita sobre qué pasa cuando viene mal.
              </li>
              <li>
                <strong>Clasifica los elementos por cuánto los necesita el
                usuario.</strong>{" "}
                Decide, elemento a elemento, si un fallo de validación es fatal.
                La respuesta que el usuario ha pedido es fatal. Un gráfico, una
                pregunta de seguimiento sugerida, un icono, un resaltado: ninguno
                lo es. Tumbar la respuesta entera por una parte opcional
                convierte un fallo cosmético en una caída de servicio.
              </li>
              <li>
                <strong>Recupera lo que puedas, descarta lo que no y registra
                todo.</strong> Convierte las malformaciones que tengan una
                lectura correcta evidente, descarta el resto con un warning para
                no perder visibilidad, y escribe un test de regresión por cada
                forma que hayas observado de verdad en producción. La
                recuperación silenciosa y sin logs es la manera de dejar de
                aprender de tu propio modelo.
              </li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Por qué te lo contamos
            </h2>
            <p>
              Porque «nuestra IA funciona» no es una afirmación que nadie
              debería aceptar por fe, tampoco viniendo de nosotros. Lo que sí es
              comprobable es si un proveedor está mirando: si exprime su propio
              producto lo suficiente como para encontrar el fallo de uno entre
              cien, y si cuenta lo que ha encontrado.
            </p>
            <p>
              Este nos costó una respuesta visible para el usuario en un test.
              Arreglado, nos costó una función de conversión, un airbag y un
              puñado de tests de regresión. Sin detectar, habría sido un 500
              intermitente que nadie sabría reproducir, en una funcionalidad de
              la que la gente empezaba a depender.
            </p>
            <p>
              El benchmark que lo cazó, con su metodología y las tandas que
              descartamos, está publicado en nuestro{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/internal-benchmark"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                informe del benchmark interno
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
                  href="/es/blog/grounding-analytics-ai"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Grounding: por qué una buena IA de analítica no debería «saber»
                  nada
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
                  Cambiamos de modelo de IA dos veces en tres semanas — y ese es
                  justo el punto
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  6 min de lectura
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
