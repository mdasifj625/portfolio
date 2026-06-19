"use client"

import { Layers } from "lucide-react"
import { motion } from "framer-motion"
import portfolioData from "@/data/portfolio.json"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Skills() {
  const { skills: skillsGroups } = portfolioData;

  return (
    <section id="skills" className="py-24 px-6 md:px-12 w-full max-w-5xl mx-auto border-t border-border/40 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ show: { opacity: 1, transition: { staggerChildren: 0.2 } }, hidden: { opacity: 0 } }}
        className="flex flex-col gap-12"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Layers className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all hover:shadow-sm hover:border-primary/20"
            >
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-lg bg-secondary/80 px-3 py-1.5 text-sm font-medium text-secondary-foreground border border-border/40 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_15px_-3px_rgba(var(--primary),0.4)] hover:-translate-y-0.5 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
