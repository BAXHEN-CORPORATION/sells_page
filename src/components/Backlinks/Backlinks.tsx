//** External Imports */
import React from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

//** Local Imports */

//** Typings */
export interface BacklinksProps {
  links?: string[];
}

//** Default Props */
const defaultProps: Partial<BacklinksProps> = {
  links: [],
};

/**
 * Component for rendering back links
 *
 * @component
 */
const Backlinks: React.FC<BacklinksProps> = ({ links }) => {
  return (
    <Box display="none">
      {links?.map((link, index) => (
        <Link key={index} href={link} target="__blank" />
      ))}
    </Box>
  );
};

Backlinks.defaultProps = defaultProps;

export default Backlinks;
