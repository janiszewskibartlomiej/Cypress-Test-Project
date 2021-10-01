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
    shoesDetailsHelper.OpenShoesDetails(
      "New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals"
    );
  });
});
