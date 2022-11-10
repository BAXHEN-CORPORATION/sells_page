import type { NextPage } from "next";
import Head from "next/head";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ogg_image from "assets/images/SEO/ogg_image.png";
import Video from "components/Video";
import YouTube from "react-youtube";

export type TTime = "day" | "night";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Sells Page</title>
      <meta
        name="description"
        content="Clock App design made with MUI 5, NextJs and GraphQL. This is a challenge made by Leonardo Rebouças."
        key="desc"
      />
      <meta property="og:title" content="Clock App" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://clock-app.baxhen.com/" />
      <meta property="og:image" content={ogg_image.src} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>

    <Container maxWidth="tablet">
      <Stack pt="50px" alignItems="center">
        <Typography variant="h1">
          O Portifólio Que Você Precisa.{" "}
          <Typography variant="h1" component="span" color="secondary">
            Ponto.
          </Typography>
        </Typography>

        <Box pl="100px" pr="100px" mt="35px">
          <Typography variant="h2" textTransform="capitalize">
            Seja você um iniciante procurando um lugar para começar ou um
            veterano experiente procurando divulgar as suas habilidades, Esse
            Template tem tudo o que você precisa para decolar.
          </Typography>
        </Box>

        <Box mt="3rem">
          <Video videoId="aHTNVeOHnu0" />
        </Box>
      </Stack>
    </Container>
  </>
);

export default Home;
