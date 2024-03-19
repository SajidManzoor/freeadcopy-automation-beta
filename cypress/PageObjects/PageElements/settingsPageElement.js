export default class settingsPageElements {

    element = {
        userName_Field: () => cy.get('#text'),
        updateSettings_Button: () => cy.get('.text-gray-500 > .text-white > .flex'),
        update_Toast: () => cy.get('.Toastify__toast-body > :nth-child(2)'),
        passwordSetting_Tab: () => cy.get('.border-b > .flex > :nth-child(4)'),
        password_Field: () => cy.get('#password'),
        newPassword_Field: () => cy.get('#newPassword'),
        confirmPassword_Field: () => cy.get('#confirmpassword'),
        updatePassword_Button: () => cy.get('.text-gray-500 > .text-white > .flex'),
        language_dropdown: () => cy.get('.inline-block #menu-button'),
        accountSettings_Text: () => cy.get('.space-y-6 > .text-xl'),
        tabList: () => cy.get('.pb-1 p'),
    }
    subscription = {
        upgradePlan_btn: () => cy.get('button').contains('Upgrade Plan'),
        upgrade_btnList:()=>cy.get('.bg-gray-900'),
        
    }
    
}