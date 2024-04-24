import { mockData } from "../../support/user-data";
import { paymentPageElements } from '../elements/payment-page-elements'

export function clickOnPayAndConfirmOrderButton() {
	cy.get(paymentPageElements.payAndConfirmOrderButton.selector)
		.should('be.visible')
		.click();
};

export function fillPaymentForm() {
	cy.get(paymentPageElements.nameOnCardInput.selector)
		.type(mockData.testData.fullName);
	cy.get(paymentPageElements.cardNumberInput.selector)
		.type(mockData.creditCard.creditCard);
	cy.get(paymentPageElements.cardCVVInput.selector)
		.type(mockData.testData.creditCardCVV);
	cy.get(paymentPageElements.cardExpDateMonth.selector)
		.type('11');
	cy.get(paymentPageElements.cardExpDateYear.selector)
		.type('2026');
};

export function verifyOrderPlaced() {
  cy.get(paymentPageElements.orderPlaced.selector)
		.should('be.visible');
};
