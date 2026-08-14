import Link from "next/link";
import { EditorialSectionNav } from "./EditorialSectionNav";
import "./growth-index-signal.css";

function Arrow() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h11M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const tracks = [
  { number: "01", title: "See the whole funnel", description: "Know what happened before you decide where to spend more.", href: "/complete-data/", label: "Complete data" },
  { number: "02", title: "Attribute revenue", description: "Connect campaigns, conversions, and commercial outcomes without guessing.", href: "/use-cases/revenue-attribution/", label: "Revenue attribution" },
  { number: "03", title: "Protect conversion", description: "Remove measurement blind spots without adding more friction to the journey.", href: "/use-cases/conversion-tracking/", label: "Conversion tracking" },
  { number: "04", title: "Change the stack", description: "Move away from incomplete reporting with a plan your team can defend.", href: "/use-cases/ga4-migration/", label: "GA4 migration" },
];

const paths = [
  { label: "Understand", description: "The measurement problem", href: "/blog/what-is-data-loss-in-analytics/" },
  { label: "Diagnose", description: "Your missing traffic", href: "/data-loss-calculator/" },
  { label: "Apply", description: "A better operating model", href: "/how-it-works/" },
  { label: "Verify", description: "The numbers with your team", href: "/demo/" },
];

export function GrowthIndexSignal() {
  return (
    <div className="sig-growth-page">
      <EditorialSectionNav current="growth" />

      <section className="sig-growth-hero">
        <div className="sig-growth-hero-copy">
          <nav className="sig-growth-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Growth</span></nav>
          <p className="sig-growth-tag">Growth / practical systems / evidence</p>
          <h1>Growth gets<br />expensive when<br /><em>the evidence is thin.</em></h1>
          <p className="sig-growth-lede">Practical thinking for digital teams that need to grow revenue, defend the number, and know what changed.</p>
          <div className="sig-growth-actions"><a className="sig-growth-button" href="#tracks">Choose a growth problem <Arrow /></a><Link className="sig-growth-text-link" href="/data-loss-calculator/">Start with your data →</Link></div>
        </div>

        <aside className="sig-growth-board" aria-label="Growth editorial desk">
          <div className="sig-growth-board-top"><span>Growth desk</span><span>Open access</span></div>
          <div className="sig-growth-board-main"><span className="sig-growth-live"><i /> Built for operators</span><strong>04</strong><p>ways to make the next decision more defensible</p></div>
          <dl><div><dt>Primary audience</dt><dd>Digital teams</dd></div><div><dt>Point of view</dt><dd>Evidence first</dd></div><div><dt>Commercial bias</dt><dd>Revenue, not vanity</dd></div></dl>
        </aside>
      </section>

      <section className="sig-growth-principles" aria-label="Growth principles">
        <div><span>01</span><p><b>Measure reality.</b> Reported traffic is not the same as real demand.</p></div>
        <div><span>02</span><p><b>Follow revenue.</b> A metric matters when it changes a decision.</p></div>
        <div><span>03</span><p><b>Keep the method visible.</b> Growth compounds when teams trust the number.</p></div>
      </section>

      <section className="sig-growth-tracks" id="tracks">
        <div className="sig-growth-section-head"><div><p className="sig-growth-tag">Choose your problem</p><h2>Four ways to make growth<br /><em>less speculative.</em></h2></div><p>Start with the decision in front of you. Each track connects the commercial question to the measurement system underneath it.</p></div>
        <div className="sig-growth-track-grid">{tracks.map((track) => <Link href={track.href} key={track.number}><div className="sig-growth-track-meta"><span>{track.number}</span><span>{track.label}</span></div><h3>{track.title}</h3><p>{track.description}</p><b>Explore the track <Arrow /></b></Link>)}</div>
      </section>

      <section className="sig-growth-paths">
        <div className="sig-growth-section-head"><div><p className="sig-growth-tag sig-growth-tag-light">A reading path</p><h2>From a question<br /><em>to a decision.</em></h2></div><p>You do not need another dashboard first. You need a sequence that tells you what to understand, test, and change next.</p></div>
        <ol>{paths.map((path, index) => <li key={path.label}><Link href={path.href}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{path.label}</p><h3>{path.description}</h3></div><Arrow /></Link></li>)}</ol>
      </section>

      <section className="sig-growth-final"><p className="sig-growth-tag">From growth theory to evidence</p><h2>Find the gap<br /><em>before it costs you.</em></h2><p>Use the calculator to estimate how much of your traffic your current analytics cannot see, then decide what deserves attention.</p><div className="sig-growth-actions"><Link className="sig-growth-button" href="/data-loss-calculator/">Calculate your data loss <Arrow /></Link><Link className="sig-growth-text-link" href="/demo/">Book a walkthrough →</Link></div></section>
    </div>
  );
}
