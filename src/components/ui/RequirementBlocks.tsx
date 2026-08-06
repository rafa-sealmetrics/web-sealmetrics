import type { ReactNode } from "react";

/* Shared editorial primitives for the "12 requirements" buyer's guide (EN + ES).
   Colour roles follow the design system: coral for the failure, brand for the
   requirement, amber for the actionable test. */

type Tone = "risk" | "req" | "test";

const TONES: Record<Tone, string> = {
  risk: "bg-pink-soft text-[#8F332D]",
  req: "bg-mint text-[#1F5C48]",
  test: "bg-amber-soft text-[#7A5B12]",
};

/** Small uppercase mono chip used as a lead-in label above a paragraph. */
export function Chip({
  tone = "req",
  children,
}: {
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.06em] ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}

/** Numbered h2 for each requirement, with an anchor for the index strip. */
export function ReqHeading({
  n,
  id,
  children,
}: {
  n: number;
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mt-14 mb-5 flex items-baseline gap-3 scroll-mt-28 font-serif text-[1.5rem] font-medium leading-[1.25] text-text-primary"
    >
      <span className="shrink-0 rounded-full bg-mint px-2.5 py-1 font-mono text-[0.78rem] font-semibold text-[#1F5C48]">
        {String(n).padStart(2, "0")}
      </span>
      <span>{children}</span>
    </h2>
  );
}

/** Jump-list of all 12 requirements, rendered as pills. */
export function ReqIndex({
  label,
  items,
}: {
  label: string;
  items: { n: number; id: string; title: string }[];
}) {
  return (
    <nav className="my-10 rounded-[14px] border border-warm-100 bg-warm-white p-6">
      <span className="block font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-text-tertiary">
        {label}
      </span>
      <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
        {items.map((r) => (
          <li key={r.id}>
            <a
              href={`#${r.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-white px-3 py-1.5 text-[0.82rem] text-text-secondary no-underline transition-colors hover:border-brand hover:text-text-primary"
            >
              <span className="font-mono text-[0.7rem] font-semibold text-brand">
                {String(r.n).padStart(2, "0")}
              </span>
              {r.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Amber-accented callout holding the verification step for a requirement. */
export function TestBox({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 rounded-[12px] border border-amber-soft bg-amber-soft/40 p-5">
      <Chip tone="test">{label}</Chip>
      <div className="mt-3 space-y-3 text-[0.98rem] leading-[1.75] text-text-body">
        {children}
      </div>
    </div>
  );
}

/** Row of stat cards — used for the data-loss cascade and the weight contrast. */
export function StatRow({
  items,
}: {
  items: { value: string; label: string; tone?: "risk" | "brand" | "neutral" }[];
}) {
  const colour = {
    risk: "text-red-alert",
    brand: "text-brand",
    neutral: "text-text-primary",
  };
  return (
    <div className="my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <div
          key={s.label}
          className="rounded-[12px] border border-warm-100 bg-white p-5"
        >
          <span
            className={`block font-mono text-[1.6rem] font-semibold leading-none ${colour[s.tone || "neutral"]}`}
          >
            {s.value}
          </span>
          <span className="mt-2.5 block text-[0.82rem] leading-[1.5] text-text-secondary">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Dark slab holding the three scoring bands. */
export function ScoreBands({
  eyebrow,
  title,
  bands,
}: {
  eyebrow: string;
  title: string;
  bands: { range: string; verdict: string; detail: string; tone: Tone }[];
}) {
  const accent: Record<Tone, string> = {
    req: "text-brand border-brand/40",
    test: "text-amber border-amber/40",
    risk: "text-red-alert border-red-alert/40",
  };
  return (
    <section
      className="relative my-12 overflow-hidden rounded-[20px] bg-ink px-6 py-11 sm:px-10"
      style={{
        backgroundImage:
          "radial-gradient(110% 80% at 88% 0%, rgba(232,184,75,0.22) 0%, rgba(232,184,75,0) 60%)",
      }}
    >
      <span className="inline-block rounded-full border border-white/15 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-white/60">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-serif text-[1.6rem] font-medium leading-[1.2] text-white">
        {title}
      </h2>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {bands.map((b) => (
          <div
            key={b.range}
            className={`rounded-[14px] border-t-2 bg-white/[0.04] p-5 ${accent[b.tone]}`}
          >
            <span className="block font-mono text-[1.35rem] font-semibold leading-none">
              {b.range}
            </span>
            <span className="mt-3 block text-[0.95rem] font-medium text-white">
              {b.verdict}
            </span>
            <span className="mt-1.5 block text-[0.84rem] leading-[1.6] text-white/55">
              {b.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Wide table wrapper: CSS edge shadows plus an explicit hint at the widths
    where the 760px table actually overflows the 872px prose column. */
export function ScrollableTable({
  hint,
  children,
}: {
  hint: string;
  children: ReactNode;
}) {
  return (
    <div className="my-8">
      {/* Below 824px a 760px table stops fitting the prose column (936 max-width
          minus 2×32 padding). Tailwind's max-* variant is `width < N`, so 824
          turns the hint on at exactly 823 and down. */}
      <p className="mb-2.5 hidden items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.06em] text-text-tertiary max-[824px]:flex">
        {hint}
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M1 5h13M10.5 1 14.5 5l-4 4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p>
      <div className="scroll-shadow-x">{children}</div>
    </div>
  );
}

/** Score pill for the scorecard table — 2 reads as met, 1 as partial. */
export function ScorePill({ score }: { score: number }) {
  const met = score === 2;
  return (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[0.8rem] font-semibold ${
        met ? "bg-mint text-[#1F5C48]" : "bg-amber-soft text-[#7A5B12]"
      }`}
    >
      {score}
    </span>
  );
}
