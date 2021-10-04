import {
  loginSelectors,
  registerSelectors,
  productDetailsSelectors,
  shoesSelectors,
} from "../support/selectors/selectors";

Cypress.Commands.add("checkURL", (url) => {
  cy.url().should("include", url);
});

Cypress.Commands.add("clearInputAndType", (selector, text) => {
  cy.get(selector).clear().type(text);
});

Cypress.Commands.add("login", (userName, password) => {
  cy.get(loginSelectors.loginInput).type(userName);
  cy.get(loginSelectors.passwordInput).type(password);
});

Cypress.Commands.add("clickAddToChart", () => {
  cy.get(productDetailsSelectors.addToChart).click();
  cy.url().should("include", "checkout/cart");
});

Cypress.Commands.add("openProduct", (name) => {
  cy.get(".prdocutname").contains(name).click();
});

Cypress.Commands.add("addProductToTheChart", (name) => {
  cy.get(".productcart").contains(name).click();
});

Cypress.Commands.add("CheckQuantityOfTheElements", (selector, value) => {
  cy.get(selector).should(($p) => {
    expect($p).to.have.length(value);
  });
});

Cypress.Commands.add("checkValue", (value) => {
  cy.get(productDetailsSelectors.qty).should(($p) => {
    expect($p).to.have.value(value);
  });
});

Cypress.Commands.add("chooseOptionFromCheckbox", (option) => {
  cy.get(shoesSelectors.sizeCheckbox).contains(option).click();
});

Cypress.Commands.add(
  "fillRegisterOrCheckoutForm",
  (
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
  ) => {
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
);
