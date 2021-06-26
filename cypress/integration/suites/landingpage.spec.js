const { WELCOME_MODAL, EMAIL, PASSWORD } = require("../pages/LandingPage");

describe("Landing Page Test", () => {
  it("Verfifying Landing Page", () => {
    cy.viewport("macbook-16");
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

    cy.contains("Brightland Resort and Spa");

    cy.wait(3000);
    cy.contains("Explore").click();
    cy.url().should("include", "/places");

    cy.visit("/");
  });

  it("Slider Next Button", () => {
    cy.viewport("macbook-16");
    cy.get('svg[viewBox="0 0 512 512"]').eq(0).click({ force: true });
    cy.contains("Swaswara, Gokarna | Luxury Staycation Deal");
  });

  it("Popular Category Section", () => {
    cy.viewport("macbook-16");
    cy.contains("Popular Categories");
    cy.contains("Hotels").click();
    cy.url().should("contain", "category");
  });

  it("Most Viewed Section", () => {
    cy.viewport("macbook-16");
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

    cy.contains("Most Viewed");
    cy.contains("Eros Hotel").click();
    cy.url().should("contain", "places");
  });

  it("Testinomials Section", () => {
    cy.visit("/");
    cy.contains("Testimonals");
  });
});
