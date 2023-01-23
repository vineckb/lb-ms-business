import { forwardRef, Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantResolver } from './merchant.resolver';
import { CategoryModule } from 'src/category/category.module';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [forwardRef(() => CategoryModule), PrismaModule],
  providers: [MerchantService, MerchantResolver],
  exports: [MerchantService],
})
export class MerchantModule {}
