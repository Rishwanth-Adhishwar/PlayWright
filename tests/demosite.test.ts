import { test, expect } from '@playwright/test';
test('demoqa forms test', async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    const title = await page.title();
    await expect(title).toEqual("demosite");
    await page.getByPlaceholder("First Name").fill('');
    await page.getByPlaceholder("First Name").fill('Rishwanth');
    await page.getByPlaceholder("Last Name").fill('Adhishwar');
    await page.getByPlaceholder("name@example.com").fill("funbun@gmail.com");
    await page.locator('#gender-radio-1').click();
    await page.getByPlaceholder("Mobile Number").fill("8610146300");
    await page.locator('//input[@id="dateOfBirthInput"]').click();
    await page.locator('.react-datepicker__month-select').selectOption("1");
    await page.locator('.react-datepicker__year-select').selectOption("2005");
    await page.getByLabel('28').click();
    await page.locator('.subjects-auto-complete__input').fill("I am Rishwanth Adhishwar Working with this Website");
    await page.locator('#hobbies-checkbox-1').click();
    await page.locator('#uploadPicture').setInputFiles("test.png");
    await page.getByPlaceholder("Current Address").fill("R.S Puram Coimbatore");
    await page.getByRole('button', { name: 'submit' }).click();
    const exppected = await page.locator('.modal-title').textContent();
    await expect.soft(exppected).toContain("Thanks for submitting the form");

});