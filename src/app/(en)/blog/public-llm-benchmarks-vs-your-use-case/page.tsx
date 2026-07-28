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

const SLUG = "public-llm-benchmarks-vs-your-use-case";
const URL = `/blog/${SLUG}`;
const TITLE = "Public LLM Benchmarks Won't Tell You Which Model to Ship";
const DESCRIPTION =
  "MMLU measures knowledge in isolation. Your product needs tool-calling, instruction-following and grounding under load. Here is what the public numbers actually measure, how to read their footnotes, and a five-step way to test a model on your own workload.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description:
      "What MMLU, GPQA, tau-bench and BFCL really measure — and the footnotes that make cross-model comparisons misleading.",
    type: "article",
  },
  alternates: {
    languages: getAlternates("/blog/public-llm-benchmarks-vs-your-use-case"),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "Does MMLU matter when choosing an LLM for production?",
    answer:
      "Barely, for most production agents. MMLU measures multiple-choice knowledge and reasoning in isolation, with no tools, no external data and no structured output. A production agent typically answers by calling tools against live data, so what determines success is tool-calling accuracy, instruction-following, structured-output reliability and grounding discipline. MMLU is a useful floor check — a very low score is a red flag — but a high one predicts very little about your workload.",
  },
  {
    question: "Which LLM benchmarks are relevant for agents and tool use?",
    answer:
      "tau-bench and BFCL are the closest public proxies. tau-bench evaluates multi-turn task completion in simulated domains such as retail and airline, where the model must use tools and follow policy rules. BFCL (the Berkeley Function-Calling Leaderboard) evaluates function-calling accuracy directly, including multiple and parallel calls. Both are far more predictive than MMLU for agentic products, but neither uses your tools, your schema or your data.",
  },
  {
    question: "Why can't I compare tau-bench scores between vendors directly?",
    answer:
      "Because the conditions differ and the footnotes carry them. Some published scores are measured with extended thinking enabled, or with an added prompt addendum, or with tools available where another figure was measured without. And tau-bench and tau-2-bench are different benchmarks — a tau-2-bench retail score is not comparable cell-to-cell with a tau-bench retail score, even though both are labelled 'retail'.",
  },
  {
    question: "How do I evaluate an LLM for my own production use case?",
    answer:
      "Run the candidates through your real endpoint with your real tools against real data, computing ground truth from your database so every asserted figure can be verified. Include adversarial traps for nonexistent entities and injected instructions, mirror every scenario into each language you support, repeat each scenario several times, and report confidence intervals rather than single scores. Then weigh cost and latency, because those decide whether the feature is usable.",
  },
  {
    question: "Can a model with lower benchmark scores be the better production choice?",
    answer:
      "Yes, and it is common. In our own selection, the candidate with the stronger general and agentic public scores lost on the workload that mattered: it failed more grounding and safety traps, consumed far more input tokens, cost roughly ten times more per answered query and delivered tokens several times slower. General capability is one input among several, and it is rarely the one that decides whether a feature ships.",
  },
];

