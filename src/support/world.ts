import {
  World,
  setWorldConstructor,
  type IWorldOptions
} from "@cucumber/cucumber";

import type { Browser, Page } from "@playwright/test";
import type { LoginPage } from "../pages/LoginPage";
import type { InventoryPage } from "../pages/InventoryPage";
import type { CheckoutPage } from "../pages/CheckoutPage";

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  loginPage!: LoginPage;
  inventoryPage!: InventoryPage;
  checkoutPage!: CheckoutPage;
  
  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);