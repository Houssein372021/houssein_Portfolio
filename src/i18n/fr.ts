export const fr = {
  nav: {
    about: "À propos",
    skills: "Compétences",
    experience: "Expériences",
    projects: "Projets",
    education: "Formation",
    contact: "Contact",
  },
  hero: {
    available: "Disponible pour un emploi en France",
    name: "Houssein GHANNOUM",
    title: "Ingénieur Logiciel Généraliste",
    subtitle: "",
    tagline1:
      "Développeur Full-Stack Java / React passionné par la création d'applications web modernes, robustes et déployées en production.",
    tagline2:
      "Ingénieur logiciel junior spécialisé en Java Spring Boot, React et Python, avec une expérience concrète en API REST, Docker, CI/CD et déploiement VPS.",
    cta: { projects: "Voir mes projets", cv: "Télécharger mon CV", contact: "Me contacter" },
    badge: "Ingénieur Full-Stack",
  },
  about: {
    title: "À propos",
    subtitle: "Ingénieur logiciel orienté produit",
    p1: "Diplômé ingénieur de l'ISEN Yncréa Ouest, je conçois et déploie des applications complètes — du frontend React au backend Java/Python, jusqu'à la mise en production sur VPS avec Docker et CI/CD.",
    p2: "J'ai acquis une expérience concrète en alternance et en stage sur des projets variés : SaaS, applications métier, mobile Android et API de paiement sécurisées.",
    p3: "Mon ambition : créer des produits techniques solides, performants et utiles, avec une forte autonomie et un vrai sens produit.",
    points: [
      "Formation ingénieur ISEN Yncréa Ouest",
      "Expérience en alternance & stage",
      "Full-stack : Frontend, Backend, Mobile, DevOps",
      "Maîtrise du déploiement en production (Docker, VPS, CI/CD)",
    ],
  },
  skills: {
    title: "Compétences techniques",
    subtitle: "Stack moderne, du code à la production",
    cats: {
      lang: "Langages",
      front: "Frontend",
      back: "Backend",
      db: "Bases de données",
      mobile: "Mobile",
      devops: "DevOps & Déploiement",
      tools: "Outils",
    },
  },
  experience: {
    title: "Expériences professionnelles",
    subtitle: "Mon parcours en entreprise",
    techs: "Technologies",
    items: [
      {
        company: "SEZAIA",
        role: "Alternant Développeur Mobile & Web",
        period: "10/2024 – 09/2025",
        location: "Brest, France",
        bullets: [
          "Chaîne IoT de bout en bout (QR codes uniques) pour capter et tracer l'information terrain en temps réel.",
          "API REST Flask/Python centralisant les données multi-sources (Android Kotlin + web React) dans MySQL.",
          "Déploiement et administration de l'infrastructure complète sur VPS IONOS (API, BDD, frontend).",
        ],
      },
      {
        company: "CAASHPAY",
        role: "Stagiaire Développeur Java",
        period: "06/2024 – 09/2024",
        location: "Paris, France",
        bullets: [
          "Développement d’une API REST de paiement sécurisée conforme au protocole CB2A et à la norme ISO8583 en Java.",
          "Conception d’un simulateur de banque acquéreur en Python pour tester les flux de paiement.",
          "Mise en place du stockage des données avec MongoDB.",
          "Réalisation de tests d’intégration et simulation de terminaux de paiement avec Postman.",
        ],
      },
    ],
  },
  projects: {
    title: "Projets",
    subtitle: "Sélection de réalisations en production",
    visit: "Voir le projet",
    detailsCta: "Voir le détail",
    openDetails: "Ouvrir le détail du projet",
    caseStudy: "Étude de cas",
    backToProjects: "Retour aux projets",
    closeDetails: "Fermer le détail",
    featured: "À la une",
    items: {
      orderhubly: {
        name: "OrderHubly",
        type: "Plateforme de gestion de commandes et boutique publique",
        period: "04/2026 – aujourd'hui",
        desc: "Plateforme full-stack pour centraliser les commandes reçues via Instagram, WhatsApp, Facebook, TikTok ou boutique publique, avec clients, produits, paiements, livraisons, statistiques, QR code et PDF.",
      },
      beyrouthine: {
        name: "La Beyrouthine",
        type: "Site restaurant avec menu dynamique et réservation",
        period: "02/2026 – 03/2026",
        desc: "Plateforme web full-stack pour restaurant libanais avec carte dynamique, réservation en ligne, back-office sécurisé, backend Spring Boot/PostgreSQL et déploiement Docker avec Traefik, Nginx et HTTPS.",
      },
      sezaia: {
        name: "AssistByScan",
        type: "Plateforme SaaS de maintenance par QR code",
        period: "10/2024 - 09/2025",
        desc: "Plateforme SaaS multi-tenant réalisée chez Sezaia pour digitaliser les opérations de maintenance avec QR codes, interface web React, backend Flask/MySQL et application mobile Android Kotlin.",
      },
      caashpay: {
        name: "Caashpay",
        type: "API de paiement CB2A",
        period: "2024",
        desc: "Passerelle de paiement Kotlin/Ktor capable de convertir des données JSON en messages ISO 8583 selon le protocole CB2A/CB6, avec simulateur de banque acquéreur en Python et stockage MongoDB.",
      },
    },
    secondary: {
      title: "Autres projets",
      items: [
        { name: "Site e-commerce", desc: "Site e-commerce développé avec AngularJS et Bootstrap." },
        {
          name: "Télégestion serre ISEN",
          desc: "Télégestion de l'irrigation d'une serre avec outils GCE Electronics.",
        },
      ],
    },
  },
  education: {
    title: "Formation",
    subtitle: "Parcours académique",
    items: [
      {
        school: "ISEN Yncréa Ouest",
        degree: "Diplôme d'ingénieur généraliste — Spécialité Développement Logiciel",
        period: "09/2023 – 09/2025",
        location: "Brest, France",
      },
      {
        school: "Université Libanaise — Faculté de Technologie",
        degree: "Licence en Génie des Réseaux Informatiques et de Télécommunications",
        period: "09/2018 – 06/2021",
        location: "Saida, Liban",
      },
    ],
  },
  languages: {
    title: "Langues",
    items: [
      { name: "Français", level: "Courant" },
      {
        name: "Anglais",
        level: "Courant — TOEIC 850/990",
        certificateHref: "/certificates/Houssein_Ghannoum_TOEIC.pdf",
        certificateLabel: "Voir le résultat TOEIC",
      },
      { name: "Arabe", level: "Langue maternelle" },
    ],
  },
  why: {
    title: "Pourquoi me choisir ?",
    subtitle: "Un profil complet, autonome et orienté produit",
    items: [
      {
        title: "Applications complètes",
        desc: "Capacité à construire de bout en bout : frontend, backend, mobile et déploiement.",
      },
      {
        title: "Stack full-stack solide",
        desc: "Java Spring Boot, React, Python, Docker, CI/CD et bases de données SQL/NoSQL.",
      },
      {
        title: "Sens produit",
        desc: "Expérience concrète sur projets SaaS et applications métier en production.",
      },
      {
        title: "Autonomie technique",
        desc: "Habitué à mener un projet de l'analyse à la mise en production sur VPS.",
      },
    ],
  },
  stack: {
    title: "Ma stack favorite",
    subtitle: "Outils que j'utilise au quotidien",
  },
  availability: {
    title: "Disponibilité",
    desc: "Disponible pour un emploi en développement Full-Stack Java / React, ouvert aux différents types de contrat comme CDI, CDD ou autres opportunités.",
    highlights: ["Emploi", "CDI / CDD", "France · présentiel ou remote"],
  },
  contact: {
    title: "Contact",
    subtitle: "Discutons de votre projet",
    email: "Envoyer un email",
    linkedin: "Me contacter sur LinkedIn",
    call: "Appeler",
    whatsapp: "WhatsApp",
    cvFr: "CV en français",
    cvEn: "Resume in English",
  },
  footer: {
    rights: "Tous droits réservés.",
    built: "Conçu et développé avec passion.",
  },
};
