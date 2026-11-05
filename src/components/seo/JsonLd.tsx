import React from "react";
import { SITE_CONFIG, SERVICES_DATA } from "@/config/site";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.brandName,
    url: SITE_CONFIG.siteUrl,
    description: SITE_CONFIG.hero.subheadline,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.developerName,
      url: SITE_CONFIG.portfolioUrl,
    },
    sameAs: [SITE_CONFIG.portfolioUrl],
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel REST API",
      "UI/UX Design",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Development Services",
      itemListElement: SERVICES_DATA.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
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