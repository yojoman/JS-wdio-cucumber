const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const draftsPage = require("../pageobjects/drafts.page");
const newLetterPage = require("../pageobjects/new_letter.page");
const sendPage = require("../pageobjects/send.page");

When(/^I click on Send button$/, async () => {
  await newLetterPage.sendLetterButton.waitForDisplayed();
  await newLetterPage.sendLetterButton.click();
});

Then(/^I expect to see "(.*)" text$/, async (text) => {
  await newLetterPage.notificationMessage(text).waitForDisplayed();
  expect(await newLetterPage.notificationMessage(text).isDisplayed()).to.equal(
    true
  );
});

When(/^I open Drafts folder again$/, async () => {
  await draftsPage.draftsFolderButton.waitForDisplayed();
  await draftsPage.draftsFolderButton.click();
});

Then(
  /^I expect "(.*)" text is displayed inside Drafts folder$/,
  async (text) => {
    await draftsPage.letterStatusInFolders(text).waitForDisplayed();
    expect(await draftsPage.letterStatusInFolders(text).isDisplayed()).to.equal(
      true
    );
  }
);

When(/^I open Sent folder$/, async () => {
  await sendPage.sentFolderButton.click();
});

Then(/^I expect to see Letter with "(.*)" subject$/, async (subject) => {
  await sendPage.titleOfFirstLetterFromSent.waitForDisplayed();
  expect(await sendPage.titleOfFirstLetterFromSent.getText()).to.equal(subject);
});
