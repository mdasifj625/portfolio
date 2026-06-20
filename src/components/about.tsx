"use client"

import { User } from "lucide-react"
import { motion } from "framer-motion"
import portfolioData from "@/data/portfolio.json"

export function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 w-full max-w-6xl mx-auto border-t border-border/40 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center"
      >
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <User className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">Behind the Code</h2>
          </div>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            {personal.about?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background ring-4 ring-primary/20 dark:ring-primary/40 shadow-2xl group">
            {/* Using a standard img tag to prevent next/image build errors if the user hasn't added avatar.jpg yet */}
            <img 
              src={personal.avatarUrl} 
              alt={personal.name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // Fallback to a placeholder if the avatar isn't uploaded yet
                e.currentTarget.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(personal.name) + "&size=512&background=random";
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
