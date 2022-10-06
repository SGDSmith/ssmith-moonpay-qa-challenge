Feature('Basket Tests');

Before(({I}) => {
    I.openSite();
});

Scenario('Basket is Displayed', ({ I }) => {
    I.viewMyBasket();
    I.seeElement('.App-productSummaryContainer');
});

Scenario('Basket can be Updated', ({ I }) => {
    I.viewMyBasket();
    I.updateItemQuantity();
    I.see('$260.00')
});
