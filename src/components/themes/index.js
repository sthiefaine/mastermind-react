import { useTheme } from "../../contexts/themes";

export default function ThemeSelector() {
  const { toggleTheme, currentTheme } = useTheme();

  const handelOnClickChangeTheme = (event) => {
    return toggleTheme(event.target.id);
  };

  return (
    <button
      type="button"
      className="navbt"
      id={currentTheme === "dark" ? "light" : "dark"}
      onClick={handelOnClickChangeTheme}
    >
      {currentTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
