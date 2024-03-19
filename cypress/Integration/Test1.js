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

it.only('test', () => {

  // cy.visit('/')
  homepage.navigationToLogin()
  loginpage.enterEmail(this.regData[0].UserEmail)
  loginpage.enterPassword(this.regData[0].Password)
  loginpage.signinBtn()

  dashboard.searchTemplate()

  dashboard.enterTemplate("AB Checkout")

  searchPopup.selectMatchingResult()

  homepage.navigationToLogin()
  loginpage.enterEmail(this.regData[0].UserEmail)
  loginpage.enterPassword(this.regData[0].Password)
  loginpage.signinBtn()

  dashboard.searchTemplate()
  searchPopup.selectEmailTag()
  searchPopup.enterTemplateName()

  searchPopup.selectMatchingResult()
  searchPopup.verifyTemplate()

  dashboard.searchTemplate()
  searchPopup.selectFacebookTag()
  searchPopup.enterTemplateName()

  searchPopup.selectMatchingResult()
  searchPopup.verifyTemplate()

  dashboard.searchTemplate()
  searchPopup.selectYoutubeTag()
  searchPopup.enterTemplateName()

  searchPopup.selectMatchingResult()
  searchPopup.verifyTemplate()


  dashboard.searchTemplate()
  searchPopup.selectMiscTag()
  searchPopup.enterTemplateName()

  searchPopup.selectMatchingResult()
  searchPopup.verifyTemplate()

  dashboard.searchTemplate()
  searchPopup.selectMarketRshTag()
  searchPopup.enterTemplateName()

  searchPopup.selectMatchingResult()
  searchPopup.verifyTemplate()


  dashboard.searchTemplate()
  searchPopup.selectAdvertorialTag()
  searchPopup.enterTemplateName()

  searchPopup.selectMatchingResult()
  searchPopup.verifyTemplate()

})