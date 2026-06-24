import { test, expect } from "@playwright/test";

test('Tutorials Ninja Login', async ({ page }) => {
    await page.goto(process.env.BASE_URL!);
    await page.click("//a[@title='My Account']");
    await page.click("//a[text()='Login']");
    await page.fill("//input[@id='input-email']", process.env.EMAIL!);
    await page.fill("//input[@id='input-password']", process.env.UPASS!);
    await page.click("//input[@type='submit']");
    await expect(page.locator("//h2[text()='My Account']")).toBeVisible();
});