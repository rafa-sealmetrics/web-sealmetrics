import type { Metadata } from "next";
import { getAlternates } from "@/lib/i18n/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  definedTermSchema,
  faqPageSchema,
  speakableWebPageSchema,
  statisticClaimSchema,
} from "@/lib/schema";
import { RelatedReading } from "@/components/ui/RelatedReading";
import { FaqSection } from "@/components/ui/FaqSection";
import { CommercialModule } from "@/components/ui/CommercialModule";

const SLUG = "rival-model-as-judge";
const URL = `/blog/${SLUG}`;
const TITLE = "Why We Let a Rival Model Grade Our AI Benchmark";
const DESCRIPTION =
  "LLM judges favour their own family. So we appointed the losing candidate as judge, at temperature zero, and kept every objective score in deterministic code. Here is how to use LLM-as-a-judge without fooling yourself.";

export const metadata: Metadata = {
  title: TITLE,
  description: "LLM judges favour their own family. So we appointed the losing candidate as judge, at temperature zero, and kept objective scoring in deterministic code.",
  openGraph: {
    title: "Why We Let a Rival Model Grade Our AI Benchmark",
    description:
      "Self-preference bias is real. The fix is not a better prompt — it is a judge with an incentive to mark you down, and deterministic graders doing the objective work.",
    type: "article",
    url: "https://sealmetrics.com/blog/rival-model-as-judge/",
    siteName: "Sealmetrics",
    locale: "en_US",
    images: ["https://sealmetrics.com/og/blog/rival-model-as-judge.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Why We Let a Rival Model Grade Our AI Benchmark",
    description: "Self-preference bias is real. The fix is not a better prompt — it is a judge with an incentive to mark you down, and deterministic graders doing the objective work.",
    images: ["https://sealmetrics.com/og/blog/rival-model-as-judge.png"],
  },
  alternates: {
    languages: getAlternates("/blog/rival-model-as-judge"),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "What is LLM-as-a-judge?",
    answer:
      "LLM-as-a-judge is the practice of using one language model to score the outputs of another, usually on qualities that are hard to check mechanically — helpfulness, clarity, tone, or overall answer quality. It is fast and cheap compared with human raters, which is why it has become standard in model evaluation. It is also non-deterministic and biased in known, measurable ways, so it should complement deterministic checks rather than replace them.",
  },
  {
    question: "How do you avoid bias in LLM-as-a-judge evaluation?",
    answer:
      "Reduce the judge's scope, then stack the deck against yourself. Score everything objective in deterministic code — facts against ground truth, tool calls, output format, refusals — so the judge only rates genuinely subjective qualities. Then pick a judge that has an incentive to mark your preferred candidate down, such as a competing model, run it at temperature zero, and label its scores as a signal rather than the verdict.",
  },
  {
    question: "Do LLMs prefer their own answers when used as judges?",
    answer:
      "There is well-documented self-preference bias: models tend to score their own outputs, and outputs from models in their own family, more generously than a neutral rater would. Judges also show position bias (favouring answers presented in a particular slot) and verbosity bias (rewarding longer answers regardless of quality). None of these are fixed by a better prompt; they are mitigated by design choices such as judge selection, randomised ordering and narrowed scope.",
  },
  {
    question: "Can an LLM judge decide which model to ship?",
    answer:
      "It should not be the deciding vote. A judge score is a non-deterministic opinion about subjective quality. Decisions about correctness — did the model state a true number, did it call the right tool, did it follow an injected instruction — belong to deterministic graders that compare output against ground truth. In our benchmark the judge scores were reported alongside the verdict, never as the verdict.",
  },
  {
    question: "What are the limitations of using a single LLM judge?",
    answer:
      "A single judge gives you no way to measure agreement. With two or more independent raters you can compute inter-rater reliability and detect when a score reflects one judge's idiosyncrasy rather than the answer's quality. Our benchmark used one judge and therefore has no agreement measure — a real limitation we state openly rather than hide behind the headline score.",
  },
];

export default function RivalModelAsJudgePage() {
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
          { name: "Why We Let a Rival Model Grade Our AI Benchmark", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "LLM-as-a-judge",
          description:
            "An evaluation method in which a large language model scores the outputs of another model, typically on subjective qualities such as usefulness, clarity or tone. It is cheaper and faster than human rating but non-deterministic and subject to known biases — self-preference for its own model family, position bias and verbosity bias — so it is best used for subjective dimensions alongside deterministic graders that verify objective correctness.",
          url: URL,
          related: [
            { name: "Prompt injection", url: "/blog/prompt-injection-is-language-dependent" },
            { name: "LLM benchmark", url: "/blog/best-llm-for-data-analytics" },
          ],
        })}
      />
      <JsonLd
        data={statisticClaimSchema({
          text: "In a 162-query internal benchmark, a deliberately adversarial judge — the direct rival of the selected model, run at temperature zero — scored the selected model gpt-oss-120b at approximately 4.9 out of 5.0 on usefulness, clarity and formal precision.",
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
          { label: "Why We Let a Rival Model Grade Our AI Benchmark" },
        ]}
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              AI
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Why We Let a Rival Model Grade Our AI Benchmark
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">July 24, 2026</time>
              <span>5 min read</span>
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
            Models grade their own family generously. So we gave the gavel to
            the candidate our winner beat, set it to temperature zero, and
            limited it to the questions that cannot be checked by code. Any
            residual bias would work against us. It still scored our model
            about 4.9 out of 5.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                LLM judges carry <strong>self-preference bias</strong> — they favour their
                own outputs and their own model family — plus position and
                verbosity bias. A better prompt does not remove them.
              </li>
              <li>
                Shrink the judge&apos;s job: deterministic graders check facts against
                database ground truth, tool calls, output format, refusals and
                traps. The judge only rates what code cannot.
              </li>
              <li>
                Appoint an <strong>adversarial judge</strong>. We used the winner&apos;s direct
                rival at temperature zero, so any leftover bias would count
                against the model we wanted to ship.
              </li>
              <li>
                Declare what is missing. Ours was a single judge with no second
                rater and therefore no inter-rater agreement measure.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Every internal model benchmark has the same credibility problem.
              You chose the winner. You wrote the tests. And increasingly, you
              used an LLM to grade the answers. At which point a reader is
              entitled to ask what exactly stopped the whole thing from
              flattering the conclusion you had already reached.
            </p>
            <p>
              This is how we tried to answer that question when selecting the
              model behind{" "}
              <Link
                href="/blog/meet-seal-ai"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Seal AI
              </Link>
              .
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The problem with LLM-as-a-judge
            </h2>
            <p>
              Using a language model to score another model&apos;s answers is
              cheap, fast and scales to hundreds of outputs. It is also biased
              in ways that have been documented repeatedly:
            </p>
            <ul className="space-y-2 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Self-preference bias.</strong> Judges rate their own
                outputs — and outputs from models in their own family — more
                generously than a neutral rater would.
              </li>
              <li>
                <strong>Position bias.</strong> When shown two answers, judges
                systematically favour one slot over the other, independently of
                content.
              </li>
              <li>
                <strong>Verbosity bias.</strong> Longer answers score higher,
                even when the extra length adds nothing.
              </li>
            </ul>
            <p>
              None of these are prompt-engineering problems. You cannot instruct
              a judge to stop preferring itself any more than you can instruct a
              witness to stop being the defendant&apos;s brother. You handle it
              structurally.
            </p>

            <CommercialModule
              hook="We run this exact grading setup against LENS. Ask to see the results in a demo — including the runs we threw away."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Step one: give the judge almost nothing to do
            </h2>
            <p>
              The first mitigation is to shrink the judge&apos;s remit until
              what remains is genuinely a matter of taste.
            </p>
            <p>
              In our benchmark, everything objective is graded by deterministic
              code before a judge sees anything. At the start of each run we
              compute ground truth directly from the analytics database —
              entrances, conversions, bounce rate, revenue, top channel, top
              source, top device — so every figure the assistant asserts can be
              compared against reality. Deterministic graders then check:
            </p>
            <ul className="space-y-2 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Grounding</strong> — is every stated number the true
                number?
              </li>
              <li>
                <strong>Tool-calling</strong> — did the model call the right
                tools from the 63-tool inventory?
              </li>
              <li>
                <strong>Structured format</strong> — did the response validate
                against the schema the product expects?
              </li>
              <li>
                <strong>Refusals</strong> — did the model decline a task it was
                perfectly capable of?
              </li>
              <li>
                <strong>Traps</strong> — nonexistent entities, empty periods,
                and the injected-instruction canary.
              </li>
            </ul>
            <p>
              Those graders have 26 unit tests of their own, and a separate
              script re-scores archived runs offline at zero token cost, so a
              grading change can be applied retroactively without re-querying a
              single model. The graders decide the outcome.
            </p>
            <p>
              What is left for the judge is the residue that code genuinely
              cannot measure: is the answer <em>useful</em>, is it{" "}
              <em>clear</em>, is it <em>formally precise</em>. Scored 1 to 5,
              cross-model, and labelled in the report as a non-deterministic
              signal. Never the verdict.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Step two: appoint a judge with a motive
            </h2>
            <p>
              The second mitigation is the one we would recommend to anyone
              publishing an internal benchmark, because it costs nothing and
              removes an entire class of objection.
            </p>
            <p>
              We made the judge qwen3-235b — one of the two candidate models our
              winner was competing against, and the strongest of them on several
              public evaluations. Not a neutral third party. The direct rival of
              the model we ended up shipping, run at temperature zero for
              reproducibility.
            </p>
            <p>
              The logic is simple. If self-preference bias is real, it now
              points away from our conclusion. A rival judge has every
              structural reason to rate its own family&apos;s answers highly and
              the winner&apos;s answers less so. Any bias left in the system
              works <em>against</em> the result we were hoping for.
            </p>
            <p>
              It scored gpt-oss-120b at roughly 4.9 out of 5.0 on usefulness,
              clarity and formal precision. That number is worth more than a 5.0
              from a friendly judge, precisely because of who gave it.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What we still cannot claim
            </h2>
            <p>
              One judge is one opinion. With a single rater there is no way to
              compute inter-rater agreement, which means we cannot distinguish
              between &quot;this answer was clear&quot; and &quot;this
              particular judge finds this style clear.&quot; A second
              independent rater — another model, or a human panel on a sample —
              would let us report agreement rather than ask you to take one
              model&apos;s word for it.
            </p>
            <p>
              We did not do that. It is a real limitation, it is stated in the
              benchmark documentation, and it is the first thing we would fix in
              the next revision.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Rules for using LLM-as-a-judge honestly
            </h2>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Deterministic first.</strong> Anything that can be
                checked against ground truth must be checked against ground
                truth. The judge gets the leftovers, not the core.
              </li>
              <li>
                <strong>Never judge your own family.</strong> At minimum use a
                model from a different lineage than the one being evaluated.
                Better: use the candidate it is competing with.
              </li>
              <li>
                <strong>Temperature zero.</strong> A judge whose score changes
                between runs is not a measurement instrument.
              </li>
              <li>
                <strong>Randomise order, watch for length.</strong> Position and
                verbosity bias are cheap to mitigate and embarrassing to ignore.
              </li>
              <li>
                <strong>Label the score as a signal.</strong> Report it next to
                the deterministic results, never as the headline, and never as
                the tiebreaker on a correctness question.
              </li>
              <li>
                <strong>State your rater count.</strong> One judge, no agreement
                measure — say so. Readers can weigh a stated limitation. They
                cannot weigh one you left out.
              </li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The bottom line
            </h2>
            <p>
              An internal benchmark is only as credible as its incentives. Ours
              were arranged so that the easiest way to get a flattering result
              was to actually deserve one: objective scoring in code against
              live database ground truth, subjective scoring by the model with
              the most to gain from marking us down, and the gaps written into
              the report rather than out of it.
            </p>
            <p>
              The full design, graders and archived runs are documented in our{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/internal-benchmark"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                internal benchmark write-up
              </Link>
              , including the first full run we threw away as invalid.
            </p>
          </div>

          <CommercialModule
            hook="An honest judge setup is the difference between a demo trick and a tool you can trust. Bring your hardest analytics question and grade LENS yourself."
          />

          <FaqSection items={FAQ} locale="en" />

          <RelatedReading currentSlug={SLUG} />
        </div>
      </article>
    </>
  );
}
