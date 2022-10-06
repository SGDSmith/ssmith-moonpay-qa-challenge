import visualTestConfig from '../config/visualtest.config';

Feature('Visual Test');

Scenario('Stripe Checkout Visual Test', ({ I }) => {

    if(visualTestConfig.RunVisualTests === 'true') {
        if(visualTestConfig.VisualTestFW === 'resemblejs') {
            I.openSite();
            I.wait(5);
            I.saveScreenshot("StripeCheckout_Page.png");
            I.seeVisualDiff("StripeCheckout_Page.png", {tolerance: 1});
        }
        else {
            Scenario.skip;
        }
    }
    else {
        Scenario.skip;
    }
});
