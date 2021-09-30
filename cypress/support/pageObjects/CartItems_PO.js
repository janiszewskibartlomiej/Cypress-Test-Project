import { chartSelectors } from "../selectors/selectors";
class CartItems_PO {
  checkIfItemsInChartAreCorrect(value) {
    cy.get(chartSelectors.itemBox).should(($p) => {
        expect($p).to.have.length(value);
      });
  }
}
export default CartItems_PO;
