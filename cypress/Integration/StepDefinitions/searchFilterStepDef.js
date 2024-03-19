///<reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homePageMethods from "../../PageObjects/PageMethods/homePageMethods";
import loginPageMethods from "../../PageObjects/PageMethods/loginPageMethods";
import dashBoardMethods from "../../PageObjects/PageMethods/dashBoardMethods";
import searchPopupMethods from "../../PageObjects/PageMethods/searchPopupMethods";

const homepage = new homePageMethods()
const loginpage = new loginPageMethods()
const dashboard = new dashBoardMethods()
const searchPopup = new searchPopupMethods()

//Scenario: User is able to search email template by selecting tag.
When(/^Login to app and click on the searchfield from header.$/, function () {
	homepage.navigationToLogin()
	loginpage.enterEmail(this.regData[0].UserEmail)
	loginpage.enterPassword(this.regData[0].Password)
	loginpage.signinBtn()

});


//Email tag
When(/^Select Email tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectEmailTag()
	searchPopup.enterTemplateName()
});

Then(/^Select email template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});

//Scenario: User is able to search facebook template by selecting tag.
When(/^Select Facebook tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectFacebookTag()
	searchPopup.enterTemplateName()
});

Then(/^Select FB template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});

//Scenario: User is able to search youtube template by selecting tag.
When(/^Select YouTube tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectYoutubeTag()
	searchPopup.enterTemplateName()
});

Then(/^Select YouTube template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});

//Scenario: User is able to search Misc template by selecting tag.
When(/^Select Misc tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectMiscTag()
	searchPopup.enterTemplateName()
});

Then(/^Select Misc template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});

//Scenario: User is able to search Market Research template by selecting tag.
When(/^Select Market Research tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectMarketRshTag()
	searchPopup.enterTemplateName()
});

Then(/^Select Market Research template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});

//Scenario: User is able to search advertorial template by selecting tag.
When(/^Select Advertorial tag and type template name.$/, () => {
	dashboard.clickSearchTemplate()
	searchPopup.selectAdvertorialTag()
	searchPopup.enterTemplateName()
});

Then(/^Select Advertorial template from matching result and verify it.$/, () => {
	searchPopup.selectMatchingResult()
	searchPopup.verifyTemplate()
});




// /* ==== Generated with Cypress Studio ==== */
// cy.get('.text-\\[16px\\]').click();
// cy.get('#email').click();
// cy.get('#email').clear('sajidmanzoor50@gmail.com');
// cy.get('#email').type('sajidmanzoor50@gmail.com');
// cy.get('#password').clear('w');
// cy.get('#password').type('webdir123');
// cy.get('.md\\:space-y-4 > .inline-flex').click();
// cy.get('#password').clear('w');
// cy.get('#password').type('webdir123R');
// cy.get('.md\\:space-y-4 > .inline-flex').click();
// cy.get('.ml-5 > .relative > .bg-gray-50').click();
// cy.get('.flex-wrap > .text-\\[\\#52AA8A\\]').click();
// cy.get('#simple-search').click();
// cy.get('.mx-2 > :nth-child(1) > .cursor-pointer > .flex').click();
// cy.get('.ml-5 > .relative > .bg-gray-50').click();
// cy.get('#simple-search').clear('A');
// cy.get('#simple-search').type('AB Checkout - Last Chance Checkout');
// cy.get('.px-1 > .cursor-pointer > .flex').click();
// cy.get('.ml-5 > .relative > .bg-gray-50').click();
// cy.get('.text-\\[\\#77b9e8\\]').click();
// cy.get('#simple-search').clear('B');
// cy.get('#simple-search').type('Belief Changer');
// cy.get('.px-1 > .cursor-pointer > .flex').click();
// cy.get('.ml-5 > .relative > .bg-gray-50').click();
// cy.get('.text-\\[\\#F05454\\]').click();
// cy.get('#simple-search').clear('P');
// cy.get('#simple-search').type('Permission To Skip');
// cy.get('.px-1 > .cursor-pointer > .flex').click();
// cy.get('.ml-5 > .relative > .bg-gray-50').click();
// cy.get('.text-\\[\\#610C9F\\]').click();
// cy.get('#simple-search').clear('H');
// cy.get('#simple-search').type('Halbert Headline Generator');
// cy.get('.px-1 > .cursor-pointer > .flex').click();
// cy.get('.ml-5 > .relative > .bg-gray-50').click();
// cy.get('.text-\\[\\#7D8CC4\\]').click();
// cy.get('#simple-search').clear('B');
// cy.get('#simple-search').type('Build A Better Buyer');
// cy.get('.px-1 > .cursor-pointer > .flex').click();
// cy.get('.ml-5 > .relative > .bg-gray-50').click();
// cy.get('.text-\\[\\#BED754\\]').click();
// cy.get('#simple-search').clear('A');
// cy.get('#simple-search').type('Advertorial Jump Page');
// cy.get('.px-1 > .cursor-pointer > .flex').click();
// /* ==== End Cypress Studio ==== */


