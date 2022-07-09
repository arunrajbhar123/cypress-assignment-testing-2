describe("Testing 2 checking element is present or not",()=>{
  beforeEach(()=>{
cy.visit("https://example.cypress.io/todo")
  })
  it("Check Delete button is present or not", () => {
    cy.get(".new-todo").type("Learn cypress{enter}");
    cy.get(".todo-list").should("to.have","Learn cypress");

  });
  it("Checking list after add new item is increase or not", () => {
    cy.get(".new-todo").type("Learn cypress{enter}");
    cy.get(".todo-list").children().should("have.length",3);

  });
  it("should intercept Get request", () => {
    cy.intercept("GET", "http://localhost:3000/counter", { value: 10 }).as("getReq")
   
  })
})