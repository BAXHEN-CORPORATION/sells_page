//** External Imports */
import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

//** Local Imports */

//** Typings */

export type PricingCardVariants = "tertiary" | "secondary" | "primary";

export interface PricingCardProps {
  variant?: PricingCardVariants;
  bestValue?: boolean;
  locale?: "pt" | "en";

  title: string;
  subtitle: string;
  currency: string;
  action: string;
  actionUrl: string;
  actionVariant?: "outlined" | "contained";
  features: string[];
  price: number;
}

//** Default Props */
const defaultProps: Partial<PricingCardProps> = {
  variant: "primary",
  locale: "pt",
  features: [],
  actionVariant: "outlined",
};

const bestValueSx = {
  en: {
    width: "150px",
    transform:
      "translateY(-75%) translateX(110%) translateX(-35px) rotate(45deg)",
  },
  pt: {
    width: "175px",
    transform:
      "translateY(-15%) translateX(85%) translateX(-35px) rotate(45deg)",
    overflow: "hidden",
  },
};

const bestValueLabel = {
  en: "best value",
  pt: "melhor escolha",
};

/**
 * Component for rendering a pricing card
 *
 * @component
 */
const PricingCard: React.FC<PricingCardProps> = ({
  variant,
  bestValue,
  title,
  subtitle,
  locale,
  currency,
  price,
  features,
  action,
  actionVariant,
  actionUrl,
}) => {
  const bestValueJsx = (
    <Box
      bgcolor="success.main"
      color="success.contrastText"
      sx={[
        {
          position: "absolute",
        },
        bestValueSx[locale!],
      ]}
    >
      <Typography variant="subtitle2" textTransform="uppercase">
        {bestValueLabel[locale!]}
      </Typography>
    </Box>
  );

  return (
    <Card elevation={4} sx={{ paddingBottom: "2rem" }}>
      <Stack
        p={2}
        height="111px"
        bgcolor={`${variant}.main`}
        alignItems="center"
        justifyContent="center"
        gap="0.5rem"
        position="relative"
        overflow="hidden"
      >
        {bestValue && bestValueJsx}

        <Typography variant="h5" color={`${variant}.contrastText`}>
          {title}
        </Typography>
        <Typography variant="subtitle1" color={`${variant}.contrastText`}>
          {subtitle}
        </Typography>
      </Stack>
      <CardContent sx={{ width: "330px" }}>
        <Stack alignItems="center">
          <Typography fontSize="42px" fontWeight={600} mb={2} mt={1}>
            <Typography
              component="span"
              fontSize="calc(60em/100)"
              sx={{ mr: "5px" }}
              lineHeight="1"
              fontWeight={600}
            >
              {currency}
            </Typography>
            {price}
          </Typography>
          <Stack width="100%" justifyContent="flex-start">
            {features.map((feature) => (
              <Box key={feature}>
                <Box display="flex" gap="1rem" p="0.5rem">
                  <DoneIcon
                    sx={{ fill: (theme) => theme.palette.primary.main }}
                  />

                  <Typography>{feature}</Typography>
                </Box>
                <Divider />
              </Box>
            ))}
          </Stack>
        </Stack>
      </CardContent>

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Button
          LinkComponent="a"
          href={actionUrl}
          target="__blank"
          variant={actionVariant}
          size="medium"
        >
          {action}
        </Button>
      </Box>
    </Card>
  );
};

PricingCard.defaultProps = defaultProps;

export default PricingCard;
