import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type City = {
  __typename?: 'City';
  name: Scalars['String'];
  name_translated: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  name: Scalars['String'];
  name_translated: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  abbreviation: Scalars['String'];
  city: City;
  client_ip: Scalars['String'];
  country: Country;
  datetime: Scalars['String'];
  day_of_week: Scalars['Float'];
  day_of_year: Scalars['Float'];
  dst: Scalars['Boolean'];
  dst_offset: Scalars['Float'];
  raw_offset: Scalars['Float'];
  timezone: Scalars['String'];
  unixtime: Scalars['Float'];
  utc_datetime: Scalars['String'];
  utc_offset: Scalars['String'];
  week_number: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  location: Location;
  quoteRandom: Quote;
};

export type Quote = {
  __typename?: 'Quote';
  author: Scalars['String'];
  en: Scalars['String'];
  id: Scalars['ID'];
};

export type GetLocationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationQuery = { __typename?: 'Query', location: { __typename?: 'Location', datetime: string, day_of_year: number, timezone: string, week_number: number, day_of_week: number, city: { __typename?: 'City', name: string }, country: { __typename?: 'Country', name: string } } };

export type GetRandomQuoteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRandomQuoteQuery = { __typename?: 'Query', quoteRandom: { __typename?: 'Quote', en: string, author: string } };


export const GetLocationDocument = gql`
    query getLocation {
  location {
    datetime
    day_of_year
    timezone
    week_number
    day_of_week
    city {
      name
    }
    country {
      name
    }
  }
}
    `;
export const GetRandomQuoteDocument = gql`
    query getRandomQuote {
  quoteRandom {
    en
    author
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getLocation(variables?: GetLocationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLocationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLocationQuery>(GetLocationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLocation', 'query');
    },
    getRandomQuote(variables?: GetRandomQuoteQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRandomQuoteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRandomQuoteQuery>(GetRandomQuoteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRandomQuote', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;