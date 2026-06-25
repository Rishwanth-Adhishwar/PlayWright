# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logindemoblaze.test.ts >> demo blaze login
- Location: tests\logindemoblaze.test.ts:2:1

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test('demo blaze login', async ({ page }) => {
> 3  |     await page.goto(process.env.DEMO_URL!);
     |                ^ Error: page.goto: url: expected string, got undefined
  4  |     await page.click("//a[@id='login2']");
  5  |     await page.fill("//input[@id='loginusername']", process.env.DEMO_USER!);
  6  |     await page.fill("//input[@id='loginpassword']", process.env.DEMO_PASS!);
  7  |     await page.click("//button[text()='Log in']");
  8  |     await expect(page.locator("//a[@id='logout2']")).toBeVisible();
  9  | 
  10 | })
```