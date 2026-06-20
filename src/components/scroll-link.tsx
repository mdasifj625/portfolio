"use client";

import Link, { LinkProps } from "next/link";
import React from "react";

interface ScrollLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function ScrollLink({ children, href, onClick, ...props }: Readonly<ScrollLinkProps>) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    onClick?.(e);

    const hrefString = typeof href === "string" ? href : href.href;

    if (hrefString && hrefString.startsWith("/#")) {
      const targetId = hrefString.replace("/#", "");
      const elem = document.getElementById(targetId);

      if (elem && window.location.pathname === "/") {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hrefString);
      }
    } else if (hrefString && hrefString.startsWith("#")) {
      const targetId = hrefString.replace("#", "");
      const elem = document.getElementById(targetId);

      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hrefString);
      }
    }
  };

  return (
    <Link href={href} onClick={handleScroll} {...props}>
      {children}
    </Link>
  );
}
