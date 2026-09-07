const proofLogos = [
  { name: "Palladium Hotel Group", src: "/logos/clients/palladium-dark.svg" },
  { name: "Dreamplace Hotels", src: "/logos/clients/dreamplace.svg" },
  { name: "Acciona", src: "/logos/clients/acciona.svg" },
  { name: "Crocs", src: "/logos/clients/crocs.svg" },
  { name: "Desigual", src: "/logos/clients/desigual-dark.svg" },
  { name: "UNICEF", src: "/logos/clients/unicef.svg" },
  { name: "Casa Batlló", src: "/logos/clients/casabatllo.png" },
  { name: "Juguettos", src: "/logos/clients/juguettos.png" },
  { name: "3Cat", src: "/logos/clients/3cat.png" },
  { name: "Fundación Bankinter", src: "/logos/clients/fundacion-bankinter.png" },
  { name: "Dormideo", src: "/logos/clients/dormideo.png" },
  { name: "Incapto", src: "/logos/clients/incapto.svg" },
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
    title: "Protect the channels that actually sell.",
    body: "See the buyers hidden by consent rejection before you cut the campaigns bringing them in.",
    signal: "Budget → evidence",
  },
  {
    number: "02",
    title: "Give every team one number.",
    body: "Marketing, finance and your agency stop debating the dashboard and start deciding from reality.",
    signal: "Debate → decision",
  },
  {
    number: "03",
    title: "Fix today, not tomorrow.",
    body: "Real-time revenue shows what is winning while the campaign is still live and the budget can still move.",
    signal: "Report → action",
  },
];

