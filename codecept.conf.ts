export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://checkout.stripe.dev/preview',
      show: false,
      browser: 'chromium',
      waitForNavigation: 3,
      waitForAction: 200
    }
  },
  include: {
    I: './steps/steps.js',
    stripeCheckoutPage: './pages/stripeCheckoutPage.js'
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