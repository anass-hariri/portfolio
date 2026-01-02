import React, { createContext, useState, useEffect, useContext } from "react";

// Création du contexte
export const LanguageContext = createContext();

// Hook custom pour utiliser le contexte facilement
export const useLanguage = () => useContext(LanguageContext);

// Provider qui enveloppe l'application
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "fr"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
