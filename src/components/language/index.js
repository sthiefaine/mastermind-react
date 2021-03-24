import { useContext } from "react";

import { languageOptions } from "../../data/languages";
import { LanguageContext } from "../../contexts/languages";

import { SelectStyled } from "../../styles/SelectStyled";
export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (event) =>
    userLanguageChange(event.target.value);
  return (
    <SelectStyled onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name[1]}
        </option>
      ))}
    </SelectStyled>
  );
}
