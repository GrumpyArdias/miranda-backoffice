import { wait } from "@testing-library/user-event/dist/utils";

describe("Booking Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("Acces to booking", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Bookings"]').should("be.visible");
    cy.get('[data-cy="Bookings"]').click();
  });

  it("Delete booking", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Bookings"]').should("be.visible");
    cy.get('[data-cy="Bookings"]').click();
    cy.get("table tbody tr").then((rowsBefore) => {
      const numRowsBefore = rowsBefore.length;
      cy.get('[data-cy="deleteButton"]:first').click();
      cy.wait(1000);
      cy.get("table tbody tr").then((rowsAfter) => {
        const numRowsAfter = rowsAfter.length;
        expect(numRowsAfter).to.equal(numRowsBefore - 1);
      });
    });
  });

  it("Acces notes", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Bookings"]').should("be.visible");
    cy.get('[data-cy="Bookings"]').click();
    cy.get('table tbody tr:first-of-type [data-cy="NotesButton"]').click();
    cy.url().should("include", "/bookings/");
  });
});
