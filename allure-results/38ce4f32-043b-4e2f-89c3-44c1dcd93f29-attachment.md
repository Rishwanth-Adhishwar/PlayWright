# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testinfo.test.ts >> demo blaze login
- Location: tests\testinfo.test.ts:7:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('//a[@id=\'logout2\']')
Expected: visible
Received: hidden
Timeout:  10000ms

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('//a[@id=\'logout2\']')
    19 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "hidden"
    - waiting for" https://demoblaze.com/" navigation to finish...
    - navigated to "https://demoblaze.com/"
    4 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
      - unexpected value "hidden"

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | //all test in this file
  4  | test.setTimeout(30000);
  5  | 
  6  | 
  7  | test('demo blaze login', async ({ page }, testInfo) => {
  8  |     //test.setTimeout(25000); only for this test
  9  |     await page.goto("https://demoblaze.com/");
  10 |     await page.click("//a[@id='login2']", { timeout: 3000 });
  11 |     await page.fill("//input[@id='loginusername']", "admin");
  12 |     await page.fill("//input[@id='loginpassword']", "admin");
  13 |     await page.click("//button[text()='Log in']", { timeout: 20000 });
> 14 |     await expect(page.locator("//a[@id='logout2']")).toBeVisible({ timeout: 10000 });
     |                                                      ^ Error: expect(locator).toBeVisible() failed
  15 | 
  16 | });
  17 | test.afterEach(async ({ page }, testInfo) => {
  18 |     console.log("Test Title: ", testInfo.title);
  19 |     console.log("Test Status: ", testInfo.status);
  20 |     console.log("Test expectedStatus: ", testInfo.expectedStatus);
  21 |     console.log("Test Duration: ", testInfo.duration);
  22 |     console.log("Test Retry Number: ", testInfo.retry);
  23 |     console.log("Test Output Directory: ", testInfo.outputDir)
  24 | 
  25 | })
```