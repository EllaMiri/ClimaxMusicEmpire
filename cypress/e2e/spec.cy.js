describe("Go To Climax Music Empire and Check Links and buttons", () => {
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
    cy.url().should("include", "/");
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
    cy.get("footer").within(() => {
      cy.get("#footerNews").click();
    });
    cy.url().should("include", "/News");
    // cy.contains("NEWS").click();
    // cy.location("pathname").should("eq", `/News`);
    // cy.url().should("include", "/News");
  });

  it("Click Artists in footer", () => {
    cy.get("footer").within(() => {
      cy.get("#footerArtists").click();
    });
    cy.contains("Artists").click();

    cy.url().should("include", "/Artists");
    // cy.contains("ARTISTS").click();
    // cy.location("pathname").should("eq", `/Artists`);
  });

  it("Clicks CONTACT US in footer", () => {
    cy.contains("CONTACT").click();
    cy.url().should("include", "/");
  });

  it("Clicks EVENTS in footer", () => {
    cy.contains("EVENTS").click();
    cy.url().should("include", "/Events");
  });

  //goes to Climax Music Empire and click buttons to navigate
  it("Clicks Our artists button on the page", () => {
    cy.contains("Our artists").click();
    cy.url().should("include", "/Artists");
  });

  //goes to Climax Music Empire and clicks on the more news button
  it("Clicks More news button on the page", () => {
    cy.contains("More news").click();
    cy.url().should("include", "/News");
  });

  it("Clicks Contact us button on the page", () => {
    cy.contains("Contact us").click();
    cy.url().should("include", "/");
  });
});
