import cards from '../config/cards.config';

Feature('Payment Tests');

Before(({I}) => {
    I.openSite();
});

Scenario('Successful Payment', ({ I }) => {
    I.enterCardDetails(cards.ValidCard);
    I.attemptToPay();
    I.switchTo();
    I.see('Payment success', '.CheckoutOverlay');
});

Scenario('Payment Declined', ({ I }) => {
    I.enterCardDetails(cards.DeclinedCard);
    I.attemptToPay();
    I.see('Your card was declined. Please try a different card.');
});

Scenario('Successful Payment after Authentication', ({ I }) => {
    I.enterCardDetails(cards.AuthenticationRequiredCard);
    I.attemptToPay();
    I.failAuthentication();
    I.see('We are unable to authenticate your payment method.')
});

Scenario('Declined Payment after Authentication', ({ I }) => {
    I.enterCardDetails(cards.AuthenticationRequiredCard);
    I.attemptToPay();
    I.completeAuthentication();
    I.see('Payment success', '.CheckoutOverlay');
});