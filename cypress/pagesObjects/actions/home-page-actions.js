import { homePageElements } from "../elements/home-page-elements";

export function clickOnViewProduct() {
	cy.get(homePageElements.viewProduct.selector)
		.should('be.visible')
		.click();
};

export function clickOnCartHeader() {
	cy.get(homePageElements.cartHeader.selector)
	.should('be.visible')
	.click();

};
export function clickOnLogoutHeader() {
	cy.get(homePageElements.logoutHeader.selector)
	.should('be.visible')
	.click();

};
export function clickOnContactUSHeader() {
	cy.get(homePageElements.contactUsHeader.selector)
	.should('be.visible')
	.click();

};