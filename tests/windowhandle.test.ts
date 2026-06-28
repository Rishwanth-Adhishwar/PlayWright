import { test, expect } from "@playwright/test";

test('@smoke handle tabwindow', async ({ page, context }) => {
    await page.goto("https://demoqa.com/browser-windows");

    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('#windowButton').click(),
    ]);
    await newWindow.waitForLoadState("domcontentloaded");
    const text = await newWindow.locator('#sampleHeading').textContent();
    console.log("New window text:", text);
    await expect(newWindow.locator('#sampleHeading')).toHaveText("This is a sample page");
    await newWindow.close();
    await expect(page).toHaveURL(/browser-windows/);
});

test('Iterate Windows', async ({ page, context }) => {
    await page.goto("https://demoqa.com/browser-windows");
    const [tab] = await Promise.all([context.waitForEvent("page"),
    page.locator('#tabButton').click()]);

    await tab.waitForLoadState();

    const [window] = await Promise.all([context.waitForEvent("page"),
    page.locator('#windowButton').click()]);

    await window.waitForLoadState();

    const pages = context.pages();
    console.log("Number of pages: ", pages.length);

    for (const p of pages) {
        // console.log('=====================')
        // console.log('URL: ', p.url());
        // console.log('Title: ', p.title());
        if (p.url() == "https://demoqa.com/sample") {
            const text = await p.locator('#sampleHeading').textContent();
            console.log("New window text:", text);
        }
    }

});