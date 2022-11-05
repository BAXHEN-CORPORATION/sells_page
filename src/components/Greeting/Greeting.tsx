//** External Imports */
import { DarkMode, LightMode } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { TTime } from "pages";
import React from "react";

//** Local Imports */

//** Typings */
export interface GreetingProps {
  time: TTime;
}

//** Default Props */
const defaultProps: Partial<GreetingProps> = {};

const greeting = {
  day: { greeting: "Good Morning", Icon: <LightMode htmlColor="white" /> },
  night: { greeting: "Good evening", Icon: <DarkMode htmlColor="white" /> },
};

/**
 * Component for rendering greeting
 *
 * @component
 */
const Greeting: React.FC<GreetingProps> = ({time}) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center" mb={2}>
      {greeting[time]?.Icon}
      <Typography variant="h4" fontSize={{ mobile: "15px", tablet: "18px" }}>
        {greeting[time].greeting}, it's currently
      </Typography>
    </Stack>
  );
};

Greeting.defaultProps = defaultProps;

export default Greeting;
