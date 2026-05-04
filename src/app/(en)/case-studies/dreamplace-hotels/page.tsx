import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  casePersonSchema,
  reviewSchema,
  statisticClaimSchema,
  quotationSchema,
} from "@/lib/schema";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";
import { getAlternates } from "@/lib/i18n/navigation";

export const metadata: Metadata = {
  title: "Dreamplace Hotels case study — Paid media on real data",
  description:
    "Dreamplace Hotels uses SealMetrics to allocate paid media budget. 15–20% more sales attribution vs the previous tool, and +30% more traffic vs Google Analytics.",
  alternates: {
    canonical: "https://sealmetrics.com/case-studies/dreamplace-hotels",
    languages: getAlternates("/case-studies/dreamplace-hotels"),
  },
  openGraph: {
    title:
      "Dreamplace Hotels — Decide paid media on real data, not on what each platform reports",
    description:
      "15–20% more sales attribution, closing the gap to CRM. +30% more traffic vs Google Analytics. Meta and Google as the first channels. Case study with Eduardo Martin.",
    type: "article",
    images: ["https://sealmetrics.com/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Case studies", href: "/case-studies" },
          { label: "Dreamplace Hotels" },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Case studies", url: "/case-studies" },
          { name: "Dreamplace Hotels", url: "/case-studies/dreamplace-hotels" },
        ])}
      />
      <JsonLd
        data={casePersonSchema({
          name: "Eduardo Martin",
          jobTitle: "eCommerce",
          worksForName: "Dreamplace Hotels",
          worksForUrl: "https://www.dreamplacehotels.com/",
          caseUrl: "/case-studies/dreamplace-hotels",
          caseName: "Dreamplace Hotels case study — Paid media on real data",
        })}
      />
      <JsonLd
        data={articleSchema({
          headline: "Dreamplace Hotels case study — Paid media on real data",
          description:
            "Dreamplace Hotels reallocates paid media on SealMetrics data: 15–20% more attributed sales vs the previous tool and +30% more traffic vs Google Analytics.",
          datePublished: "2026-04-15",
          dateModified: "2026-04-15",
          url: "/case-studies/dreamplace-hotels",
          category: "Case study",
          author: { name: "SealMetrics", url: "/about" },
          image: "https://sealmetrics.com/og-image.png",
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "SealMetrics attributes 15% to 20% more sales to the correct channel than the previous tool, getting closer to Dreamplace's native CRM data.",
          source: "Dreamplace Hotels internal comparison · April 2026",
          sourceAuthor: "Dreamplace Hotels",
          sourceDate: "2026-04-15",
          url: "/case-studies/dreamplace-hotels",
          numericValue: 20,
          unit: "PERCENT",
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "SealMetrics captures roughly 30% more traffic than Google Analytics after closing the consent gap.",
          source: "Dreamplace Hotels traffic comparison vs Google Analytics · April 2026",
          sourceAuthor: "Dreamplace Hotels",
          sourceDate: "2026-04-15",
          url: "/case-studies/dreamplace-hotels",
          numericValue: 30,
          unit: "PERCENT",
        })}
      />
      <JsonLd
        data={quotationSchema({
          text: "What it gives us is what we've always needed: data as real as possible, as close to reality as possible.",
          spokenBy: "Eduardo Martin",
          spokenByRole: "eCommerce · Dreamplace Hotels",
          url: "/case-studies/dreamplace-hotels",
        })}
      />
      <JsonLd
        data={quotationSchema({
          text: "The value is in optimising the budget and the investment. It's not just what extra you generate: it's that you're investing better, because you're shifting toward a channel or strategy you weren't seeing before.",
          spokenBy: "Eduardo Martin",
          spokenByRole: "eCommerce · Dreamplace Hotels",
          url: "/case-studies/dreamplace-hotels",
        })}
      />
      <JsonLd
        data={reviewSchema({
          reviewBody:
            "What it gives us is what we've always needed: data as real as possible, as close to reality as possible.",
          authorName: "Eduardo Martin",
          authorRole: "eCommerce · Dreamplace Hotels",
          datePublished: "2026-04-15",
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <span className="eyebrow mb-5">Case study · Dreamplace Hotels</span>
          <h1 className="h-display mt-5" style={{ maxWidth: "26ch" }}>
            Decide paid media investment on the <em>real number</em>, not on what each
            platform reports.
          </h1>
          <p
            className="text-ink-soft mt-8 max-w-[68ch] leading-[1.55] italic"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            Dreamplace Hotels integrated SealMetrics into their internal analysis
            process. The gap with other tools in sales attribution sits between 15% and
            20% — and that gap already moves channel-level budget decisions.
          </p>
        </div>
      </section>

      {/* Client meta strip */}
      <section className="border-t border-warm-100 bg-warm-white py-10">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { l: "Client", v: "Dreamplace Hotels" },
              { l: "Sector", v: "Hospitality · eCommerce" },
              { l: "Using SealMetrics", v: "~2 years" },
              { l: "Primary use", v: "Channel attribution" },
            ].map((m) => (
              <div key={m.l}>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-2">
                  {m.l}
                </div>
                <div className="text-[15px] font-semibold text-ink tracking-[-0.01em]">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro body */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <div className="space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Eduardo Martin runs eCommerce at Dreamplace Hotels. He has been working
              with SealMetrics for nearly two years, and what started as a contrast tool
              has become a fixed piece of his analysis process.
            </p>
            <p>
              The context will be familiar to any European eCommerce marketer: recent
              privacy changes, browser blocking and consent banners have pushed
              traditional measurement tools behind reality. The data was there, but it
              wasn&apos;t being seen in full. And without complete data, no decision is
              fully safe.
            </p>
            <p>
              &laquo;Other tools — we know how they work, it&apos;s not that they
              don&apos;t serve a purpose — but they haven&apos;t adapted to the changes
              of the last few years, and we felt something was slipping through the
              cracks,&raquo; Eduardo explains.
            </p>
          </div>

          <blockquote
            className="mt-12 border-l-[3px] pl-6 py-1 italic"
            style={{ borderColor: "#2E5C8A", color: "#0E0E0C" }}
          >
            <p className="text-[22px] leading-[1.4] tracking-[-0.01em] font-medium">
              &ldquo;What it gives us is what we&apos;ve always needed: data as real as
              possible, as close to reality as possible.&rdquo;
            </p>
            <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
              Eduardo Martin · eCommerce · Dreamplace Hotels
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Headline stats */}
      <section className="bg-warm-white border-t border-warm-100 py-16">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: "15–20",
              u: "%",
              l: "More sales attribution than the previous tool",
              note: "Closing the gap to Dreamplace's native CRM data.",
            },
            {
              n: "+30",
              u: "%",
              l: "More traffic recorded vs Google Analytics",
              note: "After closing the consent gap GA4 leaves open.",
            },
            {
              n: "2",
              u: " channels",
              l: "Meta and Google as the first focus",
              note: "The first channels where decisions are made on SealMetrics data.",
            },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-white border border-warm-100 rounded-xl p-7 flex flex-col gap-3"
            >
              <div
                className="font-semibold tracking-[-0.04em] text-ink leading-none tabular-nums"
                style={{ fontSize: "clamp(54px, 6vw, 78px)" }}
              >
                {s.n}
                {s.u && (
                  <span
                    className="italic font-medium"
                    style={{ color: "#E8B84B", fontStyle: "italic" }}
                  >
                    {s.u}
                  </span>
                )}
              </div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
                {s.l}
              </div>
              <div className="text-[14px] leading-[1.5] text-ink-2">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* From contrast tool to decision tool */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            From a contrast tool to a <em>decision tool.</em>
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              In the first phase, SealMetrics was used to cross-check data. A parallel
              picture next to traditional platforms, used to validate whether what Meta,
              Google and Analytics were reporting was close to what was actually
              happening.
            </p>
            <p>
              After the last campaign of the season, the framing changed. SealMetrics
              isn&apos;t alongside the process anymore: it&apos;s <em>inside</em> the
              process.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-warm-50 border border-warm-100 rounded-xl p-7">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-3">
                Before
              </div>
              <h3 className="text-[18px] font-semibold text-ink tracking-[-0.015em] mb-2">
                A contrast tool
              </h3>
              <p className="text-[15px] leading-[1.6] text-ink-2">
                SealMetrics was opened to compare. Decisions were taken on platform
                data; SealMetrics was used as a control.
              </p>
            </div>
            <div
              className="border rounded-xl p-7"
              style={{
                background: "rgba(45,139,109,0.08)",
                borderColor: "rgba(45,139,109,0.25)",
              }}
            >
              <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-brand font-semibold mb-3">
                Now
              </div>
              <h3 className="text-[18px] font-semibold text-ink tracking-[-0.015em] mb-2">
                A decision tool
              </h3>
              <p className="text-[15px] leading-[1.6] text-ink-2">
                SealMetrics is built into the extraction and analysis process. It&apos;s
                the data channel decisions are made on.
              </p>
            </div>
          </div>

          <p className="mt-10 text-[17px] leading-[1.7] text-ink">
            &laquo;It&apos;s no longer a tool that sits there for us to see what number
            it gives. It&apos;s the tool that gives us the real number, and the one we
            make decisions with,&raquo; Eduardo summarises.
          </p>
        </div>
      </section>

      {/* Where the difference shows up */}
      <section className="bg-warm-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            Where the difference shows up: <em>attribution, not just traffic.</em>
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              One of the team&apos;s most useful findings was distinguishing two
              different gaps. The first, in raw traffic: SealMetrics captures roughly
              30% more traffic than Google Analytics. That figure alone forces a review
              of any conversion rate, cost-per-visit or ROAS calculation made on the
              previous data.
            </p>
            <p>
              The second gap — the one that ends up moving budget — sits one level
              deeper: in how that traffic is attributed to channel.
            </p>
          </div>

          <div className="mt-10 bg-white border border-warm-100 rounded-xl p-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-3">
              The second gap, the one that moves budget
            </div>
            <p className="text-[19px] leading-[1.5] text-ink italic">
              &laquo;Where we really see the difference is in how that traffic and
              especially that revenue is attributed. Between a 15% and a 20% gap closer
              to pure CRM data.&raquo;
            </p>
          </div>

          <p className="mt-8 text-[17px] leading-[1.7] text-ink">
            In other words: SealMetrics attributes 15% to 20% more sales to the correct
            channel than the previous tool, getting much closer to Dreamplace&apos;s
            native CRM. Applied to a paid media budget in peak hotel season, that
            percentage is the difference between investing with conviction and investing
            blind.
          </p>
        </div>
      </section>

      {/* Where it's used: Meta and Google */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            Where it&apos;s used: Meta and Google,{" "}
            <em>by channel before by campaign.</em>
          </h2>
          <p className="mt-8 text-[17px] leading-[1.7] text-ink">
            The team prioritised SealMetrics on the two fronts where the traditional
            pixel produces the most friction:
          </p>

          <ul className="mt-8 space-y-5">
            {[
              {
                t: "Meta and Google as the first focus",
                d: "The two channels with the highest spend and the largest discrepancy between what the pixel reports and what reaches the CRM.",
              },
              {
                t: "Read by channel before by campaign",
                d: "First, fix the reliability of the data at channel level; from there, drill down into specific campaigns.",
              },
              {
                t: "Conversation with the agency",
                d: "The media partner already knows Dreamplace wants to operate against this read. The plan is to incorporate SealMetrics into the feed optimisation flow next year.",
              },
            ].map((b) => (
              <li
                key={b.t}
                className="grid grid-cols-[auto_1fr] gap-5 pb-5 border-b border-warm-100 last:border-0"
              >
                <span className="text-brand mt-2">—</span>
                <div>
                  <div className="text-[18px] font-semibold text-ink tracking-[-0.015em]">
                    {b.t}
                  </div>
                  <div className="text-[15px] leading-[1.6] text-ink-2 mt-1.5">
                    {b.d}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Next operational step */}
          <div className="mt-10 bg-warm-50 border border-warm-100 rounded-xl p-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-3">
              Next operational step
            </div>
            <h3
              className="font-semibold text-ink leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}
            >
              Site properties → dynamic campaigns.
            </h3>
            <p className="mt-5 text-[16px] leading-[1.65] text-ink-2">
              Dreamplace is starting to work with the <em>properties</em> SealMetrics
              captures (hotel location, room size and room type) to feed dynamic
              campaigns by search intent: users interested in five-star hotels, in
              family rooms, etc. The goal is to leave behind undifferentiated
              re-impact campaigns and operate on real intent signals.
            </p>
          </div>
        </div>
      </section>

      {/* The value: better-allocated investment (DARK SLAB) */}
      <section className="section-dark bg-ink text-white py-24 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            right: -120,
            top: -120,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(45,139,109,0.35),transparent 70%)",
          }}
        />
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 relative">
          <div className="max-w-[760px] mx-auto">
            <span className="eyebrow mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
              The value that ends up mattering
            </span>
            <h2 className="h-section text-white mt-5">
              Investment{" "}
              <em
                className="italic font-medium"
                style={{ color: "#E8B84B", fontStyle: "italic" }}
              >
                better allocated.
              </em>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.7] text-white/85">
              When asked about impact, Eduardo avoids quoting an uplift figure that
              isn&apos;t rigorously measured. He prefers to frame the value where he
              actually sees it:
            </p>

            <blockquote className="mt-10 border-l-[3px] pl-6 py-1 italic border-brand-soft">
              <p className="text-[22px] leading-[1.45] tracking-[-0.01em] font-medium text-white">
                &ldquo;The value is in optimising the budget and the investment.
                It&apos;s not just what extra you generate: it&apos;s that you&apos;re
                investing better, because you&apos;re shifting toward a channel or
                strategy you weren&apos;t seeing before.&rdquo;
              </p>
              <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-white/60 font-semibold">
                Eduardo Martin · Dreamplace Hotels
              </cite>
            </blockquote>

            <p className="mt-10 text-[17px] leading-[1.7] text-white/85">
              That allocation differential — moving spend toward channels that were
              previously invisible — feeds through to the final sale. But before that,
              it feeds through to the confidence with which decisions are taken. For a
              team that operates on seasonal budgets and tight decision windows, that
              shift in the underlying information is what counts.
            </p>
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="bg-warm-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            And one line that explains <em>why SealMetrics matters.</em>
          </h2>
          <p className="mt-8 text-[17px] leading-[1.7] text-ink">
            At the end of the conversation we asked Eduardo how he&apos;d recommend
            SealMetrics to a peer at another eCommerce. His answer isn&apos;t a pitch.
            It&apos;s a question:
          </p>

          <blockquote
            className="mt-10 border-l-[3px] pl-6 py-1 italic"
            style={{ borderColor: "#2E5C8A", color: "#0E0E0C" }}
          >
            <p className="text-[22px] leading-[1.4] tracking-[-0.01em] font-medium">
              &ldquo;I&apos;d ask them whether they think the numbers they have are the
              true ones, the real ones. That&apos;s the starting point. From there, the
              conversation runs by itself.&rdquo;
            </p>
            <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
              Eduardo Martin · Dreamplace Hotels
            </cite>
          </blockquote>

          <p className="mt-10 text-[17px] leading-[1.7] text-ink">
            It is, probably, the cleanest summary of what SealMetrics solves. Most
            eCommerce marketing teams have spent years accepting incomplete data,
            because there&apos;s no clear reference point to measure against. Having
            that reference — and making investment decisions from it — is the difference
            between getting it right by luck and getting it right by method.
          </p>

          <p className="mt-12 italic text-[13px] leading-[1.6] text-ink-soft">
            Case study based on a conversation with Eduardo Martin, eCommerce lead at
            Dreamplace Hotels, in April 2026. All figures cited come from estimates by
            Dreamplace&apos;s own team based on their internal comparison between
            SealMetrics, third-party analytics tools and their CRM.
          </p>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={
          <>
            Are the numbers you have{" "}
            <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              the real ones?
            </em>
          </>
        }
        titleEs={
          <>
            ¿Crees que los datos que tienes{" "}
            <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              son los reales?
            </em>
          </>
        }
        ledeEn="Free measurement audit. We show you how much traffic and revenue attribution is missing from your current analytics. No commitment, nothing to install."
        ledeEs="Pide una auditoría gratuita de tu medición actual. Te mostramos cuánto tráfico y atribución de venta está quedando fuera de tu analítica. Sin compromiso, sin instalar nada."
      />
    </>
  );
}
