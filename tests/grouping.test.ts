import { test, expect } from "@playwright/test"

test.describe("Authentication", () => {
    test('login @smokes', async ({ page }) => { });
    test('logout @regressions', async ({ page }) => { });
});

test.describe("Shopping", () => {
    test('Search @smokes', async ({ page }) => { });
    test('Cart @regressions', async ({ page }) => { });
});
