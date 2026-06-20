import { MetadataRoute } from "next";
import portfolioData from "@/data/portfolio.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${portfolioData.personal.domain}/sitemap.xml`,
  };
}
