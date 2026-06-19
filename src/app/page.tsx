import { Button } from "@/components/ui/button";
import { Download, ChevronRight, Briefcase } from "lucide-react";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-24">
        <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Subtitle / Eyebrow */}
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
            Md Asif Jawed • Available for new opportunities
          </div>

          {/* Headings */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Senior <span className="text-primary">Backend</span> Engineer
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground">
              Building scalable backend systems, distributed architectures, and production-grade SaaS products.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-border/50 text-sm">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-2xl text-foreground">4+</span>
              <span className="text-muted-foreground">Years Experience</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-2xl text-foreground">SDE-III</span>
              <span className="text-muted-foreground">Senior Level</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-2xl text-foreground">AWS</span>
              <span className="text-muted-foreground">Cloud Expert</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-2xl text-foreground">SaaS</span>
              <span className="text-muted-foreground">Founder</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
              <Briefcase className="w-4 h-4" />
              View Projects
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto gap-2">
              Contact Me
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
      
      <Experience />
      <Skills />
    </>
  );
}
