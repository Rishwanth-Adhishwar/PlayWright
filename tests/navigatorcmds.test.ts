import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.goBack();
    await page.waitForTimeout(3000);
    await page.goForward();
    await page.waitForTimeout(3000);
    await page.reload();


});