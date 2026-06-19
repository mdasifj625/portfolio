"use client"

import { Code2, ExternalLink, ArrowRight, LayoutTemplate } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 w-full max-w-5xl mx-auto border-t border-border/40 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-12"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Project</h2>
        </div>

        <div className="group relative rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/30 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_-15px_rgba(var(--primary),0.1)]">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative p-8 md:p-10 lg:p-12 z-10">
            <div className="flex flex-col lg:flex-row gap-12 justify-between">
              
              {/* Left Column - Content */}
              <div className="flex-1 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Production Ready
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">TarbiyahOS</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A comprehensive SaaS platform designed to streamline educational operations, engineered for high velocity, scalability, and optimal performance.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js App Router", "Supabase", "PostgreSQL", "Tailwind CSS", "Sentry", "LogRocket"].map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-md bg-secondary/50 border border-border/50 text-xs font-medium text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <Link href="https://tarbiyahos.com" target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg", className: "gap-2 rounded-full font-semibold shadow-lg shadow-primary/20" })}>
                    View Live App
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link href="/blog/building-tarbiyahos" className={buttonVariants({ variant: "ghost", size: "lg", className: "gap-2 rounded-full font-medium hover:bg-secondary/50 group/btn" })}>
                    Read Deep Dive
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Visual representation */}
              <div className="flex-1 lg:max-w-sm rounded-2xl bg-gradient-to-tr from-muted/80 to-muted border border-border/50 flex flex-col items-center justify-center min-h-[300px] p-8 text-center relative overflow-hidden shadow-inner">
                {/* Abstract grid pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative z-10 space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-background border border-border/50 shadow-xl flex items-center justify-center">
                    <LayoutTemplate className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">SaaS Architecture</p>
                    <p className="text-xs text-muted-foreground mt-1 px-4">Server Components • RLS • Real-time DB</p>
                  </div>
                </motion.div>
                
                {/* Decorative glow in the diagram */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
