# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation_exercise\TestCase2.test.ts >> Testcase 2 - Login using valid credentials 
- Location: tests\automation_exercise\TestCase2.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//*[@id=\'header\']/div/div/div/div[2]/div/ul/li[10]/a')
Expected substring: "Logged in"
Received string:    ""

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]: funofbun@gmail.com
        - textbox "Password" [active] [ref=e45]: funofbun
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - generic [ref=e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e78]: Discover more
      - link "Subscription management software" [ref=e79] [cursor=pointer]:
        - generic "Subscription management software" [ref=e80]
        - img [ref=e82]
      - link "Software testing tools" [ref=e84] [cursor=pointer]:
        - generic "Software testing tools" [ref=e85]
        - img [ref=e87]
      - link "Quality assurance training" [ref=e89] [cursor=pointer]:
        - generic "Quality assurance training" [ref=e90]
        - img [ref=e92]
  - insertion [ref=e94]:
    - iframe [ref=e97]:
      - iframe [ref=f22e1]:
        - generic [ref=f25e1]:
          - generic [ref=f25e2]:
            - generic:
              - img [ref=f25e6] [cursor=pointer]
              - button [ref=f25e8] [cursor=pointer]:
                - img [ref=f25e9]
          - insertion [ref=f25e16]
```

# Test source

```ts
  1  | import { test, chromium, expect, Page, Browser } from '@playwright/test';
  2  | 
  3  | test("Testcase 2 - Login using valid credentials ", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://automationexercise.com/")
  6  | 
  7  |     await page.click("//a[normalize-space()='Signup / Login']");
  8  | 
  9  |     await page.fill("//input[@data-qa='login-email']", "funofbun@gmail.com")
  10 |     await page.fill("//input[@placeholder='Password']", "funofbun")
  11 | 
  12 |     await page.click("//button[normalize-space()='Login']")
  13 | 
> 14 |     await expect(page.locator("//*[@id='header']/div/div/div/div[2]/div/ul/li[10]/a")).toContainText("Logged in")
     |                                                                                        ^ Error: expect(locator).toContainText(expected) failed
  15 | 
  16 | });
```