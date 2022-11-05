import type { NextPage } from "next";
import React from "react";

import { Box, Stack } from "@mui/material";
import { dehydrate, useQuery } from "react-query";

import Greeting from "components/Greeting";
import Location from "components/Location";
import Quote from "components/Quote";
import ShowButton from "components/ShowButton";
import Time from "components/Time";
import TimezoneDetails from "components/TimezoneDetails";
import { TimezoneInfo } from "components/TimezoneDetails/TimezoneDetails";
import {
  getLocation,
  getRandomQuote,
  queryClient,
  ReactQueryKeys,
} from "utils/api";
import { getDate, getHoursFormatted, getIsDay, getTimezone } from "utils/date";
import { desktopImages, mobileImages, tabletImages } from "utils/images";
import { getLocationInfo } from "utils/location";
import Backlinks from "components/Backlinks";

export type TTime = "day" | "night";

const Home: NextPage = () => {
  const [time, setTime] = React.useState<TTime>("night");

  const [showMore, setShowMore] = React.useState(false);

  const { data: location } = useQuery([ReactQueryKeys.getLocation], () =>
    getLocation()
  );
  const { data: quoteRandom } = useQuery([ReactQueryKeys.getRandomQuote], () =>
    getRandomQuote()
  );

  const quote = quoteRandom?.quoteRandom?.en;
  const author = quoteRandom?.quoteRandom?.author;
  const date = location?.location?.datetime;

  const currDate = getDate(date);

  const hours = getHoursFormatted(currDate);

  const isDay = getIsDay(currDate);

  const timezone = getTimezone(currDate);

  const { country, city, timezoneLong, dayOfYear, dayOfWeek, weekNumber } =
    getLocationInfo(location);

  const timezoneInfo: TimezoneInfo = {
    timezone: timezoneLong,
    dayOfWeek,
    dayOfYear,
    weekNumber,
  };

  const onQuoteRefresh = async () => {
    await queryClient.invalidateQueries([ReactQueryKeys.getRandomQuote]);
  };

  React.useEffect(() => {
    setTime(isDay ? "day" : "night");
  }, [isDay]);

  return (
    <Box
      minHeight="100vh"
      width="100%"
      sx={{
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: ({ functions: { linearGradientImage } }) => ({
          mobile: linearGradientImage({
            primary: "rgba(0, 0, 0, 0.4)",
            url: mobileImages[time].src,
          }),
          tablet: linearGradientImage({
            primary: "rgba(0, 0, 0, 0.4)",
            url: tabletImages[time].src,
          }),
          desktop: linearGradientImage({
            primary: "rgba(0, 0, 0, 0.4)",
            url: desktopImages[time].src,
          }),
        }),
      }}
    >
      <Stack
        minHeight="inherit"
        padding={{ mobile: "32px 25px", tablet: "80px 64px" }}
        paddingBottom="40px"
      >
        <Quote
          onClick={onQuoteRefresh}
          show={showMore}
          author={author}
          quote={quote}
        />

        <Stack
          sx={{ marginTop: "auto !important", marginBottom: "3rem !important" }}
        >
          <Greeting time={time} />
          <Time hours={hours} timezone={timezone} />
          <Location
            city={city}
            country={country}
            show={showMore}
            onShowClick={(_, show) => setShowMore(show)}
          />
        </Stack>

        <TimezoneDetails show={showMore} time={time} info={timezoneInfo} />
      </Stack>
      <Backlinks
        links={[
          "https://leonardo.baxhen.com",
          "https://product-preview.baxhen.com",
        ]}
      />
    </Box>
  );
};

export const getStaticProps = async () => {
  await queryClient.prefetchQuery(ReactQueryKeys.getLocation, () =>
    getLocation()
  );
  await queryClient.prefetchQuery(ReactQueryKeys.getRandomQuote, () =>
    getRandomQuote()
  );

  const dehydratedState = dehydrate(queryClient);

  return { props: { dehydratedState } };
};

export default Home;
