import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { fr } from "./fr";
import { en } from "./en";
import { ar } from "./ar";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: { fr: { translation: fr }, en: { translation: en }, ar: { translation: ar } },
    lng: typeof window !== "undefined" ? localStorage.getItem("lang") || "fr" : "fr",
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
