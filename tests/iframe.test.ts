
import { expect, test } from '@playwright/test';

test('@smoke frame1', async ({ page }) => {
    await page.goto('https://letcode.in/frame');
    const allFrames = page.frames()
    console.log(allFrames.length)
    const myFrame = page.frame('firstFr');
    await myFrame?.fill('//input[@name = "fname"]', "Rishwanth")
    await myFrame?.fill('//input[@name = "lname"]', "Adhishwar")
    const frame = page.frameLocator('//iframe[@name="firstFr"]')
    await expect(frame.locator('//p[@class="text-sm font-semibold text-center"]')).toContainText('Rishwanth')
    const innerFrame = frame.frameLocator('//iframe[@title="Inner Frame"]')
    await innerFrame.locator('(//input[@name = "email"])[1]').fill('titooram123@gmail.com');
});

test('frame2', async ({ page }) => {
    await page.goto('https://letcode.in/frame');

    const firstFrame = page.frameLocator('iframe[name="firstFr"]');

    await firstFrame.locator('input[name="fname"]').fill('Rishwanth');
    await firstFrame.locator('input[name="lname"]').fill('Adhishwar');

    await expect(
        firstFrame.locator('p.text-sm.font-semibold.text-center')
    ).toContainText('Rishwanth');

    const innerFrame = firstFrame.frameLocator('iframe[src="/innerframe"]');

    await innerFrame.locator('input[name="email"]').fill('ra@gmail.com');
});

