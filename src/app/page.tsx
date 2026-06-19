import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ChevronRight, Briefcase } from "lucide-react";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  const { personal } = portfolioData;

  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-24">
        <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Subtitle / Eyebrow */}
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
            {personal.availability}
          </div>

          {/* Headings */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              {personal.role.split("Backend")[0]} 
              <span className="text-primary">Backend</span> 
              {personal.role.split("Backend")[1]}
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground">
              {personal.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-border/50 text-sm">
            {personal.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="font-bold text-2xl text-foreground">{stat.value}</span>
                <span className="text-muted-foreground">{stat.label}</span>
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
            <a 
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full sm:w-auto gap-2 group"
            >
              Contact Me
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </main>
      
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}
