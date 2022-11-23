//** External Imports */
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";
import PricingCard from "components/PricingCard";

//** Local Imports */

//** Typings */
export interface PricingProps {}

//** Default Props */
const defaultProps: Partial<PricingProps> = {};

/**
 * Component for  rendering pricing options
 *
 * @component
 */
const Pricing: React.FC<PricingProps> = () => {
  return (
    <Stack pt={5} gap="2rem">
      <Typography variant="h4">
        Try DigitalMarketer Lab Free For 14 Days
      </Typography>

      <Box display="flex" gap="2rem" justifyContent="center">
        <PricingCard
          variant="tertiary"
          title="Lab"
          subtitle="Perfect for Solo Marketers"
          currency="$"
          price={47}
        />
        <PricingCard
          variant="primary"
          bestValue
          title="Lab"
          currency="$"
          subtitle="Perfect for Solo Marketers"
          price={97}
        />
      </Box>
    </Stack>
  );
};

Pricing.defaultProps = defaultProps;

export default Pricing;
