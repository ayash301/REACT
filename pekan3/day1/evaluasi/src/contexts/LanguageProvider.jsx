import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ID");
  const toggleLanguage = () => setLanguage((prev) => (prev === "ID" ? "EN" : "ID"));
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
