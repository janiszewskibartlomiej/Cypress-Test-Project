class Navigaton_PO {
  openHomepage() {
    cy.visit("https://automationteststore.com/");
  }
  clickLoginOrRegister() {
    cy.get("#customernav").click();
  }
}
export default Navigaton_PO;
