"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

export function About() {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      className="border-border/40 mx-auto w-full max-w-6xl overflow-hidden border-t px-6 py-16 md:px-12 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16"
      >
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 rounded-xl p-3">
              <User className="text-primary h-6 w-6" />
            </div>
            <h2 className="text-foreground text-3xl font-extrabold tracking-tight md:text-4xl">
              Behind the Code
            </h2>
          </div>

          <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
            {personal.about?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full justify-center md:w-1/3"
        >
          <div className="border-background ring-primary/20 dark:ring-primary/40 group relative h-64 w-64 overflow-hidden rounded-full border-4 shadow-2xl ring-4 md:h-80 md:w-80">
            <Image
              src={personal.avatarUrl}
              alt={personal.name}
              width={320}
              height={320}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
