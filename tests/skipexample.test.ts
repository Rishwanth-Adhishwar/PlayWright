import { test, expect } from "@playwright/test"

test("Login Test1", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername", "admin");
    await page.fill("#loginpassword", "admin");
    await page.click("//button[text()='Log in']");

    await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
    await expect(page.getByRole('link', { name: "Log out" })).toHaveText("");
    const welcomeText = await page.locator('#nameofuser').textContent();
    expect.soft(welcomeText).toBe("Welcome adn");
});

test("Login Test 2", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername", "admin");
    await page.fill("#loginpassword", "admin");
    await page.click("//button[text()='Log in']");

    await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
    await expect(page.getByRole('link', { name: "Log out" })).toHaveText("Log out");
    const welcomeText = await page.locator('#nameofuser').textContent();
    expect.soft(welcomeText).toBe("Welcome admin");
});

test("Login Test 3", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername", "admin");
    await page.fill("#loginpassword", "admin");
    await page.click("//button[text()='Log in']");

    await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
    await expect(page.getByRole('link', { name: "Log out" })).toHaveText("Log out");
    const welcomeText = await page.locator('#nameofuser').textContent();
    expect.soft(welcomeText).toBe("Welcome admin");
});