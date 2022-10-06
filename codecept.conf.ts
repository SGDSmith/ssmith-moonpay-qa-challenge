export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://checkout.stripe.dev/preview',
      show: false,
      browser: 'chromium',
      waitForAction: 200
    },
    ResembleHelper: {
      require: "codeceptjs-resemblehelper",
      screenshotFolder: "./output/",
      baseFolder: "./tests/screenshots/base/",
      diffFolder: "./tests/screenshots/diff/"
    }
  },
  include: {
    I: './steps/steps_file.js',
    stripeCheckoutPage: './pages/stripeCheckoutPage.ts'
  },
  name: 'ssmith-moonpay-qa-challenge',
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    }
  }
}