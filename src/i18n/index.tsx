import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Language = "fr" | "en";
type TranslationOptions = { returnObjects?: boolean };

const resources = {
  fr: {
    nav: {
      about: "\u00c0 propos",
      skills: "Comp\u00e9tences",
      experience: "Exp\u00e9riences",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
    },
    hero: {
      available: "Disponible pour un emploi en France",
      name: "Houssein GHANNOUM",
      title: "D\u00e9veloppeur Full-Stack Java / React",
      subtitle: "Ing\u00e9nieur Logiciel",
      tagline1:
        "D\u00e9veloppeur Full-Stack Java / React passionn\u00e9 par la cr\u00e9ation d'applications web modernes, robustes et d\u00e9ploy\u00e9es en production.",
      cta: {
        projects: "Voir mes projets",
        cv: "T\u00e9l\u00e9charger mon CV",
        contact: "Me contacter",
      },
      badge: "Ing\u00e9nieur Full-Stack",
    },
    footer: {
      rights: "Tous droits r\u00e9serv\u00e9s.",
      built: "Con\u00e7u avec passion.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      available: "Available for employment in France",
      name: "Houssein GHANNOUM",
      title: "Full-Stack Java / React Developer",
      subtitle: "Software Engineer",
      tagline1:
        "Full-Stack Java / React developer passionate about building modern, robust web applications shipped to production.",
      cta: { projects: "View my projects", cv: "Download my resume", contact: "Contact me" },
      badge: "Full-Stack Engineer",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Crafted with passion.",
    },
  },
} as const;

const I18nContext = createContext<{
  language: Language;
  changeLanguage: (language: string) => void;
} | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "fr";

  const stored = localStorage.getItem("lang");
  return stored === "en" || stored === "fr" ? stored : "fr";
}

function resolveTranslation(language: Language, key: string) {
  return key.split(".").reduce<unknown>((value, part) => {
    if (!value || typeof value !== "object") return undefined;
    return (value as Record<string, unknown>)[part];
  }, resources[language]);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("lang", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      changeLanguage: (nextLanguage: string) => {
        setLanguage(nextLanguage === "en" ? "en" : "fr");
      },
    }),
    [language],
  );

  return createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useTranslation must be used inside I18nProvider");
  }

  return context;
}

export function useTranslation() {
  const context = useI18n();

  const t = (key: string, options?: TranslationOptions) => {
    const value = resolveTranslation(context.language, key);

    if (options?.returnObjects) {
      return value ?? key;
    }

    return typeof value === "string" ? value : key;
  };

  return {
    t,
    i18n: {
      language: context.language,
      changeLanguage: context.changeLanguage,
    },
  };
}
