import dashBoardElements from "../PageElements/dashBoardElements"
import loginPageElements from "../PageElements/loginPageElements"
import adsPageMethods from "../../PageObjects/PageMethods/adsPageMethods";

const dashBoardElement = new dashBoardElements()
const loginElements = new loginPageElements()
const adsPage = new adsPageMethods()

export default class dashBoardMethods {
    navigate() {
        cy.visit('/dashboard')
        cy.url()
            .should('include', '/dashboard')
    }
    selectTemplateTab() {
        dashBoardElement.element.template_Tab().click({ force: true })
        cy.url()
            .should('include', '/templates')
        // .should('be.focused')

    }
    selectTemplateCategory() {
        dashBoardElement.element.template_category().click()
    }
    selectFBTemplate() {
        dashBoardElement.element.template_fb().click()
    }
    //Email
    selectEmailCategory() {
        dashBoardElement.element.email_category().click({ force: true })
        cy.url()
            .should('include', '/templates')
    }
    selectEmailSequence() {
        dashBoardElement.element.emailSequence()
            .first()
            .click({ force: true })
        cy.url()
            .should('include', 'subcategory')
    }
    selectEmailTemplate() {
        cy.get('.text-gray-500.font-semibold')
            .first()
            .contains('Templates')
            .should('be.visible')

        dashBoardElement.element.emailTemplate()
            .click()
    }
    selectTemplate(TemplateName) {
        dashBoardElement.element.template().contains(TemplateName).click({ force: true })
    }
    //YouTube
    selectYoutubeCategory() {
        dashBoardElement.element.youtube_category().click({ force: true })
        cy.url()
            .should('include', '/youtube-ads')

        dashBoardElement.element.bredcrumb_Youtube().should('be.visible')
    }
    selectYoutubeTemplate() {
        dashBoardElement.element.youtubeTemplate().click()
    }
    //Market Research
    selectMarketResCategory() {
        dashBoardElement.element.marketRes_category().click({ force: true })
        cy.url()
            .should('include', '/market-research')

        dashBoardElement.element.bredcrumb_MarketRes().should('be.visible')
    }
    selectMarketResTemplate() {
        dashBoardElement.element.marketTemplate().click()
    }
    //Misc
    selectMiscCategory() {
        dashBoardElement.element.misc_category().click({ force: true })
        cy.url()
            .should('include', '/misc')

        dashBoardElement.element.bredcrumb_Misc().should('be.visible')
    }
    selectMiscTemplate() {
        dashBoardElement.element.miscTemplate().click()
    }
    //Advertorial
    selectAdvertorialCategory() {
        dashBoardElement.element.advertorial_category().dblclick({ force: true })
        cy.url()
            .should('include', '/advertorial')
        dashBoardElement.element.bredcrumb_Advert().should('be.visible')
    }
    selectAdvertorialTemplate() {
        dashBoardElement.element.advertorialTemplate().click()
    }
    clickProfileIcon() {
        dashBoardElement.element.profile_icon()
            .should('be.visible')
            .click()
    }
    selectSettingsTab() {
        dashBoardElement.element.settings_tab().click()
        cy.url()
            .should('include', '/settings')
    }
    selectReportBugTab() {
        dashBoardElement.element.reportBug_tab().click()
    }
    selectSignoutTab() {
        dashBoardElement.element.signout_tab().click()
    }
    verifyAd() {
        dashBoardElement.element.ad_content().should('be.visible')
    }
    selectMyAdsOption() {
        dashBoardElement.element.myAds_option().click()
    }
    selectSavedAd() {
        dashBoardElement.element.ad_select().click()
    }
    editAd() {
        dashBoardElement.element.edit_icon().should('be.visible').click()
    }
    selectSaveBtn() {
        dashBoardElement.element.save_btn().should('be.visible').click()
    }
    toastNotify(toastMessage) {
        loginElements.element.toast().should('have.text', toastMessage)  //'Feedback Sent'
    }
    submitBugReport(BugDetail) {
        dashBoardElement.element.report_Bug().type(BugDetail)
        dashBoardElement.element.reportSubmit_btn().click()
    }
    selectLearningTab() {
        dashBoardElement.element.learning_Tab().click()
    }
    selectVideo() {
        dashBoardElement.element.freeVideo().click()
        cy.url().should('include', '/course')
        // cy.wait(10000)
        cy.reload()
        cy.get('video')
            .first()
            .should('be.visible')
            .and('have.prop', 'readyState', 4)
            .and('have.prop', 'paused', true)
            .and('have.prop', 'ended', false)
            .then(($video) => {
                $video[0].play()
            })

        cy.get('video')
            .first()
            .should('have.prop', 'paused', false)
            .and('have.prop', 'ended', false)
    }
    clickSearchTemplate() {
        dashBoardElement.element.search_bar().click()

    }
    enterTemplate(template) {
        dashBoardElement.element.searchField().type(template)
        cy.get('.mx-2 > :nth-child(1) > .cursor-pointer > .flex').click()
        cy.get('.text-\\[16px\\]')
            .should('contain', template)
    }
    selectNewestTemplate() {
        dashBoardElement.element.newestTemplate().click()
        //searchElement.element.searchResult().click({force:true})
    }
    selectNew(TargetMarket, PainPoint, DislikeSol, UniqueSol) {

        const numberOfClicks = dashBoardElement.element.newest().its('length')
            .then(numberOfClicks => {
                cy.log(numberOfClicks)
                for (let i = 1; i < numberOfClicks + 1; i++) {
                    dashBoardElement.element.newest_template(i).click()
                    adsPage.fillAdsForm(TargetMarket, PainPoint, DislikeSol, UniqueSol);
                    cy.get('.rt-reset').click()
                    cy.get("select").first().select('en', { force: true })
                    adsPage.selectGenerateAdBtn()
                    this.verifyAd()
                    cy.get('.space-y-4>.flex-1 > a:nth-child(1)')
                        .should('be.visible').click({ force: true })
                }
            })
    }


