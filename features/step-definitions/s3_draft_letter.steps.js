const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^User waits some time$/, async () => {
  await securePage.waitingUntilLetterSaved();
});

Then(/^The letter should be saved automatically$/, async () => {
  await securePage.verifyLetterIsSaved();
});

When(/^User opens 'Drafts' folder$/, async () => {
  await securePage.closeLetter();
  await securePage.openDraftsFolder();
});

Then(
  /^The letter should be present inside the folder with correct "(.+)" subject$/,
  async (subject) => {
    await securePage.verifyLetterInDrafts(subject);
  }
);
