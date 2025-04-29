import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickProduct(productName: string) {
    const product = this.page.locator('.woocommerce-loop-product__title', { hasText: productName }).first();
    await product.click();
  }
}
