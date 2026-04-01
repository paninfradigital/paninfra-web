import type { MetadataRoute } from "next";
import { PROJECTS, SITE } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.siteUrl}`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.siteUrl}/why-paninfra`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.siteUrl}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE.siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.siteUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE.siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
