import { test, expect } from "@playwright/test";

test("keyboard action", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    await page.locator("#userName").click();
    await page.keyboard.type("Rishwanth");
    await page.keyboard.press("Tab");
    await page.keyboard.type("rishwanth@gmail.com");

    await page.keyboard.press("Tab");
    await page.keyboard.type("Salem");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("Chennai");

    await page.locator("#submit").click();

    await expect(page.locator("#output")).toBeVisible();

});