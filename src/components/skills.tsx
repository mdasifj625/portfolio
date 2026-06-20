"use client"

import { Layers, ChevronRight } from "lucide-react"
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
              className="group relative border-l border-border/50 pl-6 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-6 text-lg font-bold text-foreground flex items-center gap-2">
                {group.category}
              </h3>
              <ul className="flex flex-col">
                {group.items.map((skill, i) => (
                  <li
                    key={i}
                    className="group/item flex items-center gap-3 py-2.5 border-b border-border/40 last:border-0 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-default"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/80 text-primary/70 transition-all duration-300 group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:shadow-[0_0_10px_-2px_rgba(var(--primary),0.5)]">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                    <span className="transition-transform duration-300 group-hover/item:translate-x-1">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
