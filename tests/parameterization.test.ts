import { test, expect } from "@playwright/test";

const searchData = [
    { keyword: "playwright", expectedTitle: "playwright" },
    { keyword: "selenium", expectedTitle: "selenium" },
    { keyword: "cucumber", expectedTitle: "cucumber" },
];

test.describe("Google search test", () => {
    for (const sd of searchData) {
        test(`search Flow - ${sd.keyword}`, async ({ page }) => {

            await page.goto("https://www.google.com/");
            await page.locator("textarea[name='q']").fill(sd.keyword);
            await page.locator("input[name='btnK']").first().click();
            const fr = page.locator("h3").first();
            await fr.click();
            await expect(page).toHaveTitle(new RegExp(sd.expectedTitle, "i"));
        });
    }
});