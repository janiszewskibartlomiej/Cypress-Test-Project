/// <reference types="Cypress" />
import Navigaton_PO from "../../support/pageObjects/Navigaton_PO";
import Login_PO from "../../support/pageObjects/Login_PO";

const navigatonHelper = new Navigaton_PO();
const loginPageHelper = new Login_PO();

describe("Login Tests", () => {
  it("Login with valid creditentials", () => {
    navigatonHelper.openHomepage();
    navigatonHelper.clickLoginOrRegister();
    loginPageHelper.enterUserName("AshtonScalac");
    loginPageHelper.enterPassword("test1234");
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.isUserloginCorrectly();
  });
  it("Login with invalid creditantials", () => {
    navigatonHelper.openHomepage();
    navigatonHelper.clickLoginOrRegister();
    loginPageHelper.enterUserName("Ashton");
    loginPageHelper.enterPassword("Test");
    loginPageHelper.clickOnLoginButton();
    loginPageHelper.loginErrorMessage();
  });
});
