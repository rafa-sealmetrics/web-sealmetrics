import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { softwareApplicationSchema, breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { LogosStrip } from "@/components/sections/v3/HomeV3";
import { ProductFinalCtaV3 } from "@/components/sections/v3/ProductV3Sections";

export const metadata: Metadata = {
  title: "Built for AI Agents — SealMetrics · MCP Server & AI Agent Analytics",
  description:
    "SealMetrics sees AI agents. Track visits from ChatGPT, Claude and Perplexity for free, connect agents directly via MCP server, and serve llms.txt-ready content — no CAPTCHAs, no consent walls.",
  openGraph: {
    title: "Built for AI Agents — SealMetrics · MCP Server & AI Agent Analytics",
    description:
      "The analytics platform that sees AI agents: free agent tracking, native MCP server, llms.txt, server-rendered content and visible pricing for AI crawlers.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/built-for-ai-agents",
    languages: getAlternates("/built-for-ai-agents"),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does SealMetrics track visits from AI agents like ChatGPT or Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SealMetrics automatically identifies and segments traffic from AI agents — including ChatGPT, Claude, Perplexity, and other major crawlers — at no extra charge. This is included in every plan.",
      },
    },
    {
      "@type": "Question",
      name: "What is the SealMetrics MCP server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SealMetrics MCP (Model Context Protocol) server allows AI agents and LLM-powered tools to connect directly to your analytics data using a standardised interface. Agents can query traffic, revenue attribution and anomaly reports without needing a human in the loop.",
      },
    },
    {
      "@type": "Question",
      name: "Does SealMetrics provide llms.txt or llms-full.txt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SealMetrics publishes both llms.txt and llms-full.txt so that AI crawlers can discover, parse and cite our documentation and product information accurately.",
      },
    },
    {
      "@type": "Question",
      name: "Is SealMetrics safe for AI agents to crawl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SealMetrics is server-rendered, has no CAPTCHA walls, no cookie-consent gates blocking content, and publishes pricing openly — all signals that make the site reliably accessible to AI crawlers and agent frameworks.",
      },
    },
    {
      "@type": "Question",
      name: "How do I connect an AI agent to SealMetrics via MCP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add the SealMetrics MCP server endpoint to your agent configuration, supply your API key, and the agent can start querying analytics data immediately. A minimal config example is available on this page.",
      },
    },
    {
      "@type": "Question",
      name: "Is SealMetrics better than GA4 for tracking AI agent traffic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For AI agent visibility specifically, SealMetrics has a dedicated agent-segmentation layer that GA4 does not offer out of the box. For general web analytics with broad ecosystem integrations, GA4 remains a strong choice — particularly for teams already invested in the Google stack.",
      },
    },
  ],
};

const softwareSchema = softwareApplicationSchema();

