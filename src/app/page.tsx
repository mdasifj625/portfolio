import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ChevronRight, Briefcase } from "lucide-react";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  const { personal } = portfolioData;

  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-start md:justify-center min-h-[calc(100vh-4rem)] px-6 pt-12 pb-16 md:py-24">
        <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 md:-mt-8 lg:mt-0">
          {/* Subtitle / Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-4 py-1.5 text-sm font-medium text-secondary-foreground shadow-sm backdrop-blur-md animate-in fade-in zoom-in duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {personal.availability}
          </div>

          {/* Headings */}
          <div className="space-y-6 pt-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
              Hi, I&apos;m{" "}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50">
                {personal.name}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground tracking-tight">
              {personal.role}
            </h2>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground/90 leading-relaxed pt-2">
              {personal.description}
            </p>
          </div>

          {/* Stats Bento Box */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 border border-border/50 rounded-2xl overflow-hidden my-8 shadow-sm w-full max-w-3xl mx-auto">
            {personal.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-1.5 bg-background/60 backdrop-blur-md px-4 py-6 hover:bg-muted/40 transition-colors group">
                <span className="font-extrabold text-3xl md:text-4xl text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-muted-foreground text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full sm:w-auto gap-2 group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 w-full sm:w-auto gap-2"
            >
              <Briefcase className="w-4 h-4" />
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full sm:w-auto gap-2 group"
            >
              Contact Me
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>

      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
