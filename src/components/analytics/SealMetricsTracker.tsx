"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getContentGroup, getMicroConversion } from "@/lib/sealmetrics";

declare global {
  interface Window {
    sealmetrics: {
      call: (event: undefined, data: { group: string }) => void;
      conv: (event: string, value?: number, data?: Record<string, string>) => void;
      micro: (event: string, data?: Record<string, string>) => void;
    };
  }
}

export function SealMetricsTracker() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    if (typeof window === "undefined" || !window.sealmetrics) return;
    window.sealmetrics.call(undefined, { group: getContentGroup(pathname) });
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.sealmetrics) return;
    const micro = getMicroConversion(pathname);
    if (micro) {
      window.sealmetrics.micro(micro);
    }
  }, [pathname]);

  return null;
}
