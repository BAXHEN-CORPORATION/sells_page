import { PaletteOptions, lighten } from "@mui/material/styles";

const colors: PaletteOptions = {
  common: {
    black: "#000000",
    gray: "#303030",
    white: "#FFFFFF",
    hoverGray: "#999999",
    iconGray: lighten("#707070", 0.5),
  },
};

export default colors;
