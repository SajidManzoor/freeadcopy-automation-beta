export default class searchPopupElement {

    element = {
        searchResult: () => cy.get('.mx-2 > :nth-child(1) > .cursor-pointer'),
        emailTag: () => cy.get('.flex-wrap > .text-\\[\\#52AA8A\\]'),
        facebookTag: () => cy.get('.text-\\[\\#77b9e8\\]').contains('Facebook'),       //.flex-wrap> div:nth-of-type(2)
        youtubeTag: () => cy.get('.flex-wrap> div:nth-of-type(3)').contains('YouTube'),
        miscTag: () => cy.get('.flex-wrap> div:nth-of-type(4)').contains('Misc'),
        marketRshTag: () => cy.get('.flex-wrap> div:nth-of-type(5)').contains('Market'),
        advertorialTag: () => cy.get('.flex-wrap> div:nth-of-type(6)').contains('Advertorial'),
        
    }

}