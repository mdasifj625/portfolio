"use client";

import { Layers } from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  const { skills: skillsGroups } = portfolioData;

  return (
    <section
      id="skills"
      className="border-border/40 mx-auto w-full max-w-5xl overflow-hidden border-t px-6 py-16 md:px-12 md:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          hidden: { opacity: 0 },
        }}
        className="flex flex-col gap-12"
      >
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 rounded-xl p-3">
            <Layers className="text-primary h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillsGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="group border-border/50 hover:border-primary/50 relative border-l-2 pl-6 transition-colors"
            >
              <h3 className="text-foreground mb-6 flex items-center gap-2 text-lg font-bold">
                {group.category}
              </h3>
              <ul className="flex flex-col">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="group/item border-border/40 text-muted-foreground hover:text-foreground flex cursor-default items-center gap-3 border-b py-2.5 text-sm font-medium transition-colors last:border-0"
                  >
                    <span className="flex w-6 shrink-0 items-center justify-center">
                      <span className="bg-primary/40 group-hover/item:bg-primary h-[2px] w-3 rounded-full transition-all duration-300 group-hover/item:w-5 group-hover/item:shadow-[0_0_8px_-1px_rgba(var(--primary),0.6)]" />
                    </span>
                    <span className="transition-transform duration-300 group-hover/item:translate-x-1">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
