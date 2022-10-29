import { ApolloServer } from "apollo-server-lambda";
import "reflect-metadata";

import { LocationResolver } from "schema/location";
import { QuoteResolver } from "schema/quotes";

import { buildSchema } from "type-graphql";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async function (event: any, context: any) {
  console.log({ event, context });
};

export default handler;
