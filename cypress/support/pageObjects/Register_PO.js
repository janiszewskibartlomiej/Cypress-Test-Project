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
    cy.fillRegisterOrCheckoutForm(
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
    );
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
    cy.get(registerSelectors.registerHeader).contains(
      "Your Account Has Been Created!"
    );
  }
}
export default Register_PO;
