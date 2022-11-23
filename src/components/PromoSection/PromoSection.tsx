//** External Imports */
import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

//** Local Imports */

//** Typings */

export interface PromoItem {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  label: string;
}

export interface PromoSectionProps {
  items: PromoItem[];
}

//** Default Props */
const defaultProps: Partial<PromoSectionProps> = {
  items: [],
};

/**
 * Component for rendering the promotion section
 *
 * @component
 */
const PromoSection: React.FC<PromoSectionProps> = ({ items }) => {
  return (
    <Stack
      bgcolor="primary.main"
      height="111px"
      width="100vw"
      p={1}
      alignItems="center"
    >
      <Stack direction="row" p="20px" gap="2rem">
        {items.map(({ Icon, label }, i) => (
          <Stack direction="row" alignItems="center" gap="2rem" key={i}>
            <Icon htmlColor="white" sx={{ fontSize: "64px" }} />
            <Typography color="white" fontSize="18px" textAlign="center">
              {label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

PromoSection.defaultProps = defaultProps;

export default PromoSection;
