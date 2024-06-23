import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from '../locales/en.json';
import translationRU from '../locales/ru.json';
import { LANGUAGES } from "@/constants/app";

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

// need to initialize i18next once.
i18next
  // Plug in i18next React extensions.
  .use(initReactI18next)
  .init({
    resources,
    // Array of allowed languages
    supportedLngs: Object.keys(LANGUAGES),
    // Set the default language to English.
    lng: LANGUAGES.en,
    // Disable i18next's default escaping, which prevents XSS
    // attacks. React already takes care of this.
    interpolation: {
      escapeValue: false,
    },
  });
