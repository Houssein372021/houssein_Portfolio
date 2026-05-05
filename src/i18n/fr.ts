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
    available: "Disponible pour CDI en France",
    name: "Houssein GHANNOUM",
    title: "Développeur Full-Stack Java / React",
    subtitle: "Ingénieur Logiciel",
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
        location: "Brest",
        bullets: [
          "Développement d’une solution SAV complète comprenant une application Android (Kotlin) et une interface web React pour la gestion des incidents clients.",
          "Conception et développement d’une API REST avec Flask (Python) connectée à une base MySQL.",
          "Implémentation d’un système de QR codes uniques permettant l’identification des produits et le suivi des incidents.",
          "Déploiement de l’application (frontend, API, base de données) sur un serveur IONOS avec configuration de l’infrastructure.",
          "Collaboration avec les équipes métiers pour améliorer les processus de suivi client.",
        ],
      },
      {
        company: "CAASHPAY",
        role: "Stagiaire Développeur Java",
        period: "06/2024 – 09/2024",
        location: "Paris",
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
    featured: "À la une",
    items: {
      orderhub: {
        name: "OrderHub",
        type: "Plateforme SaaS de gestion de commandes",
        period: "04/2026 – aujourd'hui",
        desc: "Application SaaS full-stack permettant de centraliser les commandes provenant de canaux comme WhatsApp et Instagram. Architecture React + Spring Boot, authentification JWT, déploiement Docker sur VPS avec CI/CD GitHub Actions.",
      },
      beyrouthine: {
        name: "Restaurant La Beyrouthine",
        type: "Site web full-stack pour restaurant",
        period: "02/2026 – 03/2026",
        desc: "Application web full-stack avec menu dynamique, système de réservation automatisé par email et tableau de bord administrateur. Backend Spring Boot, base PostgreSQL, déploiement Docker sur VPS.",
      },
      sezaia: {
        name: "Solution SAV SEZAIA",
        type: "Application métier mobile + web",
        period: "2024 – 2025",
        desc: "Solution professionnelle pour la gestion des incidents clients avec application Android Kotlin, interface web React, API REST Flask, base MySQL et système de QR codes uniques.",
      },
      caashpay: {
        name: "API de paiement CAASHPAY",
        type: "Backend paiement sécurisé",
        period: "2024",
        desc: "API REST de paiement sécurisée conforme au protocole CB2A et à la norme ISO8583, avec simulateur de banque acquéreur en Python et gestion des transactions MongoDB.",
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
    desc: "Disponible pour un CDI en développement Full-Stack Java / React, avec ouverture aux postes Backend Python et Android Kotlin.",
    highlights: ["CDI", "Java / React / Python", "France · présentiel ou remote"],
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
