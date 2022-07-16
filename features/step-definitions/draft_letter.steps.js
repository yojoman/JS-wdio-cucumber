const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();
const NewLetterPage = require("../pageobjects/new_letter.page");
const newLetterPage = new NewLetterPage();
const DraftsPage = require("../pageobjects/drafts.page");
const draftsPage = new DraftsPage();

When(/^I wait 3 seconds$/, async () => {
  await newLetterPage.waitingUntilLetterSaved();
});

Then(/^I expect Letter is saved automatically$/, async () => {
  await newLetterPage.verifyLetterIsSaved();
});

When(/^I open Drafts folder$/, async () => {
  await newLetterPage.closeLetter();
  await securePage.openDraftsFolder();
});

Then(
  /^I expect Letter is present inside the folder with correct "(.*)" subject$/,
  async (subject) => {
    await draftsPage.verifyLetterInDrafts(subject);
  }
);
