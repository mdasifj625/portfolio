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
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Technical Blog</Link>
          <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Resume</a>
        </nav>

        {/* Copyright */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
