//** External Imports */
import React from "react";

import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons/faArrowsRotate";

//** Local Imports */

//** Typings */
export interface QuoteProps {
  show: boolean;
  quote?: string;
  author?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

//** Default Props */
const defaultProps: Partial<QuoteProps> = {
  quote: "",
  author: "",
};

/**
 * Component for rendering quote
 *
 * @component
 */
const Quote: React.FC<QuoteProps> = ({ show, quote, author, onClick }) => {
  return (
    <Fade in={!show}>
      <Stack spacing={2} display={show ? "none" : "flex"}>
        <Stack direction="row">
          <Typography variant="body" sx={{ flex: 1 }}>
            "{quote}"
          </Typography>
          <IconButton
            sx={{
              "& > *": { color: (theme) => theme.palette.common.iconGray },
              fontSize: "1rem",
              marginBottom: "auto",
            }}
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faArrowsRotate} />
          </IconButton>
        </Stack>
        <Typography variant="h5"> {author}</Typography>
      </Stack>
    </Fade>
  );
};

Quote.defaultProps = defaultProps;

export default Quote;
