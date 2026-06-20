import { MetadataRoute } from 'next'
import portfolioData from "@/data/portfolio.json"
 
export default function sitemap(): MetadataRoute.Sitemap {
  const domain = portfolioData.personal.domain;
  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${domain}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${domain}/blog/building-tarbiyahos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
