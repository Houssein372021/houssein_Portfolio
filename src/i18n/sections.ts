import { useI18n } from "@/i18n";
import { en } from "./en";
import { fr } from "./fr";

type TranslationOptions = { returnObjects?: boolean };

const resources = { fr, en } as const;

function resolveTranslation(language: "fr" | "en", key: string) {
  return key.split(".").reduce<unknown>((value, part) => {
    if (!value || typeof value !== "object") return undefined;
    return (value as Record<string, unknown>)[part];
  }, resources[language]);
}

export function useTranslation() {
  const i18n = useI18n();

  const t = (key: string, options?: TranslationOptions) => {
    const value = resolveTranslation(i18n.language, key);

    if (options?.returnObjects) {
      return value ?? key;
    }

    return typeof value === "string" ? value : key;
  };

  return { t, i18n };
}
