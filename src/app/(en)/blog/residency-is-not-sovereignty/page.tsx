import type { Metadata } from "next";
import { postDates } from "@/lib/content/blog";
import { PostByline } from "@/components/ui/PostByline";
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

const SLUG = "residency-is-not-sovereignty";
const URL = `/blog/${SLUG}`;
const TITLE = "Residency Is Not Sovereignty: The Question to Ask Your AI Analytics Vendor";
const DESCRIPTION =
  "A European datacenter does not make your AI vendor European. The US CLOUD Act follows the company, not the server. Here is how to tell the difference — and why it decides where your data can be reached.";

export const metadata: Metadata = {
  title: "Residency Is Not Sovereignty: Ask Your AI Vendor This",
  description: "A European datacenter does not make your AI vendor European. The US CLOUD Act follows the company, not the server. How to tell the difference.",
  openGraph: {
    title: "Residency Is Not Sovereignty",
    description:
      "A European region does not put your data beyond US legal reach. The difference — and how to audit your AI analytics vendor for it.",
    type: "article",
    url: "https://sealmetrics.com/blog/residency-is-not-sovereignty/",
    siteName: "Sealmetrics",
    locale: "en_US",
    images: ["https://sealmetrics.com/og/blog/residency-is-not-sovereignty.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Residency Is Not Sovereignty",
    description: "A European region does not put your data beyond US legal reach. The difference — and how to audit your AI analytics vendor for it.",
    images: ["https://sealmetrics.com/og/blog/residency-is-not-sovereignty.png"],
  },
  alternates: {
    languages: getAlternates("/blog/residency-is-not-sovereignty"),
    canonical: `https://sealmetrics.com${URL}`,
  },
};

const FAQ = [
  {
    question: "What is the difference between data residency and data sovereignty?",
    answer:
      "Residency is where your data is physically stored or processed. Sovereignty is who has legal authority to compel access to it. A US-owned provider can host your data in a European datacenter (residency) while still being obligated under the US CLOUD Act to hand it over (no sovereignty). Sovereignty is determined by the corporate ownership and legal jurisdiction of the provider, not by the location of the server.",
  },
  {
    question: "Does the US CLOUD Act apply to data stored in Europe?",
    answer:
      "Yes. The US CLOUD Act (2018) obligates providers subject to US jurisdiction to disclose data in their possession or control regardless of where in the world it is stored. So a US company's European region is still reachable under the CLOUD Act, and — for non-US persons — under FISA Section 702.",
  },
  {
    question: "How do I check whether my AI analytics vendor is truly EU-sovereign?",
    answer:
      "Ask three questions: (1) Who owns the company operating the inference — is there a US parent? (2) Where is the model run, exclusively? (3) Is anything retained or used for training by default? If the answer to (1) is a US parent, an EU region does not remove CLOUD Act exposure regardless of the answers to (2) and (3).",
  },
  {
    question: "Is the EU-US Data Privacy Framework a safe basis to rely on?",
    answer:
      "It carries ongoing invalidation risk. The Data Privacy Framework survived its first challenge in 2025 but faces a pending appeal before the Court of Justice of the EU and a fresh challenge announced in 2026. Its two predecessors — Safe Harbor and Privacy Shield — were both struck down. An architecture that never triggers an international transfer does not depend on the Framework surviving.",
  },
];

export default function ResidencyIsNotSovereigntyPage() {
  const dates = postDates("residency-is-not-sovereignty");

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: TITLE,
          description: DESCRIPTION,
          ...dates,
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
          { name: "Residency Is Not Sovereignty", url: URL },
        ])}
      />
      <JsonLd
        data={definedTermSchema({
          name: "Data sovereignty",
          description:
            "The principle that data is subject to the laws and legal authority of a specific jurisdiction. For cloud and AI services, sovereignty is determined by which government can compel a provider to disclose data — a function of the provider's corporate ownership and legal jurisdiction, not the physical location of the server.",
          url: URL,
          related: [{ name: "Data residency", url: URL }],
        })}
      />
      <JsonLd
        data={faqPageSchema(FAQ, URL)}
      />
      <JsonLd
        data={speakableWebPageSchema({
          url: URL,
          name: TITLE,
          selectors: [".key-takeaways", ".tldr"],
        })}
      />

      <Breadcrumbs
        items={[{ label: "Blog", href: "/blog" }, { label: "Residency Is Not Sovereignty" }]}
      />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[936px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Privacy
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Residency Is Not Sovereignty: The Question to Ask Your AI Analytics Vendor
            </h1>
            <PostByline
              {...dates}
              readTime="6 min read"
              authorName="Rafa Jiménez"
              authorUrl="/authors/rafa-jimenez"
            />
          </header>

          <p className="tldr mb-12 text-[1.15rem] leading-[1.7] text-text-secondary font-serif italic">
            A European datacenter does not make your AI vendor European. If the
            company running the model answers to US law, your data is reachable
            under US law — no matter which flag flies over the server room.
          </p>

          <div className="key-takeaways mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-none pl-0 [&>li]:relative [&>li]:pl-6 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-text-tertiary">
              <li>
                <strong>Residency</strong> is where data sits. <strong>Sovereignty</strong>{" "}
                is who can legally compel access to it. They are not the same thing, and only the second one protects you.
              </li>
              <li>
                The US CLOUD Act and FISA §702 follow the corporate parent, not the
                datacenter — so a US company&apos;s EU region is still reachable under US law.
              </li>
              <li>
                An architecture where data never leaves the EU and the provider has no
                US parent does not trigger GDPR Chapter V at all — no Standard Contractual
                Clauses, no transfer assessment, no dependence on the Data Privacy Framework.
              </li>
              <li>
                Three questions decide it: who owns the provider, where the model runs, and
                what is retained or used for training.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              &quot;Hosted in Europe&quot; has become the reflexive answer to every
              question about AI and data protection. It is also, on its own,
              close to meaningless. The location of a server tells you where the
              bytes rest. It tells you nothing about who can knock on the door
              and demand them.
            </p>
            <p>
              That distinction — residency versus sovereignty — is the single
              most important thing to understand before you let an AI feature
              touch your analytics data. It is also the distinction most vendors
              are quietly counting on you to miss.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Two words that are not synonyms
            </h2>
            <p>
              <strong>Data residency</strong> is a geography question: in which
              country is my data stored or processed? <strong>Data
              sovereignty</strong> is a jurisdiction question: whose laws can
              compel access to it? A provider can give you a perfect answer to
              the first while the second quietly undermines the whole thing.
            </p>
            <p>
              Here is the mechanism. The US{" "}
              <strong>CLOUD Act</strong> (2018) obligates any provider subject
              to US jurisdiction to disclose data in its &quot;possession,
              custody, or control&quot; — <em>regardless of where in the world
              that data is stored</em>. For non-US persons, FISA Section 702
              adds a separate foreign-intelligence collection regime. Neither
              cares which datacenter you picked. Both care who owns the company.
            </p>
            <p>
              So when a US-headquartered AI provider offers you a Frankfurt or a
              Paris region, the data lives in Europe and remains reachable under
              American law at the same time. Residency: yes. Sovereignty: no.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Why the &quot;EU region&quot; checkbox is not enough
            </h2>
            <p>
              Every major US AI provider now offers some form of European
              processing — OpenAI through EU data residency, Anthropic&apos;s
              Claude via AWS Bedrock&apos;s EU regions, Google&apos;s Gemini
              pinned to Vertex AI in Belgium or the Netherlands. Each of these
              is a genuine improvement on sending data to Virginia. None of them
              changes the corporate jurisdiction of the entity operating the
              service.
            </p>
            <p>
              And the fallback legal basis for EU-US data flows is not solid
              ground. The <strong>EU-US Data Privacy Framework</strong> survived
              its first court challenge in September 2025, but an appeal is
              pending before the Court of Justice of the EU, and a fresh
              challenge — already nicknamed &quot;Schrems III&quot; — was
              announced in 2026. Its two predecessors, Safe Harbor and Privacy
              Shield, were both struck down. Building a privacy-critical feature
              on a legal basis with that track record is a bet, not a
              guarantee.
            </p>

            <CommercialModule
              hook="Residency you can verify: inference on Scaleway Paris, an EU provider — not an EU region of a US cloud. Check each link of the chain in a demo."
            />

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The architecture that sidesteps the whole debate
            </h2>
            <p>
              There is a cleaner answer than arguing about transfer mechanisms:
              build so that no international transfer ever happens. If the data
              never leaves the EU <em>and</em> the provider running the
              inference has no US parent, then GDPR Chapter V — the entire
              international-transfer chapter, Article 44 onward — is simply not
              triggered. No Standard Contractual Clauses. No Transfer Impact
              Assessment. No dependence on the Data Privacy Framework surviving
              its next day in court.
            </p>
            <p>
              This is the choice behind{" "}
              <Link
                href="https://docs.sealmetrics.com/lens/seal-ai/private-ai-architecture"
                className="text-text-primary border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors no-underline"
              >
                Seal AI
              </Link>
              , the private AI layer inside Sealmetrics. Inference runs on
              Scaleway&apos;s infrastructure in Paris only. Scaleway is a French
              company with a French parent (the Iliad group) and no US
              ownership — it states plainly that its AI services are not subject
              to extraterritorial laws such as the American CLOUD Act. The model
              is open-weight and static; it is not trained on your data, and
              nothing is retained by default.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Three questions to audit any AI analytics vendor
            </h2>
            <p>
              You do not need to be a lawyer to test a vendor&apos;s claim. Ask
              these, in order:
            </p>
            <ol className="space-y-3 pl-6 list-decimal marker:text-text-tertiary">
              <li>
                <strong>Who owns the company running the inference?</strong> If
                there is a US parent, an EU region does not remove CLOUD Act
                exposure. Stop here — the rest is secondary.
              </li>
              <li>
                <strong>Where is the model run, exclusively?</strong> &quot;We
                can process in the EU&quot; is not the same as &quot;we only
                process in the EU.&quot; A global endpoint that <em>may</em>
                route elsewhere is not EU-only.
              </li>
              <li>
                <strong>What is retained, and what trains the model?</strong>{" "}
                Zero prompt retention and no training on your data should be the
                default, in writing, in the subprocessor documentation — not an
                enterprise upsell.
              </li>
            </ol>
            <p>
              If a vendor cannot answer the first question with &quot;a European
              company, no US parent,&quot; then whatever they say about
              residency, encryption, or certifications is decorating a house
              built on someone else&apos;s jurisdiction.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              The bottom line
            </h2>
            <p>
              Residency is a marketing-friendly half of the answer. Sovereignty
              is the half that actually determines whether a foreign government
              can reach your customers&apos; data. When the two conflict — an EU
              server owned by a US company — jurisdiction wins. Ask who owns the
              provider before you ask where the server is. For a privacy-first
              analytics platform, the AI layer cannot be the one place that
              answer goes wrong.
            </p>
          </div>

          <CommercialModule
            hook="The three audit questions above apply to us too. Put them to Sealmetrics in a demo and compare the answers with your current vendor's."
          />

          <FaqSection items={FAQ} locale="en" />

          <RelatedReading currentSlug={SLUG} />
        </div>
      </article>
    </>
  );
}
