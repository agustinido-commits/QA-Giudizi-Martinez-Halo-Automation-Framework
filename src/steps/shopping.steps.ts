import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CustomWorld } from "../support/world";
import { CheckoutPage } from "../pages/CheckoutPage";

Given("I am on the SauceDemo login page", async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When(
  "I log in with username {string} and password {string}",
  async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.login(username, password);
  }
);

Then("I should see the inventory page", async function (this: CustomWorld) {
  await this.loginPage.expectLoginSuccessful();
});

When("I add the backpack to the shopping cart", async function (this: CustomWorld) {
  this.inventoryPage = new InventoryPage(this.page);
  await this.inventoryPage.addBackpackToCart();
});

Then(
  "the cart should contain {int} item",
  async function (this: CustomWorld, count: number) {
    await this.inventoryPage.expectCartBadge(String(count));
  }
);

Then("the backpack should be visible in the cart", async function (this: CustomWorld) {
  await this.inventoryPage.expectBackpackVisible();
});
When("I proceed to checkout", async function () {
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.proceedToCheckout();
});

When("I enter checkout information", async function () {
  await this.checkoutPage.enterInformation();
});

When("I confirm the order", async function () {
  await this.checkoutPage.confirmOrder();
});

Then("I should see the order confirmation", async function () {
  await this.checkoutPage.expectOrderConfirmation();
});