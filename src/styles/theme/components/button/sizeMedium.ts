import { CSSInterpolation, Theme } from "@mui/material/styles";

const sizeMedium: ({ theme }: { theme: Theme }) => CSSInterpolation = ({
  theme,
}) => ({
  width: "200px",
});

export default sizeMedium;
