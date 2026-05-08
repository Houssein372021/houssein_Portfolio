export const projectKeys = ["orderhub", "beyrouthine", "sezaia", "caashpay"] as const;
export type ProjectKey = (typeof projectKeys)[number];

export const skills = {
  lang: ["Java", "Kotlin", "Python", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  front: ["React", "TypeScript", "Tailwind CSS", "AngularJS", "Bootstrap"],
  back: ["Java Spring Boot", "Python Flask", "REST API", "JWT"],
  db: ["PostgreSQL", "MySQL", "MongoDB"],
  mobile: ["Android Kotlin"],
  devops: ["Docker", "Nginx", "GitHub Actions", "CI/CD", "VPS IONOS"],
  tools: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code", "Android Studio"],
};

export const experienceTechs = [
  ["Python", "Kotlin", "React", "MySQL", "Flask", "Git", "IONOS"],
  ["Java", "Python", "MongoDB", "ISO8583", "PCI-DSS", "Git"],
];

export const projectTechs: Record<ProjectKey, string[]> = {
  orderhub: [
    "React",
    "TypeScript",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
    "Nginx",
    "GitHub Actions",
    "VPS IONOS",
  ],
  beyrouthine: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
  ],
  sezaia: ["React", "Flask", "MySQL", "Kotlin Android", "Firebase", "Nginx", "VPS IONOS"],
  caashpay: ["Java", "Python", "MongoDB", "ISO8583", "PCI-DSS", "Postman"],
};

export const projectLinks: Partial<Record<ProjectKey, string>> = {
  orderhub: "https://orderhubly.com",
  beyrouthine: "https://labeiruthine.fr/",
  sezaia: "https://assistbyscan.com",
};

export type ProjectDetailBlock = {
  title: string;
  body?: string;
  items?: string[];
};

export type ProjectDetailColumn = {
  title: string;
  items: string[];
};

export type ProjectDetailSection = {
  title: string;
  body?: string[];
  items?: string[];
  columns?: ProjectDetailColumn[];
  blocks?: ProjectDetailBlock[];
  diagram?: string[];
};

export type ProjectDetail = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string[];
  technologies: string[];
  sections: ProjectDetailSection[];
};

