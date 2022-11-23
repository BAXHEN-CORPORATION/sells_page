//** External Imports */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/system/Stack";
import PricingCard from "components/PricingCard";
import React from "react";

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
    <Stack pt={5} gap="2rem" pb={8}>
      <Typography variant="h4">
        Try DigitalMarketer Lab Free For 14 Days
      </Typography>

      <Box display="flex" gap="2rem" justifyContent="center">
        <PricingCard
          action="Try For Free"
          actionUrl="https://sowl.co/vhstY"
          variant="tertiary"
          title="Lab"
          subtitle="Perfect for Solo Marketers"
          currency="$"
          price={47}
          features={[
            "All 12 Mastery Certifications",
            "Instant Access To All New & Updated Certifications",
            "36+ step-by-step playbooks",
            "53 timely & tactical workshops",
            "5,000+ member community",
            "Single User Access",
          ]}
        />
        <PricingCard
          action="Try For Free"
          actionUrl="https://sowl.co/W5Qou"
          actionVariant="contained"
          variant="primary"
          bestValue
          title="Lab"
          currency="$"
          subtitle="Perfect for Solo Marketers"
          price={97}
          features={[
            "All 12 Mastery Certifications",
            "Instant Access To All New & Updated Certifications",
            "36+ step-by-step playbooks",
            "53 timely & tactical workshops",
            "5,000+ member community",
            "Single User Access",
          ]}
        />
      </Box>
    </Stack>
  );
};

Pricing.defaultProps = defaultProps;

export default Pricing;
