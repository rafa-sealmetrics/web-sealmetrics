"use client";

import { useMemo, useState } from "react";

type Locale = "en" | "es";
type Lang = "bash" | "toml" | "json";
type TabId = "claude-desktop" | "claude-code" | "codex" | "cursor" | "scratch";

// All clients install the same npm package; only the destination differs.
const PLACEHOLDER_KEY = "sm_tu_key";
const PLACEHOLDER_SITE = "tu-site-id";
const MCPB_URL =
  "https://cdn.jsdelivr.net/npm/@sealmetrics/mcp/dist/sealmetrics.mcpb";

const CODE = {
  claudeCode: `claude mcp add sealmetrics \\
  -e SEALMETRICS_API_KEY=${PLACEHOLDER_KEY} \\
  -e SEALMETRICS_SITE_ID=${PLACEHOLDER_SITE} \\
  -- npx -y @sealmetrics/mcp`,
  codex: `[mcp_servers.sealmetrics]
command = "npx"
args = ["-y", "@sealmetrics/mcp"]
env = { SEALMETRICS_API_KEY = "${PLACEHOLDER_KEY}", SEALMETRICS_SITE_ID = "${PLACEHOLDER_SITE}" }`,
  cursor: `{
  "mcpServers": {
    "sealmetrics": {
      "command": "npx",
      "args": ["-y", "@sealmetrics/mcp"],
      "env": {
        "SEALMETRICS_API_KEY": "${PLACEHOLDER_KEY}",
        "SEALMETRICS_SITE_ID": "${PLACEHOLDER_SITE}"
      }
    }
  }
}`,
  scratch: `npx sealmetrics init`,
};

interface TabDef {
  id: TabId;
  label: string;
  badge?: string;
  node: boolean;
  desc: string;
  kind: "download" | "code";
  lang?: Lang;
  code?: string;
}

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    nodeNote: string;
    copy: string;
    copied: string;
    download: string;
    tabs: TabDef[];
  }
> = {
  en: {
    eyebrow: "Install the MCP",
    title: "Connect SealMetrics to your AI",
    intro:
      "You'll need your read-only API key and your Site ID — find them under Settings → API Tokens in your dashboard. Except the Claude Desktop extension, every option requires Node.js.",
    nodeNote: "Requires Node.js",
    copy: "Copy",
    copied: "Copied",
    download: "Download the extension (.mcpb)",
    tabs: [
      {
        id: "claude-desktop",
        label: "Claude Desktop",
        badge: "Recommended · no Node",
        node: false,
        kind: "download",
        desc: "The easiest way — no Node.js required. Download the extension and double-click it; Claude Desktop will ask for your API key.",
      },
      {
        id: "claude-code",
        label: "Claude Code",
        node: true,
        kind: "code",
        lang: "bash",
        code: CODE.claudeCode,
        desc: "Run this in your terminal.",
      },
      {
        id: "codex",
        label: "Codex",
        node: true,
        kind: "code",
        lang: "toml",
        code: CODE.codex,
        desc: "Add it to ~/.codex/config.toml.",
      },
      {
        id: "cursor",
        label: "Cursor / others",
        node: true,
        kind: "code",
        lang: "json",
        code: CODE.cursor,
        desc: "Add this block to your client's MCP config (in Cursor: ~/.cursor/mcp.json).",
      },
      {
        id: "scratch",
        label: "From scratch",
        node: true,
        kind: "code",
        lang: "bash",
        code: CODE.scratch,
        desc: "No account yet? This registers you and configures everything automatically.",
      },
    ],
  },
  es: {
    eyebrow: "Instalar el MCP",
    title: "Conecta SealMetrics con tu IA",
    intro:
      "Necesitas tu API key (read-only) y tu Site ID — los encuentras en Settings → API Tokens del dashboard. Salvo la extensión de Claude Desktop, las demás opciones requieren Node.js.",
    nodeNote: "Requiere Node.js",
    copy: "Copiar",
    copied: "Copiado",
    download: "Descargar la extensión (.mcpb)",
    tabs: [
      {
        id: "claude-desktop",
        label: "Claude Desktop",
        badge: "Recomendada · sin Node",
        node: false,
        kind: "download",
        desc: "La forma más fácil — sin Node.js. Descarga la extensión y haz doble clic; Claude Desktop te pedirá la API key.",
      },
      {
        id: "claude-code",
        label: "Claude Code",
        node: true,
        kind: "code",
        lang: "bash",
        code: CODE.claudeCode,
        desc: "Ejecútalo en tu terminal.",
      },
      {
        id: "codex",
        label: "Codex",
        node: true,
        kind: "code",
        lang: "toml",
        code: CODE.codex,
        desc: "Añádelo a ~/.codex/config.toml.",
      },
      {
        id: "cursor",
        label: "Cursor y otros",
        node: true,
        kind: "code",
        lang: "json",
        code: CODE.cursor,
        desc: "Añade este bloque al config MCP de tu cliente (en Cursor: ~/.cursor/mcp.json).",
      },
      {
        id: "scratch",
        label: "Desde cero",
        node: true,
        kind: "code",
        lang: "bash",
        code: CODE.scratch,
        desc: "¿Aún sin cuenta? Esto te registra y lo configura todo automáticamente.",
      },
    ],
  },
};

