import {
  loginSelectors,
  registerSelectors,
  chartSelectors,
} from "../support/selectors/selectors";

Cypress.Commands.add("login", (userName, password) => {
  cy.get(loginSelectors.loginInput).type(userName);
  cy.get(loginSelectors.passwordInput).type(password);
});

Cypress.Commands.add("openProduct", (name) => {
  cy.get(".prdocutname").contains(name).click();
});

Cypress.Commands.add("addProductToTheChart", (name) => {
  cy.get(".productcart").contains(name).click();
});

Cypress.Commands.add("CheckQuantityOfTheElements", (value) => {
  cy.get(chartSelectors.itemBox).should(($p) => {
    expect($p).to.have.length(value);
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
});
