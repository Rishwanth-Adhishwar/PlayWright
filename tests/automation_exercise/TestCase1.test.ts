import { test, expect } from '@playwright/test';

test("Testcase 1 - Register User", async ({ page }) => {

    await page.goto("https://automationexercise.com/", { waitUntil: "commit" })
    await expect(page).toHaveTitle("Automation Exercise")

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@placeholder='Name']", "funofbun")
    await page.fill("//input[@data-qa='signup-email']", `funofbun${Date.now()}@gmail.com`)

    await page.click("//button[normalize-space()='Signup']")

    await page.fill("//input[@id='password']", "funofbun")

    await page.fill("//input[@id='first_name']", "fun")
    await page.fill("//input[@id='last_name']", "ofbun")

    await page.fill("//input[@id='state']", "TamilNadu")
    await page.fill("//input[@id='city']", "salem")

    await page.fill("//input[@id='address1']", "vesarpadi")
    await page.fill("//input[@id='zipcode']", "600038")

    await page.fill("//input[@id='mobile_number']", "7654321098")

    await page.click("//button[normalize-space()='Create Account']")

    await expect(page.locator("//b[normalize-space()='Account Created!']")).toContainText("Account Created!")

});
