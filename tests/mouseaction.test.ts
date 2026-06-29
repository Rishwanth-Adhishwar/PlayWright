import { test, expect } from "@playwright/test"


test('Mouse Action', async ({ page }) => {
    await page.route('**/*', route => {
        const url = route.request().url();

        if (
            url.includes('googleads') ||
            url.includes('doubleclick') ||
            url.includes('googlesyndication') ||
            url.includes('adservice')
        ) {
            route.abort();
        } else {
            route.continue();
        }
    });
    await page.goto("https://www.testautomationstudio.com/demo/actions/#");
    await page.locator('//input[@value="Single Click Button"]').click({ button: "left" })
    const a1 = await page.locator('#action1Status').textContent();
    expect(a1).toBe("Action 1 Click");

    await page.locator('//input[@value="Double Click Button"]').dblclick();
    const a2 = await page.locator('#action1AStatus').textContent();
    expect(a2).toBe("Action 1 Double Click");

    await page.locator('#action3').click({ button: "right" });
    const a3 = await page.locator('#action3Status').textContent();
    expect(a3).toBe("Context Click on Textbox");

    await page.locator('#nameMenu').hover();
    const a4 = await page.locator('.simpleText').textContent();
    expect(a4).toBe("Locator is Name");

    const src = await page.locator('(//li[text()="Item 1"])[1]');
    const dest = await page.locator('//ul[@id="sortable2"]');

    await src.dragTo(dest);

    await page.waitForTimeout(5000);



})