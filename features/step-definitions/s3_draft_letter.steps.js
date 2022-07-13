const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^I wait some time$/, async () => {
  await securePage.waitingUntilLetterSaved();
});

Then(/^I expect Letter is saved automatically$/, async () => {
  await securePage.verifyLetterIsSaved();
});

When(/^I open Drafts folder$/, async () => {
  await securePage.closeLetter();
  await securePage.openDraftsFolder();
});

Then(
  /^I expect Letter is present inside the folder with correct "(.*)" subject$/,
  async (subject) => {
    await securePage.verifyLetterInDrafts(subject);
  }
);
