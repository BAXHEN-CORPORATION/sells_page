import { CSSInterpolation, Theme } from "@mui/material/styles";

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
