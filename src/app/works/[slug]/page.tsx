import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>): Promise<Metadata> {
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

export default async function WorkPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const work = portfolioData.works?.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  const relatedProject = portfolioData.projects?.find((p) => p.links.caseStudy.includes(slug));

  return (
    <main className="bg-background selection:bg-primary/30 relative min-h-[calc(100vh-4rem)] w-full flex-1 py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        {/* Top Navigation */}
        <Link
          href="/#projects"
          className="text-muted-foreground hover:text-foreground group mb-10 inline-flex items-center text-sm font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Header */}
          <header className="mb-12 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              {work.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-secondary/50 text-secondary-foreground rounded-md px-2.5 py-1 text-xs font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-foreground text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {work.title}
            </h1>

            <div className="text-muted-foreground border-border/40 mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-b pb-8 text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={work.date}>{work.date}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{work.readTime}</span>
              </div>
              {relatedProject?.links?.live && (
                <a
                  href={relatedProject.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-primary/80 ml-auto flex items-center gap-1.5 font-medium transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Project
                </a>
              )}
            </div>
          </header>

          {/* Intro Box */}
          <div className="bg-muted/30 border-border/50 mb-12 rounded-xl border p-6 md:p-8">
            <p className="text-foreground text-lg leading-relaxed font-medium md:text-xl">
              {work.intro}
            </p>
          </div>

          {/* Content Body */}
          <div className="prose prose-slate dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-p:leading-7 prose-p:text-muted-foreground max-w-none">
            {work.sections.map((section: { heading: string; content: string }, idx: number) => (
              <div key={section.heading} className="mb-12 scroll-mt-20">
                <h3 className="text-foreground mb-4 flex items-baseline gap-3 text-2xl font-bold">
                  <span className="text-primary/50 font-mono text-lg font-normal">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </h3>
                <p className="text-muted-foreground/90 text-base leading-relaxed md:text-lg">
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
