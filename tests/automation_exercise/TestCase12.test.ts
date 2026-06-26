import { test, expect } from '@playwright/test';

test("Testcase 12 - Add Products in Cart", async ({ page }) => {

    await page.goto("https://automationexercise.com/", { waitUntil: "load" });

    await expect(page).toHaveTitle("Automation Exercise");

    await page.locator("//a[contains(text(),'Products')]").click();

    const firstProduct = page.locator("(//div[contains(@class,'single-products')])[1]");
    await firstProduct.waitFor({ state: "visible", timeout: 30000 });
    await firstProduct.scrollIntoViewIfNeeded();
    await firstProduct.hover();

    await page.locator("(//a[@data-product-id='1'])[1]").click({ force: true });

    await expect(page.locator("#cartModal")).toContainText("Added!");

});
