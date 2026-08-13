import { SiteFooter, SiteHeader } from "./components/site-shell";

const proofChecks = [
  { name: "Keep your current stack", detail: "Run both measurement layers side by side." },
  { name: "Name the baseline", detail: "Use recorded backend revenue for the comparison." },
  { name: "Declare the model", detail: "Inspect how acquisition credit is assigned." },
  { name: "Hold the setup constant", detail: "Compare the same events over the same period." },
  { name: "Make the decision", detail: "Keep the setup that produces supportable evidence." },
  { name: "State the caveat", detail: "Publish what the comparison does not establish." },
];

const integrations = [
  { name: "Shopify", src: "/logos/brands/shopify.svg", type: "eCommerce" },
  { name: "WordPress", src: "/logos/brands/wordpress.svg", type: "eCommerce" },
  { name: "WooCommerce", src: "/logos/brands/woocommerce.svg", type: "eCommerce" },
  { name: "Magento", src: "/logos/brands/magento.svg", type: "eCommerce" },
  { name: "PrestaShop", src: "/logos/brands/prestashop.svg", type: "eCommerce" },
  { name: "BigQuery", src: "/logos/brands/bigquery.svg", type: "Data & BI" },
];

const outcomes = [
  {
    number: "01",
    title: "Protect a productive channel before you cut it.",
    body: "See how consent-shaped measurement changes the channel ranking before next week’s budget moves.",
    signal: "Budget → evidence",
  },
  {
    number: "02",
    title: "Give the room a number it can inspect.",
    body: "Marketing, finance and your agency can reconcile the same measurement against recorded backend revenue.",
    signal: "Debate → decision",
  },
  {
    number: "03",
    title: "Fix today, not tomorrow.",
    body: "Current revenue reporting shows which campaigns receive recorded sales while the budget can still move.",
    signal: "Report → action",
  },
];

