import { test, expect } from "@playwright/test";

test('@smoke confirm alert', async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.once('dialog', async dialog => {
        console.log("Alert message:", dialog.message());
        await dialog.accept();
    });
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Click Me' }).nth(1).click();
    await page.waitForTimeout(3000);
    expect(page.locator('//p[@id="confirm-demo"]')).toContainText("OK");
    await page.waitForTimeout(3000);

});