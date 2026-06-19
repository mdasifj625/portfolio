import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function BuildingTarbiyahOS() {
  return (
    <main className="flex-1 min-h-[calc(100vh-4rem)] px-6 py-12 md:py-24 max-w-4xl mx-auto w-full">
      <Link href="/blog" className={buttonVariants({ variant: "ghost", className: "mb-8 -ml-4" })}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Technical Deep Dives
      </Link>

      <article className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {/* Header */}
        <header className="space-y-6 border-b border-border/40 pb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Building TarbiyahOS with Next.js and Supabase
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-06-19">June 19, 2026</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              <span>Architecture</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-10 text-lg leading-relaxed text-muted-foreground">
          <p className="text-xl text-foreground font-medium">
            Building TarbiyahOS was a unique engineering challenge that focused heavily on creating a multi-tenant SaaS application designed to perform reliably under heavy load. The decision to use <strong>Next.js</strong> for the frontend and <strong>Supabase</strong> for the backend stemmed from the need for high velocity without sacrificing stability.
          </p>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Architecture Decisions</h2>
            <p>
              When evaluating the tech stack for TarbiyahOS, we needed to optimize for three core pillars: developer experience, performance, and built-in security for multi-tenancy.
            </p>

            <div className="space-y-8 mt-8">
              <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 transition-colors hover:bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">1. The Frontend: Next.js App Router</h3>
                <p className="mb-4">
                  Choosing the Next.js App Router allowed us to heavily utilize React Server Components. This drastically reduced the client-side JavaScript bundle. 
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                  <li>Faster Time To Interactive (TTI) for heavy dashboard views.</li>
                  <li>Incredible SEO for our public-facing landing and documentation pages.</li>
                  <li>Seamless data fetching without the need for complex API endpoints.</li>
                </ul>
              </div>

              <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 transition-colors hover:bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">2. The Backend: Supabase (PostgreSQL)</h3>
                <p className="mb-4">
                  We opted to bypass traditional ORMs and custom-built REST APIs in favor of Supabase&apos;s direct Postgres connection and built-in Row Level Security (RLS). This enabled us to:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                  <li>Enforce strict tenant isolation directly at the database level.</li>
                  <li>Stream real-time updates to connected clients using PostgreSQL triggers.</li>
                  <li>Leverage Supabase Auth for frictionless SSO and magic-link logins.</li>
                </ul>
              </div>

              <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 transition-colors hover:bg-card">
                <h3 className="text-xl font-bold text-foreground mb-4">3. Analytics and Monitoring</h3>
                <p className="mb-4">
                  Visibility into user behavior and system health is critical for a SaaS product.
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                  <li><strong>PostHog:</strong> Integrated heavily for feature flags and comprehensive product analytics.</li>
                  <li><strong>Sentry & LogRocket:</strong> Critical for capturing edge-case errors and replaying user sessions in our distributed environments.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground border-t border-border/40 pt-10">Challenges & Learnings</h2>
            <p>
              The primary challenge was managing complex state across the application without relying on heavy global state managers like Redux. By relying on React Server Components for data fetching and React Query for client-side caching, we kept the architecture mental model simple and predictable.
            </p>
            <p>
              Looking back, optimizing our database indexes early and thoroughly testing Row Level Security policies saved us from potential performance bottlenecks as the platform scaled.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
