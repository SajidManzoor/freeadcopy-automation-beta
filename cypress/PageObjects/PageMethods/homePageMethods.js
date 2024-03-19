import homePageElements from "../PageElements/homePageElements"

const homeElements = new homePageElements()

export default class homePageMethods {
    navigationToLogin() {
        homeElements.element.login_Navbar().click()
    }
    navigationToSignup() {
        homeElements.element.login_Navbar().click()
        homeElements.element.signup_button().click()
    }
    clickgetStarted() {
        homeElements.element.getStarted_nav().click()
    }
    clickgetStartedButton() {
        homeElements.element.getStarted_button().click()
    }  
    enterTarget(text) {
        homeElements.element.target_input()
            .type(text)
            .type('{enter}')
    }
    enterProblem(text) {
        homeElements.element.problem_input()
            .type(text)
            .type('{enter}')
    }
    enterDislike(text) {
        homeElements.element.dislike_input()
            .type(text)
            .type('{enter}')
    }
    enterUniqueSolution(text) {
        homeElements.element.uniqueSolution_input()
            .type(text)
            .type('{enter}')
    }
    enterHowUniqueWork(text) {
        homeElements.element.howUniqueWork_input()
            .type(text)
            .type('{enter}')
    }
    enterResearch(text) {
        homeElements.element.research_input()
            .type(text)
            .type('{enter}')
    }
    enterTestimonials(text) {
        homeElements.element.testimonials_input()
            .type(text)
            .type('{enter}')
    }
    selectRole(text) {
        homeElements.element.role_dropdown()
            .select(text)
    }
    clickGetAd() {
        homeElements.element.getAd_button().click()
    }
    verifyLanguage(language) {
        var h1 = {
            'en': '$1B Copywriter Creates FREE AI Copy Generator That Will Beat Your',
            'es': 'Copywriter de mil millones de dólares crea un generador de IA para copias GRATUITO que superará tus anuncios',
            'fr': '1 milliard de dollars Copywriter crée un générateur de copie IA GRATUIT qui battra vos publicités',
            'de': '1-Milliarden-Dollar-Copywriter erstellt KOSTENLOSE KI-Textgeneratoren, die Ihre schlagen werden',
            'it': 'Copywriter da 1 miliardo di dollari crea un generatore di copy AI GRATUITO che batterà il tuo',
            'pt': 'Copywriter de bilhões de dólares cria um gerador de IA para cópias GRATUITO que superará seus anúncios',
            'idn': '$1B Penulis Iklan Membuat Generator AI Copy GRATIS yang Akan Mengalahkan',
            'ru': '$1 млрд. копирайтер создает БЕСПЛАТНОГО генератора текстов AI, который побьет ваши',
            'pol': 'Copywriter wart 1 miliarda dolarów tworzy DARMOWY generator AI Copy, który pokona Twoje',
            'uk': 'Копірайтер на $1 мільярд створює БЕЗКОШТОВНИЙ генератор тексту AI, який перевершить ваш'
        }
        cy.get('h1').should('have.text', h1[language]);
    }

}
