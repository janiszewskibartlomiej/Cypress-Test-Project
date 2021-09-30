import { homePageSelectors } from "../selectors/selectors";
class Add3ItemsToTheCart_PO {
  add3ItemsFromHomepageToTheCart() {
    cy.get(homePageSelectors.addAbsolueEyeCreamToChart).eq(0).click();
    cy.get(homePageSelectors.addAbsoluteAntiAgeCreamToChart).eq(0).click();
    cy.get(homePageSelectors.addTotalMoistureCreamToChart).eq(0).click();
  }
}
export default Add3ItemsToTheCart_PO;
