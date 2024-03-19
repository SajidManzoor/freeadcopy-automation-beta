import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePageMethods from "../../PageObjects/PageMethods/homePageMethods";
import loginPageMethods from "../../PageObjects/PageMethods/loginPageMethods";
import dashBoardMethods from "../../PageObjects/PageMethods/dashBoardMethods";
import contactUsMethods from '../../PageObjects/PageMethods/contactUsMethods';

const homepage = new homePageMethods()
const loginpage = new loginPageMethods()
const dashboard = new dashBoardMethods()
const contactUs = new contactUsMethods()

// Scenario: User reports a bug
Given(`open the URL`, () => {
    // cy.visit('/')
});

When(`the user logs into the app`, function () {
    homepage.navigationToLogin()
    loginpage.enterEmail(this.regData[0].UserEmail)
    loginpage.enterPassword(this.regData[0].Password)
    loginpage.signinClick()
});

When(`the user clicks on the User icon`, () => {
    dashboard.profileIconClick()
});

When(`the user clicks on the Report Bug option`, () => {
    dashboard.clickReportBug()
});

When(`the user enters their name, email, and message, click on the Send message button`, () => {
    contactUs.sendBugReport("This text is generated through test automation")
});

Then(`the bug report should be submitted successfully`, () => {
    contactUs.verifyBugReport()
});