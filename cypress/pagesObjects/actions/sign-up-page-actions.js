import { mockData } from '../../support/user-data';
import { signUpPageElements } from '../elements/sign-up-page-elements';

export function fillSignUpForm() {
	cy.get(signUpPageElements.genderOption.selector).click();
	cy.get(signUpPageElements.passwordInput.selector).type(
		mockData.testData.password
	);
	cy.get(signUpPageElements.birthDaySelect.selector).select('1');
	cy.get(signUpPageElements.birthMonthSelect.selector).select('January');
	cy.get(signUpPageElements.birthYearSelect.selector).select('1998');
	cy.get(signUpPageElements.firstNameInput.selector).type(
		mockData.testData.firstName
	);
	cy.get(signUpPageElements.lastNameInput.selector).type(
		mockData.testData.lastName
	);
	cy.get(signUpPageElements.addressInput.selector).type('1180 Pearl Tree Ave');
	cy.get(signUpPageElements.countryInput.selector).select('United States');
	cy.get(signUpPageElements.stateInput.selector).type('Florida');
	cy.get(signUpPageElements.cityInput.selector).type('Orlando');
	cy.get(signUpPageElements.zipCodeInput.selector).type('33178');
	cy.get(signUpPageElements.mobilePhoneNumberInput.selector).type(
		'11111112323'
	);
	cy.get(signUpPageElements.createAccountButton.selector).click();
}
