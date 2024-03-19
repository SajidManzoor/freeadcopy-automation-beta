export default class PricingElements {
    element = {
        oneTimePayment_btn: () => cy.get('.w-full > .grid > .flex > .text-white'),
        stripe_btn: () => cy.contains('Check out with Stripe'),
    }
    stripe = {
        cardNumber: () => cy.get('#cardNumber'),
        cardExpiry: () => cy.get('#cardExpiry'),
        cardCvc: () => cy.get('#cardCvc'),
        cardHolderName: () => cy.get('#billingName'),
        pay_btn: () => cy.get('.SubmitButton-IconContainer'),
        // success_msg: () => cy.get('.text-center > .text-2xl'),
    }
}

