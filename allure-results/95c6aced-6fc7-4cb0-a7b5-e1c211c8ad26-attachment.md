# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation_exercise\TestCase10.test.ts >> Testcase 10 - Verify Subscription in home page
- Location: tests\automation_exercise\TestCase10.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | 
  3  | test("Testcase 10 - Verify Subscription in home page",async({page})=>{
  4  |    
> 5  |     await page.goto("https://automationexercise.com/")
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  |     await expect(page).toHaveTitle("Automation Exercise")
  7  | 
  8  |     await page.locator("//h2[text() = 'Subscription']").scrollIntoViewIfNeeded()
  9  |     await expect(page.locator("//h2[text() = 'Subscription']")).toBeVisible()
  10 |     
  11 |     await page.fill("//input[@id = 'susbscribe_email']", 'funofbun@gmail.com')
  12 |     await page.click("//button[@id = 'subscribe']")
  13 |     await expect(page.getByText("You have been successfully subscribed!")).toBeVisible()
  14 | })
  15 | 
```