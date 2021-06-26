const {
  WELCOME_MODAL,
  STATE_SELECT,
  WELCOME_HEADER,
  CITY_SELECT,
  SELECT,
  SEARCH,
  CATEGORY_CARD,
} = require("../pages/LandingPage");

describe("Landing Page Test", () => {
  it("Is Welcome Modal Visible", () => {
    cy.visit("/");
    cy.get(WELCOME_MODAL).should("be.visible");
  });

  it("Step 1 Should Be there", () => {
    cy.get(WELCOME_HEADER)
      .should("be.visible")
      .contains("Please Select Location");
  });

  it("State Input Should be Focused", () => {
    cy.get(STATE_SELECT).should("be.focused");
  });

  it("City Input Should be Disabled", () => {
    cy.get(CITY_SELECT).should("be.disabled");
  });

  it("State Input Should be clickable", () => {
    cy.get(STATE_SELECT).click();
    cy.contains("Assam");
  });

  it("State Input Should be Typeable", () => {
    cy.visit("/");
    cy.get(STATE_SELECT).click();
    cy.get(STATE_SELECT).type("Del");
    cy.get(SELECT).contains("Delhi").click();
  });

  it("City Input Should Be Enabled", () => {
    cy.get(CITY_SELECT).should("not.be.disabled");
    cy.get(CITY_SELECT).click();
    cy.get(SELECT).contains("Delhi").click();
  });

  it("Next Button Should Work", () => {
    cy.get("button").contains("Next").click();
  });

  it("Step 2 Should Be Visible", () => {
    cy.get(WELCOME_HEADER)
      .should("be.visible")
      .contains("Please Select Preferences");
  });
  it("Previous Button Should Be visible", () => {
    cy.get("button").contains("Previous").should("be.visible");
  });

  it("Input For Search Category Should Be visible and focused", () => {
    cy.get(SEARCH).should("be.visible").should("be.focused");
  });

  it("Selecting Category Should Work", () => {
    cy.get(CATEGORY_CARD).contains("Hotels").click();

    cy.get(CATEGORY_CARD).contains("Medical").click();

    cy.get("button").contains("Next").click();

    cy.get(WELCOME_HEADER).contains("Sign up for Tourx");
  });
});
