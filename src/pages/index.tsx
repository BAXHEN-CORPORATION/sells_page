import type { NextPage } from "next";
import React from "react";

import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons/faArrowsRotate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Fade, IconButton, Slide, Stack, Typography } from "@mui/material";
import { dehydrate, useQuery } from "react-query";

import mobileDay from "assets/images/mobile/bg-daytime.jpg";
import mobileNight from "assets/images/mobile/bg-nighttime.jpg";
import tabletDay from "assets/images/tablet/bg-daytime.jpg";
import tabletNight from "assets/images/tablet/bg-nighttime.jpg";
import desktopDay from "assets/images/desktop/bg-daytime.jpg";
import desktopNight from "assets/images/desktop/bg-nighttime.jpg";

import { DarkMode, LightMode } from "@mui/icons-material";
import ShowButton from "components/ShowButton";
import {
  getLocation,
  getRandomQuote,
  queryClient,
  ReactQueryKeys,
} from "utils/api";

const mobileImages = {
  day: mobileDay,
  night: mobileNight,
};
const tabletImages = {
  day: tabletDay,
  night: tabletNight,
};
const desktopImages = {
  day: desktopDay,
  night: desktopNight,
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
  const [time, setTime] = React.useState<"day" | "night">("night");

  const [showMore, setShowMore] = React.useState(false);

  return <Box>hi</Box>;

  // const { data: location } = useQuery([ReactQueryKeys.getLocation], () =>
  //   getLocation()
  // );
  // const { data: quote } = useQuery([ReactQueryKeys.getRandomQuote], () =>
  //   getRandomQuote()
  // );

  // const currDate = !location?.location?.datetime
  //   ? new Date()
  //   : new Date(location?.location?.datetime as string);

  // const hours = `${currDate.getHours()}:${currDate
  //   .getMinutes()
  //   .toLocaleString(undefined, {
  //     minimumIntegerDigits: 2,
  //   })}`;

  // const isDay = currDate.getHours() < 18 && currDate.getHours() > 5;

  // const timezone = currDate
  //   .toLocaleDateString(undefined, {
  //     day: "2-digit",
  //     timeZoneName: "short",
  //   })
  //   .slice(2);

  // const country = location?.location.country.name || "max";
  // const city = location?.location.city.name || "requests limit exceeded";

  // const timezoneLong = location?.location?.timezone?.replace("_", " ") || "max";
  // const dayNumber = location?.location?.day_of_year || "requests";
  // const dayOfWeek = location?.location?.day_of_week || "limit";
  // const weekNumber = location?.location?.week_number || "exceeded";

  // React.useEffect(() => {
  //   setTime(isDay ? "day" : "night");
  // }, [isDay]);

  // return (
  //   <Box
  //     minHeight="100vh"
  //     width="100%"
  //     sx={{
  //       position: "relative",
  //       backgroundSize: "cover",
  //       backgroundRepeat: "no-repeat",
  //       backgroundImage: {
  //         mobile: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${mobileImages[time].src})`,
  //         tablet: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${tabletImages[time].src})`,
  //         desktop: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${desktopImages[time].src})`,
  //       },
  //     }}
  //   >
  //     <Stack
  //       minHeight="inherit"
  //       padding={{ mobile: "32px 25px", tablet: "80px 64px" }}
  //       paddingBottom="40px"
  //     >
  //       <Fade in={!showMore}>
  //         <Stack spacing={2} display={showMore ? "none" : "flex"}>
  //           <Stack direction="row">
  //             <Typography variant="body" sx={{ flex: 1 }}>
  //               "{quote?.quoteRandom.en}"
  //             </Typography>
  //             <IconButton
  //               sx={{
  //                 "& > *": { color: (theme) => theme.palette.common.iconGray },
  //                 fontSize: "1rem",
  //                 marginBottom: "auto",
  //               }}
  //               onClick={async () => {
  //                 await queryClient.invalidateQueries([
  //                   ReactQueryKeys.getRandomQuote,
  //                 ]);
  //               }}
  //             >
  //               <FontAwesomeIcon icon={faArrowsRotate} />
  //             </IconButton>
  //           </Stack>
  //           <Typography variant="h5"> {quote?.quoteRandom?.author}</Typography>
  //         </Stack>
  //       </Fade>

  //       <Stack
  //         sx={{ marginTop: "auto !important", marginBottom: "3rem !important" }}
  //       >
  //         <Stack spacing={2} direction="row" alignItems="center" mb={2}>
  //           {greeting[time]?.Icon}
  //           <Typography
  //             variant="h4"
  //             fontSize={{ mobile: "15px", tablet: "18px" }}
  //           >
  //             {greeting[time].greeting}, it's currently
  //           </Typography>
  //         </Stack>
  //         <Stack spacing={2} direction="row" mb={2}>
  //           <Typography variant="h1">{hours}</Typography>
  //           <Typography
  //             variant="h4"
  //             sx={{ alignSelf: "flex-end", fontWeight: 300 }}
  //           >
  //             {timezone}
  //           </Typography>
  //         </Stack>
  //         <Stack
  //           direction={{ mobile: "column", tablet: "column", desktop: "row" }}
  //           mt="28px"
  //         >
  //           <Typography
  //             variant="h3"
  //             sx={{
  //               marginRight: { mobile: 0, desktop: "auto" },
  //               marginBottom: { mobile: "40px", desktop: 0 },
  //             }}
  //           >
  //             in {country}, {city}
  //           </Typography>
  //           <ShowButton
  //             show={showMore}
  //             onClick={(_, show) => setShowMore(show)}
  //           />
  //         </Stack>
  //       </Stack>

  //       <Box
  //         height={
  //           showMore
  //             ? {
  //                 mobile: "calc(40vh - 40px)",
  //                 tablet: "calc(40vh - 90px)",
  //                 desktop: "calc(40vh - 80px)",
  //               }
  //             : 0
  //         }
  //       ></Box>

  //       <Slide in={showMore} direction="up">
  //         <Stack
  //           height={{ mobile: "40vh", tablet: "40vh", desktop: "40vh" }}
  //           width="100%"
  //           sx={{
  //             display: showMore ? "flex" : "none",
  //             position: "absolute",
  //             bottom: 0,
  //             left: 0,
  //             backdropFilter: "blur(20px)",
  //             padding: {
  //               mobile: "48px 26px 16px 26px",
  //               tablet: "119px 166px 119px 64px",
  //             },
  //           }}
  //           bgcolor={
  //             time === "day"
  //               ? "rgba(255, 255, 255, 0.75)"
  //               : "rgba(0, 0, 0, 0.75)"
  //           }
  //         >
  //           <Stack
  //             width="100%"
  //             height="100%"
  //             justifyContent="space-between"
  //             flexWrap="wrap"
  //             direction={{ mobile: "column", tablet: "row" }}
  //           >
  //             <Stack
  //               direction={{ mobile: "row", tablet: "column" }}
  //               flex={1}
  //               minWidth="50%"
  //               justifyContent={{ mobile: "space-between", tablet: "unset" }}
  //             >
  //               <Typography
  //                 variant="h6"
  //                 color={time === "day" ? "black" : "white"}
  //               >
  //                 Current timezone
  //               </Typography>
  //               <Typography
  //                 variant="h2"
  //                 color={time === "day" ? "black" : "white"}
  //               >
  //                 {timezoneLong}
  //               </Typography>
  //             </Stack>
  //             <Stack
  //               direction={{ mobile: "row", tablet: "column" }}
  //               flex={1}
  //               minWidth="50%"
  //               justifyContent={{ mobile: "space-between", tablet: "unset" }}
  //             >
  //               <Typography
  //                 variant="h6"
  //                 color={time === "day" ? "black" : "white"}
  //               >
  //                 Day of the year
  //               </Typography>
  //               <Typography
  //                 variant="h2"
  //                 color={time === "day" ? "black" : "white"}
  //               >
  //                 {dayNumber}
  //               </Typography>
  //             </Stack>
  //             <Stack
  //               direction={{ mobile: "row", tablet: "column" }}
  //               flex={1}
  //               minWidth="50%"
  //               justifyContent={{ mobile: "space-between", tablet: "unset" }}
  //             >
  //               <Typography
  //                 variant="h6"
  //                 color={time === "day" ? "black" : "white"}
  //               >
  //                 Day of the week
  //               </Typography>
  //               <Typography
  //                 variant="h2"
  //                 color={time === "day" ? "black" : "white"}
  //               >
  //                 {dayOfWeek}
  //               </Typography>
  //             </Stack>
  //             <Stack
  //               direction={{ mobile: "row", tablet: "column" }}
  //               flex={1}
  //               minWidth="50%"
  //               justifyContent={{ mobile: "space-between", tablet: "unset" }}
  //             >
  //               <Typography
  //                 variant="h6"
  //                 color={time === "day" ? "black" : "white"}
  //               >
  //                 Week number
  //               </Typography>
  //               <Typography
  //                 variant="h2"
  //                 color={time === "day" ? "black" : "white"}
  //               >
  //                 {weekNumber}
  //               </Typography>
  //             </Stack>
  //           </Stack>
  //         </Stack>
  //       </Slide>
  //     </Stack>
  //   </Box>
  // );
};

// export const getServerSideProps = async () => {
//   // await queryClient.prefetchQuery(ReactQueryKeys.getLocation, () =>
//   //   getLocation()
//   // );
//   // await queryClient.prefetchQuery(ReactQueryKeys.getRandomQuote, () =>
//   //   getRandomQuote()
//   // );
//   return { props: { dehydratedState: dehydrate(queryClient) } };
// };

export default Home;
