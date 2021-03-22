import { useTheme } from "../../contexts/themes";

import { ButtonXSStyled } from "../../styles/buttons/ButtonXSStyled";
export default function ThemeSelector() {
  const { toggleTheme, currentTheme } = useTheme();

  const handelOnClickChangeTheme = (event) => {
    return toggleTheme(event.target.id);
  };

  return (
    <ButtonXSStyled
      type="button"
      id={currentTheme === "dark" ? "light" : "dark"}
      onClick={handelOnClickChangeTheme}
    >
      {currentTheme === "dark" ? "☀️" : "🌙"}
    </ButtonXSStyled>
  );
}
