const { I } = inject();

module.exports = {

    fields: {
        email: '#email',
        cardNumber: '#cardNumber',
        expiryDate: '#cardExpiry',
        cvc: '#cardCvc',
        name: '#billingName',
        country: '#billingCountry',
        postCode: '#billingPostalCode'
    },
    payButton: {css: "[data-testid='hosted-payment-submit-button']"},
    failButton: {css: '#test-source-fail-3ds'},
    completeButton: {css: '#test-source-authorize-3ds'},

    completeOrderForm(cardNumber) {
        I.fillField(this.fields.email, 'Bob@test.com');
        I.fillField(this.fields.cardNumber, cardNumber);
        I.fillField(this.fields.expiryDate, '1228');
        I.fillField(this.fields.cvc, '123');
        I.fillField(this.fields.name, 'Bob Smith');
        I.selectOption(this.fields.country, 'United Kingdom');
        I.fillField(this.fields.postCode, 'EH4 EGA');
    },

    attemptToPay() {
        I.click(this.payButton);
        I.wait(3);
    },

    failAuthenticationCheck() {
        I.click(this.failButton);
    },
    
      completeAuthenticationCheck() {
        I.click(this.completeButton);
    }

}
