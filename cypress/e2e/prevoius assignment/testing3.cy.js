describe("Testing 3 on cypress ", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });
  it("checking checkbox exist or not",()=>{
    cy.get(".new-todo").type("Learn cypress{enter}");
    cy.get(".toggle").last().should("exist");
  })
  it(" checkbox toggle the status",()=>{
    cy.get(".new-todo").type("Learn cypress{enter}");
    cy.get(".toggle").last().click();

    cy.get(".completed").last().should("exist");

  })

  it("complete status with color or strike",()=>{
    cy.get('.new-todo').type('write tests{enter}')
  cy.contains('.todo-list li', 'write tests').find('.toggle').check()
  cy.contains('.todo-list li', 'write tests').should('have.class', 'completed')
});

})
