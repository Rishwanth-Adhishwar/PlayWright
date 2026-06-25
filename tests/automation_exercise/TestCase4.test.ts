import { test, chromium, expect, Page, Browser } from '@playwright/test';

test("Testcase 4 - Log out ", async ({ page }) => {

    await page.goto("https://automationexercise.com/", { waitUntil: "commit" })

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@data-qa='login-email']", "funofbun@gmail.com")
    await page.fill("//input[@placeholder='Password']", "funofbun")

    await page.locator("//button[normalize-space()='Login']").click({ noWaitAfter: true })

    await expect(page.locator("//a[contains(text(),'Logged in as')]")).toBeVisible({ timeout: 15000 })

    await page.locator("//a[normalize-space()='Logout']").click({ noWaitAfter: true })

    await expect(page.locator("//h2[normalize-space()='Login to your account']")).toContainText("Login", { timeout: 15000 })

});
