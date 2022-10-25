import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class City {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  name_translated!: string;
}
@ObjectType()
export class Country {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  name_translated!: string;
}

@ObjectType()
export class Location {
  @Field(() => City)
  city!: City;

  @Field(() => Country)
  country!: Country;

  @Field(() => String)
  abbreviation!: string;

  @Field(() => String)
  client_ip!: string;

  @Field(() => String)
  datetime!: string;

  @Field(() => String)
  utc_offset!: string;

  @Field(() => String)
  timezone!: string;

  @Field(() => String)
  utc_datetime!: string;

  @Field(() => Number)
  day_of_week!: number;

  @Field(() => Number)
  day_of_year!: number;

  @Field(() => Number)
  dst_offset!: number;

  @Field(() => Number)
  raw_offset!: number;

  @Field(() => Number)
  week_number!: number;

  @Field(() => Number)
  unixtime!: number;

  @Field(() => Boolean)
  dst!: boolean;
}
