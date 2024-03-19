export default class contactUsElements {
    elements =
        {
            message_textbox: () => cy.get('#message'),
            sendMessage_button: () => cy.get('[type=submit]').contains('Send message'),
            toast_text: () => cy.get('.Toastify__toast-body > :nth-child(2)')
        }
}