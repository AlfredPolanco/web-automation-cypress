import { checkoutPageElements } from '../elements/checkout-page-elements'

export function typeComment() {
	cy.get(checkoutPageElements.commentBox.selector)
		.type('Im loving this website!')
};

export function clickOnPlaceOrderButton() {
	cy.get(checkoutPageElements.placeOrderButton.selector)
		.should('be.visible')
		.should('be.enabled')
		.click();
};