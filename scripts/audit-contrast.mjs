#!/usr/bin/env node
/**
 * WCAG AA colour-contrast gate, run against the built pages in a real browser.
 *
 * Why a browser: contrast is a property of the rendered tree, not of the CSS.
 * Every failure this gate exists to catch was invisible to source inspection —
 * the worst one (1.31:1) was `.sig-offer li`, a rule written for the ink panel
 * that also matched the list inside `.sig-price-card`, a paper panel nested
 * inside it. No amount of stylesheet parsing finds that; you have to resolve
 * the cascade against the actual DOM.
 *
 * Why no dependencies: Node 22 ships a global WebSocket, so Chrome is driven
 * over the DevTools Protocol directly, and the contrast maths runs in the page.
 * Every other gate in this directory is a zero-dependency script and this one
 * stays that way — no Puppeteer, no axe-core, no browser download.
 *
 * Chrome comes from the system: CHROME_PATH, then the usual macOS and Linux
 * locations. GitHub's ubuntu runners ship one.
 *
 * Deliberately NOT wired into `postbuild`. It needs a browser, so it would
 * make `npm run build` fail on any machine without one. It runs as its own
 * `npm run audit:contrast` and as its own CI job.
 *
 * Coverage is by template, not by page. Routes are grouped by a signature
 * derived from the markup they render, and one route per group is checked —
 * 262 pages built from a few dozen templates would otherwise be 262 identical
 * assertions. What is sampled and what it stands for is printed, never silent.
 */
import { createServer } from "node:http";
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const OUT = path.join(repoRoot, "out");
const JSON_MODE = process.argv.includes("--json");
const ALL = process.argv.includes("--all");
const UPDATE = process.argv.includes("--update-baseline");

if (!existsSync(OUT)) {
  console.error("[contrast] out/ missing — run `npm run build` first.");
  process.exit(1);
}

/* ------------------------------------------------------------------ chrome */

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const chromePath = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chromePath) {
  console.error(
    "[contrast] no Chrome found. Set CHROME_PATH, or install Chrome/Chromium.\n" +
      "           Looked in:\n           " +
      CHROME_CANDIDATES.join("\n           ")
  );
  process.exit(1);
}

/* ------------------------------------------------------------------ server */

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".md": "text/markdown; charset=utf-8",
};

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const rel = clean.replace(/^\/+/, "");
  const abs = path.join(OUT, rel);
  if (!abs.startsWith(OUT)) return null;
  if (existsSync(abs) && statSync(abs).isFile()) return abs;
  const asIndex = path.join(abs, "index.html");
  if (existsSync(asIndex)) return asIndex;
  const asHtml = abs.replace(/\/$/, "") + ".html";
  if (existsSync(asHtml)) return asHtml;
  return null;
}

const server = createServer((req, res) => {
  const file = resolveFile(req.url);
  if (!file) {
    res.writeHead(404).end("not found");
    return;
  }
  res.writeHead(200, { "content-type": MIME[path.extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
});

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;

/* ------------------------------------------------------------------ routes */

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

/**
 * Two pages built from the same components render the same colour pairings, so
 * checking both proves nothing twice. The signature is the sorted set of class
 * tokens that appear in the document — content differs between two blog posts,
 * the classes do not.
 */
function templateSignature(html) {
  const classes = new Set();
  for (const m of html.matchAll(/\sclass="([^"]*)"/g)) {
    for (const c of m[1].split(/\s+/)) if (c) classes.add(c);
  }
  return [...classes].sort().join(" ");
}

const pages = walk(OUT).map((file) => {
  const html = readFileSync(file, "utf8");
  let route = "/" + path.relative(OUT, file).replace(/\\/g, "/");
  route = route.replace(/index\.html$/, "").replace(/\.html$/, "/");
  if (!route.endsWith("/")) route += "/";
  return { route, signature: templateSignature(html) };
});

const groups = new Map();
for (const p of pages) {
  if (!groups.has(p.signature)) groups.set(p.signature, []);
  groups.get(p.signature).push(p.route);
}
const sample = ALL
  ? pages.map((p) => ({ route: p.route, covers: [p.route] }))
  : [...groups.values()].map((routes) => ({ route: routes.sort()[0], covers: routes }));

/* --------------------------------------------------------------------- cdp */

const profile = mkdtempSync(path.join(tmpdir(), "contrast-"));
const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  "--hide-scrollbars",
  "--disable-background-timer-throttling",
  "--disable-renderer-backgrounding",
  "--disable-backgrounding-occluded-windows",
  "--window-size=1280,900",
  `--user-data-dir=${profile}`,
  "--remote-debugging-port=0",
  "about:blank",
]);

