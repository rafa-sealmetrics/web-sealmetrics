"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type InternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

export function InternalLink({ href, onClick, children, ...props }: InternalLinkProps) {
  function navigate(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.currentTarget.target === "_blank"
    ) return;

    event.preventDefault();
    window.location.assign(new URL(href, window.location.href).href);
  }

  return <a {...props} href={href} onClick={navigate}>{children}</a>;
}
