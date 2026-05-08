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
    "Docker",
    "Spring Boot",
    "PostgreSQL",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Spring Data JPA",
    "JWT",
    "REST API",
  ],
  beyrouthine: [
    "React",
    "TypeScript",
    "Vite",
    "React Router",
    "Tailwind CSS",
    "Spring Boot",
    "Java 17",
    "PostgreSQL",
    "Docker",
    "Traefik",
    "Nginx",
    "REST API",
  ],
  sezaia: ["React", "Flask", "MySQL", "Kotlin Android", "Firebase", "Nginx", "VPS IONOS"],
  caashpay: [
    "Kotlin",
    "Ktor",
    "Python",
    "MongoDB",
    "ISO 8583",
    "CB2A",
    "JWT",
    "Postman",
    "PCI DSS",
  ],
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

export type ProjectArchitecture = {
  inputsLabel: string;
  sources: string[];
  backendLabel: string;
  backend: string;
  databaseLabel: string;
  database: string;
  servicesLabel: string;
  services: string[];
};

export type ProjectDetailSection = {
  title: string;
  body?: string[];
  items?: string[];
  columns?: ProjectDetailColumn[];
  blocks?: ProjectDetailBlock[];
  architecture?: ProjectArchitecture;
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
    subtitle: "Plateforme de gestion de commandes",
    intro: [
      "Développement d'une plateforme full-stack de gestion de commandes destinée aux restaurants, snacks, commerces alimentaires ou services de vente en ligne.",
      "OrderHub permet de centraliser la prise de commande, le suivi des statuts, la gestion des produits, des utilisateurs et des tableaux de bord, à travers une interface moderne et responsive.",
      "L'application repose sur une architecture modulaire avec un frontend React, un backend Spring Boot, une base de données PostgreSQL et un déploiement Dockerisé. Le projet met l'accent sur la fluidité de l'expérience utilisateur, la maintenabilité du code et l'évolutivité technique.",
    ],
    technologies: [
      "Docker",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "WebStorm",
      "Spring Data JPA",
      "JWT",
      "REST API",
    ],
    sections: [
      {
        title: "Contexte et enjeux",
        body: [
          "Dans un contexte où les restaurants, snacks et commerces ont besoin d'outils simples pour gérer leurs commandes en temps réel, OrderHub vise à proposer une solution centralisée, intuitive et performante.",
          "Les systèmes traditionnels de gestion de commandes peuvent être coûteux, peu flexibles ou mal adaptés aux petites structures. L'enjeu principal du projet était donc de créer une plateforme accessible pour gérer efficacement les produits, les commandes, les statuts de préparation, les utilisateurs et le suivi global de l'activité.",
          "OrderHub répond à ce besoin en proposant une interface claire, une architecture robuste et une organisation modulaire facilitant les évolutions futures.",
        ],
      },
      {
        title: "Objectifs du projet",
        items: [
          "Centraliser la gestion des commandes dans une seule plateforme.",
          "Permettre un suivi en temps réel des commandes.",
          "Offrir une interface moderne, fluide et responsive.",
          "Séparer clairement les rôles entre administrateur, gestionnaire et utilisateur.",
          "Faciliter la gestion des produits, catégories et statuts de commande.",
          "Construire une architecture backend maintenable et évolutive.",
          "Préparer le projet à un déploiement en environnement Dockerisé.",
        ],
      },
      {
        title: "Solutions techniques et développement",
        body: [
          "L'architecture du projet repose sur une séparation claire entre le frontend, le backend et la base de données. Cette organisation facilite la maintenance, les tests, l'évolution fonctionnelle et le déploiement.",
        ],
        columns: [
          {
            title: "Frontend",
            items: ["React avec TypeScript", "Tailwind CSS", "Interface moderne et responsive"],
          },
          {
            title: "Backend",
            items: ["Spring Boot", "Architecture modulaire", "REST API structurée par modules"],
          },
          {
            title: "Données et sécurité",
            items: ["PostgreSQL", "Spring Data JPA", "JWT", "Gestion des rôles"],
          },
          {
            title: "Infrastructure et outils",
            items: ["Docker", "Services isolés", "WebStorm", "Environnement reproductible"],
          },
        ],
        architecture: {
          inputsLabel: "Interface utilisateur",
          sources: ["Frontend React", "Interface responsive"],
          backendLabel: "API métier",
          backend: "Backend Spring Boot REST API",
          databaseLabel: "Données",
          database: "PostgreSQL",
          servicesLabel: "Modules clés",
          services: [
            "Commandes et statuts",
            "Produits et catégories",
            "JWT et rôles",
            "Dockerisation",
          ],
        },
      },
      {
        title: "Intégrations clés",
        blocks: [
          {
            title: "Gestion des commandes",
            body: "Mise en place d'un système complet permettant de créer, consulter, modifier et suivre les commandes selon différents statuts : en attente, en préparation, prête, livrée ou annulée.",
          },
          {
            title: "Gestion des produits",
            body: "Création d'un module permettant d'administrer les produits, leurs prix, descriptions, images, disponibilités et catégories.",
          },
          {
            title: "Authentification sécurisée",
            body: "Implémentation d'un système d'authentification basé sur JWT afin de sécuriser l'accès aux fonctionnalités sensibles.",
          },
          {
            title: "Gestion des rôles",
            body: "Séparation des permissions selon les profils utilisateurs : administrateur, employé, gestionnaire ou client.",
          },
          {
            title: "API backend modulaire",
            body: "Organisation du backend Spring Boot en couches et modules fonctionnels : utilisateurs, authentification, commandes, produits, catégories et tableau de bord.",
          },
          {
            title: "Interface responsive",
            body: "Développement d'une interface adaptée aux ordinateurs, tablettes et mobiles afin de garantir une utilisation fluide dans différents contextes.",
          },
          {
            title: "Dockerisation",
            body: "Mise en place d'un environnement Docker permettant de lancer facilement le frontend, le backend et la base de données dans des conteneurs séparés.",
          },
        ],
      },
      {
        title: "Fonctionnalités phares",
        blocks: [
          {
            title: "1. Tableau de bord administrateur",
            body: "Le tableau de bord permet de visualiser rapidement les informations importantes liées à l'activité et d'aider les gestionnaires à suivre l'état global du service.",
            items: [
              "Nombre total de commandes.",
              "Commandes en attente.",
              "Commandes terminées.",
              "Chiffre d'affaires potentiel.",
              "Produits disponibles.",
              "Activité récente.",
            ],
          },
          {
            title: "2. Gestion des commandes",
            body: "OrderHub permet de suivre chaque commande depuis sa création jusqu'à sa finalisation, afin de fluidifier l'organisation entre prise de commande, préparation et livraison.",
            items: [
              "Création d'une commande.",
              "Affichage de la liste des commandes.",
              "Consultation du détail d'une commande.",
              "Changement de statut.",
              "Suppression ou annulation.",
              "Suivi chronologique.",
            ],
          },
          {
            title: "3. Gestion des produits et catégories",
            body: "L'administrateur peut maintenir facilement une offre à jour depuis une interface dédiée, sans intervention technique.",
            items: [
              "Ajout de nouveaux produits.",
              "Modification des informations produit.",
              "Suppression de produits.",
              "Organisation par catégories.",
              "Gestion des prix.",
              "Gestion de la disponibilité.",
            ],
          },
          {
            title: "4. Authentification et sécurité",
            body: "Le projet intègre une authentification sécurisée afin de protéger les routes sensibles et les fonctionnalités d'administration.",
            items: [
              "Connexion utilisateur.",
              "Génération de token JWT.",
              "Protection des routes backend.",
              "Contrôle des accès selon les rôles.",
              "Séparation entre espaces publics et privés.",
            ],
          },
          {
            title: "5. Interface moderne et responsive",
            body: "L'interface utilisateur a été pensée pour être simple, rapide et agréable à utiliser, y compris pour des utilisateurs non techniques.",
            items: [
              "Navigation claire.",
              "Composants réutilisables.",
              "Hiérarchie visuelle lisible.",
              "Adaptation mobile.",
              "Expérience fluide.",
            ],
          },
          {
            title: "6. Architecture évolutive",
            body: "Grâce à l'architecture Spring Boot structurée par responsabilités, chaque nouvelle fonctionnalité peut être ajoutée sans remettre en cause la structure principale du projet.",
            items: [
              "Paiement en ligne.",
              "Notifications en temps réel.",
              "Suivi de livraison.",
              "Statistiques avancées.",
              "Gestion multi-restaurant.",
              "Application mobile.",
              "Système de réservation.",
              "Historique client.",
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
              "Meilleure visibilité sur les commandes.",
              "Gain de temps pour les gestionnaires.",
              "Réduction des erreurs de traitement.",
              "Interface simple pour les utilisateurs.",
              "Gestion centralisée du catalogue produit.",
              "Suivi clair de l'activité.",
            ],
          },
          {
            title: "Gains techniques",
            items: [
              "Séparation claire entre frontend et backend.",
              "Backend structuré avec Spring Boot.",
              "Typage fort avec TypeScript.",
              "Base de données relationnelle robuste avec PostgreSQL.",
              "Gestion structurée des données avec Spring Data JPA.",
              "Environnement Dockerisé.",
              "Code organisé par modules.",
              "API REST claire et extensible.",
            ],
          },
        ],
      },
      {
        title: "Conclusion",
        body: [
          "OrderHub est une plateforme complète de gestion de commandes qui combine une interface moderne, une architecture backend robuste et une base de données relationnelle structurée.",
          "Le projet constitue une base solide pour une solution professionnelle de gestion de commandes, pouvant évoluer vers une plateforme SaaS destinée aux restaurants, commerces ou services de livraison.",
        ],
        items: [
          "Concevoir une application full-stack complète.",
          "Structurer un backend modulaire avec Spring Boot.",
          "Développer une interface utilisateur responsive avec React.",
          "Sécuriser une application avec JWT.",
          "Modéliser une base de données PostgreSQL.",
          "Organiser un projet professionnel avec Docker.",
          "Penser une architecture évolutive et maintenable.",
        ],
      },
      {
        title: "Apprentissages et perspectives",
        columns: [
          {
            title: "Compétences acquises",
            items: [
              "Conception d'une architecture full-stack complète.",
              "Création d'API REST avec Spring Boot.",
              "Gestion de base de données avec PostgreSQL et Spring Data JPA.",
              "Authentification sécurisée avec JWT.",
              "Développement d'interfaces modernes avec React et Tailwind CSS.",
              "Organisation du code en modules réutilisables.",
              "Dockerisation d'un environnement applicatif.",
              "Gestion des rôles et des permissions.",
              "Réflexion autour de l'expérience utilisateur.",
            ],
          },
          {
            title: "Perspectives d'évolution",
            items: [
              "Notifications en temps réel avec WebSocket.",
              "Système de paiement en ligne.",
              "Module de statistiques avancées.",
              "Espace client.",
              "Génération automatique de factures.",
              "Gestion multi-restaurant.",
              "Application mobile.",
              "Historique détaillé des commandes.",
              "Système de fidélité.",
              "Module de livraison.",
              "CI/CD complète pour automatiser les tests et le déploiement.",
            ],
          },
        ],
      },
    ],
  },
  beyrouthine: {
    eyebrow: "Projet client",
    title: "La Beyrouthine",
    subtitle: "Site web restaurant avec menu dynamique, réservation en ligne et back-office",
    intro: [
      "Projet full-stack réalisé pour La Beyrouthine, restaurant libanais situé à Antony.",
      "Développement d'une plateforme web dédiée à la présentation du restaurant, à la consultation dynamique de la carte, à la réservation de tables, à l'orientation vers les plateformes de commande en ligne et à l'administration des contenus depuis une interface sécurisée.",
      "Le projet repose sur une architecture composée d'un frontend React/TypeScript, d'un backend Spring Boot/PostgreSQL et d'une infrastructure Docker avec Traefik, Nginx et HTTPS. La solution est déployée sous le domaine personnalisé labeiruthine.fr, avec un code source versionné sur GitHub.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Lucide React",
      "Spring Boot",
      "Java 17",
      "Spring Web MVC",
      "Spring Data JPA",
      "Spring Security",
      "Spring Mail",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Traefik",
      "Nginx",
      "Let's Encrypt",
      "pgAdmin",
      "SMTP",
      "GitHub",
      "REST API",
    ],
    sections: [
      {
        title: "Contexte et enjeux",
        body: [
          "Dans un contexte où les restaurants ont besoin d'une présence web claire, rapide et facile à maintenir, La Beyrouthine avait besoin d'un site capable de présenter son univers, ses plats, ses informations pratiques et ses canaux de commande, tout en centralisant les réservations et la gestion de la carte.",
          "Le projet visait à construire une solution complète, plus flexible qu'un simple site vitrine statique. La carte du restaurant est alimentée par une API backend, les réservations sont enregistrées en base de données, la disponibilité des créneaux est contrôlée, et un back-office permet d'administrer les catégories, les plats et les demandes de réservation.",
          "L'enjeu principal était de proposer une expérience fluide pour les clients, tout en donnant au restaurant un outil simple pour gérer ses contenus et suivre les réservations.",
        ],
      },
      {
        title: "Objectifs du projet",
        items: [
          "Créer un site web moderne pour présenter le restaurant La Beyrouthine.",
          "Afficher une carte dynamique organisée par catégories.",
          "Permettre aux clients de réserver une table en ligne.",
          "Vérifier la capacité disponible par date, heure et nombre de personnes.",
          "Envoyer des emails liés aux demandes de réservation.",
          "Orienter les clients vers Uber Eats, Deliveroo ou une commande par téléphone.",
          "Centraliser la gestion des réservations dans un back-office.",
          "Permettre l'ajout et la suppression de catégories et de plats.",
          "Mettre en place une API REST centralisée.",
          "Déployer l'application avec Docker, Traefik, Nginx et HTTPS.",
          "Versionner le code source sur GitHub.",
        ],
      },
      {
        title: "Mon rôle dans le projet",
        body: [
          "J'ai participé à la conception et au développement de l'ensemble de la solution, depuis la structure frontend jusqu'au backend et au déploiement.",
        ],
        items: [
          "Conception de l'interface publique du restaurant.",
          "Développement du frontend React/TypeScript.",
          "Mise en place de la navigation avec React Router.",
          "Intégration d'une galerie photo dynamique avec filtres et lightbox.",
          "Développement de la page menu connectée à l'API.",
          "Développement du formulaire de réservation avec contrôle de disponibilité.",
          "Création de la page commander avec choix livraison ou à emporter.",
          "Développement de l'interface d'administration.",
          "Développement du backend Spring Boot.",
          "Modélisation des entités réservations, catégories et plats.",
          "Création des endpoints REST publics et administrateur.",
          "Intégration de PostgreSQL avec Spring Data JPA.",
          "Configuration de Spring Security pour l'administration.",
          "Intégration SMTP pour les emails de réservation.",
          "Conteneurisation avec Docker et Docker Compose.",
          "Configuration Traefik, Nginx, HTTPS et domaine personnalisé.",
          "Gestion du code source sur GitHub.",
        ],
      },
      {
        title: "Solutions techniques et développement",
        body: [
          "Le backend joue le rôle de source de vérité. Il centralise les données du menu, les réservations, les contrôles de capacité, les endpoints administrateur et l'envoi des emails.",
        ],
        columns: [
          {
            title: "Frontend web",
            items: [
              "React",
              "TypeScript",
              "Vite",
              "React Router",
              "Tailwind CSS",
              "Lucide React",
              "Import dynamique d'images",
              "Formulaires contrôlés",
              "Gestion des états de chargement et d'erreur",
            ],
          },
          {
            title: "Backend",
            items: [
              "Spring Boot",
              "Java 17",
              "Spring Web MVC",
              "Spring Data JPA",
              "Spring Security",
              "Spring Mail",
              "PostgreSQL",
              "REST API",
              "Validation des réservations",
              "Contrôle de capacité par créneau",
            ],
          },
          {
            title: "Infrastructure et projet",
            items: [
              "Docker",
              "Docker Compose",
              "Traefik",
              "Nginx",
              "Let's Encrypt",
              "Domaine labeiruthine.fr",
              "pgAdmin",
              "GitHub",
            ],
          },
        ],
        architecture: {
          inputsLabel: "Clients applicatifs",
          sources: ["Frontend React", "Back-office web administrateur"],
          backendLabel: "Source de vérité",
          backend: "Backend Spring Boot REST API",
          databaseLabel: "Base de données",
          database: "PostgreSQL",
          servicesLabel: "Services connectés",
          services: [
            "SMTP emails",
            "Traefik reverse proxy",
            "Let's Encrypt HTTPS",
            "Nginx serveur web frontend",
            "Docker Compose",
          ],
        },
      },
      {
        title: "Intégrations clés",
        blocks: [
          {
            title: "Menu dynamique",
            body: "La carte du restaurant est organisée par catégories et plats. Le frontend récupère les catégories et les plats depuis l'API, filtre les plats disponibles et affiche les prix, descriptions et sections du menu de manière dynamique.",
          },
          {
            title: "Réservation en ligne",
            body: "Le formulaire de réservation permet de choisir une date, un horaire, un nombre de personnes et un message optionnel. Les réservations ne sont possibles qu'à partir du lendemain, avec des horaires définis selon les jours d'ouverture.",
          },
          {
            title: "Contrôle de capacité",
            body: "Chaque créneau dispose d'une capacité maximale de 40 personnes. Le frontend interroge l'API pour connaître les réservations déjà enregistrées sur un créneau, puis calcule les places restantes. Le backend vérifie également la capacité avant d'enregistrer la réservation.",
          },
          {
            title: "Emails transactionnels",
            body: "Lorsqu'une réservation est créée, le backend envoie un email à l'administrateur du restaurant avec les informations de la demande, ainsi qu'un email de confirmation au client.",
          },
          {
            title: "Back-office administrateur",
            body: "L'interface admin permet de consulter et supprimer les réservations, créer ou supprimer des catégories, et créer ou supprimer des plats. Elle communique avec les endpoints admin de l'API.",
          },
          {
            title: "Galerie photo",
            body: "La page d'accueil intègre une galerie dynamique basée sur les images du projet. Les photos sont classées en groupes Restaurant, Plats et Desserts, avec filtres, chargement progressif, bouton afficher plus et lightbox.",
          },
          {
            title: "Commande en ligne",
            body: "La page commander oriente les utilisateurs vers Uber Eats ou Deliveroo selon le mode choisi : livraison ou à emporter. Une option de commande par téléphone est également disponible.",
          },
          {
            title: "Déploiement serveur",
            body: "L'application est conteneurisée avec Docker Compose. Traefik gère le reverse proxy, les routes web et API, la redirection HTTP vers HTTPS et les certificats Let's Encrypt. Nginx sert le frontend React compilé.",
          },
        ],
      },
      {
        title: "Fonctionnalités phares",
        blocks: [
          {
            title: "1. Site vitrine public",
            items: [
              "Page d'accueil immersive.",
              "Présentation du restaurant.",
              "Galerie photo dynamique.",
              "Accès rapide au menu, à la réservation et à la commande.",
              "Informations pratiques et mise en avant de l'identité du restaurant.",
            ],
          },
          {
            title: "2. Menu dynamique",
            items: [
              "Affichage des catégories.",
              "Affichage des plats disponibles.",
              "Prix formatés en euros.",
              "Descriptions optionnelles.",
              "Navigation par ancres vers les sections de la carte.",
              "Chargement depuis l'API REST.",
            ],
          },
          {
            title: "3. Réservation en ligne",
            items: [
              "Formulaire client complet.",
              "Date minimale à partir du lendemain.",
              "Horaires générés selon les jours d'ouverture.",
              "Vérification de la capacité disponible.",
              "Blocage des créneaux complets.",
              "Message de confirmation après envoi.",
              "Enregistrement en base de données.",
            ],
          },
          {
            title: "4. Commande",
            items: [
              "Choix entre livraison et à emporter.",
              "Redirection vers Uber Eats.",
              "Redirection vers Deliveroo.",
              "Commande directe par téléphone.",
              "Affichage des délais et frais selon la plateforme.",
            ],
          },
          {
            title: "5. Back-office",
            items: [
              "Connexion administrateur.",
              "Consultation des réservations.",
              "Suppression de réservations.",
              "Création et suppression de catégories.",
              "Création et suppression de plats.",
              "Actualisation des données.",
              "Interface organisée par onglets.",
            ],
          },
          {
            title: "6. Backend REST centralisé",
            items: [
              "Endpoints publics pour le menu.",
              "Endpoints publics pour les réservations.",
              "Endpoints administrateur pour catégories, plats et réservations.",
              "Contrôle serveur de la capacité.",
              "Persistance PostgreSQL.",
              "Envoi d'emails SMTP.",
              "Configuration CORS.",
              "Sécurisation de l'administration.",
            ],
          },
          {
            title: "7. Infrastructure Docker",
            items: [
              "Services frontend, backend et base de données.",
              "PostgreSQL pour les données applicatives.",
              "pgAdmin pour l'administration de la base.",
              "Traefik pour le routage et HTTPS.",
              "Nginx pour servir l'application web.",
              "Déploiement sous labeiruthine.fr.",
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
              "Présence web professionnelle pour le restaurant.",
              "Consultation simple et rapide de la carte.",
              "Réduction des réservations gérées manuellement.",
              "Meilleure visibilité sur les créneaux disponibles.",
              "Centralisation des demandes de réservation.",
              "Administration autonome des catégories et plats.",
              "Parcours clair vers les plateformes de commande.",
              "Expérience mobile et desktop adaptée aux clients.",
            ],
          },
          {
            title: "Gains techniques",
            items: [
              "Architecture full-stack cohérente.",
              "API REST centralisée consommée par le frontend public et le back-office.",
              "Backend robuste basé sur Spring Boot et PostgreSQL.",
              "Contrôle de capacité effectué côté client et côté serveur.",
              "Intégration SMTP pour les notifications de réservation.",
              "Déploiement conteneurisé avec Docker Compose.",
              "Reverse proxy Traefik avec HTTPS automatique.",
              "Frontend React performant compilé avec Vite.",
              "Code source versionné sur GitHub.",
              "Base solide pour faire évoluer le site vers d'autres fonctionnalités.",
            ],
          },
        ],
      },
      {
        title: "Conclusion",
        body: [
          "Ce projet m'a permis de construire une solution web complète pour un restaurant, depuis l'interface publique jusqu'à l'administration et au déploiement.",
          "La Beyrouthine illustre ma capacité à développer une application full-stack concrète, connectée à une base de données, exposée via une API REST, sécurisée pour l'administration et déployée sur une infrastructure Docker avec domaine personnalisé.",
        ],
        items: [
          "Développement frontend React.",
          "Développement backend Spring Boot.",
          "Gestion de base de données PostgreSQL.",
          "API REST.",
          "Réservation en ligne.",
          "Emails transactionnels.",
          "Back-office administrateur.",
          "Dockerisation.",
          "Configuration Traefik, Nginx et HTTPS.",
          "Gestion du code source avec GitHub.",
        ],
      },
      {
        title: "Apprentissages",
        columns: [
          {
            title: "Compétences acquises",
            items: [
              "Structuration d'un projet full-stack moderne.",
              "Développement d'interfaces web avec React, TypeScript et Tailwind CSS.",
              "Mise en place d'une navigation avec React Router.",
              "Consommation d'une API REST depuis le frontend.",
              "Développement d'une API avec Spring Boot.",
              "Utilisation de Spring Data JPA avec PostgreSQL.",
              "Mise en place d'une logique métier de réservation et de capacité.",
              "Intégration d'emails transactionnels via SMTP.",
              "Création d'un back-office d'administration.",
              "Conteneurisation d'une application avec Docker.",
              "Configuration d'un reverse proxy Traefik.",
              "Mise en place de HTTPS avec Let's Encrypt.",
              "Déploiement d'une application sous domaine personnalisé.",
              "Versionnement et organisation du code avec GitHub.",
            ],
          },
        ],
      },
    ],
  },
  caashpay: {
    eyebrow: "Stage",
    title: "Caashpay",
    subtitle: "API de paiement CB2A",
    intro: [
      "Développement d'une API de paiement destinée à faciliter, sécuriser et traiter des transactions par carte bancaire dans un environnement monétique.",
      "Le projet Caashpay repose sur l'implémentation du protocole CB2A, Carte Bancaire version 6, ainsi que sur la génération, l'envoi, le décodage et le traitement de messages financiers au format ISO 8583.",
      "L'objectif principal est de créer une passerelle de paiement capable de recevoir des données transactionnelles au format JSON, de les convertir en messages ISO 8583, de les transmettre à un serveur simulant une banque acquéreur, puis de retourner une réponse claire indiquant l'acceptation, le refus ou l'erreur liée à la transaction.",
      "Le projet s'inscrit dans le domaine de la monétique, un secteur exigeant où la sécurité, la fiabilité, la conformité aux normes et la précision des échanges sont essentielles.",
    ],
    technologies: [
      "Kotlin",
      "Java",
      "Ktor",
      "Python",
      "MongoDB",
      "REST API",
      "JSON",
      "ISO 8583",
      "CB2A",
      "CB6",
      "Postman",
      "JWT",
      "Node.js",
      "React.js",
      "PCI DSS",
      "API RESTful",
      "Git",
      "IntelliJ IDEA",
      "WebStorm",
    ],
    sections: [
      {
        title: "Contexte et enjeux",
        body: [
          "Dans un contexte où les paiements électroniques occupent une place centrale dans le commerce moderne, les entreprises ont besoin de solutions capables de traiter des transactions de manière rapide, sécurisée et fiable.",
          "Les systèmes monétiques doivent assurer la communication entre plusieurs acteurs : le terminal de paiement, la passerelle monétique, la banque acquéreur, les réseaux d'acceptation et la banque émettrice.",
          "Le projet Caashpay répond à ce besoin en proposant une API de paiement permettant de simuler et de traiter des transactions par carte bancaire selon les standards utilisés dans le domaine monétique.",
          "Les principaux enjeux étaient de comprendre le fonctionnement global des systèmes de paiement, implémenter des messages ISO 8583, utiliser le protocole CB2A Carte Bancaire version 6, sécuriser les échanges, simuler le comportement d'une banque acquéreur, garantir la fiabilité du traitement et gérer les cas d'acceptation, de refus et d'erreur.",
        ],
      },
      {
        title: "Objectifs du projet",
        items: [
          "Développer une API de paiement conforme au protocole CB2A.",
          "Implémenter les messages ISO 8583 nécessaires aux transactions bancaires.",
          "Permettre la simulation d'un terminal de paiement via Postman.",
          "Convertir des données JSON en messages ISO 8583.",
          "Créer un serveur Python simulant une banque acquéreur.",
          "Traiter différents types de transactions : autorisation, transaction financière et annulation.",
          "Gérer les réponses de paiement accepté ou refusé.",
          "Mettre en place une gestion robuste des erreurs.",
          "Sauvegarder les informations de transaction dans MongoDB.",
          "Tester la génération correcte des messages ISO 8583.",
          "Renforcer la compréhension du domaine de la monétique.",
          "Construire une architecture évolutive pour de futures fonctionnalités de paiement.",
        ],
      },
      {
        title: "Solutions techniques et développement",
        body: [
          "L'architecture du projet repose sur plusieurs composants complémentaires. Postman joue le rôle de terminal de paiement simulé. L'API de paiement reçoit les données au format JSON, valide les champs nécessaires, construit un message ISO 8583, puis l'envoie à un serveur Python qui simule une banque acquéreur.",
          "Le serveur Python analyse le message, génère une réponse ISO 8583, puis la renvoie à la passerelle. Enfin, la passerelle traite cette réponse, l'affiche dans Postman et sauvegarde les informations de transaction dans MongoDB.",
          "Cette organisation permet de reproduire de manière réaliste le cycle d'une transaction bancaire, depuis la demande initiale jusqu'à la réponse finale.",
        ],
        columns: [
          {
            title: "Frontend et simulation",
            items: [
              "React.js pour l'interface web sécurisée",
              "Postman comme simulateur de terminal de paiement",
              "Requêtes JSON",
              "Visualisation des réponses transactionnelles",
            ],
          },
          {
            title: "Backend paiement",
            items: [
              "Kotlin",
              "Ktor",
              "API REST",
              "Génération ISO 8583",
              "Implémentation CB2A / CB6",
              "Validation des champs transactionnels",
            ],
          },
          {
            title: "Simulation bancaire et données",
            items: [
              "Serveur Python acquéreur",
              "Décodage des messages ISO 8583",
              "Réponses acceptées, refusées ou erronées",
              "MongoDB pour la traçabilité",
            ],
          },
          {
            title: "Sécurité et tests",
            items: [
              "JWT",
              "Principes PCI DSS",
              "Tests unitaires",
              "Tests de génération des messages ISO 8583",
              "Postman",
              "IntelliJ IDEA / WebStorm",
            ],
          },
        ],
        architecture: {
          inputsLabel: "Simulation et interface",
          sources: ["Postman terminal simulé", "Frontend React sécurisé"],
          backendLabel: "Passerelle de paiement",
          backend: "API Kotlin Ktor REST",
          databaseLabel: "Traçabilité",
          database: "MongoDB",
          servicesLabel: "Flux monétique",
          services: [
            "Messages ISO 8583",
            "Serveur Python acquéreur",
            "Protocole CB2A / CB6",
            "JWT et PCI DSS",
          ],
        },
      },
      {
        title: "Intégrations clés",
        blocks: [
          {
            title: "API de paiement",
            body: "Création d'une passerelle capable de recevoir des requêtes de paiement, de vérifier les champs nécessaires, de générer des messages ISO 8583 et de transmettre ces messages vers un serveur acquéreur simulé.",
          },
          {
            title: "Protocole CB2A",
            body: "Implémentation du protocole Carte Bancaire version 6 afin de respecter les exigences du domaine bancaire et d'assurer la compatibilité avec les échanges monétiques.",
          },
          {
            title: "Norme ISO 8583",
            body: "Mise en place de messages structurés selon la norme ISO 8583 pour les demandes d'autorisation, les transactions financières et les annulations, avec les messages 0100, 0200 et 0400 ainsi que les réponses 0110, 0210 et 0410.",
          },
          {
            title: "Serveur Python simulateur de banque acquéreur",
            body: "Développement d'un serveur Python chargé de recevoir les messages ISO 8583, de les décoder, d'analyser les champs transmis et de générer une réponse simulant le comportement d'une banque acquéreur.",
          },
          {
            title: "Base de données MongoDB",
            body: "Stockage des détails de chaque transaction afin d'assurer la traçabilité, l'analyse et la persistance des opérations de paiement.",
          },
          {
            title: "Simulation avec Postman",
            body: "Utilisation de Postman pour simuler un terminal de paiement électronique, envoyer les données de transaction au format JSON et visualiser les réponses retournées par la passerelle.",
          },
          {
            title: "Gestion des erreurs",
            body: "Mise en place d'un mécanisme de validation permettant de détecter les champs manquants, incorrects ou mal formatés, puis de retourner des messages d'erreur compréhensibles.",
          },
          {
            title: "Tests unitaires",
            body: "Création de tests dédiés pour vérifier la génération correcte des messages ISO 8583 et garantir la robustesse du système avant son exécution.",
          },
        ],
      },
      {
        title: "Fonctionnalités phares",
        blocks: [
          {
            title: "1. Simulation d'un terminal de paiement",
            body: "Postman est utilisé comme simulateur de terminal de paiement afin de tester l'ensemble du flux sans utiliser de véritable terminal bancaire.",
            items: [
              "Envoi d'une demande de paiement.",
              "Simulation d'une autorisation.",
              "Simulation d'un paiement refusé.",
              "Simulation d'erreurs de champs.",
              "Visualisation de la réponse finale.",
              "Test du comportement de la passerelle.",
            ],
          },
          {
            title: "2. Génération des messages ISO 8583",
            body: "Création de messages ISO 8583 à partir des données reçues en JSON, afin de respecter une structure monétique standardisée.",
            items: [
              "Message 0100 pour les demandes d'autorisation.",
              "Message 0200 pour les transactions financières.",
              "Message 0400 pour les annulations.",
              "Messages de réponse 0110, 0210 et 0410.",
              "Champs : montant, date, terminal, type de transaction, devise, référence et code de réponse.",
            ],
          },
          {
            title: "3. Traitement d'une transaction acceptée",
            items: [
              "Envoi de la requête JSON via Postman.",
              "Réception par l'API de paiement.",
              "Validation des champs.",
              "Création du message ISO 8583.",
              "Transmission au serveur Python.",
              "Analyse du message par le serveur.",
              "Génération d'une réponse positive.",
              "Retour de la réponse vers l'API.",
              "Affichage du résultat dans Postman.",
            ],
          },
          {
            title: "4. Traitement d'une transaction refusée",
            body: "Le serveur Python peut générer une réponse NOK avec un code spécifique. L'API analyse ensuite cette réponse et retourne un résultat compréhensible à Postman.",
            items: [
              "Solde insuffisant.",
              "Carte invalide.",
              "Date d'expiration dépassée.",
              "Compte inexistant.",
              "Données incohérentes.",
              "Réponse négative du serveur acquéreur simulé.",
            ],
          },
          {
            title: "5. Gestion des erreurs",
            items: [
              "Présence des champs obligatoires.",
              "Format des données.",
              "Cohérence du MTI.",
              "Validité des champs transactionnels.",
              "Conformité du message ISO 8583.",
              "Capacité du serveur à traiter la demande.",
            ],
          },
          {
            title: "6. Serveur Python simulateur de banque acquéreur",
            items: [
              "Recevoir les messages ISO 8583.",
              "Décoder les champs du message.",
              "Analyser le type de transaction.",
              "Simuler une réponse bancaire.",
              "Renvoyer une réponse ISO 8583.",
              "Tester des scénarios acceptés, refusés ou erronés.",
            ],
          },
          {
            title: "7. Stockage des transactions avec MongoDB",
            items: [
              "Montant de la transaction.",
              "Type de message.",
              "Statut du paiement.",
              "Code de réponse.",
              "Date et heure.",
              "Identifiant du terminal.",
              "Données de transaction.",
              "Réponse du serveur acquéreur.",
            ],
          },
          {
            title: "8. Sécurité et conformité",
            items: [
              "Sécurisation des données de paiement.",
              "Respect des principes PCI DSS.",
              "Contrôle des accès.",
              "Utilisation de JWT pour l'accès sécurisé à l'interface web.",
              "Traitement rigoureux des données sensibles.",
              "Validation des messages avant transmission.",
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
              "Simulation réaliste d'un terminal de paiement.",
              "Traitement des paiements acceptés et refusés.",
              "Centralisation du flux de paiement.",
              "Retour clair des réponses vers Postman.",
              "Gestion structurée des erreurs.",
              "Stockage des transactions.",
              "Meilleure compréhension du fonctionnement monétique.",
              "Préparation à une future intégration avec de vrais systèmes bancaires.",
            ],
          },
          {
            title: "Gains techniques",
            items: [
              "Backend moderne avec Kotlin.",
              "Serveur Ktor pour gérer les transactions.",
              "Communication REST avec JSON.",
              "Messages bancaires ISO 8583.",
              "Simulateur bancaire en Python.",
              "Base de données MongoDB.",
              "Tests unitaires.",
              "Architecture modulaire.",
              "Séparation claire des responsabilités.",
              "Meilleure maintenabilité du code.",
            ],
          },
        ],
      },
      {
        title: "Conclusion",
        body: [
          "Caashpay est une API de paiement complète permettant de simuler, générer, transmettre, analyser et traiter des transactions bancaires selon le protocole CB2A et la norme ISO 8583.",
          "Le projet constitue une base solide pour une solution professionnelle de paiement, pouvant évoluer vers une passerelle monétique complète destinée aux commerçants, partenaires omnicanaux ou solutions de paiement en ligne et de proximité.",
        ],
        items: [
          "Comprendre le domaine complexe de la monétique.",
          "Concevoir une passerelle de paiement.",
          "Implémenter des messages ISO 8583.",
          "Développer une API REST avec Kotlin.",
          "Utiliser Ktor pour gérer des flux transactionnels.",
          "Créer un serveur Python simulant une banque acquéreur.",
          "Gérer les cas de paiement accepté, refusé et erroné.",
          "Stocker les transactions avec MongoDB.",
          "Sécuriser une application avec JWT.",
          "Tester et fiabiliser des composants critiques.",
          "Travailler sur un projet respectant des contraintes bancaires réelles.",
        ],
      },
      {
        title: "Apprentissages et perspectives",
        columns: [
          {
            title: "Compétences acquises",
            items: [
              "Compréhension du domaine de la monétique.",
              "Connaissance des acteurs du paiement bancaire.",
              "Maîtrise du protocole CB2A.",
              "Implémentation de messages ISO 8583.",
              "Développement backend avec Kotlin.",
              "Utilisation du framework Ktor.",
              "Création d'API REST.",
              "Manipulation de données JSON.",
              "Développement d'un serveur Python.",
              "Simulation d'une banque acquéreur.",
              "Gestion des erreurs transactionnelles.",
              "Utilisation de MongoDB.",
              "Mise en place de tests unitaires.",
              "Sensibilisation aux exigences PCI DSS.",
              "Analyse des flux de paiement.",
              "Conception d'une architecture technique complète.",
            ],
          },
          {
            title: "Perspectives d'évolution",
            items: [
              "Connexion à un véritable environnement bancaire de test.",
              "Authentification renforcée.",
              "Système de chiffrement avancé.",
              "Amélioration de la conformité PCI DSS.",
              "Tableau de bord de suivi des transactions.",
              "Visualisation des paiements en temps réel.",
              "Gestion avancée des logs.",
              "WebSocket pour notifications instantanées.",
              "Nouveaux types de messages ISO 8583.",
              "Support de nouveaux moyens de paiement.",
              "CI/CD complète.",
              "Tests d'intégration.",
              "Déploiement Dockerisé.",
              "Surveillance des performances.",
              "Audit de sécurité.",
              "Documentation OpenAPI / Swagger.",
              "Gestion multi-commerçant.",
              "Statistiques détaillées sur les transactions.",
              "Module de détection de fraude.",
              "Historique complet des opérations.",
              "Interface d'administration pour les paiements.",
            ],
          },
        ],
      },
    ],
  },
};

