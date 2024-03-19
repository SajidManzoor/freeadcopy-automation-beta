///<reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homePageMethods from "../../PageObjects/PageMethods/homePageMethods";
import loginPageMethods from "../../PageObjects/PageMethods/loginPageMethods";
import dashBoardMethods from "../../PageObjects/PageMethods/dashBoardMethods";
import adsPageMethods from "../../PageObjects/PageMethods/adsPageMethods";


const homepage = new homePageMethods()
const loginpage = new loginPageMethods()
const dashboard = new dashBoardMethods()
const adsPage = new adsPageMethods()




//Scenario: User is able to generate ad with Email template

When(/^Login to app and Click on the template from side bar$/, function () {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
	dashboard.selectTemplateTab()
});

When(/^Select email template$/, () => {
	dashboard.selectEmailCategory()
	dashboard.selectEmailSequence()
	dashboard.selectEmailTemplate()
});




//Scenario: User is able to generate ad with Facebook template
When(/^Login to app and select template from side bar$/, function () {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
	dashboard.selectTemplateTab()
});

When(/^Select facebook template generated ad and verify the ad$/, function() {
	dashboard.selectTemplateCategory()
	dashboard.selectFBTemplate()
	adsPage.fillAdsForm(
		this.regData[0].FieldTargetMarket,
		this.regData[0].FieldPainPoint,
		this.regData[0].FieldDislikeSol,
		this.regData[0].FieldUniqueSol)
	adsPage.selectGenerateAdBtn()
	dashboard.verifyAd()
});



//Scenario: User is able to generate ad with YouTube template
When(/^click on youtube category and select template.$/, () => {
	dashboard.selectYoutubeCategory()
	dashboard.selectYoutubeTemplate()
});

When(/^Fill the fields$/, function () {
	adsPage.fillAdsForm(
		this.regData[0].FieldTargetMarket,
		this.regData[0].FieldPainPoint,
		this.regData[0].FieldDislikeSol,
		this.regData[0].FieldUniqueSol)
});

Then(/^Click on Generate Ad button and verify the ad$/, () => {
	adsPage.selectGenerateAdBtn()
	dashboard.verifyAd()
});


//Scenario: User is able to generate ad with Market Research template

When(/^Login to the app and Click on the template from side bar$/, function () {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
	dashboard.selectTemplateTab()
});

When(/^click on Market Research category and select template$/, function() {
	dashboard.selectMarketResCategory()
	dashboard.selectMarketResTemplate()
	adsPage.fillAdsFormMarketRes(
		this.regData[0].FieldTargetMarket,
		this.regData[0].FieldUniqueSol)

});


Then(/^Click on the Generate Ad button and verify the ad$/, () => {
	adsPage.selectGenerateAdBtn()
	dashboard.verifyAd()
});



//Scenario: User is able to generate ad with "Misc" template

When(/^Login to the app and Click on the template from the side bar$/, function() {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
	dashboard.selectTemplateTab()
});

When(/^click on Misc category, select template and fill the field$/, function() {
	dashboard.selectMiscCategory()
	dashboard.selectMiscTemplate()
	adsPage.enterData(this.regData[0].FieldTargetMarket)
});

Then(/^Click on Generate Ad button and verify the ad.$/, () => {
	adsPage.selectGenerateAdBtn()
	dashboard.verifyAd()
});


//Scenario: User is able to generate ad with "Advertorial Ads" template

When(/^Login to the app and navigate to the template page$/, function() {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
	dashboard.selectTemplateTab()
});

When(/^click on Advertorial Ads category and select template$/, () => {

	dashboard.selectAdvertorialCategory()
	dashboard.selectAdvertorialTemplate()
});

When(/^Fill the fields.$/, function() {
	adsPage.fillAdsForm(
		this.regData[0].FieldTargetMarket,
		this.regData[0].FieldPainPoint,
		this.regData[0].FieldDislikeSol,
		this.regData[0].FieldUniqueSol)
});

Then(/^Click on Generate Ad button and verify ad.$/, () => {
	adsPage.selectGenerateAdBtn()
	dashboard.verifyAd()
});




//Scenario: User is able to generate ad from Newest templates

When(/^Login to the app and navigate to newest templates$/, function() {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
});

Then(/^Select the templates from newest template section, generated ad and vrify the ads$/, function() {
	dashboard.selectNew(this.regData[0].FieldTargetMarket,
		this.regData[0].FieldPainPoint,
		this.regData[0].FieldDislikeSol,
		this.regData[0].FieldUniqueSol)
});



//Scenario: user is able to edit and prview saved ads
When(/^Login to app and Click on the MyAds from side bar$/, function () {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
	dashboard.selectMyAdsOption()
});

When(/^Select ad from list and ad is displayed$/, () => {
	dashboard.selectSavedAd()
});

When(/^Click on edit icon$/, () => {
	dashboard.editAd()
});

Then(/^Click on save button and ad is updated successfully$/, function () {
	dashboard.selectSaveBtn()
	adsPage.verifyNotify(this.regData[1].ToastMessage)
});





/*describe.only('New Template', () => {

    it.only('loop Template', function() {
        homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()
	dashboard.selectTemplateTab()
	dashboard.selectMarketResCategory()
	dashboard.selectMarketResTemplate()
	adsPage.fillAdsFormMarketRes(
		this.regData[0].FieldTargetMarket,
		this.regData[0].FieldUniqueSol)
	adsPage.selectGenerateAdBtn()
	dashboard.verifyAd()
		
	})
})*/