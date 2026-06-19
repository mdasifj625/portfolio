import { Code2, ExternalLink } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 w-full max-w-5xl mx-auto border-t border-border/40">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Project</h2>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card overflow-hidden transition-all hover:border-primary/20">
          <div className="p-6 md:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">TarbiyahOS</h3>
                  <p className="text-lg text-muted-foreground">
                    A comprehensive SaaS platform designed to streamline educational operations, focusing on scalability and performance.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Architecture Highlights</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span><strong>Frontend:</strong> Next.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span><strong>Backend & Auth:</strong> Supabase</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span><strong>Database:</strong> PostgreSQL</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span><strong>Monitoring:</strong> Sentry & LogRocket</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Link href="https://tarbiyahos.com" target="_blank" rel="noreferrer" className={buttonVariants({ className: "gap-2" })}>
                    View Live Project
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link href="/blog/building-tarbiyahos" className={buttonVariants({ variant: "outline", className: "gap-2" })}>
                    Read Technical Deep Dive
                  </Link>
                </div>
              </div>
              
              {/* Architecture Diagram Placeholder */}
              <div className="flex-1 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center min-h-[300px] lg:min-h-full p-8 text-center text-muted-foreground">
                <div className="space-y-2">
                  <Code2 className="w-8 h-8 mx-auto opacity-50" />
                  <p className="font-medium text-sm">Architecture Diagram</p>
                  <p className="text-xs opacity-70">Frontend -&gt; Supabase -&gt; PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
