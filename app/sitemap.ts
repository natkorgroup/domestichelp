import type { MetadataRoute } from "next";
import { cities, services } from "./lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://domestichelp.ca";
  const staticPaths = ["", "/about", "/services", "/locations", "/how-it-works", "/pricing", "/payroll", "/for-ageing-parents", "/faq", "/contact"];
  const pages: MetadataRoute.Sitemap = staticPaths.map((path) => ({ url: origin + path, changeFrequency: "monthly", priority: path === "" ? 1 : .8 }));
  for (const service of services) pages.push({ url: origin + "/services/" + service.slug, changeFrequency: "monthly", priority: .8 });
  for (const city of cities) {
    pages.push({ url: origin + "/locations/" + city.slug, changeFrequency: "monthly", priority: .8 });
    for (const service of services) pages.push({ url: origin + "/locations/" + city.slug + "/" + service.slug, changeFrequency: "monthly", priority: .7 });
  }
  return pages;
}
