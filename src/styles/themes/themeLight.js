import { rgba } from "polished";

import theme from "./index";

const colorLabel = rgba("black", 0.57);
const colorText = rgba("black", 0.96);

export const lightTheme = {
  ...theme,
  background: "rgb(240, 240, 249)",
  primaryColor: "#202E3A",
  secondaryColor: "#8739F9",
  tertiaryColor: "#657786",
  tertiaryColor2: "rgb(255, 255, 255)",
  accentColor: "#00AAF2",

  overlay: "rgba(110, 118, 125, 0.4)",
  colorText: colorText,
  colorLabel: colorLabel,
  font: "Poppins",
  bs1: "0 0 6px 3px rgba(0,0,0,0.1)",
};
