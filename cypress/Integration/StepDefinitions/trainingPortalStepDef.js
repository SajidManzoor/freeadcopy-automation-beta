///<reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homePageMethods from "../../PageObjects/PageMethods/homePageMethods";
import loginPageMethods from "../../PageObjects/PageMethods/loginPageMethods";
import dashBoardMethods from "../../PageObjects/PageMethods/dashBoardMethods";
import learningPageMethods from "../../PageObjects/PageMethods/learningPageMethods";
import utilities from "../utilities";

const homepage = new homePageMethods()
const loginpage = new loginPageMethods()
const dashboard = new dashBoardMethods()
const learning = new learningPageMethods()
const utils = new utilities()

// Scenario: User is able to play the training video from learning page.
When(/^Login app.$/, function () {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
});

When(/^Click on learning from the sidebar.$/, () => {
	dashboard.selectLearningTab()
});

Then(/^Click on video and check video detail.$/, () => {
	dashboard.selectVideo()
});



// Scenario: User is able to add videos in favorites.

Given(`Login to app and Click on learning from the sidebar.`, function () {
	// [When] Describes the action or event that triggers the scenario.
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()

});

When(`Click on video and click on favorite icon.`, () => {
	// [When] Describes the action or event that triggers the scenario.
	dashboard.selectLearningTab()
	dashboard.selectVideo()
});

Then(`Check the video is added on the favorites page`, function () {
	// [Then] Describes the expected outcome or result of the scenario.
	learning.clickFavIcon()
});
