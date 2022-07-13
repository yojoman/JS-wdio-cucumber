const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();
const { expect } = require("chai");

When(/^I open the last letter from Drafts$/, async () => {
  await securePage.openLetterFromDrafts();
});

Then(
  /^I expect Letter contains correct "(.*)" and "(.*)" fields$/,
  async (destination, subject) => {
    await securePage.letterContainsCorrectInfo(destination, subject);
  }
);

Then(/^I expect Email "(.*)" matches defined format$/, async (email) => {
  expect(await securePage.validatedEmail(email)).to.equal(true);
});
