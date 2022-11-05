import { createTheme } from "@mui/material/styles";
import breakpoints from "./base/breakpoints";
import colors from "./base/colors";
import functions from "./functions";

const utilityTheme = createTheme({
  breakpoints,
  palette: { ...colors },
  functions,
});

export default utilityTheme;
