//** External Imports */
import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";

//** Local Imports */
import { TTime } from "pages";
import Typography from "@mui/material/Typography";

//** Typings */
export interface TimezoneDetailsProps {
  show: boolean;
  time: TTime;
  info: TimezoneInfo;
}

export interface TimezoneInfo {
  timezone: string;
  dayOfYear: number | string;
  dayOfWeek: number | string;
  weekNumber: number | string;
}

//** Default Props */
const defaultProps: Partial<TimezoneDetailsProps> = {};

/**
 * Component for rendering timezone details
 *
 * @component
 */
const TimezoneDetails: React.FC<TimezoneDetailsProps> = ({
  show,
  time,
  info,
}) => {
  const { timezone, dayOfYear, dayOfWeek, weekNumber } = info;
  return (
    <>
      <Box
        height={
          show
            ? {
                mobile: "calc(40vh - 40px)",
                tablet: "calc(35vh - 90px)",
                desktop: "calc(40vh - 80px)",
              }
            : 0
        }
      ></Box>
      <Slide in={show} direction="up">
        <Stack
          data-testid="details"
          height={{ mobile: "40vh", tablet: "35vh", desktop: "40vh" }}
          width="100%"
          sx={{
            display: show ? "flex" : "none",
            position: "absolute",
            bottom: 0,
            left: 0,
            backdropFilter: "blur(20px)",
            padding: {
              desktop: "36px 26px 36px 80px",
              mobile: "48px 26px 16px 26px",
              tablet: "50px 166px 119px 64px",
            },
          }}
          bgcolor={
            time === "day" ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.75)"
          }
        >
          <Stack
            width="100%"
            height="100%"
            justifyContent="space-between"
            flexWrap="wrap"
            gap="2rem"
            direction={{ mobile: "column", tablet: "row" }}
          >
            <Stack
              direction={{ mobile: "row", tablet: "column" }}
              flex={1}
              minWidth="calc(50% - 2rem)"
              justifyContent={{ mobile: "space-between", tablet: "unset" }}
            >
              <Typography
                variant="h6"
                color={time === "day" ? "black" : "white"}
              >
                Current timezone
              </Typography>
              <Typography
                variant="h2"
                color={time === "day" ? "black" : "white"}
              >
                {timezone}
              </Typography>
            </Stack>
            <Stack
              direction={{ mobile: "row", tablet: "column" }}
              flex={1}
              minWidth="calc(50% - 2rem)"
              justifyContent={{ mobile: "space-between", tablet: "unset" }}
            >
              <Typography
                variant="h6"
                color={time === "day" ? "black" : "white"}
              >
                Day of the year
              </Typography>
              <Typography
                variant="h2"
                color={time === "day" ? "black" : "white"}
              >
                {dayOfYear}
              </Typography>
            </Stack>
            <Stack
              direction={{ mobile: "row", tablet: "column" }}
              flex={1}
              minWidth="calc(50% - 2rem)"
              justifyContent={{ mobile: "space-between", tablet: "unset" }}
            >
              <Typography
                variant="h6"
                color={time === "day" ? "black" : "white"}
              >
                Day of the week
              </Typography>
              <Typography
                variant="h2"
                color={time === "day" ? "black" : "white"}
              >
                {dayOfWeek}
              </Typography>
            </Stack>
            <Stack
              direction={{ mobile: "row", tablet: "column" }}
              flex={1}
              minWidth="calc(50% - 2rem)"
              justifyContent={{ mobile: "space-between", tablet: "unset" }}
            >
              <Typography
                variant="h6"
                color={time === "day" ? "black" : "white"}
              >
                Week number
              </Typography>
              <Typography
                variant="h2"
                color={time === "day" ? "black" : "white"}
              >
                {weekNumber}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Slide>
    </>
  );
};

TimezoneDetails.defaultProps = defaultProps;

export default TimezoneDetails;