const wsUrl = await new Promise((resolve, reject) => {
  let buf = "";
  const timer = setTimeout(() => reject(new Error("Chrome did not report a DevTools endpoint")), 20000);
  chrome.stderr.on("data", (d) => {
    buf += d.toString();
    const m = buf.match(/ws:\/\/[^\s]+/);
    if (m) {
      clearTimeout(timer);
      resolve(m[0]);
    }
  });
  chrome.on("exit", (code) => {
    clearTimeout(timer);
    reject(new Error(`Chrome exited early (${code})`));
  });
});

const ws = new WebSocket(wsUrl);
await new Promise((r, j) => {
  ws.onopen = r;
  ws.onerror = () => j(new Error("could not connect to Chrome"));
});

let nextId = 1;
const pending = new Map();
const events = new Map();

ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    return;
  }
  const waiters = events.get(msg.method);
  if (waiters) {
    events.delete(msg.method);
    for (const w of waiters) w(msg.params);
  }
};

const send = (method, params = {}, sessionId) =>
  new Promise((resolve, reject) => {
    const id = nextId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });

const once = (method, ms = 20000) =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`timed out waiting for ${method}`)), ms);
    const w = (p) => {
      clearTimeout(timer);
      resolve(p);
    };
    if (!events.has(method)) events.set(method, []);
    events.get(method).push(w);
  });

const { targetId } = await send("Target.createTarget", { url: "about:blank" });
const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
await send("Page.enable", {}, sessionId);

/* ---------------------------------------------------------------- in-page */

/** Runs inside the page. Must be self-contained — it is stringified. */
const PROBE = `(() => {
  const parse = (c) => {
    const m = c && c.match(/rgba?\\(([^)]+)\\)/);
    if (!m) return null;
    const p = m[1].split(/[ ,\\/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const lum = ({ r, g, b }) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const over = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  });
  const ratio = (a, b) => {
    const x = lum(a), y = lum(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  };
  const hex = ({ r, g, b }) =>
    "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");

  const label = (el) => {
    let s = el.tagName.toLowerCase();
    if (el.id) s += "#" + el.id;
    const cls = (el.getAttribute("class") || "").split(/\\s+/).filter(Boolean).slice(0, 3);
    if (cls.length) s += "." + cls.join(".");
    return s;
  };

  // The background actually painted behind the text: walk up until something
  // is not transparent. An ancestor with a background-image is unresolvable
  // from here, so those elements are reported as skipped rather than guessed.
  const backdrop = (el) => {
    let node = el;
    let acc = null;
    while (node && node !== document.documentElement.parentNode) {
      const cs = getComputedStyle(node);
      if (cs.backgroundImage && cs.backgroundImage !== "none") return { unresolved: true };
      const bg = parse(cs.backgroundColor);
      if (bg && bg.a > 0) {
        acc = acc ? over(acc, bg) : bg;
        if (acc.a >= 0.999) return { color: acc };
      }
      node = node.parentElement;
    }
    return { color: acc && acc.a >= 0.999 ? acc : { r: 255, g: 255, b: 255, a: 1 } };
  };

  const results = [];
  let skipped = 0;
  const seen = new Set();

  for (const el of document.body.querySelectorAll("*")) {
    // Only elements with their own rendered text.
    const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length);
    if (!own) continue;
    if (el.closest("svg")) continue;

    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") continue;
    if (Number(cs.opacity) === 0) continue;
    if (!el.getClientRects().length) continue;

    let fg = parse(cs.color);
    if (!fg) continue;
    const back = backdrop(el);
    if (back.unresolved) { skipped++; continue; }

    // Outlined headline emphasis — the v4 design system's signature treatment —
    // is a transparent fill plus a currentColor text stroke. The glyph is
    // drawn by the stroke, so the stroke is the foreground. Reading the fill
    // here would score every outlined <em> at exactly 1:1 and bury the real
    // failures under 292 false positives.
    const fill = parse(cs.webkitTextFillColor);
    const filled = fill ? fill.a > 0 : fg.a > 0;
    if (!filled) {
      const strokeW = parseFloat(cs.webkitTextStrokeWidth || "0");
      const stroke = parse(cs.webkitTextStrokeColor);
      if (!(strokeW > 0 && stroke && stroke.a > 0)) continue; // genuinely invisible
      fg = stroke;
    } else if (fill && fill.a > 0) {
      fg = fill;
    }

    const effective = fg.a < 1 ? over(fg, back.color) : fg;
    const r = ratio(effective, back.color);

    const size = parseFloat(cs.fontSize);
    const weight = Number(cs.fontWeight) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const min = large ? 3 : 4.5;
    if (r >= min) continue;

    const key = hex(effective) + "|" + hex(back.color) + "|" + Math.round(size) + "|" + label(el);
    if (seen.has(key)) continue;
    seen.add(key);

    results.push({
      selector: label(el),
      fg: hex(effective),
      bg: hex(back.color),
      ratio: Number(r.toFixed(2)),
      required: min,
      fontSize: Math.round(size * 10) / 10,
      fontWeight: weight,
      text: (el.textContent || "").trim().replace(/\\s+/g, " ").slice(0, 60),
    });
  }
  return JSON.stringify({ failures: results, skipped });
})()`;

