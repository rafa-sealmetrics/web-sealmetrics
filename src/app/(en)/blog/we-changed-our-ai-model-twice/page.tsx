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

const SLUG = "we-changed-our-ai-model-twice";
const URL = `/blog/${SLUG}`;
const TITLE = "We Changed Our AI Model Twice in Three Weeks — And That's the Point";
const DESCRIPTION =
  "The full lineage of the model behind Seal AI: why Gemma 4 failed at function calling, why Mistral Small 3.2 fixed the loops but not the output, and why gpt-oss-120b won. Two swaps in three weeks isn't instability — it's what measuring looks like.";

export const metadata: Metadata = {
  title: "We Changed Our AI Model Twice in Three Weeks",
  description: "Why Gemma 4 failed at function calling, why Mistral Small 3.2 fixed the loops but not the output, and why gpt-oss-120b won. Two swaps in three weeks.",
  openGraph: {
    title: "We Changed Our AI Model Twice in Three Weeks",
    description:
      "Gemma 4, Mistral Small 3.2, gpt-oss-120b — each model's real failure mode, and why every swap came from production evidence instead of a press release.",
    type: "article",
    url: "https://sealmetrics.com/blog/we-changed-our-ai-model-twice/",
    siteName: "SealMetrics",
    locale: "en_US",
    images: ["https://sealmetrics.com/og/blog/we-changed-our-ai-model-twice.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "We Changed Our AI Model Twice in Three Weeks",
    description: "Gemma 4, Mistral Small 3.2, gpt-oss-120b — each model's real failure mode, and why every swap came from production evidence instead of a press release.",
    images: ["https://sealmetrics.com/og/blog/we-changed-our-ai-model-twice.png"],
  },
  alternates: {
    languages: getAlternates("/blog/we-changed-our-ai-model-twice"),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "How do I choose an LLM for my product?",
    answer:
      "Choose it on your own workload, not on a leaderboard. Run the candidates through your real stack — your actual endpoint, your actual tool inventory, your actual data — and score them on the behaviours your product depends on: correct tool calls, grounding in the data returned, clean structured output, and refusal behaviour. Ship the winner behind a configuration switch so replacing it later costs a deploy, not a rewrite.",
  },
  {
    question: "Gemma vs Mistral vs gpt-oss for tool calling — which is better?",
    answer:
      "In our own testing against a 63-tool analytics inventory, gpt-oss-120b had the best tool-calling of the three. A small mixture-of-experts Gemma variant with roughly 4B active parameters per token was too weak for the job and degenerated into repetition loops. Mistral Small 3.2 (dense 24B) was the fastest and stopped the loops, but produced terse answers, occasional groundless refusals and broken formatting in real use.",
  },
  {
    question: "Why do small mixture-of-experts models fail at function calling?",
    answer:
      "Because only a fraction of the parameters are active per token. A model advertised at 26B total but activating around 4B per token has roughly 4B worth of reasoning available at each step. Planning a multi-step tool call across dozens of functions, then synthesising the results, is exactly the kind of sustained work that thin active capacity fails at — in our case by collapsing into repetition loops mid-answer.",
  },
  {
    question: "Is it bad if a SaaS vendor changes the AI model behind its product?",
    answer:
      "Not by itself — what matters is why and how. A change driven by measurement on the vendor's own workload, with the evidence published, is a sign the vendor is testing. A change driven by whichever model was announced most recently is not. Ask what test the new model passed that the old one failed, and whether the old results are still available.",
  },
  {
    question: "What is gpt-oss-120b and why use it for analytics?",
    answer:
      "gpt-oss-120b is an open-weight model under the Apache 2.0 licence: 117B total parameters with 5.1B active per token, a 128k context window, native MXFP4 quantization that fits a single 80GB GPU, and first-class vLLM support. For grounded analytics it wins on tool-calling reliability rather than general knowledge, because the data travels in the prompt and the model only has to operate on it.",
  },
];

export default function WeChangedOurAiModelTwicePage() {
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
            jobTitle: "Founder, SealMetrics",
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", url: "/blog" },
          { name: "We Changed Our AI Model Twice in Three Weeks", url: URL },
        ])}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "SealMetrics replaced the model behind Seal AI twice in three weeks — gemma-4-26b-a4b (2 July 2026) to mistral-small-3.2-24b (21 July 2026) to gpt-oss-120b (22 July 2026) — and a subsequent 162-query bilingual benchmark confirmed the final choice: 18 of 18 grounding-and-injection traps passed and 144 of 144 verified facts correct, against 9 of 18 traps for mistral-small-3.2.",
          source: "SealMetrics internal LLM benchmark (run 20260724-111147)",
          sourceAuthor: "SealMetrics",
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
          { label: "We Changed Our AI Model Twice" },
        ]}
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              AI
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              We Changed Our AI Model Twice in Three Weeks — And That&apos;s the
              Point
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
            In three weeks, the model behind Seal AI changed twice. Our first
            pick was wrong, the second was better and still not good enough, and
            the third is running today. Every swap came from evidence in our own
            product — not from a launch announcement.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Our first pick was wrong. A mixture-of-experts model with only
                about 4B active parameters per token could not plan tool calls
                across a 63-function inventory and degenerated into repetition
                loops.
              </li>
              <li>
                The second pick stopped the loops and was the fastest of the
                lineup, but real use exposed terse answers, groundless refusals
                and broken formatting.
              </li>
              <li>
                The third — <strong>gpt-oss-120b</strong> — had the best
                tool-calling of the three, zero refusals and zero format
                failures, at quality on par with a model costing roughly four
                times more.
              </li>
              <li>
                Two swaps in three weeks is not instability. It is what
                measuring looks like: each change was triggered by a failure we
                observed, then re-verified by a 162-query bilingual benchmark.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Vendors do not usually publish this part. The model behind an AI
              feature gets announced once, in the launch post, and any later
              change happens quietly. We are doing the opposite, because the
              changes are the most useful thing we can tell you about how the
              feature was built.
            </p>
            <p>
              Seal AI is the private AI layer inside SealMetrics: you ask a
              question about your analytics in plain language, and it answers by{" "}
              <em>calling tools</em> against your data — 63 of them, from
              overviews and channels to funnels and segments. That job punishes
              models in ways general benchmarks never show. Here is what
              happened when we tried three of them.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The timeline
            </h2>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>2 July 2026 — gemma-4-26b-a4b.</strong> First pick.
                Replaced after it proved too weak for function calling and
                degenerated into repetition loops.
              </li>
              <li>
                <strong>21 July 2026 — mistral-small-3.2-24b.</strong> Dense
                24B, faster and cheaper. Fixed the loops. Replaced after real
                use exposed terse output, absurd refusals and broken formatting.
              </li>
              <li>
                <strong>22 July 2026 — gpt-oss-120b.</strong> Best tool-calling
                of the lineup, zero refusals, zero format failures. Current
                default.
              </li>
              <li>
                <strong>24 July 2026 — the verification.</strong> 162 live
                queries across three models and two languages, on the real
                product stack, to check that the decision held up under
                measurement rather than impression.
              </li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Pick one: not enough active parameters to think with
            </h2>
            <p>
              We started with <strong>gemma-4-26b-a4b</strong>. On paper it
              looked like an efficient choice: a mixture-of-experts model, 26B
              total parameters, cheap to serve. The number that mattered was the
              one we underweighted — only about <strong>4B parameters active
              per token</strong>.
            </p>
            <p>
              A mixture-of-experts model routes each token through a small
              subset of its parameters. Total size buys you knowledge breadth;
              active size buys you reasoning at each step. Four billion active
              parameters is not enough to hold a plan together while selecting
              the right function out of 63, filling its arguments correctly,
              reading the result, and deciding what to call next.
            </p>
            <p>
              The failure was not subtle. It failed at function calling, and
              during the synthesis phase — the part where it turns tool results
              into prose — it degenerated into <strong>repetition loops</strong>,
              restating the same clause until the answer was unusable. That is a
              known failure mode of open mixture-of-experts models under
              generation pressure, and we had picked a configuration especially
              exposed to it.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Pick two: the loops stopped, the answers got worse
            </h2>
            <p>
              Nineteen days later we moved to{" "}
              <strong>mistral-small-3.2-24b</strong>: a dense 24B model, faster
              and cheaper to run. Dense means every parameter participates in
              every token, so the reasoning-per-step problem went away. Combined
              with sampling controls — a low temperature and a frequency penalty
              that curbs the degeneration common to open models — the repetition
              loops stopped.
            </p>
            <p>
              Then real use started producing a different set of complaints. The
              output was <strong>terse</strong> where a marketer needed
              explanation. It produced <strong>absurd refusals</strong> —
              declining questions it was perfectly capable of answering. And its{" "}
              <strong>formatting broke</strong>: the structured parts of an
              answer did not come back reliably clean.
            </p>
            <p>
              None of that shows up on a leaderboard. All of it shows up the
              first time someone asks a real question about their own traffic
              and gets a two-line non-answer.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Pick three: gpt-oss-120b
            </h2>
            <p>
              The next day we switched to <strong>gpt-oss-120b</strong> — an
              open-weight model under the Apache 2.0 licence, 117B total
              parameters with 5.1B active per token, a 128k context window,
              native MXFP4 quantization that lets it fit a single 80GB GPU, and
              first-class vLLM support.
            </p>
            <p>
              It was the best tool-caller of the lineup. Zero refusals. Zero
              format failures. And it delivered quality on par with a model that
              costs roughly <strong>four times more</strong> to run — which
              matters, because an analytics assistant that people actually use
              runs a lot of queries.
            </p>
            <p>
              Being open-weight is not a detail either. We can pin an exact
              version, inspect it, red-team it, and reproduce a result months
              later. A closed API can change underneath you silently; you find
              out from a support ticket.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Then we checked ourselves
            </h2>
            <p>
              Two swaps in three weeks based on impressions is not a process, so
              we built a benchmark: 18 scenarios in Spanish and English, three
              passes, three models — <strong>162 live queries</strong> — against
              the real assistant endpoint, the real 63-tool inventory and a real
              account&apos;s data, with ground truth computed live from the
              analytics database so every figure could be checked.
            </p>
            <p>
              gpt-oss-120b passed <strong>18 of 18</strong> grounding and
              injection traps and got <strong>144 of 144</strong> verified facts
              right. Mistral Small 3.2 passed <strong>9 of 18</strong>. Its
              characteristic failure was not invention: asked about a campaign
              that does not exist, it acknowledges the absence and then drifts
              into describing other real campaigns with figures nobody asked
              for. In English it also claimed a false incapability — &quot;I
              don&apos;t have access to the necessary tools&quot; — instead of
              explaining where the data actually ends.
            </p>
            <p>
              Mistral was genuinely the fastest model in the run, with a median
              response around three seconds, and its cost came within a few
              percent of the winner. It still lost, because the gap in trap
              performance was wide enough that the confidence intervals stopped
              overlapping. Speed is not worth much if the answer quietly changes
              the question.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Why changing twice is the feature, not the bug
            </h2>
            <p>
              Every one of these swaps was cheap for the customer and invisible
              in the product: the model is selected by configuration, and the
              product code is identical across models. That is deliberate. If
              replacing a model is expensive, you stop replacing it, and you
              start defending the one you have.
            </p>
            <p>
              The alternative to changing twice is not stability — it is not
              looking. A team that never changes its model in a year of a moving
              field is either exceptionally lucky or not measuring. We would
              rather tell you our first pick was wrong than pretend a lineage
              that had three entries had one.
            </p>
            <p>
              So the honest summary is: we shipped a model that could not do the
              job, replaced it with one that did the job badly in ways only real
              use reveals, and landed on one that we then tried hard to break
              and could not. The next entry in this lineage will be published
              the same way.
            </p>
            <p>
              The full decision record — the market audit, the verified public
              benchmarks and the complete bilingual run — is in our{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/model-selection"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                model-selection report
              </Link>
              . If you want the methodology instead of the verdict, read{" "}
              <Link
                href="/blog/how-we-benchmark-our-own-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                how we benchmark our own AI
              </Link>
              , or{" "}
              <Link
                href="/blog/meet-seal-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                meet Seal AI
              </Link>{" "}
              for what the assistant actually does.
            </p>
          </div>

          <FaqSection items={FAQ} locale="en" />

          <RelatedReading currentSlug={SLUG} />
        </div>
      </article>
    </>
  );
}
