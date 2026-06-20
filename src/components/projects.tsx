"use client"

import { Code2, ExternalLink, ArrowRight, LayoutTemplate, Server, Database, Monitor } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion"
import portfolioData from "@/data/portfolio.json"

export function Projects() {
  const project = portfolioData.projects[0];

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

        <div className="relative border-l border-border/50 ml-4 md:ml-6 pb-4">
          <div className="relative pl-8 md:pl-12 group transition-all duration-500">
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_0_rgba(var(--primary),0)] group-hover:shadow-[0_0_10px_2px_rgba(var(--primary),0.5)]" />
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="flex flex-col lg:flex-row gap-12 justify-between">
              
              {/* Left Column - Content */}
              <div className="flex-1 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {project.status}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {project.bullets && (
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground marker:text-primary/70">
                      {project.bullets.map((bullet: string, i: number) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-md bg-secondary/50 border border-border/50 text-xs font-medium text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <Link href={project.links.live} target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg", className: "gap-2 rounded-full font-semibold shadow-lg shadow-primary/20" })}>
                    View Live App
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link href={project.links.caseStudy} className={buttonVariants({ variant: "ghost", size: "lg", className: "gap-2 rounded-full font-medium hover:bg-secondary/50 group/btn" })}>
                    Read Deep Dive
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Visual representation */}
              <div className="flex-1 lg:max-w-sm rounded-2xl bg-gradient-to-tr from-muted/80 to-muted border border-border/50 flex flex-col items-center justify-center min-h-[300px] p-8 text-center relative overflow-hidden shadow-inner group/diagram">
                {/* Abstract grid pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative z-10 w-full flex flex-col items-center gap-8"
                >
                  <div className="flex items-center justify-between w-full max-w-[240px] relative px-2">
                    
                    {/* Background connecting line */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
                    
                    {/* Animated Data Packets */}
                    <motion.div 
                      className="absolute top-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(var(--primary),0.5)] -translate-y-1/2 z-0"
                      animate={{ left: ["10%", "90%"], opacity: [0, 1, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute top-1/2 w-1.5 h-1.5 rounded-full bg-secondary-foreground shadow-[0_0_8px_1px_rgba(255,255,255,0.3)] -translate-y-1/2 z-0"
                      animate={{ right: ["10%", "90%"], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />

                    {/* Node: Client */}
                    <div className="w-12 h-12 rounded-xl bg-background border border-border shadow-lg flex items-center justify-center z-10 relative group-hover/diagram:-translate-y-1 transition-transform duration-500">
                      <Monitor className="w-5 h-5 text-muted-foreground group-hover/diagram:text-foreground transition-colors" />
                    </div>
                    
                    {/* Node: API Server */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 shadow-[0_0_25px_-5px_rgba(var(--primary),0.4)] flex items-center justify-center z-10 relative animate-[pulse_3s_ease-in-out_infinite]">
                      <Server className="w-7 h-7 text-primary" />
                    </div>
                    
                    {/* Node: Database */}
                    <div className="w-12 h-12 rounded-xl bg-background border border-border shadow-lg flex items-center justify-center z-10 relative group-hover/diagram:-translate-y-1 transition-transform duration-500">
                      <Database className="w-5 h-5 text-muted-foreground group-hover/diagram:text-foreground transition-colors" />
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground tracking-wide">{project.architecture.title}</p>
                    <p className="text-xs text-muted-foreground mt-2 px-4 font-mono">{project.architecture.description}</p>
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
