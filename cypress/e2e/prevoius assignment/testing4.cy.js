describe("Testing four some feature to checked here", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });
  it("Check Delete button is present or not", () => {
    cy.get(".new-todo").type("Learn cypress{enter}");
    cy.get(".destroy").should("exist");
  });

  it("User can be remove item ", () => {
    cy.get(".destroy").first().click({ force: true });
  });
  it("On removing item length should be reducer", () => {
    cy.get(".destroy").first().click({ force: true });
    cy.get(".todo-list").children().should("have.length", 1);
  });
});
