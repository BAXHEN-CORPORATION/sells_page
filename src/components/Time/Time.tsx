//** External Imports */
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

//** Local Imports */

//** Typings */
export interface TimeProps {
  hours: string;
  timezone: string;
}

//** Default Props */
const defaultProps: Partial<TimeProps> = {};

/**
 * Component for rendering user time
 *
 * @component
 */
const Time: React.FC<TimeProps> = ({ hours, timezone }) => {
  return (
    <Stack spacing={2} direction="row" mb={2}>
      <Typography variant="h1">{hours}</Typography>
      <Typography variant="h4" sx={{ alignSelf: "flex-end", fontWeight: 300 }}>
        {timezone}
      </Typography>
    </Stack>
  );
};

Time.defaultProps = defaultProps;

export default Time;
