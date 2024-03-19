import loginPageElements from "../PageElements/loginPageElements"
import adsPageElements from "../PageElements/adsPageElements"

const loginElements = new loginPageElements()
const adsElements = new adsPageElements()

export default class adsPageMethods {

    fillAdsForm(TargetMarket, PainPoint, DislikeSol, UniqueSol) {
        // cy.url()
        // .should('include', '/generate-ads')
        adsElements.element.targetMarket_Field().type(TargetMarket);
        adsElements.element.painPoint_Field().type(PainPoint)
        adsElements.element.dislikeSol_Field().type(DislikeSol)
        adsElements.element.uniqueSol_Field().type(UniqueSol)
        cy.get('.rt-reset').click()
        cy.get("select").first().select('en',{force:true})
    }
    fillAdsFormMarketRes(TargetMarket, UniqueSol) {
        // cy.url()
        // .should('include', '/generate-ads')
        adsElements.element.targetMarket_Field().type(TargetMarket);
        adsElements.element.uniqueSol_Field().type(UniqueSol)
        cy.get('.rt-reset').click()
        cy.get("select").first().select('en',{force:true})
    }
    enterData(data) {
        adsElements.element.targetMarket_Field().type(data)
    }
    selectLanguage(){
        adsElements.element.language_dropdown().select('English')
    }

    selectGenerateAdBtn() {
        adsElements.element.generate_Btn().click()
    }
    verifyNotify(ToastMessage) {
        loginElements.element.toast()
            .should('be.visible')
            .should('have.text', ToastMessage)

    }
}