import React from "react";
import { SITE_CONFIG, SERVICE_CATEGORIES } from "@/config/site";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.productName,
    brand: SITE_CONFIG.brandName,
    url: SITE_CONFIG.siteUrl,
    description: SITE_CONFIG.hero.subheadline,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.developerName,
      url: SITE_CONFIG.portfolioUrl,
    },
    sameAs: [SITE_CONFIG.portfolioUrl],
    areaServed: "ID",
    knowsAbout: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "PHP",
      "Laravel",
      "MySQL",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Pembuatan Website & Aplikasi Web ARFA.DEV",
      itemListElement: SERVICE_CATEGORIES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}