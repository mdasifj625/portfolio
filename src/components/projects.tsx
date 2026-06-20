"use client";

import { Code2, ExternalLink, ArrowRight, Server, Database, Monitor } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

export function Projects() {
  const project = portfolioData.projects[0];

  return (
    <section
      id="projects"
      className="border-border/40 mx-auto w-full max-w-5xl overflow-hidden border-t px-6 py-16 md:px-12 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-12"
      >
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 rounded-xl p-3">
            <Code2 className="text-primary h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Project</h2>
        </div>

        <div className="border-border/50 relative mt-8 border-l-2 pb-4">
          <div className="group relative pl-6 transition-all duration-500">
            {/* Timeline dot */}
            <div className="bg-border group-hover:bg-primary absolute top-2 -left-[5px] h-[9px] w-[9px] rounded-full shadow-[0_0_10px_0_rgba(var(--primary),0)] transition-colors duration-300 group-hover:shadow-[0_0_10px_2px_rgba(var(--primary),0.5)]" />

            <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
            <div className="flex flex-col justify-between gap-12 lg:flex-row">
              {/* Left Column - Content */}
              <div className="flex-1 space-y-8">
                <div>
                  <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                    <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
                    {project.status}
                  </div>
                  <h3 className="text-foreground mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {project.bullets && (
                    <ul className="text-muted-foreground marker:text-primary/70 list-disc space-y-2 pl-5 text-sm md:text-base">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary/50 border-border/50 text-secondary-foreground rounded-md border px-3 py-1.5 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      size: "lg",
                      className: "shadow-primary/20 gap-2 rounded-full font-semibold shadow-lg",
                    })}
                  >
                    View Live App
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  <Link
                    href={project.links.caseStudy}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "lg",
                      className: "hover:bg-secondary/50 group/btn gap-2 rounded-full font-medium",
                    })}
                  >
                    Read Deep Dive
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column - Visual representation */}
              <div className="from-muted/80 to-muted border-border/50 group/diagram relative flex min-h-[300px] flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl border bg-gradient-to-tr p-8 text-center shadow-inner lg:max-w-sm">
                {/* Abstract grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative z-10 flex w-full flex-col items-center gap-8"
                >
                  <div className="relative flex w-full max-w-[240px] items-center justify-between px-2">
                    {/* Background connecting line */}
                    <div className="via-border absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent to-transparent" />

                    {/* Animated Data Packets */}
                    <motion.div
                      className="bg-primary absolute top-1/2 z-0 h-2 w-2 -translate-y-1/2 rounded-full shadow-[0_0_10px_2px_rgba(var(--primary),0.5)]"
                      animate={{ left: ["10%", "90%"], opacity: [0, 1, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="bg-secondary-foreground absolute top-1/2 z-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full shadow-[0_0_8px_1px_rgba(255,255,255,0.3)]"
                      animate={{ right: ["10%", "90%"], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />

                    {/* Node: Client */}
                    <div className="bg-background border-border relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border shadow-lg transition-transform duration-500 group-hover/diagram:-translate-y-1">
                      <Monitor className="text-muted-foreground group-hover/diagram:text-foreground h-5 w-5 transition-colors" />
                    </div>

                    {/* Node: API Server */}
                    <div className="bg-primary/10 border-primary/30 relative z-10 flex h-16 w-16 animate-[pulse_3s_ease-in-out_infinite] items-center justify-center rounded-2xl border shadow-[0_0_25px_-5px_rgba(var(--primary),0.4)]">
                      <Server className="text-primary h-7 w-7" />
                    </div>

                    {/* Node: Database */}
                    <div className="bg-background border-border relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border shadow-lg transition-transform duration-500 group-hover/diagram:-translate-y-1">
                      <Database className="text-muted-foreground group-hover/diagram:text-foreground h-5 w-5 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <p className="text-foreground font-semibold tracking-wide">
                      {project.architecture.title}
                    </p>
                    <p className="text-muted-foreground mt-2 px-4 font-mono text-xs">
                      {project.architecture.description}
                    </p>
                  </div>
                </motion.div>

                {/* Decorative glow in the diagram */}
                <div className="bg-primary/20 absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 translate-y-1/2 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
