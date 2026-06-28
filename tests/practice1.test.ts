import { test, expect } from '@playwright/test';

test('browser navigation and locator methods', async ({ page, context }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const title = await page.title();
    console.log("Page Title: ", title);

    const url = page.url();
    console.log("Page URL: ", url);

    const pageSource = await page.content();
    console.log("Page Source Length: ", pageSource.length);

    await page.setViewportSize({ width: 1366, height: 768 });

    await page.getByPlaceholder("Enter Name").fill("Rishwanth");

    await page.getByPlaceholder("Enter EMail").fill("rishwanth@gmail.com");

    await page.locator("#phone").fill("9876543210");

    await page.getByLabel("Address:").fill("Salem, Tamil Nadu");

    await page.getByRole("radio", { name: "Male", exact: true }).check();

    await page.getByRole("checkbox", { name: "Sunday", exact: true }).check();

    await page.locator("#country").selectOption("India");

    await expect(page.locator(".title").first()).toBeVisible();

    await expect(page.locator("input[type='checkbox']").first()).toBeVisible();

    await expect(page.locator("input[type='checkbox']").nth(1)).toBeVisible();

    await expect(page.locator("input[type='checkbox']").last()).toBeVisible();

    const checkboxCount = await page.locator("input[type='checkbox']").count();
    console.log("Checkbox Count: ", checkboxCount);

    const pageHeading = await page.locator("h1").textContent();
    console.log("Page Heading: ", pageHeading);

    const nameVisible = await page.getByPlaceholder("Enter Name").isVisible();
    console.log("Name Field Visible: ", nameVisible);

    await page.goto("https://www.google.com/");

    await page.goBack();
    console.log("After Back URL: ", page.url());

    await page.goForward();
    console.log("After Forward URL: ", page.url());

    await page.reload();

    const newPage = await context.newPage();

    await newPage.goto("https://www.saucedemo.com/");

    console.log("New Page Title: ", await newPage.title());

    await newPage.close();

});