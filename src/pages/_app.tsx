import React from "react";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Hydrate, QueryClientProvider } from "react-query";

import createEmotionCache from "utils/create-emotion-cache";
import theme from "styles/theme";
import { queryClient } from "utils/api";

import "@fontsource/inter";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: {
    dehydratedState: any;
  };
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  console.log({ pageProps });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
