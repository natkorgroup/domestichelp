import type { Metadata } from "next";

const origin = "https://domestichelp.ca";

export function pageMetadata({ title, description, path, image = "/hero-household-help.png" }: { title: string; description: string; path: string; image?: string }): Metadata {
  const url = origin + path;
  const absoluteImage = origin + image;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", title, description, url, siteName: "DomesticHelp.ca", images: [{ url: absoluteImage, width: 1681, height: 935, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [absoluteImage] },
  };
}

export function structuredData(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