export default function BuiltForAIAgentsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Built for AI Agents" }]} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Built for AI Agents", url: "/built-for-ai-agents" }])} />
      <JsonLd data={speakableWebPageSchema({ url: "/built-for-ai-agents", name: "Built for AI Agents — SealMetrics" })} />
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-indigo-400">
            AI Agent Analytics · MCP Server · llms.txt
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            The analytics platform that{" "}
            <span className="text-indigo-400">sees AI agents</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Track visits from ChatGPT, Claude and Perplexity. Let agents query your data directly via MCP. Serve machine-readable content with{" "}
            <code className="text-indigo-300">llms.txt</code>. No walls, no friction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.sealmetrics.com/sign-up"
              className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 font-semibold text-white transition-colors"
            >
              Start free
            </a>
            <a
              href="#mcp-server"
              className="px-8 py-3 rounded-xl border border-gray-600 hover:border-indigo-400 font-semibold text-gray-200 transition-colors"
            >
              MCP setup guide ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── TLDR ── */}
      <TldrBlock
        answer={
          <>
            SealMetrics is the first analytics platform designed to be{" "}
            <strong>legible and useful to AI agents</strong> — not just human analysts. It
            identifies agent traffic automatically, exposes a native MCP server for
            agent-to-analytics queries, and publishes <code>llms.txt</code> so AI crawlers
            can cite your data accurately.
          </>
        }
        bullets={[
          <>AI Agent Analytics — free on every plan; identifies ChatGPT, Claude, Perplexity and more.</>,
          <>Native MCP server — agents query traffic, attribution and anomaly data without human mediation.</>,
          <><code>llms.txt</code> + <code>llms-full.txt</code> — machine-readable product docs for AI crawlers.</>,
          <>Agent-safe site — server-rendered, no CAPTCHAs, no consent walls, visible pricing.</>,
        ]}
      />

      <LogosStrip />

      {/* ── FOUR PILLARS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Four ways SealMetrics serves AI agents
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
            Each layer is independent — use one or all four depending on how your team works with AI.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Agent Analytics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                SealMetrics automatically segments traffic from AI agents — ChatGPT,
                Claude, Perplexity, Google Gemini and others — into a dedicated report.
                See visit volume, pages reached, and whether agents follow up with
                human traffic. <strong>Included free on every plan.</strong>
              </p>
              <p className="mt-4 text-xs text-gray-400">
                Honest note: if you only need basic bot identification and already use
                GA4, its built-in bot filtering may be sufficient for your use case.
                SealMetrics adds value when you want <em>positive</em> agent attribution
                — knowing which agents drive real downstream conversions.
              </p>
            </div>

            {/* Pillar 2 */}
            <div id="mcp-server" className="rounded-2xl border border-indigo-100 bg-indigo-50 p-8">
              <div className="text-3xl mb-4">🔌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">MCP Server</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The SealMetrics MCP (Model Context Protocol) server lets any
                LLM-powered agent connect to your analytics data with a single config
                block. Agents can query traffic trends, revenue attribution, anomaly
                alerts and segment comparisons — without a human analyst in the loop.
              </p>
              <p className="mt-4 text-xs text-gray-400">
                Compatible with Claude Desktop, Cursor, Continue.dev and any
                MCP-compliant framework.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <code className="font-mono">llms.txt</code> &amp;{" "}
                <code className="font-mono">llms-full.txt</code>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                SealMetrics publishes both files at the domain root so AI crawlers
                can discover, parse and accurately cite our documentation, pricing and
                feature set. If you build on top of SealMetrics data, your agents will
                always have an up-to-date, structured reference to work from.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://sealmetrics.com/llms.txt"
                  className="text-xs text-indigo-600 underline hover:text-indigo-800"
                >
                  llms.txt ↗
                </a>
                <a
                  href="https://sealmetrics.com/llms-full.txt"
                  className="text-xs text-indigo-600 underline hover:text-indigo-800"
                >
                  llms-full.txt ↗
                </a>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agent-friendly site</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every SealMetrics page is server-rendered HTML — no JavaScript-gated
                content that crawlers miss. Pricing is publicly visible. There are no
                CAPTCHA walls or cookie-consent pop-ups blocking content. AI agents
                and LLM crawlers see exactly what human visitors see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MCP CONFIG EXAMPLE ── */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Connect an agent in under two minutes</h2>
          <p className="text-gray-400 mb-8">
            Add the following block to your MCP client configuration file (e.g.,{" "}
            <code className="text-indigo-300">claude_desktop_config.json</code> or your
            framework&apos;s <code className="text-indigo-300">mcp.json</code>). Replace{" "}
            <code className="text-indigo-300">YOUR_API_KEY</code> with the key from your
            SealMetrics dashboard.
          </p>
          <pre className="bg-gray-900 rounded-xl p-6 text-sm text-green-300 overflow-x-auto leading-relaxed">
{`{
  "mcpServers": {
    "sealmetrics": {
      "command": "npx",
      "args": ["-y", "@sealmetrics/mcp-server"],
      "env": {
        "SEALMETRICS_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}`}
          </pre>
          <p className="text-gray-500 text-xs mt-4">
            Once connected, your agent can ask questions like:{" "}
            <em>&ldquo;Which pages had the most AI agent visits last week?&rdquo;</em> or{" "}
            <em>&ldquo;Show me revenue attributed to Perplexity referrals this month.&rdquo;</em>
          </p>
        </div>
      </section>

      {/* ── HONEST COMPARISON ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            How does SealMetrics compare for AI agent use cases?
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            We believe honest comparisons build more trust than marketing claims.
            Here is where we lead — and where alternatives may suit you better.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-700 border-b border-gray-200">Capability</th>
                  <th className="text-center p-4 font-semibold text-indigo-700 border-b border-gray-200">SealMetrics</th>
                  <th className="text-center p-4 font-semibold text-gray-700 border-b border-gray-200">GA4</th>
                  <th className="text-center p-4 font-semibold text-gray-700 border-b border-gray-200">Plausible / Fathom</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Dedicated AI agent traffic report</td>
                  <td className="p-4 text-center text-green-600 font-semibold">✓ Free</td>
                  <td className="p-4 text-center text-gray-400">Bot filter only (exclusion, not attribution)</td>
                  <td className="p-4 text-center text-gray-400">No</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 text-gray-700">Native MCP server</td>
                  <td className="p-4 text-center text-green-600 font-semibold">✓</td>
                  <td className="p-4 text-center text-gray-400">No</td>
                  <td className="p-4 text-center text-gray-400">No</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700"><code>llms.txt</code> published</td>
                  <td className="p-4 text-center text-green-600 font-semibold">✓</td>
                  <td className="p-4 text-center text-gray-400">No</td>
                  <td className="p-4 text-center text-gray-400">Partial</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 text-gray-700">100% observed data (no sampling)</td>
                  <td className="p-4 text-center text-green-600 font-semibold">✓</td>
                  <td className="p-4 text-center text-gray-400">Sampled above free tier</td>
                  <td className="p-4 text-center text-green-600 font-semibold">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Ecosystem breadth & integrations</td>
                  <td className="p-4 text-center text-gray-400">Growing</td>
                  <td className="p-4 text-center text-green-600 font-semibold">✓ Best-in-class</td>
                  <td className="p-4 text-center text-gray-400">Good</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 text-gray-700">Revenue attribution via agent query</td>
                  <td className="p-4 text-center text-green-600 font-semibold">✓ via MCP</td>
                  <td className="p-4 text-center text-gray-400">Via Looker Studio (manual)</td>
                  <td className="p-4 text-center text-gray-400">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Table reflects publicly available information as of 2025. Features change — verify with each vendor.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently asked questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "Does SealMetrics track visits from AI agents like ChatGPT or Claude?",
                a: "Yes. SealMetrics automatically identifies and segments traffic from AI agents — including ChatGPT, Claude, Perplexity, and other major crawlers — at no extra charge. This is included in every plan.",
              },
              {
                q: "What is the SealMetrics MCP server?",
                a: "The SealMetrics MCP (Model Context Protocol) server allows AI agents and LLM-powered tools to connect directly to your analytics data using a standardised interface. Agents can query traffic, revenue attribution and anomaly reports without needing a human in the loop.",
              },
              {
                q: "Does SealMetrics provide llms.txt or llms-full.txt?",
                a: "Yes. SealMetrics publishes both llms.txt and llms-full.txt so that AI crawlers can discover, parse and cite our documentation and product information accurately.",
              },
              {
                q: "Is SealMetrics safe for AI agents to crawl?",
                a: "Yes. SealMetrics is server-rendered, has no CAPTCHA walls, no cookie-consent gates blocking content, and publishes pricing openly — all signals that make the site reliably accessible to AI crawlers and agent frameworks.",
              },
              {
                q: "How do I connect an AI agent to SealMetrics via MCP?",
                a: "Add the SealMetrics MCP server endpoint to your agent configuration, supply your API key, and the agent can start querying analytics data immediately. A minimal config example is shown on this page.",
              },
              {
                q: "Is SealMetrics better than GA4 for tracking AI agent traffic?",
                a: "For AI agent visibility specifically, SealMetrics has a dedicated agent-segmentation layer that GA4 does not offer out of the box. For general web analytics with broad ecosystem integrations, GA4 remains a strong choice — particularly for teams already invested in the Google stack.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductFinalCtaV3 />
    </>
  );
}
