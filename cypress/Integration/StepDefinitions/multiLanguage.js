import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homepageMethods from '../../PageObjects/PageMethods/homePageMethods';
import utilities from '../utilities';
import dashBoardMethods from '../../PageObjects/PageMethods/dashBoardMethods';
import settingsPageMethods from '../../PageObjects/PageMethods/settingsPageMethods';
import loginPageMethods from '../../PageObjects/PageMethods/loginPageMethods';
import signupPageMethods from '../../PageObjects/PageMethods/signupPageMethods';

const utils = new utilities()
const homepage = new homepageMethods()
const dashboard = new dashBoardMethods()
const loginpage = new loginPageMethods()
const settings = new settingsPageMethods()
const signupPage = new signupPageMethods()

// after(() => {
//     //reverting back to English
//     utils.selectLanguage('en')
// })

// Scenario: Verify Language Localization

When(`the user selects Spanish from the language dropdown`, () => {
    // [When] Describes the action or event that triggers the scenario.
    utils.selectLanguage('es')
});

Then(`the application language should be set to Spanish`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    homepage.verifyLanguage('es')
});

When(`the user selects French from the language dropdown`, () => {
    // [When] Describes the action or event that triggers the scenario.
    utils.selectLanguage('fr')
});

Then(`the application language should be set to French`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    homepage.verifyLanguage('fr')
});

When(`the user selects German from the language dropdown`, () => {
    // [When] Describes the action or event that triggers the scenario.
    utils.selectLanguage('de')
});

Then(`the application language should be set to German`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    homepage.verifyLanguage('de')
});

When(`the user selects Italian from the language dropdown`, () => {
    // [When] Describes the action or event that triggers the scenario.
    utils.selectLanguage('it')
});

Then(`the application language should be set to Italian`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    homepage.verifyLanguage('it')
});


When(`the user selects Portuguese from the language dropdown`, () => {
    // [When] Describes the action or event that triggers the scenario.
    utils.selectLanguage('pt')
});

Then(`the application language should be set to Portuguese`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    homepage.verifyLanguage('pt')
});


When(`the user selects Indonesian from the language dropdown`, () => {
    // [When] Describes the action or event that triggers the scenario.
    utils.selectLanguage('idn')
});

Then(`the application language should be set to Indonesian`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    homepage.verifyLanguage('idn')
});


When(`the user selects Russian from the language dropdown`, () => {
    utils.selectLanguage('ru')
});

Then(`the application language should be set to Russian`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    homepage.verifyLanguage('ru')
});

When(`the user selects Polish from the language dropdown`, () => {
    // [When] Describes the action or event that triggers the scenario.
    utils.selectLanguage('pol')
});

Then(`the application language should be set to Polish`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    homepage.verifyLanguage('pol')
});

When(`the user selects Ukrainian from the language dropdown`, () => {
    // [When] Describes the action or event that triggers the scenario.
    utils.selectLanguage('uk')
});

Then(`the application language should be set to Ukrainian`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    homepage.verifyLanguage('uk')
});


//Scenario: Verify Language on Settings Page
When(`User Logs in`, function () {
    homepage.navigationToLogin()
    loginpage.enterEmail(this.regData[0].UserEmail)
    loginpage.enterPassword(this.regData[0].Password)
    loginpage.signinBtn()
})

When(`opens Settings`, () => {
    dashboard.clickProfileIcon()
    dashboard.selectSettingsTab()
})

When(`User selects each language and Settings page converts to that language`, () => {
    var languages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'idn', 'ru', 'pol', 'uk']

    for (let i = 0; i < languages.length; i++) {
        settings.selectLanguage(languages[i])
        settings.verifyLanguage(languages[i])
    }
    //reverting to english
    utils.selectLanguage('en')
})

