export default class adsPageElements {

    element = {
        targetMarket_Field: () => cy.get('.relative > #target'),
        painPoint_Field: () => cy.get('.relative > #problem'),
        dislikeSol_Field: () => cy.get('.relative > #dislike'),
        uniqueSol_Field: () => cy.get('.relative > #uniqueSolution'),
        language_dropdown: () => cy.get('.rt-reset'),
        generate_Btn: () => cy.get('.gap-3 > .flex > #generate')
        
    }

}