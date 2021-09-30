class Add3ItemsToTheCart_PO {
  openHomepage() {
    cy.visit("https://automationteststore.com/");
  }
  clickLoginOrRegister() {
    cy.get("#customernav").click();
  }
}
export default Add3ItemsToTheCart_PO;
