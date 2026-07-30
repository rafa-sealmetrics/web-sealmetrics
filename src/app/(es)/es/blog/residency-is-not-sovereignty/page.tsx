import type { Metadata } from "next";
import Link from "next/link";
import { getAlternates } from "@/lib/i18n/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  definedTermSchema,
  faqPageSchema,
  speakableWebPageSchema,
} from "@/lib/schema";

const SLUG = "residency-is-not-sovereignty";
const URL = `/es/blog/${SLUG}`;
const TITLE = "Residencia no es soberanía: la pregunta que debes hacerle a tu proveedor de analítica con IA";
const DESCRIPTION =
  "Un centro de datos europeo no convierte a tu proveedor de IA en europeo. El CLOUD Act estadounidense sigue a la empresa, no al servidor. Así se distingue lo uno de lo otro, y por qué eso decide hasta dónde se puede llegar a tus datos.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: "Residencia no es soberanía",
    description:
      "Una región europea no pone tus datos fuera del alcance legal de Estados Unidos. La diferencia, y cómo auditar a tu proveedor de analítica con IA.",
    type: "article",
  },
  alternates: {
    languages: getAlternates(`/blog/${SLUG}`),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "¿Qué diferencia hay entre residencia y soberanía de los datos?",
    answer:
      "La residencia es dónde se almacenan o se tratan físicamente tus datos; la soberanía es quién tiene autoridad legal para obligar a darles acceso. Un proveedor de propiedad estadounidense puede alojar tus datos en un centro de datos europeo (residencia) y seguir estando obligado por el CLOUD Act a entregarlos (sin soberanía). La soberanía la determinan la propiedad corporativa y la jurisdicción del proveedor, no la ubicación del servidor.",
  },
  {
    question: "¿El CLOUD Act estadounidense se aplica a los datos alojados en Europa?",
    answer:
      "Sí. El CLOUD Act (2018) obliga a los proveedores sujetos a la jurisdicción de Estados Unidos a revelar los datos que estén en su posesión o bajo su control, con independencia del lugar del mundo donde se almacenen. Por eso la región europea de una empresa estadounidense sigue siendo alcanzable bajo el CLOUD Act y, tratándose de personas no estadounidenses, bajo la Sección 702 de la FISA.",
  },
  {
    question: "¿Cómo puedo comprobar si mi proveedor de analítica con IA es realmente soberano en la UE?",
    answer:
      "Haz tres preguntas: (1) ¿de quién es la empresa que ejecuta la inferencia, hay una matriz estadounidense?; (2) ¿dónde se ejecuta el modelo, en exclusiva?; (3) ¿se retiene algo o se usa para entrenar por defecto? Si la respuesta a la primera es que sí hay matriz estadounidense, una región europea no elimina la exposición al CLOUD Act, respondan lo que respondan a las otras dos.",
  },
  {
    question: "¿Es fiable apoyarse en el Data Privacy Framework UE-EE. UU.?",
    answer:
      "Arrastra un riesgo permanente de anulación. El Data Privacy Framework superó su primera impugnación en 2025, pero tiene una apelación pendiente ante el Tribunal de Justicia de la UE y una impugnación nueva anunciada en 2026. Sus dos predecesores, Safe Harbor y Privacy Shield, fueron anulados. Una arquitectura que nunca llega a generar una transferencia internacional no depende de que el marco sobreviva.",
  },
];