/* ---------------------------------------------------------------------------
   Minimal, dependency-free syntax highlighter for bash / toml / json.
   Credential tokens are highlighted so users see what to fill in (or what was
   auto-filled from their account).
--------------------------------------------------------------------------- */

const TOKEN_STYLE: Record<string, React.CSSProperties> = {
  comment: { color: "rgba(255,255,255,0.4)" },
  section: { color: "#8AB4E8" },
  key: { color: "#8AB4E8" },
  string: { color: "#9AD9B8" },
  keyword: { color: "#E8B84B" },
  flag: { color: "#C9B8E8" },
  punct: { color: "rgba(255,255,255,0.55)" },
  cred: {
    color: "#0E0E0C",
    background: "rgba(232,184,75,0.85)",
    borderRadius: 3,
    padding: "0 3px",
    fontWeight: 600,
  },
  plain: { color: "rgba(255,255,255,0.92)" },
};

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

interface Token {
  type: keyof typeof TOKEN_STYLE;
  text: string;
}

function tokenize(code: string, lang: Lang, creds: string[]): Token[] {
  const tokens: Token[] = [];
  const list = creds.filter(Boolean);
  const credRe = list.map(escapeRe).join("|");
  const credSplit = credRe ? new RegExp(`(${credRe})`) : null;

  const push = (type: Token["type"], text: string) => {
    if (!text) return;
    const last = tokens[tokens.length - 1];
    if (last && last.type === type) last.text += text;
    else tokens.push({ type, text });
  };

  // Emit a quoted string, breaking out any credential substrings inside it.
  const emitString = (text: string) => {
    if (!credSplit) return push("string", text);
    for (const part of text.split(credSplit)) {
      if (!part) continue;
      if (list.includes(part)) push("cred", part);
      else push("string", part);
    }
  };

  let i = 0;
  while (i < code.length) {
    const rest = code.slice(i);
    let m: RegExpExecArray | null;

    if (lang !== "json" && rest[0] === "#") {
      const nl = rest.indexOf("\n");
      const end = nl === -1 ? rest.length : nl;
      push("comment", rest.slice(0, end));
      i += end;
      continue;
    }
    if (
      lang === "toml" &&
      (i === 0 || code[i - 1] === "\n") &&
      (m = /^\[[^\]\n]+\]/.exec(rest))
    ) {
      push("section", m[0]);
      i += m[0].length;
      continue;
    }
    if (credSplit && (m = new RegExp(`^(?:${credRe})`).exec(rest))) {
      push("cred", m[0]);
      i += m[0].length;
      continue;
    }
    if ((m = /^"[^"\n]*"|^'[^'\n]*'/.exec(rest))) {
      const after = rest.slice(m[0].length);
      if (/^\s*:/.test(after)) push("key", m[0]);
      else emitString(m[0]);
      i += m[0].length;
      continue;
    }
    if ((m = /^(?:npx|npm|claude|command|args|env)\b/.exec(rest))) {
      push("keyword", m[0]);
      i += m[0].length;
      continue;
    }
    if ((m = /^-{1,2}[A-Za-z][\w-]*/.exec(rest))) {
      push("flag", m[0]);
      i += m[0].length;
      continue;
    }
    if (/^[{}[\],=:]/.test(rest)) {
      push("punct", rest[0]);
      i += 1;
      continue;
    }
    push("plain", rest[0]);
    i += 1;
  }
  return tokens;
}

