import PricingElements from "../PageElements/pricingElements"
const pricing = new PricingElements()

export default class PricingMethods {
    clickOnOneTimePayment() {
        pricing.element.oneTimePayment_btn().click()
    }
    selectStripe() {
        pricing.element.stripe_btn().click()
    }
    enterStripePaymentDetails(cardNumber, expiryDate, cvv, name) {
        // cy.origin('https://checkout.stripe.com', {args: {cardNumber, expiryDate, cvv, name}}, () => {
        cy.origin('https://checkout.stripe.com', { args: { cardNumber, expiryDate, cvv, name } }, ({ cardNumber, expiryDate, cvv, name }) => {
            Cypress.on('uncaught:exception', () => { return false })
            // cy.get('#cardNumber').type('4242424242424242')
            cy.get('#cardNumber').type(cardNumber)

            // pricing.stripe.cardNumber().type(cardNumber)
            cy.get('#cardExpiry').type(expiryDate)
            cy.get('#cardCvc').type(cvv)
            cy.get('#billingName').type(name)
            cy.get('.SubmitButton-IconContainer').click()

            // pricing.stripe.cardExpiry().type(expiryDate)
            // pricing.stripe.cardCvc().type(cvv)
            // pricing.stripe.cardHolderName().type(name)
            // pricing.stripe.pay_btn().click()
            // cy.wait(20000)
            // cy.contains('Subscribe').click()
        })
        cy.url()
            .should('include', 'freeadcopy')
    }
    // enterPayPalPaymentDetails(email,password, cardNumber, expiryDate, cvv, name) {
    enterPayPalPaymentDetails(email, password) {
        cy.origin('https://www.sandbox.paypal.com', { args: { email,password } }, ({ email,password }) => {
            Cypress.on('uncaught:exception', () => { return false })
            cy.get('#email').type(email+'{enter}')
            cy.get('#password').type(password+'{enter}')
            cy.get('.btn').contains('Continue').click()
            cy.get('#confirmButtonTop').click()
            // cy.get('#cardNumber').type(cardNumber)
            // cy.get('#cardExpiry').type(expiryDate)
            // cy.get('#cardCvc').type(cvv)
            // cy.get('#billingName').type(name)
            // cy.get('.SubmitButton-IconContainer').click()
        })
        cy.url()
            // .should('include', '/dashboard')
            .should('include', 'freeadcopy')
        cy.wait(10000)

    }
}