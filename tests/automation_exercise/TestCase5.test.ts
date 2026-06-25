import { test, chromium, expect, Page, Browser } from '@playwright/test';

test("Testcase 5 - Email already exists", async ({ page }) => {


    await page.goto("https://automationexercise.com/", { waitUntil: "commit" })

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@placeholder='Name']", "funofbun")
    await page.fill("//input[@data-qa='signup-email']", "funofbun@gmail.com")

    await page.click("//button[normalize-space()='Signup']")

    await expect(page.locator("//p[normalize-space()='Email Address already exist!']")).toContainText("Email Address already exist!")

});
