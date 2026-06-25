# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automationexercisee2e.test.ts >> test
- Location: tests\automationexercisee2e.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Go to shopping options for' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Go to shopping options for' })

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
- textbox "Password"
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
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Subscription management software"
  - link "Login system development"
  - link "Software testing books"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |     await page.goto('https://automationexercise.com/');
  5  |     await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  6  | 
  7  |     await page.getByRole('link', { name: ' Signup / Login' }).click();
  8  |     await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  9  | 
  10 |     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  11 |     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('funofbun@gmail.com');
> 12 |     await expect(page.getByRole('link', { name: 'Go to shopping options for' })).toBeVisible();
     |                                                                                  ^ Error: expect(locator).toBeVisible() failed
  13 | 
  14 |     await page.getByRole('textbox', { name: 'Password' }).click();
  15 |     await page.getByRole('textbox', { name: 'Password' }).fill('funofbun');
  16 |     await page.getByRole('button', { name: 'Login' }).click();
  17 |     await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  18 | 
  19 |     await page.getByRole('link', { name: ' Products' }).click();
  20 |     await page.locator('iframe[name="aswift_3"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  21 |     await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  22 | 
  23 |     await page.getByRole('textbox', { name: 'Search Product' }).click();
  24 |     await page.getByText('Add to cart').nth(1).click();
  25 |     await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
  26 | 
  27 |     await page.getByRole('link', { name: 'View Cart' }).click();
  28 |     await expect(page.getByRole('row', { name: 'Product Image Blue Top Women' })).toBeVisible();
  29 | 
  30 |     await page.getByText('Proceed To Checkout').click();
  31 |     await expect(page.getByRole('row', { name: 'Product Image Blue Top Women' })).toBeVisible();
  32 | 
  33 |     await page.getByRole('link', { name: 'Place Order' }).click();
  34 |     await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  35 | 
  36 |     await page.locator('input[name="name_on_card"]').click();
  37 |     await page.locator('input[name="name_on_card"]').fill('CREDIT');
  38 |     await page.locator('input[name="card_number"]').click();
  39 |     await page.locator('input[name="card_number"]').fill('wbdwadb3456biw');
  40 |     await page.getByRole('textbox', { name: 'ex.' }).click();
  41 |     await page.getByRole('textbox', { name: 'ex.' }).fill('311');
  42 |     await page.getByRole('textbox', { name: 'MM' }).click();
  43 |     await page.getByRole('textbox', { name: 'MM' }).fill('02');
  44 |     await page.getByRole('textbox', { name: 'YYYY' }).click();
  45 |     await page.getByRole('textbox', { name: 'YYYY' }).fill('2032');
  46 |     await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  47 |     await expect(page.getByRole('link', { name: 'Automation Exercise website' })).toBeVisible();
  48 | 
  49 |     await page.getByRole('link', { name: 'Continue' }).click();
  50 |     await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  51 | 
  52 |     await page.getByRole('link', { name: ' Logout' }).click();
  53 | });
```