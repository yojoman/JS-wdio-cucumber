const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^User selects all letters$/, async () => {
  await securePage.sellectAllLetters();
});

When(/^Clicks 'Delete' button$/, async () => {
  await securePage.deleteAllLettersFromSent();
});

When(/^Confirms deletion$/, async () => {
  await securePage.confirmDeletionAllLettersFromSent();
});

Then(/^No more letters should be present inside 'Sent' folder$/, async () => {
  await securePage.verifyLettersNotPresentInSent();
});
