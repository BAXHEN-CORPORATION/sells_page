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
  const schema = await buildSchema({
    resolvers: [LocationResolver, QuoteResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  return new Promise((yay, nay) => {
    const cb = (err: any, args: any) => (err ? nay(err) : yay(args));
    server.createHandler()(event, context, cb);
  });
};

export default handler;
