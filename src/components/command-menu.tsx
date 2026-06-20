"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Code,
  Home,
  User,
  Briefcase,
  Mail,
  Code2,
  Download
} from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem
            value="Home"
            onSelect={() => runCommand(() => router.push("/"))}
          >
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem
            value="About Background Profile"
            onSelect={() => runCommand(() => router.push("/#about"))}
          >
            <User className="mr-2 h-4 w-4" />
            <span>About</span>
          </CommandItem>
          <CommandItem
            value="Experience Work"
            onSelect={() => runCommand(() => router.push("/#experience"))}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Experience</span>
          </CommandItem>
          <CommandItem
            value="Skills Tech Stack"
            onSelect={() => runCommand(() => router.push("/#skills"))}
          >
            <Code2 className="mr-2 h-4 w-4" />
            <span>Skills</span>
          </CommandItem>
          <CommandItem
            value="Projects Portfolio Work"
            onSelect={() => runCommand(() => router.push("/#projects"))}
          >
            <Code className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem
            value="Contact Reach Email"
            onSelect={() => runCommand(() => router.push("/#contact"))}
          >
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>

          <CommandItem
            value="Download Resume CV"
            onSelect={() =>
              runCommand(() => window.open(portfolioData.personal.resumeUrl, "_blank"))
            }
          >
            <Download className="mr-2 h-4 w-4" />
            <span>Download Resume</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
