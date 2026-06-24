import { test, expect } from '@playwright/test';
test('demo blaze login', async ({ page }) => {
    await page.goto(process.env.BASE_URL!);
    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']", process.env.UNAME!);
    await page.fill("//input[@id='loginpassword']", process.env.UPASS!);
    await page.click("//button[text()='Log in']");
    await expect(page.locator("//a[@id='logout2']")).toBeVisible();

})