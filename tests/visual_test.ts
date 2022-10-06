Feature('Visual Test');

Scenario('Stripe Checkout Visual Test', ({ I }) => {

    I.openSite();
    I.saveScreenshot("StripeCheckout_Page_Current.png");
    //I.seeVisualDiff("StripeCheckout_Page.png");

});
