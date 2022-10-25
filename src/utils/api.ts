import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

import { getSdk } from "generated";

export const gqlClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`
);

const methods = getSdk(gqlClient);

export type MethodsKeys = keyof typeof methods;

export const ReactQueryKeys: { [P in MethodsKeys]: P } = {
  getLocation: "getLocation",
  getRandomQuote: "getRandomQuote",
};

export const { getLocation, getRandomQuote } = methods;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
