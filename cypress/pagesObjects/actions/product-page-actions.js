import { productPageElements } from "../elements/product-page-elements";

export function addQuantity() {
	cy.get(productPageElements.quantityBox.selector)
			.should('be.enabled')
			.clear()
			.type('30');
};

export function clickOnAddToCartButton() {
	cy.get(productPageElements.addToCartButton.selector)
		.click();
};

export function clickOnViewCartButton() {
	cy.get(productPageElements.itemAddedToCartModal.selector)
			.should('be.visible');
	cy.get(productPageElements.viewCartButton.selector).click();
};
