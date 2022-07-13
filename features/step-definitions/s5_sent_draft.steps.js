const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();

When(/^I click on Send button$/, async () => {
  await securePage.sendLetter();
});

Then(/^I expect Letter is sent$/, async () => {
  await securePage.verifyLetterSent();
});

When(/^I open Drafts folder again$/, async () => {
  await securePage.openDraftsFolder();
});

Then(/^I expect Letter isn't present inside the folder$/, async () => {
  await securePage.verifyNoLettersInDrafts();
});
