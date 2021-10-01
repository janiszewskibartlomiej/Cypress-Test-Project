import { productDetailsSelectors } from "../selectors/selectors";
import Navigaton_PO from "./Navigaton_PO";

const navigatonHelper = new Navigaton_PO();
class Add3ItemsToTheCart_PO {
  add3ItemsToTheCart() {
    cy.openProduct(
      "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15"
    );
    cy.url().should("include", "product_id=68");
    cy.get(productDetailsSelectors.addToChart).click();
    cy.url().should("include", "checkout/cart");
    navigatonHelper.openHomepage();
    cy.openProduct("Absolue Eye Precious Cells");
    cy.url().should("include", "product_id=65");
    cy.get(productDetailsSelectors.addToChart).click();
    navigatonHelper.openHomepage();
    cy.openProduct("Total Moisture Facial Cream");
    cy.url().should("include", "product_id=66");
    cy.get(productDetailsSelectors.addToChart).click();
    cy.url().should("include", "checkout/cart");
  }
}
export default Add3ItemsToTheCart_PO;
