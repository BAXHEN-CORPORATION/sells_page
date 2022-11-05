import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import breakpoints from "./base/breakpoints";

import colors from "./base/colors";
import typography from "./base/typography";
import button from "./components/button";
import functions from "./functions";

const theme = createTheme({
  palette: {
    ...colors,
  },
  breakpoints,
  typography,
  functions: { ...functions },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
    },
    MuiButton: {
      ...button,
    },
  },
});

export default responsiveFontSizes(theme);
