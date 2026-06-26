import { test, expect } from "@playwright/test";

test('single select', async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption('//select[@id="select-demo"]', { index: 5 });
    expect(page.locator('.selected-value')).toContainText("Friday");
})