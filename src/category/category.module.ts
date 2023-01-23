import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { MerchantModule } from 'src/merchant/merchant.module';

@Module({
  imports: [forwardRef(() => MerchantModule), PrismaModule],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService],
})
export class CategoryModule {}
