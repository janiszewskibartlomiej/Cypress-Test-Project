import { homePageSelectors } from "../selectors/selectors";
class Navigaton_PO {
  openHomepage() {
    cy.visit("https://automationteststore.com/");
    cy.get(homePageSelectors.openChart);
  }
  clickLoginOrRegister() {
    cy.get(homePageSelectors.loginRegisterButton).click();
    cy.url().should("include", "account/login");
  }
  openChart() {
    cy.get(homePageSelectors.openChart).click();
    cy.url().should("include", "checkout/cart");
  }
}
export default Navigaton_PO;