const compactProjectDetailsEn: Record<Exclude<ProjectKey, "sezaia">, ProjectDetail> = {
  orderhub: {
    eyebrow: "Personal project",
    title: "OrderHub",
    subtitle: "Order management platform",
    intro: [
      "Development of a full-stack order management platform for restaurants, snack bars, food businesses and online sales services.",
      "OrderHub centralizes order taking, status tracking, product management, users and dashboards through a modern responsive interface.",
      "The application is based on a modular architecture with a React frontend, a Spring Boot backend, a PostgreSQL database and Dockerized deployment. The project focuses on user experience fluidity, code maintainability and technical scalability.",
    ],
    technologies: [
      "Docker",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "WebStorm",
      "Spring Data JPA",
      "JWT",
      "REST API",
    ],
    sections: [
      {
        title: "Context and challenges",
        body: [
          "Restaurants, snack bars and small businesses need simple tools to manage orders in real time. OrderHub aims to provide a centralized, intuitive and efficient solution.",
          "Traditional order management systems can be expensive, inflexible or poorly adapted to small structures. The main challenge was to create an accessible platform to manage products, customer orders, preparation statuses, users and overall activity tracking.",
          "OrderHub addresses this need with a clear interface, robust architecture and modular organization that makes future evolution easier.",
        ],
      },
      {
        title: "Project goals",
        items: [
          "Centralize order management in a single platform.",
          "Enable real-time order tracking.",
          "Provide a modern, fluid and responsive interface.",
          "Clearly separate roles between administrator, manager and user.",
          "Make product, category and order status management easier.",
          "Build a maintainable and scalable backend architecture.",
          "Prepare the project for deployment in a Dockerized environment.",
        ],
      },
      {
        title: "Technical solution",
        body: [
          "The project architecture relies on a clear separation between frontend, backend and database. This organization makes maintenance, testing, functional evolution and deployment easier.",
        ],
        columns: [
          {
            title: "Frontend",
            items: ["React with TypeScript", "Tailwind CSS", "Modern responsive interface"],
          },
          {
            title: "Backend",
            items: ["Spring Boot", "Modular architecture", "REST API structured by modules"],
          },
          {
            title: "Data and security",
            items: ["PostgreSQL", "Spring Data JPA", "JWT", "Role management"],
          },
          {
            title: "Infrastructure and tools",
            items: ["Docker", "Isolated services", "WebStorm", "Reproducible environment"],
          },
        ],
        architecture: {
          inputsLabel: "User interface",
          sources: ["React frontend", "Responsive interface"],
          backendLabel: "Business API",
          backend: "Spring Boot REST API backend",
          databaseLabel: "Data",
          database: "PostgreSQL",
          servicesLabel: "Key modules",
          services: [
            "Orders and statuses",
            "Products and categories",
            "JWT and roles",
            "Dockerization",
          ],
        },
      },
      {
        title: "Key integrations",
        blocks: [
          {
            title: "Order management",
            body: "A complete system to create, view, update and track orders across statuses such as pending, preparing, ready, delivered or canceled.",
          },
          {
            title: "Product management",
            body: "A module to administer products, prices, descriptions, images, availability and categories.",
          },
          {
            title: "Secure authentication",
            body: "JWT-based authentication to secure access to sensitive features.",
          },
          {
            title: "Role management",
            body: "Permissions are separated according to user profiles: administrator, employee, manager or customer.",
          },
          {
            title: "Modular backend API",
            body: "The Spring Boot backend is organized into layers and functional modules: users, authentication, orders, products, categories and dashboard.",
          },
          {
            title: "Responsive interface",
            body: "The interface adapts to desktops, tablets and mobile devices for smooth use across contexts.",
          },
          {
            title: "Dockerization",
            body: "A Docker environment makes it easy to run the frontend, backend and database in separate containers.",
          },
        ],
      },
      {
        title: "Main features",
        blocks: [
          {
            title: "1. Administrator dashboard",
            body: "The dashboard gives managers a quick view of important business activity indicators and the overall service state.",
            items: [
              "Total number of orders.",
              "Pending orders.",
              "Completed orders.",
              "Potential revenue.",
              "Available products.",
              "Recent activity.",
            ],
          },
          {
            title: "2. Order management",
            body: "OrderHub tracks each order from creation to completion, improving coordination between order taking, preparation and delivery.",
            items: [
              "Order creation.",
              "Order list display.",
              "Order detail view.",
              "Status changes.",
              "Deletion or cancellation.",
              "Chronological tracking.",
            ],
          },
          {
            title: "3. Products and categories",
            body: "The administrator can maintain an up-to-date product catalog from a dedicated interface without technical intervention.",
            items: [
              "Add new products.",
              "Edit product information.",
              "Delete products.",
              "Organize by categories.",
              "Manage prices.",
              "Manage availability.",
            ],
          },
          {
            title: "4. Authentication and security",
            body: "The project includes secure authentication to protect sensitive routes and administration features.",
            items: [
              "User login.",
              "JWT token generation.",
              "Backend route protection.",
              "Role-based access control.",
              "Separation between public and private areas.",
            ],
          },
          {
            title: "5. Modern responsive interface",
            body: "The UI was designed to be simple, fast and pleasant to use, including for non-technical users.",
            items: [
              "Clear navigation.",
              "Reusable components.",
              "Readable visual hierarchy.",
              "Mobile adaptation.",
              "Fluid experience.",
            ],
          },
          {
            title: "6. Scalable architecture",
            body: "Thanks to the Spring Boot architecture structured by responsibilities, new features can be added without challenging the core project structure.",
            items: [
              "Online payment.",
              "Real-time notifications.",
              "Delivery tracking.",
              "Advanced statistics.",
              "Multi-restaurant management.",
              "Mobile application.",
              "Reservation system.",
              "Customer history.",
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
              "Better visibility on orders.",
              "Time savings for managers.",
              "Reduced processing errors.",
              "Simple interface for users.",
              "Centralized product catalog management.",
              "Clear activity tracking.",
            ],
          },
          {
            title: "Technical gains",
            items: [
              "Clear separation between frontend and backend.",
              "Backend structured with Spring Boot.",
              "Strong typing with TypeScript.",
              "Robust relational database with PostgreSQL.",
              "Structured data management with Spring Data JPA.",
              "Dockerized environment.",
              "Code organized by modules.",
              "Clear and extensible REST API.",
            ],
          },
        ],
      },
      {
        title: "Conclusion",
        body: [
          "OrderHub is a complete order management platform combining a modern interface, a robust backend architecture and a structured relational database.",
          "The project is a solid foundation for a professional order management solution that can evolve into a SaaS platform for restaurants, shops or delivery services.",
        ],
        items: [
          "Design a complete full-stack application.",
          "Structure a modular backend with Spring Boot.",
          "Build a responsive user interface with React.",
          "Secure an application with JWT.",
          "Model a PostgreSQL database.",
          "Organize a professional project with Docker.",
          "Think through scalable and maintainable architecture.",
        ],
      },
      {
        title: "Learnings and perspectives",
        columns: [
          {
            title: "Skills gained",
            items: [
              "Designing a complete full-stack architecture.",
              "Creating REST APIs with Spring Boot.",
              "Managing databases with PostgreSQL and Spring Data JPA.",
              "Securing authentication with JWT.",
              "Building modern interfaces with React and Tailwind CSS.",
              "Organizing code into reusable modules.",
              "Dockerizing an application environment.",
              "Managing roles and permissions.",
              "Thinking through user experience.",
            ],
          },
          {
            title: "Future evolutions",
            items: [
              "Real-time notifications with WebSocket.",
              "Online payment system.",
              "Advanced statistics module.",
              "Customer area.",
              "Automatic invoice generation.",
              "Multi-restaurant management.",
              "Mobile application.",
              "Detailed order history.",
              "Loyalty system.",
              "Delivery module.",
              "Complete CI/CD to automate tests and deployment.",
            ],
          },
        ],
      },
    ],
  },
  beyrouthine: {
    eyebrow: "Client project",
    title: "La Beyrouthine",
    subtitle: "Restaurant website with dynamic menu, online reservation and back-office",
    intro: [
      "Full-stack project built for La Beyrouthine, a Lebanese restaurant located in Antony.",
      "Development of a web platform dedicated to presenting the restaurant, browsing a dynamic menu, booking tables, guiding users to online ordering platforms and administering content through a secure interface.",
      "The project is based on a React/TypeScript frontend, a Spring Boot/PostgreSQL backend and a Docker infrastructure with Traefik, Nginx and HTTPS. The solution is deployed under the custom domain labeiruthine.fr, with source code versioned on GitHub.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Lucide React",
      "Spring Boot",
      "Java 17",
      "Spring Web MVC",
      "Spring Data JPA",
      "Spring Security",
      "Spring Mail",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Traefik",
      "Nginx",
      "Let's Encrypt",
      "pgAdmin",
      "SMTP",
      "GitHub",
      "REST API",
    ],
    sections: [
      {
        title: "Context and challenges",
        body: [
          "Restaurants need a clear, fast and easy-to-maintain web presence. La Beyrouthine needed a website able to present its atmosphere, dishes, practical information and ordering channels while centralizing reservations and menu management.",
          "The goal was to build a complete solution, more flexible than a static showcase website. The restaurant menu is powered by a backend API, reservations are stored in the database, slot availability is checked, and a back-office makes it possible to administer categories, dishes and reservation requests.",
          "The main challenge was to provide a smooth customer experience while giving the restaurant a simple tool to manage content and track reservations.",
        ],
      },
      {
        title: "Project goals",
        items: [
          "Create a modern website for La Beyrouthine restaurant.",
          "Display a dynamic menu organized by categories.",
          "Allow customers to book a table online.",
          "Check available capacity by date, time and number of guests.",
          "Send emails related to reservation requests.",
          "Guide customers to Uber Eats, Deliveroo or phone ordering.",
          "Centralize reservation management in a back-office.",
          "Allow categories and dishes to be added or deleted.",
          "Build a centralized REST API.",
          "Deploy the application with Docker, Traefik, Nginx and HTTPS.",
          "Version the source code on GitHub.",
        ],
      },
      {
        title: "My role",
        body: [
          "I contributed to the design and development of the whole solution, from the frontend structure to the backend and deployment.",
        ],
        items: [
          "Design of the public restaurant interface.",
          "React/TypeScript frontend development.",
          "Navigation setup with React Router.",
          "Dynamic photo gallery integration with filters and lightbox.",
          "Menu page development connected to the API.",
          "Reservation form development with availability checks.",
          "Order page creation with delivery or takeaway choices.",
          "Administration interface development.",
          "Spring Boot backend development.",
          "Reservation, category and dish entity modeling.",
          "Public and administrator REST endpoint creation.",
          "PostgreSQL integration with Spring Data JPA.",
          "Spring Security configuration for administration.",
          "SMTP integration for reservation emails.",
          "Containerization with Docker and Docker Compose.",
          "Traefik, Nginx, HTTPS and custom domain configuration.",
          "Source code management on GitHub.",
        ],
      },
      {
        title: "Technical solution",
        body: [
          "The backend acts as the source of truth. It centralizes menu data, reservations, capacity checks, administrator endpoints and email sending.",
        ],
        columns: [
          {
            title: "Web frontend",
            items: [
              "React",
              "TypeScript",
              "Vite",
              "React Router",
              "Tailwind CSS",
              "Lucide React",
              "Dynamic image imports",
              "Controlled forms",
              "Loading and error state handling",
            ],
          },
          {
            title: "Backend",
            items: [
              "Spring Boot",
              "Java 17",
              "Spring Web MVC",
              "Spring Data JPA",
              "Spring Security",
              "Spring Mail",
              "PostgreSQL",
              "REST API",
              "Reservation validation",
              "Capacity control by time slot",
            ],
          },
          {
            title: "Infrastructure and project",
            items: [
              "Docker",
              "Docker Compose",
              "Traefik",
              "Nginx",
              "Let's Encrypt",
              "labeiruthine.fr domain",
              "pgAdmin",
              "GitHub",
            ],
          },
        ],
        architecture: {
          inputsLabel: "Application clients",
          sources: ["React frontend", "Administrator web back-office"],
          backendLabel: "Source of truth",
          backend: "Spring Boot REST API backend",
          databaseLabel: "Database",
          database: "PostgreSQL",
          servicesLabel: "Connected services",
          services: [
            "SMTP emails",
            "Traefik reverse proxy",
            "Let's Encrypt HTTPS",
            "Nginx frontend web server",
            "Docker Compose",
          ],
        },
      },
      {
        title: "Key integrations",
        blocks: [
          {
            title: "Dynamic menu",
            body: "The restaurant menu is organized by categories and dishes. The frontend fetches categories and dishes from the API, filters available dishes and displays prices, descriptions and menu sections dynamically.",
          },
          {
            title: "Online reservation",
            body: "The reservation form lets customers choose a date, time, number of guests and optional message. Reservations are only possible from the next day onward, with time slots defined according to opening days.",
          },
          {
            title: "Capacity control",
            body: "Each time slot has a maximum capacity of 40 guests. The frontend queries the API to know existing reservations for a slot and calculates remaining seats. The backend also checks capacity before saving the reservation.",
          },
          {
            title: "Transactional emails",
            body: "When a reservation is created, the backend sends an email to the restaurant administrator with the request details and a confirmation email to the customer.",
          },
          {
            title: "Administrator back-office",
            body: "The admin interface can view and delete reservations, create or delete categories, and create or delete dishes. It communicates with the API admin endpoints.",
          },
          {
            title: "Photo gallery",
            body: "The homepage includes a dynamic gallery based on project images. Photos are grouped into Restaurant, Dishes and Desserts, with filters, progressive loading, a show-more button and lightbox.",
          },
          {
            title: "Online ordering",
            body: "The order page guides users to Uber Eats or Deliveroo depending on delivery or takeaway mode. A phone ordering option is also available.",
          },
          {
            title: "Server deployment",
            body: "The application is containerized with Docker Compose. Traefik handles reverse proxying, web and API routes, HTTP-to-HTTPS redirection and Let's Encrypt certificates. Nginx serves the compiled React frontend.",
          },
        ],
      },
      {
        title: "Main features",
        blocks: [
          {
            title: "1. Public showcase website",
            items: [
              "Immersive homepage.",
              "Restaurant presentation.",
              "Dynamic photo gallery.",
              "Quick access to menu, reservation and ordering.",
              "Practical information and restaurant identity highlights.",
            ],
          },
          {
            title: "2. Dynamic menu",
            items: [
              "Category display.",
              "Available dish display.",
              "Euro-formatted prices.",
              "Optional descriptions.",
              "Anchor navigation to menu sections.",
              "Loading from the REST API.",
            ],
          },
          {
            title: "3. Online reservation",
            items: [
              "Complete customer form.",
              "Minimum date from the next day.",
              "Generated time slots based on opening days.",
              "Available capacity check.",
              "Full slot blocking.",
              "Confirmation message after submission.",
              "Database persistence.",
            ],
          },
          {
            title: "4. Ordering",
            items: [
              "Choice between delivery and takeaway.",
              "Redirect to Uber Eats.",
              "Redirect to Deliveroo.",
              "Direct phone ordering.",
              "Display of timing and fees depending on platform.",
            ],
          },
          {
            title: "5. Back-office",
            items: [
              "Administrator login.",
              "Reservation consultation.",
              "Reservation deletion.",
              "Category creation and deletion.",
              "Dish creation and deletion.",
              "Data refresh.",
              "Tabbed interface.",
            ],
          },
          {
            title: "6. Centralized REST backend",
            items: [
              "Public endpoints for the menu.",
              "Public endpoints for reservations.",
              "Administrator endpoints for categories, dishes and reservations.",
              "Server-side capacity control.",
              "PostgreSQL persistence.",
              "SMTP email sending.",
              "CORS configuration.",
              "Administration security.",
            ],
          },
          {
            title: "7. Docker infrastructure",
            items: [
              "Frontend, backend and database services.",
              "PostgreSQL for application data.",
              "pgAdmin for database administration.",
              "Traefik for routing and HTTPS.",
              "Nginx to serve the web application.",
              "Deployment under labeiruthine.fr.",
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
              "Professional web presence for the restaurant.",
              "Simple and fast menu consultation.",
              "Reduced manually handled reservations.",
              "Better visibility on available slots.",
              "Centralized reservation requests.",
              "Autonomous administration of categories and dishes.",
              "Clear path to ordering platforms.",
              "Mobile and desktop experience adapted to customers.",
            ],
          },
          {
            title: "Technical gains",
            items: [
              "Coherent full-stack architecture.",
              "Centralized REST API consumed by the public frontend and back-office.",
              "Robust backend based on Spring Boot and PostgreSQL.",
              "Capacity control performed on both client and server sides.",
              "SMTP integration for reservation notifications.",
              "Containerized deployment with Docker Compose.",
              "Traefik reverse proxy with automatic HTTPS.",
              "Performant React frontend compiled with Vite.",
              "Source code versioned on GitHub.",
              "Solid foundation for future website features.",
            ],
          },
        ],
      },
      {
        title: "Conclusion",
        body: [
          "This project allowed me to build a complete web solution for a restaurant, from the public interface to administration and deployment.",
          "La Beyrouthine demonstrates my ability to build a concrete full-stack application connected to a database, exposed through a REST API, secured for administration and deployed on Docker infrastructure with a custom domain.",
        ],
        items: [
          "React frontend development.",
          "Spring Boot backend development.",
          "PostgreSQL database management.",
          "REST API.",
          "Online reservation.",
          "Transactional emails.",
          "Administrator back-office.",
          "Dockerization.",
          "Traefik, Nginx and HTTPS configuration.",
          "Source code management with GitHub.",
        ],
      },
      {
        title: "Learnings",
        columns: [
          {
            title: "Skills gained",
            items: [
              "Structuring a modern full-stack project.",
              "Building web interfaces with React, TypeScript and Tailwind CSS.",
              "Setting up navigation with React Router.",
              "Consuming a REST API from the frontend.",
              "Developing an API with Spring Boot.",
              "Using Spring Data JPA with PostgreSQL.",
              "Implementing reservation and capacity business logic.",
              "Integrating transactional emails through SMTP.",
              "Creating an administration back-office.",
              "Containerizing an application with Docker.",
              "Configuring a Traefik reverse proxy.",
              "Setting up HTTPS with Let's Encrypt.",
              "Deploying an application under a custom domain.",
              "Versioning and organizing code with GitHub.",
            ],
          },
        ],
      },
    ],
  },
  caashpay: {
    eyebrow: "Internship",
    title: "Caashpay",
    subtitle: "CB2A payment API",
    intro: [
      "Development of a payment API designed to facilitate, secure and process card transactions in a payment systems environment.",
      "The Caashpay project is based on the implementation of the CB2A protocol, Carte Bancaire version 6, and on the generation, sending, decoding and processing of financial messages in ISO 8583 format.",
      "The main goal is to create a payment gateway able to receive transactional data in JSON format, convert it into ISO 8583 messages, transmit it to a server simulating an acquiring bank, then return a clear response indicating acceptance, refusal or transaction error.",
      "The project belongs to the payment systems domain, where security, reliability, standards compliance and exchange precision are essential.",
    ],
    technologies: [
      "Kotlin",
      "Java",
      "Ktor",
      "Python",
      "MongoDB",
      "REST API",
      "JSON",
      "ISO 8583",
      "CB2A",
      "CB6",
      "Postman",
      "JWT",
      "Node.js",
      "React.js",
      "PCI DSS",
      "API RESTful",
      "Git",
      "IntelliJ IDEA",
      "WebStorm",
    ],
    sections: [
      {
        title: "Context and challenges",
        body: [
          "Electronic payments are central to modern commerce, and companies need solutions able to process transactions quickly, securely and reliably.",
          "Payment systems must handle communication between several actors: payment terminal, payment gateway, acquiring bank, acceptance networks and issuing bank.",
          "Caashpay addresses this need by providing a payment API able to simulate and process card transactions according to standards used in the payment systems domain.",
          "The main challenges were to understand payment systems, implement ISO 8583 messages, use the CB2A Carte Bancaire version 6 protocol, secure sensitive data exchanges, simulate an acquiring bank, guarantee transaction reliability and manage accepted, refused and error cases.",
        ],
      },
      {
        title: "Project goals",
        items: [
          "Develop a payment API compliant with the CB2A protocol.",
          "Implement ISO 8583 messages required for banking transactions.",
          "Allow payment terminal simulation through Postman.",
          "Convert JSON data into ISO 8583 messages.",
          "Create a Python server simulating an acquiring bank.",
          "Process different transaction types: authorization, financial transaction and cancellation.",
          "Handle accepted or refused payment responses.",
          "Implement robust error management.",
          "Save transaction information in MongoDB.",
          "Test correct ISO 8583 message generation.",
          "Strengthen understanding of the payment systems domain.",
          "Build a scalable architecture for future payment features.",
        ],
      },
      {
        title: "Technical solution",
        body: [
          "The project architecture relies on several complementary components. Postman acts as a simulated payment terminal. The payment API receives JSON data, validates required fields, builds an ISO 8583 message, then sends it to a Python server simulating an acquiring bank.",
          "The Python server analyzes the message, generates an ISO 8583 response and sends it back to the gateway. Finally, the gateway processes this response, displays it in Postman and saves transaction information in MongoDB.",
          "This organization realistically reproduces the cycle of a banking transaction, from the initial request to the final response.",
        ],
        columns: [
          {
            title: "Frontend and simulation",
            items: [
              "React.js for the secure web interface",
              "Postman as payment terminal simulator",
              "JSON requests",
              "Transaction response visualization",
            ],
          },
          {
            title: "Payment backend",
            items: [
              "Kotlin",
              "Ktor",
              "REST API",
              "ISO 8583 generation",
              "CB2A / CB6 implementation",
              "Transactional field validation",
            ],
          },
          {
            title: "Bank simulation and data",
            items: [
              "Python acquiring bank server",
              "ISO 8583 message decoding",
              "Accepted, refused or error responses",
              "MongoDB for traceability",
            ],
          },
          {
            title: "Security and tests",
            items: [
              "JWT",
              "PCI DSS principles",
              "Unit tests",
              "ISO 8583 message generation tests",
              "Postman",
              "IntelliJ IDEA / WebStorm",
            ],
          },
        ],
        architecture: {
          inputsLabel: "Simulation and interface",
          sources: ["Postman simulated terminal", "Secure React frontend"],
          backendLabel: "Payment gateway",
          backend: "Kotlin Ktor REST API",
          databaseLabel: "Traceability",
          database: "MongoDB",
          servicesLabel: "Payment flow",
          services: [
            "ISO 8583 messages",
            "Python acquiring server",
            "CB2A / CB6 protocol",
            "JWT and PCI DSS",
          ],
        },
      },
      {
        title: "Key integrations",
        blocks: [
          {
            title: "Payment API",
            body: "Creation of a gateway able to receive payment requests, verify required fields, generate ISO 8583 messages and transmit these messages to a simulated acquiring server.",
          },
          {
            title: "CB2A protocol",
            body: "Implementation of the Carte Bancaire version 6 protocol to respect banking domain requirements and ensure compatibility with payment system exchanges.",
          },
          {
            title: "ISO 8583 standard",
            body: "Structured messages based on the ISO 8583 standard for authorization requests, financial transactions and cancellations, with messages 0100, 0200 and 0400 as well as responses 0110, 0210 and 0410.",
          },
          {
            title: "Python acquiring bank simulator",
            body: "Development of a Python server responsible for receiving ISO 8583 messages, decoding them, analyzing transmitted fields and generating a response simulating an acquiring bank.",
          },
          {
            title: "MongoDB database",
            body: "Storage of transaction details to ensure traceability, analysis and persistence of payment operations.",
          },
          {
            title: "Postman simulation",
            body: "Use of Postman to simulate an electronic payment terminal, send transaction data in JSON format and view responses returned by the gateway.",
          },
          {
            title: "Error management",
            body: "Validation mechanism to detect missing, incorrect or badly formatted fields, then return understandable error messages.",
          },
          {
            title: "Unit tests",
            body: "Dedicated tests to verify correct ISO 8583 message generation and strengthen system robustness before execution.",
          },
        ],
      },
      {
        title: "Main features",
        blocks: [
          {
            title: "1. Payment terminal simulation",
            body: "Postman is used as a payment terminal simulator, making it possible to test the full flow without a real banking terminal.",
            items: [
              "Send a payment request.",
              "Simulate an authorization.",
              "Simulate a refused payment.",
              "Simulate field errors.",
              "View the final response.",
              "Test gateway behavior.",
            ],
          },
          {
            title: "2. ISO 8583 message generation",
            body: "Creation of ISO 8583 messages from JSON input data to respect a standardized payment systems structure.",
            items: [
              "0100 message for authorization requests.",
              "0200 message for financial transactions.",
              "0400 message for cancellations.",
              "Response messages 0110, 0210 and 0410.",
              "Fields: amount, date, terminal ID, transaction type, currency, reference number and response code.",
            ],
          },
          {
            title: "3. Accepted transaction processing",
            items: [
              "Send the JSON request through Postman.",
              "Receive it in the payment API.",
              "Validate fields.",
              "Create the ISO 8583 message.",
              "Transmit it to the Python server.",
              "Analyze the message on the server.",
              "Generate a positive response.",
              "Return the response to the API.",
              "Display the result in Postman.",
            ],
          },
          {
            title: "4. Refused transaction processing",
            body: "The Python server can generate a NOK response with a specific response code. The API then analyzes this response and returns an understandable result to Postman.",
            items: [
              "Insufficient funds.",
              "Invalid card.",
              "Expired card.",
              "Non-existent account.",
              "Inconsistent data.",
              "Negative response from the simulated acquiring server.",
            ],
          },
          {
            title: "5. Error management",
            items: [
              "Required field presence.",
              "Data format.",
              "MTI consistency.",
              "Transactional field validity.",
              "ISO 8583 message compliance.",
              "Server ability to process the request.",
            ],
          },
          {
            title: "6. Python acquiring bank simulator",
            items: [
              "Receive ISO 8583 messages.",
              "Decode message fields.",
              "Analyze transaction type.",
              "Simulate a banking response.",
              "Return an ISO 8583 response.",
              "Test accepted, refused or erroneous scenarios.",
            ],
          },
          {
            title: "7. Transaction storage with MongoDB",
            items: [
              "Transaction amount.",
              "Message type.",
              "Payment status.",
              "Response code.",
              "Date and time.",
              "Terminal ID.",
              "Transaction data.",
              "Acquiring server response.",
            ],
          },
          {
            title: "8. Security and compliance",
            items: [
              "Payment data security.",
              "PCI DSS principles.",
              "Access control.",
              "JWT for secure web interface access.",
              "Rigorous sensitive data handling.",
              "Message validation before transmission.",
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
              "Realistic payment terminal simulation.",
              "Accepted and refused payment processing.",
              "Centralized payment flow.",
              "Clear responses returned to Postman.",
              "Structured error handling.",
              "Transaction storage.",
              "Better understanding of payment systems.",
              "Preparation for future integration with real banking systems.",
            ],
          },
          {
            title: "Technical gains",
            items: [
              "Modern backend with Kotlin.",
              "Ktor server to handle transactions.",
              "REST communication with JSON.",
              "ISO 8583 banking messages.",
              "Python banking simulator.",
              "MongoDB database.",
              "Unit tests.",
              "Modular architecture.",
              "Clear separation of responsibilities.",
              "Improved code maintainability.",
            ],
          },
        ],
      },
      {
        title: "Conclusion",
        body: [
          "Caashpay is a complete payment API able to simulate, generate, transmit, analyze and process banking transactions according to the CB2A protocol and ISO 8583 standard.",
          "The project is a solid foundation for a professional payment solution that could evolve into a complete payment gateway for merchants, omnichannel partners or online and proximity payment solutions.",
        ],
        items: [
          "Understand the complex payment systems domain.",
          "Design a payment gateway.",
          "Implement ISO 8583 messages.",
          "Develop a REST API with Kotlin.",
          "Use Ktor to handle transactional flows.",
          "Create a Python server simulating an acquiring bank.",
          "Manage accepted, refused and erroneous payment cases.",
          "Store transactions with MongoDB.",
          "Secure an application with JWT.",
          "Test and harden critical components.",
          "Work on a project with real banking constraints.",
        ],
      },
      {
        title: "Learnings and perspectives",
        columns: [
          {
            title: "Skills gained",
            items: [
              "Understanding of the payment systems domain.",
              "Knowledge of banking payment actors.",
              "Mastery of the CB2A protocol.",
              "Implementation of ISO 8583 messages.",
              "Backend development with Kotlin.",
              "Use of the Ktor framework.",
              "REST API creation.",
              "JSON data manipulation.",
              "Python server development.",
              "Acquiring bank simulation.",
              "Transactional error management.",
              "MongoDB usage.",
              "Unit test setup.",
              "Awareness of PCI DSS requirements.",
              "Payment flow analysis.",
              "Design of a complete technical architecture.",
            ],
          },
          {
            title: "Future evolutions",
            items: [
              "Connection to a real banking test environment.",
              "Stronger authentication.",
              "Advanced encryption system.",
              "Improved PCI DSS compliance.",
              "Transaction tracking dashboard.",
              "Real-time payment visualization.",
              "Advanced log management.",
              "WebSocket for instant notifications.",
              "New ISO 8583 message types.",
              "Support for new payment methods.",
              "Complete CI/CD.",
              "Integration tests.",
              "Dockerized deployment.",
              "Performance monitoring.",
              "Security audit.",
              "OpenAPI / Swagger documentation.",
              "Multi-merchant management.",
              "Detailed transaction statistics.",
              "Fraud detection module.",
              "Complete operation history.",
              "Payment administration interface.",
            ],
          },
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
          body: [
            "Le backend joue le rôle de source de vérité. Il centralise les règles métier, les données, les sessions mobiles, les QR codes, les utilisateurs, les interventions, les rapports, les notifications et les emails.",
          ],
          architecture: {
            inputsLabel: "Clients applicatifs",
            sources: ["Frontend React", "Application Android Kotlin"],
            backendLabel: "Source de vérité",
            backend: "Backend Flask REST API",
            databaseLabel: "Base de données",
            database: "MySQL",
            servicesLabel: "Services connectés",
            services: [
              "Firebase Cloud Messaging",
              "SMTP emails",
              "Uploads fichiers / vidéos",
              "Génération QR codes",
            ],
          },
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
          title: "Apprentissages",
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
          body: [
            "The backend acts as the source of truth. It centralizes business rules, data, mobile sessions, QR codes, users, interventions, reports, notifications and emails.",
          ],
          architecture: {
            inputsLabel: "Application clients",
            sources: ["React frontend", "Android Kotlin application"],
            backendLabel: "Source of truth",
            backend: "Flask REST API backend",
            databaseLabel: "Database",
            database: "MySQL",
            servicesLabel: "Connected services",
            services: [
              "Firebase Cloud Messaging",
              "SMTP emails",
              "File / video uploads",
              "QR code generation",
            ],
          },
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
          title: "Learnings",
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
