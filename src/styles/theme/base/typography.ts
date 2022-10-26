import { Palette } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import utilityTheme from "../utility-theme";

const typography: (palette: Palette) => TypographyOptions = (palette) => {
  return {
    fontFamily: "Inter",
    h1: {
      fontSize: "200px",
      lineHeight: 0.89,
      fontWeight: 700,
      color: palette.common.white,
      letterSpacing: "-5px",

      [utilityTheme.breakpoints.up("desktop")]: {
        fontSize: "200px",
      },
      [utilityTheme.breakpoints.down("desktop")]: {
        fontSize: "175px",
      },
      [utilityTheme.breakpoints.down("tablet")]: {
        fontSize: "100px",
      },
    },
    h2: {
      fontSize: "56px",
      lineHeight: 1.05,
      fontWeight: 700,
      color: palette.common.white,
      [utilityTheme.breakpoints.up("desktop")]: {
        fontSize: "56px",
      },
      [utilityTheme.breakpoints.down("desktop")]: {
        fontSize: "40px",
      },
      [utilityTheme.breakpoints.down("tablet")]: {
        fontSize: "18px",
      },
    },
    h3: {
      fontSize: "24px",
      lineHeight: 1.17,
      fontWeight: 700,
      color: palette.common.white,
      letterSpacing: "4.8px",
      textTransform: "uppercase",
      [utilityTheme.breakpoints.up("desktop")]: {
        fontSize: "24px",
      },
      [utilityTheme.breakpoints.down("desktop")]: {
        fontSize: "18px",
        letterSpacing: "3.6px",
      },
      [utilityTheme.breakpoints.down("tablet")]: {
        fontSize: "15px",
        letterSpacing: "3px",
      },
    },
    h4: {
      fontSize: "40px",
      lineHeight: 1.4,
      fontWeight: 400,
      color: palette.common.white,
      letterSpacing: "4px",
      textTransform: "uppercase",
      [utilityTheme.breakpoints.up("desktop")]: {
        fontSize: "40px",
      },
      [utilityTheme.breakpoints.down("desktop")]: {
        fontSize: "32px",
      },
      [utilityTheme.breakpoints.down("tablet")]: {
        fontSize: "15px",
      },
    },
    h5: {
      fontSize: "18px",
      lineHeight: 1.55,
      fontWeight: 700,
      color: palette.common.white,
      [utilityTheme.breakpoints.up("desktop")]: {
        fontSize: "18px",
      },
      [utilityTheme.breakpoints.down("tablet")]: {
        fontSize: "12px",
      },
    },
    h6: {
      fontSize: "15px",
      lineHeight: 1.87,
      fontWeight: 400,
      color: palette.common.white,
      letterSpacing: "3px",
      textTransform: "uppercase",
      [utilityTheme.breakpoints.up("desktop")]: {
        fontSize: "15px",
      },
      [utilityTheme.breakpoints.down("desktop")]: {
        fontSize: "13px",
      },
      [utilityTheme.breakpoints.down("tablet")]: {
        fontSize: "10px",
      },
    },
    body: {
      fontSize: "18px",
      lineHeight: 1.55,
      fontWeight: 400,
      color: palette.common.white,
      [utilityTheme.breakpoints.up("desktop")]: {
        fontSize: "18px",
      },

      [utilityTheme.breakpoints.down("tablet")]: {
        fontSize: "12px",
      },
    },
  };
};

export default typography;
