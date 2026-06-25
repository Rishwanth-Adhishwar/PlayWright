# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation_exercise\TestCase4.test.ts >> Testcase 4 - Log out 
- Location: tests\automation_exercise\TestCase4.test.ts:4:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//a[contains(text(),\'Logged in as\')]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//a[contains(text(),\'Logged in as\')]')
    - waiting for navigation to finish...

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address": funofbun@gmail.com
- textbox "Password": funofbun
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | import { test, chromium, expect, Page, Browser } from '@playwright/test';
  2  | import { ensureFunofbunAccount } from './helpers';
  3  | 
  4  | test("Testcase 4 - Log out ", async ({ page }) => {
  5  | 
  6  |     await ensureFunofbunAccount(page)
  7  | 
  8  |     await page.goto("https://automationexercise.com/", { waitUntil: "commit" })
  9  | 
  10 |     await page.click("//a[normalize-space()='Signup / Login']");
  11 | 
  12 |     await page.fill("//input[@data-qa='login-email']", "funofbun@gmail.com")
  13 |     await page.fill("//input[@placeholder='Password']", "funofbun")
  14 | 
  15 |     await page.click("//button[normalize-space()='Login']")
  16 | 
> 17 |     await expect(page.locator("//a[contains(text(),'Logged in as')]")).toBeVisible()
     |                                                                        ^ Error: expect(locator).toBeVisible() failed
  18 | 
  19 |     await page.click("//a[normalize-space()='Logout']")
  20 | 
  21 |     await expect(page.locator("//h2[normalize-space()='Login to your account']")).toContainText("Login")
  22 | 
  23 | });
  24 | 
```