function CodeBlock({
  code,
  lang,
  creds,
  copyLabel,
  copiedLabel,
}: {
  code: string;
  lang: Lang;
  creds: string[];
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const tokens = useMemo(() => tokenize(code, lang, creds), [code, lang, creds]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="relative rounded-xl bg-ink overflow-hidden">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copyLabel}
        className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-white/80 bg-white/10 hover:bg-white/20 transition-colors"
      >
        {copied ? copiedLabel : copyLabel}
      </button>
      <pre className="font-mono text-[12.5px] leading-[1.8] p-5 pr-24 overflow-x-auto whitespace-pre">
        <code>
          {tokens.map((t, idx) => (
            <span key={idx} style={TOKEN_STYLE[t.type]}>
              {t.text}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export function McpInstaller({ locale = "en" }: { locale?: Locale }) {
  const t = COPY[locale];
  const [active, setActive] = useState<TabId>("claude-desktop");

  // The visitor fills in their own API key + Site ID by hand, so the snippets
  // keep the placeholders — highlighted below so it's clear what to replace.
  const creds = [PLACEHOLDER_KEY, PLACEHOLDER_SITE];

  const tab = t.tabs.find((x) => x.id === active) ?? t.tabs[0];

  return (
    <section className="py-24 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
        <div className="max-w-[44rem] mb-10">
          <span className="eyebrow mb-5">{t.eyebrow}</span>
          <h2 className="h-section mt-5">{t.title}</h2>
          <p className="text-[16px] leading-[1.6] text-ink-soft mt-5">{t.intro}</p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label={t.title}
          className="flex flex-wrap gap-2 mb-6"
        >
          {t.tabs.map((x) => {
            const selected = x.id === active;
            return (
              <button
                key={x.id}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setActive(x.id)}
                className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors ${
                  selected
                    ? "bg-ink text-white"
                    : "bg-white border border-warm-100 text-ink-soft hover:text-ink hover:border-warm-200"
                }`}
              >
                {x.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          className="bg-white border border-warm-100 rounded-xl p-6 md:p-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {tab.badge && (
              <span
                className="font-mono text-[10.5px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded text-ink"
                style={{ backgroundColor: "#E8B84B" }}
              >
                {tab.badge}
              </span>
            )}
            {tab.node && (
              <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.06em] text-ink-soft border border-warm-200 rounded px-2 py-1">
                {t.nodeNote}
              </span>
            )}
          </div>

          <p className="text-[14.5px] leading-[1.6] text-ink-2 mb-5 max-w-[60ch]">
            {tab.desc}
          </p>

          {tab.kind === "download" ? (
            <a
              href={MCPB_URL}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-[14.5px] font-semibold no-underline bg-ink text-white hover:bg-brand transition-colors"
            >
              {t.download}
              <span aria-hidden>↓</span>
            </a>
          ) : (
            <CodeBlock
              code={tab.code!}
              lang={tab.lang!}
              creds={creds}
              copyLabel={t.copy}
              copiedLabel={t.copied}
            />
          )}
        </div>
      </div>
    </section>
  );
}
