import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Merchant } from './merchant.model';

@Injectable()
export class MerchantService {
  constructor(private prisma: PrismaService) {}

  async list(params): Promise<Merchant[]> {
    console.log(params);
    const response = await this.prisma.merchant.findMany({});
    return response;
  }

  async findOneById(id: string): Promise<Merchant> {
    return await this.prisma.merchant.findUniqueOrThrow({
      where: { id },
    });
  }
}
