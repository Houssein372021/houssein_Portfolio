import { contactInfo } from "@/data/contact";

export const siteUrl = "https://houssein-ghannoum.vercel.app";

export const seo = {
  url: siteUrl,
  siteName: "Portfolio Houssein GHANNOUM",
  title: "Houssein GHANNOUM | Développeur Full-Stack Java / React en France",
  description:
    "Portfolio de Houssein GHANNOUM, développeur Full-Stack Java / React et ingénieur logiciel en France. Projets React, Spring Boot, Python, Docker, CI/CD et applications SaaS.",
  author: "Houssein GHANNOUM",
  image: `${siteUrl}/avatar-portfolio.webp`,
  locale: "fr_FR",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  keywords: [
    "Houssein GHANNOUM",
    "Houssein Ghannoum portfolio",
    "développeur full-stack Java React",
    "ingénieur logiciel France",
    "développeur Spring Boot React",
    "développeur React TypeScript",
    "développeur Java Spring Boot",
    "portfolio développeur full-stack",
    "Docker CI/CD PostgreSQL",
    "OrderHubly",
    "AssistByScan",
  ],
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#houssein-ghannoum`,
      name: seo.author,
      url: siteUrl,
      image: seo.image,
      jobTitle: ["Développeur Full-Stack Java / React", "Ingénieur logiciel"],
      description: seo.description,
      email: `mailto:${contactInfo.email}`,
      telephone: contactInfo.phone,
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "ISEN Yncréa Ouest",
      },
      knowsAbout: [
        "Java",
        "Spring Boot",
        "React",
        "TypeScript",
        "Python",
        "Flask",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "CI/CD",
        "REST API",
        "Android Kotlin",
      ],
      sameAs: [contactInfo.linkedin, contactInfo.github],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: seo.siteName,
      inLanguage: ["fr-FR", "en"],
      publisher: {
        "@id": `${siteUrl}/#houssein-ghannoum`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: seo.title,
      description: seo.description,
      inLanguage: "fr-FR",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#houssein-ghannoum`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: seo.image,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Projets full-stack de Houssein GHANNOUM",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareSourceCode",
            name: "OrderHubly",
            url: `${siteUrl}/#project-orderhubly`,
            description:
              "Plateforme de gestion de commandes et boutique publique pour vendeurs sociaux, restaurants et petits commerces.",
            programmingLanguage: ["TypeScript", "Java"],
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareSourceCode",
            name: "La Beyrouthine",
            url: `${siteUrl}/#project-beyrouthine`,
            description:
              "Site restaurant avec menu dynamique, réservation en ligne, back-office sécurisé et déploiement Docker.",
            programmingLanguage: ["TypeScript", "Java"],
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareSourceCode",
            name: "AssistByScan",
            url: `${siteUrl}/#project-sezaia`,
            description:
              "Plateforme SaaS de maintenance par QR code avec interface web React, backend Flask/MySQL et application Android Kotlin.",
            programmingLanguage: ["TypeScript", "Python", "Kotlin"],
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "SoftwareSourceCode",
            name: "Caashpay",
            url: `${siteUrl}/#project-caashpay`,
            description:
              "API de paiement CB2A et ISO8583 avec simulateur bancaire Python et stockage MongoDB.",
            programmingLanguage: ["Java", "Python"],
          },
        },
      ],
    },
  ],
};
