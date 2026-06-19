"use client"

import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import portfolioData from "@/data/portfolio.json"

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 md:px-12 w-full max-w-5xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-12"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12 pb-4">
          {experience.map((job, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-primary transition-colors duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                  <div className="text-lg font-medium text-muted-foreground">{job.company}</div>
                </div>
                <div className="text-sm font-mono text-muted-foreground/80 bg-muted px-3 py-1 rounded-full w-fit">
                  {job.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                {job.description}
              </p>

              {job.bullets && (
                <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-muted-foreground mb-6 marker:text-primary/70">
                  {job.bullets.map((bullet: string, i: number) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {job.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border border-border/50 bg-background px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
