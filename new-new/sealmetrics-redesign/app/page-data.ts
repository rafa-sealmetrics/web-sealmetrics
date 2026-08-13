export type ContentCard = { title: string; body: string; label?: string };
export type Stat = { value: string; label: string };
export type PageData = {
  title: string;
  description: string;
  eyebrow: string;
  hero: string;
  intro: string;
  stats?: Stat[];
  problemTitle?: string;
  problems?: ContentCard[];
  solutionTitle?: string;
  solutions?: ContentCard[];
  note?: string;
  cta?: string;
  kind?: "landing" | "pricing" | "listing" | "legal" | "calculator" | "integrations" | "demo";
  items?: ContentCard[];
};

const defaultCta = "Run a side-by-side test against your backend.";

function rolePage(input: {
  title: string; description: string; eyebrow: string; hero: string; intro: string;
  pains: [string, string][]; changes: [string, string][]; stats?: Stat[]; cta: string;
}): PageData {
  return {
    ...input,
    problems: input.pains.map(([title, body]) => ({ title, body })),
    solutions: input.changes.map(([title, body]) => ({ title, body })),
    problemTitle: "What puts the decision at risk.",
    solutionTitle: "What changes with a separate measurement layer.",
    cta: input.cta,
  };
}

function comparisonPage(input: {
  title: string; description: string; hero: string; intro: string; opponent: string;
  problems: [string, string][]; stats: Stat[]; cta: string;
}): PageData {
  return {
    ...input,
    eyebrow: `SEALMETRICS VS ${input.opponent.toUpperCase()}`,
    problemTitle: `Where ${input.opponent} stops short.`,
    problems: input.problems.map(([title, body]) => ({ title, body })),
    solutionTitle: "Compare the architecture. Then test the result.",
    solutions: [
      { title: "Measurement scope", body: "SealMetrics processes eligible aggregate events without making collection depend on analytics-cookie acceptance. Coverage still depends on the implementation and defined event scope." },
      { title: "Revenue attribution", body: "Observed conversions receive credit under a declared attribution model; the reported total can then be reconciled with the backend." },
      { title: "Privacy architecture", body: "Built without analytics cookies, persistent visitor identifiers or fingerprinting, with analytics infrastructure hosted in Dublin." },
      { title: "Fair rollout", body: "Deploy one first-party signal beside the current stack, define the comparison period and keep both systems while you verify the difference." },
    ],
    cta: input.cta,
  };
}

