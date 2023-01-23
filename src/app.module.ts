import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MerchantModule } from './merchant/merchant.module';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [
    CategoryModule,
    MerchantModule,
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
