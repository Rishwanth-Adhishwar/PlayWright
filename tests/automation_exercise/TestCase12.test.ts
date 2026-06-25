import { test,expect } from '@playwright/test';

test("Testcase 12 - Add Products in Cart",async({page})=>{
   
    await page.goto("https://automationexercise.com/", { waitUntil: "commit" })
    await expect(page).toHaveTitle("Automation Exercise")

    await page.click("//a[text()=' Products']");
    await page.locator("//div[@class = 'single-products']").first().scrollIntoViewIfNeeded()
    await page.locator("//div[@class = 'single-products']").first().hover()
    await page.locator("//a[@data-product-id = '1']").nth(1).click({ force: true })
    await expect(page.locator("#cartModal")).toContainText("Added!")


})
