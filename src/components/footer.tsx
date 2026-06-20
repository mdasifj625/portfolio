import { ScrollLink as Link } from "@/components/scroll-link";
import portfolioData from "@/data/portfolio.json";

export function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-border/40 mt-auto border-t py-8">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        {/* Brand */}
        <div className="text-foreground text-lg font-bold tracking-tight">{personal.name}</div>

        {/* Navigation */}
        <nav className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-sm font-medium md:gap-6">
          <Link href="/#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#experience" className="hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="/#skills" className="hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="/#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-muted-foreground text-sm">© {personal.name}</div>
      </div>
    </footer>
  );
}
