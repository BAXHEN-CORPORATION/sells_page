import axios from "axios";
import { Query, Resolver } from "type-graphql";
import { Quote } from "./quotes";
import { RandomQuoteResponse } from "./types";

@Resolver(Quote)
export class QuoteResolver {
  @Query(() => Quote)
  async quoteRandom(): Promise<Quote> {
    const response = await axios.get<RandomQuoteResponse>(
      "https://programming-quotes-api.herokuapp.com/Quotes/random"
    );

    return response.data;
  }
}
