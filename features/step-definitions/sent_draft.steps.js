const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const securePage = require("../pageobjects/secure.page");
const draftsPage = require("../pageobjects/drafts.page");
const newLetterPage = require("../pageobjects/new_letter.page");

When(/^I click on Send button$/, async () => {
  await newLetterPage.sendLetterButton.waitForDisplayed();
  await newLetterPage.sendLetterButton.click();
});

Then(/^I expect to see "(.*)" text$/, async (text) => {
  await newLetterPage.notificationSentLetter.waitForDisplayed();
  expect(await newLetterPage.notificationSentLetter.getText()).to.equal(text);
});

When(/^I open Drafts folder again$/, async () => {
  await securePage.draftsFolderButton.waitForDisplayed();
  await securePage.draftsFolderButton.click();
});

Then(/^I expect "(.*)" text is displayed inside Drafts folder$/, async (text) => {
  await draftsPage.letterStatusInFolders.waitForDisplayed();
  expect(await draftsPage.letterStatusInFolders.getText()).to.equal(text);
});
