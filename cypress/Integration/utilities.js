export default class utilities {

    element = {

        toast: () => cy.get('.Toastify__toast-body > :nth-child(2)')
    }

    url = {
        'Favorites': '/learning/favourites'
    }
    selectLanguage(language) {
        cy.get('#menu-button').click();
        cy.get('#menu-item-' + language).click({ force: true });
    }
    verifyToastMessage(message) {
        this.element.toast()
            .should('be.visible')
            .should('have.text', message)
    }
    generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    navigateTo(tabName) {
        cy.visit(this.url[tabName])
    }
    choosePaymentMethod(method) {
        cy.get('button').contains(method).click()
    }
}
