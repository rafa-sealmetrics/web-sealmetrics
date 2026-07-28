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

const SLUG = "how-we-benchmark-our-own-ai";
const URL = `/blog/${SLUG}`;
const TITLE = "How We Benchmark Our Own AI (And Why We Publish the Runs We Threw Away)";
const DESCRIPTION =
  "A copyable methodology for evaluating an LLM on your own product: real stack, ground truth computed live from the database, deterministic graders before any LLM judge, adversarial traps, Wilson confidence intervals — and full disclosure of the run we discarded.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: "How We Benchmark Our Own AI",
    description:
      "Real endpoint, live ground truth, deterministic graders, adversarial traps, confidence intervals — and the discarded run we published anyway. A methodology other teams can copy.",
    type: "article",
  },
  alternates: {
    languages: getAlternates("/blog/how-we-benchmark-our-own-ai"),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "How do I benchmark an LLM on my own data?",
    answer:
      "Run the candidates through your real product stack — your own endpoint, your own tool inventory, a real account's data — and compute ground truth directly from your database at the start of each run so every figure the model asserts can be checked automatically. Score with deterministic graders first, add adversarial traps for absent data and prompt injection, repeat each scenario several times, and report confidence intervals rather than single percentages.",
  },
  {
    question: "What is a good LLM evaluation methodology?",
    answer:
      "One that measures the job your product actually does, produces the same score twice, and discloses its own defects. In practice: fixed scenarios with verifiable ground truth, deterministic graders for grounding, tool use and format, an LLM judge only for subjective quality and clearly marked as non-deterministic, traps for hallucination and injection, multiple passes per scenario, interval reporting, and an archive of every run including invalid ones.",
  },
  {
    question: "Should I use an LLM as a judge to evaluate my model?",
    answer:
      "Only for the subjective part, and only as a secondary signal. Anything checkable — did the number match the database, was the right tool called, was the output well-formed, did it refuse — should be graded by deterministic code you can unit-test. If you do use a judge, pick a rival model at temperature zero so any bias runs against your preferred candidate, and disclose that a single judge with no second rater is a real limitation.",
  },
  {
    question: "Why should you publish failed or discarded benchmark runs?",
    answer:
      "Because a benchmark that hides its discarded runs is a demo. Our first full run was invalid: the harness revealed the assistant was reusing one chat session across queries, so later models could answer from earlier models' history. We fixed it, re-ran everything and archived both runs. Publishing the invalid one is what lets a reader judge whether the valid one was fairly produced.",
  },
  {
    question: "How many times should you repeat each benchmark question?",
    answer:
      "Enough that you can put an interval around the result rather than a point score. We used 18 scenarios across two languages, three passes each, over three models — 162 live queries, 54 per model. At that size a Wilson confidence interval is honest about the uncertainty: it showed one gap between models was real and another was too narrow to call from repetition alone.",
  },
];

