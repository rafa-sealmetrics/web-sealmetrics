"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/vs-ga4", label: "vs GA4" },
  { href: "/pricing", label: "Pricing" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-xl border-b border-warm-100">
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between h-16">
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

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demo"
            className="inline-flex items-center px-5 py-2.5 text-[0.875rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Demo
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
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

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-warm-100 px-8 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary no-underline hover:text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-2.5 text-[0.875rem] font-medium text-white bg-text-primary rounded-[4px] no-underline mt-2"
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
