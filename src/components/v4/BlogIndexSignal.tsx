import Link from "next/link";
import type { BlogPost } from "@/lib/content/blog";
import { EditorialSectionNav } from "./EditorialSectionNav";
import "./blog-index-signal.css";

type Locale = "en" | "es";

function Arrow() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h11M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function BlogIndexSignal({
  locale,
  posts,
  translatedSlugs = [],
}: {
  locale: Locale;
  posts: BlogPost[];
  translatedSlugs?: string[];
}) {
  const translated = new Set(translatedSlugs);
  const prefix = locale === "es" ? "/es" : "";
  const hrefFor = (slug: string) => locale === "es" && !translated.has(slug)
    ? `/blog/${slug}/`
    : `${prefix}/blog/${slug}/`;
  const formatDate = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString(
    locale === "es" ? "es-ES" : "en-GB",
    { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" },
  );
  const lead = posts.slice(0, 3);
  const archive = posts.slice(3);
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const latestDate = posts.reduce<string | null>(
    (latest, post) => latest === null || post.date > latest ? post.date : latest,
    null,
  );
  const t = locale === "es" ? {
    home: "Inicio", eyebrow: "Cuaderno editorial · evidencia · análisis",
    title: <>Las decisiones mejoran<br />cuando la evidencia<br /><em>resiste preguntas.</em></>,
    lede: "Investigación sobre calidad de datos, atribución, regulación de privacidad e IA aplicada a la analítica. Escrito para equipos que tienen que defender una cifra.",
    latest: "Última publicación", articles: "Artículos publicados", beats: "Líneas editoriales",
    lead: "Lecturas de portada", leadTitle: <>Tres argumentos.<br /><em>Una misma exigencia.</em></>,
    archive: "Archivo completo", archiveTitle: <>Todo el análisis.<br /><em>Sin ordenar por hype.</em></>,
    read: "Leer artículo", finalTag: "De la lectura a la evidencia", finalTitle: <>Comprueba el argumento<br /><em>con tus propios datos.</em></>,
    finalBody: "El blog explica por qué desaparece el dato. Una revisión de 30 minutos muestra dónde ocurre en tu medición.",
    demo: "Reservar una demo", product: "Ver cómo funciona", languageNote: `${translated.size} artículos disponibles en español · el resto enlaza a la edición inglesa`,
  } : {
    home: "Home", eyebrow: "Editorial notebook · evidence · analysis",
    title: <>Better decisions begin<br />when the evidence<br /><em>survives questions.</em></>,
    lede: "Research on data quality, attribution, privacy regulation and analytics AI. Written for teams that have to defend the number, not merely report it.",
    latest: "Latest publication", articles: "Published essays", beats: "Editorial beats",
    lead: "Lead stories", leadTitle: <>Three arguments.<br /><em>One standard of evidence.</em></>,
    archive: "Complete archive", archiveTitle: <>Every analysis.<br /><em>Nothing ranked by hype.</em></>,
    read: "Read article", finalTag: "From reading to evidence", finalTitle: <>Test the argument<br /><em>on your own traffic.</em></>,
    finalBody: "The essays explain where measurement fails. A 30-minute review shows where it happens in your own stack.",
    demo: "Book a Demo", product: "See how it works", languageNote: "",
  };

  return (
    <div className="sig-blog-page">
      <EditorialSectionNav current="blog" />
      <section className="sig-blog-hero">
        <div className="sig-blog-hero-copy">
          <nav className="sig-blog-breadcrumbs" aria-label="Breadcrumb"><Link href={`${prefix}/`}>{t.home}</Link><span>/</span><span>Blog</span></nav>
          <p className="sig-blog-tag">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="sig-blog-lede">{t.lede}</p>
          {t.languageNote && <p className="sig-blog-language">{t.languageNote}</p>}
        </div>
        <aside className="sig-blog-desk" aria-label={locale === "es" ? "Estado editorial" : "Editorial status"}>
          <div className="sig-blog-module-top"><span>Sealmetrics / editorial desk</span><span>Live</span></div>
          <dl>
            <div><dt>{t.latest}</dt><dd>{latestDate ? formatDate(latestDate) : "—"}</dd></div>
            <div><dt>{t.articles}</dt><dd>{posts.length}</dd></div>
            <div><dt>{t.beats}</dt><dd>{categories.length}</dd></div>
          </dl>
          <div className="sig-blog-beats">
            {categories.slice(0, 8).map((category, index) => <span key={category}><i>{String(index + 1).padStart(2, "0")}</i>{category}</span>)}
          </div>
        </aside>
      </section>

      <section className="sig-blog-leads">
        <div className="sig-blog-section-head"><div><p className="sig-blog-tag">{t.lead}</p><h2>{t.leadTitle}</h2></div><p>{t.lede}</p></div>
        <div className="sig-blog-lead-grid">
          {lead.map((post, index) => (
            <Link className={index === 0 ? "sig-blog-lead-main" : ""} href={hrefFor(post.slug)} key={post.slug}>
              <div className="sig-blog-story-meta"><span>{String(index + 1).padStart(2, "0")} / {post.category}</span><time>{formatDate(post.date)}</time></div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="sig-blog-story-foot"><span>{post.readTime}</span><b>{t.read} <Arrow /></b></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="sig-blog-archive" id="articles">
        <div className="sig-blog-section-head"><div><p className="sig-blog-tag sig-blog-tag-light">{t.archive}</p><h2>{t.archiveTitle}</h2></div><p>{posts.length} {locale === "es" ? "artículos publicados sobre" : "published essays across"} {categories.length} {locale === "es" ? "líneas editoriales." : "editorial beats."}</p></div>
        <ol>
          {archive.map((post, index) => (
            <li key={post.slug}>
              <Link href={hrefFor(post.slug)}>
                <span className="sig-blog-index">{String(index + 4).padStart(2, "0")}</span>
                <div className="sig-blog-archive-title"><p>{post.category}</p><h3>{post.title}</h3></div>
                <p className="sig-blog-archive-description">{post.description}</p>
                <div className="sig-blog-archive-meta"><time>{formatDate(post.date)}</time><span>{post.readTime}</span></div>
                <Arrow />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="sig-blog-final">
        <p className="sig-blog-tag">{t.finalTag}</p>
        <h2>{t.finalTitle}</h2>
        <p>{t.finalBody}</p>
        <div data-md="skip" className="sig-blog-actions">
          <Link className="sig-blog-button" href={`${prefix}/demo/`}>{t.demo} <Arrow /></Link>
          <Link className="sig-blog-text-link" href={`${prefix}/how-it-works/`}>{t.product} →</Link>
        </div>
      </section>
    </div>
  );
}
