import { Before, After } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "./world";

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: true });
  this.page = await this.browser.newPage();
});

After(async function (this: CustomWorld) {
  if (this.browser) {
    await this.browser.close();
  }
});