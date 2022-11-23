import { CSSInterpolation, Theme } from "@mui/material/styles";
import colors from "styles/theme/base/colors";
import rgba from "styles/theme/functions/rgba";

const sizeMedium: ({ theme }: { theme: Theme }) => CSSInterpolation = ({
  theme,
}) => ({
  width: "200px",
});

export default sizeMedium;
