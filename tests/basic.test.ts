import { test, expect, Page } from "@playwright/test";
import { BLOCKTAP_API_ENDPOINT } from "../src/configs/constants";

const Button = "button[type=submit]";
const Input = "input[name=code]";
const CURRENCY_SYBMOLS = ["BTC", "LTC", "ETH"];

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Currencies", () => {
  test("should allow me to add currencies", async ({ page }) => {
    const items = page.locator("[data-testid=currencyItem]");

    await createDefaultCurrencies(page);

    expect(await items.count()).toEqual(CURRENCY_SYBMOLS.length);
  });

  test("should remove added currencies", async ({ page }) => {
    await createDefaultCurrencies(page);

    const items = page.locator("[data-testid=currencyItem]");

    expect(await items.count()).toEqual(CURRENCY_SYBMOLS.length);

    const closeIcon = page.locator("[data-testid=removeIcon]");

    for (let i = 1; i < CURRENCY_SYBMOLS.length; i++) {
      await closeIcon.last().click();

      expect(await items.count()).toEqual(CURRENCY_SYBMOLS.length - i);
    }
  });
});

async function createDefaultCurrencies(page: Page) {
  for (const symbol of CURRENCY_SYBMOLS) {
    await Promise.all([
      // Waits for the next response matching some conditions
      page.waitForResponse(BLOCKTAP_API_ENDPOINT),
      // Triggers the response
      page.locator(Input).fill(symbol),
    ]);

    // Add currency.
    await page.locator(Button).click();
  }
}
