import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = i18n.language;
    localStorage.setItem("lang", i18n.language);
  }, [i18n.language]);

  return <>{children}</>;
}
