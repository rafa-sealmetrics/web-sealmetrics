"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.sealmetrics) {
      window.sealmetrics.micro("404", { path: window.location.pathname });
    }
  }, []);

  return (
    <section className="pt-40 pb-28 bg-white min-h-[70vh] flex items-center">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
        <p className="font-mono text-[5rem] sm:text-[7rem] font-medium text-warm-200 leading-none mb-6">
          404
        </p>
        <h1 className="font-serif text-[2rem] sm:text-[2.5rem] font-normal text-text-primary mb-4">
          Page not found
        </h1>
        <p className="text-[1rem] text-text-secondary mb-10 max-w-[480px] mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved. Here
          are some helpful links instead.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center px-8 py-3.5 text-[0.95rem] font-medium text-text-primary border border-warm-200 rounded-[4px] no-underline hover:bg-warm-white transition-colors"
          >
            Book a Demo
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-[0.85rem]">
          <Link
            href="/product"
            className="text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            Product
          </Link>
          <Link
            href="/pricing"
            className="text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/glossary"
            className="text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            Glossary
          </Link>
        </div>
      </div>
    </section>
  );
}
