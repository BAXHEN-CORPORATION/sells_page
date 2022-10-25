import { Components, Theme } from "@mui/material";
import theme from "styles/theme";
import colors from "styles/theme/base/colors";
import root from "./root";

const button: Components<Omit<Theme, "components">>["MuiButton"] = {
  // variants,
  defaultProps: { disableRipple: true, disableTouchRipple: true },
  styleOverrides: {
    root,
    endIcon: ({ theme }) => ({
      "& > *:nth-of-type(1)": { fontSize: "40px" },

      [theme.breakpoints.down("tablet")]: {
        "& > *:nth-of-type(1)": { fontSize: "30px" },
      },

      color: colors.common?.gray,
    }),
    sizeMedium: ({ theme }) => ({
      height: "56px",
      width: "146px",
      [theme.breakpoints.down("tablet")]: {
        width: "115px",
        height: "39px",
      },
    }),
  },
};

export default button;
