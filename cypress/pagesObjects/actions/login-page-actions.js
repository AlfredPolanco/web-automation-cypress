import { mockData } from "../../support/user-data";
import { loginPageElements } from '../elements/login-page-elements'

export function clickOnSignUpButton() {
  cy.get(loginPageElements.signUpButton.selector)
		.should('be.visible')
		.click();
};

export function clickOnLoginButton() {
  cy.get(loginPageElements.loginButton.selector)
		.should('be.visible')
		.click();
};

export function typeSignUpNameAndEmail() {
  cy.get(loginPageElements.signUpNameInputBox.selector)
		.type(mockData.testData.firstName);
  cy.get(loginPageElements.signUpEmailInputBox.selector)
		.type(mockData.testData.email);
};

export function typeLoginEmailAndPassword() {
  cy.get(loginPageElements.loginEmailInputBox.selector)
		.type(mockData.testData.email);
  cy.get(loginPageElements.loginPasswordInputBox.selector)
		.type(mockData.testData.password);
};