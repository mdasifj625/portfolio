import Link from "next/link";
import { PenTool } from "lucide-react";

export default function BlogIndex() {
  return (
    <main className="flex-1 flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-16 md:py-24">
      <div className="max-w-3xl w-full space-y-8">
        <div className="flex items-center gap-4 border-b border-border/40 pb-8">
          <div className="p-3 bg-primary/10 rounded-xl">
            <PenTool className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Technical Deep Dives</h1>
            <p className="text-muted-foreground mt-2">Engineering writeups and architectural decisions.</p>
          </div>
        </div>

        <div className="space-y-6">
          <article className="group flex flex-col space-y-2 p-6 rounded-2xl border border-border/50 bg-card transition-colors hover:border-primary/20">
            <Link href="/blog/building-tarbiyahos" className="absolute inset-0 z-10">
              <span className="sr-only">View Article</span>
            </Link>
            <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
              Building TarbiyahOS with Next.js and Supabase
            </h2>
            <p className="text-muted-foreground">
              A deep dive into the architecture decisions, scalability patterns, and trade-offs made while building a multi-tenant SaaS.
            </p>
            <div className="text-sm font-medium text-muted-foreground pt-4">
              Published on Jun 19, 2026
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
