"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import type { Locale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { localizedHref } from "@/lib/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

/* ===========================================
   Dropdown data
   =========================================== */

interface DropdownItem {
  href: string;
  label: string;
  desc: string;
}

interface DropdownGroup {
  title?: string;
  items: DropdownItem[];
}

interface NavDropdown {
  label: string;
  groups: DropdownGroup[];
}

function getSolutionsDropdown(t: ReturnType<typeof getDictionary>["header"], locale: Locale): NavDropdown {
  return {
    label: t.solutions,
    groups: [
      {
        title: t.byRole,
        items: [
          { href: localizedHref("/for/cmo", locale), label: t.forCmos, desc: t.forCmosDesc },
          { href: localizedHref("/for/cto", locale), label: t.forCtos, desc: t.forCtosDesc },
          { href: localizedHref("/for/dpo", locale), label: t.forDpos, desc: t.forDposDesc },
        ],
      },
      {
        title: t.byIndustry,
        items: [
          { href: localizedHref("/for/ecommerce", locale), label: t.ecommerce, desc: t.ecommerceDesc },
          { href: localizedHref("/for/hotels", locale), label: t.hotels, desc: t.hotelsDesc },
          { href: localizedHref("/for/saas", locale), label: t.saas, desc: t.saasDesc },
          { href: localizedHref("/for/agencies", locale), label: t.agencies, desc: t.agenciesDesc },
          { href: localizedHref("/for/media", locale), label: t.media, desc: t.mediaDesc },
          { href: localizedHref("/for/finance", locale), label: t.finance, desc: t.financeDesc },
          { href: localizedHref("/for/healthcare", locale), label: t.healthcare, desc: t.healthcareDesc },
          { href: localizedHref("/for/education", locale), label: t.education, desc: t.educationDesc },
        ],
      },
      {
        items: [
          { href: localizedHref("/data-loss-calculator", locale), label: t.dataLossCalc, desc: t.dataLossCalcDesc },
        ],
      },
    ],
  };
}

function getResourcesDropdown(t: ReturnType<typeof getDictionary>["header"], locale: Locale): NavDropdown {
  return {
    label: t.resources,
    groups: [
      {
        items: [
          { href: localizedHref("/blog", locale), label: t.blog, desc: t.blogDesc },
          { href: localizedHref("/videos", locale), label: t.videos, desc: t.videosDesc },
          { href: localizedHref("/glossary", locale), label: t.glossary, desc: t.glossaryDesc },
          { href: localizedHref("/how-it-works", locale), label: t.howItWorks, desc: t.howItWorksDesc },
          { href: localizedHref("/platforms", locale), label: t.platforms, desc: t.platformsDesc },
          { href: localizedHref("/vs-ga4", locale), label: t.vsGa4, desc: t.vsGa4Desc },
          { href: localizedHref("/changelog", locale), label: t.changelog, desc: t.changelogDesc },
        ],
      },
    ],
  };
}

/* ===========================================
   Dropdown component
   =========================================== */

function Dropdown({
  dropdown,
  isOpen,
  onToggle,
  onClose,
}: {
  dropdown: NavDropdown;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1 text-[0.9rem] text-text-secondary hover:text-text-primary transition-colors cursor-pointer bg-transparent border-none p-0"
      >
        {dropdown.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M3 4.5L6 7.5L9 4.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
          <div role="menu" className="bg-white border border-warm-100 rounded-[4px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-2 min-w-[260px]">
            {dropdown.groups.map((group, gi) => (
              <div key={gi}>
                {gi > 0 && (
                  <div className="my-1.5 mx-5 border-t border-warm-100" />
                )}
                {group.title && (
                  <span className="block px-5 pt-2 pb-1 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                    {group.title}
                  </span>
                )}
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={onClose}
                    className="block px-5 py-2 no-underline hover:bg-warm-50 transition-colors"
                  >
                    <span className="block text-[0.85rem] font-medium text-text-primary leading-snug">
                      {item.label}
                    </span>
                    <span className="block text-[0.75rem] text-text-tertiary mt-0.5">
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ===========================================
   Header
   =========================================== */

export function Header({ locale = "en" }: { locale?: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const t = getDictionary(locale).header;
  const solutionsDropdown = getSolutionsDropdown(t, locale);
  const resourcesDropdown = getResourcesDropdown(t, locale);

  const handleToggle = useCallback(
    (label: string) => {
      setOpenDropdown(openDropdown === label ? null : label);
    },
    [openDropdown]
  );

  const handleClose = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-xl border-b border-warm-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-16">
        <Link href={localizedHref("/", locale)} className="flex items-center no-underline">
          <Image
            src="/logos/logo-sealmetrics-negro.png"
            alt="SealMetrics"
            width={160}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
          <Link
            href={localizedHref("/product", locale)}
            className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            {t.product}
          </Link>

          <Dropdown
            dropdown={solutionsDropdown}
            isOpen={openDropdown === "Solutions"}
            onToggle={() => handleToggle("Solutions")}
            onClose={handleClose}
          />

          <Link
            href={localizedHref("/pricing", locale)}
            className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            {t.pricing}
          </Link>

          <Dropdown
            dropdown={resourcesDropdown}
            isOpen={openDropdown === "Resources"}
            onToggle={() => handleToggle("Resources")}
            onClose={handleClose}
          />

          <a
            href="https://my.sealmetrics.com/register"
            className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            {t.login}
          </a>
          <Link
            href={localizedHref("/demo", locale)}
            className="inline-flex items-center px-5 py-2.5 text-[0.875rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            {t.bookDemo}
          </Link>
          <LanguageSwitcher locale={locale} />
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t.closeMenu : t.openMenu}
          aria-expanded={mobileOpen}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5l-10 10" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-warm-100 px-4 sm:px-6 py-6 max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            <Link
              href={localizedHref("/product", locale)}
              className="py-2.5 text-text-secondary no-underline hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {t.product}
            </Link>

            {/* Solutions group */}
            <div className="py-2.5">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary">
                {t.solutions}
              </span>
              <div className="mt-2 flex flex-col gap-1 pl-3 border-l border-warm-100">
                {solutionsDropdown.groups.map((group) =>
                  group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-1.5 text-[0.9rem] text-text-secondary no-underline hover:text-text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))
                )}
              </div>
            </div>

            <Link
              href={localizedHref("/pricing", locale)}
              className="py-2.5 text-text-secondary no-underline hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {t.pricing}
            </Link>

            {/* Resources group */}
            <div className="py-2.5">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary">
                {t.resources}
              </span>
              <div className="mt-2 flex flex-col gap-1 pl-3 border-l border-warm-100">
                {resourcesDropdown.groups.map((group) =>
                  group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-1.5 text-[0.9rem] text-text-secondary no-underline hover:text-text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))
                )}
              </div>
            </div>

            <a
              href="https://my.sealmetrics.com/register"
              className="py-2.5 text-text-secondary no-underline hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {t.login}
            </a>

            <Link
              href={localizedHref("/demo", locale)}
              className="inline-flex items-center justify-center px-5 py-2.5 text-[0.875rem] font-medium text-white bg-text-primary rounded-[4px] no-underline mt-3"
              onClick={() => setMobileOpen(false)}
            >
              {t.bookDemo}
            </Link>

            <div className="mt-3 flex justify-center">
              <LanguageSwitcher locale={locale} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
