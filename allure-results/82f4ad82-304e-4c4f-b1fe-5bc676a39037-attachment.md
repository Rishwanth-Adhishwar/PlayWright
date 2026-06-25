# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automationexercisee2e.test.ts >> test
- Location: tests\automationexercisee2e.test.ts:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#header')
Expected substring: "Logout"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#header')
    - waiting for navigation to finish...
    - navigated to "https://automationexercise.com/"

```

```yaml
- article "Looks like there’s a problem with this site":
  - img "Illustration of a fox looking at disconnected network cables."
  - heading "Looks like there’s a problem with this site" [level=1]
  - paragraph:
    - text: The server at
    - strong: automationexercise.com
    - text: "sent back an error: 500 Internal Server Error"
  - heading "What can you do about it?" [level=3]
  - list:
    - listitem: Check to make sure you’ve typed the website address correctly.
    - listitem: The site could be temporarily unavailable or too busy. Try again in a few moments.
  - button "Try Again"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |     await page.goto('https://automationexercise.com/');
  5  |     await page.getByRole('link', { name: ' Signup / Login' }).click();
  6  |     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  7  |     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('funofbun@gmail.com');
  8  |     await page.getByRole('textbox', { name: 'Password' }).click();
  9  |     await page.getByRole('textbox', { name: 'Password' }).fill('funofbun');
  10 |     await page.getByRole('button', { name: 'Login' }).click();
> 11 |     await expect(page.locator('#header')).toContainText('Logout');
     |                                           ^ Error: expect(locator).toContainText(expected) failed
  12 |     await page.getByRole('link', { name: ' Products' }).click();
  13 |     await page.locator('iframe[name="aswift_1"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  14 |     await expect(page.locator('body')).toContainText('All Products');
  15 |     await page.getByText('Add to cart').nth(1).click();
  16 |     await page.getByRole('link', { name: 'View Cart' }).click();
  17 |     await expect(page.locator('#do_action')).toContainText('Proceed To Checkout');
  18 |     await page.getByText('Proceed To Checkout').click();
  19 |     await expect(page.locator('#cart_items')).toContainText('Place Order');
  20 |     await page.getByRole('link', { name: 'Place Order' }).click();
  21 |     await page.locator('input[name="name_on_card"]').click();
  22 |     await page.locator('input[name="name_on_card"]').fill('funOfBun');
  23 |     await page.locator('input[name="card_number"]').click();
  24 |     await page.locator('input[name="card_number"]').fill('123476548901');
  25 |     await page.getByRole('textbox', { name: 'ex.' }).click();
  26 |     await page.getByRole('textbox', { name: 'ex.' }).fill('441');
  27 |     await page.getByRole('textbox', { name: 'MM' }).click();
  28 |     await page.getByRole('textbox', { name: 'MM' }).fill('03');
  29 |     await page.getByRole('textbox', { name: 'YYYY' }).click();
  30 |     await page.getByRole('textbox', { name: 'YYYY' }).fill('2029');
  31 |     await expect(page.locator('#cart_items')).toContainText('Payment');
  32 |     await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  33 |     await expect(page.locator('#form')).toContainText('Order Placed!');
  34 |     await page.getByRole('link', { name: 'Continue' }).click();
  35 |     await page.getByRole('link', { name: ' Logout' }).click();
  36 |     await expect(page.getByRole('list')).toContainText('Signup / Login');
  37 | });
```