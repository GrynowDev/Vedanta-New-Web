import { BLOGS } from "@/data";

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const routes = ["", "/luxury-villas-in-kufri", "/gallery", "/blogs", "/contact"];

  const staticEntries = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogEntries = BLOGS.map((post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
