import { test, chromium, expect, Page, Browser } from '@playwright/test';

test("Testcase 4 - Log out ", async ({ page }) => {

    await page.goto("https://automationexercise.com/")

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@data-qa='login-email']", "funofbun@gmail.com")
    await page.fill("//input[@placeholder='Password']", "funofbun")

    await page.locator("//button[normalize-space()='Login']").click()

    await expect(page.locator("//a[contains(text(),'Logged in as')]")).toBeVisible()

    await page.locator("//a[normalize-space()='Logout']").click()

    await expect(page.locator("//h2[normalize-space()='Login to your account']")).toContainText("Login")

});
