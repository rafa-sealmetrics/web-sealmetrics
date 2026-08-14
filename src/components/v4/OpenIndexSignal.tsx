import Link from "next/link";
import {
  openParts,
  openChapters,
  publishedChapters,
  publishedChaptersByPart,
  OPEN_PUBLISHED_MINUTES,
} from "@/lib/content/open";
import "./open-index-signal.css";

function Arrow() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h11M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function OpenIndexSignal() {
  const progress = `${publishedChapters.length}/${openChapters.length}`;

  return (
    <div className="sig-open-page">
      <section className="sig-open-hero">
        <div className="sig-open-hero-copy">
          <nav className="sig-open-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><span>Open</span>
          </nav>
          <p className="sig-open-tag">Open document · living record · v1.0</p>
          <h1>We publish<br />the method.<br /><em>Not just the claim.</em></h1>
          <p className="sig-open-lede">
            How SealMetrics measures, complies and operates — documented in public, with the limits left in.
          </p>
          <div className="sig-open-actions">
            <Link className="sig-open-button sig-open-button-acid" href={`/open/${publishedChapters[0].slug}/`}>
              Start with chapter 01 <Arrow />
            </Link>
            <a className="sig-open-text-link" href="#chapters">Browse the record ↓</a>
          </div>
        </div>

        <aside className="sig-open-ledger" aria-label="Open document status">
          <div className="sig-open-module-top"><span>Publication ledger</span><span>Public</span></div>
          <div className="sig-open-ledger-main">
            <span className="sig-open-live"><i /> Updated as we learn</span>
            <strong>{progress}</strong>
            <p>chapters published</p>
          </div>
          <dl>
            <div><dt>Published reading</dt><dd>{OPEN_PUBLISHED_MINUTES} min</dd></div>
            <div><dt>Editorial parts</dt><dd>{openParts.length}</dd></div>
            <div><dt>Corrections</dt><dd>Public</dd></div>
          </dl>
          <p className="sig-open-ledger-note">No marketing shorthand. No certification claims we cannot evidence. No silent rewrites.</p>
        </aside>
      </section>

      <section className="sig-open-principles" aria-label="Publishing principles">
        <div><span>01</span><p><b>Inspectable.</b> The method can be challenged.</p></div>
        <div><span>02</span><p><b>Specific.</b> Numbers replace adjectives.</p></div>
        <div><span>03</span><p><b>Revisable.</b> Corrections remain visible.</p></div>
      </section>

      <section className="sig-open-chapters" id="chapters">
        <div className="sig-open-section-head">
          <div><p className="sig-open-tag">The public record</p><h2>Read from the problem<br /><em>to the operating model.</em></h2></div>
          <p>{publishedChapters.length} published chapters move from why complete data matters to the architecture, commercial rules and definitions behind the product.</p>
        </div>

        <div className="sig-open-parts">
          {openParts.map((part) => {
            const chapters = publishedChaptersByPart(part.number);
            if (!chapters.length) return null;
            return (
              <section className="sig-open-part" key={part.number}>
                <header>
                  <span>Part {String(part.number).padStart(2, "0")}</span>
                  <h3>{part.title}</h3>
                  <p>{part.subtitle}</p>
                  <b>{chapters.length} published</b>
                </header>
                <ol>
                  {chapters.map((chapter) => (
                    <li key={chapter.slug}>
                      <Link href={`/open/${chapter.slug}/`}>
                        <span className="sig-open-chapter-number">{String(chapter.number).padStart(2, "0")}</span>
                        <div>
                          <p>{chapter.eyebrow} · {chapter.readMinutes} min</p>
                          <h4>{chapter.title}</h4>
                          <span>{chapter.summary}</span>
                        </div>
                        <Arrow />
                      </Link>
                    </li>
                  ))}
                </ol>
              </section>
            );
          })}
        </div>
      </section>

      <section className="sig-open-protocol">
        <div>
          <p className="sig-open-tag sig-open-tag-light">Publishing protocol</p>
          <h2>Trust is a record<br /><em>you can inspect.</em></h2>
        </div>
        <div className="sig-open-protocol-copy">
          <p>If a statement is inaccurate, incomplete or outdated, we correct it. The useful part of transparency is not the promise. It is the ability to point to the exact sentence.</p>
          <div className="sig-open-actions">
            <a className="sig-open-button sig-open-button-acid" href="https://cal.com/sealmetrics">Challenge the record <Arrow /></a>
            <Link className="sig-open-text-link sig-open-text-link-light" href="/changelog/">See the changelog →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
