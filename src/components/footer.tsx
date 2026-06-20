import Link from "next/link"
import portfolioData from "@/data/portfolio.json"

export function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-border/40 mt-auto py-8">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-lg font-bold tracking-tight text-foreground">
          {personal.name}
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="/#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
        </nav>

        {/* Copyright */}
        <div className="text-sm text-muted-foreground">
          © {personal.name}
        </div>
      </div>
    </footer>
  )
}
