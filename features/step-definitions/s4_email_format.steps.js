const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();
const { expect } = require("chai");

When(/^User opens the last letter from Drafts$/, async () => {
  await securePage.openLetterFromDrafts();
});

Then(
  /^Email fields should contain correct "(.+)" and "(.*)" fields$/,
  async (destination, subject) => {
    await securePage.letterContainsCorrectInfo(destination, subject);
  }
);

Then(/^Validate "(.*)" if it matches defined format$/, async (email) => {
  expect(await securePage.validatedEmail(email)).to.equal(true);
});
