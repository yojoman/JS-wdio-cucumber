const { When, Then } = require("@wdio/cucumber-framework");
const SentPage = require("../pageobjects/sent.page");
const sentPage = new SentPage();

When(/^I select all letters$/, async () => {
  await sentPage.sellectAllLetters();
});

When(/^I click on Delete button$/, async () => {
  await sentPage.deleteAllLettersFromSent();
});

When(/^I confirm deletion$/, async () => {
  await sentPage.confirmDeletionAllLettersFromSent();
});

Then(
  /^I expect to see no more letters are present inside Sent folder$/,
  async () => {
    await sentPage.verifyLettersNotPresentInSent();
  }
);
