export function DiagnosticBanner() {
  return (
    <div className="bg-warm-900 py-3 mt-[72px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-center gap-3 text-[0.85rem]">
        <span className="text-dark-text-secondary">
          Curious what revenue your analytics is missing?
        </span>
        <a
          href="#quiz"
          className="text-green-muted font-medium no-underline hover:underline"
        >
          Find your hidden traffic in 2 minutes &darr;
        </a>
      </div>
    </div>
  );
}
