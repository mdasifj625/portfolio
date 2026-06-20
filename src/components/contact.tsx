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
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 w-full max-w-5xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Let&apos;s Connect</h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m currently available for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="relative border-l-2 border-border/50 pl-6 mt-4 flex flex-col items-start text-left gap-6 w-full">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Direct Email</h3>
            <a 
              href={`mailto:${personal.email}`}
              className="text-xl md:text-2xl font-medium text-foreground hover:text-primary transition-colors inline-block"
            >
              {personal.email}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a 
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-lg px-6 w-full sm:w-auto gap-2 shadow-md"
            >
              <Send className="w-4 h-4" />
              Write an Email
            </a>
            
            <button 
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-lg px-6 w-full sm:w-auto gap-2 border border-border/50"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Email Copied!
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  Copy Address
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
