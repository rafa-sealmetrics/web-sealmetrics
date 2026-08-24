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
import { RelatedReading } from "@/components/ui/RelatedReading";
import { FaqSection } from "@/components/ui/FaqSection";
import { CommercialModule } from "@/components/ui/CommercialModule";

const SLUG = "our-ai-got-it-wrong-in-production";
const URL = `/blog/${SLUG}`;
const TITLE = "Our AI Got It Wrong in Production — And Our Own Test Caught It";
const DESCRIPTION =
  "A model returned a chart whose y-axis key was a list instead of a string. Strict schema validation rejected it and the entire chat response failed with a 500 — over a decorative chart. The bug, the two-layer fix, and three rules for anyone shipping LLM structured output.";

export const metadata: Metadata = {
  title: "Our AI Got It Wrong in Production. A Test Caught It",
  description: "A malformed chart key made an entire chat response fail with a 500. The bug, the two-layer fix, and three rules for shipping LLM structured output.",
  openGraph: {
    title: "Our AI Got It Wrong in Production",
    description:
      "One malformed chart field took down a whole answer. What we found in 1 of 162 benchmark queries, how we fixed it in two layers, and the rules it taught us about LLM structured output.",
    type: "article",
    url: "https://sealmetrics.com/blog/our-ai-got-it-wrong-in-production/",
    siteName: "Sealmetrics",
    locale: "en_US",
    images: ["https://sealmetrics.com/og/blog/our-ai-got-it-wrong-in-production.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Our AI Got It Wrong in Production",
    description: "One malformed chart field took down a whole answer. What we found in 1 of 162 benchmark queries, how we fixed it in two layers, and the rules it taught us about LLM structured output.",
    images: ["https://sealmetrics.com/og/blog/our-ai-got-it-wrong-in-production.png"],
  },
  alternates: {
    languages: getAlternates("/blog/our-ai-got-it-wrong-in-production"),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "Why do LLMs return malformed structured output?",
    answer:
      "Because generation is probabilistic and your schema is not. A model that has understood the request perfectly can still express it in a shape your contract does not allow — for example emitting a list where the schema expects a string, because the question implied two data series instead of one. It is usually not a comprehension failure; it is a serialisation choice that your validator was never told to accept.",
  },
  {
    question: "How do I validate structured output from an LLM?",
    answer:
      "Validate at the parse boundary, and decide per field what a failure means. Coerce malformations you can recover unambiguously, drop the elements you cannot and log a warning, and reject the whole response only when the part that failed is the part the user actually asked for. Treat every field as untrusted input, exactly as you would treat a request body from the public internet.",
  },
  {
    question: "Should a malformed chart make an API request fail?",
    answer:
      "No. If the text answer is already generated and correct, a decorative element that fails validation should degrade — not take the response with it. Our bug did exactly the wrong thing: a chart whose axis key had the wrong type caused the whole chat response to return HTTP 500, so the user lost a perfectly good answer over a visual they did not ask for.",
  },
  {
    question: "How do you catch LLM bugs before users report them?",
    answer:
      "Run your own product as a test subject at volume. We found this one as a single transport error in 162 live benchmark queries against the real production endpoint — a rate low enough that manual testing would likely have missed it and high enough that users would eventually have hit it. Benchmarks that drive the real stack, not a mock, double as integration tests.",
  },
  {
    question: "What is a good fallback when LLM output fails schema validation?",
    answer:
      "A two-layer one. First, a coercion layer at the parse boundary that repairs known-recoverable shapes so the element survives. Second, an airbag that drops any element still invalid after coercion, logs a warning, and lets the rest of the response through. Then add a regression test for every malformation you have actually seen, because the same shape will come back.",
  },
];

export default function OurAiGotItWrongInProductionPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-24",
          dateModified: "2026-07-28",
          url: URL,
          category: "AI",
          author: {
            name: "Rafa Jiménez",
            url: "/authors/rafa-jimenez",
            jobTitle: "Founder, Sealmetrics",
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", url: "/blog" },
          { name: "Our AI Got It Wrong in Production", url: URL },
        ])}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "Sealmetrics detected a production structured-output failure as 1 transport error in 162 live benchmark queries: a model emitted a chart whose y-axis key was a list of two series instead of a string, strict schema validation rejected it, and the entire chat response returned HTTP 500, discarding an already-generated text answer.",
          source: "Sealmetrics internal LLM benchmark (run 20260724-111147)",
          sourceAuthor: "Sealmetrics",
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
          { label: "Blog", href: "/blog" },
          { label: "Our AI Got It Wrong in Production" },
        ]}
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              AI
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Our AI Got It Wrong in Production — And Our Own Test Caught It
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">July 24, 2026</time>
              <span>6 min read</span>
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
            Someone asked for a comparison. The model answered correctly, then
            attached a chart whose y-axis key was a list instead of a string.
            Schema validation rejected the chart, and the entire response failed
            with a 500 — a good answer thrown away because of a decoration.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                A comparison question made the model emit two data series in a
                field the schema declared as a single string. Strict validation
                rejected it and the whole chat response returned HTTP 500.
              </li>
              <li>
                We found it as <strong>1 transport error in 162</strong> live
                benchmark queries — rare enough to survive manual testing, common
                enough to reach users.
              </li>
              <li>
                The fix has two layers: coerce recoverable malformations at the
                parse boundary, and an airbag that drops any still-invalid
                element with a warning rather than failing the response.
              </li>
              <li>
                The general rule: treat every field of LLM structured output as
                untrusted input, and never let a cosmetic element decide whether
                the user gets an answer.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              We build{" "}
              <Link
                href="/blog/meet-seal-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Seal AI
              </Link>{" "}
              on the assumption that we will be the ones to find its bugs. This
              is one we found, in the product as shipped, and it is a better
              teacher than any success story we could publish.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What happened
            </h2>
            <p>
              The assistant answers analytics questions in plain language, and
              when a chart helps, it returns one alongside the text — a
              structured object describing what to plot, validated against a
              strict schema before it reaches the browser.
            </p>
            <p>
              Asked for a <em>comparison</em>, the model did something entirely
              reasonable from its point of view: it produced a chart with{" "}
              <strong>two series</strong>. To express that, it set the y-axis key
              to a <strong>list</strong> of two field names. Our schema said that
              key is a string.
            </p>
            <p>
              Validation rejected the object. The rejection propagated. The whole
              chat response returned <strong>HTTP 500</strong>.
            </p>
            <p>
              That is the part worth sitting with. The text answer had already
              been generated. It was correct, grounded in real data, and useful.
              The user got none of it — because a decorative element failed a
              type check.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              How we found it
            </h2>
            <p>
              It surfaced as a single transport error in the{" "}
              <strong>162 live queries</strong> of our internal benchmark, which
              drives the real production endpoint rather than a mock. One error
              in 162 is an awkward frequency: too rare for anyone to reproduce it
              by hand during a review, too common to stay theoretical once a
              product answers thousands of questions a week.
            </p>
            <p>
              We were running that benchmark to compare models. We got a
              production defect out of it instead — which is the strongest
              argument we know for{" "}
              <Link
                href="/blog/how-we-benchmark-our-own-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                benchmarking against your real stack
              </Link>{" "}
              instead of a simulation. A mock would have validated our schema
              against our own assumptions and passed.
            </p>

            <CommercialModule
              hook="We caught this because grounded answers are checkable against the database. Ask in a demo how LENS output is validated — and what happens when it fails."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Why this class of bug is inevitable
            </h2>
            <p>
              It is tempting to file this as &quot;the model got it wrong&quot;.
              It did not, really. It understood the request — a comparison needs
              two series — and expressed that understanding in a shape our
              contract had not anticipated.
            </p>
            <p>
              That is the permanent condition of LLM structured output: a
              probabilistic generator on one side, a strict schema on the other.
              Prompting reduces the mismatch rate. It never reaches zero,
              especially at the edges — comparisons, multi-metric requests,
              unusual periods, other languages. If your architecture assumes the
              rate is zero, you have not built a feature, you have built a
              coin-flip with good odds.
            </p>
            <p>
              Our mistake was not the schema being strict. Strict is correct.
              Our mistake was giving a strict validator the authority to fail an
              entire response over an optional element.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The two-layer fix
            </h2>
            <p>
              We did not patch the prompt and call it done. Prompt tweaks are not
              a boundary; they are a hope. We changed the boundary itself.
            </p>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Coercion at the parse boundary.</strong> When the y-axis
                key arrives as a list, we take its first series and continue.
                The malformation is unambiguously recoverable, so the chart
                survives — degraded to one series rather than lost entirely,
                which is a far better outcome than nothing.
              </li>
              <li>
                <strong>An airbag behind it.</strong> Any chart still invalid
                after coercion is dropped, with a warning logged, and the
                response continues without it. One bad chart can no longer take
                down an answer. Ever.
              </li>
            </ol>
            <p>
              We then applied the same shape of hardening to the{" "}
              <strong>conversation-history load path</strong>, where a single
              malformed stored element could equally have poisoned the load of an
              entire past conversation. And we added regression tests for the
              exact malformation, because the same shape will come back — models
              change, and this one was a sensible thing to emit.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Three rules for anyone shipping LLM structured output
            </h2>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Treat every field as untrusted input.</strong> Model
                output is not your own data structure round-tripping. It is a
                payload from a system you do not control, and it deserves the
                same scepticism as a request body arriving from the public
                internet — type checks, bounds, and an explicit decision about
                what happens when it is wrong.
              </li>
              <li>
                <strong>Grade elements by how much the user needs them.</strong>{" "}
                Decide, per element, whether a validation failure is fatal. The
                answer the user asked for is fatal. A chart, a suggested
                follow-up, an icon, a highlight — none of those are. Failing the
                whole response over an optional part converts a cosmetic glitch
                into an outage.
              </li>
              <li>
                <strong>Recover what you can, drop what you cannot, log
                everything.</strong> Coerce the malformations with an obvious
                correct reading, drop the rest with a warning so you keep
                visibility, and write a regression test for every shape you have
                actually observed in the wild. Silent recovery with no logging is
                how you stop learning from your own model.
              </li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Why we are telling you
            </h2>
            <p>
              Because &quot;our AI works&quot; is not a claim anybody should
              accept on trust, including from us. What is checkable is whether a
              vendor is looking — whether they run their own product hard enough
              to find the one-in-a-hundred failure, and whether they say what
              they found.
            </p>
            <p>
              This one cost a user-visible response in a test. Fixed, it cost a
              coercion function, an airbag, and a handful of regression tests.
              Undetected, it would have been an intermittent 500 that nobody
              could reproduce, on a feature people were starting to rely on.
            </p>
            <p>
              The benchmark that caught it, including its methodology and the
              runs we discarded, is published in our{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/internal-benchmark"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                internal benchmark report
              </Link>
              .
            </p>
          </div>

          <CommercialModule
            hook="A vendor that publishes its own defects is easier to audit. Bring your hardest reliability questions to a demo — including about this incident."
          />

          <FaqSection items={FAQ} locale="en" />

          <RelatedReading currentSlug={SLUG} />
        </div>
      </article>
    </>
  );
}
