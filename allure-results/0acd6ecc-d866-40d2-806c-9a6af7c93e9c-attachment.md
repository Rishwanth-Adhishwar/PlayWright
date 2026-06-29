# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: skipexample.test.ts >> Login Test1
- Location: tests\skipexample.test.ts:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByRole('link', { name: 'Log out' })
Expected: ""
Received: "Log out"
Timeout:  10000ms

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for getByRole('link', { name: 'Log out' })
    23 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "Log out"

```

```yaml
- link "Log out":
  - /url: "#"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | 
  3  | test("Login Test1", async ({ page }) => {
  4  |     await page.goto("https://www.demoblaze.com/");
  5  |     await page.click("#login2");
  6  |     await page.fill("#loginusername", "admin");
  7  |     await page.fill("#loginpassword", "admin");
  8  |     await page.click("//button[text()='Log in']");
  9  | 
  10 |     await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
> 11 |     await expect(page.getByRole('link', { name: "Log out" })).toHaveText("");
     |                                                               ^ Error: expect(locator).toHaveText(expected) failed
  12 |     const welcomeText = await page.locator('#nameofuser').textContent();
  13 |     expect.soft(welcomeText).toBe("Welcome adn");
  14 | });
  15 | 
  16 | test("Login Test 2", async ({ page }) => {
  17 |     await page.goto("https://www.demoblaze.com/");
  18 |     await page.click("#login2");
  19 |     await page.fill("#loginusername", "admin");
  20 |     await page.fill("#loginpassword", "admin");
  21 |     await page.click("//button[text()='Log in']");
  22 | 
  23 |     await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
  24 |     await expect(page.getByRole('link', { name: "Log out" })).toHaveText("Log out");
  25 |     const welcomeText = await page.locator('#nameofuser').textContent();
  26 |     expect.soft(welcomeText).toBe("Welcome admin");
  27 | });
  28 | 
  29 | test("Login Test 3", async ({ page }) => {
  30 |     await page.goto("https://www.demoblaze.com/");
  31 |     await page.click("#login2");
  32 |     await page.fill("#loginusername", "admin");
  33 |     await page.fill("#loginpassword", "admin");
  34 |     await page.click("//button[text()='Log in']");
  35 | 
  36 |     await expect(page.getByRole('link', { name: "Log out" })).toBeVisible();
  37 |     await expect(page.getByRole('link', { name: "Log out" })).toHaveText("Log out");
  38 |     const welcomeText = await page.locator('#nameofuser').textContent();
  39 |     expect.soft(welcomeText).toBe("Welcome admin");
  40 | });
```