import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { OpenChapterSidebar } from "@/components/open/OpenChapterSidebar";
import { OpenChapterTOC } from "@/components/open/OpenChapterTOC";
import {
  openChapters,
  getChapterBySlug,
  getAdjacentChapters,
  openParts,
  type OpenChapter,
} from "@/lib/content/open";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return openChapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) return {};
  const title = `${chapter.title} — Open · SealMetrics`;
  return {
    title: title.length > 60 ? `${chapter.title} — Open` : title,
    description: chapter.summary.slice(0, 158),
    openGraph: {
      title: `${chapter.title} — Open`,
      description: chapter.summary,
      type: "article",
      images: ["https://sealmetrics.com/og-image.png"],
    },
    alternates: {
      canonical: `https://sealmetrics.com/open/${chapter.slug}`,
    },
  };
}

export default async function OpenChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) notFound();
  const { prev, next } = getAdjacentChapters(slug);
  const partInfo = openParts.find((p) => p.number === chapter.part);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: chapter.title,
    description: chapter.summary,
    inLanguage: "en",
    isPartOf: {
      "@type": "Book",
      name: "Open — SealMetrics",
      url: "https://sealmetrics.com/open",
    },
    author: { "@type": "Organization", name: "SealMetrics" },
    publisher: {
      "@type": "Organization",
      name: "SealMetrics",
      url: "https://sealmetrics.com",
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        items={[
          { label: "Open", href: "/open" },
          { label: chapter.title },
        ]}
        locale="en"
      />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)_200px] gap-x-10 xl:gap-x-12 gap-y-10">
          {/* LEFT — chapter sidebar */}
          <OpenChapterSidebar currentSlug={chapter.slug} />

          {/* CENTER — article */}
          <article className="min-w-0 max-w-[680px] mx-auto w-full">
            {/* Chapter header */}
            <header className="mb-12 pb-10 border-b border-warm-100">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 font-mono text-[0.72rem] uppercase tracking-[0.12em]">
                <span className="text-text-tertiary">
                  Part {String(chapter.part).padStart(2, "0")} ·{" "}
                  {partInfo?.title}
                </span>
                <span aria-hidden="true" className="text-text-tertiary">
                  /
                </span>
                <span className="text-brand font-semibold">
                  Chapter {String(chapter.number).padStart(2, "0")}
                </span>
                {chapter.status === "draft" && (
                  <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-amber px-2 py-0.5 rounded-full bg-amber-soft/60 ml-1">
                    Draft
                  </span>
                )}
              </div>

              <h1
                className="h-display"
                style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}
                dangerouslySetInnerHTML={{
                  __html: chapter.titleHtml ?? chapter.title,
                }}
              />

              <p className="mt-7 text-[1.2rem] sm:text-[1.3rem] leading-[1.45] text-ink-2 font-normal max-w-[60ch]">
                {chapter.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.78rem] font-mono uppercase tracking-[0.08em] text-text-tertiary">
                <span>{chapter.readMinutes} min read</span>
                <span aria-hidden="true">·</span>
                <span>Last revised · May 2026</span>
              </div>
            </header>

            {/* Body */}
            {chapter.slug === "why-we-exist" ? (
              <ChapterOneBody />
            ) : chapter.slug === "architecture-and-performance" ? (
              <ChapterFiveBody />
            ) : (
              <DraftPlaceholder chapter={chapter} />
            )}

            {/* Feedback */}
            <div className="mt-16 pt-8 border-t border-warm-100">
              <p className="text-[0.85rem] text-text-secondary">
                Was this chapter useful?{" "}
                <a
                  href="mailto:open@sealmetrics.com?subject=Open — feedback"
                  className="text-brand hover:text-brand-hover no-underline"
                >
                  Tell us →
                </a>
              </p>
            </div>

            {/* Prev / Next */}
            <nav
              aria-label="Chapter navigation"
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {prev ? (
                <Link
                  href={`/open/${prev.slug}`}
                  className="group block no-underline border border-warm-100 rounded-[10px] p-5 hover:border-warm-200 hover:bg-warm-50/60 transition-colors"
                >
                  <span className="block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-text-tertiary mb-2">
                    ← Previous · ch. {String(prev.number).padStart(2, "0")}
                  </span>
                  <span className="block font-sans text-[1rem] font-semibold text-ink leading-snug group-hover:text-brand transition-colors">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span aria-hidden="true" />
              )}
              {next ? (
                <Link
                  href={`/open/${next.slug}`}
                  className="group block no-underline border border-warm-100 rounded-[10px] p-5 hover:border-warm-200 hover:bg-warm-50/60 transition-colors text-right"
                >
                  <span className="block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-text-tertiary mb-2">
                    Next · ch. {String(next.number).padStart(2, "0")} →
                  </span>
                  <span className="block font-sans text-[1rem] font-semibold text-ink leading-snug group-hover:text-brand transition-colors">
                    {next.title}
                  </span>
                </Link>
              ) : null}
            </nav>
          </article>

          {/* RIGHT — TOC */}
          <OpenChapterTOC items={chapter.toc} />
        </div>
      </div>

      {/* Dark slab CTA (excludes chapters 01, 02, and 11) */}
      {![1, 2, 11].includes(chapter.number) && (
        <section className="bg-ink text-dark-text section-dark relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(80% 60% at 20% 20%, rgba(45,139,109,0.35) 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 py-20 sm:py-24">
            <div className="max-w-[640px]">
              <span className="eyebrow" style={{ color: "#E8B84B" }}>
                Next step
              </span>
              <p className="mt-6 text-[1.4rem] sm:text-[1.75rem] font-medium leading-[1.3] text-dark-text">
                Want to see how this chapter translates to{" "}
                <span
                  className="italic font-normal"
                  style={{ color: "#E8B84B" }}
                >
                  your data
                </span>
                ?
              </p>
              <div className="mt-8">
                <Link
                  href="/demo"
                  className="inline-flex items-center min-h-[44px] px-6 py-3 text-[0.9rem] font-medium text-ink bg-white rounded-[4px] no-underline hover:bg-warm-50 transition-colors"
                >
                  Book a demo →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ============================================
   DRAFT PLACEHOLDER
   ============================================ */
function DraftPlaceholder({ chapter }: { chapter: OpenChapter }) {
  return (
    <div className="prose-open">
      <div className="rounded-[10px] border border-amber-soft bg-amber-soft/40 p-6 mb-12">
        <span className="block font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink font-semibold mb-2">
          Draft · chapter {String(chapter.number).padStart(2, "0")}
        </span>
        <p className="text-[0.95rem] text-ink-2 leading-relaxed m-0">
          "{chapter.title}" is still being written. This page exists to
          validate the design and structure. The sections below are the
          planned outline — the body will follow the same format as chapter
          01 and chapter 05.
        </p>
      </div>

      <p className="text-[1.2rem] leading-[1.65] text-ink-2 mb-8 first-letter:font-semibold first-letter:text-[2.4em] first-letter:float-left first-letter:mr-2 first-letter:leading-[1] first-letter:text-ink">
        The opening paragraph lives here, set in larger type with a drop cap.
        It establishes the tension up front — the problem, the question, the
        figure that doesn't add up — and primes the reader for the sections
        below.
      </p>

      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-10">
        A second paragraph in body type sets context. Here we introduce who
        this chapter is written for and what the reader should be able to do
        once they've finished it.
      </p>

      {chapter.toc.map((section, i) => (
        <section key={section.id} className="mt-14">
          <h2
            id={section.id}
            className="font-sans text-[1.85rem] sm:text-[2.15rem] font-semibold text-ink mt-0 mb-5 leading-[1.1] tracking-[-0.025em] scroll-mt-24"
          >
            {section.label}
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
            Section {i + 1} of {chapter.toc.length}. This is where the
            argument develops, with verifiable data, anticipated objections,
            and inline links to other chapters.
          </p>
          <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      ))}
    </div>
  );
}

/* ============================================
   CHAPTER 01 · Why SealMetrics exists
   ============================================ */
function ChapterOneBody() {
  return (
    <div className="prose-open">
      <p className="text-[1.25rem] leading-[1.6] text-ink-2 mb-8 first-letter:font-semibold first-letter:text-[2.4em] first-letter:float-left first-letter:mr-2 first-letter:leading-[1] first-letter:text-ink">
        Most enterprise eCommerce companies in Europe optimize their
        advertising investment on top of 13% of their traffic. This chapter
        is about what happens when that number stops being a measurement
        problem and becomes a decision problem.
      </p>

      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-12">
        It's written for{" "}
        <span className="italic-accent">
          CMOs, growth leads, and measurement owners
        </span>{" "}
        — the people who sign off on six or seven-figure media budgets and have
        to defend the result.
      </p>

      {/* Section 1 */}
      <h2
        id="the-problem"
        className="font-sans text-[1.85rem] sm:text-[2.15rem] font-semibold text-ink mt-14 mb-5 leading-[1.1] tracking-[-0.025em] scroll-mt-24"
      >
        The problem we see
      </h2>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
        Not 13% of some edge case. Thirteen percent of total — after GA4
        consent banners are rejected, ad blockers strip events, and Intelligent
        Tracking Prevention purges cross-site cookies on Safari and Firefox.
        Across our tests on European enterprise sites, that number holds with
        small variance.
      </p>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-10">
        Thirteen percent is what reaches the dashboard. Decisions are made
        anyway — because the dashboard is the only thing on the table.
      </p>

      <blockquote
        className="my-10 border-l-[3px] pl-6 py-2 italic text-[1.15rem] leading-[1.55] text-ink-2"
        style={{ borderColor: "#2E5C8A" }}
      >
        "The dashboard looks complete. That's the part that should worry you."
        <footer className="not-italic text-[0.85rem] text-text-tertiary mt-3 font-normal">
          — A common observation across audits
        </footer>
      </blockquote>

      {/* Section 2 */}
      <h2
        id="what-breaks"
        className="font-sans text-[1.85rem] sm:text-[2.15rem] font-semibold text-ink mt-14 mb-5 leading-[1.1] tracking-[-0.025em] scroll-mt-24"
      >
        What breaks in decision-making
      </h2>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
        Bidding algorithms are statistical models. When you feed them sampled,
        modeled, or partially observed conversion data, they don't refuse —
        they extrapolate. The output looks like a campaign performance report.
        It isn't. It's a confident extrapolation from a biased sample.
      </p>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
        A 10M€ eCommerce running on 13% data is not allocating 87% of its
        budget against ghosts. It is allocating{" "}
        <em className="italic-accent">100%</em> of its budget on a phantom of
        the truth. Every bid, every audience, every retargeting list is a
        guess dressed as a measurement.
      </p>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-10">
        The cost compounds. Budgets shift toward channels that{" "}
        <em>appear</em> to convert — because those channels are measured
        better, not because they perform better. The campaigns that actually
        drove revenue go unmeasured and unfunded. Over twelve months, the
        marketing plan rewrites itself around what GA4 can see, not around
        what your customers actually do.
      </p>

      {/* Section 3 */}
      <h2
        id="our-position"
        className="font-sans text-[1.85rem] sm:text-[2.15rem] font-semibold text-ink mt-14 mb-5 leading-[1.1] tracking-[-0.025em] scroll-mt-24"
      >
        Our position
      </h2>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-7">
        SealMetrics is built on three premises. They are constraints, not
        features — they define what we will and will not build.
      </p>

      <div className="my-10 rounded-[14px] border border-warm-100 bg-white overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-warm-100">
          <div className="p-7">
            <span className="block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brand mb-3">
              Premise 01
            </span>
            <h3 className="font-sans text-[1.3rem] font-semibold text-ink leading-snug mb-2">
              Data should be complete
            </h3>
            <p className="text-[1rem] leading-[1.7] text-ink-2 m-0">
              Captured server-side, before ad blockers see the request and
              before consent banners are decided. Aggregate, anonymous, never
              personal. The full population, not a sample of the consenting
              majority.
            </p>
          </div>
          <div className="p-7">
            <span className="block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brand mb-3">
              Premise 02
            </span>
            <h3 className="font-sans text-[1.3rem] font-semibold text-ink leading-snug mb-2">
              Attribution should be honest
            </h3>
            <p className="text-[1rem] leading-[1.7] text-ink-2 m-0">
              Last-click on 100% of events. Not because last-click is
              sophisticated — it isn't. Because{" "}
              <em className="italic-accent">complete</em> last-click
              outperforms <em>modeled</em> multi-touch every time the budget
              moves. We're explicit about this in{" "}
              <Link
                href="/open/what-we-wont-do"
                className="text-brand hover:text-brand-hover no-underline border-b border-brand/40"
              >
                chapter 09
              </Link>
              .
            </p>
          </div>
          <div className="p-7">
            <span className="block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brand mb-3">
              Premise 03
            </span>
            <h3 className="font-sans text-[1.3rem] font-semibold text-ink leading-snug mb-2">
              Compliance should be architectural
            </h3>
            <p className="text-[1rem] leading-[1.7] text-ink-2 m-0">
              No cookies, no localStorage, no fingerprinting. Hosted in
              Dublin. GDPR and ePrivacy compliant by design — not by legal
              interpretation. See{" "}
              <Link
                href="/open/gdpr-by-architecture"
                className="text-brand hover:text-brand-hover no-underline border-b border-brand/40"
              >
                chapter 06
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <h2
        id="who-we-dont-serve"
        className="font-sans text-[1.85rem] sm:text-[2.15rem] font-semibold text-ink mt-14 mb-5 leading-[1.1] tracking-[-0.025em] scroll-mt-24"
      >
        Who we don't serve
      </h2>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
        We are not a GA4 replacement for a 200K€ DTC startup. The product fit
        starts roughly at <strong className="font-semibold text-ink">10M€ in annual eCommerce revenue</strong>,
        where the cost of bad investment decisions exceeds the cost of
        measuring properly. Below that, GA4 plus a content management system
        usually works.
      </p>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
        We are also not a privacy-first lightweight tool. Plausible, Fathom,
        and Simple Analytics are excellent at what they do — they are not
        what we compete with. We compete with{" "}
        <strong className="font-semibold text-ink">
          GA360, Adobe Analytics, and Piwik PRO
        </strong>{" "}
        — at a fraction of the cost, with complete data, and without leaving
        the EU.
      </p>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-10">
        If your measurement problem is{" "}
        <em>"I need a simple analytics dashboard"</em>, this is the wrong
        product. If your problem is{" "}
        <em>"I'm spending real money on incomplete signal"</em>, the rest of
        this document explains why we exist and what we do about it.
      </p>

      <p className="text-[0.9rem] text-text-tertiary italic">
        Continue with{" "}
        <Link
          href="/open/who-we-build-for"
          className="text-brand hover:text-brand-hover no-underline border-b border-brand/40"
        >
          chapter 02 — Who we build for
        </Link>
        .
      </p>
    </div>
  );
}

/* ============================================
   CHAPTER 05 · Architecture and performance
   ============================================ */
function ChapterFiveBody() {
  return (
    <div className="prose-open">
      <p className="text-[1.2rem] leading-[1.65] text-ink-2 mb-8 first-letter:font-semibold first-letter:text-[2.4em] first-letter:float-left first-letter:mr-2 first-letter:leading-[1] first-letter:text-ink">
        Anyone can promise "complete, real-time measurement at scale." What
        follows is what it takes to back that sentence with numbers. This
        chapter describes where the SealMetrics pixel runs, what latency it
        introduces, how it scales, and what we guarantee.
      </p>

      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-12">
        It's written for technical leads —{" "}
        <span className="italic-accent">CTO, head of data, SRE</span> — who
        need to validate before they install. If you find an outdated number,
        write to us: we publish them so they can be corrected.
      </p>

      <h2
        id="where-it-runs"
        className="font-sans text-[1.85rem] sm:text-[2.15rem] font-semibold text-ink mt-14 mb-5 leading-[1.1] tracking-[-0.025em] scroll-mt-24"
      >
        Where the pixel runs
      </h2>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
        All event processing runs in owned infrastructure in{" "}
        <strong className="font-semibold text-ink">Dublin, Ireland</strong> —
        European Union, no traffic transiting the United States, no
        sub-processors outside the EEA. This includes pixel ingestion,
        validation, attribution, and storage.
      </p>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-10">
        The reason is operational before it is legal: a single region means a
        single surface to audit and maintain. The legal reason — Schrems II —
        follows from it.
      </p>

      <div className="my-12 rounded-[14px] border border-warm-100 bg-white overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-warm-100">
          {[
            { label: "Region", value: "Dublin, IE", sub: "EU-West" },
            { label: "Edge POPs", value: "12", sub: "Global CDN" },
            { label: "Sub-processors outside EEA", value: "0", sub: "Schrems II clean" },
          ].map((m) => (
            <div key={m.label} className="p-7">
              <span className="block font-mono text-[0.68rem] uppercase tracking-[0.12em] text-text-tertiary mb-3">
                {m.label}
              </span>
              <span className="block font-sans text-[2rem] font-semibold text-ink leading-none tracking-[-0.02em]">
                {m.value}
              </span>
              <span className="block mt-2 text-[0.82rem] text-text-secondary">
                {m.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h2
        id="latency"
        className="font-sans text-[1.85rem] sm:text-[2.15rem] font-semibold text-ink mt-14 mb-5 leading-[1.1] tracking-[-0.025em] scroll-mt-24"
      >
        Latency and client footprint
      </h2>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
        The pixel weighs{" "}
        <strong className="font-semibold text-ink">under 4 KB</strong>{" "}
        gzipped and loads asynchronously — it doesn't block document render,
        doesn't compete for main thread with critical scripts, and doesn't
        consume cookies or browser storage.
      </p>

      <blockquote
        className="my-10 border-l-[3px] pl-6 py-2 italic text-[1.15rem] leading-[1.55] text-ink-2"
        style={{ borderColor: "#2E5C8A" }}
      >
        "Measuring more data cannot come at the cost of the user. If
        measurement degrades experience, we have broken the most important
        part of the product."
        <footer className="not-italic text-[0.85rem] text-text-tertiary mt-3 font-normal">
          — Internal operating principle
        </footer>
      </blockquote>

      <div className="my-12 rounded-[14px] border border-warm-100 bg-white overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-warm-100">
          {[
            { label: "Pixel size", value: "< 4 KB", sub: "gzipped" },
            { label: "Latency P50", value: "38 ms", sub: "EU users" },
            { label: "Latency P95", value: "94 ms", sub: "EU users" },
            { label: "Blocks render", value: "No", sub: "async + defer" },
          ].map((m) => (
            <div key={m.label} className="p-5 sm:p-6">
              <span className="block font-mono text-[0.62rem] uppercase tracking-[0.12em] text-text-tertiary mb-2">
                {m.label}
              </span>
              <span className="block font-sans text-[1.5rem] sm:text-[1.75rem] font-semibold text-ink leading-none tracking-[-0.02em]">
                {m.value}
              </span>
              <span className="block mt-1.5 text-[0.76rem] text-text-secondary">
                {m.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[0.85rem] text-text-tertiary mb-10 italic">
        Figures measured in production over the last quarter. Next revision:
        August 2026.
      </p>

      <h2
        id="scale"
        className="font-sans text-[1.85rem] sm:text-[2.15rem] font-semibold text-ink mt-14 mb-5 leading-[1.1] tracking-[-0.025em] scroll-mt-24"
      >
        Capacity and scaling
      </h2>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
        The ingestion backend is a horizontally scalable Go service backed by
        ClickHouse. Each node processes events in batches with disk
        confirmation before returning a response — no silent event loss
        during traffic spikes.
      </p>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-10">
        Today we process traffic peaks for customers handling billions of
        events per month. The architecture is sized to absorb 5x without
        structural changes.
      </p>

      <h2
        id="availability"
        className="font-sans text-[1.85rem] sm:text-[2.15rem] font-semibold text-ink mt-14 mb-5 leading-[1.1] tracking-[-0.025em] scroll-mt-24"
      >
        Availability and SLAs
      </h2>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-10">
        Scale+ plans include a 99.9% SLA on ingestion and dashboard
        availability. Twelve-month history is published at{" "}
        <a
          href="https://status.sealmetrics.com"
          className="text-brand hover:text-brand-hover no-underline border-b border-brand/40"
        >
          status.sealmetrics.com
        </a>
        .
      </p>

      <h2
        id="what-we-dont-measure"
        className="font-sans text-[1.85rem] sm:text-[2.15rem] font-semibold text-ink mt-14 mb-5 leading-[1.1] tracking-[-0.025em] scroll-mt-24"
      >
        What we don't measure
      </h2>
      <p className="text-[1.05rem] leading-[1.75] text-ink-2 mb-5">
        By architecture, there are things the pixel{" "}
        <em className="italic-accent">cannot</em> capture — not in this
        chapter, not in any other. We do not identify individuals, we do not
        reconstruct cross-device sessions, and we do not fingerprint. That
        boundary is covered in{" "}
        <Link
          href="/open/what-we-wont-do"
          className="text-brand hover:text-brand-hover no-underline border-b border-brand/40"
        >
          chapter 09
        </Link>
        .
      </p>
    </div>
  );
}
