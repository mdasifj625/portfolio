import { ScrollLink as Link } from "@/components/scroll-link";
import { ChevronRight, Briefcase } from "lucide-react";
import { ResumeButton } from "@/components/resume-button";
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
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col items-center justify-start px-6 pt-12 pb-16 md:justify-center md:py-24">
        <div className="animate-in fade-in slide-in-from-bottom-8 w-full max-w-4xl space-y-8 text-center duration-1000 md:-mt-8 lg:mt-0">
          {/* Subtitle / Eyebrow */}
          <div className="border-border/50 bg-secondary/30 text-secondary-foreground animate-in fade-in zoom-in inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur-md duration-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            {personal.availability}
          </div>

          {/* Headings */}
          <div className="space-y-6 pt-4">
            <h1 className="text-foreground text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="from-primary via-primary/80 to-primary/50 mt-2 block bg-gradient-to-r bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            <h2 className="text-muted-foreground text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {personal.role}
            </h2>
            <p className="text-muted-foreground/90 mx-auto max-w-2xl pt-2 text-lg leading-relaxed sm:text-xl">
              {personal.description}
            </p>
          </div>

          {/* Stats Bento Box */}
          <div className="bg-border/40 border-border/50 mx-auto my-8 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border shadow-sm md:grid-cols-4">
            {personal.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background/60 hover:bg-muted/40 group flex flex-col items-center justify-center gap-1.5 px-4 py-6 backdrop-blur-md transition-colors"
              >
                <span className="text-foreground group-hover:text-primary text-3xl font-extrabold tracking-tight transition-colors duration-300 md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-center text-xs font-medium tracking-wider uppercase md:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <ResumeButton className="w-full sm:w-auto" />
            <Link
              href="/#projects"
              className="ring-offset-background focus-visible:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md px-8 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
            >
              <Briefcase className="h-4 w-4" />
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground group inline-flex h-11 w-full items-center justify-center gap-2 rounded-md px-8 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
            >
              Contact Me
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
