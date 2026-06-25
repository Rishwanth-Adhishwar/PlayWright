# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation_exercise\TestCase11.test.ts >> Testcase 11 - Verify Subscription in Cart page
- Location: tests\automation_exercise\TestCase11.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  getByText('You have been successfully subscribed!')
Expected: visible
Received: hidden

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('You have been successfully subscribed!')
    8 × locator resolved to <div class="alert-success alert">You have been successfully subscribed!</div>
      - unexpected value "hidden"

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
- list:
  - listitem:
    - link "Home":
      - /url: /
  - listitem: Shopping Cart
- paragraph:
  - text: Cart is empty! Click
  - link "here":
    - /url: /products
  - text: to buy products.
  - link "Building Materials & Supplies":
    - img
    - text: Building Materials & Supplies
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Shopping cart software"
  - link "Development Tools"
  - link "Product affiliate marketing"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- link "":
  - /url: "#top"
- insertion:
  - iframe
- img
- link "Go to shopping options for Software testing services": Software testing services
- button "Close shopping anchor"
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | 
  3  | test("Testcase 11 - Verify Subscription in Cart page",async({page})=>{
  4  |    
  5  |     await page.goto("https://automationexercise.com/")
  6  |     await expect(page).toHaveTitle("Automation Exercise")
  7  | 
  8  |     await page.click("//a[normalize-space()='Cart']");
  9  | 
  10 |     await page.locator("//h2[text() = 'Subscription']").scrollIntoViewIfNeeded()
  11 | 
  12 |     await expect(page.locator("//h2[text() = 'Subscription']")).toBeVisible()
  13 |     
  14 |     await page.fill("//input[@id = 'susbscribe_email']", 'funofbun@gmail.com')
  15 |     await page.click("//button[@id = 'subscribe']")
> 16 |     await expect(page.getByText("You have been successfully subscribed!")).toBeVisible()
     |                                                                            ^ Error: expect(locator).toBeVisible() failed
  17 | 
  18 | })
  19 | 
```