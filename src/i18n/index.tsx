import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { fr } from "./fr";
import { en } from "./en";

type Language = "fr" | "en";
type TranslationOptions = { returnObjects?: boolean };

const resources = { fr, en } as const;

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

export function useTranslation() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useTranslation must be used inside I18nProvider");
  }

  const currentContext = context;

  function t(key: string): string;
  function t(key: string, options: { returnObjects: true }): unknown;
  function t(key: string, options?: TranslationOptions): string | unknown {
    const value = resolveTranslation(currentContext.language, key);

    if (options?.returnObjects) {
      return value ?? key;
    }

    return typeof value === "string" ? value : key;
  }

  return {
    t,
    i18n: {
      language: currentContext.language,
      changeLanguage: currentContext.changeLanguage,
    },
  };
}
