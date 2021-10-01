/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Login_PO from "../../../support/pageObjects/Login_PO";

const navigatonHelper = new Navigaton_PO();
const loginPageHelper = new Login_PO();

describe("Login Tests", () => {
  it("Login with valid creditentials", () => {
    navigatonHelper.openHomepage();
    navigatonHelper.clickLoginOrRegister();
    loginPageHelper.login("AshtonScalac", "test1234");
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.isUserloginCorrectly();
  });
  it("Login with invalid creditantials", () => {
    navigatonHelper.openHomepage();
    navigatonHelper.clickLoginOrRegister();
    loginPageHelper.login("Ashton", "Test");
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.loginErrorMessage();
  });
});
