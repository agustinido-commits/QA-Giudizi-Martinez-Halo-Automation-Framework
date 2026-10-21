
import { expect, type Page } from "@playwright/test";

export class LoginPage {
  constructor(private readonly page: Page) {}

  async navigate(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  async expectLoginSuccessful(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(
      this.page.locator('[data-test="inventory-container"]')
    ).toBeVisible();
  }
}
