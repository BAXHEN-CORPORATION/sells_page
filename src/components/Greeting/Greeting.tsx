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

export const greetingConfig = {
  day: {
    greeting: "Good Morning, it's currently",
    Icon: <LightMode htmlColor="white" />,
  },
  night: {
    greeting: "Good evening, it's currently",
    Icon: <DarkMode htmlColor="white" />,
  },
};

/**
 * Component for rendering greeting
 *
 * @component
 */
const Greeting: React.FC<GreetingProps> = ({ time }) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center" mb={2}>
      {greetingConfig[time]?.Icon}
      <Typography
        data-testid="greeting"
        variant="h4"
        fontSize={{ mobile: "15px", tablet: "18px" }}
      >
        {greetingConfig[time].greeting}
      </Typography>
    </Stack>
  );
};

Greeting.defaultProps = defaultProps;

export default Greeting;