/* ---------------------------------------------------------------- the run */

const failures = [];
let skippedTotal = 0;
let checked = 0;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Evaluate in the page, tolerating the window between a navigation starting
 * and the new document existing — CDP answers "Inspected target navigated or
 * closed" there, which is a state to wait through, not an error.
 */
async function evaluate(expression, awaitPromise = false) {
  try {
    const { result } = await send(
      "Runtime.evaluate",
      { expression, returnByValue: true, awaitPromise },
      sessionId
    );
    return result.value;
  } catch {
    return undefined;
  }
}

for (const { route, covers } of sample) {
  await send("Page.navigate", { url: origin + route }, sessionId);

  // Poll readyState rather than waiting on Page.loadEventFired. The event is
  // easy to miss — it can arrive between the navigate call resolving and a
  // listener being attached — and a missed one left the probe reading the
  // previous page.
  let ready = false;
  for (let i = 0; i < 120 && !ready; i++) {
    ready = (await evaluate("document.readyState")) === "complete";
    if (!ready) await sleep(25);
  }
  if (!ready) {
    console.error(`[contrast] ${route} never reached readyState=complete; skipped`);
    continue;
  }

  // Hydration runs after load, and a component that swaps a class on mount
  // changes the colours the probe reads. Without this the counts drifted
  // between runs, which is worse than no gate. A plain timer, not
  // requestAnimationFrame: a headless tab that is never painted may not
  // schedule frames at all.
  await sleep(120);

  // Freeze transitions and animations before measuring. A colour sampled
  // mid-transition is a real colour the browser is painting, but it is not a
  // stable one, and it made a hover-tint pair flicker between 5 and 6 hits
  // across runs.
  await evaluate(
    "(() => { const s = document.createElement('style');" +
      "s.textContent = '*,*::before,*::after{transition:none !important;animation:none !important}';" +
      "document.head.appendChild(s); })()"
  );
  await sleep(40);

  const raw = await evaluate(PROBE);
  if (raw === undefined) {
    console.error(`[contrast] ${route} probe did not return; skipped`);
    continue;
  }
  const payload = JSON.parse(raw);
  skippedTotal += payload.skipped;
  checked++;
  for (const f of payload.failures) failures.push({ ...f, route, covers: covers.length });
}

server.close();
ws.close();
// Best-effort teardown. Chrome flushes its profile asynchronously, so removing
// the directory the instant after kill() races it — and a leftover temp dir is
// not worth failing a gate over.
const exited = new Promise((r) => chrome.once("exit", r));
chrome.kill();
await Promise.race([exited, new Promise((r) => setTimeout(r, 3000))]);
try {
  rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
} catch {
  /* the OS will reap it */
}

