import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateMovieDto {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => Int)
  year: number;

  @Field()
  description: string;
}
