import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://domestichelp.ca"),
  title: "DomesticHelp.ca | Private Household Staff Recruitment",
  description:
    "Find trusted housekeepers, senior companions, family assistants, and private household staff across Canada. Personally recruited for the way you live.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "DomesticHelp.ca",
    title: "DomesticHelp.ca | Private Household Staff Recruitment",
    description: "Trusted household help, personally recruited for Canadian families.",
    images: [{ url: "/og-domestichelp.png", width: 1731, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DomesticHelp.ca | Private Household Staff Recruitment",
    description: "Trusted household help, personally recruited for Canadian families.",
    images: ["/og-domestichelp.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
