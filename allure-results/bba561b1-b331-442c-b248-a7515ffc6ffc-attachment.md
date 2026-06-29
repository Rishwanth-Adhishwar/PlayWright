# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameterization.test.ts >> Google search test >> search Flow - selenium
- Location: tests\parameterization.test.ts:11:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('h3').first()
    - waiting for navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dselenium%26sca_esv%3D2ab59e100257b972%26source%3Dhp%26ei%3D2h9CarHoGb2t0-kPspWFuAw%26iflsig%3DABILxe8AAAAAakIt6vgXz7VsG…"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const searchData = [
  4  |     { keyword: "playwright", expectedTitle: "playwright" },
  5  |     { keyword: "selenium", expectedTitle: "selenium" },
  6  |     { keyword: "cucumber", expectedTitle: "cucumber" },
  7  | ];
  8  | 
  9  | test.describe("Google search test", () => {
  10 |     for (const sd of searchData) {
  11 |         test(`search Flow - ${sd.keyword}`, async ({ page }) => {
  12 |             await page.route('**/*', route => {
  13 |                 const url = route.request().url();
  14 | 
  15 |                 if (
  16 |                     url.includes('googleads') ||
  17 |                     url.includes('doubleclick') ||
  18 |                     url.includes('googlesyndication') ||
  19 |                     url.includes('adservice')
  20 |                 ) {
  21 |                     route.abort();
  22 |                 } else {
  23 |                     route.continue();
  24 |                 }
  25 |             });
  26 |             await page.goto("https://www.google.com/");
  27 |             await page.locator("textarea[name='q']").fill(sd.keyword);
  28 |             await page.locator("input[name='btnK']").first().click();
  29 |             const fr = page.locator("h3").first();
> 30 |             await fr.click();
     |                      ^ Error: locator.click: Target page, context or browser has been closed
  31 |             await expect(page).toHaveTitle(new RegExp(sd.expectedTitle, "i"));
  32 |         });
  33 |     }
  34 | });
```