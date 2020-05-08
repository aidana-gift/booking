import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import kg from "./locale/kg/translation.json";
import ru from "./locale/ru/translation.json";
import en from "./locale/en/translation.json";
import { initReactI18next } from "react-i18next";

const options = {
  resources: {
    ru: {
      common: ru
    },
    kg: {
      common: kg
    },
    en: {
      common: en
    }
  },

  fallbackLng: "ru",

  ns: ["common"],

  defaultNS: "common",

  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default"
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);

export default i18n;
