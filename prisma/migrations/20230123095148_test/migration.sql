-- DropForeignKey
ALTER TABLE "Merchant" DROP CONSTRAINT "Merchant_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "Merchant" ADD CONSTRAINT "Merchant_id_fkey" FOREIGN KEY ("id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
