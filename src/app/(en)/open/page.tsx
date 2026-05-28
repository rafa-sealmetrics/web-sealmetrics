import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  openChapters,
  openParts,
  publishedChapters,
  publishedChaptersByPart,
  OPEN_PUBLISHED_MINUTES,
} from "@/lib/content/open";

export const metadata: Metadata = {
  title: "Open — How we measure at SealMetrics",
  description:
    "How we measure, comply, and build SealMetrics. Eleven open chapters on our method, architecture, and operation.",
  openGraph: {
    title: "Open — How we measure at SealMetrics",
    description:
      "Eleven open chapters on how we measure, comply, and build SealMetrics.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/open",
  },
};

export default function OpenIndexPage() {
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Open — SealMetrics",
    inLanguage: "en",
    author: { "@type": "Organization", name: "SealMetrics" },
    description:
      "Eleven open chapters on how we measure, comply, and build SealMetrics.",
    hasPart: publishedChapters.map((c) => ({
      "@type": "Chapter",
      name: c.title,
      position: c.number,
      url: `https://sealmetrics.com/open/${c.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={bookSchema} />
      <Breadcrumbs items={[{ label: "Open" }]} locale="en" />

      {/* ============================================
          HERO
          ============================================ */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-10 pb-20 sm:pt-16 sm:pb-28">
        <div className="max-w-[820px]">
          <span className="eyebrow mb-8">Open document · v1.0</span>
          <h1 className="h-display mt-6">
            <em>Open</em>
          </h1>
          <p className="mt-8 text-[1.35rem] sm:text-[1.6rem] leading-[1.35] text-ink-2 max-w-[680px] font-normal">
            How we measure, comply, and build SealMetrics —{" "}
            <span className="italic-accent">in writing and in public</span>.
          </p>
          <p className="mt-8 text-[1rem] leading-[1.7] text-text-secondary max-w-[620px]">
            Eleven chapters on our method, architecture, and operation. No
            marketing pages, no vague promises. If you find anything inaccurate
            or incomplete, write to us.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.78rem] font-mono uppercase tracking-[0.08em] text-text-tertiary">
            <span>{publishedChapters.length} chapters published</span>
            <span aria-hidden="true">·</span>
            <span>{OPEN_PUBLISHED_MINUTES} min read</span>
            <span aria-hidden="true">·</span>
            <span>More chapters in progress</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={`/open/${publishedChapters[0].slug}`}
              className="inline-flex items-center min-h-[44px] px-6 py-3 text-[0.9rem] font-medium text-white bg-ink rounded-[4px] no-underline hover:bg-ink-2 transition-colors"
            >
              Start with chapter {String(publishedChapters[0].number).padStart(2, "0")} →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          PARTS + CHAPTERS LIST
          ============================================ */}
      <section className="border-t border-warm-100 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          {openParts.map((part) => {
            const chapters = publishedChaptersByPart(part.number);
            if (chapters.length === 0) return null;
            return (
              <div
                key={part.number}
                className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-x-12 gap-y-6 py-12 first:pt-0 last:pb-0 border-t border-warm-100 first:border-t-0"
              >
                {/* Part header */}
                <div className="md:sticky md:top-24 self-start">
                  <span className="eyebrow">
                    Part {String(part.number).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-sans text-[1.6rem] sm:text-[1.85rem] font-semibold text-ink leading-[1.15] tracking-[-0.02em]">
                    {part.title}
                  </h2>
                  <p className="mt-2 text-[0.92rem] text-text-secondary leading-snug">
                    {part.subtitle}
                  </p>
                </div>

                {/* Chapter rows */}
                <ol className="flex flex-col">
                  {chapters.map((chapter) => (
                    <li key={chapter.slug}>
                      <Link
                        href={`/open/${chapter.slug}`}
                        className="group block no-underline border-t border-warm-100 first:border-t-0 py-7 transition-colors hover:bg-warm-50/60 -mx-3 px-3 rounded-[6px]"
                      >
                        <div className="flex items-baseline gap-5 sm:gap-7">
                          <span className="shrink-0 font-mono text-[0.78rem] font-semibold text-text-tertiary tracking-[0.06em] w-8 mt-1">
                            {String(chapter.number).padStart(2, "0")}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                              <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-brand">
                                {chapter.eyebrow}
                              </span>
                              <span className="font-mono text-[0.68rem] text-text-tertiary">
                                · {chapter.readMinutes} min
                              </span>
                              {chapter.status === "draft" && (
                                <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-amber px-2 py-0.5 rounded-full bg-amber-soft/60">
                                  Draft
                                </span>
                              )}
                            </div>
                            <h3 className="font-sans text-[1.3rem] sm:text-[1.5rem] font-semibold text-ink leading-[1.2] tracking-[-0.02em] group-hover:text-brand transition-colors">
                              {chapter.title}
                            </h3>
                            <p className="mt-2 text-[0.95rem] leading-[1.55] text-text-secondary max-w-[60ch]">
                              {chapter.summary}
                            </p>
                          </div>
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-text-tertiary group-hover:text-brand group-hover:translate-x-1 transition-all mt-1"
                          >
                            →
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================
          DARK SLAB · transparency commitment
          ============================================ */}
      <section className="bg-ink text-dark-text section-dark relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(80% 60% at 70% 10%, rgba(45,139,109,0.35) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-[760px]">
            <span className="eyebrow" style={{ color: "#E8B84B" }}>
              Why we publish this
            </span>
            <p className="mt-6 text-[1.6rem] sm:text-[2rem] font-medium leading-[1.25] text-dark-text">
              Trust is built in public. If you read something inaccurate,
              incomplete, or outdated, tell us —{" "}
              <span className="italic font-normal" style={{ color: "#E8B84B" }}>
                we fix it.
              </span>
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.85rem] text-dark-text-secondary">
              <a
                href="mailto:open@sealmetrics.com"
                className="text-dark-text hover:text-amber transition-colors"
                style={{ color: "#E8E8E8" }}
              >
                open@sealmetrics.com →
              </a>
              <span aria-hidden="true">·</span>
              <Link
                href="/changelog"
                className="text-dark-text hover:text-amber transition-colors"
                style={{ color: "#E8E8E8" }}
              >
                See the changelog →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
