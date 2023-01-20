describe("Go To Climax Music Empire and Check Links and buttons", () => {
  beforeEach(() => {
    //Visit the website
    cy.visit("http://localhost:3000/");
  });

  // Goes to Climax Music Empire and clicks the links in the header

  it("Clicks Home in header", () => {
    cy.get("header").within(() => {
      cy.get("#headerHome").click();
    });
    cy.url().should("include", "/");
  });

  it("Clicks News in header", () => {
    cy.get("header").within(() => {
      cy.get("#headerNews").click();
    });
    cy.url().should("include", "/News");
  });

  it("Clicks Media in header", () => {
    cy.get("header").within(() => {
      cy.get("#headerMedia").click();
    });
    cy.url().should("include", "/Media");
  });

  it("Clicks Events in header", () => {
    cy.get("header").within(() => {
      cy.get("#headerEvents").click();
    });
    cy.url().should("include", "/Events");
  });

  it("Clicks Artists in header", () => {
    cy.get("header").within(() => {
      cy.get("#headerArtists").click();
    });
    cy.url().should("include", "/Artists");
  });

  //goes to Climax Music Empire and clicks on the links in the footer
  it("Clicks News in footer", () => {
    cy.get("footer").within(() => {
      cy.get("#footerNews").click();
    });
    cy.url().should("include", "/News");
  });

  it("Clicks Artists in footer", () => {
    cy.get("footer").within(() => {
      cy.get("#footerArtists").click();
    });

    cy.url().should("include", "/Artists");
  });

  it("Clicks Events in footer", () => {
    cy.get("footer").within(() => {
      cy.get("#footerEvents").click();
    });

    cy.url().should("include", "/Events");
  });

  //goes to Climax Music Empire and click buttons to navigate

  it("Clicks Our Artists button on the page", () => {
    cy.get("#ourArtistsBtn").click();

    cy.url().should("include", "/Artists");
  });

  it("Clicks More News button on the page", () => {
    cy.get("#moreNewsBtn").click();

    cy.url().should("include", "/News");
  });
});
