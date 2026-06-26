import { test, expect } from "@playwright/test";

test("sum", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    const a = 30;
    const b = 20;
    await page.getByPlaceholder("Please enter first value").pressSequentially(a.toString(), { delay: 100 });
    await page.getByPlaceholder("Please enter first value").fill(a.toString());
    await page.getByPlaceholder("Please enter second value").fill(b.toString());
    const boxing = await page.getByRole("button", { name: "Get Sum" }).boundingBox();
    console.log("Boxing: ", boxing);
    await page.getByRole("button", { name: "Get Sum" }).isEnabled();
    await page.getByRole("button", { name: "Get Sum" }).evaluate((element: HTMLButtonElement) => element.click());
    const existing = await page.locator("//p[@id='addmessage']").innerText();
    console.log("Result: ", existing);
    await expect(page.locator("#addmessage")).toHaveText((a + b).toString());
});