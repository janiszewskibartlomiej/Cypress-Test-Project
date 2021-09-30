import { registerSelectors } from "../selectors/selectors";

class Register_PO {

  clickContinueRegister() {
    cy.get(registerSelectors.continueButton).click();
    cy.get(registerSelectors.registerHeader).contains(" Create Account");
  }
  fillRegisterForm(
    firstName,
    lastName,
    email,
    address,
    city,
    regionValue,
    regionName,
    postcode,
    login,
    password,
    passwordConfirm
  ) {
    cy.get(registerSelectors.firstName).type(firstName);
    cy.get(registerSelectors.lastName).type(lastName);
    cy.get(registerSelectors.email).eq(0).type(email);
    cy.get(registerSelectors.address_1).type(address);
    cy.get(registerSelectors.city).type(city);
    cy.get(registerSelectors.regionState)
      .select(regionValue)
      .contains(regionName);
    cy.get(registerSelectors.postcode).type(postcode);
    cy.get(registerSelectors.login).type(login);
    cy.get(registerSelectors.password).type(password);
    cy.get(registerSelectors.passwordConfirm).type(passwordConfirm);
  }
  checkPrivacyPolicy() {
    cy.get(registerSelectors.privacyPolicy).click();
  }
  clickContinueRegister() {
    cy.get(registerSelectors.continueButton).click();
  }
  failRegisterError() {
    cy.get(registerSelectors.failMessage).contains(
      "Password confirmation does not match password!"
    );
  }
  successRegister() {
    cy.get(registerSelectors.registerHeader).contains("Your Account Has Been Created!")
  }
}
export default Register_PO;
