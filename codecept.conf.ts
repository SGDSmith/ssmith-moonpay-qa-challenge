export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://checkout.stripe.dev/preview',
      show: true,
      browser: 'chromium',
      waitForAction: 200
    }
  },
  include: {
    I: './steps/steps_file.js',
    stripeCheckoutPage: './pages/stripeCheckoutPage.ts',
    secure3DPagePage: './pages/secure3DPage.js'
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