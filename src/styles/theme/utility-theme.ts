import { createTheme } from "@mui/material/styles";
import breakpoints from "./base/breakpoints";
import colors from "./base/colors";

const utilityTheme = createTheme({ breakpoints, palette: { ...colors } });

export default utilityTheme;
