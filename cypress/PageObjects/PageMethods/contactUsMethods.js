import contactUsElements from "../PageElements/contactUsElements"

var contactUs = new contactUsElements()

export default class contactUsMethods {
    sendBugReport(message) {
        contactUs.elements.message_textbox().type(message)
        contactUs.elements.sendMessage_button().click()
    }
    verifyBugReport() {
        contactUs.elements.toast_text()
            .should('be.visible')
            .should('have.text', 'Feedback Sent')
    }

}