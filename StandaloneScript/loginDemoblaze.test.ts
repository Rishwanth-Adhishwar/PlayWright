import { chromium, test, expect } from "@playwright/test";

test("Login test", async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://demoblaze.com/");
    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']", "admin");
    await page.fill("//input[@id='loginpassword']", "admin");
    await page.click("//button[text()='Log in']");

    await page.waitForTimeout(5000);

    const page1 = await context.newPage();
    await page1.goto("https://demoblaze.com/cart.html");
    await page1.close();

    await page.waitForTimeout(5000);

    const NewContext = await browser.newContext();
    const Newpage = await NewContext.newPage();
    await Newpage.goto("https://demoblaze.com/cart.html");
    await page.waitForTimeout(5000);

    await browser.close();
});