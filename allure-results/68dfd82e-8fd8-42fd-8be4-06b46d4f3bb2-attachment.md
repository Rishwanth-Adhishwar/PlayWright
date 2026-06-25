# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation_exercise\TestCase2.test.ts >> Testcase 2 - Login using valid credentials 
- Location: tests\automation_exercise\TestCase2.test.ts:3:1

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, chromium, expect, Page, Browser } from '@playwright/test';
  2  | 
  3  | test("Testcase 2 - Login using valid credentials ", async ({ page }) => {
  4  | 
> 5  |     await page.goto("https://automationexercise.com/")
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  6  | 
  7  |     await page.click("//a[normalize-space()='Signup / Login']");
  8  | 
  9  |     await page.fill("//input[@data-qa='login-email']", "funofbun@gmail.com")
  10 |     await page.fill("//input[@placeholder='Password']", "funofbun")
  11 | 
  12 |     await page.click("//button[normalize-space()='Login']")
  13 | 
  14 |     await expect(page.locator("//*[@id='header']/div/div/div/div[2]/div/ul/li[10]/a")).toContainText("Logged in")
  15 | 
  16 | });
```