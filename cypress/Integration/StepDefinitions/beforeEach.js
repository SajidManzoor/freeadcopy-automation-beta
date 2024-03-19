import csv from "neat-csv"
beforeEach(() => {

    cy.fixture("DataFile.csv")
        .then(csv)
        .then(function (data) {
            this.regData = data
        })
    cy.visit('/')
    Cypress.on('uncaught:exception', () => { return false })

});