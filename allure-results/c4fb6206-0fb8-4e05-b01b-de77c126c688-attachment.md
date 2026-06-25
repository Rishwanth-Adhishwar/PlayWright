# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigatorcmds.test.ts >> test
- Location: tests\navigatorcmds.test.ts:2:1

# Error details

```
Error: page.goBack: net::ERR_HTTP_RESPONSE_CODE_FAILURE
Call log:
  - waiting for navigation until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This page isn’t working" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: automationexercise.com
      - text: is currently unable to handle this request.
    - generic [ref=e10]: HTTP ERROR 500
  - button "Reload" [ref=e13] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test('test', async ({ page }) => {
  3  |     await page.goto('https://automationexercise.com/');
  4  |     await page.getByRole('link', { name: ' Signup / Login' }).click();
  5  |     await page.goBack();
  6  |     await page.waitForTimeout(3000);
  7  |     await page.goForward();
  8  |     await page.waitForTimeout(3000);
> 9  |     await page.goBack();
     |                ^ Error: page.goBack: net::ERR_HTTP_RESPONSE_CODE_FAILURE
  10 |     await page.waitForTimeout(3000);
  11 |     await page.reload();
  12 | });
```