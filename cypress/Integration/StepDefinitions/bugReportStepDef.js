///<reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homePageMethods from "../../PageObjects/PageMethods/homePageMethods";
import loginPageMethods from "../../PageObjects/PageMethods/loginPageMethods";
import dashBoardMethods from "../../PageObjects/PageMethods/dashBoardMethods";
import utilities from "../utilities";


const homepage = new homePageMethods()
const loginpage = new loginPageMethods()
const dashboard = new dashBoardMethods()
const utils = new utilities()

Given(/^Open the website and login to the application$/, function () {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
});

When(/^Click on the Report Bug from profile dropdown manue$/, () => {
	dashboard.clickProfileIcon()
	dashboard.selectReportBugTab()
});

When(/^Enter Bug detail and click on send message$/, function () {
	// dashboard.submitBugReport(this.regData[0].BugReport)
});

Then(/^Check the success notification$/, function () {
	// utils.verifyToastMessage(this.regData[3].ToastMessage)
});
