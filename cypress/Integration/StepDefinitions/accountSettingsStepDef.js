///<reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homePageMethods from "../../PageObjects/PageMethods/homePageMethods";
import loginPageMethods from "../../PageObjects/PageMethods/loginPageMethods";
import settingsPageMethods from "../../PageObjects/PageMethods/settingsPageMethods";
import dashBoardMethods from "../../PageObjects/PageMethods/dashBoardMethods";
import utilities from "../utilities";


const homepage = new homePageMethods()
const loginpage = new loginPageMethods()
const settingspage = new settingsPageMethods()
const dashboard = new dashBoardMethods()
const utils = new utilities()


Given(/^Open the websites.$/, () => {
	homepage.navigationToLogin()
});

When(/^Login to application.$/, function () {
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
});

When(/^Click on the profile icon and navigate to settings page$/, () => {
	dashboard.clickProfileIcon()
	dashboard.selectSettingsTab()
});

When(/^Enter username and click on update button.$/, function () {
	var username = utils.generateRandomString(5) + " " + utils.generateRandomString(5)

	settingspage.updateUsername(username)

});



//Scenario: Scenario: User is unable to update password by entering random text in the fields.

When(/^Loggin to app and navigate to setting page by clicking on the profile icon$/, function () {
	// cy.visit('/')
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
	dashboard.clickProfileIcon()
	dashboard.selectSettingsTab()
});

When(/^Navigate to password setting and enter the random text in current, new, confirm password fields.$/, function () {
	settingspage.passwordSettingTab()
	settingspage.updatePassword(
		utils.generateRandomString(10),
		utils.generateRandomString(10),
		utils.generateRandomString(10)
	)
});

When(/^Click on update password button and check toast message$/, function () {
	settingspage.clickUpdatePasswordBtn()
	//settingspage.verifyPasswordUpdate()
	utils.verifyToastMessage("Password doesn't match")   //this.regData[4].ToastMessage
});


// Scenario: Cancel Membership
// Given('Login into the app', function() {
// 	home.navigationToLogin()
// 	login.enterEmail(this.regData[0].UserEmail)
// 	login.enterPassword(this.regData[0].Password)
// 	login.signinBtn()
// 	dashboard.getCreditsCount()
// 	prevCredits = '@textFunction'

// })

// When('Click on User icon', () => {
// 		dashboard.clickProfileIcon()
// })
// When('Click on Setting option', () => {
// 	dashboard.selectSettingsTab()
// })
// When('Click on Subscription Plans option', () => {
// 	settings.selectTab('Subsciption Plans')
// })

When('Click on Cancel Membership button', () => {

})

Then('Cancel Membership button will be grayed out', () => {
})
