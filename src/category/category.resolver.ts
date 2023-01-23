import { Query, Args, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { Merchant } from 'src/merchant/merchant.model';
import { MerchantService } from 'src/merchant/merchant.service';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private merchantService: MerchantService,
    private categoryService: CategoryService,
  ) {}

  @Query(() => [Category])
  async categories() {
    return this.categoryService.list();
  }

  @Query(() => Category)
  async category(@Args('id') id: string) {
    return this.categoryService.findOneById(id);
  }

  @ResolveField('merchants', () => [Merchant])
  async merchants(@Parent() category: Category) {
    return this.merchantService.list({ categoryId: category.id });
  }
}