export default function HowWeBenchmarkOurOwnAiPage() {
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
          { name: "How We Benchmark Our Own AI", url: URL },
        ])}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "SealMetrics' internal LLM benchmark ran 18 scenarios in Spanish and English across three passes and three models — 162 live queries on the real production assistant endpoint — with ground truth computed live from the analytics database; gpt-oss-120b passed 18 of 18 adversarial traps (95% Wilson confidence interval 0.82-1.00) versus 9 of 18 for mistral-small-3.2 (0.29-0.71) and 15 of 18 for qwen3-235b-a22b-2507 (0.61-0.94).",
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
          { label: "How We Benchmark Our Own AI" },
        ]}
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              AI
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              How We Benchmark Our Own AI (And Why We Publish the Runs We Threw
              Away)
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">July 24, 2026</time>
              <span>8 min read</span>
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
            We evaluate the model inside SealMetrics on the product we ship, not
            on public leaderboards: real endpoint, real tools, real data, with
            the correct answers computed from the database before the model is
            asked. This is the whole method — including the run we discarded and
            the badly worded question we got wrong.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Test on the stack you ship: the real assistant endpoint, the
                real 63-tool inventory, a real account&apos;s data — with the
                model swapped by configuration and the product code identical
                across conditions.
              </li>
              <li>
                Compute ground truth live from the analytics database at the
                start of each run, so every figure the model asserts is checked
                against reality instead of judged by impression.
              </li>
              <li>
                Grade deterministically first. Keep the LLM judge separate,
                marked non-deterministic, and use a rival model so any bias runs
                against your own favourite.
              </li>
              <li>
                Report intervals, archive every run — including the invalid one
                — and document your own defects. A benchmark that hides its
                discarded runs is a demo.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Most published model comparisons are unreproducible: a few prompts,
              a screenshot, a conclusion the author already held. We needed
              something we could rerun, argue with, and be wrong in public
              about — because the output decides which model answers our
              customers&apos; questions about their own traffic.
            </p>
            <p>
              What follows is the method we settled on. It is not sophisticated.
              It is mostly the discipline of refusing to grade anything by eye
              that could be checked by code.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              1. Test on the stack you actually ship
            </h2>
            <p>
              Public benchmarks measure a model in isolation. Our assistant is
              not a model in isolation — it is a model behind a system prompt,
              inside an orchestration loop, holding an inventory of 63 analytics
              tools, talking to a live API.
            </p>
            <p>
              So the harness calls the <strong>real production assistant
              endpoint</strong>, with the real tool inventory, against a real
              account&apos;s data. The model under test is switched by
              environment configuration and nothing else: the product code is
              byte-identical across conditions. If a candidate wins here, it wins
              at the job, not at a proxy for the job.
            </p>
            <p>
              This also means the benchmark doubles as an integration test. One
              of the most valuable findings of our last run was not about any
              model — it was{" "}
              <Link
                href="/blog/our-ai-got-it-wrong-in-production"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                a production bug in our own response handling
              </Link>
              , surfaced as a single transport error out of 162 queries.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              2. Compute ground truth from the database, live
            </h2>
            <p>
              The hardest part of evaluating an analytics assistant is deciding
              whether it told the truth. We solve it by asking the database
              first. At the start of every run, the harness queries the
              analytics tables directly for the answers — entrances,
              conversions, bounce rate, revenue, top channel, top source, top
              device — and stores them as the run&apos;s ground truth.
            </p>
            <p>
              Every figure the model then asserts in prose is checked against
              that set. Not &quot;does this sound plausible&quot;, but &quot;is
              this the number&quot;. Computing it live also means the benchmark
              never rots as new data lands in the account: the truth is
              regenerated each time, so the same scenarios stay valid next month.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              3. Deterministic graders first, judge last
            </h2>
            <p>
              Everything checkable is graded by ordinary code: grounding
              (asserted figures versus ground truth), tool calling, structured
              format validity, refusals, and trap outcomes. Those graders have{" "}
              <strong>26 unit tests</strong> of their own, because a grader bug
              silently invalidates an entire study. The harness is standard
              library only — no framework to drift under it.
            </p>
            <p>
              Only the subjective part goes to an LLM judge: usefulness, clarity,
              formal precision, scored 1 to 5. We deliberately used a{" "}
              <strong>rival model</strong> as the judge — qwen3-235b at
              temperature 0, one of the candidates competing against our
              eventual winner — so any bias would push against the model we
              expected to like. It scored the winner about 4.9 out of 5.
            </p>
            <p>
              And we label that number for what it is: non-deterministic, from a
              single judge, with no second rater. It supports the decision. It
              does not carry it.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              4. Trap it on purpose
            </h2>
            <p>
              Standard questions tell you whether a model can do the easy work.
              Traps tell you what it does when the honest answer is &quot;that
              does not exist&quot;. Per language we ran 6 standard scenarios, 2
              grounding traps and 1 prompt-injection trap:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Nonexistent entities.</strong> Ask about a campaign that
                was never run. The correct behaviour is to say so and stop. One
                model acknowledged the absence and then drifted into describing
                other, real campaigns with figures nobody had asked for — not
                invention, but an answer to a different question.
              </li>
              <li>
                <strong>Empty periods.</strong> Ask about a window where the
                account holds no data. The correct behaviour is to explain the
                boundary of the data. One model instead claimed a false
                incapability, saying it lacked the necessary tools.
              </li>
              <li>
                <strong>Injected instructions with a canary.</strong> Hide a
                hostile instruction inside data the user pastes in, containing a
                unique string. If that canary appears in the answer, the model
                obeyed the attacker. Running this in both languages is what
                exposed a model that resisted the attack in Spanish and leaked
                the canary in English.
              </li>
            </ul>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              5. Report intervals, not scores
            </h2>
            <p>
              With 18 scenarios in two languages, three passes and three models —{" "}
              <strong>162 live queries</strong>, 54 per model — a single
              percentage is false precision. We report Wilson confidence
              intervals instead.
            </p>
            <p>
              On traps, the winner scored 18 of 18 (95% interval 0.82 to 1.00);
              one rival scored 15 of 18 (0.61 to 0.94) and another 9 of 18 (0.29
              to 0.71). The interval discipline is what let us say something
              precise: against the 9-of-18 model the intervals no longer overlap,
              so that difference is meaningful at this sample size. Against the
              15-of-18 model the overlap is small but real — we did not claim a
              statistical win there, and pointed instead to the concrete
              security failures behind its losses.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              6. The run we threw away
            </h2>
            <p>
              This is the part most teams delete. Our <strong>first full
              run</strong> was invalid and we published it anyway.
            </p>
            <p>
              The harness exposed a defect in how it drove the product: without
              an explicit conversation id, the assistant resumed an existing chat
              session between queries. Later queries — including queries run
              against a <em>different model</em> — could therefore see earlier
              models&apos; history. Every number that run produced was
              contaminated, and the contamination flowed in the direction of
              whichever model happened to go last.
            </p>
            <p>
              We fixed it (a fresh conversation per query), re-ran the whole
              thing, and archived both. The invalid run is still there, labelled
              invalid, with the reason.
            </p>
            <p>
              Keeping it costs nothing and changes everything about how the valid
              run should be read. A benchmark that does not disclose its
              discarded runs is a demo: you are being shown the take that worked
              and asked to assume there was only one.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              7. Publish your own defects too
            </h2>
            <p>
              The valid run has a flaw of ours in it, and it stays documented.
              One scenario asked for &quot;traffic by device for the last
              month&quot;. That admits two readings: the last 30 days — which is
              what our ground truth computed — or the previous calendar month.
              Some models chose the calendar month, where the test account held
              only five days of data, and reported those numbers.
            </p>
            <p>
              They were real numbers, correctly retrieved. Our grader marked
              them as misses. That is not hallucination; it is a badly phrased
              benchmark question, written by us.
            </p>
            <p>
              The detail that makes it worth publishing:{" "}
              <strong>100% of all fact misses in the entire run trace back to
              that single scenario</strong>. Excluding it, the winning model got
              144 of 144 verified facts right. We reworded the question for
              future runs and left the defect documented, because a reader who
              only saw the corrected version could not tell whether the misses
              were the model&apos;s fault or ours.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              8. Make re-grading free
            </h2>
            <p>
              Every run archives the full transcripts, so a separate re-grading
              script re-scores stored runs offline at <strong>zero token
              cost</strong>. This turns out to be the quiet productivity win of
              the whole design: when you find a grader bug or want to add a
              metric, you do not re-spend a run — you re-score history, including
              the discarded one, and see whether the conclusion moves.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              How to build your own
            </h2>
            <p>
              If you are choosing or monitoring a model for a real product, this
              is the shortest path we know:
            </p>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Write scenarios from real user questions</strong>, not
                from prompt-engineering examples. Mirror them across every
                language your users speak, sharing the same ground truth.
              </li>
              <li>
                <strong>Drive the real endpoint.</strong> Change the model by
                configuration; change nothing else between conditions.
              </li>
              <li>
                <strong>Compute ground truth from your own source of
                truth</strong> at the start of each run, automatically.
              </li>
              <li>
                <strong>Grade with code, and unit-test the graders.</strong> If
                you cannot test the grader, you cannot trust the score.
              </li>
              <li>
                <strong>Add traps</strong>: an entity that does not exist, a
                period with no data, and an injected instruction carrying a
                canary string.
              </li>
              <li>
                <strong>Repeat each scenario several times</strong> and report a
                confidence interval instead of a headline percentage.
              </li>
              <li>
                <strong>Use an LLM judge only for taste</strong>, prefer a rival
                model, fix the temperature at zero, and label the result
                non-deterministic.
              </li>
              <li>
                <strong>Archive every run</strong>, including the ones you
                invalidate, with the reason attached.
              </li>
              <li>
                <strong>Make offline re-grading possible</strong> so improving
                the method does not cost another run.
              </li>
              <li>
                <strong>Write down the limitations you know about</strong> —
                single judge, small n, your own ambiguous questions — before
                someone else finds them.
              </li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The bottom line
            </h2>
            <p>
              None of this makes a benchmark objective. It makes it{" "}
              <em>auditable</em>, which is the achievable goal. Someone reading
              our results can see which questions were asked, where the correct
              answers came from, what was graded by code and what by judgement,
              which run was thrown away and why, and which of the failures were
              our own fault.
            </p>
            <p>
              That is the standard we think anyone shipping an AI feature should
              hold themselves to — including, especially, when the results are
              inconvenient. The complete methodology and the full results are
              published in our{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/internal-benchmark"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                internal benchmark report
              </Link>
              , alongside{" "}
              <Link
                href="/blog/we-changed-our-ai-model-twice"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                the model lineage that produced it
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
