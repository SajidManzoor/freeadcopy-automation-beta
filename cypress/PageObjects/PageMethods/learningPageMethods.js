import learningPageElements from "../PageElements/learningPageElement"
import dashBoardElements from "../PageElements/dashBoardElements"
import utilities from "../../Integration/utilities"

const learningElement = new learningPageElements
const dashboardElement = new dashBoardElements
const utils = new utilities()


export default class learningPageMethods {

    clickUnlockBtn() {
        learningElement.element.unlockBtn().click()
    }
    verifyVideoTitle() {
        learningElement.element.videoTitle().should('have.text', 'videoTitle')
    }
    clickAddFavoriteBtn() {
        learningElement.element.addFavoriteBtn().click()
    }
    clickFavIcon() {
        learningElement.element.favouriteIcon().click()
        var text1;
        cy.get('.flex-row > .font-bold').invoke('text')
            // .invoke("text")
            .then((text) => {

                cy.log("Text", text).then(() => {


                    // return text;
                })
                    .then(() => {
                        utils.verifyToastMessage('Added To Favorites')

                        // utils.navigateTo('Favorites')
                        // learning.verifyFavVideo(title)

                        cy.get('.lucide-file-heart').click()

                        // learningElement.element.videoTitle()
                        //     .should('contain.text', text)
                        // learningElement.element.videoTitle()
                        //     .click()
                        learningElement.element.videoList()
                            .should('contain.text', text)
                        learningElement.element.videoList()
                            .contains(text)
                            .click()

                        cy.url()
                            .should('include', '/course')
                        learningElement.element.favouriteIcon().click()
                        utils.verifyToastMessage('Removed From Favorites')

                    })
            })
    }
    // cy.log("text1", text1)
    // return
    // return text
    // .then(text => {
    //     cy.log(text)
    //     return text
    // })

    verifyFavVideo(title) {
        learningElement.element.videoTitle().should('have.text', title)
    }

}


