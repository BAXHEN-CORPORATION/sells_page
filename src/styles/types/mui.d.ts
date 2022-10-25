import "@mui/material";

declare module "@mui/material" {
  //** Palette */

  interface CommonColors {
    gray: string;
    hoverGray: string;
    iconGray: string;
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
