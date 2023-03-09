describe("smoke tests", () => {
  it("should display coop", () => {
    cy.visitAndCheck("/");
    cy.findByText("Hello World 🥳");
  });
});