const faqs = [
  {
    question: "How can measurement avoid analytics-cookie dependence?",
    answer:
      "SealMetrics is built for aggregate measurement without analytics cookies, persistent visitor identifiers or fingerprinting. That architecture does not depend on acceptance of analytics cookies for the defined measurement use case. Your legal basis still depends on purpose, configuration, jurisdiction and the rest of your processing.",
  },
  {
    question: "Do we need to remove GA4?",
    answer:
      "No. Run SealMetrics beside GA4, define a comparison period and check both against the same backend total before you change the stack.",
  },
  {
    question: "Will the numbers match our store?",
    answer:
      "That is the test. Configure the relevant commerce events, compare the reported total with your store or CRM and investigate the remaining difference. Reconciliation depends on the events and backend data implemented.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Start with one first-party signal and keep the current stack in place. Timing depends on the platform, event scope and commerce integration; the first useful comparison starts once both systems are measuring the same defined events.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function BrandLockup({ showcase = false }: { showcase?: boolean }) {
  return (
    <span className={`brand-lockup${showcase ? " brand-lockup-showcase" : ""}`} aria-label="sealmetrics">
      <span className="brand-seal" aria-hidden="true">seal</span><span className="brand-metrics" aria-hidden="true">metrics</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <div className="signal-bar" aria-hidden="true">
        <span />
        LIVE SIGNAL
        <b>AGGREGATE</b>
        SIGNAL OBSERVED
      </div>

      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>Analytics for people who inspect the inputs</span> No analytics cookies · no modeled fill-ins presented as observation</p>
          <h1>
            Nice dashboard.<br />
            Shame about <em>the inputs it never saw.</em>
          </h1>
          <p className="hero-intro">
            SealMetrics measures eligible aggregate traffic and recorded outcomes without analytics cookies or visitor profiles. Run it beside your current analytics and compare both against the revenue your backend recorded.
          </p>
          <div className="hero-actions">
            <a className="button button-acid" href="https://my.sealmetrics.com/register">
              Start 14-day free trial <Arrow />
            </a>
            <a className="text-link" href="/demo/">
              Show me what&apos;s missing <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="micro-proof">Side-by-side deployment · keep your current stack · verify against your backend</p>
        </div>

        <div className="hero-board" aria-label="Illustrative comparison between consent-shaped analytics and aggregate measurement">
          <div className="board-topline">
            <span>ILLUSTRATIVE EXAMPLE · NOT A LIVE ACCOUNT</span>
            <span className="live"><i /> LIVE · 13:00</span>
          </div>
          <div className="board-kpi">
            <div>
              <span>Backend-recorded revenue</span>
              <strong>€342K</strong>
            </div>
            <span className="delta">+58% visible</span>
          </div>
          <div className="chart-area" aria-hidden="true">
            <div className="chart-label label-ga">GA4 · consent-shaped</div>
            <div className="chart-label label-seal">SealMetrics · aggregate view</div>
            <div className="chart-grid" />
            <div className="bar bar-1"><span /></div>
            <div className="bar bar-2"><span /></div>
            <div className="bar bar-3"><span /></div>
            <div className="bar bar-4"><span /></div>
            <div className="bar bar-5"><span /></div>
          </div>
          <div className="decision-card">
            <span>NEXT BEST MOVE</span>
            <strong>Move budget to PMax_Catalog.</strong>
            <p>Under this example&apos;s declared model, it receives 3.2× more recorded revenue than GA4 reports.</p>
          </div>
          <div className="board-footer">
            <span><i className="dot dot-acid" /> eligible events observed</span>
            <span><i className="dot dot-gray" /> consent-shaped comparison</span>
          </div>
        </div>
      </section>

      <section className="logo-rail" aria-label="How to verify SealMetrics">
        <p>THE CLAIM IS ONLY AS GOOD AS THE TEST</p>
        <div className="client-logos">
          {proofChecks.map((check) => (
            <div className="client-logo" key={check.name}>
              <strong>{check.name}</strong>
              <span>{check.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="manifesto" id="product">
        <p className="section-tag">UNCOMFORTABLE TRUTH #01</p>
        <div className="manifesto-grid">
          <h2>Your ROAS isn&apos;t wrong.<br /><em>It&apos;s incomplete.</em></h2>
          <div>
            <p className="lead">Those missing sales already happened. Your attribution model may have given another source the credit.</p>
            <p>That distortion can change ROAS, hide productive channels inside “Direct,” and make smart teams optimize a ranking that does not reconcile with backend revenue.</p>
          </div>
        </div>
        <div className="comparison">
          <article className="comparison-muted">
            <div className="comparison-head"><span>CONSENT-SHAPED VIEW</span><b>PARTIAL</b></div>
            <h3>A confident answer built on missing evidence.</h3>
            <ul>
              <li>Consent rejection can remove visits</li>
              <li>Channels can inherit unsupported revenue credit</li>
              <li>Teams reconcile conflicting totals</li>
            </ul>
            <div className="coverage"><span style={{ width: "46%" }} /></div>
          </article>
          <article className="comparison-acid">
            <div className="comparison-head"><span>SEALMETRICS</span><b>AGGREGATE</b></div>
            <h3>The slightly less glamorous thing: evidence.</h3>
            <ul>
              <li>Eligible events are not removed by analytics-cookie rejection</li>
              <li>Recorded sales receive credit under a declared model</li>
              <li>Reported revenue can be checked against the backend</li>
            </ul>
            <div className="coverage"><span style={{ width: "100%" }} /></div>
          </article>
        </div>
      </section>

      <section className="product-reality">
        <div className="section-heading real-heading">
          <p className="section-tag">THE PRODUCT, FOR REAL</p>
          <h2>Real data is only useful<br /><em>when it changes the move.</em></h2>
        </div>

        <article className="real-block roas-story">
          <div className="real-copy">
            <span>CONSENTLESS ANALYTICS</span>
            <h3>Your ROAS may not be bad.<br />Your measurement may be partial.</h3>
            <p>When eligible conversions remain observable, productive channels are less likely to disappear inside “Direct” or a consent-shaped subset.</p>
            <a href="/consentless-analytics/">How consentless analytics works <Arrow /></a>
          </div>
          <div className="roas-card">
            <div className="module-top"><span>SAME CAMPAIGN · SAME SPEND</span><span>REALITY CHECK</span></div>
            <div className="roas-row roas-muted">
              <div><span>ROAS you see today</span><small>consent-gated analytics</small></div><strong>2.4×</strong>
            </div>
            <div className="roas-row roas-real">
              <div><span>Aggregate ROAS view</span><small>eligible observed sales</small></div><strong>4.1×</strong>
            </div>
            <p>Illustrative example — not a live account. The difference must be checked against backend revenue.</p>
          </div>
        </article>

        <div className="product-cards">
          <article className="product-card promo-card">
            <div className="module-top"><span>PROMO DAY · 13:00</span><span className="module-live">● LIVE</span></div>
            <h3>Know how the day is going <em>while it happens.</em></h3>
            <p>Not a post-mortem tomorrow. A decision while today&apos;s budget can still move.</p>
            <div className="promo-stats">
              <div><span>Revenue so far</span><strong>€96,204</strong><small>on pace vs last Promo Day</small></div>
              <div><span>Best campaign</span><strong>PMax_Catalog</strong><small>€31,540 · scale it now</small></div>
              <div><span>Underperformer</span><strong>DemandGen</strong><small>9,230 clicks · 2 sales</small></div>
              <div><span>Conversion rate</span><strong>1.10%</strong><small>+0.3 pts since 11:00</small></div>
            </div>
            <div className="decision-strip"><b>DECISION AT 13:00</b><span>Kill DemandGen. Move budget to PMax_Catalog.</span></div>
            <small className="example-note">Illustrative example — not a live account.</small>
          </article>

          <article className="product-card lens-card">
            <div className="module-top"><span>LENS AI</span><span>DEFINED METRICS · TRACEABLE SOURCE</span></div>
            <h3>Ask the questions that <em>move the number.</em></h3>
            <p>LENS answers plain-language questions against defined metrics. Inspect the source before the answer moves budget.</p>
            <div className="lens-questions">
              <div><span>GROWTH</span><b>Which products leak revenue?</b><p>77% of premium e-bike carts don&apos;t convert. Add financing at product level.</p></div>
              <div><span>COST</span><b>Where am I burning budget?</b><p>DemandGen: 9,230 clicks, 2 sales. Reallocate to PMax_Catalog.</p></div>
            </div>
            <a className="lens-link" href="https://lens-lite.sealmetrics.com">Ask LENS on demo data <Arrow /></a>
          </article>
        </div>
      </section>

      <section className="outcomes">
        <div className="section-heading">
          <p className="section-tag">WHAT BETTER EVIDENCE IS FOR</p>
          <h2>Not more data.<br /><em>Fewer wrong decisions.</em></h2>
        </div>
        <div className="outcome-grid">
          {outcomes.map((outcome) => (
            <article key={outcome.number}>
              <span className="outcome-number">{outcome.number}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.body}</p>
              <div>{outcome.signal} <span aria-hidden="true">→</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="point-of-view">
        <p className="section-tag">OUR POINT OF VIEW</p>
        <div className="pov-grid">
          <div className="pov-statement">
            <BrandLockup showcase />
            <h2>We don&apos;t build visitor profiles.<br /><em>We measure eligible aggregate events.</em></h2>
          </div>
          <div>
            <p>More data is not the goal. Better decisions are. That means minimizing personal-data collection, preserving useful aggregate evidence and making the result inspectable by the people responsible for the number.</p>
            <p>Privacy-oriented architecture and useful measurement can reinforce each other. The exact outcome still depends on purpose, configuration and the events implemented.</p>
            <span>SEALMETRICS / THE ANALYTICS OF REALITY</span>
          </div>
        </div>
      </section>

      <section className="proof" id="proof">
        <div className="proof-quote">
          <p className="section-tag light">PROOF, NOT PROMISES</p>
          <blockquote>
            “If the backend does not confirm a meaningful difference, <em>keep your current setup.</em>”
          </blockquote>
          <p className="quote-source"><b>The Fair Test</b><br />A comparison method, not a testimonial</p>
        </div>
        <div className="proof-numbers">
          <article><strong>01</strong><p>define the eligible events and attribution model</p></article>
          <article><strong>02</strong><p>run both tools over the same comparison period</p></article>
          <article><strong>03</strong><p>reconcile reported revenue with the same backend</p></article>
          <a href="/case-studies/">Review the evidence standard <Arrow /></a>
        </div>
      </section>

      <section className="how">
        <div className="section-heading">
          <p className="section-tag">NO MAGIC. THAT&apos;S THE POINT.</p>
          <h2>No magic.<br /><em>A method you can inspect.</em></h2>
        </div>
        <div className="how-flow">
          <article>
            <span>01 / OBSERVE</span>
            <div className="flow-icon">•••</div>
            <h3>Collect aggregate events</h3>
            <p>Built without analytics cookies, persistent visitor IDs or fingerprinting.</p>
          </article>
          <b aria-hidden="true">→</b>
          <article>
            <span>02 / CONNECT</span>
            <div className="flow-icon">+ +</div>
            <h3>Match traffic to revenue</h3>
            <p>Observed sales receive credit under a declared attribution model, then the total can be reconciled with the backend.</p>
          </article>
          <b aria-hidden="true">→</b>
          <article>
            <span>03 / DECIDE</span>
            <div className="flow-icon">↗</div>
            <h3>Act on supportable evidence</h3>
            <p>Use current reporting to challenge spend, investigate anomalies and decide what to test next.</p>
          </article>
        </div>
      </section>

      <section className="integrations">
        <div className="integrations-copy">
          <p className="section-tag">DIRECT CONNECTORS</p>
          <h2>Plugs into the stack<br /><em>you already run.</em></h2>
          <p>Use a native connector where available, or the API for a custom implementation. Required engineering depends on the platform and event scope.</p>
          <a href="/integrations/">See all integrations <Arrow /></a>
        </div>
        <div className="integration-grid">
          {integrations.map((integration) => (
            <article key={integration.name}>
              <img src={integration.src} alt={integration.name} />
              <span>{integration.type}</span>
            </article>
          ))}
          <article className="text-integration"><b>OpenCart</b><span>eCommerce</span></article>
          <article className="text-integration"><b>Data Studio</b><span>Data & BI</span></article>
        </div>
      </section>

      <section className="offer" id="pricing">
        <div className="offer-copy">
          <p className="section-tag light">A FAIR TEST</p>
          <h2>Don&apos;t take our word for it.<br /><em>Ask your store.</em></h2>
          <p>Run SealMetrics beside GA4 for 14 days. Define the eligible events and attribution model, then compare both against the sales your store recorded. Keep the setup that produces the more useful, supportable result.</p>
          <ul>
            <li>One first-party signal · implementation depends on event scope</li>
            <li>Founder-led onboarding on Scale</li>
            <li>EU-hosted in Dublin</li>
          </ul>
        </div>
        <div className="price-card">
          <div><span>GROWTH</span><span className="popular">14-DAY SIDE-BY-SIDE TRIAL</span></div>
          <p>For teams ready to test a separate aggregate measurement layer.</p>
          <strong><sup>€</sup>499<small>/mo</small></strong>
          <span className="billing">Billed annually · 2 months free</span>
          <ul>
            <li>5M human events / month</li>
            <li>3 domains</li>
            <li>Full MCP + BigQuery + API</li>
            <li>GA4 side-by-side comparison</li>
          </ul>
          <a className="button button-acid full" href="https://my.sealmetrics.com/register">Start 14-day trial <Arrow /></a>
          <small>14-day trial. Review the applicable billing terms before starting.</small>
        </div>
      </section>

      <section className="faq">
        <div>
          <p className="section-tag">REASONABLE DOUBTS</p>
          <h2>You should question<br /><em>your analytics.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="section-tag">ONE LAST THING</p>
        <h2>Reality is already there.<br /><em>You should probably see it.</em></h2>
        <p>Eligible aggregate events. Backend comparison. Fewer expensive opinions.</p>
        <div>
          <a className="button button-dark" href="https://my.sealmetrics.com/register">Start free trial <Arrow /></a>
          <a className="text-link dark-link" href="/demo/">Book a demo <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
