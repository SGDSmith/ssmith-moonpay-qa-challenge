export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://checkout.stripe.dev/preview',
      show: false,
      browser: 'chromium'
    }
  },
  include: {},
  name: 'ssmith-moonpay-qa-challenge'
}