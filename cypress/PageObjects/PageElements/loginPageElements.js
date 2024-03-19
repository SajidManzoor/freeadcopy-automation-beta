export default class loginPageElements {

    element = {
        emailField: () => cy.get('#email'),
        passwordField: () => cy.get('#password'),
        signinBtn: () => cy.get('button[type="submit"]'),
        toast: () => cy.get('.Toastify__toast-body > :nth-child(2)'),
        welcome_text: () => cy.get('.p-4 > .text-2xl'),
        template_option: () => cy.get('.flex-1 > a:nth-child(3)'),

    }

}