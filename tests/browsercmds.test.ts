import { test, expect } from '@playwright/test';
test('demo blaze browser cmd test', async ({ page }) => {

    await page.goto("https://demoblaze.com/");
    const title = await page.title();
    const pagesrc = await page.content();
    const currenturl = await page.url();
    console.log("Title: ", title);
    console.log("Url: ", currenturl);
    //console.log("Page source: ", pagesrc);
    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']", "admin");
    await page.fill("//input[@id='loginpassword']", "admin");
    await page.click("//button[text()='Log in']");



})