import "@mui/material";

import functions from "styles/theme/functions";

import { SimplePaletteColorOptions, PaletteColor } from "@mui/material/styles";

declare module "@mui/material" {
  //** Palette */

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }

  interface Palette {
    tertiary: PaletteColor;
  }

  interface CommonColors {
    gray: string;
    hoverGray: string;
    activeText: string;
    iconGray: string;
  }

  interface ThemeOptions {
    functions: typeof functions;
  }

  interface Theme {
    functions: typeof functions;
  }

  interface TypographyVariants {
    body: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    // poster?: React.CSSProperties;
    body?: React.CSSProperties;
  }

  interface ButtonPropsVariantOverrides {
    show: true;
  }

  interface TypographyPropsVariantOverrides {
    body: true;
    active: true;
    //* remove default variants
    body1: false;
    body2: false;
    button: false;
  }

  interface BreakpointOverrides {
    desktop: true;
    tablet: true;
    mobile: true;

    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
