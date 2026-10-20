const baseUrl = "https://suzuki-ay-nara.vercel.app";

export default function sitemap() {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
