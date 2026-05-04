import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { fr } from "./fr";
import { en } from "./en";

if (!i18n.isInitialized) {
  const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
  const lng = stored === "fr" || stored === "en" ? stored : "fr";
  i18n.use(initReactI18next).init({
    resources: { fr: { translation: fr }, en: { translation: en } },
    lng,
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
