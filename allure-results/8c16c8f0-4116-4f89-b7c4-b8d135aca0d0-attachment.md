# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation_exercise\TestCase1.test.ts >> Testcase 1 - Register User
- Location: tests\automation_exercise\TestCase1.test.ts:3:1

# Error details

```
Error: page.goto: NS_ERROR_NET_ERROR_RESPONSE
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Page snapshot

```yaml
- article "Looks like there’s a problem with this site" [ref=e3]:
  - img "Illustration of a fox looking at disconnected network cables." [ref=e5]
  - generic [ref=e7]:
    - heading "Looks like there’s a problem with this site" [level=1] [ref=e8]
    - paragraph [ref=e9]:
      - text: The server at
      - strong [ref=e10]: automationexercise.com
      - text: "sent back an error: 500 Internal Server Error"
    - generic [ref=e11]:
      - heading "What can you do about it?" [level=3] [ref=e12]
      - list [ref=e13]:
        - listitem [ref=e14]: Check to make sure you’ve typed the website address correctly.
        - listitem [ref=e15]: The site could be temporarily unavailable or too busy. Try again in a few moments.
    - button "Try Again" [ref=e18]:
      - generic [ref=e20]:
        - generic: Try Again
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("Testcase 1 - Register User", async ({ page }) => {
  4  | 
> 5  |     await page.goto("https://automationexercise.com/")
     |                ^ Error: page.goto: NS_ERROR_NET_ERROR_RESPONSE
  6  |     await expect(page).toHaveTitle("Automation Exercise")
  7  | 
  8  |     await page.click("//a[normalize-space()='Signup / Login']");
  9  | 
  10 |     await page.fill("//input[@placeholder='Name']", "funofbun")
  11 |     await page.fill("//input[@data-qa='signup-email']", `funofbun${Date.now()}@gmail.com`)
  12 | 
  13 |     await page.click("//button[normalize-space()='Signup']")
  14 | 
  15 |     await page.fill("//input[@id='password']", "funofbun")
  16 | 
  17 |     await page.fill("//input[@id='first_name']", "fun")
  18 |     await page.fill("//input[@id='last_name']", "ofbun")
  19 | 
  20 |     await page.fill("//input[@id='state']", "TamilNadu")
  21 |     await page.fill("//input[@id='city']", "salem")
  22 | 
  23 |     await page.fill("//input[@id='address1']", "vesarpadi")
  24 |     await page.fill("//input[@id='zipcode']", "600038")
  25 | 
  26 |     await page.fill("//input[@id='mobile_number']", "7654321098")
  27 | 
  28 |     await page.click("//button[normalize-space()='Create Account']")
  29 | 
  30 |     await expect("//b[normalize-space()='Account Created!']").toContain("Created")
  31 | 
  32 | });
  33 | 
```