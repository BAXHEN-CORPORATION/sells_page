import { Palette } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import utilityTheme from "../utility-theme";

const typography: (palette: Palette) => TypographyOptions = (palette) => {
  return {
    fontFamily: "Figtree",
    h1: {
      fontSize: "95px",
      lineHeight: 1.1,
      fontWeight: 800,
      color: palette.common.black,
    },
    h2: {
      fontSize: "38px",
      lineHeight: 1.4,
      fontWeight: 400,
      color: palette.common.black,
      textAlign: "center",
    },
    active: {
      fontSize: "25px",
      lineHeight: 1.4,
      fontWeight: 700,
      color: palette.common.activeText,
      textAlign: "center",
      textTransform: "uppercase",
    },
    h3: {
      fontSize: "24px",
      lineHeight: 1.4,
      fontWeight: 800,
      color: palette.common.white,
      textAlign: "center",
    },
    h4: {
      fontSize: "76px",
      lineHeight: 1.3,
      wordSpacing: "8px",
      fontWeight: "bold",
      color: palette.common.activeText,
      textAlign: "center",
    },
    h5: {
      fontSize: "32px",
      lineHeight: 1.1,
      fontWeight: 600,
      color: palette.common.activeText,
      textAlign: "center",
    },

    subtitle1: {
      fontSize: "14px",
      lineHeight: 1.1,
      fontWeight: 400,
      textAlign: "center",
    },

    subtitle2: {
      fontSize: "12.5px",
      wordSpacing: "1px",
      lineHeight: 2,
      letterSpacing: "1px",
      fontWeight: 600,
      textAlign: "center",
    },
  };
};

export default typography;
