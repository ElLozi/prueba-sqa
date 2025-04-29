import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/pagina.principal';
import { ProductPage } from '../pages/pagina.producto';
import { CartPage } from '../pages/pagina.carrito';

test('Prueba técnica automatización ', async ({ page }) => {
  test.setTimeout(70000);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await page.goto('https://sanangel.com.co/');

  // Producto 1
  await homePage.clickProduct('Baldado de amor');
  await productPage.setQuantity(2);
  await productPage.addToCartAndGoToCheckout();

  // Volver a home para segundo producto
  await page.goto('https://sanangel.com.co/');

  // Producto 2
  await homePage.clickProduct('Presente');
  await productPage.setQuantity(5);
  await productPage.addToCartAndGoToCheckout();

  // Validar cantidades
  await cartPage.validateProductQuantity('Baldado de amor', 2);
  await cartPage.validateProductQuantity('Presente', 5);
});
