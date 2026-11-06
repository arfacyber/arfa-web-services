import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SITE_CONFIG } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default:
      "ARFA.DEV Services — Jasa Pembuatan Website & Aplikasi Web Indonesia",
    template: "%s | ARFA.DEV Services",
  },
  description: SITE_CONFIG.hero.subheadline,
  keywords: [...SITE_CONFIG.seoKeywords],
  authors: [
    {
      name: SITE_CONFIG.developerName,
      url: SITE_CONFIG.portfolioUrl,
    },
  ],
  creator: SITE_CONFIG.developerName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.productName,
    title: "ARFA.DEV Services — Build Your Digital Presence With ARFA.DEV",
    description: SITE_CONFIG.hero.subheadline,
  },
  twitter: {
    card: "summary_large_image",
    title: "ARFA.DEV Services — Jasa Pembuatan Website & Aplikasi Web",
    description: SITE_CONFIG.hero.subheadline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}