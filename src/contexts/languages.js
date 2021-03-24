import { useState, useContext, createContext, memo } from "react";

import { languageOptions, dictionaryList } from "../data/languages";

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  let defaultLanguage = localStorage.getItem("lang");
  if (!defaultLanguage) {
    defaultLanguage = window.navigator.language.substring(0, 2);
  }

  const [userLanguage, setUserLanguage] = useState(defaultLanguage);

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      localStorage.setItem("lang", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

const Translate = ({ text }) => {
  const { dictionary } = useContext(LanguageContext);

  return (
    // eslint-disable-next-line no-new-wrappers
    dictionary[text] || dictionaryList.en[text] || text
  );
};

export default memo(Translate);
