export default class signupPageElements {

    element = {
        emailField: () => cy.get('.relative > input'),
        signIn_nav: () => cy.contains('Sign in')
        // signIn_nav: () => cy.get('[type="submit"]')

    }

}