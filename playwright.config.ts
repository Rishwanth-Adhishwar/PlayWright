import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const envName = process.env.ENV;

dotenv.config({
  path: `./env/.env.${envName}`
});

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  timeout: 60 * 1000, // 60 seconds

  // Timeout for expect assertions
  expect: {
    timeout: 10 * 1000, // 10 seconds
  },

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  reporter: [
    ['html'],
    ['allure-playwright']
  ],
});