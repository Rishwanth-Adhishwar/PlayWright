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
      - text: "Time: 2026-06-29T07:34:08Z"
      - text: "URL: https://www.google.com/search?q=playwright&sca_esv=2ab59e100257b972&source=hp&ei=6B9CasLsBru2vr0Pl8vE8Qo&iflsig=ABILxe8AAAAAakIt-OS0w4PiGo9UMZiV1GngCaCPaE5o&ved=0ahUKEwjCgO7a96uVAxU7m68BHZclMa4Q4dUDCDE&oq=playwright&gs_lp=Egdnd3Mtd2l6IgpwbGF5d3JpZ2h0MggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMggQABiABBixA0iKCFAAWABwAHgAkAEAmAHvAqAB7wKqAQMzLTG4AQzIAQD4AQGYAgGgApUEmAMAkgcDNC0xoAflBLIHAzQtMbgHlQTCBwM2LTHIB5UBgAgB&sclient=gws-wiz&sei=7h9Cap7UPJS2wN4PwbfvwAk"
```