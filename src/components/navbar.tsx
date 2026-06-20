"use client";

import * as React from "react";
import { ScrollLink as Link } from "@/components/scroll-link";
import { useTheme } from "next-themes";
import { Moon, Sun, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioData from "@/data/portfolio.json";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const { socialLinks } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "twitter":
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <header className="border-border/40 bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b shadow-sm backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex">
          <Link href="/" className="group mr-4 flex items-center space-x-2 md:mr-8">
            <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-1.5 transition-colors">
              <TerminalSquare className="text-primary h-5 w-5" />
            </div>
            <span className="group-hover:text-primary hidden text-lg font-bold tracking-tight transition-colors sm:inline-block">
              {portfolioData.personal.initials}
            </span>
          </Link>
          <nav className="hidden items-center space-x-5 text-sm font-medium md:flex lg:space-x-8">
            {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="hover:text-foreground text-muted-foreground group relative transition-colors"
              >
                {item}
                <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              variant="outline"
              className="bg-muted/50 hover:bg-muted text-muted-foreground border-border/50 relative h-9 w-full justify-start rounded-full text-sm font-normal shadow-none sm:pr-12 md:w-56 lg:w-64"
              onClick={() =>
                document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))
              }
            >
              <span className="hidden lg:inline-flex">Search website...</span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="bg-background pointer-events-none absolute top-1.5 right-1.5 hidden h-6 items-center gap-1 rounded-full border px-2 font-mono text-[10px] font-medium opacity-100 shadow-sm select-none sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>

          <nav className="ml-2 flex items-center space-x-1">
            <div className="border-border/50 mr-1 hidden items-center space-x-1 border-r pr-2 md:flex">
              {socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.platform}
                  className="focus-visible:ring-ring hover:bg-primary/10 hover:text-primary inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  {getIcon(link.icon)}
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
