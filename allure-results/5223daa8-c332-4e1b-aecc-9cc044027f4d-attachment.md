# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mouseaction.test.ts >> Mouse Action
- Location: tests\mouseaction.test.ts:4:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Test Automation Studio Demo Website : Mouse & Keyboard Actions"
Received: [Function title]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e3]:
    - link "TEST AUTOMATION STUDIO" [ref=e6] [cursor=pointer]:
      - /url: https://www.testautomationstudio.com/?ref=Logo
    - generic [ref=e7]:
      - link "Home" [ref=e8] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/
      - link "Blog" [ref=e9] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/blog/
      - link "Interview Questions" [ref=e10] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/interview-questions/
      - link "Tutorials" [ref=e11] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/tutorials/
      - link "Cheat Sheet" [ref=e12] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/cheat-sheet/
      - link "Products" [ref=e13] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/products/
      - link "Contact" [ref=e14] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/contact/
  - generic [ref=e16]:
    - generic [ref=e18]:
      - generic [ref=e20] [cursor=pointer]: Categories
      - generic [ref=e21]:
        - link "Validations" [ref=e24] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/validations/
        - link "Set Data" [ref=e27] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/set/
        - link "Get Data" [ref=e30] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/get/
        - link "Actions" [ref=e33] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/actions/
        - link "Browser" [ref=e36] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/browser/
        - link "Frames" [ref=e39] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/frame/
        - link "Miscellaneous" [ref=e42] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/misc/
        - link "Wait" [ref=e45] [cursor=pointer]:
          - /url: https://www.testautomationstudio.com/demo/wait/
    - generic [ref=e47]:
      - generic [ref=e49] [cursor=pointer]: Mouse & Keyboard Actions
      - generic [ref=e51]:
        - generic [ref=e52]: Mouse Click
        - table [ref=e53]:
          - rowgroup [ref=e54]:
            - row "Single Click Single Click Button" [ref=e55]:
              - cell "Single Click" [ref=e56]
              - cell "Single Click Button" [ref=e57]:
                - button "Single Click Button" [ref=e58]
              - cell [ref=e59]
            - row "Double Click Double Click Button" [ref=e60]:
              - cell "Double Click" [ref=e61]
              - cell "Double Click Button" [ref=e62]:
                - button "Double Click Button" [ref=e63]
              - cell [ref=e64]
            - row "Hyperlink Link" [ref=e65]:
              - cell "Hyperlink" [ref=e66]
              - cell "Link" [ref=e67]:
                - link "Link" [ref=e68] [cursor=pointer]:
                  - /url: "#"
              - cell [ref=e69]
            - row "Context Click" [ref=e70]:
              - cell "Context Click" [ref=e71]
              - cell [ref=e72]:
                - textbox [ref=e73]
              - cell [ref=e74]
        - generic [ref=e75]: Drag and Drop
        - generic [ref=e76]:
          - list [ref=e77]:
            - listitem [ref=e78]: Item 1
            - listitem [ref=e79]: Item 2
            - listitem [ref=e80]: Item 3
            - listitem [ref=e81]: Item 4
            - listitem [ref=e82]: Item 5
          - list [ref=e83]:
            - listitem [ref=e84]: Item 1
            - listitem [ref=e85]: Item 2
            - listitem [ref=e86]: Item 3
            - listitem [ref=e87]: Item 4
            - listitem [ref=e88]: Item 5
        - generic [ref=e89]: Mouse Move
        - generic [ref=e90]:
          - table [ref=e92]:
            - rowgroup [ref=e93]:
              - row "Id | XPath | CSS Path | Classname | Name | Tagname | LinkText | Partial Link Text" [ref=e94]:
                - cell [ref=e95]
                - cell "Id" [ref=e96] [cursor=pointer]
                - cell "|" [ref=e97]
                - cell "XPath" [ref=e98] [cursor=pointer]
                - cell "|" [ref=e99]
                - cell "CSS Path" [ref=e100] [cursor=pointer]
                - cell "|" [ref=e101]
                - cell "Classname" [ref=e102] [cursor=pointer]
                - cell "|" [ref=e103]
                - cell "Name" [ref=e104] [cursor=pointer]
                - cell "|" [ref=e105]
                - cell "Tagname" [ref=e106] [cursor=pointer]
                - cell "|" [ref=e107]
                - cell "LinkText" [ref=e108] [cursor=pointer]
                - cell "|" [ref=e109]
                - cell "Partial Link Text" [ref=e110] [cursor=pointer]
                - cell [ref=e111]
          - table [ref=e112]:
            - rowgroup [ref=e113]:
              - row [ref=e114]:
                - cell [ref=e115]
  - insertion [ref=e119]:
    - iframe [ref=e121]:
      
  - generic [ref=e123]:
    - generic [ref=e125]:
      - link "Home" [ref=e126] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/
      - generic [ref=e127]: "|"
      - link "Feedback" [ref=e128] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e129]: "|"
      - link "Contact" [ref=e130] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e131]: "|"
      - link "Privacy Policy" [ref=e132] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e133]: "|"
      - link "Site Map" [ref=e134] [cursor=pointer]:
        - /url: https://www.testautomationstudio.com/sitemap/
    - generic [ref=e136]: copyright © testautomationstudio.com 2026
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | 
  3  | 
  4  | test('Mouse Action', async ({ page }) => {
  5  |     await page.goto("https://www.testautomationstudio.com/demo/actions/#");
> 6  |     expect(page.title).toBe("Test Automation Studio Demo Website : Mouse & Keyboard Actions");
     |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  7  |     await page.locator('//input[@value="Single Click Button"]').click({ button: "left" })
  8  |     const a1 = page.locator('#action1Status').textContent();
  9  |     await expect(a1).toBe("Action 1 Click");
  10 | 
  11 |     await page.locator('//input[@value="Double Click Button"]').dblclick();
  12 |     const a2 = page.locator('#action1AStatus').textContent();
  13 |     await expect(a2).toBe("Action 1 Double Click");
  14 | 
  15 |     await page.locator('#action3').click({ button: "right" });
  16 |     const a3 = page.locator('#action3Status').textContent();
  17 |     await expect(a3).toBe("Context Click on Textbox");
  18 | 
  19 | 
  20 | })
```