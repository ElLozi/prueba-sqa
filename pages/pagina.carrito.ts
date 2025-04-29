import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validateProductQuantity(productName: string, expectedQuantity: number) {
    const productRow = this.page.locator(`.cart_item:has-text("${productName}")`);
    const quantityInput = productRow.locator('input.qty');
    const value = await quantityInput.inputValue();
    expect(Number(value)).toBe(expectedQuantity);
  }
}
