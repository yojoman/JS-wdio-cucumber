const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^I select all letters$/, async () => {
  await securePage.sellectAllLetters();
});

When(/^I click on Delete button$/, async () => {
  await securePage.deleteAllLettersFromSent();
});

When(/^I confirm deletion$/, async () => {
  await securePage.confirmDeletionAllLettersFromSent();
});

Then(/^I expect to see no more letters are present inside Sent folder$/, async () => {
  await securePage.verifyLettersNotPresentInSent();
});
