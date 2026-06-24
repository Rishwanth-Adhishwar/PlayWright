# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logintutorialsninja.test.ts >> Tutorials Ninja Login
- Location: tests\logintutorialsninja.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//h2[text()=\'My Account\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//h2[text()=\'My Account\']')

```

```yaml
- navigation:
  - button "$ Currency ":
    - strong: $
    - text: Currency 
  - list:
    - listitem:
      - link "":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
      - text: "123456789"
    - listitem:
      - link " My Account":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/account
    - listitem:
      - link " Wish List (0)":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
    - listitem:
      - link " Shopping Cart":
        - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
    - listitem:
      - link " Checkout":
        - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
- banner:
  - heading "Qafox.com" [level=1]:
    - link "Qafox.com":
      - /url: https://tutorialsninja.com/demo/index.php?route=common/home
  - textbox "Search"
  - button ""
  - button " 0 item(s) - $0.00"
- navigation:
  - list:
    - listitem:
      - link "Desktops":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
    - listitem:
      - link "Laptops & Notebooks":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
    - listitem:
      - link "Components":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
    - listitem:
      - link "Tablets":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
    - listitem:
      - link "Software":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
    - listitem:
      - link "Phones & PDAs":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
    - listitem:
      - link "Cameras":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
    - listitem:
      - link "MP3 Players":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
- list:
  - listitem:
    - link "":
      - /url: https://tutorialsninja.com/demo/index.php?route=common/home
  - listitem:
    - link "Account":
      - /url: https://tutorialsninja.com/demo/index.php?route=account/account
  - listitem:
    - link "Login":
      - /url: https://tutorialsninja.com/demo/index.php?route=account/login
- text: " Warning: No match for E-Mail Address and/or Password."
- heading "New Customer" [level=2]
- paragraph:
  - strong: Register Account
- paragraph: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
- link "Continue":
  - /url: https://tutorialsninja.com/demo/index.php?route=account/register
- heading "Returning Customer" [level=2]
- paragraph:
  - strong: I am a returning customer
- text: E-Mail Address
- textbox "E-Mail Address": cargme@gmail.com
- text: Password
- textbox "Password": carGame
- link "Forgotten Password":
  - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
- button "Login"
- complementary:
  - link "Login":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/login
  - link "Register":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/register
  - link "Forgotten Password":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
  - link "My Account":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/account
  - link "Address Book":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/address
  - link "Wish List":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
  - link "Order History":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/order
  - link "Downloads":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/download
  - link "Recurring payments":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
  - link "Reward Points":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
  - link "Returns":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/return
  - link "Transactions":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
  - link "Newsletter":
    - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
- contentinfo:
  - heading "Information" [level=5]
  - list:
    - listitem:
      - link "About Us":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
    - listitem:
      - link "Delivery Information":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
    - listitem:
      - link "Privacy Policy":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
    - listitem:
      - link "Terms & Conditions":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
  - heading "Customer Service" [level=5]
  - list:
    - listitem:
      - link "Contact Us":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
    - listitem:
      - link "Returns":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
    - listitem:
      - link "Site Map":
        - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
  - heading "Extras" [level=5]
  - list:
    - listitem:
      - link "Brands":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
    - listitem:
      - link "Gift Certificates":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
    - listitem:
      - link "Affiliate":
        - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
    - listitem:
      - link "Specials":
        - /url: https://tutorialsninja.com/demo/index.php?route=product/special
  - heading "My Account" [level=5]
  - list:
    - listitem:
      - link "My Account":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/account
    - listitem:
      - link "Order History":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/order
    - listitem:
      - link "Wish List":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
    - listitem:
      - link "Newsletter":
        - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
  - separator
  - paragraph:
    - text: Powered By
    - link "OpenCart":
      - /url: http://www.opencart.com
    - text: Qafox.com © 2026
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test('Tutorials Ninja Login', async ({ page }) => {
  4  |     await page.goto(process.env.BASE_URL!);
  5  |     await page.click("//a[@title='My Account']");
  6  |     await page.click("//a[text()='Login']");
  7  |     await page.fill("//input[@id='input-email']", process.env.EMAIL!);
  8  |     await page.fill("//input[@id='input-password']", process.env.UPASS!);
  9  |     await page.click("//input[@type='submit']");
> 10 |     await expect(page.locator("//h2[text()='My Account']")).toBeVisible();
     |                                                             ^ Error: expect(locator).toBeVisible() failed
  11 | });
```