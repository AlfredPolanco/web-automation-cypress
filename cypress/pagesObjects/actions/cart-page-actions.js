import { cartPageElements } from "../elements/cart-page-elements";

export function clickOnProceedToCheckoutButton() {
	cy.get(cartPageElements.proceedToCheckoutButton.selector)
		.should('be.visible')
		.should('be.enabled')
		.click();
};

export function clickOnRegisterLoginButton() {
	cy.get(cartPageElements.registerLoginButton.selector)
		.should('be.visible')
		.should('be.enabled')
		.click();
};