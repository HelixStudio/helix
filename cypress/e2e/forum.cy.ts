/// <reference types="cypress" />

describe("forum", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/forum");
  });

  it("requires auth", () => {
    cy.get(
      "body > div > div.flex.flex-col.m-0.h-full.w-full.overflow-hidden.ml-16 > main > div > div > li:nth-child(4) > a"
    ).click();
    cy.get("h2").should("contain.text", "Sign in to your account");
  });
});
