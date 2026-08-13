import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "./site-shell";
import { FunctionalSurface } from "./site-forms";

export type CanonicalPage = {
  title: string;
  description: string;
  canonical: string;
  lang: "en" | "es";
  contentType: string;
  dateModified: string;
  body: string;
};

type RenderContext = Pick<CanonicalPage, "lang" | "contentType">;

function normalizeHref(href: string) {
  if (href.startsWith("https://sealmetrics.com")) {
    return href.slice("https://sealmetrics.com".length) || "/";
  }
  return href;
}

function inlineNodes(text: string, context: RenderContext, keyPrefix = "inline"): ReactNode[] {
  const token = /!\[([^\]]*)\]\(([^)]+)\)|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`/g;
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = token.exec(text))) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    const key = `${keyPrefix}-${index++}`;

    if (match[1] !== undefined) {
      nodes.push(<img className="editorial-inline-image" src={match[2]} alt={match[1]} key={key} loading="lazy" />);
    } else if (match[3] !== undefined) {
      let label = match[3];
      let href = normalizeHref(match[4]);
      if (context.contentType === "blog" && /^\/?(?:es\/)?demo\/?$/.test(href)) {
        href = context.lang === "es" ? "/es/product/" : "/product/";
        label = context.lang === "es" ? "Ver cómo funciona la plataforma" : "See how the platform works";
      }
      const external = /^https?:\/\//.test(href);
      nodes.push(<a href={href} key={key} rel={external ? "noreferrer" : undefined}>{inlineNodes(label, context, key)}</a>);
    } else if (match[5] !== undefined) {
      nodes.push(<strong key={key}>{inlineNodes(match[5], context, key)}</strong>);
    } else if (match[6] !== undefined) {
      nodes.push(<em key={key}>{inlineNodes(match[6], context, key)}</em>);
    } else if (match[7] !== undefined) {
      nodes.push(<code key={key}>{match[7]}</code>);
    }

    cursor = token.lastIndex;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function isTableSeparator(line: string) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function tableCells(line: string) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(cell => cell.trim());
}

function isBlockStart(line: string, next = "") {
  return /^#{2,4}\s/.test(line) || /^```/.test(line) || /^>\s?/.test(line) || /^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line) || (line.trim().startsWith("|") && isTableSeparator(next));
}