const compactProjectDetailsFr: Record<Exclude<ProjectKey, "sezaia">, ProjectDetail> = {
  orderhub: {
    eyebrow: "Projet personnel",
    title: "OrderHub",
    subtitle: "Plateforme SaaS de gestion de commandes",
    intro: [
      "Application SaaS full-stack permettant de centraliser les commandes issues de canaux comme WhatsApp et Instagram.",
      "Le projet met l'accent sur une architecture robuste, l'authentification JWT et un déploiement reproductible sur VPS.",
    ],
    technologies: projectTechs.orderhub,
    sections: [
      {
        title: "Objectif",
        items: [
          "Centraliser les commandes multicanales dans une interface unique.",
          "Fournir une base SaaS évolutive pour les commerçants.",
          "Mettre en place un déploiement Docker avec CI/CD GitHub Actions.",
        ],
      },
      {
        title: "Architecture",
        columns: [
          { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
          { title: "Backend", items: ["Java Spring Boot", "REST API", "JWT"] },
          { title: "Production", items: ["PostgreSQL", "Docker", "Nginx", "VPS IONOS"] },
        ],
      },
    ],
  },
  beyrouthine: {
    eyebrow: "Projet client",
    title: "Restaurant La Beyrouthine",
    subtitle: "Site web full-stack pour restaurant",
    intro: [
      "Application web complète pour présenter le restaurant, gérer le menu dynamique et automatiser les réservations par email.",
      "Le projet inclut un tableau de bord administrateur et un backend Spring Boot connecté à PostgreSQL.",
    ],
    technologies: projectTechs.beyrouthine,
    sections: [
      {
        title: "Objectif",
        items: [
          "Mettre en ligne une expérience claire pour les clients du restaurant.",
          "Permettre l'administration du menu et des contenus.",
          "Automatiser les demandes de réservation par email.",
        ],
      },
      {
        title: "Architecture",
        columns: [
          { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
          { title: "Backend", items: ["Java Spring Boot", "PostgreSQL"] },
          { title: "Déploiement", items: ["Docker", "Nginx", "VPS"] },
        ],
      },
    ],
  },
  caashpay: {
    eyebrow: "Stage",
    title: "API de paiement CAASHPAY",
    subtitle: "Backend de paiement sécurisé",
    intro: [
      "API REST de paiement sécurisée conforme au protocole CB2A et à la norme ISO8583.",
      "Le projet comprenait aussi un simulateur de banque acquéreur en Python et la gestion des transactions avec MongoDB.",
    ],
    technologies: projectTechs.caashpay,
    sections: [
      {
        title: "Objectif",
        items: [
          "Implémenter des flux de paiement sécurisés.",
          "Simuler les réponses d'une banque acquéreur.",
          "Tester les échanges et transactions avec Postman.",
        ],
      },
      {
        title: "Architecture",
        columns: [
          { title: "Backend", items: ["Java", "REST API", "ISO8583", "CB2A"] },
          { title: "Simulation", items: ["Python", "Postman"] },
          { title: "Données", items: ["MongoDB", "Transactions de paiement"] },
        ],
      },
    ],
  },
};

const compactProjectDetailsEn: Record<Exclude<ProjectKey, "sezaia">, ProjectDetail> = {
  orderhub: {
    eyebrow: "Personal project",
    title: "OrderHub",
    subtitle: "SaaS order management platform",
    intro: [
      "Full-stack SaaS application for centralizing orders coming from channels such as WhatsApp and Instagram.",
      "The project focuses on a robust architecture, JWT authentication and reproducible VPS deployment.",
    ],
    technologies: projectTechs.orderhub,
    sections: [
      {
        title: "Goal",
        items: [
          "Centralize multichannel orders in a single interface.",
          "Provide an extensible SaaS foundation for merchants.",
          "Set up Docker deployment with GitHub Actions CI/CD.",
        ],
      },
      {
        title: "Architecture",
        columns: [
          { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
          { title: "Backend", items: ["Java Spring Boot", "REST API", "JWT"] },
          { title: "Production", items: ["PostgreSQL", "Docker", "Nginx", "IONOS VPS"] },
        ],
      },
    ],
  },
  beyrouthine: {
    eyebrow: "Client project",
    title: "La Beyrouthine Restaurant",
    subtitle: "Full-stack restaurant website",
    intro: [
      "Complete web application for presenting the restaurant, managing a dynamic menu and automating reservation requests by email.",
      "The project includes an admin dashboard and a Spring Boot backend connected to PostgreSQL.",
    ],
    technologies: projectTechs.beyrouthine,
    sections: [
      {
        title: "Goal",
        items: [
          "Publish a clear experience for restaurant customers.",
          "Enable menu and content administration.",
          "Automate reservation requests by email.",
        ],
      },
      {
        title: "Architecture",
        columns: [
          { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
          { title: "Backend", items: ["Java Spring Boot", "PostgreSQL"] },
          { title: "Deployment", items: ["Docker", "Nginx", "VPS"] },
        ],
      },
    ],
  },
  caashpay: {
    eyebrow: "Internship",
    title: "CAASHPAY Payment API",
    subtitle: "Secure payment backend",
    intro: [
      "Secure REST payment API compliant with the CB2A protocol and ISO8583 standard.",
      "The project also included a Python acquiring bank simulator and transaction handling with MongoDB.",
    ],
    technologies: projectTechs.caashpay,
    sections: [
      {
        title: "Goal",
        items: [
          "Implement secure payment flows.",
          "Simulate responses from an acquiring bank.",
          "Test exchanges and transactions with Postman.",
        ],
      },
      {
        title: "Architecture",
        columns: [
          { title: "Backend", items: ["Java", "REST API", "ISO8583", "CB2A"] },
          { title: "Simulation", items: ["Python", "Postman"] },
          { title: "Data", items: ["MongoDB", "Payment transactions"] },
        ],
      },
    ],
  },
};

export const projectDetails: Record<"fr" | "en", Record<ProjectKey, ProjectDetail>> = {
  fr: {
    ...compactProjectDetailsFr,
    sezaia: {
      eyebrow: "Projet d'alternance chez Sezaia",
      title: "AssistByScan",
      subtitle: "Plateforme SaaS de maintenance par QR Code",
      intro: [
        "Projet réalisé durant mon alternance chez Sezaia.",
        "Développement d'une plateforme SaaS multi-tenant dédiée à la digitalisation des opérations de maintenance par QR code. La solution permet aux entreprises de gérer leurs équipements, QR codes, utilisateurs, formulaires dynamiques, demandes d'intervention, rapports techniques et contenus d'aide depuis une interface web d'administration et une application mobile terrain.",
        "Le projet repose sur une architecture full-stack composée d'un frontend React, d'un backend Flask/MySQL et d'une application mobile Android Kotlin. La solution est déployée sur un VPS Linux IONOS avec Nginx, un domaine personnalisé assistbyscan.com, et un code source versionné sur GitHub.",
      ],
      technologies: [
        "React",
        "Flask",
        "MySQL",
        "Kotlin Android",
        "Retrofit",
        "OkHttp",
        "Firebase Cloud Messaging",
        "SMTP",
        "Nginx",
        "Linux VPS",
        "IONOS",
        "GitHub",
        "Figma",
        "QR Code",
        "REST API",
      ],
      sections: [
        {
          title: "Contexte et enjeux",
          body: [
            "Dans un contexte où les entreprises cherchent à digitaliser leurs processus de maintenance, le suivi des équipements, des interventions et des rapports techniques peut devenir complexe lorsqu'il repose sur des documents papier, des échanges manuels ou des informations dispersées.",
            "Ce projet visait à créer une plateforme centralisée permettant de relier chaque machine à un QR code unique. Lorsqu'un utilisateur ou un technicien scanne ce QR code depuis l'application mobile, il peut accéder aux informations de la machine, activer un équipement, créer une demande d'intervention, suivre une réparation ou soumettre un rapport technique.",
            "L'enjeu principal était de proposer une solution SaaS multi-tenant, capable de gérer plusieurs entreprises de manière isolée, chacune avec ses propres utilisateurs, QR codes, formulaires, contenus, interventions et rapports.",
          ],
        },
        {
          title: "Objectifs du projet",
          items: [
            "Digitaliser les opérations de maintenance grâce aux QR codes.",
            "Permettre à chaque entreprise de gérer son propre espace applicatif.",
            "Centraliser les utilisateurs, équipements, interventions et rapports.",
            "Fournir une interface web d'administration complète.",
            "Proposer une application mobile terrain pour les utilisateurs et techniciens.",
            "Mettre en place une architecture backend centralisée et évolutive.",
            "Déployer la solution sur un VPS Linux avec domaine personnalisé.",
            "Documenter le projet à travers un cahier des charges, un planning Gantt, des flowcharts et des maquettes UI/UX.",
          ],
        },
        {
          title: "Mon rôle dans le projet",
          body: [
            "Dans le cadre de mon alternance chez Sezaia, j'ai participé à plusieurs étapes du cycle de vie du projet, de l'analyse du besoin jusqu'au développement et au déploiement.",
          ],
          items: [
            "Rédaction du cahier des charges fonctionnel et technique.",
            "Planification du projet avec un diagramme de Gantt.",
            "Modélisation des parcours utilisateurs et flux métiers avec des flowcharts.",
            "Conception des maquettes UI/UX sur Figma.",
            "Développement du backend Flask/MySQL.",
            "Développement de l'interface web React.",
            "Définition des contrats API utilisés par l'application mobile Android.",
            "Intégration des emails SMTP et des notifications Firebase.",
            "Génération et gestion des QR codes.",
            "Déploiement sur VPS Linux IONOS avec Nginx.",
            "Gestion du code source sur GitHub.",
          ],
        },
        {
          title: "Solutions techniques et développement",
          columns: [
            {
              title: "Frontend web",
              items: ["React", "React Router", "Axios", "i18n", "Tailwind CSS"],
            },
            {
              title: "Backend",
              items: [
                "Flask",
                "MySQL",
                "REST API",
                "SMTP",
                "Firebase Admin",
                "Génération QR code",
                "Gestion des uploads",
              ],
            },
            {
              title: "Mobile",
              items: [
                "Android Kotlin",
                "Retrofit",
                "OkHttp",
                "Gson",
                "CameraX",
                "ML Kit Barcode Scanning",
                "Firebase Messaging",
              ],
            },
            {
              title: "Infrastructure et projet",
              items: [
                "VPS Linux IONOS",
                "Nginx",
                "Domaine assistbyscan.com",
                "GitHub",
                "Cahier des charges",
                "Gantt",
                "Flowcharts",
                "Figma",
              ],
            },
          ],
          diagram: [
            "Frontend React ------\\",
            "                       > Backend Flask REST API ---- MySQL",
            "Application Android --/              |",
            "                                      |-- Firebase Cloud Messaging",
            "                                      |-- SMTP emails",
            "                                      |-- Uploads fichiers / vidéos",
            "                                      |-- Génération QR codes",
          ],
          body: [
            "Le backend joue le rôle de source de vérité. Il centralise les règles métier, les données, les sessions mobiles, les QR codes, les utilisateurs, les interventions, les rapports, les notifications et les emails.",
          ],
        },
        {
          title: "Intégrations clés",
          blocks: [
            {
              title: "Multi-tenant SaaS",
              body: "Chaque entreprise dispose de son propre espace applicatif. Les données sont isolées à l'aide d'une clé métier liée à l'application, utilisée pour séparer les utilisateurs, QR codes, formulaires, interventions, rapports et contenus.",
            },
            {
              title: "Génération et activation de QR codes",
              body: "L'interface web permet de générer des QR codes associés aux machines. Sur le terrain, l'application mobile permet de scanner un QR code, de vérifier son état et de l'activer avec des informations comme le numéro de série, la localisation et les documents associés.",
            },
            {
              title: "Formulaires dynamiques",
              body: "Le web permet de configurer des types de machines et des questions dynamiques. Ces formulaires sont utilisés dans les parcours mobiles pour collecter des informations adaptées à chaque type d'équipement ou d'intervention.",
            },
            {
              title: "Gestion des interventions",
              body: "Les utilisateurs peuvent créer des demandes d'intervention depuis l'application mobile. Les techniciens consultent les demandes, suivent les réparations, gèrent les rendez-vous et soumettent des rapports techniques.",
            },
            {
              title: "Notifications push",
              body: "Firebase Cloud Messaging est utilisé pour envoyer des notifications push aux utilisateurs ou techniciens, notamment lors de nouvelles demandes ou changements d'état.",
            },
            {
              title: "Emails transactionnels",
              body: "Le backend gère l'envoi d'emails via SMTP pour les vérifications de compte, la réinitialisation de mot de passe, les changements d'email et les messages de contact.",
            },
            {
              title: "Déploiement serveur",
              body: "La solution est déployée sur un VPS Linux chez IONOS. Nginx est utilisé comme reverse proxy et serveur web, avec le domaine personnalisé assistbyscan.com.",
            },
          ],
        },
        {
          title: "Fonctionnalités phares",
          blocks: [
            {
              title: "1. Interface web d'administration",
              items: [
                "Connexion web.",
                "Gestion et génération de QR codes.",
                "Gestion des utilisateurs.",
                "Gestion des types de machines.",
                "Configuration des questions dynamiques.",
                "Consultation des rapports.",
                "Gestion des contenus d'aide, pages statiques et contenus applicatifs.",
              ],
            },
            {
              title: "2. Application mobile terrain",
              items: [
                "Sélection de l'entreprise ou application.",
                "Inscription et connexion.",
                "Scan QR code.",
                "Activation d'une machine.",
                "Demande d'intervention.",
                "Suivi des réparations.",
                "Gestion du compte utilisateur.",
                "Notifications push.",
                "Soumission de rapports techniques.",
              ],
            },
            {
              title: "3. Backend REST centralisé",
              items: [
                "Authentification et sessions mobiles.",
                "Utilisateurs, rôles et QR codes.",
                "Formulaires dynamiques.",
                "Demandes d'intervention et rapports techniques.",
                "Emails, notifications, uploads et logique multi-tenant.",
              ],
            },
            {
              title: "4. Conception UI/UX avec Figma",
              items: [
                "Parcours de connexion.",
                "Sélection d'entreprise.",
                "Écrans de scan QR.",
                "Formulaires d'intervention.",
                "Interfaces d'administration.",
                "Parcours technicien et utilisateur.",
              ],
            },
            {
              title: "5. Documentation et gestion de projet",
              items: [
                "Cahier des charges fonctionnel et technique.",
                "Diagramme de Gantt.",
                "Flowcharts des parcours métiers.",
                "Maquettes UI/UX Figma.",
                "Documentation des fonctionnalités.",
                "Structuration des flux web, mobile et backend.",
              ],
            },
          ],
        },
        {
          title: "Résultats et impact",
          columns: [
            {
              title: "Gains fonctionnels",
              items: [
                "Centralisation des opérations de maintenance dans une seule plateforme.",
                "Réduction de l'utilisation de documents papier.",
                "Accès rapide aux informations machine via QR code.",
                "Meilleur suivi des demandes d'intervention.",
                "Parcours adaptés aux rôles utilisateur, technicien et administrateur.",
                "Configuration flexible des formulaires selon les besoins de chaque entreprise.",
                "Séparation des données entre les entreprises grâce à l'approche multi-tenant.",
              ],
            },
            {
              title: "Gains techniques",
              items: [
                "Architecture web, mobile et backend cohérente.",
                "API REST centralisée consommée par plusieurs clients.",
                "Backend évolutif basé sur Flask et MySQL.",
                "Intégration de services externes comme Firebase et SMTP.",
                "Déploiement réel sur VPS Linux avec Nginx.",
                "Code source versionné sur GitHub.",
                "Base solide pour faire évoluer le produit vers d'autres fonctionnalités SaaS.",
              ],
            },
          ],
        },
        {
          title: "Conclusion",
          body: [
            "Ce projet m'a permis de travailler sur une solution complète, depuis la phase de conception jusqu'au déploiement.",
            "AssistByScan illustre ma capacité à participer à la construction d'un produit SaaS complet, utilisé dans un contexte métier concret, avec une architecture web, mobile et backend.",
          ],
          items: [
            "Analyse fonctionnelle.",
            "Cahier des charges.",
            "Planification projet.",
            "Conception UI/UX.",
            "Développement frontend et backend.",
            "Intégration mobile.",
            "Gestion de base de données.",
            "API REST.",
            "Notifications push.",
            "Emails transactionnels.",
            "Déploiement serveur Linux.",
            "Gestion du code source avec GitHub.",
          ],
        },
        {
          title: "Apprentissages et perspectives",
          columns: [
            {
              title: "Compétences acquises",
              items: [
                "Rédaction d'un cahier des charges fonctionnel et technique.",
                "Planification d'un projet avec un diagramme de Gantt.",
                "Modélisation de parcours utilisateurs avec des flowcharts.",
                "Conception de maquettes UI/UX avec Figma.",
                "Développement d'une API REST avec Flask.",
                "Gestion d'une base de données MySQL.",
                "Développement d'interfaces web avec React.",
                "Intégration de contrats API pour une application mobile Android.",
                "Utilisation de Firebase Cloud Messaging pour les notifications.",
                "Configuration SMTP pour les emails transactionnels.",
                "Déploiement sur VPS Linux avec Nginx.",
                "Structuration d'un projet SaaS multi-tenant.",
              ],
            },
            {
              title: "Améliorations possibles",
              items: [
                "Clarification des rôles entre administrateur web, technicien et utilisateur terrain.",
                "Renforcement de la sécurité côté authentification web.",
                "Amélioration de la documentation API.",
                "Ajout de tableaux de bord statistiques pour les interventions.",
                "Optimisation de la gestion des rapports techniques.",
                "Amélioration de l'expérience utilisateur mobile.",
                "Mise en place d'une CI/CD automatisée.",
                "Ajout de tests automatisés backend et frontend.",
                "Renforcement de la supervision serveur et des logs applicatifs.",
              ],
            },
          ],
        },
      ],
    },
  },
  en: {
    ...compactProjectDetailsEn,
    sezaia: {
      eyebrow: "Apprenticeship project at Sezaia",
      title: "AssistByScan",
      subtitle: "QR Code Maintenance SaaS Platform",
      intro: [
        "Project built during my apprenticeship at Sezaia.",
        "Development of a multi-tenant SaaS platform dedicated to digitizing maintenance operations through QR codes. The solution lets companies manage equipment, QR codes, users, dynamic forms, intervention requests, technical reports and help content from a web administration interface and a field mobile application.",
        "The project is based on a full-stack architecture with a React frontend, a Flask/MySQL backend and an Android Kotlin mobile app. The solution is deployed on an IONOS Linux VPS with Nginx, the custom domain assistbyscan.com, and source code versioned on GitHub.",
      ],
      technologies: [
        "React",
        "Flask",
        "MySQL",
        "Kotlin Android",
        "Retrofit",
        "OkHttp",
        "Firebase Cloud Messaging",
        "SMTP",
        "Nginx",
        "Linux VPS",
        "IONOS",
        "GitHub",
        "Figma",
        "QR Code",
        "REST API",
      ],
      sections: [
        {
          title: "Context and challenges",
          body: [
            "Companies increasingly need to digitize maintenance processes, but equipment tracking, interventions and technical reports become complex when they rely on paper documents, manual exchanges or scattered information.",
            "The goal was to create a centralized platform linking each machine to a unique QR code. When a user or technician scans the QR code from the mobile app, they can access machine information, activate equipment, create an intervention request, follow a repair or submit a technical report.",
            "The main challenge was to provide a multi-tenant SaaS solution able to isolate several companies, each with its own users, QR codes, forms, content, interventions and reports.",
          ],
        },
        {
          title: "Project goals",
          items: [
            "Digitize maintenance operations through QR codes.",
            "Let each company manage its own application space.",
            "Centralize users, equipment, interventions and reports.",
            "Provide a complete web administration interface.",
            "Offer a field mobile app for users and technicians.",
            "Build a centralized and scalable backend architecture.",
            "Deploy the solution on a Linux VPS with a custom domain.",
            "Document the project through specifications, a Gantt plan, flowcharts and UI/UX mockups.",
          ],
        },
        {
          title: "My role",
          body: [
            "During my apprenticeship at Sezaia, I contributed to several stages of the project lifecycle, from needs analysis to development and deployment.",
          ],
          items: [
            "Functional and technical specifications.",
            "Project planning with a Gantt diagram.",
            "User journeys and business flows modeled with flowcharts.",
            "UI/UX mockups designed in Figma.",
            "Flask/MySQL backend development.",
            "React web interface development.",
            "API contracts used by the Android mobile app.",
            "SMTP email and Firebase notification integration.",
            "QR code generation and management.",
            "Deployment on an IONOS Linux VPS with Nginx.",
            "Source code management on GitHub.",
          ],
        },
        {
          title: "Technical solution",
          columns: [
            {
              title: "Web frontend",
              items: ["React", "React Router", "Axios", "i18n", "Tailwind CSS"],
            },
            {
              title: "Backend",
              items: [
                "Flask",
                "MySQL",
                "REST API",
                "SMTP",
                "Firebase Admin",
                "QR code generation",
                "Upload management",
              ],
            },
            {
              title: "Mobile",
              items: [
                "Android Kotlin",
                "Retrofit",
                "OkHttp",
                "Gson",
                "CameraX",
                "ML Kit Barcode Scanning",
                "Firebase Messaging",
              ],
            },
            {
              title: "Infrastructure and project",
              items: [
                "IONOS Linux VPS",
                "Nginx",
                "assistbyscan.com domain",
                "GitHub",
                "Specifications",
                "Gantt",
                "Flowcharts",
                "Figma",
              ],
            },
          ],
          diagram: [
            "Frontend React ------\\",
            "                       > Flask REST API backend ---- MySQL",
            "Android application --/              |",
            "                                      |-- Firebase Cloud Messaging",
            "                                      |-- SMTP emails",
            "                                      |-- File / video uploads",
            "                                      |-- QR code generation",
          ],
          body: [
            "The backend acts as the source of truth. It centralizes business rules, data, mobile sessions, QR codes, users, interventions, reports, notifications and emails.",
          ],
        },
        {
          title: "Key integrations",
          blocks: [
            {
              title: "Multi-tenant SaaS",
              body: "Each company has its own application space. Data is isolated through a business key linked to the application, used to separate users, QR codes, forms, interventions, reports and content.",
            },
            {
              title: "QR code generation and activation",
              body: "The web interface generates QR codes associated with machines. In the field, the mobile app scans a QR code, checks its status and activates it with data such as serial number, location and attached documents.",
            },
            {
              title: "Dynamic forms",
              body: "The web app configures machine types and dynamic questions. These forms are used in mobile flows to collect information adapted to each equipment or intervention type.",
            },
            {
              title: "Intervention management",
              body: "Users create intervention requests from the mobile app. Technicians view requests, track repairs, manage appointments and submit technical reports.",
            },
            {
              title: "Push notifications",
              body: "Firebase Cloud Messaging sends push notifications to users or technicians, especially for new requests and status changes.",
            },
            {
              title: "Transactional emails",
              body: "The backend sends SMTP emails for account verification, password reset, email changes and contact messages.",
            },
            {
              title: "Server deployment",
              body: "The solution is deployed on an IONOS Linux VPS. Nginx is used as reverse proxy and web server with the custom domain assistbyscan.com.",
            },
          ],
        },
        {
          title: "Main features",
          blocks: [
            {
              title: "1. Web administration interface",
              items: [
                "Web login.",
                "QR code management and generation.",
                "User management.",
                "Machine type management.",
                "Dynamic question configuration.",
                "Report consultation.",
                "Help content, static pages and application content administration.",
              ],
            },
            {
              title: "2. Field mobile application",
              items: [
                "Company or application selection.",
                "Registration and login.",
                "QR code scanning.",
                "Machine activation.",
                "Intervention request.",
                "Repair tracking.",
                "User account management.",
                "Push notifications.",
                "Technical report submission.",
              ],
            },
            {
              title: "3. Centralized REST backend",
              items: [
                "Authentication and mobile sessions.",
                "Users, roles and QR codes.",
                "Dynamic forms.",
                "Intervention requests and technical reports.",
                "Emails, notifications, uploads and multi-tenant logic.",
              ],
            },
            {
              title: "4. UI/UX design with Figma",
              items: [
                "Login journeys.",
                "Company selection.",
                "QR scanning screens.",
                "Intervention forms.",
                "Administration interfaces.",
                "Technician and user journeys.",
              ],
            },
            {
              title: "5. Documentation and project management",
              items: [
                "Functional and technical specifications.",
                "Gantt diagram.",
                "Business journey flowcharts.",
                "Figma UI/UX mockups.",
                "Feature documentation.",
                "Web, mobile and backend flow structure.",
              ],
            },
          ],
        },
        {
          title: "Results and impact",
          columns: [
            {
              title: "Functional gains",
              items: [
                "Centralized maintenance operations in one platform.",
                "Reduced paper document usage.",
                "Fast access to machine information through QR codes.",
                "Better tracking of intervention requests.",
                "Role-based journeys for users, technicians and administrators.",
                "Flexible form configuration for each company's needs.",
                "Data separation between companies through the multi-tenant approach.",
              ],
            },
            {
              title: "Technical gains",
              items: [
                "Coherent web, mobile and backend architecture.",
                "Centralized REST API consumed by multiple clients.",
                "Scalable backend based on Flask and MySQL.",
                "Integration of external services such as Firebase and SMTP.",
                "Real deployment on a Linux VPS with Nginx.",
                "Source code versioned on GitHub.",
                "Solid foundation for future SaaS features.",
              ],
            },
          ],
        },
        {
          title: "Conclusion",
          body: [
            "This project allowed me to work on a complete solution, from the design phase to deployment.",
            "AssistByScan demonstrates my ability to contribute to a complete SaaS product used in a real business context, with web, mobile and backend architecture.",
          ],
          items: [
            "Functional analysis.",
            "Specifications.",
            "Project planning.",
            "UI/UX design.",
            "Frontend and backend development.",
            "Mobile integration.",
            "Database management.",
            "REST API.",
            "Push notifications.",
            "Transactional emails.",
            "Linux server deployment.",
            "Source code management with GitHub.",
          ],
        },
        {
          title: "Learnings and next steps",
          columns: [
            {
              title: "Skills gained",
              items: [
                "Writing functional and technical specifications.",
                "Planning a project with a Gantt diagram.",
                "Modeling user journeys with flowcharts.",
                "Designing UI/UX mockups with Figma.",
                "Developing a REST API with Flask.",
                "Managing a MySQL database.",
                "Building web interfaces with React.",
                "Integrating API contracts for an Android mobile app.",
                "Using Firebase Cloud Messaging for notifications.",
                "Configuring SMTP for transactional emails.",
                "Deploying on a Linux VPS with Nginx.",
                "Structuring a multi-tenant SaaS project.",
              ],
            },
            {
              title: "Possible improvements",
              items: [
                "Clarify roles between web administrator, technician and field user.",
                "Strengthen web authentication security.",
                "Improve API documentation.",
                "Add statistical dashboards for interventions.",
                "Optimize technical report management.",
                "Improve the mobile user experience.",
                "Set up automated CI/CD.",
                "Add backend and frontend automated tests.",
                "Strengthen server monitoring and application logs.",
              ],
            },
          ],
        },
      ],
    },
  },
};

export const favoriteStack = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Java Spring Boot",
  "PostgreSQL",
  "Docker",
  "GitHub Actions",
  "Nginx",
  "VPS",
];

export const contactInfo = {
  email: "hseinghannoum@gmail.com",
  phone: "+33602204732",
  phoneDisplay: "+33 6 02 20 47 32",
  whatsapp: "33602204732",
  linkedin: "https://www.linkedin.com/in/houssein-ghannoum/",
  github: "https://github.com/Houssein372021",
};
