import { loginSelectors } from "../selectors/selectors";
class Login_PO {
  enterUserName(userName) {
    cy.get(loginSelectors.loginInput).type(userName);
  }
  enterPassword(password) {
    cy.get(loginSelectors.passwordInput).type(password);
  }
  clickOnLoginButton() {
    cy.get(loginSelectors.loginButton).click();
  }
  loginErrorMessage() {
    cy.get(loginSelectors.errorIncorrectLogin);
  }
  isUserloginCorrectly() {
    cy.url().should("include", "index.php?rt=account/account");
  }
}
export default Login_PO;
