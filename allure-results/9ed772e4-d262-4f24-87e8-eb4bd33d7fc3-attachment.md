# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testdtmuaisum.test.ts >> sum
- Location: tests\testdtmuaisum.test.ts:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#addmessage')
Expected: "50"
Received: "Entered value is not a number"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#addmessage')
    13 × locator resolved to <p class="mt-20" id="addmessage">Entered value is not a number</p>
       - unexpected value "Entered value is not a number"

```

```yaml
- paragraph: Entered value is not a number
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("sum", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  6  | 
  7  |     const a = 30;
  8  |     const b = 20;
  9  |     await page.getByPlaceholder("Please enter first value").fill(a.toString());
  10 |     await page.getByPlaceholder("Please enter second value").fill(b.toString());
  11 |     const boxing = await page.getByRole("button", { name: "Get Sum" }).boundingBox();
  12 |     console.log("Boxing: ", boxing);
  13 |     await page.getByRole("button", { name: "Get Sum" }).isEnabled();
  14 |     await page.getByRole("button", { name: "Get Sum" }).evaluate((element: HTMLButtonElement) => element.click());
  15 |     const existing = await page.locator("//p[@id='addmessage']").innerText();
  16 |     console.log("Result: ", existing);
> 17 |     await expect(page.locator("#addmessage")).toHaveText((a + b).toString());
     |                                               ^ Error: expect(locator).toHaveText(expected) failed
  18 | });
```