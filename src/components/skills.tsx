"use client"

import { Layers } from "lucide-react"

const skillsGroups = [
  {
    category: "Backend",
    skills: ["Node.js", "TypeScript", "NestJS", "Express"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    category: "Cloud",
    skills: ["AWS Lambda", "EKS", "EC2", "SQS", "SNS", "CloudWatch", "IAM"]
  },
  {
    category: "DevOps",
    skills: ["Docker", "GitHub Actions", "CI/CD"]
  },
  {
    category: "Observability",
    skills: ["Sentry", "PostHog", "LogRocket"]
  },
  {
    category: "Architecture",
    skills: ["Microservices", "Distributed Systems", "Event Driven Systems", "System Design"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 w-full max-w-5xl mx-auto border-t border-border/40">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Layers className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all hover:shadow-sm hover:border-primary/20"
            >
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
