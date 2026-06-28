import { test, expect } from "@playwright/test";

test('@smoke single select', async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");

    const dropdown = page.locator('#select-demo');

    await dropdown.selectOption({ label: 'Thursday' });

    const selectedText = await dropdown.evaluate((select: HTMLSelectElement) => {
        return select.selectedOptions[0].textContent?.trim();
    });

    expect(selectedText).toBe("Thursday");
});