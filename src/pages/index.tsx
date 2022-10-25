import type { NextPage } from "next";
import React from "react";

import { Box, Fade, IconButton, Slide, Stack, Typography } from "@mui/material";
import { useGetLocationQuery, useGetRandomQuoteQuery } from "generated/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons/faArrowsRotate";
import { dehydrate } from "react-query";

import mobileDay from "assets/images/mobile/bg-daytime.jpg";
import mobileNight from "assets/images/mobile/bg-nighttime.jpg";

import ShowButton from "components/ShowButton";
import {
  getLocation,
  getRandomQuote,
  gqlClient,
  queryClient,
  ReactQueryKeys,
} from "utils/api";
import { DarkMode, LightMode } from "@mui/icons-material";

const mobileImages = {
  day: mobileDay,
  night: mobileNight,
};

const greeting = {
  day: { greeting: "Good Morning", Icon: <LightMode htmlColor="white" /> },
  afternoon: {
    greeting: "Good afternoon",
    Icon: <LightMode htmlColor="white" />,
  },
  night: { greeting: "Good evening", Icon: <DarkMode htmlColor="white" /> },
};

const Home: NextPage = () => {
  const [time, setTime] = React.useState<"day" | "night">("day");

  console.log({ time });

  const [showMore, setShowMore] = React.useState(false);

  const { data: location } = useGetLocationQuery(gqlClient);
  const { data: quote } = useGetRandomQuoteQuery(gqlClient);

  const currDate = !location?.location.datetime
    ? new Date()
    : new Date(location?.location.datetime as string);

  const hours = `${currDate.getHours()}:${currDate
    .getMinutes()
    .toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    })}`;

  const isDay = currDate.getHours() < 18 && currDate.getHours() > 5;

  const timezone = currDate
    .toLocaleDateString(undefined, {
      day: "2-digit",
      timeZoneName: "short",
    })
    .slice(2);

  const country = location?.location.country.name || "max";
  const city = location?.location.city.name || "requests limit exceeded";

  const timezoneLong = location?.location?.timezone?.replace("_", " ") || "max";
  const dayNumber = location?.location.day_of_year || "requests";
  const dayOfWeek = location?.location.day_of_week || "limit";
  const weekNumber = location?.location.week_number || "exceeded";

  React.useEffect(() => {
    setTime((old) => (isDay && old !== "day" ? "day" : "night"));
  }, [isDay]);

  return (
    <Box
      minHeight="100vh"
      width="100%"
      sx={{
        position: "relative",
        // backgroundImage: { mobile: `url(${mobileImages[time].src})` },
        backgroundSize: "cover",
        background: {
          mobile: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mobileImages[time].src})`,
        },
      }}
    >
      <Stack minHeight="inherit" padding="32px 25px" paddingBottom="40px">
        <Fade in={!showMore}>
          <Stack spacing={2} display={showMore ? "none" : "flex"}>
            <Stack direction="row">
              <Typography variant="body" sx={{ flex: 1 }}>
                {" "}
                "{quote?.quoteRandom.en}"
              </Typography>
              <IconButton
                sx={{
                  "& > *": { color: (theme) => theme.palette.common.iconGray },
                  fontSize: "1rem",
                  marginBottom: "auto",
                }}
                onClick={async () => {
                  await queryClient.invalidateQueries([
                    ReactQueryKeys.getRandomQuote,
                  ]);
                }}
              >
                <FontAwesomeIcon icon={faArrowsRotate} />
              </IconButton>
            </Stack>
            <Typography variant="h5"> {quote?.quoteRandom.author}</Typography>
          </Stack>
        </Fade>

        <Stack
          sx={{ marginTop: "auto !important", marginBottom: "3rem !important" }}
        >
          <Stack spacing={2} direction="row" alignItems="center" mb={2}>
            {greeting[time].Icon}
            <Typography variant="h4">{greeting[time].greeting}</Typography>
          </Stack>
          <Stack spacing={2} direction="row" mb={2}>
            <Typography variant="h1">{hours}</Typography>
            <Typography variant="h4" sx={{ alignSelf: "flex-end" }}>
              {timezone}
            </Typography>
          </Stack>
          <Stack spacing={2} direction="row">
            <Typography variant="h3">
              in {country}, {city}
            </Typography>
          </Stack>
        </Stack>
        <ShowButton show={showMore} onClick={(_, show) => setShowMore(show)} />

        <Box height={showMore ? "256px" : 0}></Box>

        <Slide in={showMore} direction="up">
          <Stack
            height="256px"
            width="100%"
            sx={{
              display: showMore ? "flex" : "none",
              position: "absolute",
              bottom: 0,
              left: 0,
              backdropFilter: "blur(20px)",
              padding: "48px 26px 16px 26px",
            }}
            bgcolor="rgba(255, 255, 255, 0.75)"
          >
            <Stack width="100%" height="100%" justifyContent="space-between">
              <Stack direction="row" flex={1} justifyContent="space-between">
                <Typography variant="h6" color="black">
                  Current timezone
                </Typography>
                <Typography variant="h2" color="black">
                  {timezoneLong}
                </Typography>
              </Stack>
              <Stack direction="row" flex={1} justifyContent="space-between">
                <Typography variant="h6" color="black">
                  Day of the year
                </Typography>
                <Typography variant="h2" color="black">
                  {dayNumber}
                </Typography>
              </Stack>
              <Stack direction="row" flex={1} justifyContent="space-between">
                <Typography variant="h6" color="black">
                  Day of the week
                </Typography>
                <Typography variant="h2" color="black">
                  {dayOfWeek}
                </Typography>
              </Stack>
              <Stack direction="row" flex={1} justifyContent="space-between">
                <Typography variant="h6" color="black">
                  Week number
                </Typography>
                <Typography variant="h2" color="black">
                  {weekNumber}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Slide>
      </Stack>
    </Box>
  );
};

export const getServerSideProps = async () => {
  await queryClient.prefetchQuery(ReactQueryKeys.getLocation, () =>
    getLocation()
  );
  await queryClient.prefetchQuery(ReactQueryKeys.getRandomQuote, () =>
    getRandomQuote()
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default Home;
