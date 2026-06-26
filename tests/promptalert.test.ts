import { test, expect } from "@playwright/test";

test('prompt alert', async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on('dialog', async diaolg => {
        console.log("Allert Message: ", diaolg.message());
        await diaolg.accept("Rishwanth");
    });
    await page.getByRole('button', { name: 'Click Me' }).nth(2).click();
    expect(page.locator('//p[@id="prompt-demo"]')).toContainText("Rishwanth");


})