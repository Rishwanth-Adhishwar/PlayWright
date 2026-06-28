import { test, expect } from "@playwright/test";

test('@smoke simple alert', async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.once('dialog', async dialog => {
        console.log("Alert message:", dialog.message());
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Click Me' }).first().click();

});