export default function ResidencyIsNotSovereigntyPageEs() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-24",
          dateModified: "2026-07-28",
          url: URL,
          category: "Privacidad",
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
          { name: "Residencia no es soberanía", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "Soberanía del dato",
          description:
            "Principio según el cual los datos están sometidos a las leyes y a la autoridad legal de una jurisdicción concreta. En servicios cloud y de IA, la soberanía la determina qué gobierno puede obligar a un proveedor a revelar los datos: una consecuencia de la propiedad corporativa y de la jurisdicción legal del proveedor, y no de la ubicación física del servidor.",
          url: URL,
          related: [{ name: "Residencia de los datos", url: URL }],
        })}
      />
      <JsonLd
        data={faqPageSchema(FAQ, URL)}
      />
      <JsonLd
        data={speakableWebPageSchema({
          url: URL,
          name: TITLE,
          selectors: [".key-takeaways", ".tldr"],
        })}
      />

      <Breadcrumbs
        items={[{ label: "Blog", href: "/es/blog" }, { label: "Residencia no es soberanía" }]}
        locale="es"
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Privacidad
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Residencia no es soberanía: la pregunta que debes hacerle a tu proveedor de analítica con IA
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
            Un centro de datos europeo no convierte a tu proveedor de IA en
            europeo. Si la empresa que ejecuta el modelo responde ante la ley
            estadounidense, tus datos son alcanzables bajo la ley estadounidense,
            da igual qué bandera ondee sobre la sala de servidores.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Conclusiones clave
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                La <strong>residencia</strong> es dónde están los datos. La{" "}
                <strong>soberanía</strong> es quién puede obligar legalmente a
                entregarlos. No son lo mismo, y solo la segunda te protege.
              </li>
              <li>
                El CLOUD Act estadounidense y la Sección 702 de la FISA siguen a la
                matriz corporativa, no al centro de datos: la región europea de una
                empresa estadounidense sigue siendo alcanzable bajo la ley de
                EE. UU.
              </li>
              <li>
                Una arquitectura en la que el dato nunca sale de la UE y el
                proveedor no tiene matriz estadounidense no activa el Capítulo V
                del RGPD: ni cláusulas contractuales tipo, ni evaluación de
                transferencia, ni dependencia del Data Privacy Framework.
              </li>
              <li>
                Tres preguntas lo deciden: de quién es el proveedor, dónde se
                ejecuta el modelo y qué se retiene o se usa para entrenar.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              «Alojado en Europa» se ha convertido en la respuesta refleja a
              cualquier pregunta sobre IA y protección de datos. Y también es, por
              sí sola, casi irrelevante. La ubicación de un servidor te dice dónde
              reposan los bytes. No te dice nada sobre quién puede llamar a la
              puerta y exigirlos.
            </p>
            <p>
              Esa distinción —residencia frente a soberanía— es lo más importante
              que hay que entender antes de dejar que una función de IA toque tus
              datos de analítica. Y es, además, la distinción que la mayoría de
              proveedores confía discretamente en que se te pase por alto.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Dos palabras que no son sinónimas
            </h2>
            <p>
              La <strong>residencia de los datos</strong> es una cuestión de
              geografía: ¿en qué país se almacenan o se tratan mis datos? La{" "}
              <strong>soberanía del dato</strong> es una cuestión de jurisdicción:
              ¿qué leyes pueden obligar a darles acceso? Un proveedor puede darte
              una respuesta impecable a la primera mientras la segunda echa por
              tierra el conjunto.
            </p>
            <p>
              El mecanismo es este. El <strong>CLOUD Act</strong> estadounidense
              (2018) obliga a cualquier proveedor sujeto a la jurisdicción de
              EE. UU. a revelar los datos que estén en su «posesión, custodia o
              control», <em>con independencia del lugar del mundo donde se
              almacenen</em>. Para las personas no estadounidenses, la Sección 702
              de la FISA añade además un régimen separado de recopilación de
              inteligencia extranjera. A ninguno de los dos le importa qué centro
              de datos elegiste. A los dos les importa de quién es la empresa.
            </p>
            <p>
              Así que cuando un proveedor de IA con sede en Estados Unidos te
              ofrece una región en Fráncfort o en París, el dato vive en Europa y
              sigue siendo alcanzable bajo la ley estadounidense, las dos cosas a
              la vez. Residencia: sí. Soberanía: no.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Por qué la casilla de «región UE» no basta
            </h2>
            <p>
              Todos los grandes proveedores de IA estadounidenses ofrecen ya alguna
              forma de tratamiento europeo: OpenAI con su residencia de datos en la
              UE, el Claude de Anthropic a través de las regiones europeas de AWS
              Bedrock, el Gemini de Google fijado a Vertex AI en Bélgica o Países
              Bajos. Cada una de esas opciones es una mejora real frente a mandar
              los datos a Virginia. Ninguna cambia la jurisdicción corporativa de
              la entidad que opera el servicio.
            </p>
            <p>
              Y la base legal de reserva para los flujos de datos UE-EE. UU. no es
              terreno firme. El <strong>Data Privacy Framework UE-EE. UU.</strong>{" "}
              superó su primer recurso judicial en septiembre de 2025, pero hay una
              apelación pendiente ante el Tribunal de Justicia de la UE y en 2026
              se anunció una impugnación nueva, ya apodada «Schrems III». Sus dos
              predecesores, Safe Harbor y Privacy Shield, fueron anulados.
              Construir una funcionalidad crítica para la privacidad sobre una base
              legal con ese historial es una apuesta, no una garantía.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              La arquitectura que se salta todo el debate
            </h2>
            <p>
              Hay una respuesta más limpia que discutir sobre mecanismos de
              transferencia: construir de forma que no llegue a producirse ninguna
              transferencia internacional. Si el dato nunca sale de la UE{" "}
              <em>y</em> el proveedor que ejecuta la inferencia no tiene matriz
              estadounidense, el Capítulo V del RGPD —todo el capítulo de
              transferencias internacionales, del artículo 44 en adelante— no llega
              a activarse. Sin cláusulas contractuales tipo. Sin evaluación de
              impacto de la transferencia. Sin depender de que el Data Privacy
              Framework sobreviva a su próximo día en los tribunales.
            </p>
            <p>
              Esta es la decisión que hay detrás de{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Seal AI
              </Link>
              , la capa de IA privada dentro de SealMetrics. La inferencia se
              ejecuta solo en la infraestructura de Scaleway en París. Scaleway es
              una empresa francesa con matriz francesa (el grupo Iliad) y sin
              propiedad estadounidense: afirma sin rodeos que sus servicios de IA
              no están sujetos a leyes extraterritoriales como el CLOUD Act
              norteamericano. El modelo es de pesos abiertos y estático; no se
              entrena con tus datos y, por defecto, no se retiene nada.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Tres preguntas para auditar a cualquier proveedor de analítica con IA
            </h2>
            <p>
              No hace falta ser abogado para poner a prueba lo que afirma un
              proveedor. Haz estas preguntas, en este orden:
            </p>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>¿De quién es la empresa que ejecuta la inferencia?</strong>{" "}
                Si hay una matriz estadounidense, una región europea no elimina la
                exposición al CLOUD Act. Párate aquí: el resto es secundario.
              </li>
              <li>
                <strong>¿Dónde se ejecuta el modelo, en exclusiva?</strong>{" "}
                «Podemos tratar los datos en la UE» no es lo mismo que «solo
                tratamos los datos en la UE». Un endpoint global que{" "}
                <em>puede</em> enrutar a otro sitio no es solo-UE.
              </li>
              <li>
                <strong>¿Qué se retiene y qué entrena al modelo?</strong> Retención
                cero de los prompts y ningún entrenamiento con tus datos deberían
                ser el comportamiento por defecto, por escrito, en la documentación
                de subencargados; no un extra que se vende con el plan enterprise.
              </li>
            </ol>
            <p>
              Si un proveedor no puede responder a la primera pregunta con «una
              empresa europea, sin matriz estadounidense», entonces todo lo que
              diga sobre residencia, cifrado o certificaciones es decorar una casa
              construida sobre la jurisdicción de otro.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              En resumen
            </h2>
            <p>
              La residencia es la mitad amable de la respuesta, la que luce en un
              folleto. La soberanía es la mitad que determina de verdad si un
              gobierno extranjero puede llegar a los datos de tus clientes. Cuando
              las dos entran en conflicto —un servidor en la UE propiedad de una
              empresa estadounidense—, gana la jurisdicción. Pregunta de quién es
              el proveedor antes de preguntar dónde está el servidor. En una
              plataforma de analítica que pone la privacidad primero, la capa de IA
              no puede ser justo el sitio donde esa respuesta falla.
            </p>
          </div>

          <section className="mt-16 pt-10 border-t border-warm-100">
            <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
              Lecturas relacionadas
            </h2>
            <div className="space-y-4">
              <div>
                <Link
                  href="/es/blog/meet-seal-ai"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Te presentamos Seal AI: el asistente de analítica que nunca envía tus datos a Estados Unidos
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">5 min de lectura</p>
              </div>
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
                  href="/es/blog/cookieless-analytics-explained"
                  className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Analítica cookieless explicada: cómo medir sin cookies
                </Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">8 min de lectura</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
