const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const sentPage = require("../pageobjects/sent.page");

When(/^I select all letters$/, async () => {
  await sentPage.selectAllCheckBox.click();
});

When(/^I click on Delete button$/, async () => {
  await sentPage.deletePermanentlyButton.click();
});

When(/^I confirm deletion$/, async () => {
  await sentPage.deletePermanentlySubmitButton.waitForDisplayed();
  await sentPage.deletePermanentlySubmitButton.click();
});

Then(
  /^I expect "(.*)" text is displayed inside Sent folder$/,
  async (text) => {
    await sentPage.letterStatusInFolders.waitForDisplayed();
    expect(await sentPage.letterStatusInFolders.getText()).to.equal(text);
  }
);
