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

const SLUG = "open-weights-exit-strategy";
const URL = `/blog/${SLUG}`;
const TITLE = "Open Weights as an Exit Strategy: Never Be Hostage to an AI Vendor";
const DESCRIPTION =
  "With a closed API you rent behaviour you cannot inspect, that can change under you silently, at prices set unilaterally. Open weights are not an ideology — they are the ability to leave, and a privacy guarantee you cannot walk away from is not a guarantee.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: "Open Weights as an Exit Strategy",
    description:
      "Open-weight vs proprietary LLMs for business: pinning versions, avoiding vendor lock-in, and keeping the option to move hosts without changing the product.",
    type: "article",
  },
  alternates: {
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "What is the difference between an open-weight and a proprietary LLM?",
    answer:
      "With an open-weight model the trained parameters are published under a licence, so you can download them, inspect them, run them on hardware you choose, and pin an exact version forever. With a proprietary model you send requests to an API and receive outputs — the parameters stay with the vendor, who controls versioning, pricing, availability and the jurisdiction the inference runs in. The first is something you hold; the second is something you rent.",
  },
  {
    question: "How do I avoid AI vendor lock-in?",
    answer:
      "Choose a model whose weights you could take with you. Pin the exact version rather than a floating alias, keep an evaluation suite you can re-run against any host, and confirm the same model is served by more than one provider before you commit. If a swap means the same weights on a different host, customers see no behaviour change. If it means a different model, you are rewriting prompts, re-tuning tools and re-testing everything.",
  },
  {
    question: "Can a closed AI API change its behaviour without warning?",
    answer:
      "Yes. A version deprecation or a quiet retune on the vendor's side can shift your product's output overnight, and you have no way to reproduce the previous behaviour because you never held it. This is not hypothetical risk management — it is the ordinary lifecycle of a hosted model. Pinning an open-weight version removes the class of problem entirely, because the artefact does not change unless you change it.",
  },
  {
    question: "Are open-weight models good enough for production tool calling?",
    answer:
      "For most analytics workloads, yes — but be honest about the ceiling. The strongest proprietary models still lead on the hardest multi-turn agentic tool use, and closing that gap by self-hosting brings real operational cost: GPUs, capacity planning, upgrades and on-call. The relevant question is not which model wins in the abstract, but whether the open one clears the bar for your workload with room to spare.",
  },
  {
    question: "Does the EU AI Act favour open-weight models?",
    answer:
      "It gives models released under free and open-source licences partial exemptions from some general-purpose-AI provider obligations, and open weights materially improve auditability: the exact version can be pinned, inspected, red-teamed and reproduced. For a company deploying an AI feature, that reproducibility is the practical benefit — you can evidence what your system did, rather than describing an API whose internals you never saw.",
  },
];

