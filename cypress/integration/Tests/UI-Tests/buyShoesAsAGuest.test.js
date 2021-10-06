/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import ShoesCategoryDetails_PO from "../../../support/pageObjects/ShoesCategoryDetails_PO";
import Checkout_PO from "../../../support/pageObjects/Checkout_PO";
import { productDetailsSelectors } from "../../../support/selectors/selectors";

const navigatonHelper = new Navigaton_PO();
const shoesDetailsHelper = new ShoesCategoryDetails_PO();
const checkoutHelper = new Checkout_PO();

let randomFirstName = Math.random().toString(36).substring(1);
let randomLastName = Math.random().toString(36).substring(1);
let randomEmail = Math.random().toString(32).substring(1) + "@domain.com";
let randomAddress = Math.random().toString(36).substring(1);
let randomCity = Math.random().toString(36).substring(1);
let regionValue = '3516'
let regionName = 'Angus';
let randomPostcode = Math.random().toString(36).substring(7);
let countryValue = '1'
let countryName = 'Afghanistan'

describe('Buy as a Guest', () => {
  it('Buy shoes as a Guest', () => {
    navigatonHelper.openHomepage();
    navigatonHelper.openApparelAndAccesoriesTab();
    navigatonHelper.openShoesTab();
    shoesDetailsHelper.openShoesDetails(
      "New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals",
      "product_id=116"
    );
    shoesDetailsHelper.chooseSize("4 UK");
    cy.clearInputAndType(productDetailsSelectors.qty, 10);
    cy.checkValue(10);
    cy.clickAddToChart();
    checkoutHelper.guestCheckout(
      randomFirstName,
      randomLastName,
      randomEmail,
      randomAddress,
      randomCity,
      regionValue,
      regionName,
      randomPostcode,
      countryValue,
      countryName,
    );
  });
});
