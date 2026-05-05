export const en = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    available: "Available for full-time in France",
    name: "Houssein GHANNOUM",
    title: "Full-Stack Java / React Developer",
    subtitle: "Software Engineer",
    tagline1:
      "Full-Stack Java / React developer passionate about building modern, robust web applications shipped to production.",
    tagline2:
      "Junior software engineer specialized in Java Spring Boot, React and Python, with hands-on experience in REST APIs, Docker, CI/CD and VPS deployment.",
    cta: { projects: "View my projects", cv: "Download my resume", contact: "Contact me" },
    badge: "Full-Stack Engineer",
  },
  about: {
    title: "About",
    subtitle: "Product-oriented software engineer",
    p1: "Engineering graduate from ISEN Yncréa Ouest, I design and ship complete applications — from React frontend to Java/Python backend, all the way to production on VPS with Docker and CI/CD.",
    p2: "I gained real-world experience through apprenticeship and internships across diverse projects: SaaS, business apps, Android mobile and secure payment APIs.",
    p3: "My goal: build solid, performant and useful tech products with strong autonomy and a real product mindset.",
    points: [
      "Engineering degree from ISEN Yncréa Ouest",
      "Apprenticeship & internship experience",
      "Full-stack: Frontend, Backend, Mobile, DevOps",
      "Production deployment expertise (Docker, VPS, CI/CD)",
    ],
  },
  skills: {
    title: "Technical skills",
    subtitle: "Modern stack, from code to production",
    cats: {
      lang: "Languages",
      front: "Frontend",
      back: "Backend",
      db: "Databases",
      mobile: "Mobile",
      devops: "DevOps & Deployment",
      tools: "Tools",
    },
  },
  experience: {
    title: "Professional experience",
    subtitle: "My career path",
    techs: "Technologies",
    items: [
      {
        company: "SEZAIA",
        role: "Mobile & Web Developer Apprentice",
        period: "10/2024 – 09/2025",
        location: "Brest",
        bullets: [
          "Developed a complete after-sales solution including an Android app (Kotlin) and a React web interface for customer incident management.",
          "Designed and developed a REST API with Flask (Python) connected to a MySQL database.",
          "Implemented a unique QR code system for product identification and incident tracking.",
          "Deployed the application (frontend, API, database) on an IONOS server with infrastructure configuration.",
          "Collaborated with business teams to improve customer follow-up processes.",
        ],
      },
      {
        company: "CAASHPAY",
        role: "Java Developer Intern",
        period: "06/2024 – 09/2024",
        location: "Paris",
        bullets: [
          "Developed a secure REST payment API in Java compliant with the CB2A protocol and ISO8583 standard.",
          "Designed a Python acquiring bank simulator to test payment flows.",
          "Implemented data storage with MongoDB.",
          "Performed integration testing and payment terminal simulations with Postman.",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Selected work shipped to production",
    visit: "View project",
    featured: "Featured",
    items: {
      orderhub: {
        name: "OrderHub",
        type: "SaaS order management platform",
        period: "04/2026 – present",
        desc: "Full-stack SaaS app centralizing orders from channels like WhatsApp and Instagram. React + Spring Boot architecture, JWT auth, Docker deployment on VPS with GitHub Actions CI/CD.",
      },
      beyrouthine: {
        name: "La Beyrouthine Restaurant",
        type: "Full-stack restaurant website",
        period: "02/2026 – 03/2026",
        desc: "Full-stack web app with dynamic menu, automated email reservation system and admin dashboard. Spring Boot backend, PostgreSQL database, Dockerized VPS deployment.",
      },
      sezaia: {
        name: "SEZAIA After-Sales Solution",
        type: "Mobile + web business app",
        period: "2024 – 2025",
        desc: "Professional solution for customer issue management with Android Kotlin app, React web interface, Flask REST API, MySQL database and unique QR code system.",
      },
      caashpay: {
        name: "CAASHPAY Payment API",
        type: "Secure payment backend",
        period: "2024",
        desc: "Secure REST payment API compliant with CB2A protocol and ISO8583 standard, with a Python acquiring bank simulator and MongoDB transaction handling.",
      },
    },
    secondary: {
      title: "Other projects",
      items: [
        { name: "E-commerce website", desc: "E-commerce site built with AngularJS and Bootstrap." },
        {
          name: "ISEN greenhouse remote control",
          desc: "Remote irrigation management for a greenhouse using GCE Electronics tools.",
        },
      ],
    },
  },
  education: {
    title: "Education",
    subtitle: "Academic background",
    items: [
      {
        school: "ISEN Yncréa Ouest",
        degree: "Engineering degree — Software Development specialization",
        period: "09/2023 – 09/2025",
        location: "Brest, France",
      },
      {
        school: "Lebanese University — Faculty of Technology",
        degree: "Bachelor in Computer Networks & Telecommunications Engineering",
        period: "09/2018 – 06/2021",
        location: "Saida, Lebanon",
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      { name: "French", level: "Fluent" },
      {
        name: "English",
        level: "Fluent — TOEIC 850/990",
        certificateHref: "/certificates/Houssein_Ghannoum_TOEIC.pdf",
        certificateLabel: "View TOEIC result",
      },
      { name: "Arabic", level: "Native" },
    ],
  },
  why: {
    title: "Why work with me?",
    subtitle: "A complete, autonomous and product-driven profile",
    items: [
      {
        title: "End-to-end apps",
        desc: "Able to build complete products: frontend, backend, mobile and deployment.",
      },
      {
        title: "Solid full-stack",
        desc: "Java Spring Boot, React, Python, Docker, CI/CD and SQL/NoSQL databases.",
      },
      {
        title: "Product mindset",
        desc: "Hands-on experience with SaaS and business apps shipped to production.",
      },
      {
        title: "Technical autonomy",
        desc: "Used to driving a project from analysis to production on VPS.",
      },
    ],
  },
  stack: {
    title: "My favorite stack",
    subtitle: "Tools I use every day",
  },
  availability: {
    title: "Availability",
    desc: "Available for a full-time role in Full-Stack Java / React development, with openness to Python Backend and Android Kotlin positions.",
    highlights: ["Full-time", "Java / React / Python", "France · on-site or remote"],
  },
  contact: {
    title: "Contact",
    subtitle: "Let's talk about your project",
    email: "Send an email",
    linkedin: "Reach me on LinkedIn",
    call: "Call",
    whatsapp: "WhatsApp",
    cvFr: "CV en français",
    cvEn: "Resume in English",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Crafted with passion.",
  },
};
