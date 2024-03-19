import utilities from "../../Integration/utilities";
import loginPageElements from "../PageElements/loginPageElements";
import settingsPageElements from "../PageElements/settingsPageElement";
import dashBoardElements from "../PageElements/dashBoardElements";

const dashBoardElement = new dashBoardElements()
const settingsPageElement = new settingsPageElements()
const loginElements = new loginPageElements()
const utils = new utilities()

export default class settingsPageMethods {
    updateUsername() {
        settingsPageElement.element.userName_Field().clear().type(" ASD");
        settingsPageElement.element.updateSettings_Button().click()
    }
    updateNotification() {
        loginElements.element.toast().should('have.text', 'Profile Updated')
    }
    updateUsername(username) {
        // var text=utils.generateRandomString(5)+" "+utils.generateRandomString(5)
        settingsPageElement.element.userName_Field()
            .clear()
            .type(username);

        settingsPageElement.element.updateSettings_Button().click()
        
        settingsPageElement.element.userName_Field()
            .should('be.visible')
        cy.reload()
        settingsPageElement.element.userName_Field()
            .should('be.visible')
            .should('have.value', username)
    }
    passwordSettingTab() {
        settingsPageElement.element.passwordSetting_Tab().click();
    }
    updatePassword(Current, New, Confirm) {
        settingsPageElement.element.passwordSetting_Tab().click();
        settingsPageElement.element.password_Field()
            .should('be.visible')
            .clear()
            .type(Current);
        settingsPageElement.element.newPassword_Field()
            .should('be.visible')
            .clear()
            .type(New);
        settingsPageElement.element.confirmPassword_Field()
            .should('be.visible')
            .clear()
            .type(Confirm);
    }
    clickUpdatePasswordBtn() {
        settingsPageElement.element.updatePassword_Button().click();
    }
    verifyPasswordUpdate() {
        loginElements.element.toast().invoke('text').then((text) => {
            expect(text).not.to.include('Password Updated');
        });
    }
    selectLanguage(language) {
        settingsPageElement.element.language_dropdown().click()
        cy.get('#menu-item-' + language).click({ force: true })
    }
    verifyLanguage(language) {
        var lang = {
            'en': 'Account Settings',
            'es': 'Configuración de cuenta',
            'fr': 'Paramètres du compte',
            'de': 'Kontoeinstellungen',
            'it': 'Impostazioni Account',
            'pt': 'Configurações da Conta',
            'idn': 'Pengaturan Akun',
            'ru': 'Настройки аккаунта',
            'pol': 'Ustawienia konta',
            'uk': 'Налаштування облікового запису',
        }
        settingsPageElement.element.accountSettings_Text()
            .should('be.visible')
            .should('have.text', lang[language])
    }
    selectTab(tab) {
        settingsPageElement.element.tabList().contains(tab).click()
    }
    clickUpgradePlan() {
        settingsPageElement.subscription.upgradePlan_btn().click()
    }
    selectAnyPlan() {
        // cy.log("previous elements", settingsPageElement.subscription.upgrade_btnList()
        //     .first()
        //     .prev()
        //     .prev()
        // )
        settingsPageElement.subscription.upgrade_btnList()
            .first()
            .prev()
            .prev()
            .invoke('text')
            .then((text) => {
                cy.log("previous elements", text)
                this.diff = text.split(" ")[0]
                cy.log('diff', this.diff)

            })

        settingsPageElement.subscription.upgrade_btnList()
            .first()
            .click()
    }

    checkCreditsDifference(alias, difference = this.diff) {
        dashBoardElement.element.credits_text()
            .should('be.visible')
        // cy.reload()
        cy.visit('/dashboard')
        dashBoardElement.element.credits_text()
            .should('be.visible')
        cy.log('difference', difference)

        cy.get(alias).then(text => {
            // cy.reload()
            cy.visit('/dashboard')
            dashBoardElement.element.credits_text()
                .should('be.visible')
                .should('have.text', (Number(text.split(" ")[0]) + Number(difference)) + ' Credits')
        })
    }


}
