class Login_PO {
  // selectors:
  loginInput = '[name="loginname"]';
  passwordInput = '[name="password"]';
  loginButton = '[title="Login"]';
  errorIncorrectLogin = ".alert-danger";

  enterUserName(userName) {
    cy.get(this.loginInput).type(userName);
  }
  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }
  clickOnLoginButton() {
    cy.get(this.loginButton).click();
  }
  loginErrorMessage() {
    cy.get(this.errorIncorrectLogin);
  }
  isUserloginCorrectly() {
    cy.url().should("include", "index.php?rt=account/account");
  }
}
export default Login_PO;
