const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const SentPage = require("../pageobjects/sent.page");
const sentPage = new SentPage();

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
  /^I expect to see no more letters are present inside Sent folder$/,
  async () => {
    await sentPage.letterStatusInFolders.waitForDisplayed();

    expect(await sentPage.letterStatusInFolders.getText()).to.equal(
      "No messages found"
    );
  }
);
