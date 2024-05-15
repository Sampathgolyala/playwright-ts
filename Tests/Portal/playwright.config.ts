const { devices } = require('@playwright/test');    //Donot change to import module. Breaks the flow.
require('dotenv').config(); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.forbidOnly,
  workers: 1,// workers will be take from Pipeline variable given by user
  retries: 0,
  use: {
    trace: 'on-first-retry',
    actionTimeout:  30* 1000,
    navigationTimeout: 60 * 1000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    locale: process.env.locale,
    headless: false,
    browserName: process.env.browser,
    channel: process.env.browser,
    downloadsPath:__dirname,
    acceptDownloads: true,
    viewport: null,
    httpCredentials: {
      username: 'vialto',
      password: '4ZevAB23'
    },
    launchOptions: {
      //viewport: null,  
      viewport: { width: 1920, height: 1080 },
      args: ['--start-maximized', '--allow-running-insecure-content', '--disable-web-security', '--ignore-certificate-errors', '--remote-debugging-port=9222']
    },
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      //Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",

    },
  },

  globalTimeout: 150 * 100 * 1000,
  timeout: 15 * 60 * 1000,
  expect: {
    timeout: 12 * 10000,
  },
  reporter: [
    ['list', { printSteps: true }],
    ['allure-playwright', {outputFile: 'allure-results-' + process.env.customReportName + '/'}],
    ['json', { outputFile: 'testresults/' + process.env.customReportName + '.json' }],
    ['junit', { outputFile: 'testresults/' + process.env.customReportName + '-junit-xml.xml' }],
    ['./customReportGenerator.ts', { outputFile: process.env.customReportName, environment: 'windows 10+ chrome' }]
  ],
};
export default config;