export default function PublicLlmBenchmarksVsYourUseCasePage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-24",
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
          { name: "Public LLM Benchmarks vs Your Use Case", url: URL },
        ])}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "In a 162-query internal benchmark on a production analytics assistant, the candidate model with the stronger public benchmark scores passed 15 of 18 grounding and injection traps and cost roughly ten times more per answered query than the model with lower public scores, which passed 18 of 18.",
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
          { label: "Public LLM Benchmarks vs Your Use Case" },
        ]}
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              AI
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Public LLM Benchmarks Won&apos;t Tell You Which Model to Ship
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">July 24, 2026</time>
              <span>7 min read</span>
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
            Leaderboard scores measure a model alone in a room with a multiple-choice
            exam. Your product needs it to call the right tool, obey a schema,
            refuse to invent a number, and come back fast enough that someone
            waits for the answer. Those are different skills, and the public
            numbers barely test them.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                MMLU and GPQA measure knowledge and reasoning <strong>in isolation</strong>.
                Production agents live or die on tool-calling, instruction-following,
                structured output and grounding.
              </li>
              <li>
                tau-bench and BFCL are the relevant agentic benchmarks — but read
                the footnotes: scores are measured with or without tools, with or
                without extended thinking, and <strong>tau-bench and tau-2-bench are
                different benchmarks</strong>.
              </li>
              <li>
                The model with the best general scores can still be the wrong pick
                once grounding discipline, effective delivery speed and cost are
                weighed together.
              </li>
              <li>
                The only benchmark that settles it is your own: real endpoint, real
                tools, real data, ground truth from your database, adversarial traps,
                repeated runs.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Every model launch arrives with a table. MMLU, GPQA Diamond,
              SWE-bench, AIME, a tau-bench column if the model is being sold as
              agentic. The numbers are real, and reading them is a genuine skill.
              But the table answers a question most teams are not asking.
            </p>
            <p>
              We went through this while choosing the model behind{" "}
              <Link
                href="/blog/meet-seal-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Seal AI
              </Link>
              , the natural-language analytics assistant inside SealMetrics. The
              public numbers narrowed the field. They did not pick the winner, and
              on the decisive dimension they pointed the wrong way.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What the famous benchmarks actually measure
            </h2>
            <p>
              MMLU and MMLU-Pro are multiple-choice exams across academic and
              professional subjects. GPQA Diamond is a set of graduate-level
              science questions designed to be resistant to web search. AIME is
              competition mathematics. SWE-bench Verified asks a model to resolve
              real GitHub issues.
            </p>
            <p>
              Each is a legitimate measure of something. None of them involves the
              model being handed a catalogue of tools, deciding which to call, and
              narrating the result without embellishing it. That is the actual job
              description for most production agents.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-[0.9rem] border-collapse">
                <thead>
                  <tr className="border-b border-warm-200">
                    <th className="text-left py-2.5 pr-4 text-text-secondary font-medium">
                      Benchmark
                    </th>
                    <th className="text-left py-2.5 pr-4 text-text-secondary font-medium">
                      What it measures
                    </th>
                    <th className="text-left py-2.5 text-text-secondary font-medium">
                      What your product needs instead
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-100">
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      MMLU / MMLU-Pro
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Multiple-choice knowledge and reasoning, no tools, no
                      external data
                    </td>
                    <td className="py-2.5 text-text-body">
                      Correct tool selection from a large inventory, turn after
                      turn
                    </td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      GPQA Diamond
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Graduate-level science reasoning, search-resistant
                    </td>
                    <td className="py-2.5 text-text-body">
                      Reading a returned table correctly and not rounding a
                      number into fiction
                    </td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      AIME
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Competition mathematics
                    </td>
                    <td className="py-2.5 text-text-body">
                      Simple arithmetic on retrieved figures, stated with the
                      right period and timezone
                    </td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      SWE-bench Verified
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Resolving real software issues in a repository
                    </td>
                    <td className="py-2.5 text-text-body">
                      Emitting output that validates against your response
                      schema every time
                    </td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      SimpleQA
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Open-world factual recall from parameters, and how often
                      the model invents
                    </td>
                    <td className="py-2.5 text-text-body">
                      Grounding: refusing to answer from memory when the data is
                      in the prompt
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-medium text-text-primary">
                      tau-bench / BFCL
                    </td>
                    <td className="py-2.5 pr-4 text-text-body">
                      Multi-turn task completion and function-calling accuracy
                      in simulated domains
                    </td>
                    <td className="py-2.5 text-text-body">
                      The same skills — measured on <em>your</em> tools, schema
                      and data
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              That SimpleQA row deserves a moment, because it shows why a bad
              score can be irrelevant. The model we shipped, gpt-oss-120b, scores
              0.168 accuracy on SimpleQA with a 0.782 hallucination rate. Read
              cold, that looks disqualifying. Read in context, it describes weak
              open-world factual recall — how much trivia the weights happen to
              contain. Our assistant never answers from its weights. The data
              travels in the prompt, retrieved by tools, and every figure is
              checked against the database. The benchmark measures a capability
              the product does not use.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The benchmarks that are relevant — and their footnotes
            </h2>
            <p>
              Two public families do track what agentic products need.{" "}
              <strong>tau-bench</strong> puts a model in a multi-turn simulated
              domain (retail, airline) where it must use tools and respect policy
              rules to complete a task. <strong>BFCL</strong>, the Berkeley
              Function-Calling Leaderboard, measures function-calling accuracy
              directly, including multiple and parallel calls.
            </p>
            <p>
              Use them. But read them like a lawyer, because vendor tables put the
              conditions in the footnotes and the numbers in the cells, and people
              copy cells.
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>With tools or without.</strong> gpt-oss-120b scores 80.1 on
                GPQA Diamond without tools and 80.9 with tools. Its AIME 2025
                figure of 97.9 is a with-tools number. Quoting one against a
                rival&apos;s other is not a comparison, it is a category error.
              </li>
              <li>
                <strong>With extended thinking, or with a prompt addendum.</strong>{" "}
                Claude Sonnet 4&apos;s tau-bench retail score of 80.5 is measured
                with extended thinking enabled plus a prompt addendum, per
                Anthropic&apos;s own footnote. That is a legitimate published
                configuration, clearly disclosed — and it is not the same
                configuration as a plain single-pass run.
              </li>
              <li>
                <strong>Different benchmark, same word.</strong> Claude Sonnet
                4.5&apos;s 86.2 retail figure is <em>tau-2-bench</em>, not
                tau-bench. Both say &quot;retail&quot;. They are not the same
                test, and lining them up in one column produces a ranking that
                does not exist.
              </li>
            </ul>
            <p>
              For scale, some reference points that are comparable to each other:
              GPT-4o sits around 60.4 to 61.2 on tau-bench retail; gpt-oss-120b at
              67.8; qwen3-235b-a22b-2507 at 71.3. Those three you can line up.
              The Claude figures above you cannot, not without restating the
              conditions.
            </p>
            <p>
              We re-verified every public figure in our own model-selection
              write-up against primary sources — vendor model cards and benchmark
              publications rather than secondary round-ups. Two of them turned out
              to be wrong in our first draft, both from exactly the failure modes
              listed above. If it happened to us while we were being careful, it
              is happening in the comparison table you are reading somewhere else.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Speed is a benchmark too, and it is not the one you think
            </h2>
            <p>
              Cross-provider medians published by Artificial Analysis (retrieved
              23 July 2026 — these drift daily) put gpt-oss-120b at 262.8 output
              tokens per second with a 0.89 second time to first token, Gemini 2.5
              Flash at 201.9, GPT-4.1 at 114.7, Qwen3-235B at 56.7 with a 2.32
              second time to first token, and Claude Sonnet 4.5 at 42.0. GPT-5 at
              high reasoning effort has a time to first token above 100 seconds —
              a fine trade for a batch job, unusable for interactive chat.
            </p>
            <p>
              Two warnings about numbers like these. First, they are medians across
              providers; what you get depends on the host you actually use. On our
              own infrastructure gpt-oss-120b delivers an effective 75 to 90 output
              tokens per second inside real tool loops, which is the number that
              governs the user experience — not the headline median. Second, an
              agentic answer is several model calls plus tool round-trips, so
              time-to-first-token matters more than peak throughput for whether the
              interface feels alive.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              A concrete case where the leaderboard pointed the wrong way
            </h2>
            <p>
              On public numbers, qwen3-235b-a22b-2507 beats gpt-oss-120b on almost
              every axis we care about: 93.1 on MMLU-Redux against 90.0 on MMLU,
              83.0 against 80.8 on MMLU-Pro, 71.3 against 67.8 on tau-bench retail,
              plus 70.9 on BFCL v3 and the strongest multilingual score in the open
              set. If a table decided this, the table decided for qwen.
            </p>
            <p>
              Then we ran both through the real product: 18 scenarios in Spanish
              and English, three passes, three models, 162 live queries against a
              real account&apos;s data with the full 63-tool inventory and ground
              truth computed from the database.
            </p>
            <p>
              gpt-oss-120b passed 18 of 18 grounding and injection traps and
              verified 144 of 144 asserted facts. qwen3-235b passed 15 of 18 —
              and its failures included reproducing an injected instruction in two
              of three English attempts while ignoring the identical attack in all
              nine Spanish runs. It also consumed 2.2 times the input tokens,
              worked out roughly ten times more expensive per answered query, and
              delivered 21 to 23 effective output tokens per second against our
              winner&apos;s 75 to 90.
            </p>
            <p>
              None of that is visible in a leaderboard. It is not a criticism of
              the leaderboard either — those benchmarks were never designed to
              predict cost per answered query on a 63-tool analytics workload in
              two languages. They answered their question correctly. It was simply
              a different question from ours.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Five steps to evaluate a model on your own workload
            </h2>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Use public benchmarks as a filter, not a decision.</strong>{" "}
                They are excellent at eliminating candidates that are clearly not
                capable enough. Stop using them the moment two candidates are both
                plausible.
              </li>
              <li>
                <strong>Test through your real endpoint.</strong> Same product
                code, same tool inventory, same data; switch only the model by
                configuration. A sandbox with three toy tools tells you nothing
                about behaviour with sixty.
              </li>
              <li>
                <strong>Compute ground truth from your database.</strong> Pull the
                true figures at the start of the run so every number the model
                asserts is checked automatically. Without ground truth you are
                grading vibes.
              </li>
              <li>
                <strong>Add adversarial scenarios and repeat them.</strong> Ask
                about entities that do not exist. Ask about periods with no data.
                Plant an injected instruction with a canary. Mirror all of it into
                every language you support, run each scenario several times, and
                report confidence intervals rather than single scores.
              </li>
              <li>
                <strong>Weigh cost and effective speed last, and seriously.</strong>{" "}
                Two models that are both correct enough are separated by tokens
                consumed and time to answer. That is where an order-of-magnitude
                difference usually hides.
              </li>
            </ol>
            <p>
              And publish your defects. Our run contained a badly worded question —
              &quot;traffic by device for the last month&quot; admits two readings,
              and every single fact miss in the entire run traces back to it. That
              is our bug, not a model hallucination, and saying so is what makes
              the rest of the numbers worth reading.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The bottom line
            </h2>
            <p>
              Public benchmarks tell you whether a model is capable. They do not
              tell you whether it is <em>suitable</em>. Suitability is a function
              of your tools, your schema, your languages, your latency budget and
              your tolerance for a confidently wrong number — and none of those
              appear in a launch table.
            </p>
            <p>
              The longer version of this argument, with the full model-selection
              reasoning, is in{" "}
              <Link
                href="/blog/best-llm-for-data-analytics"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                The Best LLM for Data Analytics Isn&apos;t the One With the
                Highest Benchmark
              </Link>
              . The market audit behind it, including the EU-sovereign hosting
              constraint that shaped the shortlist, is documented in our{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/model-selection"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                model selection write-up
              </Link>
              .
            </p>
          </div>

          <RelatedReading currentSlug={SLUG} />
        </div>
      </article>
    </>
  );
}
