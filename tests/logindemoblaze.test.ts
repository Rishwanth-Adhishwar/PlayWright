import { test, expect } from '@playwright/test';
test('demo blaze login', async ({ page }) => {
    await page.goto(process.env.DEMO_URL!);
    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']", process.env.DEMO_USER!);
    await page.fill("//input[@id='loginpassword']", process.env.DEMO_PASS!);
    await page.click("//button[text()='Log in']");
    await expect(page.locator("//a[@id='logout2']")).toBeVisible();

})