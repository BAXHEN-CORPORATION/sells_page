import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useQuery, UseQueryOptions } from "react-query";
import { gqlClient } from "utils/api";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  client = gqlClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type City = {
  __typename?: "City";
  name: Scalars["String"];
  name_translated: Scalars["String"];
};

export type Country = {
  __typename?: "Country";
  name: Scalars["String"];
  name_translated: Scalars["String"];
};

export type Location = {
  __typename?: "Location";
  abbreviation: Scalars["String"];
  city: City;
  client_ip: Scalars["String"];
  country: Country;
  datetime: Scalars["String"];
  day_of_week: Scalars["Float"];
  day_of_year: Scalars["Float"];
  dst: Scalars["Boolean"];
  dst_offset: Scalars["Float"];
  raw_offset: Scalars["Float"];
  timezone: Scalars["String"];
  unixtime: Scalars["Float"];
  utc_datetime: Scalars["String"];
  utc_offset: Scalars["String"];
  week_number: Scalars["Float"];
};

export type Query = {
  __typename?: "Query";
  location: Location;
  quoteRandom: Quote;
};

export type Quote = {
  __typename?: "Quote";
  author: Scalars["String"];
  en: Scalars["String"];
  id: Scalars["ID"];
};

export type GetLocationQueryVariables = Exact<{ [key: string]: never }>;

export type GetLocationQuery = {
  __typename?: "Query";
  location: {
    __typename?: "Location";
    datetime: string;
    day_of_year: number;
    timezone: string;
    week_number: number;
    day_of_week: number;
    city: { __typename?: "City"; name: string; name_translated: string };
    country: { __typename?: "Country"; name: string; name_translated: string };
  };
};

export type GetRandomQuoteQueryVariables = Exact<{ [key: string]: never }>;

export type GetRandomQuoteQuery = {
  __typename?: "Query";
  quoteRandom: { __typename?: "Quote"; en: string; author: string };
};

export const GetLocationDocument = `
    query getLocation {
  location {
    datetime
    day_of_year
    timezone
    week_number
    day_of_week
    city {
      name
      name_translated
    }
    country {
      name
      name_translated
    }
  }
}
    `;
export const useGetLocationQuery = <TData = GetLocationQuery, TError = unknown>(
  client?: GraphQLClient,
  variables?: GetLocationQueryVariables,
  options?: UseQueryOptions<GetLocationQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetLocationQuery, TError, TData>(
    variables === undefined ? ["getLocation"] : ["getLocation", variables],
    fetcher<GetLocationQuery, GetLocationQueryVariables>(
      client,
      GetLocationDocument,
      variables,
      headers
    ),
    options
  );

useGetLocationQuery.getKey = (variables?: GetLocationQueryVariables) =>
  variables === undefined ? ["getLocation"] : ["getLocation", variables];
export const GetRandomQuoteDocument = `
    query getRandomQuote {
  quoteRandom {
    en
    author
  }
}
    `;
export const useGetRandomQuoteQuery = <
  TData = GetRandomQuoteQuery,
  TError = unknown
>(
  client?: GraphQLClient,
  variables?: GetRandomQuoteQueryVariables,
  options?: UseQueryOptions<GetRandomQuoteQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetRandomQuoteQuery, TError, TData>(
    variables === undefined
      ? ["getRandomQuote"]
      : ["getRandomQuote", variables],
    fetcher<GetRandomQuoteQuery, GetRandomQuoteQueryVariables>(
      client,
      GetRandomQuoteDocument,
      variables,
      headers
    ),
    options
  );

useGetRandomQuoteQuery.getKey = (variables?: GetRandomQuoteQueryVariables) =>
  variables === undefined ? ["getRandomQuote"] : ["getRandomQuote", variables];