export default function OpenWeightsExitStrategyPage() {
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
          { name: "Open Weights as an Exit Strategy", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "Open-weight model",
          description:
            "A machine-learning model whose trained parameters are published under a licence that permits download, inspection, modification and self-hosting. Unlike a proprietary model accessed only through a vendor API, an open-weight model can be pinned to an exact version, red-teamed independently, reproduced later, and served by multiple infrastructure providers — which turns model choice into a portable asset rather than a rented dependency.",
          url: URL,
          related: [{ name: "AI vendor lock-in", url: URL }],
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
        items={[{ label: "Blog", href: "/blog" }, { label: "Open Weights as an Exit Strategy" }]}
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              AI
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Open Weights as an Exit Strategy: Never Be Hostage to an AI Vendor
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
            Open weights are not a philosophical position. They are the ability
            to leave — to pin a version, inspect it, reproduce it, and move it
            somewhere else without your customers noticing. A privacy guarantee
            you cannot walk away from is not a guarantee.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                A closed API means renting behaviour you cannot inspect, that can be
                retuned or deprecated under you, priced unilaterally, in a jurisdiction
                you did not choose.
              </li>
              <li>
                Open weights under a permissive licence let you pin the exact version,
                red-team it, reproduce results, change host, or self-host — the exit is
                real, which is what makes the commitment credible.
              </li>
              <li>
                The model inside Seal AI is Apache 2.0 and fits a single 80GB GPU, and the
                same weights are served by several EU-sovereign providers — so switching
                host means zero behaviour migration for customers.
              </li>
              <li>
                Be fair about the trade-off: the very best proprietary models still lead on
                the hardest multi-turn agentic tool use, and self-hosting carries real
                operational cost.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Most arguments about open-weight models are arguments about
              values. This one is about leverage.
            </p>
            <p>
              When you build a product feature on a closed model API, you are
              not buying software. You are renting a behaviour. The behaviour
              lives on someone else&apos;s hardware, is defined by parameters you
              will never see, can be changed without your involvement, is priced
              by a party with no obligation to consult you, and runs under
              whichever legal system that party happens to belong to.
            </p>
            <p>
              None of that is malicious. It is just the shape of the deal. The
              question worth asking before you sign it is simple: if this
              arrangement stops working for me, what exactly can I do about it?
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Four things you cannot control on a closed API
            </h2>
            <p>
              <strong>You cannot pin behaviour.</strong> Model endpoints get
              deprecated, and models get quietly retuned between versions. Either
              event can shift your product&apos;s output overnight — different
              phrasing, different tool-calling habits, different refusal
              boundaries — and you cannot roll back, because you never held the
              artefact. Your regression suite goes red and your only remedy is a
              support ticket.
            </p>
            <p>
              <strong>You cannot inspect it.</strong> You can test the API&apos;s
              outputs, which is worth doing, but you cannot examine the weights,
              run your own red-team against the model itself, or reproduce a
              result from six months ago to explain to a customer what happened.
              For anything you may have to evidence later, that gap matters.
            </p>
            <p>
              <strong>You cannot set the price.</strong> Inference pricing is set
              by one side. If a per-token price doubles, a feature that was
              comfortably profitable may not be, and rebuilding on another
              vendor&apos;s model is not a weekend of work.
            </p>
            <p>
              <strong>You cannot pick the jurisdiction.</strong> An EU region is
              a residency choice, not a sovereignty one. If the company operating
              the inference answers to US law, so does the data it holds — a
              distinction we unpack in{" "}
              <Link
                href="/blog/residency-is-not-sovereignty"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Residency Is Not Sovereignty
              </Link>
              .
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What open weights actually buy you
            </h2>
            <p>
              An open-weight model published under a permissive licence changes
              the position on all four points, and it does so for an unglamorous
              reason: the artefact is a file, and you can have a copy.
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-text-tertiary">
              <li>
                <strong>Pin the exact version.</strong> The model your product
                shipped with is the model your product keeps, until you decide
                otherwise. Behaviour drift becomes a change you make, not a
                change that happens to you.
              </li>
              <li>
                <strong>Inspect and red-team it.</strong> You can attack it,
                probe it, and characterise its failure modes yourself, rather
                than inferring them from an endpoint.
              </li>
              <li>
                <strong>Reproduce results.</strong> Same weights, same sampling
                settings, same inputs — an evaluation you ran a year ago can be
                run again. That is the difference between an audit trail and an
                anecdote.
              </li>
              <li>
                <strong>Change host, or self-host.</strong> If a provider&apos;s
                terms, price, latency or governance stop suiting you, the model
                moves with you.
              </li>
            </ul>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Our own setup, concretely
            </h2>
            <p>
              Seal AI runs on <strong>gpt-oss-120b</strong>: open weights under
              the <strong>Apache 2.0</strong> licence, 117B total parameters with
              5.1B active per token in a mixture-of-experts arrangement, a 128k
              context window, and native MXFP4 quantization that lets it fit on a
              <strong> single 80GB GPU</strong> (H100 or MI300X) with first-class
              vLLM support.
            </p>
            <p>
              That last detail is the one that does the strategic work. A model
              that needs a rack is a model only a few operators can serve. A
              model that fits one accelerator is a model many can — and in
              practice, many do. Besides our current host, Scaleway&apos;s
              Generative APIs in Paris, the same weights are served by other
              EU-sovereign providers: <strong>OVHcloud AI Endpoints</strong>,{" "}
              <strong>IONOS AI Model Hub</strong> with processing confined to
              Germany, and <strong>Nebius</strong> in Finland and France — though
              Nebius is US-listed, so it is a case for evaluating governance and
              not only geography.
            </p>
            <p>
              The practical consequence for customers: a host change is a
              deployment detail. Same weights, same behaviour, same answers.
              There is no prompt migration, no re-tuning of the tool inventory,
              no &quot;the assistant sounds different this week&quot;. Compare
              that with swapping one closed vendor&apos;s model for
              another&apos;s, which is a rewrite wearing a configuration
              change&apos;s clothing.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              This is what makes the privacy claim survivable
            </h2>
            <p>
              Seal AI&apos;s privacy position is specific: inference in Paris
              only, on a French company with no US parent, zero data retention by
              default, no training on customer data, and — because nothing
              crosses a border — GDPR Chapter V is not triggered at all. No
              Standard Contractual Clauses, no Transfer Impact Assessment, no
              dependence on the EU-US Data Privacy Framework surviving its next
              court date.
            </p>
            <p>
              A commitment like that is only as durable as your ability to keep
              it when circumstances change. If the model were closed and tied to
              one vendor, the promise would last exactly as long as that
              vendor&apos;s terms did. Because the weights are open and portable,
              the promise is ours to keep: if a host&apos;s posture changed
              tomorrow, we could move the same model to another EU-sovereign
              provider without asking customers to accept a different product.
            </p>
            <p>
              Open weights also sit well with the EU AI Act. Models released
              under free and open-source licences receive partial exemptions from
              some general-purpose-AI provider obligations, and — more usefully
              day to day — open weights materially improve auditability. The
              exact version can be pinned, inspected, red-teamed and reproduced.
              A closed API can change under you silently.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The honest trade-off
            </h2>
            <p>
              Open weights are not free of cost, and they are not the top of
              every leaderboard.
            </p>
            <p>
              On the hardest multi-turn agentic tool use, the strongest
              proprietary models are still ahead. On tau-bench retail,
              gpt-oss-120b scores 67.8 against a GPT-4o reference of 60.4-61.2 —
              respectable — while Claude Sonnet 4 reports 80.5, measured with
              extended thinking plus a prompt addendum per Anthropic&apos;s own
              footnote. Claude Sonnet 4.5 reports 86.2 on tau-2-bench, which is a
              different benchmark and not directly comparable. Those caveats
              matter, but so does the headline: for long agentic chains, the
              frontier closed models lead.
            </p>
            <p>
              And the exit option has a price of its own. Self-hosting means
              GPUs, capacity planning, upgrade cycles and someone on call. Most
              teams should not do it — but they should be able to, and should
              know what it would take. An escape hatch you have never measured is
              a decoration.
            </p>
            <p>
              What tipped it for us is that the gap does not bind on our
              workload. An analytics assistant answers grounded questions over
              your data with a well-defined tool inventory; it is not running
              twenty-step autonomous agent chains. Within the EU-sovereign
              serverless universe, gpt-oss-120b is the strongest model available,
              and the best open tool-callers outside it have no EU-sovereign
              managed offering at all — using them cleanly would mean
              self-hosting models in the 355B-to-1T parameter range.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The question to ask your vendor
            </h2>
            <p>
              Not &quot;is your model open source?&quot; That invites a
              philosophical answer. Ask the operational one:{" "}
              <em>if I needed to leave, what would it cost me, and what would my
              customers notice?</em>
            </p>
            <p>
              If the answer is &quot;a redeployment, and nothing&quot;, the
              relationship is a choice. If it is &quot;a rewrite, and
              everything&quot;, it is a dependency — and dependencies get priced
              accordingly, sooner or later.
            </p>
            <p>
              The reasoning behind our own model choice is documented in the{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/model-selection"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Seal AI model selection audit
              </Link>
              , and the architecture around it in the{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                private AI architecture documentation
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
