describe("Go To Climax Music Empire and Check Links In Header", () => {
  //goes to Climax Music Empire and clicks on the links in the header
  it("click the links in the header", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("News").click();
    cy.url().should("include", "/News");
  });

  it("Click Media in header", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Media").click();
    cy.url().should("include", "/Media");
  });

  it("Click Contact in header", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Contact").click();
  });

  it("Click Events in header", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Events").click();
    cy.url().should("include", "/Events");
  });

  it("Click Artists in header", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Artists").click();
    cy.url().should("include", "/Artists");
  });
});

describe("Check Links In Footer", () => {
  //goes to Climax Music Empire and clicks on the links in the footer
  it("Clicks NEWS in footer", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("NEWS").click();
    cy.url().should("include", "/News");
  });

  it("Click Artists in footer", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Artists").click();
    cy.url().should("include", "/Artists");
  });

  it("Clicks CONTACT US in footer", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("CONTACT US").click();
  });
  it("Clicks EVENTS in footer", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("EVENTS").click();
    cy.url().should("include", "/Events");
  });
});

describe("Click Buttons On Page", () => {
  //goes to Climax Music Empire and click buttons to navigate
  it("Clicks Out artists button on the page", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Our artists").click();
    cy.url().should("include", "/Artists");
  });
});
