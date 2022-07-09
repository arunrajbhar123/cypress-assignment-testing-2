describe("Create Some simple Todos App TestCase",()=>{
  
  it("user should be visit page",()=>{
    cy.visit("https://example.cypress.io/todo");
  })
  
  it("user should be auto-focused",()=>{
    cy.visit("https://example.cypress.io/todo");
    cy.get('.new-todo').focus().type('Nice Product!')

  })
  it("user should be auto-focused",()=>{
    cy.visit("https://example.cypress.io/todo");
    cy.get('.new-todo').type('Learn cypress{enter}')

  })
  it("user should be Present text",()=>{
    cy.visit("https://example.cypress.io/todo");
    cy.get('.new-todo').type('Learn cypress{enter}')
    cy.get('.todo-count strong').should('have.text',3)
  })
})