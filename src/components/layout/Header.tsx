"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";

/* ===========================================
   Dropdown data
   =========================================== */

interface DropdownItem {
  href: string;
  label: string;
  desc: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

const solutionsDropdown: NavDropdown = {
  label: "Solutions",
  items: [
    {
      href: "/for/cmo",
      label: "For CMOs",
      desc: "Revenue attribution on 100% of data",
    },
    {
      href: "/for/cto",
      label: "For CTOs",
      desc: "One script, full compliance, zero maintenance",
    },
    {
      href: "/for/dpo",
      label: "For DPOs",
      desc: "GDPR compliant by architecture",
    },
    {
      href: "/data-loss-calculator",
      label: "Data Loss Calculator",
      desc: "See how much traffic you are missing",
    },
  ],
};

const resourcesDropdown: NavDropdown = {
  label: "Resources",
  items: [
    { href: "/blog", label: "Blog", desc: "Analytics insights and guides" },
    {
      href: "/videos",
      label: "Videos",
      desc: "Product demos and tutorials",
    },
    {
      href: "/glossary",
      label: "Glossary",
      desc: "Analytics terms explained",
    },
    {
      href: "/how-it-works",
      label: "How It Works",
      desc: "Cookieless tracking explained",
    },
    {
      href: "/vs-ga4",
      label: "vs GA4",
      desc: "Side-by-side comparison",
    },
    {
      href: "/changelog",
      label: "Changelog",
      desc: "Product updates",
    },
  ],
};

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
            {dropdown.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={onClose}
                className="block px-5 py-2.5 no-underline hover:bg-warm-50 transition-colors"
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
        </div>
      )}
    </div>
  );
}

/* ===========================================
   Header
   =========================================== */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
        <Link href="/" className="flex items-center no-underline">
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
            href="/product"
            className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            Product
          </Link>

          <Dropdown
            dropdown={solutionsDropdown}
            isOpen={openDropdown === "Solutions"}
            onToggle={() => handleToggle("Solutions")}
            onClose={handleClose}
          />

          <Link
            href="/pricing"
            className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            Pricing
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
            Login
          </a>
          <Link
            href="/demo"
            className="inline-flex items-center px-5 py-2.5 text-[0.875rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Demo
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
              href="/product"
              className="py-2.5 text-text-secondary no-underline hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Product
            </Link>

            {/* Solutions group */}
            <div className="py-2.5">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary">
                Solutions
              </span>
              <div className="mt-2 flex flex-col gap-1 pl-3 border-l border-warm-100">
                {solutionsDropdown.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1.5 text-[0.9rem] text-text-secondary no-underline hover:text-text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/pricing"
              className="py-2.5 text-text-secondary no-underline hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>

            {/* Resources group */}
            <div className="py-2.5">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary">
                Resources
              </span>
              <div className="mt-2 flex flex-col gap-1 pl-3 border-l border-warm-100">
                {resourcesDropdown.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1.5 text-[0.9rem] text-text-secondary no-underline hover:text-text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="https://my.sealmetrics.com/register"
              className="py-2.5 text-text-secondary no-underline hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </a>

            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-2.5 text-[0.875rem] font-medium text-white bg-text-primary rounded-[4px] no-underline mt-3"
              onClick={() => setMobileOpen(false)}
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
