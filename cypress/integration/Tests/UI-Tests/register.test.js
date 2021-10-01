import Navigaton_PO from "../../../support/pageObjects/Navigaton_PO";
import Register_PO from "../../../support/pageObjects/Register_PO";

const navigatonHelper = new Navigaton_PO();
const registerHelper = new Register_PO();

let randomFirstName = Math.random().toString(36).substring(1);
let randomLastName = Math.random().toString(36).substring(1);
let randomEmail = Math.random().toString(32).substring(1) + "@domain.com";
let randomAddress = Math.random().toString(36).substring(1);
let randomCity = Math.random().toString(36).substring(1);
let regionValue = "3516";
let regionName = "Angus";
let randomPostcode = Math.random().toString(36).substring(1);
let randomLogin = Math.random().toString(36).substring(1);
let password = "password";
let confirmPassword = "password";

describe("Register Form", () => {
  it("Register a new user - pass test", () => {
    navigatonHelper.openHomepage();
    navigatonHelper.clickLoginOrRegister();
    registerHelper.clickContinueRegister();
    registerHelper.fillRegisterForm(
      randomFirstName,
      randomLastName,
      randomEmail,
      randomAddress,
      randomCity,
      regionValue,
      regionName,
      randomPostcode,
      randomLogin,
      password,
      confirmPassword
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
