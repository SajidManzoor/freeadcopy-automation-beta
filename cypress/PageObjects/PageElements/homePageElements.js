export default class homePageElements {

    element = {
        login_Navbar: () => cy.get('.-top-50 > .text-\\[16px\\]'),      //''a.px-4
        signup_button: () => cy.get('p.text-sm > .text-sm'),
        getStarted_nav: () => cy.contains('Get Started'),
        target_input: () => cy.get('#target_input'),
        problem_input: () => cy.get('[name=problem]'),
        dislike_input: () => cy.get('[name=dislike]'),
        uniqueSolution_input: () => cy.get('[name=uniqueSolution]'),
        howUniqueWork_input: () => cy.get('[name=howUniqueWork]'),
        research_input: () => cy.get('[name=research]'),
        testimonials_input: () => cy.get('[name=testimonials]'),
        role_dropdown: () => cy.get('[name=role]'),
        getAd_button: () => cy.get('[type=button]').contains("Get Your Free Ad Now"),
        getStarted_button: () => cy.get('button#target_input'),

    }
}