// describe.only('Search Popup', () => {

// 	it.only('Search Template', function () {
// 		/* ==== Generated with Cypress Studio ==== */
// 		// cy.get('.text-\\[16px\\]').click();
// 		// cy.get('#email').click();
// 		// cy.get('#email').clear('sajidmanzoor50@gmail.com');
// 		// cy.get('#email').type('sajidmanzoor50@gmail.com');
// 		// cy.get('#password').clear('w');
// 		// cy.get('#password').type('webdir123');
// 		// cy.get('.md\\:space-y-4 > .inline-flex').click();
// 		// cy.get('#password').clear('w');
// 		// cy.get('#password').type('webdir123R');
// 		// cy.get('.md\\:space-y-4 > .inline-flex').click();
// 		// cy.get('.ml-5 > .relative > .bg-gray-50').click();
// 		// cy.get('.flex-wrap > .text-\\[\\#52AA8A\\]').click();

// 		homepage.navigationToLogin()
// 		loginpage.enterEmail(this.regData[0].UserEmail)
// 		loginpage.enterPassword(this.regData[0].Password)
// 		loginpage.signinBtn()

// 		// cy.get('.flex-wrap > .text-\\[\\#52AA8A\\]').click();
// 		cy.get('.ml-5 > .relative > .bg-gray-50').click();
// 		cy.get('#simple-search').click();
// 		cy.get('.mx-2 > :nth-child(1) > .cursor-pointer > .flex').click();
// 		cy.get('.ml-5 > .relative > .bg-gray-50').click();
// 		cy.get('#simple-search').clear('A');
// 		cy.get('#simple-search').type('AB Checkout - Last Chance Checkout');
// 		let firstElement = cy.get('.px-1 > .cursor-pointer > .flex').first()
// 		// cy.get('.px-1 > .cursor-pointer > .flex').click();
// 		firstElement.click()
// 		cy.get('.ml-5 > .relative > .bg-gray-50').click();
// 		cy.get('.text-\\[\\#77b9e8\\]').click();
// 		// cy.get('#simple-search').clear('B');
// 		cy.get('#simple-search').type('Belief Changer');
// 		// cy.get('.px-1 > .cursor-pointer > .flex').click();
// 		firstElement.click()
// 		cy.get('.ml-5 > .relative > .bg-gray-50').click();
// 		cy.get('.text-\\[\\#F05454\\]').click();
// 		// cy.get('#simple-search').clear('P');
// 		cy.get('#simple-search').type('Permission To Skip');
// 		// cy.get('.px-1 > .cursor-pointer > .flex').click();
// 		firstElement.click()
// 		cy.get('.ml-5 > .relative > .bg-gray-50').click();
// 		cy.get('.text-\\[\\#610C9F\\]').click();
// 		// cy.get('#simple-search').clear('H');
// 		cy.get('#simple-search').type('Halbert Headline Generator');
// 		// cy.get('.px-1 > .cursor-pointer > .flex').click();
// 		firstElement.click()
// 		cy.get('.ml-5 > .relative > .bg-gray-50').click();
// 		cy.get('.text-\\[\\#7D8CC4\\]').click();
// 		// cy.get('#simple-search').clear('B');
// 		cy.get('#simple-search').type('Build A Better Buyer');
// 		// cy.get('.px-1 > .cursor-pointer > .flex').click();
// 		firstElement.click()
// 		cy.get('.ml-5 > .relative > .bg-gray-50').click();
// 		cy.get('.text-\\[\\#BED754\\]').click();
// 		// cy.get('#simple-search').clear('A');
// 		cy.get('#simple-search').type('Advertorial Jump Page');
// 		cy.get('.px-1 > .cursor-pointer > .flex').click();
// 		firstElement.click()
// 		/* ==== End Cypress Studio ==== */
// 	})
// })