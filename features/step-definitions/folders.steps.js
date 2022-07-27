const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const foldersPage = require("../pageobjects/folders.page");

When(/^I select all letters$/, async () => {
  await foldersPage.selectAllCheckBox.click();
});

When(/^I click on Delete button$/, async () => {
  await foldersPage.deletePermanentlyButton.click();
});

When(/^I confirm deletion$/, async () => {
  await foldersPage.deletePermanentlySubmitButton.waitForDisplayed();
  await foldersPage.deletePermanentlySubmitButton.click();
});

Then(/^I expect "(.*)" text is displayed inside Sent folder$/, async (text) => {
  await foldersPage.letterStatusInFolders(text).waitForDisplayed();
  expect(await foldersPage.letterStatusInFolders(text).isDisplayed()).to.equal(
    true
  );
});
