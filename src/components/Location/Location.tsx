//** External Imports */
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShowButton from "components/ShowButton";
import React from "react";

//** Local Imports */

//** Typings */
export interface LocationProps {
  country: string;
  city: string;
}

//** Default Props */
const defaultProps: Partial<LocationProps> = {};

/**
 * Component for render user location
 *
 * @component
 */
const Location: React.FC<LocationProps> = ({ country, city }) => {
  return (
    <Stack
      direction={{ mobile: "column", tablet: "column", desktop: "row" }}
      mt="28px"
    >
      <Typography
        variant="h3"
        sx={{
          marginRight: { mobile: 0, desktop: "auto" },
          marginBottom: { mobile: "40px", desktop: 0 },
        }}
      >
        in {country}, {city}
      </Typography>
    </Stack>
  );
};

Location.defaultProps = defaultProps;

export default Location;
