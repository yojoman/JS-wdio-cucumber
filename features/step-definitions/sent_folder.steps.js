const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const securePage = require("../pageobjects/secure.page");
const sentPage = require("../pageobjects/sent.page");

When(/^I open Sent folder$/, async () => {
  await securePage.sentFolderButton.click();
});

Then(/^I expect to see Letter with "(.*)" subject$/, async (subject) => {
  await sentPage.titleOfFirstLetterFromSent.waitForDisplayed();
  expect(await sentPage.titleOfFirstLetterFromSent.getText()).to.equal(subject);
});
