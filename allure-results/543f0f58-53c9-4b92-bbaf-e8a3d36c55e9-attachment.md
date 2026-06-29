# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameterization.test.ts >> Bing search test >> search Flow - playwright
- Location: tests\parameterization.test.ts:11:9

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.bing.com/
Call log:
  - navigating to "https://www.bing.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - main [ref=e16]:
    - generic [ref=e18]:
      - heading "Microsoft Logo Image" [level=1] [ref=e19]:
        - img "Microsoft Logo Image" [ref=e20] [cursor=pointer]
      - navigation [ref=e28]:
        - menubar [ref=e29]:
          - menuitem "Copilot" [ref=e30] [cursor=pointer]:
            - link "Copilot" [ref=e31]:
              - /url: /chat?FORM=hpcodx&intent=bing
              - generic [ref=e33]: Copilot
          - menuitem "Images" [ref=e34] [cursor=pointer]:
            - link "Images" [ref=e35]:
              - /url: /images?FORM=Z9LH
          - menuitem "Videos" [ref=e36] [cursor=pointer]:
            - link "Videos" [ref=e37]:
              - /url: /videos?FORM=Z9LH1
          - menuitem "Shopping" [ref=e38] [cursor=pointer]:
            - link "Shopping" [ref=e39]:
              - /url: /shop?FORM=Z9LHS4
          - menuitem "Maps" [ref=e40] [cursor=pointer]:
            - link "Maps" [ref=e41]:
              - /url: /maps?FORM=Z9LH2
          - menuitem "News" [ref=e42] [cursor=pointer]:
            - link "News" [ref=e43]:
              - /url: /news/search?q=Top+stories&nvaug=%5bNewsVertical+Category%3d%22rt_MaxClass%22%5d&FORM=Z9LH3
          - menuitem ". . . More" [ref=e44] [cursor=pointer]:
            - text: . . .
            - button "More" [ref=e45]
    - search [ref=e47]:
      - img [ref=e49] [cursor=pointer]
      - combobox "Enter your search here - Search suggestions will show as you type" [active] [ref=e53]
      - button "Search using voice" [ref=e56] [cursor=pointer]:
        - img [ref=e57]
      - button "Search using an image" [ref=e61] [cursor=pointer]
      - link "Open Copilot" [ref=e62] [cursor=pointer]:
        - /url: /chat?FORM=hpcodx&intent=bing
      - group "Languages:" [ref=e66]:
        - generic [ref=e67]: "Languages:"
        - link "Hindi" [ref=e68] [cursor=pointer]:
          - /url: /?setlang=hi&cc=in&cc=IN
          - text: हिंदी
        - link "Bangla" [ref=e69] [cursor=pointer]:
          - /url: /?setlang=bn&cc=in&cc=IN
          - text: বাংলা
        - link "Urdu" [ref=e70] [cursor=pointer]:
          - /url: /?setlang=ur&cc=in&cc=IN
          - text: اردو
        - link "Punjabi (Gurmukhi)" [ref=e71] [cursor=pointer]:
          - /url: /?setlang=pa-guru&cc=in&cc=IN
          - text: ਪੰਜਾਬੀ
        - link "Marathi" [ref=e72] [cursor=pointer]:
          - /url: /?setlang=mr&cc=in&cc=IN
          - text: मराठी
        - link "Telugu" [ref=e73] [cursor=pointer]:
          - /url: /?setlang=te&cc=in&cc=IN
          - text: తెలుగు
        - link "Tamil" [ref=e74] [cursor=pointer]:
          - /url: /?setlang=ta&cc=in&cc=IN
          - text: தமிழ்
        - link "Kannada" [ref=e75] [cursor=pointer]:
          - /url: /?setlang=kn&cc=in&cc=IN
          - text: ಕನ್ನಡ
        - link "Gujarati" [ref=e76] [cursor=pointer]:
          - /url: /?setlang=gu&cc=in&cc=IN
          - text: ગુજરાતી
        - link "Malayalam" [ref=e77] [cursor=pointer]:
          - /url: /?setlang=ml&cc=in&cc=IN
          - text: മലയാളം
        - link "Odia" [ref=e78] [cursor=pointer]:
          - /url: /?setlang=or&cc=in&cc=IN
          - text: ଓଡ଼ିଆ
  - generic [ref=e81]:
    - generic [ref=e83]:
      - generic:
        - generic:
          - link "Get the Bing Wallpaper app":
            - /url: https://go.microsoft.com/fwlink/?linkid=2127455
            - generic: Get the Bing Wallpaper app
        - 'heading "Image of the day: Bora Bora and its lagoon, South Pacific, French Polynesia" [level=3]':
          - 'link "Image of the day: Bora Bora and its lagoon, South Pacific, French Polynesia"':
            - /url: /search?q=International+Day+of+the+Tropics&form=hpcapt&filters=HpDate:"20260628_1830"+mgzv3configlist:"BingQA_Encyclopedia_Layout"
            - text: Bora Bora and its lagoon, South Pacific, French Polynesia
        - generic:
          - generic: © Frederick Millett/Shutterstock
          - list:
            - listitem:
              - button "Download this image. Use of this image is restricted to wallpaper only."
      - generic [ref=e84]:
        - link "Born on fire, held by water" [ref=e86] [cursor=pointer]:
          - /url: /search?q=International+Day+of+the+Tropics&form=hpcapt&filters=HpDate:"20260628_1830"+mgzv3configlist:"BingQA_Encyclopedia_Layout"
          - img [ref=e88]
          - heading "Born on fire, held by water" [level=2] [ref=e91]
        - generic [ref=e92] [cursor=pointer]:
          - status [ref=e93]
          - button "Previous image" [disabled] [ref=e94]
          - button "Next image" [disabled] [ref=e96]
    - generic:
      - complementary
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
  9  | test.describe("Bing search test", () => {
  10 |     for (const sd of searchData) {
  11 |         test(`search Flow - ${sd.keyword}`, async ({ page }) => {
> 12 |             await page.goto("https://www.bing.com/");
     |                        ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.bing.com/
  13 | 
  14 |             await page.locator("textarea[name='q'], input[name='q']").fill(sd.keyword);
  15 | 
  16 |             await page.locator("input[type='submit']").click();
  17 | 
  18 |             const firstResult = page.locator("h2 a").first();
  19 | 
  20 |             await expect(firstResult).toBeVisible();
  21 |             await firstResult.click();
  22 | 
  23 |             await expect(page).toHaveTitle(new RegExp(sd.expectedTitle, "i"));
  24 |         });
  25 |     }
  26 | });
```