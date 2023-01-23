import { Query, Args, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Category } from 'src/category/category.model';
import { CategoryService } from 'src/category/category.service';
import { Merchant } from './merchant.model';
import { MerchantService } from './merchant.service';

@Resolver(() => Merchant)
export class MerchantResolver {
  constructor(
    private merchantService: MerchantService,
    private categoryService: CategoryService,
  ) {}

  @Query(() => [Merchant])
  async merchants(@Args('category', { nullable: true }) category?: string) {
    const params = {
      where: {
        ...(category ? { categoryId: category } : {}),
      },
    };
    return this.merchantService.list(params);
  }

  @Query(() => Merchant)
  async merchant(@Args('id') id: string) {
    return this.merchantService.findOneById(id);
  }

  @ResolveField('category', () => Category)
  async category(@Parent() merchant: Merchant) {
    return this.categoryService.findOneById(merchant.categoryId);
  }
}
