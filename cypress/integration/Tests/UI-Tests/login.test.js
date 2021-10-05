/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Login_PO from "../../../support/pageObjects/Login_PO";

const navigationHelper = new Navigaton_PO();
const loginPageHelper = new Login_PO();

describe("Login Tests", () => {
  it("Login with valid creditentials", () => {
    navigationHelper.openHomepage();
    navigationHelper.clickLoginOrRegister();
    loginPageHelper.login("AshtonScalac", "test1234");
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.isUserloginCorrectly();
  });
  it("Login with invalid creditantials", () => {
    navigationHelper.openHomepage();
    navigationHelper.clickLoginOrRegister();
    loginPageHelper.login("Ashton", "Test");
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.loginErrorMessage();
  });
});
