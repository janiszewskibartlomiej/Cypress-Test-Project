import { productDetailsSelectors } from "../selectors/selectors";

class ShoesCategoryDetails_PO {
  openShoesDetails(name, url) {
    cy.openProduct(name);
    cy.checkURL(url);
  }
  chooseSize(option) {
    cy.chooseOptionFromCheckbox(option);
  }
  changeTheQty(value) {
    cy.clearInputAndType(productDetailsSelectors.qty, value);
  }
}
export default ShoesCategoryDetails_PO;
