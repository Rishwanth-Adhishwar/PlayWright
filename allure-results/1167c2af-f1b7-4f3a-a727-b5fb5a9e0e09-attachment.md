# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testdtmuaisum.test.ts >> sum
- Location: tests\testdtmuaisum.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.testmuai.com/selenium-playground/simple-form-demo/
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/simple-form-demo/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("sum", async ({ page }) => {
  4  | 
> 5  |     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
     |                ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.testmuai.com/selenium-playground/simple-form-demo/
  6  |     const a = 30;
  7  |     const b = 20;
  8  |     await page.getByPlaceholder("Please enter first value").fill(a.toString());
  9  |     await page.getByPlaceholder("Please enter second value").fill(b.toString());
  10 |     await page.getByRole("button", { name: "Get Sum" }).click();
  11 |     const boxing = await page.getByRole("button", { name: "Get Sum" }).boundingBox();
  12 |     console.log("Boxing: ", boxing);
  13 |     const existing = await page.locator("//p[@id='addmessage']").innerText();
  14 |     console.log("Result: ", existing);
  15 |     const actual = a + b;
  16 |     await expect(existing).toEqual(actual.toString());
  17 | });
```