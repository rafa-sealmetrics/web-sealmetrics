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
} from "@/lib/schema";
import { RelatedReading } from "@/components/ui/RelatedReading";
import { FaqSection } from "@/components/ui/FaqSection";
import { CommercialModule } from "@/components/ui/CommercialModule";

const SLUG = "eu-ai-act-for-marketers";
const URL = `/blog/${SLUG}`;
const TITLE = "The EU AI Act for Marketers, Without the Jargon";
const DESCRIPTION =
  "Most marketing teams are deployers of limited-risk AI, not providers. That means one main obligation — Article 50 transparency from 2 August 2026 — and a lot of duties that sit upstream with the model publisher instead.";

export const metadata: Metadata = {
  title: TITLE,
  description: "Most marketing teams are deployers of limited-risk AI, not providers. That means one main obligation: Article 50 transparency from 2 August 2026.",
  openGraph: {
    title: "The EU AI Act for Marketers, Without the Jargon",
    description:
      "Provider or deployer? What Article 50 transparency actually requires, what lands on the model publisher instead, and a checklist for 2 August 2026.",
    type: "article",
    url: "https://sealmetrics.com/blog/eu-ai-act-for-marketers/",
    siteName: "Sealmetrics",
    locale: "en_US",
    images: ["https://sealmetrics.com/og/blog/eu-ai-act-for-marketers.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "The EU AI Act for Marketers, Without the Jargon",
    description: "Provider or deployer? What Article 50 transparency actually requires, what lands on the model publisher instead, and a checklist for 2 August 2026.",
    images: ["https://sealmetrics.com/og/blog/eu-ai-act-for-marketers.png"],
  },
  alternates: {
    languages: getAlternates("/blog/eu-ai-act-for-marketers"),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "What does the EU AI Act mean for analytics and marketing teams?",
    answer:
      "For most teams, far less than the headlines suggest. A marketing team using an AI analytics assistant is normally a deployer of a limited-risk AI system, not a provider of a high-risk one. The operative duty is Article 50 transparency — people must know when they are interacting with an AI — applicable from 2 August 2026. The heavier general-purpose AI obligations sit upstream with whoever publishes and hosts the model.",
  },
  {
    question: "What is Article 50 of the EU AI Act?",
    answer:
      "Article 50 is the transparency article. Its core requirement is that users are informed when they are interacting with an AI system rather than a human, together with duties around marking certain AI-generated content. It applies from 2 August 2026, and the European Commission adopted its Article 50 guidelines on 20 July 2026. Systems already on the market before 2 August 2026 have until 2 December 2026 for the content-marking duty.",
  },
  {
    question: "Am I a provider or a deployer under the EU AI Act?",
    answer:
      "If you built the AI system and put it on the market under your own name, you are a provider. If you use an AI system supplied by someone else in the course of your business, you are a deployer. A marketing team using an AI feature inside an analytics platform is a deployer. Note that substantially modifying a system, or rebranding it as your own, can move you into the provider role.",
  },
  {
    question: "Does the EU AI Act apply to open-source AI models?",
    answer:
      "Models released under free and open-source licences receive partial exemptions from some general-purpose AI obligations. Beyond the legal treatment, open weights are practically useful for compliance: you can pin an exact version, inspect it, red-team it and reproduce results later. A closed API can change underneath you without notice, which makes any assessment you wrote about it hard to defend.",
  },
  {
    question: "What do I need to do before 2 August 2026 for the AI Act?",
    answer:
      "Inventory the AI features already in your stack, confirm for each whether you are a deployer or a provider, check that AI interfaces are clearly labelled as AI to users, ask each vendor to confirm in writing how they meet their upstream obligations, and give one named person ownership of the file. For most marketing teams that is a short project, not a programme.",
  },
];

export default function EuAiActForMarketersPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-24",
          dateModified: "2026-07-28",
          url: URL,
          category: "Regulation",
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
          { name: "The EU AI Act for Marketers", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "AI deployer",
          description:
            "Under the EU AI Act, a deployer is any organisation that uses an AI system supplied by someone else in the course of its professional activity, as opposed to a provider, which develops an AI system and places it on the market under its own name. A marketing team using an AI assistant built into an analytics platform is a deployer; the platform vendor and the model publisher carry the provider-side duties.",
          url: URL,
          related: [{ name: "AI provider", url: URL }],
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
        items={[{ label: "Blog", href: "/blog" }, { label: "The EU AI Act for Marketers" }]}
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Regulation
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              The EU AI Act for Marketers, Without the Jargon
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
            The EU AI Act is long, and almost none of it is aimed at you. If your
            team uses an AI feature inside a tool someone else built, you are a
            deployer of a limited-risk system, and your practical obligation
            fits in a paragraph. The heavy duties belong to whoever publishes and
            hosts the model.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                Most marketing teams are <strong>deployers</strong> of limited-risk
                AI, not providers — the role you occupy decides which obligations
                apply to you at all.
              </li>
              <li>
                The operative duty is <strong>Article 50 transparency</strong>,
                applicable from <strong>2 August 2026</strong>. The Commission
                adopted its Article 50 guidelines on 20 July 2026.
              </li>
              <li>
                Systems already on the market before 2 August 2026 have until{" "}
                <strong>2 December 2026</strong> for the content-marking duty.
              </li>
              <li>
                General-purpose AI obligations sit upstream with the model
                publisher and inference host — and open-weight models make your
                own file easier to defend, because the exact version can be pinned
                and reproduced.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              The EU AI Act has produced a great deal of anxiety in marketing
              teams and very little clarity. Part of that is the length of the
              text. Most of it is that the coverage rarely separates the two
              questions that actually matter to you: which role you occupy, and
              which risk category the system you are using falls into.
            </p>
            <p>
              Answer those two and the list of things you have to do gets short
              quickly.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Provider or deployer: the only question that changes your life
            </h2>
            <p>
              The Act assigns duties by role. Two of them matter here.
            </p>
            <p>
              A <strong>provider</strong> develops an AI system and places it on
              the market under its own name. A <strong>deployer</strong> uses an
              AI system supplied by someone else in the course of its
              professional activity. If you type questions into an AI assistant
              built into your analytics platform, you are a deployer. The
              platform vendor is closer to the provider side, and the company
              that published the underlying model is further upstream still.
            </p>
            <p>
              One caveat worth knowing: the roles are not permanently fixed. If
              you substantially modify a system, or put your own brand on
              somebody else&apos;s and sell it, you can find yourself holding
              provider duties you did not plan for. Wiring an off-the-shelf
              assistant into your reporting workflow does not do that. Rebuilding
              it and reselling it might.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Limited risk, in plain terms
            </h2>
            <p>
              The Act sorts systems by the harm they could cause. An AI that
              reads your own analytics database and writes a paragraph about why
              organic traffic dipped is not making decisions about anyone&apos;s
              employment, credit or liberty. It is a{" "}
              <strong>limited-risk</strong> system, and the regime for
              limited-risk systems is essentially about transparency rather than
              conformity assessments, technical files and audits.
            </p>
            <p>
              This is the part that gets lost. A lot of AI Act commentary
              describes high-risk obligations — risk management systems, data
              governance documentation, human oversight design, post-market
              monitoring — and readers assume those land on them. For a marketing
              team using an analytics assistant, they generally do not.
            </p>

            <CommercialModule
              hook="Deployer obligations are lighter when the vendor is transparent: LENS runs open-weights gpt-oss-120b on Scaleway Paris. Ask us what your file needs."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The obligation that does land on you: Article 50
            </h2>
            <p>
              Article 50 is the transparency article, and its core idea is
              simple: people should know when they are dealing with an AI. It
              applies from <strong>2 August 2026</strong>. The European Commission
              adopted its guidelines on Article 50 on{" "}
              <strong>20 July 2026</strong>, which is the document to read if you
              want the Commission&apos;s own reading of scope and edge cases.
            </p>
            <p>
              There is also a transitional detail worth noting. Systems already
              placed on the market before 2 August 2026 have until{" "}
              <strong>2 December 2026</strong> to comply with the content-marking
              duty. If you have an AI feature that has been running for a year,
              that grace period may apply to it — which is a reason to know when
              each feature in your stack actually launched.
            </p>
            <p>
              In practice, for a marketing team, the work is unglamorous: make
              sure that the AI surfaces your customers, prospects or staff touch
              are visibly labelled as AI, that AI-generated content produced for
              publication is handled in line with the marking rules, and that
              somebody has written down which systems are in scope.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What sits upstream, and why that is good news
            </h2>
            <p>
              The obligations on general-purpose AI models — Article 53 onward —
              have applied since <strong>2 August 2025</strong>, with the
              Commission&apos;s enforcement powers arriving on{" "}
              <strong>2 August 2026</strong>. These cover things like technical
              documentation, information for downstream providers, copyright
              policy and training-data summaries.
            </p>
            <p>
              They belong to the model publisher and the inference host. Not to a
              deployer. That is deliberate design in the Act: the party with
              visibility into how a model was built carries the duties that
              require visibility into how a model was built.
            </p>
            <p>
              What this means for you as a buyer is that a chunk of your
              diligence is really a question you can pass along. Ask your vendor
              which model they use, who publishes it, who hosts the inference,
              and how those parties address their upstream obligations. A vendor
              who cannot name the model is a vendor who cannot answer.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Why open weights make your file easier to defend
            </h2>
            <p>
              Models released under free and open-source licences get partial
              exemptions from some of those general-purpose obligations. That is
              the legal angle, and it is real. But there is a more practical
              reason a deployer should care about open weights, and it has
              nothing to do with exemptions.
            </p>
            <p>
              Auditability. With published weights you can pin an exact version,
              inspect it, red-team it and reproduce a result months later. Every
              claim you make in an internal assessment stays checkable. With a
              closed API, the model behind the endpoint can change under you
              silently — and then the assessment you wrote in March describes
              something that no longer exists, with no way to demonstrate what
              did or did not change.
            </p>
            <p>
              That is one of the reasons{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/model-selection"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Seal AI runs on an open-weight model
              </Link>
              :{" "}
              <code className="font-mono text-[0.9em]">gpt-oss-120b</code>, under
              the Apache 2.0 licence, hosted on Scaleway Generative APIs in
              Paris, France. Scaleway is a French company whose parent is the
              Iliad group, with no US ownership. As the platform, Sealmetrics is
              a deployer of a limited-risk AI system, and we say so plainly
              rather than implying the assistant is anything other than a model
              reading your reports. The full architecture write-up is in the{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                Seal AI documentation
              </Link>
              .
            </p>
            <p>
              Reproducibility also has an internal payoff. It is what let us run
              a controlled comparison of candidate models against our own
              assistant and publish{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/internal-benchmark"
                className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
              >
                the benchmark
              </Link>
              , including the run we threw away as invalid. You cannot do that
              with a model you are not allowed to hold still.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What to do before 2 August 2026
            </h2>
            <p>
              A short, concrete list. None of it needs outside help for a typical
              marketing organisation.
            </p>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Inventory the AI you already use.</strong> Include the
                features that appeared inside tools you have had for years. Note
                roughly when each one launched, because of the 2 December 2026
                transitional date.
              </li>
              <li>
                <strong>Assign a role per system.</strong> Deployer for almost
                everything. Flag anything you have substantially modified or
                white-labelled, since that is where the role can shift.
              </li>
              <li>
                <strong>Check the labelling.</strong> Anywhere a person interacts
                with an AI — assistants, chat widgets, automated replies — it
                should be obvious that it is an AI. Read the Commission&apos;s 20
                July 2026 guidelines for the detail.
              </li>
              <li>
                <strong>Handle AI-generated content deliberately.</strong> Decide
                where marking applies to what you publish, and write the decision
                down rather than leaving it to individual judgement.
              </li>
              <li>
                <strong>Ask vendors for their upstream position in writing.</strong>{" "}
                Which model, published by whom, hosted where, and how the
                general-purpose obligations are met. File the replies.
              </li>
              <li>
                <strong>Give it an owner.</strong> One named person with the
                inventory and the vendor answers. Most of the failures here are
                organisational, not legal.
              </li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The bottom line
            </h2>
            <p>
              The AI Act is a large piece of law with a small footprint on a
              typical marketing team. Know your role, know your risk category,
              label the AI, keep an inventory, and push the model-level questions
              upstream to the people who can actually answer them.
            </p>
            <p>
              The teams that will struggle are not the ones with complicated AI.
              They are the ones that cannot list what they are running, or name
              the model behind it. That is a solvable problem, and now is a
              considerably better time to solve it than after 2 August.
            </p>
            <p className="text-[0.9rem] text-text-tertiary italic">
              This article is general information about how the EU AI Act is
              structured, not legal advice. Obligations depend on your specific
              systems, role and jurisdiction — take advice from a qualified
              professional before relying on any of it.
            </p>
          </div>

          <CommercialModule
            hook="Your AI Act position is easier to defend when the model is open weights and inference stays in the EU. Get the vendor answers you are entitled to, live."
          />

          <FaqSection items={FAQ} locale="en" />

          <RelatedReading currentSlug={SLUG} />
        </div>
      </article>
    </>
  );
}
