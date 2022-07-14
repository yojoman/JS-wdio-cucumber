const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();
const DraftsPage = require("../pageobjects/drafts.page");
const draftsPage = new DraftsPage();
const NewLetterPage = require("../pageobjects/new_letter.page");
const newLetterPage = new NewLetterPage();

When(/^I click on Send button$/, async () => {
  await newLetterPage.sendLetter();
});

Then(/^I expect Letter is sent$/, async () => {
  await newLetterPage.verifyLetterSent();
});

When(/^I open Drafts folder again$/, async () => {
  await securePage.openDraftsFolder();
});

Then(/^I expect Letter isn't present inside the folder$/, async () => {
  await draftsPage.verifyNoLettersInDrafts();
});
