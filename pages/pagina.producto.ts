import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async setQuantity(quantity: number) {
    const quantityInput = this.page.locator('input.qty');
    await quantityInput.fill('');
    await quantityInput.type(quantity.toString());
  }

  async addToCartAndGoToCheckout() {
    await this.page.getByRole('button', { name: 'Añadir al carrito' }).click();

  }
}
