import { getHoursFormatted, getIsDay } from "utils/date";

const WAIT_TIME = 1500;

before(() => {
  cy.visit("http://localhost:3000");
});

describe("Clock App", () => {
  it("displays the right time", () => {
    const date = new Date();

    const time = getHoursFormatted(date).split(":"[0] + ":");

    cy.get('[data-testid="hours"]').should("contain", time);
  });

  it("displays the right greeting", () => {
    const date = new Date();

    const isDay = getIsDay(date);

    const greeting = isDay
      ? "Good Morning, it's currently"
      : "Good evening, it's currently";

    cy.get('[data-testid="greeting"]').should("contain", greeting);
  });

  it("displays a quote and its author", () => {
    cy.get('[data-testid="quote"]')
      .invoke("text")
      .then((quote) => {
        expect(quote).not.to.eq("");
      });
    cy.get('[data-testid="author"]')
      .invoke("text")
      .then((author) => {
        expect(author).not.to.eq("");
      });
  });

  it("displays a refresh icon button", () => {
    cy.get('[data-testid="refresh"]').should("be.visible");
  });

  it("refresh the quote and author when refresh icon button is clicked", () => {
    const refreshButton = cy.get('[data-testid="refresh"]');

    cy.get('[data-testid="quote"]')
      .invoke("text")
      .then((quote) => {
        refreshButton.click();
        cy.wait(WAIT_TIME);

        cy.get('[data-testid="quote"]')
          .invoke("text")
          .then((refreshedQuote) => {
            expect(refreshedQuote).not.to.eq(quote);
          });
      });

    cy.get('[data-testid="author"]')
      .invoke("text")
      .then((author) => {
        refreshButton.click();

        cy.wait(WAIT_TIME);

        cy.get('[data-testid="author"]')
          .invoke("text")
          .then((refreshedAuthor) => {
            expect(refreshedAuthor).not.to.eq(author);
          });
      });
  });

  it("displays more button", () => {
    cy.get('[data-testid="show-button"]').should("be.visible");
    cy.get('[data-testid="show-button"]')
      .invoke("text")
      .then((text) => {
        expect(text.toLocaleLowerCase()).to.be.eq("more");
      });
  });

  it("changes button text from more to less, hide quote and show details after click and it reverts changes after clicking again", () => {
    const button = cy.get('[data-testid="show-button"]');
    const quote = cy.get('[data-testid="quote"]');
    const author = cy.get('[data-testid="author"]');
    const details = cy.get('[data-testid="details"]');

    button.click();

    cy.get('[data-testid="show-button"]')
      .invoke("text")
      .then((text) => {
        expect(text.toLocaleLowerCase()).to.be.eq("less");
      });

    quote.should("not.be.visible");
    author.should("not.be.visible");
    details.should("be.visible");

    button.click();

    cy.get('[data-testid="show-button"]')
      .invoke("text")
      .then((text) => {
        expect(text.toLocaleLowerCase()).to.be.eq("more");
      });

    quote.should("be.visible");
    author.should("be.visible");
    details.should("not.be.visible");
  });
});
