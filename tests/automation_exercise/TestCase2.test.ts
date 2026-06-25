import { test, chromium, expect, Page, Browser } from '@playwright/test';

test("Testcase 2 - Login using valid credentials ", async ({ page }) => {

    await page.goto("https://automationexercise.com/", { waitUntil: "commit" })

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@data-qa='login-email']", "funofbun@gmail.com")
    await page.fill("//input[@placeholder='Password']", "funofbun")

    await page.click("//button[normalize-space()='Login']")

    await expect(page.locator("//a[contains(text(),'Logged in as')]")).toBeVisible()

});
