import Link from "next/link"
import { Mail } from "lucide-react"
import portfolioData from "@/data/portfolio.json"

export function Footer() {
  const { personal, socialLinks } = portfolioData;



  return (
    <footer className="border-t border-border/40 mt-auto bg-muted/20">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {personal.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {personal.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigation</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/#experience" className="hover:text-primary transition-colors w-fit">Experience</Link>
              <Link href="/#projects" className="hover:text-primary transition-colors w-fit">Projects</Link>
              <Link href="/blog" className="hover:text-primary transition-colors w-fit">Technical Blog</Link>
              <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors w-fit">Resume</a>
            </nav>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-primary animate-pulse">❤</span> in Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
