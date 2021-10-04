/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import ShoesCategoryDetails_PO from "../../../support/pageObjects/ShoesCategoryDetails_PO";

const navigatonHelper = new Navigaton_PO();
const shoesDetailsHelper = new ShoesCategoryDetails_PO();

describe("Buy as a Guest", () => {
  it("Buy shoes as a Guest", () => {
    navigatonHelper.openHomepage();
    navigatonHelper.openApparelAndAccesoriesTab();
    navigatonHelper.openShoesTab();
    shoesDetailsHelper.openShoesDetails(
      "New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals", 'product_id=116'
    );
    shoesDetailsHelper.chooseSize('4 UK');
    shoesDetailsHelper.changeTheQty('10');
    cy.checkValue(10);
    cy.clickAddToChart();
  });
});
