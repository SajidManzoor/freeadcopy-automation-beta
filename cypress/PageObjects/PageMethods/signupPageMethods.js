import signupPageElements from "../PageElements/signupPageElement"
import loginPageElements from "../PageElements/loginPageElements"

const signupElements = new signupPageElements()
const loginElements = new loginPageElements()

export default class signupPageMethods {
    enterEmail(email) {
        loginElements.element.emailField().type(email)
    }
    navigateToSignIn() {
        signupElements.element.signIn_nav().click()
    }
}