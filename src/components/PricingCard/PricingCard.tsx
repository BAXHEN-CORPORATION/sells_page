//** External Imports */
import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";

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
  price: number;
}

//** Default Props */
const defaultProps: Partial<PricingCardProps> = {
  variant: "primary",
  locale: "en",
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
    <Card elevation={4}>
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
          <Typography fontSize="30px" fontWeight={600}>
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
          {/* <Typography color="#5B5B5B" fontWeight={400} fontSize="1rem">
            Per Month
          </Typography> */}
        </Stack>
      </CardContent>

      <CardActionArea></CardActionArea>
    </Card>
  );
};

PricingCard.defaultProps = defaultProps;

export default PricingCard;
