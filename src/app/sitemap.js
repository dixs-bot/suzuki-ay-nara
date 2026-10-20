import type { MetadataRoute } from "next";
import { siteConfig } from "../data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://suzuki-ay-nara.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