export const pages: Record<string, PageData> = {
  "product": {
    title: "Product — SealMetrics consentless analytics",
    description: "Aggregate measurement, declared attribution, LENS, API and MCP without analytics-cookie dependence.",
    eyebrow: "PLATFORM OVERVIEW",
    hero: "The dashboard is confident. *Check the inputs.*",
    intro: "Four tools. Four numbers. One meeting. SealMetrics adds an aggregate measurement layer that is not shaped by analytics-cookie acceptance, so the room can compare reported performance with recorded backend revenue.",
    stats: [{ value: "AGG", label: "aggregate measurement" }, { value: "1ST", label: "first-party signal" }, { value: "DUBLIN", label: "analytics hosting" }, { value: "DECLARED", label: "attribution model" }],
    problemTitle: "Four familiar meetings. None of them useful.",
    problems: [
      { title: "The Meta paradox", body: "Meta says a campaign sold. GA4 says it didn't. Finance sees a third number." },
      { title: "The direct / none bucket", body: "Productive traffic can disappear into the least actionable row." },
      { title: "The reconciliation ritual", body: "Brand, agency and finance spend Monday deciding which dashboard to distrust." },
    ],
    solutionTitle: "Four pillars. One picture.",
    solutions: [
      { title: "Consentless tracking", body: "Observe aggregate hits without cookies, identifiers, fingerprints or a consent wall." },
      { title: "Revenue attribution", body: "Assign observed sales to recorded acquisition sources under a consistent, declared model." },
      { title: "LENS AI", body: "Ask a plain-language question against defined metrics, inspect the source and verify the answer." },
      { title: "API · MCP · BigQuery", body: "Move observed measurement data into the tools and agents your team already uses." },
    ],
    cta: defaultCta,
  },
  "why-sealmetrics": {
    title: "Why SealMetrics — test the measurement gap",
    description: "See how consent-shaped measurement can change channel rankings, then compare both systems with your backend.",
    eyebrow: "WHY SEALMETRICS",
    hero: "The dashboard is settled. *The evidence may not be.*",
    intro: "Consent rejection, blockers and browser restrictions can remove evidence unevenly across channels. That can change the ranking behind your next budget decision.",
    stats: [{ value: "SIDE BY SIDE", label: "keep the current stack" }, { value: "BACKEND", label: "name the baseline" }, { value: "DECLARED", label: "inspect the model" }],
    problemTitle: "Your ROAS may be calculated correctly and still mislead the budget.",
    problems: [
      { title: "Uneven loss", body: "Privacy-conscious buyers may disappear at different rates across channels." },
      { title: "False efficiency", body: "The channels that retain consent look efficient. The channels that generate revenue may look weak." },
      { title: "The wrong cut", body: "You may remove budget from a productive channel because the sale closed outside the measurement field." },
    ],
    solutionTitle: "Five things become true on day one.",
    solutions: [
      { title: "Preserve eligible events", body: "Aggregate measurement does not depend on accepting analytics cookies for the defined use case." },
      { title: "Declare attribution", body: "Observed revenue receives credit under a named model, rather than being presented as causal certainty." },
      { title: "See the SKU", body: "Product-level performance stays visible through the full purchase path." },
      { title: "Inspect the AI answer", body: "LENS answers against defined metrics and exposes the source for verification." },
    ],
    cta: "Bring Monday a number finance can inspect.",
  },
  "how-it-works": {
    title: "How SealMetrics Works — aggregate and EU-hosted",
    description: "A first-party signal, aggregate event processing and analytics infrastructure hosted in Dublin.",
    eyebrow: "HOW IT WORKS",
    hero: "A different approach to *measurement.*",
    intro: "No identity graph. No modeled recovery presented as observation. A first-party signal sends eligible events for aggregate processing and reporting on infrastructure hosted in Dublin.",
    stats: [{ value: "1ST", label: "first-party signal" }, { value: "AGG", label: "aggregate processing" }, { value: "DUBLIN", label: "analytics hosting" }, { value: "2-WAY", label: "side-by-side test" }],
    problemTitle: "Three layers. One pipeline.",
    problems: [
      { title: "Observe", body: "The first-party signal sends the eligible events defined for your domain." },
      { title: "Count", body: "Server-side processing applies bot filters and groups events without creating a persistent visitor profile." },
      { title: "Decide", body: "Traffic, microconversions, sales and revenue appear in live channel reports." },
    ],
    solutionTitle: "From implementation to a supportable comparison.",
    solutions: [
      { title: "Install the pixel", body: "Add one script directly or through your platform's native module." },
      { title: "Run side by side", body: "Keep GA4. Compare both streams against backend revenue." },
      { title: "Define the funnel", body: "Add the cart, checkout, lead and purchase events required for the decision, without creating a persistent visitor profile." },
      { title: "Align the team", body: "Use SealMetrics as an independent layer across brand, agency and finance, with definitions and assumptions declared." },
    ],
    cta: "Review the pipeline and define your comparison.",
  },
  "consentless-analytics": {
    title: "Consentless analytics — architecture and safeguards",
    description: "Aggregate measurement without analytics cookies or persistent visitor profiles, with scope and safeguards defined.",
    eyebrow: "CONSENTLESS ANALYTICS",
    hero: "Privacy starts with architecture. *Not banner tricks.*",
    intro: "Consentless analytics describes a measurement architecture that does not depend on analytics-cookie acceptance for a defined use case. It is not a universal legal conclusion: purpose, configuration, jurisdiction, transparency and the customer’s wider processing still matter.",
    stats: [{ value: "NO", label: "analytics cookies" }, { value: "NO", label: "persistent visitor IDs" }, { value: "NO", label: "fingerprinting" }, { value: "DEFINED", label: "measurement scope" }],
    problemTitle: "Why cookie banners stopped working.",
    problems: [
      { title: "Rejection became material", body: "When large parts of the audience decline, a consent subset stops representing the business." },
      { title: "Dark patterns create regulatory risk", body: "Manipulating acceptance is neither a durable privacy strategy nor a decent customer experience." },
      { title: "Banner fatigue costs attention", body: "The first interaction with your brand should not have to repair the measurement architecture." },
    ],
    solutionTitle: "Three architectural anchors.",
    solutions: [
      { title: "No persistent visitor identity", body: "The defined architecture does not use analytics cookies, device IDs, fingerprinting or persistent visitor keys." },
      { title: "Data minimization", body: "Events are processed for aggregate measurement rather than to build behavioral visitor profiles." },
      { title: "Strict purpose", body: "Measurement exists to understand audience and performance—not to follow people." },
      { title: "Dublin infrastructure", body: "Analytics processing and storage are hosted in Dublin, Ireland." },
    ],
    cta: "Review the architecture, purpose and safeguards.",
  },
  "ai-analytics": {
    title: "AI Analytics — inspectable answers from defined metrics",
    description: "Ask revenue questions against defined analytics metrics, inspect the source and verify the answer.",
    eyebrow: "LENS AI",
    hero: "The AI can sound certain. *Make the evidence visible.*",
    intro: "An LLM is the easy part. A supportable answer is the hard part. LENS combines defined metrics, semantic access through MCP and a source the team can inspect.",
    stats: [{ value: "DEFINED", label: "business metrics" }, { value: "SOURCE", label: "inspectable answer" }, { value: "MCP", label: "semantic access" }, { value: "DUBLIN", label: "analytics hosting" }],
    problemTitle: "Generic AI inherits the weaknesses underneath it.",
    problems: [
      { title: "Incomplete warehouse", body: "A clever model cannot recover visitors your measurement never observed." },
      { title: "Schema without meaning", body: "Raw tables make the model guess what revenue, sessions and channels mean." },
      { title: "Untraceable answers", body: "A confident sentence is not evidence unless the team can inspect the source." },
    ],
    solutionTitle: "One measurement interface. Several decisions.",
    solutions: [
      { title: "Growth", body: "Find products and funnel steps leaking revenue before the week is over." },
      { title: "Risk", body: "Surface anomalies, stock-outs and overnight drops before they become a monthly surprise." },
      { title: "Cost", body: "Identify spend that generates attention but little recorded conversion revenue." },
      { title: "Inspectable handling", body: "Review the applicable hosting, access and model-handling terms before connecting production data." },
    ],
    cta: "Ask LENS. Inspect the source. Verify the answer.",
  },
  "integrations": {
    title: "Integrations — SealMetrics",
    description: "Native modules for eCommerce, CMS, frameworks, tag managers, data and AI.",
    eyebrow: "DIRECT CONNECTORS",
    hero: "Plug into *the stack you already run.*",
    intro: "Use a native module where one supports the platform, or the REST API for a custom route. BigQuery and MCP connect observed measurement data with the tools and agents already in your workflow.",
    kind: "integrations",
    items: [
      { label: "eCommerce", title: "Shopify · Magento · PrestaShop · WooCommerce · OpenCart", body: "Native commerce modules with purchase and product context." },
      { label: "CMS", title: "WordPress · Drupal · Joomla", body: "First-party analytics without a consent-mode dependency." },
      { label: "Website builders", title: "Webflow · Wix · Squarespace", body: "Fast installation without rebuilding the site." },
      { label: "Frameworks", title: "React · Next.js · Vue · Nuxt", body: "SPA-aware tracking and virtual pageview control." },
      { label: "Tag management", title: "Google Tag Manager", body: "Deploy alongside your current stack without surrendering first-party capture." },
      { label: "Data & AI", title: "BigQuery · REST API · MCP · Webhooks", body: "Move observed measurement data into the systems where decisions happen." },
    ],
    cta: "Review the install path for your stack.",
  },
  "platforms": {
    title: "Platforms — SealMetrics",
    description: "Native installation across commerce platforms, CMS, builders and headless sites.",
    eyebrow: "PLATFORMS",
    hero: "A measurement route for *the stack you run.*",
    intro: "Your platform determines the installation path—not the evidence standard. Native modules and the event API connect supported stacks to the same aggregate measurement architecture.",
    kind: "integrations",
    items: [
      { label: "Commerce", title: "Shopify", body: "Native storefront and purchase measurement." },
      { label: "Commerce", title: "Magento", body: "Module-based install for serious catalogs and multi-store setups." },
      { label: "Commerce", title: "PrestaShop", body: "Product, cart and order measurement without custom middleware." },
      { label: "Commerce", title: "WooCommerce", body: "WordPress-native analytics that reconciles with orders." },
      { label: "CMS & builders", title: "WordPress · Webflow · Wix · Squarespace", body: "Aggregate measurement routes for marketing and content sites." },
      { label: "Custom", title: "Headless · React · Next.js · Vue", body: "A small first-party pixel and full event API." },
    ],
    cta: "Choose the implementation route for your stack.",
  },
  "security": {
    title: "Security Overview — SealMetrics",
    description: "Data-minimizing architecture, encryption, account isolation, retention controls and Dublin hosting.",
    eyebrow: "SECURITY OVERVIEW",
    hero: "Collect less personal data. *Defend a smaller surface.*",
    intro: "Security starts by minimizing the visitor data an analytics product collects. SealMetrics then applies account boundaries, encryption and retention controls to the measurement data that remains.",
    stats: [{ value: "DUBLIN", label: "analytics hosting" }, { value: "ENCRYPTED", label: "in transit" }, { value: "ENCRYPTED", label: "at rest" }, { value: "DEFINED", label: "retention controls" }],
    problemTitle: "An inspectable architecture for a focused security review.",
    problems: [
      { title: "Privacy by design", body: "No visitor identity layer, personal profiles or cross-site tracking." },
      { title: "Isolation and access", body: "Per-account boundaries and least-privilege operational access." },
      { title: "Retention by default", body: "Automatic TTLs keep data only for the period the service requires." },
    ],
    solutionTitle: "What your security team receives.",
    solutions: [
      { title: "EU infrastructure", body: "Analytics processing and storage in Dublin." },
      { title: "Encryption", body: "Encrypted transport and storage across the service." },
      { title: "Incident process", body: "Review the documented detection, management and notification process." },
      { title: "Trust documentation", body: "Review the current DPA, security overview, subprocessor information and policies together." },
    ],
    cta: "Put the architecture in front of your security team.",
  },
  "for/cmo": rolePage({
    title: "Analytics for CMOs — Defensible Attribution | SealMetrics", description: "Defend marketing budget with measurement finance can interrogate.", eyebrow: "FOR CMOs", hero: "Defend the budget with *evidence finance can inspect.*", intro: "You are the person explaining why paid spend grew while attributed revenue did not. SealMetrics adds an independent measurement layer that brand, finance and agencies can reconcile with recorded revenue.",
    pains: [["Three numbers, one meeting", "GA4, the agency and CRM disagree before the first slide."], ["Budget you cannot defend", "Incomplete attribution turns a strategic decision into an opinion contest."], ["The oversized direct bucket", "Revenue exists, but the channel evidence needed to repeat it is missing."], ["Agency versus internal data", "The relationship becomes defensive when each side reports a different total."]],
    changes: [["Backend-reconciled revenue", "Compare reported marketing revenue with the system that recorded the sale."], ["Defensible reallocation", "Move budget with evidence, not channel politics."], ["Independent measurement", "Brand and agency inspect the same definitions and totals."], ["Current answers", "Ask LENS what changed, then inspect the supporting metric."]],
    stats: [{ value: "BACKEND", label: "reconciliation baseline" }, { value: "DECLARED", label: "attribution model" }], cta: "Bring one disputed number to the review."
  }),
  "for/cto": rolePage({
    title: "Analytics for CTOs — Architecture & Setup | SealMetrics", description: "A first-party signal and an architecture engineering can inspect before rollout.", eyebrow: "FOR CTOS", hero: "Analytics your engineering team *can interrogate.*", intro: "One first-party signal. No third-party identity graph. Define the event scope, inspect the data flow and deploy beside the current stack before replacing anything.",
    pains: [["Payload before purpose", "The analytics stack can tax each page before it answers a business question."], ["Consent state complexity", "Each implementation adds states, race conditions and review dependencies."], ["Server-side scope grows", "Infrastructure expands while the underlying collection limits may remain."], ["Opaque thresholds", "The team cannot debug a metric when sampling, modeling or filters are unclear."]],
    changes: [["First-party signal", "A small implementation surface without a third-party identity graph."], ["No analytics-cookie dependency", "Aggregate measurement for the defined use case does not wait for analytics-cookie acceptance."], ["Documented access", "Use the available API, MCP and BigQuery routes according to the selected plan."], ["Side-by-side rollout", "Validate against the existing stack before replacing anything."]],
    stats: [{ value: "1ST", label: "first-party signal" }, { value: "SIDE BY SIDE", label: "rollout method" }], cta: "Inspect the integration before rollout."
  }),
  "for/ecommerce": rolePage({
    title: "Analytics for eCommerce — Revenue Attribution | SealMetrics", description: "Cookieless ecommerce analytics designed to reconcile with store and CRM revenue.", eyebrow: "FOR ECOMMERCE", hero: "Your store recorded the sale. *Can marketing explain it?*", intro: "Your commerce backend knows the sale happened. SealMetrics connects observed outcomes to recorded acquisition evidence under a declared model, then lets you compare the total with your store.",
    pains: [["Pixel versus store", "The recurring disagreement makes acquisition reports negotiable."], ["Cart adds without a source", "The buyer moved through the funnel, but consent loss removed the path."], ["Peak events get blurry", "Sampling and processing delays are most damaging on the day decisions matter most."], ["Products disappear in aggregates", "Channel totals can hide which SKU received revenue credit under the model."]],
    changes: [["Store-reconciled revenue", "Compare observed orders with the backend total and investigate the difference."], ["SKU-level evidence", "See implemented product, cart, checkout and purchase events."], ["Live Promo Days", "Move budget during the campaign, not in tomorrow's post-mortem."], ["Declared ROAS", "Calculate channel efficiency from observed revenue under a named attribution model."]],
    stats: [{ value: "STORE", label: "reconciliation baseline" }, { value: "LIVE", label: "current reporting" }], cta: "Compare the pixel with the store total."
  }),
  "for/hotels": rolePage({
    title: "Analytics for Hotels — Direct-Booking | SealMetrics", description: "Reconcile direct-booking attribution with recorded PMS revenue.", eyebrow: "FOR HOTELS & TRAVEL", hero: "The booking exists. *The acquisition trail may not.*", intro: "Direct revenue already closed. SealMetrics connects eligible aggregate journey evidence with the recorded acquisition source under a consistent model, then compares the result with the PMS total.",
    pains: [["Bookings invisible to marketing", "CRM revenue exists without the acquisition evidence behind it."], ["OTA bleed", "Referrals and payment hops rewrite the channel that created demand."], ["Peak booking windows", "Last-minute decisions arrive after the reporting window."], ["Portfolio reconciliation", "Multi-property attribution becomes a spreadsheet project."]],
    changes: [["PMS-reconciled revenue", "Compare observed direct bookings with the PMS total."], ["Payment-domain control", "Define internal and gateway referrals so they do not overwrite acquisition evidence."], ["Consistent portfolio model", "Brands and properties can use the same declared attribution rules."], ["Publishable proof", "Document the period, configuration, baseline, result and caveat before making a customer claim."]],
    stats: [{ value: "PMS", label: "named baseline" }, { value: "DECLARED", label: "attribution model" }], cta: "Compare attributed bookings with the PMS."
  }),
  "for/saas": rolePage({
    title: "Analytics for SaaS — PLG & Trial-to-Paid | SealMetrics", description: "Measure product-led growth and trial-to-paid funnels without consent loss.", eyebrow: "FOR SAAS", hero: "The analytics for *your freemium-to-paid funnel.*", intro: "The activation happened inside the product. The revenue closed later. SealMetrics keeps the path visible without creating a user surveillance layer.",
    pains: [["Trial signups become Direct", "The acquisition source disappears before activation."], ["Activation sampled at scale", "The event that predicts revenue becomes statistically convenient."], ["Ad blockers erase enterprise buyers", "Technical audiences are systematically undercounted."], ["PLG versus sales-led", "Revenue ownership is debated because the journey is incomplete."]],
    changes: [["Consent-independent acquisition", "Eligible aggregate events can contribute to channel reporting without analytics-cookie acceptance."], ["Activation measurement", "Track defined product milestones without a persistent visitor profile."], ["Trial-to-paid evidence", "Connect observed conversions to their recorded acquisition source under a consistent model."], ["Data-minimizing architecture", "Reduce the personal-data surface introduced by the analytics layer."]],
    stats: [{ value: "AGG", label: "aggregate funnel" }, { value: "NO PROFILE", label: "persistent visitor identity" }], cta: "Compare observed activation with your product backend."
  }),
  "for/agencies": rolePage({
    title: "Analytics for Marketing Agencies | SealMetrics", description: "An independent measurement layer clients and agencies can inspect together.", eyebrow: "FOR AGENCIES", hero: "Stop defending the dashboard. *Lead the comparison.*", intro: "Give the client a declared method, a backend baseline and a next step. The agency becomes the advisor who turns measurement disagreement into a test.",
    pains: [["The QBR becomes a trial", "The client disputes the source before discussing the decision."], ["Pixel/CRM gaps eat trust", "Performance looks inflated or incomplete depending on the room."], ["Portfolio clients fragment", "Brands arrive with different models and taxonomies."], ["Onboarding delays advice", "Tag plans and consent states postpone strategic work."]],
    changes: [["Independent layer", "Client, brand and performance teams inspect the same aggregate measurement."], ["Defensible performance", "Campaign revenue can be reconciled with backend sales."], ["Side-by-side onboarding", "One first-party signal starts the comparison without forcing a migration."], ["Advisory leverage", "Spend less time defending data and more time deciding what to test next."]],
    stats: [{ value: "SHARED", label: "measurement definitions" }, { value: "1ST", label: "first-party signal" }], cta: "Stop defending the dashboard. Lead the comparison."
  }),
  "for/media": rolePage({
    title: "Analytics for Media & Publishers | SealMetrics", description: "First-party audience analytics that survive consent loss and ad blockers.", eyebrow: "FOR MEDIA & PUBLISHERS", hero: "Analytics that *survive ad blockers.*", intro: "A privacy-aware reader should not disappear from aggregate audience measurement. SealMetrics restores the evidence behind content, subscription and newsletter decisions.",
    pains: [["Part of the audience vanishes", "Ad blockers and consent rejection can remove privacy-conscious readers from the report."], ["Ad yield on a subset", "Inventory decisions may rely on an incomplete view of attention."], ["Newsletter attribution breaks", "The source can disappear before subscription or registration."], ["Paywall paths go dark", "Conversion analysis can stop at the consent boundary."]],
    changes: [["Aggregate readership", "Observe eligible page and content events through a first-party signal."], ["Content engagement", "Measure implemented article, section and content-group events without a persistent visitor profile."], ["Subscription evidence", "Connect observed paid outcomes to recorded acquisition sources."], ["Dublin-hosted analytics", "Analytics processing and storage are hosted in Dublin, Ireland."]],
    stats: [{ value: "AGG", label: "aggregate audience" }, { value: "1ST", label: "first-party signal" }], cta: "Compare the reported audience with your own systems."
  }),
  "for/finance": rolePage({
    title: "Analytics for Finance — Reviewable Architecture | SealMetrics", description: "Dublin-hosted analytics without persistent visitor profiles and with inspectable trust documentation.", eyebrow: "FOR FINANCE", hero: "The strongest control is *data you never needed to collect.*", intro: "SealMetrics is built for aggregate performance measurement without persistent visitor profiles. Finance, privacy and procurement can review the purpose, data flow, retention and current contract documents before deployment.",
    pains: [["Vendor review expands", "An identity layer can turn analytics into a wider privacy and security assessment."], ["Campaigns wait for review", "Measurement changes inherit the personal-data dependencies of the architecture underneath them."], ["Residency uncertainty", "Opaque data flows make jurisdiction and subprocessor review harder."], ["Evidence is scattered", "Contracts, controls and data-flow answers live across tools and teams."]],
    changes: [["No persistent visitor profiles", "Aggregate measurement avoids a persistent identity layer for the defined use case."], ["Dublin hosting", "Analytics processing and storage are hosted in Dublin, Ireland."], ["Trust documents", "Review the current DPA, security overview, privacy policy and terms together."], ["Revenue reconciliation", "Compare marketing performance with recorded backend revenue."]],
    stats: [{ value: "DUBLIN", label: "analytics hosting" }, { value: "NO PROFILE", label: "persistent visitor identity" }], cta: "Start the review with the data flow."
  }),
  "for/healthcare": rolePage({
    title: "Analytics for Healthcare — Privacy-First | SealMetrics", description: "Measure implemented appointment and consultation events without persistent patient analytics profiles.", eyebrow: "FOR HEALTHCARE", hero: "Measure the journey. *Do not build a patient profile.*", intro: "Understand treatment-page performance and implemented appointment-funnel events in aggregate, without creating a persistent healthcare visitor profile in the analytics layer.",
    pains: [["Health context raises the stakes", "Behavioral tracking on health-related pages can create unusually sensitive processing questions."], ["Analytics disabled on key pages", "Removing measurement also removes evidence teams need to improve access."], ["Appointment funnels go dark", "Teams cannot see where prospective patients abandon."], ["Review blocks iteration", "Each measurement request can reopen the same privacy debate."]],
    changes: [["Aggregate measurement", "Count page and funnel events without identifying the person."], ["No cookies or fingerprinting", "The architecture avoids persistent visitor identity."], ["EU infrastructure", "Processing stays in Dublin."], ["Useful optimization", "Improve appointment and consultation paths with defensible evidence."]],
    stats: [{ value: "NO PROFILE", label: "persistent patient identity" }, { value: "AGG", label: "implemented funnel events" }], cta: "Review the healthcare data flow before deployment."
  }),
  "for/education": rolePage({
    title: "Analytics for Education — Aggregate Funnels | SealMetrics", description: "Measure implemented student-facing journeys without persistent visitor identifiers.", eyebrow: "FOR EDUCATION", hero: "Measure the learning path. *Do not build a student profile.*", intro: "Universities, EdTech and MOOCs serve mixed-age audiences across jurisdictions. Aggregate measurement can preserve implemented learning-flow evidence without creating persistent student analytics profiles.",
    pains: [["Minor-data rules expand risk", "Ordinary analytics architecture becomes inappropriate for young audiences."], ["Parental consent is impractical", "The measurement layer creates a workflow unrelated to learning."], ["Residency rules vary", "Cross-border visitor processing complicates every rollout."], ["Learning flows cannot improve", "Teams remove analytics from the pages that need the most iteration."]],
    changes: [["No persistent student identity", "An aggregate architecture reduces the identity dependencies introduced by analytics."], ["Dublin-hosted processing", "Analytics processing and storage are hosted in Dublin, Ireland."], ["Defined funnels", "Observe implemented registration and learning steps in aggregate."], ["Focused experimentation", "Improve content paths without adding a persistent visitor profile."]],
    stats: [{ value: "NO PROFILE", label: "persistent student identity" }, { value: "DUBLIN", label: "analytics hosting" }], cta: "Review the measurement scope for your audience."
  }),
  "vs-ga4": comparisonPage({
    title: "SealMetrics vs Google Analytics 4 — compare the inputs", description: "Compare consent-shaped GA4 reporting with a separate aggregate layer and reconcile both with backend revenue.", hero: "The reports can disagree. *Your backend gets a vote.*", intro: "This is not a feature war. Configure both systems for the same defined events, run them over the same period and compare their reported revenue with the same backend total.", opponent: "Google Analytics 4",
    problems: [["Organic goes missing", "Consent rejection removes visits before GA4 classifies them."], ["Meta conversions disagree", "Platform, GA4 and CRM optimize different populations."], ["Direct becomes a landfill", "Lost attribution accumulates in the least useful channel."], ["Peak reporting slows", "Modeling and processing are weakest when Promo Day decisions are live."]],
    stats: [{ value: "GA4", label: "configured consent state" }, { value: "SEAL", label: "aggregate measurement layer" }], cta: "Run both. Reconcile both. Then decide."
  }),
  "vs/ga360": comparisonPage({
    title: "SealMetrics vs GA360 — compare measurement architecture", description: "Compare GA360's enterprise controls with aggregate measurement that does not depend on analytics-cookie acceptance.", hero: "Enterprise scale does not answer *which evidence entered the report.*", intro: "GA360 adds enterprise limits, controls and support. The relevant SealMetrics question is different: how does collection behave under the configured consent state, and which reported total reconciles with the backend?", opponent: "GA360",
    problems: [["Scale versus scope", "Higher processing limits do not define which visitors or events entered the report."], ["Contract versus evidence", "Enterprise procurement does not remove the need to inspect measurement coverage."], ["Implementation surface", "Compare the infrastructure, consent states and operational ownership required by each setup."], ["Access to answers", "Compare how quickly business teams can reach a defined metric and inspect its source."]],
    stats: [{ value: "ENTERPRISE", label: "GA360 controls and support" }, { value: "AGG", label: "SealMetrics measurement layer" }], cta: "Compare scope, method and backend reconciliation."
  }),
  "vs/adobe-analytics": comparisonPage({
    title: "SealMetrics vs Adobe Analytics — compare operating models", description: "Compare Adobe's configurable enterprise analytics with a focused aggregate measurement layer.", hero: "More configuration can answer more questions. *It can also hide the first one.*", intro: "Adobe Analytics supports highly configurable reporting. SealMetrics takes a narrower position: define the business events, minimize visitor identity and verify reported revenue against the backend.", opponent: "Adobe Analytics",
    problems: [["Taxonomy comes first", "A broad implementation can delay the business question the team needs to answer."], ["Specialist operating model", "Compare how much analyst support each setup needs for routine decisions."], ["Consent state still matters", "Document how each configuration behaves when analytics cookies are rejected."], ["Total operating cost", "Compare licensing, implementation, consultancy and maintenance using current quotes—not generic market estimates."]],
    stats: [{ value: "CONFIGURABLE", label: "Adobe reporting model" }, { value: "FOCUSED", label: "SealMetrics aggregate layer" }], cta: "Compare the operating model on one real question."
  }),
  "vs/piwik-pro": comparisonPage({
    title: "SealMetrics vs Piwik PRO — residency is not the whole test", description: "Compare residency, identity, consent dependence, attribution and backend reconciliation in the current configurations.", hero: "EU hosting answers where. *Ask what the measurement depends on.*", intro: "Residency matters, but it is one comparison dimension. Review the current Piwik PRO and SealMetrics configurations for cookies, persistent identity, consent dependence, attribution rules and backend reconciliation.", opponent: "Piwik PRO",
    problems: [["Residency versus collection", "Where data is hosted does not, by itself, explain how eligible events enter the report."], ["Consent dependency", "Check what each configured measurement use case collects after analytics-cookie rejection."], ["Operational scope", "Compare the privacy controls, implementation work and ongoing ownership each setup requires."], ["Reporting versus reconciliation", "Test both reported totals against the same backend over the same period."]],
    stats: [{ value: "DUBLIN", label: "SealMetrics analytics hosting" }, { value: "CONFIG", label: "verify competitor setup" }], cta: "Compare the current configurations side by side."
  }),
  "pricing": {
    title: "SealMetrics Pricing — Pay for humans, not bots", description: "Free Agentic tier and paid plans from €499/month when billed annually.", eyebrow: "PRICING", hero: "Pay for *humans.* Not bots. Not guesswork.", intro: "Paid plans use the same core aggregate measurement architecture. Price changes with included human-event volume, domains and service level; review the plan details before choosing.", kind: "pricing",
    stats: [{ value: "FREE", label: "up to 1M human events" }, { value: "€499", label: "Growth / month annual" }, { value: "€899", label: "Scale / month annual" }],
    cta: "Start a side-by-side measurement test."
  },
  "demo": {
    title: "Book a Demo — SealMetrics", description: "A 30-minute review of your measurement architecture and a side-by-side comparison plan.", eyebrow: "BOOK A DEMO", hero: "Bring the number *your teams disagree about.*", intro: "Tell us about your stack and backend baseline. We will focus the call on the likely measurement gap, the events required to test it and a side-by-side rollout plan.", kind: "demo",
    stats: [{ value: "30 min", label: "personalized walkthrough" }, { value: "0", label: "generic sales deck" }, { value: "1", label: "real data question" }], cta: "Pick a time. See the gap."
  },
  "demo-access": {
    title: "Demo Account — SealMetrics", description: "Explore a SealMetrics demo account on your own.", eyebrow: "EXPLORE THE PRODUCT", hero: "No call. No script. *Just look around.*", intro: "Open the demo environment and explore revenue, channels, campaigns and LENS at your own pace.", kind: "demo",
    problems: [{ title: "Revenue", body: "Inspect recorded demo revenue and how the report allocates it by channel." }, { title: "Attribution", body: "Review the declared model and compare acquisition sources." }, { title: "LENS", body: "Ask plain-language questions against demo metrics and inspect the source." }], cta: "Explore the demo account."
  },
  "data-loss-calculator": {
    title: "Data Loss Calculator — SealMetrics", description: "Model an illustrative traffic and revenue gap using assumptions you can inspect.", eyebrow: "DATA LOSS CALCULATOR", hero: "What could missing evidence *do to the decision?*", intro: "Consent rejection, blockers and browser restrictions can remove evidence before the dashboard counts it. Enter your numbers to model an illustrative scenario—not a measured result from your site.", kind: "calculator", cta: "Model the scenario. Then measure the gap."
  },
  "real-roas": {
    title: "A More Defensible ROAS — SealMetrics", description: "Calculate ROAS from observed sales under a declared attribution model, then reconcile with backend revenue.", eyebrow: "ROAS, WITH THE INPUTS EXPOSED", hero: "Your ROAS isn't low. *It may be incomplete.*", intro: "Same campaign. Same spend. A different observed-revenue numerator. The useful question is not which ratio looks better, but which input set and attribution model survive backend reconciliation.",
    stats: [{ value: "2.4×", label: "illustrative consent-shaped view" }, { value: "4.1×", label: "illustrative aggregate view" }],
    problemTitle: "A ratio is only as defensible as its numerator.", problems: [{ title: "Spend has its own system", body: "Ad platforms record charges whether the analytics layer observes the resulting outcome or not." }, { title: "Revenue may be partial", body: "Consent loss can remove sales from attributed return." }, { title: "The ranking can change", body: "Uneven missing evidence can make a productive channel look inefficient." }],
    solutionTitle: "What changes when the method is explicit.", solutions: [{ title: "Eligible sales observed", body: "Attributed revenue starts from the conversions that reached the system under the stated implementation." }, { title: "One declared model", body: "Channels are compared under the same attribution rules and event definitions." }, { title: "Backend check", body: "Reconcile the reported total before the ratio moves budget." }], cta: "Calculate ROAS. Inspect the inputs."
  },
  "blog": {
    title: "Blog — SealMetrics", description: "Thinking on analytics, attribution and privacy-first measurement.", eyebrow: "BLOG", hero: "Thinking about analytics, *done properly.*", intro: "Practical arguments for teams that prefer evidence to dashboards, written from two decades of analytics work.", kind: "listing",
    items: [
      { label: "Analytics", title: "Self-Service Analytics for Marketing Teams", body: "How LENS gives business teams direct answers without turning data governance into chaos." },
      { label: "Buyer's guide", title: "The Best Web Analytics Tool: 12 Requirements", body: "The architectural questions that matter more than a feature checklist." },
      { label: "Privacy", title: "Is Adobe Analytics GDPR Compliant?", body: "A practical assessment of data flows, consent and enterprise configuration." },
      { label: "Guide", title: "Cookieless Analytics for eCommerce: The 2026 Guide", body: "How aggregate measurement scope changes when analytics cookies are no longer the foundation." },
      { label: "Hotels", title: "Cookieless Analytics for Hotels", body: "Direct-booking attribution that reconciles with PMS truth." },
      { label: "SaaS", title: "PLG Without Consent Banners", body: "Measure activation and trial-to-paid performance without personal profiles." },
    ], cta: "Read the argument. Then test it."
  },
  "case-studies": {
    title: "Case Studies — SealMetrics", description: "Documented measurement comparisons with method, scope, decision and caveat.", eyebrow: "CASE STUDIES", hero: "A customer number without a method *is still a claim.*", intro: "Until publication approval and supporting methodology are documented, customer identities and quantitative results remain anonymized. The evidence standard is part of the story.", kind: "listing",
    stats: [{ value: "METHOD", label: "comparison documented" }, { value: "SCOPE", label: "configuration stated" }, { value: "CAVEAT", label: "limits made visible" }],
    items: [
      { label: "European hotel group", title: "From unattributed traffic to a backend-reconciled comparison", body: "A publishable version will state the period, baseline, SealMetrics configuration, comparison method, result, business decision and material caveat." },
      { label: "European travel business", title: "Closing the gap between analytics and the revenue system", body: "The case remains anonymized until client approval and the provenance of each quantitative result are documented." },
    ], cta: "Run a comparison worth documenting."
  },
  "videos": {
    title: "Videos — SealMetrics", description: "Product demos and tutorials for aggregate, cookieless analytics.", eyebrow: "VIDEOS", hero: "See it. Understand it. *Then test it.*", intro: "Short product walkthroughs for the questions teams ask during setup, reconciliation and analysis.", kind: "listing",
    items: [{ label: "Product demo", title: "SealMetrics product walkthrough", body: "Traffic, attribution, recorded revenue and LENS from observed event to decision." }, { label: "Setup", title: "Install the first-party signal", body: "A direct walkthrough for supported platforms and custom sites." }, { label: "Attribution", title: "Compare GA4 side by side", body: "Use backend revenue to measure the gap in your configured stack." }, { label: "LENS", title: "Ask a defined measurement question", body: "From plain-language prompt to traceable source." }], cta: "Review the measurement workflow."
  },
  "glossary": {
    title: "Analytics Glossary — Web, GDPR & Attribution Terms", description: "Analytics terms in plain language for European marketing and data teams.", eyebrow: "GLOSSARY", hero: "Analytics terms, *in plain language.*", intro: "No circular definitions and no vendor fog. What the term means, why it matters and where it becomes misleading.", kind: "listing",
    items: [{ label: "A", title: "Anonymization", body: "A transformation that prevents data from being linked back to an identifiable person." }, { label: "A", title: "Average Order Value", body: "Revenue divided by completed orders for the selected period." }, { label: "B", title: "Bot Traffic", body: "Automated activity that should not be priced or interpreted as human demand." }, { label: "B", title: "Browser Fingerprinting", body: "Combining device signals to identify a browser without a cookie." }, { label: "C", title: "Channel Grouping", body: "Rules that turn source and medium evidence into business-readable acquisition categories." }, { label: "C", title: "Conversion Rate", body: "Conversions divided by the relevant observed opportunities—not an arbitrary consent subset." }], cta: "Understand the number before optimizing it."
  },
  "changelog": {
    title: "Changelog — SealMetrics", description: "What SealMetrics has shipped recently.", eyebrow: "CHANGELOG", hero: "What we have shipped. *No roadmap theatre.*", intro: "Product changes, fixes and capabilities—with enough detail to understand what actually improved.", kind: "listing",
    items: [{ label: "July 2026", title: "Seal AI Private", body: "EU-hosted private AI with token packs and the model-handling terms documented for review." }, { label: "July 2026", title: "Sources report", body: "Referral traffic grouped by domain with entrances, recorded revenue and conversion evidence." }, { label: "July 2026", title: "Custom Channel Grouping", body: "Create and test rules from the dashboard, CSV or MCP." }, { label: "June 2026", title: "Bot-blocking update", body: "Reduced false positives in the human-event classification." }, { label: "May 2026", title: "Attribution fixes", body: "Internal UTM hits no longer open an incorrect new session." }, { label: "February 2026", title: "API reliability", body: "Resolved authorization issues across exports and batch endpoints." }], cta: "See how the measurement method keeps improving."
  },
  "about": {
    title: "About SealMetrics — Founder-led analytics for Europe", description: "A European, founder-led analytics company with infrastructure hosted in Dublin.", eyebrow: "ABOUT SEALMETRICS", hero: "Built for teams that *interrogate the number.*", intro: "SealMetrics began with a repeated observation: smart teams were making expensive decisions while marketing, agencies and finance brought different revenue totals into the room.",
    stats: [{ value: "EU", label: "company base" }, { value: "DUBLIN", label: "analytics hosting" }, { value: "FOUNDER", label: "product leadership" }],
    problemTitle: "The problem was never another missing dashboard.", problems: [{ title: "Data nobody trusted", body: "Brand, agency and finance arrived with competing versions of revenue." }, { title: "Privacy bolted on", body: "Consent layers tried to repair an architecture designed around identity." }, { title: "Enterprise without clarity", body: "More tools increased sophistication faster than confidence." }],
    solutionTitle: "What we chose to build instead.", solutions: [{ title: "Observation first", body: "Define and observe eligible aggregate events before interpreting performance." }, { title: "Privacy as architecture", body: "Remove analytics cookies, persistent identifiers and visitor profiles from the foundation." }, { title: "Founder-led", body: "Keep the product close to the people accountable for customer outcomes." }, { title: "European by design", body: "Build in Europe and host analytics infrastructure in Dublin, Ireland." }], cta: "Bring the founder your hardest measurement question."
  },
  "careers": {
    title: "Work With Us — SealMetrics", description: "Apply with a public example of your work rather than a conventional CV.", eyebrow: "WORK WITH US", hero: "Show us your work, *not your CV.*", intro: "Many hiring funnels collect more personal information than the first decision needs. Send a public link that shows what you think, build, write, sell or support.", kind: "listing",
    items: [{ label: "Team", title: "Engineering", body: "Systems, data infrastructure, APIs and product performance." }, { label: "Team", title: "Product & Design", body: "Interfaces and narratives that make complicated evidence usable." }, { label: "Team", title: "Growth & Marketing", body: "Arguments, experiments and content that earn attention honestly." }, { label: "Team", title: "Sales & Partnerships", body: "Commercial work grounded in the prospect's actual measurement problem." }, { label: "Team", title: "Customer Success", body: "Turn implementation into decisions customers can defend." }, { label: "Team", title: "Open application", body: "If your strongest work does not fit a box, show us anyway." }], cta: "Pick a door. Show us what you shipped."
  },
  "privacy": {
    title: "Privacy Policy — Sealmetrics", description: "Editorial outline for the current SealMetrics Privacy Policy.", eyebrow: "LEGAL · PRIVACY", hero: "Privacy Policy", intro: "This redesigned page is an editorial outline, not approved policy text. Production must use the complete current Privacy Policy after legal review.", kind: "legal",
    items: [{ title: "1. Who we are", body: "Sealmetrics SL, based in Barcelona, is responsible for the service and the information described in this policy." }, { title: "2. Data on sealmetrics.com", body: "We process information submitted through account, demo and contact interactions, plus strictly necessary service and security data." }, { title: "3. Data on client websites", body: "The analytics architecture counts aggregate events without cookies, fingerprints or persistent visitor profiles." }, { title: "4. Legal basis", body: "Processing depends on the relevant service relationship, legitimate operational needs and legal obligations." }, { title: "5. Storage and residency", body: "Analytics infrastructure is hosted in Dublin, Ireland." }, { title: "6. Retention", body: "Data is retained only for defined service, contractual and legal periods." }, { title: "7. Your rights", body: "Where applicable, individuals may exercise access, correction, deletion, objection, restriction and portability rights." }, { title: "8. Third-party sharing", body: "Service providers are limited, documented and governed by appropriate agreements." }, { title: "9. Contact", body: "Privacy questions and rights requests can be directed through the official SealMetrics contact channels." }],
    note: "BLOCKED FOR PUBLICATION: this outline cannot replace the complete current Privacy Policy. Insert the approved policy verbatim and obtain legal review before launch."
  },
  "terms": {
    title: "Terms of Service — Sealmetrics", description: "Editorial outline for the current SealMetrics Terms of Service.", eyebrow: "LEGAL · TERMS", hero: "Terms of Service", intro: "This redesigned page is an editorial outline, not contract text. Production must use the complete current Terms of Service after legal review.", kind: "legal",
    items: [{ title: "1. Introduction and acceptance", body: "Using the service requires acceptance of the current terms and any applicable order." }, { title: "2. Definitions", body: "The terms define the customer, account, site, event, subscription and related service concepts." }, { title: "3. The service", body: "SealMetrics provides analytics capture, reporting, attribution, integrations and related capabilities according to the selected plan." }, { title: "4. Accounts", body: "Customers are responsible for accurate registration, authorized users and account security." }, { title: "5. Plans and pricing", body: "Usage limits, features and commercial terms follow the selected plan and order." }, { title: "6. Billing and payments", body: "Subscriptions, renewals, taxes, disputes and non-payment follow the stated billing cycle and commercial agreement." }, { title: "7. Acceptable use", body: "The service may not be abused, disrupted, reverse engineered unlawfully or used to violate rights or applicable law." }, { title: "8. Data ownership", body: "Customers retain ownership of their data; SealMetrics receives only the rights required to provide the service." }, { title: "9. Liability and termination", body: "Limits, exclusions and termination rights apply as stated in the complete current agreement." }],
    note: "BLOCKED FOR PUBLICATION: this outline cannot replace the complete current Terms. Insert the approved contractual text verbatim and obtain legal review before launch."
  },
  "dpa": {
    title: "Data Processing Agreement — Sealmetrics", description: "Editorial outline for the current SealMetrics Data Processing Agreement.", eyebrow: "LEGAL · DPA", hero: "Data Processing Agreement", intro: "This redesigned page is an editorial outline, not an Article 28 agreement. Production and signature must use the complete current DPA after legal review.", kind: "legal",
    items: [{ title: "1. Definitions", body: "Terms follow GDPR and the service agreement, including controller, processor, personal data and processing." }, { title: "2. Subject matter and instructions", body: "The current DPA defines the contracted service and the documented instructions under which SealMetrics processes customer data." }, { title: "3. Audience-measurement architecture", body: "The architecture is designed around a defined measurement purpose, data minimization and the absence of persistent visitor identification." }, { title: "4. Confidentiality and security", body: "The current DPA describes confidentiality commitments and the applicable technical and organizational measures." }, { title: "5. Subprocessors", body: "The current DPA and subprocessor documentation define providers, contractual controls and the applicable notification process." }, { title: "6. Data-subject rights", body: "The current DPA defines assistance with applicable requests in line with the nature of processing." }, { title: "7. Breaches", body: "The current DPA describes the detection, investigation and notification procedures relevant to breach obligations." }, { title: "8. DPIAs and audits", body: "The current DPA defines the information and assistance available for impact assessments, consultation and audits." }, { title: "9. Deletion and return", body: "The current DPA defines deletion or return according to termination instructions, retention settings and applicable requirements." }],
    note: "BLOCKED FOR PUBLICATION AND SIGNATURE: this outline cannot replace the complete current DPA. Insert the approved agreement verbatim and obtain legal review."
  },
  "trust": {
    title: "Trust Center — Sealmetrics", description: "Security, legal and compliance documentation in one place.", eyebrow: "TRUST CENTER", hero: "Evidence for the people who *have to sign off.*", intro: "The trust center collects the documents security, privacy, procurement and legal teams need to evaluate SealMetrics.", kind: "legal",
    items: [{ title: "Public documents", body: "Security overview, Privacy Policy, Terms of Service and Data Processing Agreement." }, { title: "Available on request", body: "Subprocessor details, additional security materials and relevant assessment evidence." }, { title: "Architecture", body: "No visitor profiles, no cookies, EU-hosted analytics processing and documented retention." }, { title: "Subscribe to changes", body: "Material updates to trust documentation can be followed through the official notification process." }], cta: "Start the review with the architecture."
  },
};
