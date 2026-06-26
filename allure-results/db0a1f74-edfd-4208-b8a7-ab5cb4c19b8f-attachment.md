# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: singleselectdd.test.ts >> single select
- Location: tests\singleselectdd.test.ts:3:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.selected-value')
Expected substring: "Friday"
Received string:    "Day selected :- Thursday"

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('.selected-value')
    6 × locator resolved to <p class="selected-value text-size-14">Day selected :- Thursday</p>
      - unexpected value "Day selected :- Thursday"

```

```yaml
- paragraph: Day selected :- Thursday
```

# Test source

```ts
  1 | import { test, expect } from "@playwright/test";
  2 | 
  3 | test('single select', async ({ page }) => {
  4 | 
  5 |     await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
  6 |     await page.selectOption('//select[@id="select-demo"]', { index: 5 });
> 7 |     expect(page.locator('.selected-value')).toContainText("Friday");
    |                                             ^ Error: expect(locator).toContainText(expected) failed
  8 | })
```