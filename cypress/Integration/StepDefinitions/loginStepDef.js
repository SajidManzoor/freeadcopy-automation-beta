///<reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homePageMethods from "../../PageObjects/PageMethods/homePageMethods";
import loginPageMethods from "../../PageObjects/PageMethods/loginPageMethods";

const homepage = new homePageMethods()
const loginpage = new loginPageMethods()

//Scenario: User able to login with registered email and password.
Given(/^open the website and navigate to LoginPage.$/, function () {
	Cypress.on('uncaught:exception', () => { return false })
	cy.visit('/')
	homepage.navigationToLogin()
});

When(/^Enter email and password$/, function () {
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
});

When(/^Click on signin button$/, () => {
	loginpage.signinBtn()
});

Then(/^logged in successfully$/, () => {
	loginpage.loginValidation()
});

//Scenario: User unable to login with unregistered email and password.

When(/^Enter unregistered email and password.$/, function () {
	loginpage.enterEmail(this.regData[1].UserEmail)
	loginpage.enterPassword(this.regData[1].Password)
});

When(/^Click on the signin button$/, () => {
	loginpage.signinBtn()
});

Then(/^Error message is displayed$/, function () {
	loginpage.verifyLoginFailure()
});

