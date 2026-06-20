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
  FileText,
} from "lucide-react";

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
            value="Experience Work"
            onSelect={() => runCommand(() => router.push("/#experience"))}
          >
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Experience</span>
          </CommandItem>
          <CommandItem
            value="Projects Portfolio Work"
            onSelect={() => runCommand(() => router.push("/#projects"))}
          >
            <Code className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem
            value="Contact Reach Mail"
            onSelect={() => runCommand(() => router.push("/#contact"))}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>
          <CommandItem
            value="Download Resume CV"
            onSelect={() =>
              runCommand(() => window.open("/resume.pdf", "_blank"))
            }
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>Download Resume</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
