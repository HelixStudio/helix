/// <reference types="cypress" />

describe("authentification", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("allows a user to sign up", () => {
    cy.get("body > main > div > div > div > p > a")
      .should("contain.text", "create a new account")
      .click();

    const username = Date.now().toString();
    cy.get("#username").type(username);
    cy.get("#email").type(`${username}@test.cy`);
    cy.get("#password").type(username);

    cy.get(
      "body > main > div > div > form > div:nth-child(3) > button"
    ).click();
  });

  it("allows a user to log in", () => {
    cy.get("#username").type("test_user");
    cy.get("#password").type("123456");

    cy.get(
      "body > main > div > div > form > div:nth-child(3) > button"
    ).click();
  });
});
