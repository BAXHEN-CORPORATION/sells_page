import { PaletteOptions, lighten } from "@mui/material/styles";

const colors: PaletteOptions = {
  common: {
    black: "#000000",
    gray: "#303030",

    white: "#FFFFFF",
    hoverGray: "#999999",
    iconGray: lighten("#707070", 0.5),
    activeText: "#2C2C2C",
  },
  primary: { main: "#009ffd", contrastText: "#FFFFFF" },
  secondary: { main: "#0482B4" },
  tertiary: { main: "#009FFD0F", contrastText: "#0482B4" },
  success: { main: "#00d45b", contrastText: "#FFFFFF" },
};

export default colors;
