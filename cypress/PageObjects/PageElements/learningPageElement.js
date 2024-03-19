export default class learningPageElements {

    element = {

        unlockBtn: () => cy.get('.my-10>.bg-indigo-500'),
        videoTitle: () => cy.get('.grid>.relative:nth-child(1)>.relative>.flex> p'),
        addFavoriteBtn: () => cy.get('.my-10>.border:nth-child(2)'),
        favouriteIcon: () => cy.get('.mt-4 > path'),
        videoList: () => cy.get('.justify-start')
    }

}