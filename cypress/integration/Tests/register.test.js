import Navigaton_PO from "../../support/pageObjects/Navigaton_PO";
import Register_PO from "../../support/pageObjects/Register_PO";

const navigatonHelper = new Navigaton_PO();
const registerHelper = new Register_PO();

describe("Register Form", () => {
  it("Register a new user - pass test", () => {
    let randomString = Math.random().toString(36).substring(1);
    let randomEmail = Math.random().toString(32).substring(1) + "@domain.com";
    navigatonHelper.openHomepage();
    navigatonHelper.clickLoginOrRegister();
    registerHelper.clickContinueRegister();
    registerHelper.fillRegisterForm(
      randomString,
      randomString,
      randomEmail,
      randomString,
      randomString,
      "3516",
      "Angus",
      randomString,
      // "1",
      // "Afghanistan",
      randomString,
      "password",
      "password",
    );
    registerHelper.checkPrivacyPolicy();
    registerHelper.clickContinueRegister();
  });
  it("Register a new user - failed test", () => {
    navigatonHelper.openHomepage();
    navigatonHelper.clickLoginOrRegister();
    registerHelper.clickContinueRegister();
    registerHelper.fillRegisterForm(
      "firstName",
      "lastName",
      "email",
      "address",
      "city",
      "3516",
      "Angus",
      "postcode",
      "login",
      "password",
      "passwordConfirm"
    );
    registerHelper.checkPrivacyPolicy();
    registerHelper.clickContinueRegister();
    registerHelper.failRegisterError();
  });
});
