# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: skipexample.test.ts >> Login Test1
- Location: tests\skipexample.test.ts:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByRole('link', { name: 'Log out' })
Expected: ""
Received: "Log out"

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for getByRole('link', { name: 'Log out' })
    21 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "Log out"

```

```yaml
- link "Log out":
  - /url: "#"
```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```