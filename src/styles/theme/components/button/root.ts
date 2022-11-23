import { CSSInterpolation, Theme } from "@mui/material/styles";
import colors from "styles/theme/base/colors";
import rgba from "styles/theme/functions/rgba";

const root: ({ theme }: { theme: Theme }) => CSSInterpolation = ({
  theme,
}) => ({
  textTransform: "capitalize",
  height: "54px",
  fontWeight: 500,
  fontSize: "18px",
  borderRadius: 0,
});

export default root;
