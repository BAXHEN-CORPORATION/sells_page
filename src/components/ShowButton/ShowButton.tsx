//** External Imports */
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons/faCircleChevronDown";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons/faCircleChevronUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
import React from "react";

//** Local Imports */

//** Typings */
export interface ShowButtonProps {
  showLabel?: string;
  hideLabel?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    show: boolean
  ) => void;
  show?: boolean;
}

//** Default Props */
const defaultProps: Partial<ShowButtonProps> = {
  showLabel: "More",
  hideLabel: "Less",
};

/**
 * Component for rendering show button states
 *
 * @component
 */
const ShowButton: React.FC<ShowButtonProps> = ({
  onClick,
  showLabel,
  hideLabel,
  show,
}) => {
  const [_show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (show != null) {
      setShow(show);
    }
  }, [show]);
  return (
    <Button
      data-testid="show-button"
      variant="show"
      sx={[
        show
          ? {
              "& > .MuiButton-endIcon": (theme) => ({
                [theme.breakpoints.down("tablet")]: {
                  marginRight: "-11px",
                },

                marginRight: "-20px",
              }),
            }
          : {
              "& > .MuiButton-endIcon": (theme) => ({
                [theme.breakpoints.down("tablet")]: {
                  marginRight: "-7px",
                },

                marginRight: "-12px",
              }),
            },
      ]}
      endIcon={
        <FontAwesomeIcon
          icon={show ? faCircleChevronUp : faCircleChevronDown}
        />
      }
      onClick={(e) => {
        if (show == null) setShow((old) => !old);
        if (onClick) {
          onClick(e, !show);
        }
      }}
    >
      {show ? hideLabel : showLabel}
    </Button>
  );
};

ShowButton.defaultProps = defaultProps;

export default ShowButton;
