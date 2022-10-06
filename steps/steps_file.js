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
      this.switchTo('iframe');
      this.switchTo('#challengeFrame.AuthorizeWithUrlApp-content');
      this.switchTo('iframe');
      stripeCheckoutPage.failAuthenticationCheck();
      this.switchTo();
      this.switchTo('#checkout-demo');
    },

    completeAuthentication() {
      this.switchTo('iframe');
      this.switchTo('#challengeFrame.AuthorizeWithUrlApp-content');
      this.switchTo('iframe');
      stripeCheckoutPage.completeAuthenticationCheck();
      this.switchTo();
    },

    viewMyBasket() {
      this.switchTo('#checkout-demo');
    },

    updateItemQuantity() {
      stripeCheckoutPage.updateQty(4);
    }

  });
}