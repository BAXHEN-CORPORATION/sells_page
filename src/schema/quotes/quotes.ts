import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Quote {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  author!: string;

  @Field(() => String)
  en!: string;
}
