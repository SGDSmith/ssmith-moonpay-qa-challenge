const { I, stripeCheckoutPage, secure3DPage } = inject();

// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    openSite() {
      this.amOnPage('https://checkout.stripe.dev/preview');
      this.waitForElement('#checkout-demo', 5);
      this.wait(3);
    },

    enterCardDetails(card) {
      this.switchTo('#checkout-demo');
      stripeCheckoutPage.completeOrderForm(card);
    },

    attemptToPay() {
      stripeCheckoutPage.attemptToPay();
    },

    failAuthentication() {
      this.switchTo();
      this.waitForElement('#challengeFrame', 10);
      this.switchTo('#challengeFrame');
      secure3DPage.failAuthentication();
      this.switchTo('#checkout-demo');
    },

    completeAuthentication() {
      this.switchTo();
      this.waitForElement('#challengeFrame', 10);
      this.switchTo('#challengeFrame');
      secure3DPage.completeAuthentication();
      this.switchTo();
    }

  });
}