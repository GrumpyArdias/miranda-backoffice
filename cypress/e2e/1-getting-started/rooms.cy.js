import { wait } from "@testing-library/user-event/dist/utils";

describe("Room Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("Acces to room", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Rooms"]').should("be.visible");
    cy.get('[data-cy="Rooms"]').click();
  });

  it("Delete room", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Rooms"]').should("be.visible");
    cy.get('[data-cy="Rooms"]').click();
    cy.get("table tbody tr").then((rowsBefore) => {
      const numRowsBefore = rowsBefore.length;
      cy.get('[data-cy="deleteButtonRoom"]:first').click();
      cy.wait(1000);
      cy.get("table tbody tr").then((rowsAfter) => {
        const numRowsAfter = rowsAfter.length;
        expect(numRowsAfter).to.equal(numRowsBefore - 1);
      });
    });
  });

  it("test enter room", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Rooms"]').should("be.visible");
    cy.get('[data-cy="Rooms"]').click();
    cy.get('[data-cy="new-room-button"]').click();
  });

  it("Create a New room", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Rooms"]').should("be.visible");
    cy.get('[data-cy="Rooms"]').click();
    cy.get('[data-cy="new-room-button"]').click();
    cy.url().should("eq", "http://localhost:3000/rooms/newroom");
    cy.get('[data-cy="roomType"]').select("Single");
    cy.get('input[value="ac"]').check();
    cy.get('input[value="fridge"]').check();
    cy.get('input[value="butler"]').check();
    cy.get('[data-cy="price"]').type("100");
    cy.get('[data-cy="discount"]').type("10");
    cy.get('[data-cy="roomStatus"]').select("Booked");
    cy.get('[data-cy="floor"]').type("2");
    cy.get('[data-cy="door"]').type("14");
    cy.wait(1000);
    cy.get('[data-cy="SubmitButton"]').click();
    cy.window()
      .its("store")
      .invoke("getState")
      .then((state) => {
        expect(state.rooms.rooms).to.have.length(20);
      });
  });

  it("Wrong Price type", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Rooms"]').should("be.visible");
    cy.get('[data-cy="Rooms"]').click();
    cy.get('[data-cy="new-room-button"]').click();
    cy.url().should("eq", "http://localhost:3000/rooms/newroom");
    cy.get('[data-cy="roomType"]').select("Single");
    cy.get('input[value="ac"]').check();
    cy.get('input[value="fridge"]').check();
    cy.get('input[value="butler"]').check();
    cy.get('[data-cy="price"]').type("a");
    cy.get('[data-cy="discount"]').type("10");
    cy.get('[data-cy="roomStatus"]').select("Booked");
    cy.get('[data-cy="floor"]').type("2");
    cy.get('[data-cy="door"]').type("14");
    cy.wait(1000);
    cy.get('[data-cy="SubmitButton"]').click();
  });

  it("Wrong Discount type", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Rooms"]').should("be.visible");
    cy.get('[data-cy="Rooms"]').click();
    cy.get('[data-cy="new-room-button"]').click();
    cy.url().should("eq", "http://localhost:3000/rooms/newroom");
    cy.get('[data-cy="roomType"]').select("Single");
    cy.get('input[value="ac"]').check();
    cy.get('input[value="fridge"]').check();
    cy.get('input[value="butler"]').check();
    cy.get('[data-cy="price"]').type("100");
    cy.get('[data-cy="discount"]').type("a");
    cy.get('[data-cy="roomStatus"]').select("Booked");
    cy.get('[data-cy="floor"]').type("2");
    cy.get('[data-cy="door"]').type("14");
    cy.wait(1000);
    cy.get('[data-cy="SubmitButton"]').click();
  });
});
