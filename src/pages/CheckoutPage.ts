
import { expect, type Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async proceedToCheckout(): Promise<void> {
    await this.page
      .getByRole("button", { name: "Checkout" })
      .click();

    await expect(this.page).toHaveURL(/checkout-step-one\.html/);
  }

  async enterInformation(): Promise<void> {
    await this.page.locator('[data-test="firstName"]').fill("Agustin");
    await this.page.locator('[data-test="lastName"]').fill("Giudizi");
    await this.page.locator('[data-test="postalCode"]').fill("7600");

    await this.page
      .getByRole("button", { name: "Continue" })
      .click();

    await expect(this.page).toHaveURL(/checkout-step-two\.html/);
  }

  async confirmOrder(): Promise<void> {
    await expect(
      this.page.getByText("Sauce Labs Backpack", { exact: true })
    ).toBeVisible();

    await this.page.getByRole("button", { name: "Finish" }).click();
  }

  async expectOrderConfirmation(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-complete\.html/);

    await expect(
      this.page.getByText("Thank you for your order!", { exact: true })
    ).toBeVisible();
  }
}
