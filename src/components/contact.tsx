"use client"

import { Mail, Send, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import portfolioData from "@/data/portfolio.json"

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 w-full max-w-3xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center gap-8"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-2xl">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            I&apos;m currently available for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="w-full relative group rounded-2xl border border-border/50 bg-card p-8 md:p-12 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.15)] flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a 
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center whitespace-nowrap text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-xl px-8 w-full sm:w-auto gap-2 shadow-lg"
            >
              <Send className="w-5 h-5" />
              Say Hello
            </a>
            
            <button 
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center whitespace-nowrap text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-14 rounded-xl px-8 w-full sm:w-auto gap-2 border border-border/50"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Copy Email
                </>
              )}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
