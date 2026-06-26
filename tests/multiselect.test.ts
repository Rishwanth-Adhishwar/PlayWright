import { test, expect } from "@playwright/test";

test('multi select', async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption('//select[@id="multi-select"]', [{ index: 5 }, { value: 'New York' }]);
})