const faqs = [
  {
    question: "How can you measure without consent?",
    answer:
      "SealMetrics measures aggregate events, not people. No cookies, identifiers, fingerprinting or personal data—so there is no profile to consent to.",
  },
  {
    question: "Do we need to remove GA4?",
    answer:
      "No. Run SealMetrics side by side from day one. The comparison makes your current blind spot visible before you change anything.",
  },
  {
    question: "Will the numbers match our store?",
    answer:
      "That is the point. SealMetrics is designed to reconcile traffic and sales with your commerce and CRM reality, not model the missing part.",
  },
  {
    question: "How long does setup take?",
    answer:
      "One script tag. Most teams are collecting complete data in minutes, without a migration project or a tag-manager maze.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function BrandLockup({ showcase = false }: { showcase?: boolean }) {
  return (
    <span className={`brand-lockup${showcase ? " brand-lockup-showcase" : ""}`} aria-label="SealMetrics">
      <span className="brand-seal" aria-hidden="true">Seal</span><span className="brand-metrics" aria-hidden="true">Metrics</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <div className="signal-bar" aria-hidden="true">
        <span />
        LIVE SIGNAL
        <b>100%</b>
        TRAFFIC OBSERVED
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="SealMetrics home">
          <BrandLockup />
        </a>
        <nav aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#proof">Proof</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="button button-small button-dark" href="https://sealmetrics.com/demo/">
          Book a demo <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>Analytics for people who prefer facts</span> No cookies · no modeled fiction</p>
          <h1>
            Nice dashboard.<br />
            Shame about <em>the missing half.</em>
          </h1>
          <p className="hero-intro">
            SealMetrics measures what actually happened—every visit, every sale, no cookies and no modeled fill-ins. Because you cannot optimize reality with a partial version of it.
          </p>
          <div className="hero-actions">
            <a className="button button-acid" href="https://sealmetrics.com/demo/">
              Show me what&apos;s missing <Arrow />
            </a>
            <a className="text-link" href="https://my.sealmetrics.com/register">
              Start 14-day trial <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="micro-proof">4-minute setup · no card for trial · cancel any time</p>
        </div>

        <div className="hero-board" aria-label="Illustration comparing incomplete analytics with complete revenue measurement">
          <div className="board-topline">
            <span>REALITY CHECK</span>
            <span className="live"><i /> LIVE · 13:00</span>
          </div>
          <div className="board-kpi">
            <div>
              <span>Verified revenue</span>
              <strong>€342K</strong>
            </div>
            <span className="delta">+58% visible</span>
          </div>
          <div className="chart-area" aria-hidden="true">
            <div className="chart-label label-ga">GA4 · consent-shaped</div>
            <div className="chart-label label-seal">SealMetrics · reality</div>
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
            <p>It generated 3.2× more verified revenue than GA4 reported.</p>
          </div>
          <div className="board-footer">
            <span><i className="dot dot-acid" /> 100% measured</span>
            <span><i className="dot dot-gray" /> 42% visible in GA4</span>
          </div>
        </div>
      </section>

      <section className="logo-rail" aria-label="Selected SealMetrics customers">
        <p>TRUSTED WITH THE NUMBER THAT MATTERS</p>
        <div className="client-logos">
          {proofLogos.map((logo) => (
            <div className="client-logo" key={logo.name}>
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="manifesto" id="product">
        <p className="section-tag">UNCOMFORTABLE TRUTH #01</p>
        <div className="manifesto-grid">
          <h2>Your ROAS isn&apos;t wrong.<br /><em>It&apos;s incomplete.</em></h2>
          <div>
            <p className="lead">Those missing sales already happened. Your dashboard just gave someone else the credit.</p>
            <p>That distortion changes ROAS, hides winning channels inside “Direct,” and makes smart teams optimize a version of the business that never existed.</p>
          </div>
        </div>
        <div className="comparison">
          <article className="comparison-muted">
            <div className="comparison-head"><span>THE OLD WAY</span><b>42%</b></div>
            <h3>A confident answer built on missing evidence.</h3>
            <ul>
              <li>Consent rejection erases visits</li>
              <li>Channels inherit the wrong revenue</li>
              <li>Teams reconcile conflicting totals</li>
            </ul>
            <div className="coverage"><span style={{ width: "42%" }} /></div>
          </article>
          <article className="comparison-acid">
            <div className="comparison-head"><span>SEALMETRICS</span><b>100%</b></div>
            <h3>The slightly less glamorous thing: evidence.</h3>
            <ul>
              <li>Every visit and sale measured</li>
              <li>Revenue attributed to the real source</li>
              <li>One number the board can sign against</li>
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
            <h3>Your ROAS wasn&apos;t bad.<br />Your measurement was.</h3>
            <p>Every conversion counted means the channels that actually work stop hiding inside “Direct” and unconsented traffic.</p>
            <a href="https://sealmetrics.com/consentless-analytics/">How consentless analytics works <Arrow /></a>
          </div>
          <div className="roas-card">
            <div className="module-top"><span>SAME CAMPAIGN · SAME SPEND</span><span>REALITY CHECK</span></div>
            <div className="roas-row roas-muted">
              <div><span>ROAS you see today</span><small>consent-gated analytics</small></div><strong>2.4×</strong>
            </div>
            <div className="roas-row roas-real">
              <div><span>Real ROAS</span><small>100% of sales measured</small></div><strong>4.1×</strong>
            </div>
            <p>You weren&apos;t under-performing. You were under-measuring.</p>
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
            <div className="module-top"><span>LENS AI</span><span>100% OF YOUR DATA</span></div>
            <h3>Ask the questions that <em>move the number.</em></h3>
            <p>LENS reads complete data and answers in plain language—without asking you to build another report.</p>
            <div className="lens-questions">
              <div><span>GROWTH</span><b>Which products leak revenue?</b><p>77% of premium e-bike carts don&apos;t convert. Add financing at product level.</p></div>
              <div><span>RISK</span><b>What dropped overnight?</b><p>Returning premium buyers fell 84%. Likely a stock-out—verify before the weekend.</p></div>
              <div><span>COST</span><b>Where am I burning budget?</b><p>DemandGen: 9,230 clicks, 2 sales. Reallocate to PMax_Catalog.</p></div>
            </div>
            <a className="lens-link" href="https://lens-lite.sealmetrics.com">Ask LENS on demo data <Arrow /></a>
          </article>
        </div>
      </section>

      <section className="outcomes">
        <div className="section-heading">
          <p className="section-tag">WHAT COMPLETE DATA IS FOR</p>
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
            <h2>We don&apos;t measure people.<br /><em>We measure what happened.</em></h2>
          </div>
          <div>
            <p>More data is not the goal. Better decisions are. That means collecting less personal information and more complete evidence—then giving it to the people responsible for the number.</p>
            <p>Privacy and complete measurement are not a compromise. They are the same architecture.</p>
            <span>SEALMETRICS / THE ANALYTICS OF REALITY</span>
          </div>
        </div>
      </section>

      <section className="proof" id="proof">
        <div className="proof-quote">
          <p className="section-tag light">PROOF, NOT PROMISES</p>
          <blockquote>
            “The data SealMetrics delivers is agnostic, unbiased and neutral. <em>There’s no black box.</em>”
          </blockquote>
          <p className="quote-source"><b>Toni Andújar</b><br />Digital & Direct Sales Director · Palladium Hotel Group</p>
        </div>
        <div className="proof-numbers">
          <article><strong>40%</strong><p>of unattributed traffic recovered</p></article>
          <article><strong>35%</strong><p>of bookings recovered from “unknown”</p></article>
          <article><strong>+165%</strong><p>improvement in Display cost efficiency</p></article>
          <a href="https://sealmetrics.com/case-studies/palladium-hotel-group/">Read the full case study <Arrow /></a>
        </div>
      </section>

      <section className="how">
        <div className="section-heading">
          <p className="section-tag">NO MAGIC. THAT&apos;S THE POINT.</p>
          <h2>No black box.<br /><em>Just the full picture.</em></h2>
        </div>
        <div className="how-flow">
          <article>
            <span>01 / OBSERVE</span>
            <div className="flow-icon">•••</div>
            <h3>Collect aggregate events</h3>
            <p>No cookies. No IDs. No fingerprints. No personal data.</p>
          </article>
          <b aria-hidden="true">→</b>
          <article>
            <span>02 / CONNECT</span>
            <div className="flow-icon">+ +</div>
            <h3>Match traffic to revenue</h3>
            <p>Every sale returns to the channel and campaign that earned it.</p>
          </article>
          <b aria-hidden="true">→</b>
          <article>
            <span>03 / DECIDE</span>
            <div className="flow-icon">↗</div>
            <h3>Act on the full picture</h3>
            <p>Real-time answers for growth, risk and wasted spend.</p>
          </article>
        </div>
      </section>

      <section className="integrations">
        <div className="integrations-copy">
          <p className="section-tag">DIRECT CONNECTORS</p>
          <h2>Plugs into the stack<br /><em>you already run.</em></h2>
          <p>Native connectors for the commerce platforms and data tools your team uses every day. No middleware. No custom engineering.</p>
          <a href="https://sealmetrics.com/integrations/">See all integrations <Arrow /></a>
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
          <p>Run SealMetrics beside GA4 for 14 days. Compare both against the sales your store actually recorded. Keep the version of reality that matches.</p>
          <ul>
            <li>One script tag · live in minutes</li>
            <li>Founder-led onboarding on Scale</li>
            <li>EU-hosted in Dublin</li>
          </ul>
        </div>
        <div className="price-card">
          <div><span>GROWTH</span><span className="popular">MOST POPULAR</span></div>
          <p>For teams ready to see their real data.</p>
          <strong><sup>€</sup>499<small>/mo</small></strong>
          <span className="billing">Billed annually · 2 months free</span>
          <ul>
            <li>5M human events / month</li>
            <li>3 domains</li>
            <li>Full MCP + BigQuery + API</li>
            <li>GA4 side-by-side comparison</li>
          </ul>
          <a className="button button-acid full" href="https://my.sealmetrics.com/register">Start 14-day trial <Arrow /></a>
          <small>No risk. Cancel before day 14, pay nothing.</small>
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
        <p>Every visit. Every sale. Fewer expensive opinions.</p>
        <div>
          <a className="button button-dark" href="https://sealmetrics.com/demo/">Book a demo <Arrow /></a>
          <a className="text-link dark-link" href="https://my.sealmetrics.com/register">Start 14-day trial <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#top" aria-label="SealMetrics home"><BrandLockup /></a>
        <p>The analytics of reality.</p>
        <div><a href="https://sealmetrics.com/security/">Security</a><a href="https://sealmetrics.com/pricing/">Pricing</a><a href="https://docs.sealmetrics.com">Docs</a></div>
        <small>© 2026 SealMetrics · Built in Europe</small>
      </footer>
    </main>
  );
}
