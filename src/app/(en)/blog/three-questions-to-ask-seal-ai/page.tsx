import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  definedTermSchema,
  faqPageSchema,
  speakableWebPageSchema,
} from "@/lib/schema";
import { RelatedReading } from "@/components/ui/RelatedReading";

const SLUG = "three-questions-to-ask-seal-ai";
const URL = `/blog/${SLUG}`;
const TITLE = "Three Questions to Ask Your Analytics AI Today";
const DESCRIPTION =
  "Three worked examples for an AI analytics assistant: a period comparison, a drill-down with reasoning, and an engagement question. What to ask, what happens under the hood, and how to check the answer came from your data.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: "Three Questions to Ask Your Analytics AI Today",
    description:
      "What can you actually ask an AI analytics assistant? Three questions worth trying, and how to read the answers.",
    type: "article",
  },
  alternates: {
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "What can I ask an AI analytics assistant?",
    answer:
      "Anything you would otherwise build a report to answer: period comparisons, channel and source breakdowns, funnel drop-offs, landing page performance, campaign results and engagement metrics. The three best starting questions are a trend comparison over two periods, a drill-down into your top traffic sources with the reasoning behind the ranking, and an engagement question such as bounce rate versus the previous period.",
  },
  {
    question: "How do I know an AI analytics answer is accurate?",
    answer:
      "Ask it why. A grounded assistant fetches figures through tool calls against your data and can name the metric, the period and the breakdown behind every number it states. If it cannot show you that evidence, treat the figure as a claim rather than a measurement. As a one-off test, ask about a campaign you never ran — the right answer is that there is no data for it.",
  },
  {
    question: "How is bounce rate calculated in SealMetrics?",
    answer:
      "Bounce rate is entrances minus engaged entrances, divided by entrances, expressed as a percentage. An engaged session is one with more than one pageview. This is not the same as engagement rate, and it is not the same definition every analytics tool uses — so compare SealMetrics bounce rate against your own history rather than against a number from another platform.",
  },
  {
    question: "What is the best way to phrase a question to an analytics AI?",
    answer:
      "Name the period explicitly rather than relying on a default, ask for the reasoning as part of the question, and ask for the breakdown you want to see. 'Compare my entrances over the last 7 days to the previous 7, and show the split by channel' will produce a far more useful answer than 'how is traffic doing'. Specific questions constrain the assistant to specific evidence.",
  },
  {
    question: "Do I need to set anything up to use the AI assistant?",
    answer:
      "No. Seal AI is the default AI layer inside SealMetrics — there is no API key to paste and no AI vendor account to create. Inference runs in the EU only, nothing is retained by default and nothing is used for training. If you would rather use your own model, you can connect your own provider key instead, but you do not have to configure anything to start asking questions.",
  },
];

export default function ThreeQuestionsToAskSealAiPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-24",
          url: URL,
          category: "Product",
          author: {
            name: "Rafa Jiménez",
            url: "/authors/rafa-jimenez",
            jobTitle: "Founder, SealMetrics",
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", url: "/blog" },
          { name: "Three Questions to Ask Your Analytics AI", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "Bounce rate (SealMetrics definition)",
          description:
            "The share of entrances that did not become engaged sessions, calculated as entrances minus engaged entrances, divided by entrances. An engaged session is one with more than one pageview. Bounce rate is the inverse view of engagement, not the same figure as engagement rate, and definitions differ between analytics platforms — so it should be compared against your own history rather than across tools.",
          url: URL,
          related: [{ name: "Entrances", url: URL }],
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
          { label: "Blog", href: "/blog" },
          { label: "Three Questions to Ask Your Analytics AI" },
        ]}
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Product
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Three Questions to Ask Your Analytics AI Today
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">July 24, 2026</time>
              <span>4 min read</span>
              <span>
                By{" "}
                <Link
                  href="/authors/rafa-jimenez"
                  className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
                >
                  Rafa Jiménez
                </Link>
              </span>
            </div>
          </header>

          <p className="tldr mb-12 text-[1.15rem] leading-[1.7] text-text-secondary font-serif italic">
            The hardest part of an AI analytics assistant is the blank text box.
            Here are three questions worth typing into it right now — what each
            one makes the assistant do, and how to tell whether the answer came
            from your data or from thin air.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Start with a <strong>period comparison</strong>: it exercises the trend
                logic and shows you the tool calls behind the answer.
              </li>
              <li>
                Then a <strong>drill-down with reasoning</strong> — adding &quot;and why
                do you say that?&quot; forces the assistant to expose its evidence.
              </li>
              <li>
                Then an <strong>engagement question</strong>. Bounce rate in SealMetrics is
                entrances minus engaged entrances over entrances; an engaged session has
                more than one pageview.
              </li>
              <li>
                Always ask for the <em>why</em>. It is the fastest way to verify the
                numbers came from your data rather than from the model&apos;s guesswork.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Seal AI answers questions about your analytics in plain language.
              There is no query builder to learn and nothing to configure — but
              there is a skill to it, and the skill is mostly about asking
              precisely.
            </p>
            <p>
              These three questions are a good first session. Each one exercises
              a different part of the assistant, and each one gives you a way to
              check the answer.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              1. The period comparison
            </h2>
            <p className="pl-4 border-l-2 border-warm-200 italic text-text-secondary">
              &quot;Compare my entrances over the last 7 days to the previous
              7.&quot;
            </p>
            <p>
              <strong>What it does under the hood.</strong> The assistant resolves
              both windows against your site&apos;s timezone, then calls the
              overview tools twice — once for each period — and computes the
              delta from what comes back. It does not remember last week&apos;s
              number; it fetches it.
            </p>
            <p>
              <strong>How to read the answer.</strong> Check that the two windows
              are the ones you meant. Then look at the direction and the size of
              the change together: a small percentage swing on a low-traffic week
              is noise, and a good answer will say so rather than dramatise it.
              If the assistant offers a chart alongside the text, the chart and
              the prose should agree — if they do not, ask again.
            </p>
            <p>
              This is also the cheapest way to see the mechanics. A period
              comparison forces at least two separate data retrievals, so it is a
              clean demonstration that the assistant works by looking things up.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              2. The drill-down that asks for reasoning
            </h2>
            <p className="pl-4 border-l-2 border-warm-200 italic text-text-secondary">
              &quot;Which of my top 3 sources converts best, and why do you say
              that?&quot;
            </p>
            <p>
              <strong>What it does under the hood.</strong> This is a multi-step
              question. The assistant has to rank your traffic sources, pull
              conversions for each of them over the same period, divide one by
              the other, and then order the result. That is several tool calls
              chained together, with the output of one feeding the input of the
              next.
            </p>
            <p>
              <strong>Why the &quot;why&quot; matters.</strong> Those four extra
              words change what you get back. Without them you receive a
              conclusion. With them you receive a conclusion plus the figures it
              rests on — which source, how many entrances, how many conversions,
              over which window. That is the material you need to sanity-check
              the claim, and it is the single most useful habit to build when
              working with an analytics assistant.
            </p>
            <p>
              <strong>How to read the answer.</strong> Look at volumes before
              rates. A source with a spectacular conversion rate on a handful of
              visits is a curiosity, not a strategy. A good answer surfaces both;
              if it only gives you percentages, ask for the absolute numbers.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              3. The engagement question
            </h2>
            <p className="pl-4 border-l-2 border-warm-200 italic text-text-secondary">
              &quot;What&apos;s my bounce rate this month and how does it
              compare?&quot;
            </p>
            <p>
              <strong>What it does under the hood.</strong> The assistant
              retrieves entrances and engaged entrances for the current month and
              for the comparison window, and derives the rate from them.
            </p>
            <p>
              <strong>The definition you need to know.</strong> In SealMetrics,
              bounce rate is:
            </p>
            <p className="pl-4 border-l-2 border-warm-200 font-mono text-[0.9rem] text-text-secondary">
              (entrances − engaged entrances) ÷ entrances × 100
            </p>
            <p>
              An <strong>engaged</strong> session is one with more than one
              pageview. Two consequences follow. First, bounce rate here is the
              inverse view of engagement, not the same number as engagement rate
              — they answer different questions and should not be used
              interchangeably. Second, because analytics platforms define bouncing
              differently, this figure is not comparable with a bounce rate from
              another tool. Compare it against your own history, and it will tell
              you something real.
            </p>
            <p>
              <strong>How to read the answer.</strong> Movement matters more than
              level. A high bounce rate on a page whose whole job is to answer one
              question is fine. The same rate appearing suddenly on a category
              page is a signal.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              How to ask better questions
            </h2>
            <ul className="space-y-3 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Name the period explicitly.</strong> &quot;Last
                month&quot; is ambiguous — it can mean the previous calendar
                month or the last 30 days. Say which one. We know this one from
                experience: a benchmark question of ours phrased exactly that way
                accounted for every fact miss in an entire test run.
              </li>
              <li>
                <strong>Ask for the reasoning in the same breath.</strong> Append
                &quot;and why do you say that?&quot; or &quot;show me the numbers
                behind it&quot;.
              </li>
              <li>
                <strong>Ask for the breakdown you want.</strong> By channel, by
                device, by landing page, by campaign. Naming the dimension
                removes a guess.
              </li>
              <li>
                <strong>Ask one thing at a time.</strong> Three questions in one
                message usually produce one good answer and two thin ones.
              </li>
              <li>
                <strong>Follow up rather than restart.</strong> &quot;Now split
                that by device&quot; is a better second message than retyping the
                whole question.
              </li>
            </ul>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              One caution
            </h2>
            <p>
              Always ask for the <em>why</em>. Not because the assistant is
              untrustworthy, but because the evidence is the part you can check
              and the prose is not. Every figure the assistant states should be
              traceable to a metric, a period and a breakdown it just retrieved
              from your data. When it can show you that chain, you can act on the
              answer. When it cannot, you have an opinion in a confident voice.
            </p>
            <p>
              For a one-off test of the same principle, ask about a campaign you
              never ran. The right answer is that there is no data for it — which
              is exactly the behaviour we{" "}
              <Link
                href="/blog/grounding-analytics-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                test for with grounding traps
              </Link>
              .
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Where to try it
            </h2>
            <p>
              The assistant is already in your SealMetrics account — there is no
              key to paste and no AI vendor account to create, and inference runs
              in the EU only with nothing retained by default. Open a site, open
              the assistant, and start with the first question above.
            </p>
            <p>
              If you want the detail underneath it first, the{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Seal AI architecture documentation
              </Link>{" "}
              covers how it processes your data, and{" "}
              <Link
                href="/blog/meet-seal-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Meet Seal AI
              </Link>{" "}
              is the short introduction.
            </p>
          </div>

          <RelatedReading currentSlug={SLUG} />
        </div>
      </article>
    </>
  );
}
