"use client";

import { createContext, useContext, useState } from "react";

import en from "../messages/en";
import fr from "../messages/fr";
import ar from "../messages/ar";

type Language = "en" | "fr" | "ar";

const messages = {
  en,
  fr,
  ar,
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: en,
});

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: messages[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}