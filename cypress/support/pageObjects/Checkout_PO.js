import { checkoutSelectors, registerSelectors } from "../selectors/selectors";
class Checkout_PO {
  checkoutWithAutoFilledData() {
    cy.get(checkoutSelectors.checkoutButton).click();
    cy.url().should("include", "checkout/confirm");
    cy.get(checkoutSelectors.confirmOrderButton).click();
    cy.url().should("include", "checkout/success");
    cy.get(checkoutSelectors.successMessage).contains(
      " Your Order Has Been Processed!"
    );
  }
  guestCheckout() {
    cy.url().should("include", "account/login");

  }
}
export default Checkout_PO;
