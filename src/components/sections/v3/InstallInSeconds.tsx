"use client";

import { useState } from "react";

/* ============================================================
   INSTALL IN SECONDS
   Amplitude-style "pick your AI → paste one prompt" install,
   in the SealMetrics editorial system. Selecting a tool tailors
   the copyable connect prompt. Ends with what the MCP can do.
   ============================================================ */

const HOSTED_MCP = "https://mcp.sealmetrics.com/mcp";
const DOCS = "https://docs.sealmetrics.com";

type Tool = { name: string; logo: string | null };

const TOOLS: Tool[] = [
  { name: "Claude", logo: "/logos/tools/claude.svg" },
  { name: "ChatGPT", logo: "/logos/tools/openai.svg" },
  { name: "Cursor", logo: "/logos/tools/cursor.svg" },
  { name: "Claude Code", logo: "/logos/tools/claude.svg" },
  { name: "Codex", logo: "/logos/tools/openai.svg" },
  { name: "GitHub Copilot", logo: "/logos/tools/githubcopilot.svg" },
  { name: "Windsurf", logo: "/logos/tools/windsurf.svg" },
  { name: "Any MCP tool", logo: null },
];

function connectPrompt(tool: string): string {
  const who = tool === "Any MCP tool" ? "my AI assistant" : tool;
  return (
    `Connect ${who} to the SealMetrics MCP for me. If SealMetrics isn't added as an MCP server yet, ` +
    `prompt me to install it — the hosted server is ${HOSTED_MCP} (setup guide: ${DOCS}). ` +
    `Once connected, create my SealMetrics account, generate the tracking pixels I need, and build ` +
    `real-time reports, charts and alerts.`
  );
}

const CAPABILITIES = [
  {
    n: "01",
    t: "Create your account",
    d: "Spin up a SealMetrics account without leaving your AI — no signup form, no sales call.",
  },
  {
    n: "02",
    t: "Generate custom tracking pixels",
    d: "Create tracking pixels tailored to capture exactly the events and properties you need.",
  },
  {
    n: "03",
    t: "Reports, charts, tables — and alerts",
    d: "Built on data that's genuinely real-time — not yesterday's snapshot.",
  },
];

export function InstallInSeconds() {
  const [tool, setTool] = useState("Claude");
  const [copied, setCopied] = useState(false);
  const prompt = connectPrompt(tool);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="agentic-setup" className="py-28 bg-white border-t border-warm-100 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="max-w-[48ch] mb-12">
          <span className="eyebrow mb-5">Install in seconds</span>
          <h2 className="h-section mt-5">
            One prompt. From the AI you <em>already use.</em>
          </h2>
          <p className="text-[17px] leading-[1.6] text-ink-soft mt-5">
            No install project, no tag-manager maze. Pick your assistant, paste one prompt, and it
            connects to SealMetrics, creates your account and wires the pixel — for you.
          </p>
        </div>

        {/* Tool picker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {TOOLS.map(({ name, logo }) => {
            const active = name === tool;
            return (
              <button
                key={name}
                type="button"
                aria-pressed={active}
                onClick={() => setTool(name)}
                className={`relative rounded-xl border px-4 py-5 text-center transition-colors ${
                  active
                    ? "border-brand bg-brand-soft/40"
                    : "border-warm-100 bg-warm-50 hover:border-warm-200"
                }`}
              >
                {active && (
                  <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-brand" aria-hidden />
                )}
                <div className="flex items-center justify-center h-8 mb-3">
                  {logo ? (
                    <img
                      src={logo}
                      alt=""
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-ink-mute" aria-hidden>
                      <circle cx="5" cy="12" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="19" cy="12" r="2" />
                    </svg>
                  )}
                </div>
                <div className={`text-[15px] font-semibold ${active ? "text-ink" : "text-ink-2"}`}>
                  {name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute mt-1.5">
                  MCP
                </div>
              </button>
            );
          })}
        </div>

        {/* Connect prompt */}
        <div className="bg-ink rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              right: -80,
              top: -80,
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(45,139,109,0.28),transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">
                Connect to {tool}
              </div>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy prompt"
                className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-white/80 bg-white/10 hover:bg-white/20 transition-colors"
              >
                {copied ? "Copied" : "Copy prompt"}
              </button>
            </div>
            <p className="font-mono text-[13px] leading-[1.75] text-white/90 whitespace-pre-wrap">
              {prompt}
            </p>
            <div className="mt-5 pt-5 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px]">
              <span className="text-white/80">{HOSTED_MCP}</span>
              <span className="text-white/25">·</span>
              <a
                href={DOCS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 border-b border-white/25 hover:border-white/60 no-underline transition-colors"
              >
                Setup guide
              </a>
            </div>
          </div>
        </div>

        {/* What you can do */}
        <div className="mt-16">
          <h3
            className="font-semibold text-ink tracking-[-0.02em] leading-[1.2] mb-8"
            style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
          >
            What you can do with the <em className="italic-accent">SealMetrics MCP</em>
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {CAPABILITIES.map((c) => (
              <article key={c.n} className="bg-warm-50 border border-warm-100 rounded-2xl p-7 flex flex-col min-h-[180px]">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.1em] text-brand">
                  {c.n}
                </span>
                <h4 className="text-[18px] font-semibold text-ink leading-[1.3] mt-3 mb-2">{c.t}</h4>
                <p className="text-[14.5px] leading-[1.6] text-ink-soft">{c.d}</p>
              </article>
            ))}
          </div>

          <p className="mt-12 mx-auto max-w-[42ch] text-center font-medium text-ink leading-[1.3] tracking-[-0.02em]"
            style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
          >
            Everything you&rsquo;ve ever needed to grow — <em className="italic-accent">one prompt away</em>, from your own private AI.
          </p>
        </div>
      </div>
    </section>
  );
}
