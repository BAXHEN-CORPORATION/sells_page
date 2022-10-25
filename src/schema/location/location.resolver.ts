import axios from "axios";
import { Query, Resolver } from "type-graphql";
import { Location } from "./location";
import { IPGeolocationResponse, IpResponse, WorldTimeResponse } from "./types";

@Resolver(Location)
export class LocationResolver {
  @Query(() => Location)
  async location(): Promise<Location> {
    const ipResponse = await axios.get<IpResponse>("http://ip-api.com/json");

    const ip = ipResponse.data.query;

    const worldTimeResponse = await axios.get<WorldTimeResponse>(
      `http://worldtimeapi.org/api/ip/${ip}`
    );

    const ipGeolocationResponse = await axios.get<IPGeolocationResponse>(
      `https://api.ipbase.com/v2/info?apikey=${process.env.API_KEY_IP_LOCATION}&ip=${ip}`
    );

    const {
      location: { city, country },
    } = ipGeolocationResponse.data.data;

    return { ...worldTimeResponse.data, city, country };
  }
}