    verifyDashboardLanguage(language = 'en') {
        cy.url().should('include', '/dashboard')
        var greetings = {
            'en': 'Good',
            'es': 'Bien',
            'fr': 'Bien',
            'de': 'Gut',
            'it': 'Buono',
            'pt': 'Bom',
            'idn': 'Baik',
            'ru': 'Отлично',
            'pol': 'Dobry',
            'uk': 'Добре',
        }
        dashBoardElement.element.greetings_text()
            .should('contain', greetings[language])
    }

    selectFirstTemplate() {
        dashBoardElement.element.firstTemplate().click()
    }
    getCreditsCount() {
        dashBoardElement.element.credits_text()
            .should('be.visible')
            .invoke('text')
            .as('textFunction')
        return this.textFunction
    }
    clickBuyCredits() {
        dashBoardElement.element.buyCredits_btn().click()
    }
    checkCreditsDifference(alias, difference) {
        // if (difference.startsWith('@')) {
        //     cy.get(alias).then((text1) => {
        //         cy.get(difference).then((text2) => {

        //             dashBoardElement.element.credits_text()
        //             .should('be.visible')
        //             .should('have.text', (Number(text2.split(" ")[0]) + Number(text1.split(" ")[0])) + ' Credits')
        //             expect(text1).to.eq(text2); // Assert their equality

        //         });
        //     });
        // cy.get(alias).then(text => {
        //     text1=text
        //     cy.get(difference).then(text => {
        //       text2=text
        //         expect(text1).to.equal(text2);
        //     });
        // })
        // }
        // else {
        cy.get(alias).then(text => {

            dashBoardElement.element.credits_text()
                .should('be.visible')
                .should('have.text', (Number(text.split(" ")[0]) + difference) + ' Credits')
        })
        // }
    }
    checkCreditsIncrease(alias) {
        cy.get(alias).then(text => {
            cy.log("log is ", text)
            text = text.split(" ")[0]
            dashBoardElement.element.credits_text()
                .should('be.visible')
                .should('be.greaterThan', (Number(text.split(" ")[0]) + 1) + ' Credits')
        })
    }

}
