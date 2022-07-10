const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^User clicks 'Send' button$/, async () => {
  await securePage.sendLetter();
});

Then(/^The letter should be sent$/, async () => {
  await securePage.verifyLetterSent();
});

When(/^User open 'Drafts' folder$/, async () => {
  await securePage.openDraftsFolder();
});

Then(/^The letter shouldn't be present inside the folder$/, async () => {
  await securePage.verifyNoLettersInDrafts();
});