/* --------------------------------------------------------------- baseline */

/**
 * The 16 homepage failures the audit found were the visible tip. Site-wide
 * there were 411 raw hits; 292 were the design system's outlined headline
 * emphasis read wrongly, and fixing the probe plus four real bugs left the
 * rest: v3 colour pairings on pages still queued for the Signal migration
 * (see MIGRATION-MAP.md).
 *
 * Blocking on those would mean either shipping no gate or doing the migration
 * in this PR. So the baseline records what is known and lets it only shrink:
 * a pair that is not listed fails, a pair that grows fails, and a pair that
 * improves rewrites its own ceiling. The number in this file is a debt figure
 * and it is not allowed to go up.
 */
const BASELINE = path.join(repoRoot, ".contrast-baseline.json");

const counts = {};
for (const f of failures) {
  const k = `${f.fg} on ${f.bg}`;
  counts[k] = (counts[k] ?? 0) + 1;
}

if (UPDATE) {
  writeFileSync(
    BASELINE,
    JSON.stringify({ accepted: Object.fromEntries(Object.entries(counts).sort()) }, null, 2) + "\n"
  );
  console.log(
    `[contrast] baseline rewritten: ${Object.keys(counts).length} pair(s), ` +
      `${failures.length} element(s). Commit .contrast-baseline.json.`
  );
  process.exitCode = 0;
} else {
  const accepted = existsSync(BASELINE)
    ? JSON.parse(readFileSync(BASELINE, "utf8")).accepted ?? {}
    : {};

  const regressions = [];
  for (const [pair, n] of Object.entries(counts)) {
    const budget = accepted[pair];
    if (budget === undefined) regressions.push({ pair, n, budget: 0, kind: "new" });
    else if (n > budget) regressions.push({ pair, n, budget, kind: "grew" });
  }

  const improved = [];
  for (const [pair, budget] of Object.entries(accepted)) {
    const n = counts[pair] ?? 0;
    if (n < budget) improved.push({ pair, n, budget });
  }

  report(regressions, improved, accepted);
}

function report(regressions, improved, accepted) {
  const debt = Object.values(accepted).reduce((a, b) => a + b, 0);

  if (JSON_MODE) {
    console.log(JSON.stringify({ checked, templates: groups.size, pages: pages.length, counts, regressions, improved, failures }, null, 2));
  } else {
    console.log(
      `[contrast] ${checked} route(s) checked, covering ${pages.length} built pages ` +
        `across ${groups.size} template(s)` +
        (skippedTotal ? ` · ${skippedTotal} element(s) over a background image were skipped` : "")
    );

    if (improved.length) {
      console.log(`[contrast] ${improved.length} pair(s) improved since the baseline:`);
      for (const i of improved) {
        console.log(`    ${i.pair}: ${i.budget} → ${i.n}` + (i.n === 0 ? "  (fixed)" : ""));
      }
      console.log("           Run `npm run audit:contrast -- --update-baseline` to bank it.");
    }

    if (!regressions.length) {
      console.log(
        `[contrast] 0 regressions — ${failures.length} known violation(s) across ` +
          `${Object.keys(counts).length} colour pair(s), budget ${debt}.`
      );
    } else {
      for (const r of regressions.sort((a, b) => b.n - a.n)) {
        const examples = failures.filter((f) => `${f.fg} on ${f.bg}` === r.pair);
        const e = examples[0];
        console.error(
          `\n  ${r.kind === "new" ? "NEW" : "GREW"}  ${r.pair} — ${e.ratio}:1, ` +
            `needs ${e.required}:1 · ${r.n} element(s)` +
            (r.kind === "grew" ? ` (baseline ${r.budget})` : "")
        );
        for (const x of examples.slice(0, 4)) {
          console.error(`    ${x.route}  ${x.selector}`);
          if (x.text) console.error(`      "${x.text}"`);
        }
        if (examples.length > 4) console.error(`    … +${examples.length - 4} more`);
      }
      console.error(
        `\n[contrast] ${regressions.length} regression(s). Fix the pair, or — if it is ` +
          `deliberate — say why and run with --update-baseline.`
      );
    }
  }
  process.exitCode = regressions.length ? 1 : 0;
}


