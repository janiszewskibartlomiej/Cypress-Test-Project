/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Login_PO from "../../../support/pageObjects/Login_PO";
import Checkout_PO from "../../../support/pageObjects/Checkout_PO";
import Add3ItemsToTheCart_PO from "../../../support/pageObjects/Add3ItemsToTheCart_PO";
import CartItems_PO from "../../../support/pageObjects/CartItems_PO";

const navigatonHelper = new Navigaton_PO();
const loginPageHelper = new Login_PO();
const checkoutHelper = new Checkout_PO();
const addItemsHelper = new Add3ItemsToTheCart_PO();
const cartItemsHelper = new CartItems_PO();

describe("Buy 3 T-shirts", () => {
  it("Login -> Add 3 t-shirts to the cart -> Checkout", () => {
    navigatonHelper.openHomepage();
    navigatonHelper.clickLoginOrRegister();
    loginPageHelper.login("AshtonScalac", "test1234");
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.isUserloginCorrectly();
    navigatonHelper.openHomepage();
    addItemsHelper.add3TshirtsToTheCart();
    cartItemsHelper.checkIfItemsInChartAreCorrect(3);
    checkoutHelper.checkoutWithAutoFilledData();
  });
});
