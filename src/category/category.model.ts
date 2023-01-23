import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  name: string;
}
