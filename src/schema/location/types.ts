export interface IpResponse {
  query: string;
}

export interface WorldTimeResponse {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_offset: number;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

export interface IPGeolocationResponse {
  data: {
    timezone: Timezone;
    ip: string;
    type: string;
    connection: Connection;
    location: Location;
  };
}

export interface Connection {
  asn: number;
  organization: string;
  isp: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  zip: string;
  continent: Continent;
  country: Country;
  city: City;
  region: Region;
}

export interface City {
  name: string;
  name_translated: string;
}

export interface Continent {
  code: string;
  name: string;
  name_translated: string;
}

export interface Country {
  alpha2: string;
  alpha3: string;
  calling_codes: string[];
  currencies: Currency[];
  emoji: string;
  ioc: string;
  languages: Language[];
  name: string;
  name_translated: string;
  timezones: string[];
  is_in_european_union: boolean;
}

export interface Currency {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
}

export interface Language {
  name: string;
  name_native: string;
}

export interface Region {
  name: string;
  name_translated: string;
}

export interface Timezone {
  id: string;
  current_time: string;
  code: string;
  is_daylight_saving: boolean;
  gmt_offset: number;
}
