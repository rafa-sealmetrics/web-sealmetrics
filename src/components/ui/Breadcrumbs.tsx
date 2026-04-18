import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({
  items,
  locale = "en",
}: {
  items: BreadcrumbItem[];
  locale?: "en" | "es";
}) {
  const rootLabel = locale === "es" ? "Inicio" : "Home";
  const rootHref = locale === "es" ? "/es" : "/";
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-28 pb-0"
    >
      <ol className="flex items-center gap-1.5 text-[0.75rem] text-text-tertiary">
        <li>
          <Link
            href={rootHref}
            className="no-underline hover:text-text-primary transition-colors"
          >
            {rootLabel}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {item.href && i < items.length - 1 ? (
              <Link
                href={item.href}
                className="no-underline hover:text-text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
