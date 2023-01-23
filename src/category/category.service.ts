import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async list(): Promise<Category[]> {
    return this.prisma.category.findMany({});
  }

  async findOneById(id: string): Promise<Category> {
    return await this.prisma.category.findUniqueOrThrow({
      where: { id },
    });
  }
}
