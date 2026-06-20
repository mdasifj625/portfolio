import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
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

  return (
    <main className="flex-1 min-h-[calc(100vh-4rem)] px-6 py-12 md:py-24 max-w-4xl mx-auto w-full">
      <Link href="/#projects" className={buttonVariants({ variant: "ghost", className: "mb-8 -ml-4" })}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Projects
      </Link>

      <article className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {/* Header */}
        <header className="space-y-6 border-b border-border/40 pb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            {work.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={work.date}>{work.date}</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{work.readTime}</span>
            </div>
            {work.tags.map((tag: string, idx: number) => (
              <div key={idx} className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="space-y-10 text-lg leading-relaxed text-muted-foreground">
          <p className="text-xl text-foreground font-medium">
            {work.intro}
          </p>

          <section className="space-y-8">
            <div className="space-y-8 mt-8">
              {work.sections.map((section: any, idx: number) => (
                <div key={idx} className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 transition-colors hover:bg-card">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h3>
                  <p className="text-muted-foreground">{section.content}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
