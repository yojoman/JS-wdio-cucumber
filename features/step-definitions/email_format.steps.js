const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const DraftsPage = require("../pageobjects/drafts.page");
const draftsPage = new DraftsPage();
const NewLetterPage = require("../pageobjects/new_letter.page");
const newLetterPage = new NewLetterPage();

When(/^I open the last letter from Drafts$/, async () => {
  await draftsPage.openLetterFromDrafts();
});

Then(
  /^I expect Letter contains correct "(.*)" and "(.*)" fields$/,
  async (destination, subject) => {
    await newLetterPage.letterContainsCorrectInfo(destination, subject);
  }
);

Then(/^I expect Email "(.*)" matches defined format$/, async (email) => {
  expect(await newLetterPage.validatedEmail(email)).to.equal(true);
});
