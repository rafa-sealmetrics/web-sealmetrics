const logos = [
  "Mango",
  "MediaMarkt",
  "Promofarma",
  "Tous",
  "Masaltos",
  "Tendam",
];

export function Logos() {
  return (
    <section className="py-14 border-t border-b border-warm-100">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary text-center mb-8">
          Trusted by marketing teams across Europe
        </p>
        <div className="flex items-center justify-center gap-14 flex-wrap opacity-40">
          {logos.map((name) => (
            <span
              key={name}
              className="text-[0.95rem] font-medium text-text-primary tracking-[0.02em]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
