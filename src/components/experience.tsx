"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-5xl overflow-hidden px-6 py-16 md:px-12 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-12"
      >
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 rounded-xl p-3">
            <Briefcase className="text-primary h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
        </div>

        <div className="border-border/50 relative mt-8 space-y-12 border-l-2 pb-4">
          {experience.map((job) => (
            <div key={job.company} className="group relative pl-6">
              {/* Timeline dot */}
              <div className="bg-border group-hover:bg-primary absolute top-2 -left-[5px] h-[9px] w-[9px] rounded-full transition-colors duration-300" />

              <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                <div>
                  <h3 className="text-foreground text-xl font-bold">{job.role}</h3>
                  <div className="text-muted-foreground text-lg font-medium">{job.company}</div>
                </div>
                <div className="text-muted-foreground/80 bg-muted w-fit rounded-full px-3 py-1 font-mono text-sm">
                  {job.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{job.description}</p>

              {job.bullets && (
                <ul className="text-muted-foreground marker:text-primary/70 mb-6 list-disc space-y-1.5 pl-5 text-sm md:text-base">
                  {job.bullets.map((bullet: string) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {job.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="border-border/50 bg-background text-foreground hover:bg-muted inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors"
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
  );
}
