"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getContentGroup, getMicroConversion, pushEvent } from "@/lib/analytics";

export function GTMTracker() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    pushEvent({
      event: "page_view",
      page_path: pathname,
      content_group: getContentGroup(pathname),
    });
  }, [pathname]);

  useEffect(() => {
    const micro = getMicroConversion(pathname);
    if (micro) {
      pushEvent({ event: micro });
    }
  }, [pathname]);

  return null;
}
