import { MetadataRoute } from "next";
import portfolioData from "@/data/portfolio.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = portfolioData.personal.domain;

  const works = (portfolioData.works || []).map((work) => ({
    url: `${domain}/works/${work.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...works,
  ];
}