function MarkdownBody({ body, context }: { body: string; context: RenderContext }) {
  const lines = body.split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;
  let block = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) { index++; continue; }
    const key = `block-${block++}`;

    if (/^```/.test(line)) {
      const language = line.slice(3).trim();
      const code: string[] = [];
      index++;
      while (index < lines.length && !/^```/.test(lines[index])) code.push(lines[index++]);
      index++;
      blocks.push(<pre className="editorial-code" data-language={language || undefined} key={key}><code>{code.join("\n")}</code></pre>);
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const id = heading[2].toLowerCase().replace(/[*_`]/g, "").replace(/[^a-z0-9áéíóúüñ]+/gi, "-").replace(/^-|-$/g, "");
      if (level === 2) blocks.push(<h2 id={id} key={key}>{inlineNodes(heading[2], context, key)}</h2>);
      else if (level === 3) blocks.push(<h3 id={id} key={key}>{inlineNodes(heading[2], context, key)}</h3>);
      else blocks.push(<h4 id={id} key={key}>{inlineNodes(heading[2], context, key)}</h4>);
      index++;
      continue;
    }

    if (line.trim().startsWith("|") && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
      const headers = tableCells(line);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith("|")) rows.push(tableCells(lines[index++]));
      blocks.push(
        <div className="editorial-table-wrap" key={key}>
          <table>
            <thead><tr>{headers.map((cell, cellIndex) => <th key={cellIndex}>{inlineNodes(cell, context, `${key}-h`)}</th>)}</tr></thead>
            <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inlineNodes(cell, context, `${key}-${rowIndex}`)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) quote.push(lines[index++].replace(/^>\s?/, ""));
      blocks.push(<blockquote key={key}>{inlineNodes(quote.join(" "), context, key)}</blockquote>);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) items.push(lines[index++].replace(/^[-*]\s+/, ""));
      blocks.push(<ul key={key}>{items.map((item, itemIndex) => <li key={itemIndex}>{inlineNodes(item, context, `${key}-${itemIndex}`)}</li>)}</ul>);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) items.push(lines[index++].replace(/^\d+\.\s+/, ""));
      blocks.push(<ol key={key}>{items.map((item, itemIndex) => <li key={itemIndex}>{inlineNodes(item, context, `${key}-${itemIndex}`)}</li>)}</ol>);
      continue;
    }

    const paragraph = [line.trim()];
    index++;
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index], lines[index + 1] ?? "")) paragraph.push(lines[index++].trim());
    const text = paragraph.join(" ");
    const imageOnly = text.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageOnly) {
      blocks.push(<figure key={key}><img src={imageOnly[2]} alt={imageOnly[1]} loading="lazy" /></figure>);
    } else {
      blocks.push(<p className={text.length < 55 && !/[.!?]$/.test(text) ? "editorial-label" : undefined} key={key}>{inlineNodes(text, context, key)}</p>);
    }
  }

  return <>{blocks}</>;
}

function splitDocument(body: string) {
  const lines = body.split("\n");
  const h1Index = lines.findIndex(line => /^#\s+/.test(line));
  const hero = h1Index >= 0 ? lines[h1Index].replace(/^#\s+/, "") : "SealMetrics";
  const eyebrow = lines.slice(0, Math.max(0, h1Index)).map(line => line.trim()).filter(Boolean).at(-1) || "SEALMETRICS";
  let introStart = h1Index + 1;
  while (introStart < lines.length && !lines[introStart].trim()) introStart++;
  const introLines: string[] = [];
  while (introStart < lines.length && lines[introStart].trim() && !isBlockStart(lines[introStart], lines[introStart + 1] ?? "")) introLines.push(lines[introStart++].trim());
  while (introStart < lines.length && !lines[introStart].trim()) introStart++;
  return { eyebrow, hero, intro: introLines.join(" "), body: lines.slice(introStart).join("\n") };
}

function breadcrumbName(segment: string, lang: CanonicalPage["lang"]) {
  const known: Record<string, string> = {
    es: "Inicio", blog: "Blog", glossary: lang === "es" ? "Glosario" : "Glossary",
    for: lang === "es" ? "Soluciones" : "Solutions", vs: "Comparisons",
  };
  return known[segment] || segment.replaceAll("-", " ").replace(/\b\w/g, letter => letter.toUpperCase());
}

function Breadcrumbs({ route, lang }: { route: string; lang: CanonicalPage["lang"] }) {
  const segments = route.split("/").filter(Boolean);
  const items = segments.map((segment, index) => ({
    label: breadcrumbName(segment, lang),
    href: `/${segments.slice(0, index + 1).join("/")}/`,
  }));
  return <nav className="editorial-breadcrumbs" aria-label={lang === "es" ? "Migas de pan" : "Breadcrumbs"}><a href={lang === "es" ? "/es/" : "/"}>{lang === "es" ? "Inicio" : "Home"}</a>{items.filter((_, index) => !(lang === "es" && index === 0)).map((item, index, list) => <span key={item.href}><i>/</i>{index === list.length - 1 ? <b>{item.label}</b> : <a href={item.href}>{item.label}</a>}</span>)}</nav>;
}

export function metadataForPage(page: CanonicalPage, alternate?: CanonicalPage): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.canonical,
      languages: alternate ? { [page.lang]: page.canonical, [alternate.lang]: alternate.canonical, "x-default": page.lang === "en" ? page.canonical : alternate.canonical } : undefined,
    },
    openGraph: { title: page.title, description: page.description, type: page.contentType === "blog" ? "article" : "website", url: page.canonical },
  };
}

export function EditorialPage({ page, route }: { page: CanonicalPage; route: string }) {
  const document = splitDocument(page.body);
  const isBlog = page.contentType === "blog";
  const isLegal = page.contentType === "trust-and-legal";
  const context: RenderContext = page;
  const jsonLd = isBlog ? {
    "@context": "https://schema.org", "@type": "Article", headline: page.title,
    description: page.description, dateModified: page.dateModified || undefined,
    mainEntityOfPage: page.canonical, publisher: { "@type": "Organization", name: "SealMetrics", url: "https://sealmetrics.com/" },
  } : {
    "@context": "https://schema.org", "@type": page.contentType === "glossary" ? "DefinedTerm" : "WebPage",
    name: page.title, description: page.description, url: page.canonical, inLanguage: page.lang,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="signal-bar inner-signal" aria-hidden="true"><span /> {page.lang === "es" ? "SEÑAL EN VIVO" : "LIVE SIGNAL"} <b>{page.lang === "es" ? "AGREGADO" : "AGGREGATE"}</b> {page.lang === "es" ? "EVENTOS OBSERVADOS" : "EVENTS OBSERVED"}</div>
      <SiteHeader locale={page.lang} currentPath={route} />
      <main className={`editorial-page editorial-${page.contentType}`} lang={page.lang}>
        <section className="editorial-hero">
          <Breadcrumbs route={route} lang={page.lang} />
          <p className="editorial-eyebrow">{document.eyebrow}</p>
          <h1>{inlineNodes(document.hero, context, "hero")}</h1>
          {document.intro && <p className="editorial-deck">{inlineNodes(document.intro, context, "deck")}</p>}
          <div className="editorial-meta"><span>{page.contentType.replaceAll("-", " ")}</span><span>{page.lang === "es" ? "ES" : "EN"}</span>{page.dateModified && <span>{page.lang === "es" ? "Revisado" : "Reviewed"} · {page.dateModified}</span>}</div>
        </section>

        <FunctionalSurface route={route} locale={page.lang} />

        <section className="editorial-layout">
          <aside>
            <span>{page.lang === "es" ? "PRINCIPIO EDITORIAL" : "EDITORIAL PRINCIPLE"}</span>
            <strong>{page.lang === "es" ? "La afirmación solo vale lo que vale la evidencia." : "The claim is only as good as the evidence."}</strong>
            <p>{page.lang === "es" ? "Arquitectura, método y límites visibles." : "Architecture, method and limits made visible."}</p>
          </aside>
          <article className="editorial-prose"><MarkdownBody body={document.body} context={context} /></article>
        </section>

        {!isLegal && <section className="editorial-next">
          <span>{isBlog || page.contentType === "glossary" ? (page.lang === "es" ? "SIGUIENTE PASO" : "NEXT STEP") : (page.lang === "es" ? "LA PRUEBA JUSTA" : "THE FAIR TEST")}</span>
          <h2>{isBlog || page.contentType === "glossary" ? (page.lang === "es" ? "Lleva la idea a la arquitectura." : "Take the idea into the architecture.") : (page.lang === "es" ? "Compara ambos sistemas con el mismo backend." : "Compare both systems with the same backend.")}</h2>
          <p>{page.lang === "es" ? "Mantén tu analítica actual, define el periodo y comprueba qué total reconcilia con los ingresos registrados." : "Keep your current analytics, define the period and check which reported total reconciles with recorded revenue."}</p>
          <div><a href={page.lang === "es" ? "/es/product/" : "/product/"}>{page.lang === "es" ? "Ver la plataforma" : "See the platform"} ↗</a>{!isBlog && <a href={page.lang === "es" ? "/es/demo/" : "/demo/"}>{page.lang === "es" ? "Reservar una demo" : "Book a demo"} →</a>}</div>
        </section>}
      </main>
      <SiteFooter locale={page.lang} />
    </>
  );
}
