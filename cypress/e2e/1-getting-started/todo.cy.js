describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("Login success test", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
  });

  it("Login fail test", () => {
    cy.get('[data-cy="email"]').type("paco@a.com");
    cy.get('[data-cy="password"]').type("a");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="error"]').should("be.visible");
  });
});
