import { CSSInterpolation, Theme } from "@mui/material/styles";
import colors from "styles/theme/base/colors";
import rgba from "styles/theme/functions/rgba";

const root: ({ theme }: { theme: Theme }) => CSSInterpolation = ({
  theme,
}) => ({
  color: rgba(colors.common?.black as string, 0.5),
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: 1.75,
  letterSpacing: "5px",
  padding: "15px 21px",

  borderRadius: "28px",
  backgroundColor: "white",
  "&:hover .MuiButton-endIcon": {
    color: colors.common?.hoverGray,
  },
  "&:hover": {
    backgroundColor: "white",
  },

  [theme.breakpoints.down("tablet")]: {
    fontSize: "12px",
  },
});

export default root;
