describe("Go To Climax Music Empire and Check Links In Header", () => {
  beforeEach(() => {
    //Visit the website
    cy.visit("http://localhost:3000/");
  });
  //goes to Climax Music Empire and clicks on the links in the header
  it("click the links in the header", () => {
    cy.contains("News").click();
    cy.url().should("include", "/News");
  });

  it("Click Media in header", () => {
    cy.contains("Media").click();
    cy.url().should("include", "/Media");
  });

  it("Click Contact in header", () => {
    cy.contains("Contact").click();
  });

  it("Click Events in header", () => {
    cy.contains("Events").click();
    cy.url().should("include", "/Events");
  });

  it("Click Artists in header", () => {
    cy.contains("Artists").click();
    cy.url().should("include", "/Artists");
  });

  //goes to Climax Music Empire and clicks on the links in the footer
  it("Clicks NEWS in footer", () => {
    cy.contains("NEWS").click();
    cy.url().should("include", "/News");
  });

  it("Click Artists in header", () => {
    cy.contains("Artists").click();
    cy.url().should("include", "/Artists");
  });

  it("Clicks CONTACT US in footer", () => {
    cy.contains("CONTACT US").click();
  });
  it("Clicks EVENTS in footer", () => {
    cy.contains("EVENTS").click();
    cy.url().should("include", "/Events");
  });

  //goes to Climax Music Empire and click buttons to navigate
  it("Clicks Out artists button on the page", () => {
    cy.contains("Our artists").click();
    cy.url().should("include", "/Artists");
  });
});
