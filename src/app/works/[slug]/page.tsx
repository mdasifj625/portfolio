import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
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

  const relatedProject = portfolioData.projects?.find(p => p.links.caseStudy.includes(slug));

  return (
    <main className="flex-1 min-h-[calc(100vh-4rem)] py-12 md:py-20 w-full bg-background relative selection:bg-primary/30">
      <div className="max-w-3xl mx-auto px-6">
        {/* Top Navigation */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* Header */}
          <header className="space-y-6 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              {work.tags.map((tag: string) => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-xs font-medium tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              {work.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground border-b border-border/40 pb-8 mt-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={work.date}>{work.date}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{work.readTime}</span>
              </div>
              {relatedProject?.links?.live && (
                <a 
                  href={relatedProject.links.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors font-medium ml-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Project
                </a>
              )}
            </div>
          </header>

          {/* Intro Box */}
          <div className="p-6 md:p-8 rounded-xl bg-muted/30 border border-border/50 mb-12">
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              {work.intro}
            </p>
          </div>

          {/* Content Body */}
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-p:leading-7 prose-p:text-muted-foreground">
            {work.sections.map((section: { heading: string; content: string }, idx: number) => (
              <div key={section.heading} className="mb-12 scroll-mt-20">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-baseline gap-3">
                  <span className="text-primary/50 font-mono text-lg font-normal">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  {section.heading}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

        </article>
      </div>
    </main>
  );
}
