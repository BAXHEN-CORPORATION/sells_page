import { Components, Theme } from "@mui/material";

import contained from "./contained";
import outlined from "./outlined";
import root from "./root";
import sizeMedium from "./sizeMedium";

const button: Components<Omit<Theme, "components">>["MuiButton"] = {
  // variants,
  defaultProps: { disableRipple: true, disableTouchRipple: true },
  styleOverrides: {
    root,
    contained,
    sizeMedium,
    outlined,
  },
};

export default button;
