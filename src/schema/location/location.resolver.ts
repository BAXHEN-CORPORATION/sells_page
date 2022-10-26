import axios from "axios";
import { Query, Resolver } from "type-graphql";
import { Location } from "./location";
import { IPGeolocationResponse, IpResponse, WorldTimeResponse } from "./types";

@Resolver(Location)
export class LocationResolver {
  @Query(() => Location)
  async location(): Promise<Location> {
    try {
      const ipResponse = await axios.get<IpResponse>("http://ip-api.com/json");

      const ip = ipResponse.data.query;

      const worldTimeResponse = await axios.get<WorldTimeResponse>(
        `http://worldtimeapi.org/api/ip/${ip}`
      );

      const ipGeolocationResponse = await axios
        .get<IPGeolocationResponse>(
          `https://api.ipbase.com/v2/info?apikey=${process.env.API_KEY_IP_LOCATION}&ip=${ip}`
        )
        .catch(() => {});

      const city = ipGeolocationResponse?.data?.data?.location?.city || {
        name: "",
        name_translated: "",
      };
      const country = ipGeolocationResponse?.data?.data?.location?.country || {
        name: "",
        name_translated: "",
      };

      const result = { ...worldTimeResponse.data, city, country };

      return result;
    } catch (error) {
      return {
        datetime: "",
        day_of_week: 0,
        day_of_year: 0,
        dst: false,
        city: { name: "", name_translated: "" },
        country: { name: "", name_translated: "" },
        dst_offset: 0,
        utc_datetime: "",
        client_ip: "",
        abbreviation: "",
        unixtime: 0,
        utc_offset: "",
        week_number: 0,
        raw_offset: 0,
        timezone: "",
      };
    }
  }
}
