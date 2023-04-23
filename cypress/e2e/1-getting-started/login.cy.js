describe("Login / Logout Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });
  afterEach(() => {
    cy.wait(5000); // wait for 5 seconds
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

  it("Check data is stored in local storage  success", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]')
      .click()
      .then(() => {
        expect(window.localStorage.getItem("isAuthenticated")).to.equal("true");
        expect(window.localStorage.getItem("mail")).to.equal("a@a.com");
      });
  });

  it("Check logout button", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.get('[data-cy="LogoutSubmit"]')
      .click()
      .then(() => {
        expect(window.localStorage.getItem("isAuthenticated")).to.equal(
          "false"
        );
      });
    cy.url().should("eq", "http://localhost:3000/login");
  });
});
