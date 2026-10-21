
import { expect, type Page } from "@playwright/test";

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async addBackpackToCart(): Promise<void> {
    await this.page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();
  }

  async expectCartBadge(count: string): Promise<void> {
    await expect(
      this.page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText(count);
  }

  async expectBackpackVisible(): Promise<void> {
    await this.page.locator(".shopping_cart_link").click();

    await expect(
      this.page.getByText("Sauce Labs Backpack", { exact: true })
    ).toBeVisible();
  }
}
