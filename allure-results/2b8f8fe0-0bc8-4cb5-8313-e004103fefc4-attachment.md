# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: confirmalert.test.ts >> confirm alert
- Location: tests\confirmalert.test.ts:3:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//p[@id="confirm-demo"]')
Expected substring: "ok"
Received string:    "You pressed OK!"

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('//p[@id="confirm-demo"]')
    6 × locator resolved to <p class="mt-20" id="confirm-demo">You pressed OK!</p>
      - unexpected value "You pressed OK!"

```

```yaml
- paragraph: You pressed OK!
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test('confirm alert', async ({ page }) => {
  4  | 
  5  |     await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
  6  |     page.once('dialog', async dialog => {
  7  |         console.log("Alert message:", dialog.message());
  8  |         await dialog.accept();
  9  |     });
  10 |     await page.getByRole('button', { name: 'Click Me' }).nth(1).click();
> 11 |     expect(page.locator('//p[@id="confirm-demo"]')).toContainText("ok");
     |                                                     ^ Error: expect(locator).toContainText(expected) failed
  12 | 
  13 | });
```