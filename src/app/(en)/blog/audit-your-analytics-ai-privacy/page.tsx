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
} from "@/lib/schema";
import { RelatedReading } from "@/components/ui/RelatedReading";
import { FaqSection } from "@/components/ui/FaqSection";
import { CommercialModule } from "@/components/ui/CommercialModule";

const SLUG = "audit-your-analytics-ai-privacy";
const URL = `/blog/${SLUG}`;
const TITLE =
  "How to Audit Whether Your Analytics AI Is Really Private (5-Question Checklist)";
const DESCRIPTION =
  "Five questions any marketer or DPO can put to an AI analytics vendor — who owns the inference, where it runs, what is retained, what trains, and whether you can leave. With the answers that should reassure you and the ones that should not.";

export const metadata: Metadata = {
  title: "Audit Your Analytics AI: 5 Questions on Real Privacy",
  description: "Five questions to put to any AI analytics vendor: who owns the inference, where it runs, what is retained, what trains, and whether you can leave.",
  openGraph: {
    title: "Audit Your Analytics AI: A 5-Question Privacy Checklist",
    description:
      "A vendor-neutral checklist for testing whether an AI analytics feature is genuinely private — ownership, location, retention, training and exit.",
    type: "article",
    url: "https://sealmetrics.com/blog/audit-your-analytics-ai-privacy/",
    siteName: "Sealmetrics",
    locale: "en_US",
    images: ["https://sealmetrics.com/og/blog/audit-your-analytics-ai-privacy.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Audit Your Analytics AI: A 5-Question Privacy Checklist",
    description: "A vendor-neutral checklist for testing whether an AI analytics feature is genuinely private — ownership, location, retention, training and exit.",
    images: ["https://sealmetrics.com/og/blog/audit-your-analytics-ai-privacy.png"],
  },
  alternates: {
    languages: getAlternates("/blog/audit-your-analytics-ai-privacy"),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "How do I know if my analytics AI is GDPR compliant?",
    answer:
      "Start with what the AI actually receives. If your analytics collects no IPs, cookies or visitor identifiers, there is no personal data in the prompt to protect. Then check the processing chain: who owns the company running the model, whether inference is confined to the EU, what is retained and for how long, and whether anything is used for training. A vendor that cannot answer those in writing cannot support your accountability obligations under Article 5(2).",
  },
  {
    question: "How can I check if an AI tool trains on my data?",
    answer:
      "Ask for it in the contract, not the marketing page. The commitment should appear in the data processing agreement or subprocessor list as an explicit statement that customer inputs and outputs are not used for model training or improvement, with no opt-out required from you. Phrases like “we may use aggregated or de-identified data to improve our services” are a yes, not a no.",
  },
  {
    question: "Does an EU datacenter make an AI vendor GDPR compliant?",
    answer:
      "No. A datacenter location tells you where data rests, not who can compel access to it. The US CLOUD Act obligates providers subject to US jurisdiction to disclose data in their possession or control regardless of where it is stored, and it follows the corporate parent rather than the server. An EU region operated by a US-owned company is residency without sovereignty.",
  },
  {
    question: "What does zero data retention actually mean for an AI API?",
    answer:
      "It should mean prompts and responses are not written to disk after the request completes. Read the exceptions carefully — most providers keep a narrow one, for example holding a failing request for a short period to investigate a severe service error. A documented, bounded exception is normal engineering; an undocumented retention window is not.",
  },
  {
    question: "What questions should I ask an AI vendor before signing?",
    answer:
      "Five: who owns the entity running inference, where inference runs exclusively, what is retained and for how long, whether anything trains a model, and whether the model is portable if you leave. The first answer is the gating one — if there is a US parent, the remaining answers do not remove the exposure. The last one tells you whether your compliance file can be reproduced next year.",
  },
];

export default function AuditYourAnalyticsAiPrivacyPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-24",
          dateModified: "2026-07-28",
          url: URL,
          category: "Privacy",
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
          { name: "Audit Your Analytics AI", url: URL },
        ])}
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
        items={[{ label: "Blog", href: "/blog" }, { label: "Audit Your Analytics AI" }]}
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Privacy
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              How to Audit Whether Your Analytics AI Is Really Private (5-Question Checklist)
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
            Most AI privacy pages are written to survive a skim. Five questions
            break that: who owns the inference, where it runs, what is kept,
            what trains, and whether you can leave. Ask them in that order and
            the marketing falls away in about ten minutes.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Question one is the gate: if the company running inference has a
                US parent, the US CLOUD Act follows the parent, not the
                datacenter — and the other four answers cannot undo that.
              </li>
              <li>
                &quot;We can process in the EU&quot; is not &quot;we only process
                in the EU.&quot; Ask for exclusivity, and ask whether a global
                endpoint can route elsewhere.
              </li>
              <li>
                Retention and training commitments belong in the data processing
                agreement and the subprocessor list, not on a marketing page. A
                bounded, documented exception is fine; a vague one is not.
              </li>
              <li>
                Portability is a privacy question too: an open-weight model can be
                pinned, inspected and reproduced, while a closed API can change
                under you without notice.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              Every analytics tool now has an AI feature, and every AI feature
              now has a privacy page. The pages read well. They are also, in the
              main, written to be reassuring rather than falsifiable — long on
              &quot;enterprise-grade&quot; and short on who exactly runs the
              model and what happens to the request.
            </p>
            <p>
              You do not need a legal background to test that. You need five
              questions asked in the right order, because the order matters: the
              first one can invalidate the answers to all the others. Send them
              by email, ask for written answers, and keep the replies. That
              exchange is also, conveniently, the evidence your accountability
              file needs.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Question 1: Who owns the company running the inference?
            </h2>
            <p>
              Not who sells you the product — who operates the machine the model
              runs on. These are often different companies, and the second one is
              the one that matters.
            </p>
            <p>
              The reason is jurisdictional. The US{" "}
              <strong>CLOUD Act</strong> (2018) obligates any provider subject to
              US jurisdiction to disclose data in its possession or control
              regardless of where in the world that data is stored. FISA Section
              702 adds a separate foreign-intelligence collection regime aimed at
              non-US persons. Both follow the corporate parent. Neither is
              affected by which region you selected in a dropdown.
            </p>
            <p>
              So if the answer names a US-headquartered group, you are in
              residency territory, not sovereignty territory — and you should
              stop and evaluate that exposure before spending time on the rest of
              the checklist. We wrote this distinction up in more detail in{" "}
              <Link
                href="/blog/residency-is-not-sovereignty"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Residency Is Not Sovereignty
              </Link>
              .
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Question 2: Where does inference run, exclusively?
            </h2>
            <p>
              The load-bearing word is <em>exclusively</em>. Plenty of providers
              can process in Europe. Fewer will commit that they process nowhere
              else, and the gap between those two statements is where incidents
              live.
            </p>
            <p>
              Two follow-ups are worth asking. First, does the endpoint you are
              actually calling pin a region, or is it a global endpoint that may
              route by capacity? Google&apos;s Vertex AI, for instance, supports
              EU region pinning, but its global endpoint gives no control over
              where processing happens — same vendor, two very different answers.
              Second, are failover and overflow capacity in the same region? A
              region-pinned steady state with an unpinned failover is not
              EU-only.
            </p>
            <p>
              It is also worth knowing the shape of the market. US providers have
              built real EU options: OpenAI offers EU data residency configured
              per project with in-region zero retention, Azure OpenAI offers an
              EU Data Boundary deployment type. Anthropic&apos;s first-party API
              has no EU residency option at all — EU processing goes through AWS
              Bedrock EU regions or Google Vertex AI EU instead. These are
              genuine improvements over sending data to Virginia. None of them
              changes the answer to question one.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Question 3: What is retained, and for how long?
            </h2>
            <p>
              Ask separately about three things, because vendors often answer one
              and let you assume the rest: the prompt content, the model output,
              and the metadata around the call.
            </p>
            <p>
              A credible zero-retention answer names its exceptions. A provider
              that says &quot;we retain nothing, ever, under any
              circumstance&quot; is either not operating the infrastructure or
              not describing it accurately — real systems keep something when
              something breaks. What you want is the boundary written down: which
              condition triggers retention, what is kept, for how long, and who
              can read it.
            </p>
            <p>
              Metadata is the part people forget. Counting tokens for billing is
              legitimate and necessary. Storing the text of every question your
              team asked, indefinitely, in order to &quot;improve the
              experience&quot; is a different thing wearing the same word.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Question 4: Does anything train a model?
            </h2>
            <p>
              This has a clean version and a soft version, and you want the clean
              one. Clean: customer inputs and outputs are never used to train,
              fine-tune or improve any model, with no action required from you.
              Soft: &quot;we do not train on your data&quot; followed, several
              paragraphs later, by a carve-out for aggregated, de-identified or
              telemetry data.
            </p>
            <p>
              Check where the commitment lives. If it is only in a blog post or a
              FAQ, it is a statement of current intent. If it is in the data
              processing agreement, it is an obligation. And if the commitment
              depends on you having toggled something in an admin panel, then
              your privacy posture depends on configuration — which means it
              depends on whoever configures it next.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Question 5: Can you leave — and can you reproduce what happened?
            </h2>
            <p>
              This is the question almost nobody asks, and it is the one that
              decides whether your compliance file still means anything in twelve
              months.
            </p>
            <p>
              A closed API model can change under you silently. The version you
              assessed, red-teamed and documented in your risk assessment may not
              be the version answering your queries next quarter, and you will
              have no way to prove otherwise. An open-weight model under a
              permissive licence can be pinned to an exact version, inspected,
              red-teamed and reproduced — and if the host disappoints you, the
              same weights are available from other hosts, so switching is an
              infrastructure decision rather than a rebuild.
            </p>
            <p>
              Portability is usually filed under procurement. It belongs in the
              privacy review, because reproducibility is what turns a claim into
              evidence.
            </p>

            <CommercialModule
              hook="Ask us the same five questions: gpt-oss-120b on Scaleway Paris, EU-only inference, no training on your data, BYOK if you want the keys."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What a good answer sounds like, and what an evasive one sounds like
            </h2>
            <p>
              You will rarely get a flat refusal. You will get an answer that
              addresses a nearby question instead. This table is a rough decoder.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-[0.85rem]">
                <thead>
                  <tr className="border-b border-warm-200">
                    <th className="text-left py-3 pr-6 text-text-tertiary font-medium">
                      Question
                    </th>
                    <th className="text-left py-3 px-6 text-text-secondary font-medium">
                      Evasive answer
                    </th>
                    <th className="text-left py-3 pl-6 text-green-muted font-medium">
                      Answer you want
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      q: "1. Who owns the inference?",
                      bad: "“We use enterprise-grade providers with strong privacy commitments.”",
                      good: "Named legal entity, country of incorporation and ultimate parent, in the subprocessor list.",
                    },
                    {
                      q: "2. Where does it run?",
                      bad: "“Your data can be processed in the EU.”",
                      good: "“Inference runs only in <named country>. No global endpoint, no cross-region failover.”",
                    },
                    {
                      q: "3. What is retained?",
                      bad: "“We retain data only as long as necessary.”",
                      good: "Zero retention by default, with each exception named, time-boxed and documented.",
                    },
                    {
                      q: "4. Does anything train?",
                      bad: "“We do not train on your data” plus a carve-out for aggregated or de-identified data.",
                      good: "No training on inputs or outputs, stated in the DPA, with no opt-out required from you.",
                    },
                    {
                      q: "5. Can you leave?",
                      bad: "“The model is proprietary and continuously improved.”",
                      good: "Named open-weight model and licence, pinned version, available from more than one host.",
                    },
                  ].map((row) => (
                    <tr
                      key={row.q}
                      className="border-b border-warm-100 last:border-0"
                    >
                      <td className="py-3 pr-6 text-text-body">{row.q}</td>
                      <td className="py-3 px-6 text-text-secondary">{row.bad}</td>
                      <td className="py-3 pl-6 text-text-primary font-medium">
                        {row.good}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              One general rule: an answer that is easy to check is worth more
              than an answer that is impressive. &quot;Scaleway SAS, Paris,
              France&quot; can be verified in an afternoon. &quot;Leading
              European infrastructure&quot; cannot be verified at all.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              A worked example: running the checklist on ourselves
            </h2>
            <p>
              A checklist you never apply to yourself is a sales document. So
              here are our own five answers, for{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Seal AI
              </Link>
              , the private AI layer inside Sealmetrics.
            </p>
            <p>
              <strong>1. Ownership.</strong> Inference runs on Scaleway
              Generative APIs. Scaleway is a French company whose parent is the
              Iliad group, with no US ownership, and it states explicitly that
              its AI services are not subject to extraterritorial laws such as
              the American CLOUD Act. It is listed as an Article 28 processor in
              our subprocessor list — Scaleway SAS, Paris, France, purpose LLM
              inference.
            </p>
            <p>
              <strong>2. Location.</strong> Paris, France, only. Because the data
              never leaves the EU and the processor has no US parent, GDPR
              Chapter V — the international-transfer chapter — is not triggered
              at all. No Standard Contractual Clauses, no Transfer Impact
              Assessment, no dependence on the EU-US Data Privacy Framework
              surviving its next hearing.
            </p>
            <p>
              <strong>3. Retention.</strong> Scaleway applies Zero Data Retention
              by default, with one documented exception: on a severe service
              error, the failing request may be kept for up to two weeks for
              root-cause analysis. On our side, the metering layer persists only
              token counters — organisation, model, input and output token counts
              — for quota and billing. Prompt and response content is never
              persisted by it. Transport is TLS 1.2 or above with certificate
              verification.
            </p>
            <p>
              <strong>4. Training.</strong> Nothing. No training on customer data
              at the host, and the model is a static set of published weights, so
              there is no mechanism by which your questions could influence it.
            </p>
            <p>
              <strong>5. Exit.</strong> The model is{" "}
              <code className="font-mono text-[0.9em]">gpt-oss-120b</code>, open
              weights under the Apache 2.0 licence. The exact version can be
              pinned, inspected and reproduced, and the same weights are served
              by other EU-sovereign hosts — OVHcloud AI Endpoints, IONOS AI Model
              Hub with processing confined to Germany, Nebius in Finland and
              France, though Nebius is US-listed, so governance deserves as much
              attention there as geography. We chose our host; we are not locked
              to it.
            </p>
            <p>
              Two honest footnotes, since a checklist that only produces
              flattering answers is not a checklist. Scaleway holds ISO/IEC
              27001:2022 and HDS, granted in July 2024; its SecNumCloud
              qualification with ANSSI has been in progress since January 2025
              and is <em>not</em> granted — we say &quot;in qualification&quot;
              and nothing stronger. And customers who prefer a different model can
              configure their own OpenAI, Anthropic, Gemini or DeepSeek key, in
              which case their prompts go to that provider under that
              provider&apos;s terms. That is a deliberate, per-customer choice,
              kept clearly separate from Seal AI — which stays the default
              precisely so that privacy does not depend on configuration.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What to do with the answers
            </h2>
            <p>
              Score them the way a regulator would: not on tone, but on whether
              each claim is written down somewhere binding and checkable. A
              vendor who answers question one with a named entity and a named
              parent has told you more in one line than a page of
              &quot;enterprise-grade privacy&quot; ever will. A vendor who cannot
              answer it at all has told you something too.
            </p>
            <p>
              If you want the full technical write-up behind our own answers, it
              is in the{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Seal AI architecture documentation
              </Link>
              , and the market audit that led to the model choice is in the{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/model-selection"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                model selection report
              </Link>
              .
            </p>
          </div>

          <CommercialModule
            hook="Run this checklist on your current vendor, then on us. The demo walks every answer — including where the limits are."
          />

          <FaqSection items={FAQ} locale="en" />

          <RelatedReading currentSlug={SLUG} />
        </div>
      </article>
    </>
  );
}
