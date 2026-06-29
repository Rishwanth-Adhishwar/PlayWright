# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameterization.test.ts >> Google search test >> search Flow - playwright
- Location: tests\parameterization.test.ts:11:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('h3').first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - separator [ref=e3]
  - iframe [ref=e8]:
    - generic [ref=f2e2]:
      - generic [ref=f2e3]:
        - checkbox "I'm not a robot" [ref=f2e7]
        - generic [ref=f2e11]: I'm not a robot
      - generic [ref=f2e15]: reCAPTCHA
  - separator [ref=e9]
  - generic [ref=e10]:
    - text: About this page
    - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
    - link "Why did this happen?" [ref=e11] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e12]:
      - text: "IP address: 49.206.117.252"
      - text: "Time: 2026-06-29T07:34:13Z"
      - text: "URL: https://www.google.com/search?q=playwright&sca_esv=2ab59e100257b972&source=hp&ei=2x9Cas-1K5je2roP7aGZkA0&iflsig=ABILxe8AAAAAakIt6xPU9hPJSkGF52UXcvfMVmaCnXgt&ved=0ahUKEwiPj_nU96uVAxUYr1YBHe1QBtIQ4dUDCC0&oq=playwright&gs_lp=Egdnd3Mtd2l6IgpwbGF5d3JpZ2h0MggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMggQABiABBixA0jtCVAAWABwAHgAkAEAmAGbAqABmwKqAQMyLTG4AQzIAQD4AQGYAgGgAvACmAMAkgcDMy0xoAflBLIHAzMtMbgH8ALCBwM1LTHIB0eACAE&sclient=gws-wiz&sei=9B9CareoBr3Rp84P88uC2A4"
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
     |                      ^ Error: locator.click: Test timeout of 60000ms exceeded.
  31 |             await expect(page).toHaveTitle(new RegExp(sd.expectedTitle, "i"));
  32 |         });
  33 |     }
  34 | });
```