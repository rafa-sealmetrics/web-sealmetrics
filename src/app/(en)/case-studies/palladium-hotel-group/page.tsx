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
  title: "Palladium Hotel Group · single source of truth — Case study",
  description:
    "Palladium Hotel Group used SealMetrics as the neutral source of truth brand, agencies and departments accept. The trigger: 40% of traffic had no attribution.",
  alternates: {
    canonical: "https://sealmetrics.com/case-studies/palladium-hotel-group",
    languages: getAlternates("/case-studies/palladium-hotel-group"),
  },
  openGraph: {
    title: "Palladium Hotel Group — A single source of truth all stakeholders accept",
    description:
      "Why Palladium Hotel Group chose neutrality over volume reported. 40% traffic with no attribution. 35% of bookings unattributed. +165% Cost-per-Search on Display.",
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
          { label: "Palladium Hotel Group" },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Case studies", url: "/case-studies" },
          { name: "Palladium Hotel Group", url: "/case-studies/palladium-hotel-group" },
        ])}
      />
      <JsonLd
        data={casePersonSchema({
          name: "Toni Andújar",
          jobTitle: "Digital & Direct Sales Director",
          worksForName: "Palladium Hotel Group",
          worksForUrl: "https://www.palladiumhotelgroup.com/",
          caseUrl: "/case-studies/palladium-hotel-group",
          caseName: "Palladium Hotel Group case study — A neutral single source of truth",
        })}
      />
      <JsonLd
        data={articleSchema({
          headline: "Palladium Hotel Group case study — A neutral single source of truth",
          description:
            "Palladium Hotel Group adopted SealMetrics as the neutral measurement layer brand, agencies and departments accept. 40% of traffic was unattributed before; +165% Cost-per-Search on Display after.",
          datePublished: "2026-04-15",
          dateModified: "2026-04-15",
          url: "/case-studies/palladium-hotel-group",
          category: "Case study",
          author: { name: "SealMetrics", url: "/about" },
          image: "https://sealmetrics.com/og-image.png",
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "40% of inbound traffic had no source/medium attribution in the previous measurement stack.",
          source: "Palladium Hotel Group internal audit · April 2026",
          sourceAuthor: "Palladium Hotel Group",
          sourceDate: "2026-04-15",
          url: "/case-studies/palladium-hotel-group",
          numericValue: 40,
          unit: "PERCENT",
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "35% of bookings recorded as events in GA4 could not be assigned to the channel that generated them.",
          source: "Palladium Hotel Group bookings attribution gap · April 2026",
          sourceAuthor: "Palladium Hotel Group",
          sourceDate: "2026-04-15",
          url: "/case-studies/palladium-hotel-group",
          numericValue: 35,
          unit: "PERCENT",
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "+165% improvement in Cost-per-Search on the Display channel after implementing a SealMetrics-based measurement model on DV360.",
          source: "Palladium Hotel Group DV360 efficiency improvement · April 2026",
          sourceAuthor: "Palladium Hotel Group",
          sourceDate: "2026-04-15",
          url: "/case-studies/palladium-hotel-group",
          numericValue: 165,
          unit: "PERCENT",
        })}
      />
      <JsonLd
        data={quotationSchema({
          text: "The data SealMetrics delivers is agnostic, unbiased and neutral. There's no black box.",
          spokenBy: "Toni Andújar",
          spokenByRole: "Digital & Direct Sales Director, Palladium Hotel Group",
          url: "/case-studies/palladium-hotel-group",
        })}
      />
      <JsonLd
        data={quotationSchema({
          text: "Today every player is happy. The data is neutral, there's no black box, and everyone has accepted these numbers as the reference.",
          spokenBy: "Toni Andújar",
          spokenByRole: "Digital & Direct Sales Director, Palladium Hotel Group",
          url: "/case-studies/palladium-hotel-group",
        })}
      />
      <JsonLd
        data={reviewSchema({
          reviewBody:
            "The data SealMetrics delivers is agnostic, unbiased and neutral. There's no black box.",
          authorName: "Toni Andújar",
          authorRole: "Digital & Direct Sales Director, Palladium Hotel Group",
          datePublished: "2026-04-15",
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <span className="eyebrow mb-5">Case study · Palladium Hotel Group</span>
          <h1 className="h-display mt-5" style={{ maxWidth: "26ch" }}>
            A single source of truth that brand, agencies and departments{" "}
            <em>accept as valid.</em>
          </h1>
          <p
            className="text-ink-soft mt-8 max-w-[68ch] leading-[1.55] italic"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            Palladium Hotel Group uses SealMetrics as their single source of truth to align
            conversion goals with their agencies and across departments. The number that
            triggered the change: 40% of their traffic had no attribution in the previous
            measurement stack.
          </p>
        </div>
      </section>

      {/* Client meta strip */}
      <section className="border-t border-warm-100 bg-warm-white py-10">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { l: "Client", v: "Palladium Hotel Group" },
              { l: "Sector", v: "Hotels · eCommerce" },
              { l: "Primary use", v: "Single source of truth" },
              { l: "Scope", v: "Brand + agencies" },
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
          <div className="prose-editorial space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              In marketing and eCommerce, measuring the result of a campaign is only part of
              the problem. The other part — equally important — is that every party involved
              is looking at the same number. When the brand, the paid media agency, the
              creative agency and the internal analytics team see four different figures for
              the same campaign, no real conversation is possible: each side defends its own
              metric.
            </p>
            <p>
              Palladium Hotel Group decided to cut that knot. Instead of choosing the tool
              that reported the most sales — or the one that suited each department best —
              they picked a different criterion: <b>the most neutral tool</b>.
            </p>
            <p>
              That criterion led them to SealMetrics. Since then, conversion goals — at
              company level, at department level and with their external agencies — are
              defined and measured against the data SealMetrics delivers.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote
            className="mt-12 border-l-[3px] pl-6 py-1 italic"
            style={{ borderColor: "#2E5C8A", color: "#0E0E0C" }}
          >
            <p className="text-[22px] leading-[1.4] tracking-[-0.01em] font-medium">
              &ldquo;The data SealMetrics delivers is agnostic, unbiased and neutral. There&apos;s
              no black box.&rdquo;
            </p>
            <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
              Toni Andújar · Digital &amp; Direct Sales Director · Palladium Hotel Group
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Headline stats */}
      <section className="bg-warm-white border-t border-warm-100 py-16">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: "40",
              u: "%",
              l: "Traffic with no attribution before SealMetrics",
              note: "The data existed, but the source / medium of origin was lost.",
            },
            {
              n: "35",
              u: "%",
              l: "Bookings without attribution",
              note: "The event was logged in GA4, but it couldn't be assigned to the channel that generated it.",
            },
            {
              n: "1",
              u: "",
              l: "Single source of truth",
              note: "Accepted by every player: brand, departments and external agencies.",
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

      {/* The real problem */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            The real problem: four tools, <em>four different truths.</em>
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Like any brand with serious paid media investment, Palladium Hotel Group
              operates with a fragmented measurement ecosystem: the Meta Pixel, the Google
              Ads tag, Google Analytics, the booking engine and each agency&apos;s own
              platforms. Multiple sources that rarely agree.
            </p>
            <p>
              The usual outcome is familiar to any Direct Channel team: reporting meetings
              where half an hour is spent reconciling figures, goals negotiated with the
              agency on metrics the internal team later won&apos;t validate, and investment
              decisions made on data each side interprets to suit themselves.
            </p>
            <p>In that context, the first finding with SealMetrics was about scale.</p>
          </div>

          {/* Highlight finding */}
          <div className="mt-10 bg-warm-50 border border-warm-100 rounded-xl p-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-3">
              The finding that changed the conversation
            </div>
            <h3
              className="font-semibold text-ink leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
            >
              40% of inbound traffic had no attribution.
            </h3>
            <div className="mt-5 space-y-4 text-[16px] leading-[1.65] text-ink-2">
              <p>
                When SealMetrics was compared against their previous stack, Palladium Hotel Group
                Group discovered that roughly 40% of the traffic reaching the site was not
                being attributed correctly: it was logged as traffic, but its real source /
                medium was lost — absorbed into &ldquo;direct&rdquo; or left unassigned.
              </p>
              <p>
                The effect on bookings was equivalent. Booking events <em>did</em> appear in
                GA4 — the team works with properly configured events — but 35% of those
                bookings could not be connected to the campaign, channel or placement that
                had generated them.
              </p>
              <p>
                With that picture on the table, debating tenths of ROAS in a meeting with the
                agency becomes a different conversation. It&apos;s no longer &ldquo;your
                number versus mine.&rdquo; It&apos;s &ldquo;a substantial part of what
                happens on the site isn&apos;t being attributed to anyone in either of our
                reports.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic decision */}
      <section className="bg-warm-white border-t border-warm-100 py-20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="max-w-[760px] mx-auto">
            <h2 className="h-section">
              The strategic call: pick by accuracy, <em>not by reported volume.</em>
            </h2>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
              <p>
                Here&apos;s where Palladium Hotel Group differs from many other digital teams.
                When a brand compares measurement tools, the natural temptation is to pick the
                one that reports the most conversions — not the one that reports the most
                accurate data. The temptation is understandable: the tool that inflates the
                figures always looks better in the management committee.
              </p>
              <p>
                Palladium Hotel Group chose the opposite. They picked the tool that measured 100% of the
                events on the site — no modelling, no estimation, no attribution biased
                toward an in-house channel — and accepted that good data sometimes hurts more
                than optimistic data.
              </p>
            </div>
          </div>

          {/* Governance diagram */}
          <div className="mt-12 max-w-[860px] mx-auto bg-white border border-warm-100 rounded-xl p-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold text-center mb-6">
              The data governance problem
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Platform A", name: "Meta Ads" },
                { label: "Platform B", name: "Google Ads" },
                { label: "Aggregator", name: "Google Analytics" },
              ].map((t) => (
                <div
                  key={t.name}
                  className="bg-warm-50 border border-warm-100 rounded-md p-5 text-center"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-2">
                    {t.label}
                  </div>
                  <div className="text-[16px] font-semibold text-ink">{t.name}</div>
                </div>
              ))}
            </div>
            <div className="text-center text-ink-soft my-4">↓</div>
            <div className="bg-ink text-white rounded-md p-6 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-brand-soft font-semibold mb-2">
                Neutral source of truth
              </div>
              <div className="text-[20px] font-semibold tracking-[-0.01em]">SealMetrics</div>
            </div>
          </div>

          <div className="mt-10 max-w-[760px] mx-auto space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Meta reports with Meta&apos;s bias. Google reports with Google&apos;s bias.
              Analytics lives inside Google&apos;s ecosystem. Any dashboard built on those
              three sources carries a structural bias that&apos;s impossible to correct.
            </p>
            <p>
              SealMetrics doesn&apos;t sell ad inventory, doesn&apos;t optimise campaigns
              and has no incentive to inflate attribution toward any channel. That neutrality
              — technical and commercial — is what allows the media agency, the Direct
              Channel team and company management to sign goals against those numbers without
              anyone feeling they&apos;re signing against a rival.
            </p>
          </div>
        </div>
      </section>

      {/* Business outcome */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            The business outcome: 35% of bookings <em>that weren&apos;t attributed.</em>
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Traffic without attribution has a direct consequence: the bookings that traffic
              generates can&apos;t be assigned to a channel either. According to the
              Palladium Hotel Group team, roughly 35% of the bookings appearing in GA4
              couldn&apos;t be tied to the source that had generated them. Real bookings,
              logged as events, but with no usable attribution for investment decisions.
            </p>
            <p>
              The proportion makes sense: not all traffic whose attribution is lost converts
              at the same rate as well-attributed traffic, so a 40% gap in traffic attribution
              translates into a slightly smaller — but still material — gap in booking
              attribution. Roughly one in three bookings happened without the team knowing
              with certainty which campaign, which channel or which marketing decision had
              generated it.
            </p>
            <p>
              When SealMetrics started attributing those bookings to the channel that had
              actually originated them, what changed wasn&apos;t just the volume reported per
              channel — it was the composition of the mix. Channels that looked
              &ldquo;expensive&rdquo; under the previous stack turned out to be profitable;
              campaigns that looked like stars were revealed as transient capture of demand
              generated by other channels.
            </p>
          </div>

          <blockquote
            className="mt-12 border-l-[3px] pl-6 py-1 italic"
            style={{ borderColor: "#2E5C8A", color: "#0E0E0C" }}
          >
            <p className="text-[22px] leading-[1.4] tracking-[-0.01em] font-medium">
              &ldquo;Today every player is happy. The data is neutral, there&apos;s no black
              box, and everyone has accepted these numbers as the reference.&rdquo;
            </p>
            <cite className="block mt-4 not-italic font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold">
              Toni Andújar · Digital &amp; Direct Sales Director · Palladium Hotel Group
            </cite>
          </blockquote>
        </div>
      </section>

      {/* DV360 case */}
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
              The DV360 case
            </span>
            <h2 className="h-section text-white mt-5">
              An efficient measurement model{" "}
              <em
                className="italic font-medium"
                style={{ color: "#E8B84B", fontStyle: "italic" }}
              >
                for the Display channel.
              </em>
            </h2>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-white/85">
              <p>
                One of the most intensive applications Palladium Hotel Group made of
                SealMetrics was on their Display &amp; Video 360 campaigns, Google&apos;s
                programmatic platform. The classic problem of any programmatic buy is
                always the same: part of the inventory converts better than the rest, and
                separating one from the other from inside the platform itself is non-trivial.
              </p>
              <p>
                Before SealMetrics, the underlying issue was measurement: with 40% of traffic
                unattributed, there was no way to build a robust model to evaluate Display.
                With the pixel and native measurement, the team saw aggregates but
                couldn&apos;t isolate which partners, placements or audiences were really
                generating qualified intent.
              </p>
              <p>
                SealMetrics let them implement{" "}
                <b className="text-white">an efficient, robust measurement model for the
                Display channel based on Cost-per-Search</b> — i.e. cost per availability
                search in their booking engine. With every visit correctly attributed to
                partner and placement of origin, the team could distinguish which parts of
                the inventory moved real availability searches and which only added volume.
              </p>
              <p>
                With that model in hand, Palladium Hotel Group optimised{" "}
                <b className="text-white">partners, placements, audiences and strategies</b>{" "}
                across Display, rebalancing investment toward the combination that performed
                best on the metric that mattered.
              </p>
            </div>
          </div>

          {/* Headline result card */}
          <div className="mt-12 max-w-[860px] mx-auto bg-white/5 border border-white/15 rounded-xl p-10">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand-soft font-semibold mb-4">
              Display result
            </div>
            <div
              className="font-semibold tracking-[-0.04em] text-white leading-[0.9] tabular-nums"
              style={{ fontSize: "clamp(64px, 9vw, 130px)" }}
            >
              +165
              <span
                className="italic font-medium"
                style={{ color: "#E8B84B", fontStyle: "italic" }}
              >
                %
              </span>
            </div>
            <div className="mt-5 text-[18px] leading-[1.5] text-white/85 max-w-[58ch]">
              improvement in Cost-per-Search on the Display channel, after applying the
              SealMetrics-based measurement model and rebalancing the mix of partners,
              placements, audiences and strategies. Same budget. Different measurement.
              Different decisions.
            </div>
          </div>

          {/* Decision flow */}
          <div className="mt-14 max-w-[860px] mx-auto">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/60 font-semibold mb-6">
              How they used the data — decision flow
            </div>
            <ol className="space-y-6">
              {[
                {
                  n: "01",
                  t: "Attribute 100%",
                  d: "SealMetrics correctly attributes inbound traffic from DV360 to partner, placement and audience — without depending on consent or the platform pixel.",
                },
                {
                  n: "02",
                  t: "Model on Cost-per-Search",
                  d: "With attribution resolved, build a model based on Cost-per-Search of availability in the booking engine: a metric closer to real intent than aggregated conversions.",
                },
                {
                  n: "03",
                  t: "Optimise the mix",
                  d: "Rebalance partners, placements, audiences and strategies toward the combination that performs best on Cost-per-Search. Cut the ones that bring volume without intent.",
                },
                {
                  n: "04",
                  t: "Scale with criteria",
                  d: "With a robust model in place, new partners and placements come in with the certainty they'll be evaluated with the same rigour. Scaling decisions stop being intuition and become data.",
                },
              ].map((step) => (
                <li
                  key={step.n}
                  className="grid grid-cols-[auto_1fr] gap-6 pb-6 border-b border-white/10 last:border-0"
                >
                  <div className="font-mono text-[12px] tracking-[0.08em] text-brand-soft font-semibold pt-1">
                    {step.n}
                  </div>
                  <div>
                    <div className="text-[18px] font-semibold text-white tracking-[-0.015em]">
                      {step.t}
                    </div>
                    <div className="text-[15px] leading-[1.6] text-white/75 mt-1.5">
                      {step.d}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why this case matters */}
      <section className="bg-warm-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <div className="bg-white border-l-[3px] border-warm-200 rounded-md p-8">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-semibold mb-3">
              Why this case matters
            </div>
            <h3
              className="font-semibold text-ink leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
            >
              The same principle applies to any programmatic buy.
            </h3>
            <p className="mt-5 text-[16px] leading-[1.65] text-ink-2">
              What Palladium Hotel Group did with DV360 can be replicated on any inventory-based
              buying platform: Display, Native, Connected TV, Audio. The pattern is identical:
              without complete attribution, no measurement model is possible. With complete
              attribution, Cost-per-Search — or any intent proxy close to the product —
              becomes the lever to rebalance the mix.
            </p>
          </div>
        </div>
      </section>

      {/* What this unlocks day-to-day */}
      <section className="bg-white border-t border-warm-100 py-20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <h2 className="h-section text-center mx-auto" style={{ maxWidth: "22ch" }}>
            What this unlocks <em>day-to-day.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              {
                t: "Goals aligned with agencies",
                d: "Conversion KPIs Palladium Hotel Group signs with external agencies are defined and measured against SealMetrics data. End of the &ldquo;which pixel is each side looking at&rdquo; debate.",
              },
              {
                t: "Coherence across departments",
                d: "Direct Channel, eCommerce and management see the same numbers. Four versions of the same campaign no longer circulate inside the organisation.",
              },
              {
                t: "Defensible investment decisions",
                d: "When a channel is cut or another is scaled, the decision rests on a number no stakeholder can dispute as biased.",
              },
              {
                t: "Fewer reconciliation meetings",
                d: "The time previously lost reconciling figures between tools is freed up for actual analysis and optimisation.",
              },
            ].map((b) => (
              <article
                key={b.t}
                className="bg-warm-50 border border-warm-100 rounded-xl p-7"
              >
                <div className="text-brand text-[18px] mb-2">→</div>
                <h4 className="text-[18px] font-semibold text-ink tracking-[-0.015em] mb-2">
                  {b.t}
                </h4>
                <p
                  className="text-[15px] leading-[1.6] text-ink-2"
                  dangerouslySetInnerHTML={{ __html: b.d }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson */}
      <section className="bg-warm-white border-t border-warm-100 py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">
            The lesson for other brands: precision and neutrality{" "}
            <em>are the feature.</em>
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.7] text-ink">
            <p>
              Good analytics tools are evaluated on two distinct criteria that often get
              merged in the same pitch: <b>data precision</b> (how close it is to reality)
              and <b>data neutrality</b> (how much it depends on who reports it). Cases like
              Palladium Hotel Group&apos;s show why both matter, and why both are required
              at once.
            </p>
            <p>
              Precision is the foundation. SealMetrics measures without modelling, without
              sampling, without estimating: it captures 100% of the events on the site and
              processes them as they are. In an era when GA4 reports statistical averages
              derived from data-driven models — estimates, not measurements — having the
              exact number is the first condition for defensible decisions.
            </p>
            <p>
              Neutrality is what turns that exact number into a common language. Ad
              platforms are also precise inside their own domain — Meta knows perfectly well
              which users saw its ads, Google knows which clicks its ads generated — but each
              one reports with the natural bias of its own business: claim as many
              conversions as possible. Precise data without neutrality is still partial.
              Neutral data without precision isn&apos;t useful. What unlocked the Palladium Hotel Group
              case is having both in the same source.
            </p>
            <p>
              Any organisation with more than one department touching the marketing P&amp;L
              and more than one external partner looking at the same numbers lives,
              silently, with the same problem. The solution isn&apos;t to give one of the
              parties more precise data. It&apos;s to have a source whose precision and
              neutrality every party accepts as legitimate before starting to argue what to
              do with the numbers.
            </p>
          </div>

          <p className="mt-12 italic text-[13px] leading-[1.6] text-ink-soft">
            Case study based on a conversation with Digital & Direct Sales Director, Digital &amp; Direct Sales
            Director at Palladium Hotel Group, in April 2026. All figures cited come from
            the Palladium Hotel Group team&apos;s own internal comparison between SealMetrics,
            the company&apos;s previous analytics stack and its booking engine. The
            percentages reflect the client&apos;s reading of their own operation, not a
            SealMetrics benchmark.
          </p>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={
          <>
            Run your own <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>neutrality test</em> in 30 minutes.
          </>
        }
        titleEs={
          <>
            Haz tu propia <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>prueba de neutralidad</em> en 30 minutos.
          </>
        }
        ledeEn="Book a walkthrough. We run your own site through SealMetrics, surface the attribution gap live, and show you what you've been missing."
        ledeEs="Reserva walkthrough. Pasamos tu web por SealMetrics, sacamos el gap de atribución en directo y te mostramos qué te estás perdiendo."
      />
    </>
  );
}
