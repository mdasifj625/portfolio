import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, ArrowUpRight, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import portfolioData from "@/data/portfolio.json";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = portfolioData.works?.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: `${work.title} | ${portfolioData.personal.name}`,
    description: work.intro,
  };
}

export function generateStaticParams() {
  return (portfolioData.works || []).map((work) => ({
    slug: work.slug,
  }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = portfolioData.works?.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  // Find the live link from projects if available
  const relatedProject = portfolioData.projects?.find(p => p.links.caseStudy.includes(slug));

  return (
    <main className="flex-1 min-h-[calc(100vh-4rem)] pb-24 w-full overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-20" />

      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-24 relative z-10">
        <Link href="/#projects" className={buttonVariants({ variant: "ghost", className: "mb-12 hover:bg-primary/10 hover:text-primary transition-colors" })}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <article className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Hero Section of the Case Study */}
          <header className="space-y-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              {work.tags.map((tag: string, idx: number) => (
                <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase border border-primary/20">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
              {work.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground border-y border-border/50 py-6 mt-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <time dateTime={work.date}>{work.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{work.readTime}</span>
              </div>
              {relatedProject?.links?.live && (
                <a 
                  href={relatedProject.links.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors ml-auto"
                >
                  Visit Live Project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </header>

          {/* Intro block */}
          <div className="mt-16 max-w-4xl">
            <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border/50 shadow-sm overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors duration-700" />
              <Sparkles className="w-8 h-8 text-primary mb-6" />
              <p className="text-2xl md:text-3xl text-foreground font-medium leading-snug relative z-10">
                {work.intro}
              </p>
            </div>
          </div>

          {/* Premium Sticky Sections */}
          <div className="mt-24 space-y-24 md:space-y-32 border-t border-border/40 pt-16">
            {work.sections.map((section: { heading: string; content: string }, idx: number) => (
              <section key={idx} className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start group">
                <div className="sticky top-32">
                  <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase mb-4 block opacity-60">
                    0{idx + 1} // Phase
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    {section.heading}
                  </h3>
                  <div className="h-1 w-12 bg-primary/50 mt-6 rounded-full group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-loose prose-p:text-muted-foreground prose-p:text-lg md:prose-p:text-xl">
                  <p>{section.content}</p>
                </div>
              </section>
            ))}
          </div>

        </article>
      </div>
    </main>
  );
}
