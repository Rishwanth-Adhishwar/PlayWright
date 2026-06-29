import { test, expect } from "@playwright/test";

//all test in this file
test.setTimeout(30000);
test.beforeAll(async () => {
    console.log("Before All Test [Sign In]")
})

test.beforeEach(async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    console.log("Launched Website Successfully");
})

test('demo blaze login', async ({ page }) => {
    //test.setTimeout(25000); only for this test

    await page.click("//a[@id='login2']", { timeout: 3000 });
    await page.fill("//input[@id='loginusername']", "admin");
    await page.fill("//input[@id='loginpassword']", "admin");
    await page.click("//button[text()='Log in']", { timeout: 20000 });
    await expect(page.locator("//a[@id='logout2']")).toBeVisible({ timeout: 10000 });

});
test.afterEach(async ({ page }, testInfo) => {
    console.log("Test Title: ", testInfo.title);
    console.log("Test Status: ", testInfo.status);
    console.log("Test expectedStatus: ", testInfo.expectedStatus);
    console.log("Test Duration: ", testInfo.duration);
    console.log("Test Retry Number: ", testInfo.retry);
    console.log("Test Output Directory: ", testInfo.outputDir)

})
test.afterAll(async () => {
    console.log("After All Test [Sign Out]")
})
