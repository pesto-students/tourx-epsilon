const lodash = require("lodash");

const {
  WELCOME_MODAL,
  STATE_SELECT,
  WELCOME_HEADER,
  CITY_SELECT,
  SELECT,
  SEARCH,
  CATEGORY_CARD,
  EMAIL,
  PASSWORD,
  CONFIRM_PASWSORD,
  CHECKBOX,
} = require("../pages/LandingPage");

describe("Singup Test", () => {
  it("Signup Should Work", () => {
    cy.visit("/");
    cy.get(WELCOME_MODAL).should("be.visible");
    cy.get(STATE_SELECT).click();
    cy.get(STATE_SELECT).type("Del");
    cy.get(SELECT).contains("Delhi").click();
    cy.get(CITY_SELECT).should("not.be.disabled");
    cy.get(CITY_SELECT).click();
    cy.get(SELECT).contains("Delhi").click();
    cy.get("button").contains("Next").click();
    cy.get(CATEGORY_CARD).contains("Hotels").click();
    cy.get(CATEGORY_CARD).contains("Medical").click();
    cy.get("button").contains("Next").click();
    cy.get(WELCOME_HEADER).contains("Sign up for Tourx");
    cy.get(EMAIL)
      .click({ force: true })
      .type(`krishna${lodash.random(10, 12000)}@gmail.com`);
    cy.get(PASSWORD).click({ force: true }).type(`123456`);
    cy.get(CONFIRM_PASWSORD).click({ force: true }).type(`123456`);
    cy.get(CHECKBOX).eq(0).click();
    cy.get("button").contains("Create Account").click();

    cy.url().should("include", "/");

    cy.contains("My Account");
  });

  it("Signup Form Validation", () => {
    cy.visit("/");
    cy.get(WELCOME_MODAL).should("be.visible");
    cy.get(STATE_SELECT).click();
    cy.get(STATE_SELECT).type("Del");
    cy.get(SELECT).contains("Delhi").click();
    cy.get(CITY_SELECT).should("not.be.disabled");
    cy.get(CITY_SELECT).click();
    cy.get(SELECT).contains("Delhi").click();
    cy.get("button").contains("Next").click();
    cy.get(CATEGORY_CARD).contains("Hotels").click();
    cy.get(CATEGORY_CARD).contains("Medical").click();
    cy.get("button").contains("Next").click();
    cy.get(WELCOME_HEADER).contains("Sign up for Tourx");
    cy.get("button").contains("Create Account").should("be.disabled");
    cy.get(CHECKBOX).eq(0).click();
    cy.get("button").contains("Create Account").click();
    cy.contains("Username and Password are Required");
    cy.get(EMAIL)
      .click({ force: true })
      .type(`krishna${lodash.random(10, 12000)}@gmail.com`);
    cy.get("button").contains("Create Account").click();
    cy.contains("Username and Password are Required");
    cy.get(PASSWORD).click({ force: true }).type(`123456`);
    cy.get(CONFIRM_PASWSORD).click({ force: true }).type(`123452`);
    cy.get("button").contains("Create Account").click();

    cy.contains("Password Didn't Matched");

    cy.get(CONFIRM_PASWSORD)
      .click({ force: true })
      .type("{selectall}")
      .type(`123452`);

    cy.url().should("include", "/");
  });

  it.only("Login Should Work", () => {
    cy.visit("/");
    cy.get(WELCOME_MODAL).should("be.visible");
    cy.contains("Already have an account").click();
    cy.get(EMAIL).click({ force: true }).type(`pesto1@gmail.com`);
    cy.get("button").contains("Login to Tourx").click();
    cy.contains("Username and Password are Required");
    cy.get(PASSWORD).click({ force: true }).type(`123456`);
    cy.get("button").contains("Login to Tourx").click();
    cy.url().should("include", "/");
    cy.contains("My Account");
  });
});
