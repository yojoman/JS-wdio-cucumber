const { When, Then } = require("@wdio/cucumber-framework");
const SecurePage = require("../pageobjects/secure.page");
const securePage = new SecurePage();
const DraftsPage = require("../pageobjects/drafts.page");
const draftsPage = new DraftsPage();
const NewLetterPage = require("../pageobjects/new_letter.page");
const newLetterPage = new NewLetterPage();

When(/^I click on Send button$/, async () => {
  await newLetterPage.sendLetterButton.waitForDisplayed();
  await newLetterPage.sendLetterButton.click();
});

Then(/^I expect Letter is sent$/, async () => {
  await newLetterPage.notificationSentLetter.waitForDisplayed();
  await expect(newLetterPage.notificationSentLetter).toHaveTextContaining("Message sent");
});

When(/^I open Drafts folder again$/, async () => {
  await securePage.draftsFolderButton.waitForDisplayed();
  await securePage.draftsFolderButton.click();
});

Then(/^I expect Letter isn't present inside the folder$/, async () => {
  await draftsPage.letterStatusInFolders.waitForDisplayed();
  await expect(draftsPage.letterStatusInFolders).toHaveTextContaining("No messages found");
});
