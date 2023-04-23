import { wait } from "@testing-library/user-event/dist/utils";

describe("User Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("Acces to user", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Users"]').should("be.visible");
    cy.get('[data-cy="Users"]').click();
  });

  it("Delete user", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Users"]').should("be.visible");
    cy.get('[data-cy="Users"]').click();
    cy.get("table tbody tr").then((rowsBefore) => {
      const numRowsBefore = rowsBefore.length;
      cy.get('[data-cy="deleteButtonUser"]:first').click();
      cy.wait(1000);
      cy.get("table tbody tr").then((rowsAfter) => {
        const numRowsAfter = rowsAfter.length;
        expect(numRowsAfter).to.equal(numRowsBefore - 1);
      });
    });
  });

  it("Create a new user", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Users"]').should("be.visible");
    cy.get('[data-cy="Users"]').click();
    cy.get('[data-cy="new-user-button"]').click();
    cy.url().should("eq", "http://localhost:3000/users/newuser");
    cy.get('[data-cy="NewUserFullname"]').type("Mario Herrero");
    cy.get('[data-cy="NewUserEmail"]').type("paco@paco.com");
    cy.get('[data-cy="NewUserPhoneNumber"]').type("123456789");
    cy.get('[data-cy="NewUserJobTitle"]').type("Developer");
    cy.get('[data-cy="NewUserStatus"]').select("active");
    cy.get('[data-cy="SubmitButton"]').click();
    cy.window()
      .its("store")
      .invoke("getState")
      .then((state) => {
        expect(state.users.users).to.have.length(10);
      });
  });

  it("Wrong email", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Users"]').should("be.visible");
    cy.get('[data-cy="Users"]').click();
    cy.get('[data-cy="new-user-button"]').click();
    cy.url().should("eq", "http://localhost:3000/users/newuser");
    cy.get('[data-cy="NewUserFullname"]').type("Mario Herrero");
    cy.get('[data-cy="NewUserEmail"]').type("Esto no es un mail");
    cy.get('[data-cy="NewUserPhoneNumber"]').type("123456789");
    cy.get('[data-cy="NewUserJobTitle"]').type("Developer");
    cy.get('[data-cy="NewUserStatus"]').select("active");
  });
  it("Wrong phone number", () => {
    cy.get('[data-cy="email"]').type("a@a.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="LoginSubmit"]').click();
    cy.get('[data-cy="MenuButton"]').click();
    cy.get('[data-cy="Users"]').should("be.visible");
    cy.get('[data-cy="Users"]').click();
    cy.get('[data-cy="new-user-button"]').click();
    cy.url().should("eq", "http://localhost:3000/users/newuser");
    cy.get('[data-cy="NewUserFullname"]').type("Mario Herrero");
    cy.get('[data-cy="NewUserEmail"]').type("a@a.com");
    cy.get('[data-cy="NewUserPhoneNumber"]').type(
      "Esto no es un numero de telefono"
    );
    cy.get('[data-cy="NewUserJobTitle"]').type("Developer");
    cy.get('[data-cy="NewUserStatus"]').select("active");
  });
});
