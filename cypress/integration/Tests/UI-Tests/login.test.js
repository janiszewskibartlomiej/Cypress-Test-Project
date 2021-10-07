/// <reference types="Cypress" />
import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Login_PO from "../../../support/pageObjects/Login_PO";

const navigationHelper = new Navigaton_PO();
const loginPageHelper = new Login_PO();

describe("Login Tests", () => {
  beforeEach(function () {
    navigationHelper.openHomepage();
    navigationHelper.clickLoginOrRegister();
  });
  it("Login with valid creditentials", () => {
    loginPageHelper.login("AshtonScalac", "test1234");
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.isUserloginCorrectly();
  });
  it("Login with invalid creditantials", () => {
    loginPageHelper.login("Ashton", "Test");
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.loginErrorMessage();
  });
});
