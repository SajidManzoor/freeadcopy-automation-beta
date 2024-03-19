import loginPageElements from "../PageElements/loginPageElements"

const loginElements = new loginPageElements()

export default class loginPageMethods {

    enterEmail(email) {
        loginElements.element.emailField().type(email)
    }
    enterPassword(password) {
        loginElements.element.passwordField().type(password)
    }
    signinBtn() {
        loginElements.element.signinBtn().click()
    }
    loginValidation() {
        loginElements.element.welcome_text().should('be.visible')
    }
    toastNotification(ToastMessage) {
        loginElements.element.toast().should('have.text', ToastMessage)
    }

    loginBtnValidation() {
        loginElements.element.signinBtn().should('be.disabled')
    }
    selectTemplate() {
        loginElements.element.template()
            .first()
            .click({ force: true })
    }
    selectField() {
        loginElements.element.target_Field().type("digital")
    }
    selectButton() {
        loginElements.element.generate_Btn().click()
    }
    verifyLoginToast(language = 'en') {
        var toastMessage = {
            'en': 'Login successful',
            'es': 'Inicio de sesión exitoso',
            'fr': 'Connexion réussie',
            'de': 'Anmeldung erfolgreich',
            'it': 'Accesso riuscito',
            'pt': 'Login realizado com sucesso',
            'idn': 'Login berhasil',
            'ru': 'Connexion réussie',
            'pol': 'Pomyślnie zalogowano',
            'uk': 'Успішний вхід',
        }
        loginElements.element.toast().should('have.text', toastMessage[language])
    }
    clickGoogleSignin() {
        loginElements.element.google_signin_btn().click()
    }
    verifyLoginFailure(language = 'en') {
        var toastMessage = {
            'en': 'Login successful',
            'es': 'Inicio de sesión exitoso',
            'fr': 'Connexion réussie',
            'de': 'Anmeldung erfolgreich',
            'it': 'Accesso riuscito',
            'pt': 'Login realizado com sucesso',
            'idn': 'Login berhasil',
            'ru': 'Connexion réussie',
            'pol': 'Pomyślnie zalogowano',
            'uk': 'Успішний вхід',
        }
        loginElements.element.toast()
            .should('not.have.text', toastMessage[language])
    }
}
