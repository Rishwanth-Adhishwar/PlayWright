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

  retries: 2,

  workers: process.env.CI ? 1 : undefined,
  // testMatch: "tests/grouping.test.ts",

  //Each test
  timeout: 60 * 1000, // 60 seconds

  //For Running all test (E2E)
  globalTimeout: 30 * 60 * 1000,

  // repeatEach: 3,


  // Timeout for expect assertions
  expect: {
    timeout: 10 * 1000, // 10 seconds
  },

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on',
    video: 'retain-on-failure',
    actionTimeout: 15 * 1000,
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