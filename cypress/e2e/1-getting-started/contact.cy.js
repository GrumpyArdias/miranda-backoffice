import { wait } from "@testing-library/user-event/dist/utils";

describe("Coments Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("Acces to Contact", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Contact"]').should("be.visible");
    cy.get('[data-cy="Contact"]').click();
  });
});
