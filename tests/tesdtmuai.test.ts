import { test, expect } from "@playwright/test";

test("testmuai search box test", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const existing = await page.getAttribute('//input[@placeholder="Please enter your Message"]', 'placeholder');
    console.log("Already Existing: ", existing);
    await page.getByPlaceholder("Please enter your Message").fill("Rishwanth");
    const existing1 = await page.getAttribute('(//input[@type="text"])[3]', 'placeholder');
    await page.getByRole('button', { name: "Get Checked Value" }).evaluate((element: HTMLButtonElement) => element.click());
    await page.getByRole('button', { name: "Get Checked Value" }).click();
    await expect(page.locator('#message')).toContainText("Rishwanth");
    const actual = await page.locator("#message").textContent();
    console.log("Updated Name: ", actual);
});