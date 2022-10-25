import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import breakpoints from "./base/breakpoints";

import colors from "./base/colors";
import typography from "./base/typography";
import button from "./components/button";

const theme = createTheme({
  palette: {
    ...colors,
  },
  breakpoints,
  typography,
  components: {
    MuiButton: {
      ...button,
    },
  },
});

export default responsiveFontSizes(theme);
