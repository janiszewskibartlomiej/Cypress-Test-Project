import { loginSelectors } from "../selectors/selectors";
class Login_PO {
  login(userName, password) {
    cy.login(userName, password);
  }
  clickOnLoginButton() {
    cy.get(loginSelectors.loginButton).click();
  }
  loginErrorMessage() {
    cy.get(loginSelectors.errorIncorrectLogin);
  }
  isUserloginCorrectly() {
    cy.url().should("include", "account/account");
  }
}
export default Login_PO;
