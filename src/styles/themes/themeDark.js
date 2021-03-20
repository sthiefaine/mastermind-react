import { rgba } from "polished";

import theme from "./index";

const colorLabel = rgba("white", 0.57);
const colorText = rgba("white", 0.96);

export const darkTheme = {
  ...theme,
  background: "rgb(36, 36, 36)",
  primaryColor: "#17141A",
  secondaryColor: "#657786",
  accentColor: "#CA2055",
  tertiaryColor: "#CCD6DD",
  tertiaryColor2: "rgb(16, 15, 16)",

  overlay: "rgba(147, 149, 150, 0.4)",
  colorText: colorText,
  colorLabel: colorLabel,
  font: "Poppins",
  bs1: "0 0 6px 3px rgba(0,0,0,0.1)",
};
