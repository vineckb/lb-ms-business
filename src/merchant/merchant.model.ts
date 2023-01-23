import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Merchant {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  whatsapp: string;

  @Field({ nullable: false })
  categoryId: string;
}
