import { useMemo } from "react";
import { DEFAULT_LANGUAGE, translations } from "./translations";

export const useTranslations = (language) => {
  return useMemo(() => {
    const lang = translations[language] ? language : DEFAULT_LANGUAGE;

    const t = (section) => {
      const fallbackSection = translations[DEFAULT_LANGUAGE]?.[section] || {};
      const currentSection = translations[lang]?.[section] || {};
      return { ...fallbackSection, ...currentSection };
    };

    return { t, language: lang };
  }, [language]);
};
