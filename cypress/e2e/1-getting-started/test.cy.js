describe("Booking Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/bookings");
  });
  test("Booking delete client succesfull", () => {
    cy.get('[data-cy="deleteButton"]').click();
  });
});
