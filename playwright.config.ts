import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration
 * ========================
 * This file controls:
 * - Test location
 * - Timeout
 * - Browser
 * - Headless / Headed
 * - Retries
 * - Workers
 * - Parallel execution
 * - Screenshots
 * - Videos
 * - Trace
 * - Reports
 * - Base URL
 * - Browser context
 * - Projects
 */

export default defineConfig({

  // ============================================================
  // 1. TEST DIRECTORY
  // ============================================================
  // Location where your test files are present

  testDir: './tests',


  // ============================================================
  // 2. TEST FILE PATTERN
  // ============================================================
  // Playwright will execute files ending with .spec.ts

  testMatch: '**/*.spec.ts',

  // You can also use:
  // testMatch: '**/*.test.ts'


  // ============================================================
  // 3. TEST TIMEOUT
  // ============================================================
  // Maximum time allowed for one test

  timeout:50000,


  // ============================================================
  // 4. EXPECT TIMEOUT
  // ============================================================
  // Maximum time for expect() assertions

  expect: {
    timeout: 30 * 1000
  },


  // ============================================================
  // 5. FULL PARALLEL EXECUTION
  // ============================================================
  // true  = tests can run fully in parallel
  // false = tests are not fully parallel

  fullyParallel: true,


  // ============================================================
  // 6. WORKERS
  // ============================================================
  // Number of parallel workers

  workers: 2,

  // For CI you can use:
  // workers: process.env.CI ? 2 : undefined,


  // ============================================================
  // 7. FORBID ONLY
  // ============================================================
  // Prevent test.only() from accidentally being committed

  forbidOnly: false,
  retries: 0,
  //workers: 1,
  // ============================================================
  // 8. RETRIES
  // ============================================================
  // Retry failed tests

  //retries = 2


  // ============================================================
  // 9. OUTPUT DIRECTORY
  // ============================================================
  // Stores screenshots, videos, traces etc.

  outputDir: 'test-results/',


  // ============================================================
  // 10. REPORTERS
  // ============================================================

  reporter: [
    ['list'],

    [
      'html',
      {
        outputFolder: 'playwright-report',
        open: 'never'
      }
    ]
  ],


  // ============================================================
  // 11. GLOBAL USE CONFIGURATION
  // ============================================================

  use: {

    // --------------------------------------------------------
    // Base URL
    // --------------------------------------------------------
    // Now you can use:
    // await page.goto('/login');

    baseURL: 'https://www.amazon.com',


    // --------------------------------------------------------
    // Browser Mode
    // --------------------------------------------------------
    // true  = browser opens
    // false = headless

    headless: true,


    // --------------------------------------------------------
    // Action Timeout
    // --------------------------------------------------------
    // Timeout for click(), fill(), etc.

    actionTimeout: 30000,


    // --------------------------------------------------------
    // Navigation Timeout
    // --------------------------------------------------------
    // Timeout for page.goto(), reload(), etc.

    navigationTimeout: 30000,


    // --------------------------------------------------------
    // Screenshot
    // --------------------------------------------------------

    screenshot: 'only-on-failure',

    // Options:
    // 'off'
    // 'on'
    // 'only-on-failure'


    // --------------------------------------------------------
    // Video
    // --------------------------------------------------------

    video: 'retain-on-failure',

    // Options:
    // 'off'
    // 'on'
    // 'retain-on-failure'
    // 'on-first-retry'


    // --------------------------------------------------------
    // Trace
    // --------------------------------------------------------

    trace: 'on-first-retry',

    // Options:
    // 'off'
    // 'on'
    // 'retain-on-failure'
    // 'on-first-retry'


    // --------------------------------------------------------
    // Browser Context
    // --------------------------------------------------------

    viewport: {
      width: 1280,
      height: 720
    },


    // --------------------------------------------------------
    // Ignore HTTPS Errors
    // --------------------------------------------------------

    ignoreHTTPSErrors: true,


    // --------------------------------------------------------
    // User Agent
    // --------------------------------------------------------

    // userAgent: 'custom-user-agent',


    // --------------------------------------------------------
    // Locale
    // --------------------------------------------------------

    locale: 'en-US',


    // --------------------------------------------------------
    // Timezone
    // --------------------------------------------------------

    timezoneId: 'Asia/Kolkata',


    // --------------------------------------------------------
    // Geolocation
    // --------------------------------------------------------

    // geolocation: {
    //     latitude: 28.6139,
    //     longitude: 77.2090
    // },

    // permissions: ['geolocation'],


    // --------------------------------------------------------
    // HTTP Credentials
    // --------------------------------------------------------

    // httpCredentials: {
    //     username: 'admin',
    //     password: 'admin123'
    // },


    // --------------------------------------------------------
    // Extra HTTP Headers
    // --------------------------------------------------------

    // extraHTTPHeaders: {
    //     'Authorization': 'Bearer token'
    // },


    // --------------------------------------------------------
    // Accept Downloads
    // --------------------------------------------------------

    acceptDownloads: true,


    // --------------------------------------------------------
    // Color Scheme
    // --------------------------------------------------------

    colorScheme: 'light',

    // Options:
    // 'light'
    // 'dark'
    // 'no-preference'


    // --------------------------------------------------------
    // JavaScript
    // --------------------------------------------------------

    javaScriptEnabled: true
  },


  // ============================================================
  // 12. PROJECTS
  // ============================================================
  // Projects allow cross-browser testing

  projects: [

    // --------------------------------------------------------
    // Chromium
    // --------------------------------------------------------

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome']
      }
    },


    // --------------------------------------------------------
    // Firefox
    // --------------------------------------------------------

    {
      name: 'firefox',

      use: {
        ...devices['Desktop Firefox']
      }
    },


    // --------------------------------------------------------
    // WebKit
    // --------------------------------------------------------

    {
      name: 'webkit',

      use: {
        ...devices['Desktop Safari']
      }
    }
  ]
});